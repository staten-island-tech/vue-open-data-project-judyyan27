<template>
  <h2 v-for="(item, index) in fetchedData" :key="index">
    <span> {{ item.crash_date }} - {{ item.vehicle_type }} </span>
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

onMounted(() => {
  getData()
})
</script>

<!-- <template>
  <h2>{{ data }}</h2>
  <ul>
    <li v-for="(data, index) in cart" :key="index">
      <span> {{ data.crash_date }} - ${{ data.vehicle_type }} </span>
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const data = ref('')

async function getData() {
  let res = await fetch('https://data.cityofnewyork.us/resource/bm4k-52h4.json')
  let data = await res.json()
  data.value = data.results
  console.log(data)
  /* data.forEach((item) => {
    console.log(item.unqique_id)
  }) */
}

onMounted(() => {
  getData()
})
</script> -->

<style scoped></style>
