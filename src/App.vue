<script setup>
import { RouterView, RouterLink } from 'vue-router'
import Header from '@/components/Header.vue'
import FeedBack from './components/FeedBack.vue';
import Footer from './components/Footer.vue'

</script>

<template>
  <div class="app">
    <main class="bg-white w-11/12 mx-auto my-16 rounded-2xl shadow-2xl shadow-grey-300  min-h-screen ">

      <Header />
      <RouterView />


      <Footer />
    </main>
    
  </div>
</template>

<style scoped>
.app {
  background-color: rgb(238, 113, 55);
  min-height: 90vh;
  overflow: hidden;

}
</style>

