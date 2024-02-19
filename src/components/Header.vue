<script setup>

</script>



<template>
  <div class="header font-sans ">
    <div class="">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between py-4">
          <div class="flex items-center">
            <RouterLink :to="{ 'name': 'home' }" class="">
              <img src="@/assets/default.png" width="150px" height="130px"
              class="avatar">
            </RouterLink>
            <div>
              <div class="text-xl font-bold uppercase">Vue Cars</div>
              <div class="text-slate-400">Forward to technology</div>
            </div>
          </div>

          <div class="hidden sm:flex sm:items-center">
            <p class="text-gray-800 font-semibold no-underline px-4 py-2 
              rounded-lg hover:text-orange-600">
              <RouterLink :to="{ 'name': 'cars' }" class="">Автомобили</RouterLink>
            </p>
            <p class="text-gray-800 font-semibold no-underline px-4 py-2 
              rounded-lg hover:text-orange-600">
              <RouterLink :to="{ 'name': 'feedback' }" class="">Заказать звонок</RouterLink>
            </p>
            <p class="text-gray-800 font-semibold no-underline px-4 py-2 
              rounded-lg hover:text-orange-600">
              <RouterLink :to="{ 'name': 'faq' }" class="">FAQ</RouterLink>
            </p>
            <p class="text-gray-800 font-semibold no-underline px-4 py-2 
              rounded-lg hover:text-orange-600">
              <RouterLink :to="{ 'name': 'about' }" class="">О нас</RouterLink>
            </p>
          </div>

          <div class="hidden sm:flex sm:items-center">
            <p class="text-gray-800  font-semibold hover:text-orange-600 mr-4 ">
              <RouterLink :to="{ 'name': 'login' }" class="">Войти</RouterLink>
            </p>

            <p class="text-gray-800 font-semibold border px-4 py-2 
              rounded-lg hover:text-orange-600 hover:border-orange-600">
              <RouterLink :to="{ 'name': 'signup' }" class="">Регистрация</RouterLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.router-link-exact-active {
  color: rgb(250, 134, 3);
  text-decoration: none;
  font-size: 16px;
}

.header {
  font-size: 16px;
}



</style>