<template>
  <h2>{{ data }}</h2>
  <ul>
    <li v-for="(data, index) in cart" :key="index">
      <span> {{ data.crash_date }} - ${{ data.vehicle_typw }} </span>
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
</script>

<style scoped></style>
