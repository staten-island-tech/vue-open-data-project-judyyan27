<template>
  <h2>{{ data }}</h2>
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
}

onMounted(() => {
  getData()
})
</script>

<style scoped></style>
