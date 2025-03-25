<template>
  <div class="chart">
    <h2>Contributing Factors to Crashes</h2>
    <Pie v-if="chartData.datasets[0].data.length > 0" :data="chartData" />
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, ArcElement)

const factorData = ref([])

// Function to fetch and process crash data
async function fetchCrashData() {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/h9gi-nx95.json')
    const data = await response.json()

    // Count occurrences of each contributing factor
    const factorCounts = data.reduce((acc, item) => {
      const factor = item.contributing_factor_vehicle_1 || 'Unknown'
      acc[factor] = (acc[factor] || 0) + 1
      return acc
    }, {})

    let sortedFactors = Object.entries(factorCounts).sort((a, b) => b[1] - a[1])

    const topFactors = sortedFactors.slice(0, 5)
    const otherCount = sortedFactors.slice(5).reduce((sum, [, count]) => sum + count, 0)

    if (otherCount > 0) {
      topFactors.push(['Other', otherCount])
    }
    factorData.value = topFactors.map(([factor, count]) => ({ factor, count }))
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

// Computed property for chart data
const chartData = computed(() => ({
  labels: factorData.value.map((item) => item.factor),
  datasets: [
    {
      label: 'Number of Crashes',
      backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff', '#ff9f40'],
      data: factorData.value.map((item) => item.count),
    },
  ],
}))

onMounted(() => {
  fetchCrashData()
})
</script>

<style scoped>
.chart {
  height: 50rem;
}
h2 {
  padding: 1rem;
  color: rgb(73, 47, 107);
}
</style>
