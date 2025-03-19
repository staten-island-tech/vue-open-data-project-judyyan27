<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'
import HeaderDisplay from './components/HeaderDisplay.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <HeaderDisplay></HeaderDisplay>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
