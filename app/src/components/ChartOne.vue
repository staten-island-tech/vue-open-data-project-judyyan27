<!-- <template>
  <div class="container">
    <Bar v-if="loaded" :data="chartData" />
  </div>
</template>

<script>
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

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data: () => ({
    loaded: false,
    chartData: null,
  }),
  async mounted() {
    this.loaded = false

    try {
      const { vehicle } = await fetch('https://data.cityofnewyork.us/resource/bm4k-52h4.json')
      this.chartdata = vehicle

      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  },
}
</script>
 -->

<template>
  <div class="container">
    <Bar v-if="loaded" :data="chartData" />
  </div>
</template>

<script>
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

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data: () => ({
    loaded: false,
    chartData: {
      labels: [],
      datasets: [],
    },
  }),
  async mounted() {
    this.loaded = false

    try {
      const response = await fetch('https://data.cityofnewyork.us/resource/bm4k-52h4.json')
      const data = await response.json()

      this.chartData = {
        labels: data.map((item) => item.crash_time || 'Unknown'),
        datasets: [
          {
            label: 'Vehicle Damage',
            data: data.map((item) => parseInt(item.vehicle_damage) || 0),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
        ],
      }

      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  },
}
</script>
