<template>
  <div>
    <h2>Motor Vehicle Crashes by Borough</h2>
    <ChartOne :dataset="boroughData" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import ChartOne from '@/components/ChartOne.vue'

const boroughData = ref([])

async function acquireCrashData() {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/h9gi-nx95.json')
    const data = await response.json()

    const crashesByBorough = data.reduce((acc, item) => {
      const borough = item.borough || 'Unknown' // Handle cases where borough is missing
      if (!acc[borough]) {
        acc[borough] = 0
      }
      acc[borough] += 1
      return acc
    }, {})

    boroughData.value = Object.entries(crashesByBorough).map(([borough, count]) => ({
      borough,
      count,
    }))
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

onMounted(() => {
  acquireCrashData()
})
</script>

<style scoped>
h2 {
  padding: 1rem;
  color: rgb(47, 48, 107);
}
</style>
