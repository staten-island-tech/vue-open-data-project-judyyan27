<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderDisplay from '@/components/HeaderDisplay.vue'
</script>

<template>
  <header>
    <HeaderDisplay />
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Borough</RouterLink>
        <RouterLink to="/factor">Contributing Factors</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
  padding: 1rem;
  display: flex;
  gap: 2rem;
}
</style>
