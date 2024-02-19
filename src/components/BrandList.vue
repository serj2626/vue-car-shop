<script setup>
import { ref } from 'vue'

const brands = ref([
  {
    id: 1,
    name: 'Kia',
    img: '/public/brands/kia.png'
  },
  {
    id: 2,
    name: 'Chery',
    img: '/public/brands/chery.jpg'
  },
  {
    id: 3,
    name: 'Geely',
    img: '/public/brands/geely.jpg'
  },
  {
    id: 4,
    name: 'Haval',
    img: '/public/brands/haval.png'
  },
  {
    id: 5,
    name: 'Omoda',
    img: '/public/brands/omoda.png'
  },
  {
    id: 6,
    name: 'Hundai',
    img: '/public/brands/hundai.png'
  }
])



</script>



<template>
  <div class="bg-white w-6/12 mx-auto rounded-xl shadow-xl shadow-grey-200 mt-20">
    <div class="grid grid-cols-3 gap-3">
      <div v-for="brand in brands" :key="brand.id">
        <img class="object-cover w-full" :src="brand.img" alt="Brand" />
      </div>
    </div>
  </div>
</template>


<style scoped></style>