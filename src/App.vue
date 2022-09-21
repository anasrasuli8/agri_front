<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Navbar from './components/Navbar.vue';
</script>

<template>
    <div class="h-screen max-w-[40rem] mx-auto">
      <RouterView />
      <Navbar v-if="$route.meta.showNav"/>
    </div>
</template>

<style scoped>

</style>
