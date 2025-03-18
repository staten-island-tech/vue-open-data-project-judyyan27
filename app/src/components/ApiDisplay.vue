<template>
  <div class="card" v-for="(item, index) in fetchedData" :key="index">
    <h2 class="item">
      Crash Date: {{ item.crash_date ? item.crash_date : 'N/A' }}
      Crash Time:
      {{ item.crash_time ? item.crash_time : 'N/A' }}
      State Registration: {{ item.state_registration ? item.state_registration : 'N/A' }} Vehicle
      Type: {{ item.vehicle_type ? item.vehicle_type : 'N/A' }} Travel Directions:
      {{ item.travel_direction ? item.travel_direction : 'N/A' }}
      Vehicle Occupants:
      {{ item.vehicle_occupants ? item.vehicle_occupants : 'N/A' }}
      Driver Gender:
      {{ item.driver_sex ? item.driver_sex : 'N/A' }}
      Driver License Status:
    </h2>
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
/* .card {
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
} */
.card {
  height: fit-content;
  width: 30rem;
  background-color: aliceblue;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  text-transform: uppercase;
}
</style>
