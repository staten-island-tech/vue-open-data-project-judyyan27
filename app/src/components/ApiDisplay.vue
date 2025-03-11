<template>
  <h2 v-for="(item, index) in fetchedData" :key="index">
    <span> {{ item.travel_direction }} - {{ item.crash_time }} </span>
  </h2>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const fetchedData = ref([])

async function getData() {
  const res = await fetch('https://data.cityofnewyork.us/resource/bm4k-52h4.json')
  const data = await res.json()
  fetchedData.value = data
  console.log(fetchedData.value)
}
//as soon as website loads, it runs the dataa
onMounted(() => {
  getData()
})
</script>

<style scoped>
h2 {
  font-size: 0.5rem;
}
</style>
