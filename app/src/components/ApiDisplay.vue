<template>
  <div class="card" v-for="(item, index) in fetchedData" :key="index">
    <h1>Crash Time and Vehicle Damage:</h1>
    <h2 class="item">{{ item.crash_time }} -- {{ item.vehicle_damage }}</h2>
  </div>
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
  font-size: 2rem;
}
.card {
  border-radius: 1rem;
  border-width: 1rem;
  width: 20rem;
  height: 15rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1rem groove;
  border-color: rgb(60, 27, 67);
}
</style>
