<script setup>
import { RouterLink } from 'vue-router'
import { reactive, ref, onMounted } from 'vue'
import axios from 'axios'

const cars = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get('https://5321c339217f5b06.mokky.dev/cars')
    cars.value = data
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <div class="bg-white w-11/12 mx-auto my-20 py-3 px-5">
    <div class="">
      <div class="flex justify-between items-center my-10">
        <h1 class="text-3xl font-bold mx-auto">Наши автомобили</h1>
      </div>

      <div class="grid grid-cols-4 gap-3">
        <div v-for="car in cars" :key="car.id">
          <div
            class="rounded-md overflow-hidden shadow-md my-10 border-spacing-4 pt-3 cursor-pointer hover:-translate-y-1 hover:shadow-2xl hover:border-gray-500"
          >
            <img class="object-cover h-48 w-96" :src="car.img" alt="Forest" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{{ car.brand }} {{ car.model }}</div>

              <p class="text-gray-700 text-base">
                Автомобиль {{ car.brand }} {{ car.model }} продается в нашем магазине по цене
                {{ car.price }} рублей.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="me-9 mb-2">
                <RouterLink
                  :to="{
                    name: 'car',
                    params: { id: car.id }
                  }"
                >
                  <button class="py-2 px-3 bg-orange-500 text-white rounded-lg hover:bg-orange-700">
                    Подробнее
                  </button>
                </RouterLink>
              </span>

              <span
                class="inline-block hover:text-red-500 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >#{{ car.brand }}</span
              >
              <span
                class="inline-block hover:text-red-500 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >#{{ car.model }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
