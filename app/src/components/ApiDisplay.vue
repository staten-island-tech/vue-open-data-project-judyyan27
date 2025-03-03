<template>
  <h2>{{ pokemon.name }}</h2>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const MVC = ref('')

async function getPokemon() {
  let res = await fetch('https://data.cityofnewyork.us/resource/bm4k-52h4.json')
  let data = await res.json
  MVC.value = data.results
  console.log(data)
}

/* onMounted(() => {
  getPokemon()
}) */
</script>

<style scoped></style>
