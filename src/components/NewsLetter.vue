<script setup></script>

<template>
  <footer class="bg-secondary-100 text-center dark:bg-secondary-600 mt-40">
    <div class="container my-24 mx-auto md:px-6">
      <!-- Section: Design Block -->
      <section class="mb-32 text-center">
        <div class="flex flex-wrap justify-center">
          <div class="text-center lg:w-1/3">
            <div class="mb-6 ">
              <img src="@/assets/message.ico" alt="" />
            </div>

            <h2 class="mb-6 text-3xl font-bold">Подписаться на наши новости</h2>

            <p class="mb-12 text-neutral-500 dark:text-neutral-200">
              Мы будем писать редко и только качественный контент.
            </p>

            <div class="mb-6 flex-row md:mb-0 md:flex">
              <div class="relative mb-3 w-full md:mr-3 md:mb-0" data-te-input-wrapper-init>
                <input
                  type="text"
                  class=" border border-opacity-10 rounded-md p-3 text-center"
                  id="exampleFormControlInput2"
                  placeholder="Введите почту"
                />

              </div>
              <button
                type="submit"
                class="rounded bg-purple-600 px-7 pt-3 pb-2.5 
                text-sm uppercase text-white
                hover:bg-purple-800"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Подписаться
              </button>
            </div>
          </div>
        </div>
      </section>
      <!-- Section: Design Block -->
    </div>


  </footer>
</template>

<style scoped>
.input {
  padding: 15px 10px;
  border-radius: 18px;
  text-align: center;
}

form {
  margin: 15px 0;
  align-self: center;
}
</style>
