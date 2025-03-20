<script setup>
import ApiDisplay from '@/components/ApiDisplay.vue'
import HeaderDisplay from '@/components/HeaderDisplay.vue'
import ChartOne from '@/components/ChartOne.vue'
</script>

<template>
  <HeaderDisplay />
  <div class="container"><ApiDisplay /></div>
  <ChartOne />
</template>

<style scoped>
.container {
  padding: 2rem;
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 100rem;
  height: 80rem;
  align-self: flex-start;
}
</style>
