<template>
  <div class="chart">
    <Bar v-if="dataset.length > 0" :data="chartData" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

// Register the necessary
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const props = defineProps({
  dataset: Array,
})

const chartData = computed(() => ({
  labels: props.dataset.map((item) => item.borough),
  datasets: [
    {
      label: 'Number of Crashes For Each Borough',
      data: props.dataset.map((item) => item.count),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
}))
</script>

<style scoped>
.chart {
  height: 100rem;
}
</style>
