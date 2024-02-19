<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
console.log(route);

defineProps({
  id: {
    type: String,
    required: true
  }
})
</script>








<template>
  <div class="py-10 text-center">

  </div>
  <div class="my-20">
    <div class="flex justify-around">
      <div>
        <img class="rounded-md shadow-md" width="800px" height="auto" src="@/assets/auto.jpg" alt="" />
      </div>

      <div class="border w-4/12">
        <ul>
          <li>Модель</li>
          <li>Бренд</li>
          <li>Цена</li>
          <li>Привод</li>
          <li>Цвет</li>
          <li>Наличие</li>
        </ul>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-2 my-20 px-4 border-t-2 pt-10">
      <img src="@/assets/auto.jpg" alt="" />
      <img src="@/assets/auto.jpg" alt="" />
      <img src="@/assets/auto.jpg" alt="" />
      <img src="@/assets/auto.jpg" alt="" />
    </div>
  </div>

  
</template>

<style scoped></style>
