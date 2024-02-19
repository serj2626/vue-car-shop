<script setup>

</script>

<template>
    <div class="max-w-7xl  mx-auto grid grid-cols-2 gap-4 py-6 bg-gray-100 px-6 rounded-md">
        <div class="main-left shadow-sm">
            <div class="p-12 bg-white border border-gray-200 rounded-lg">
                <h1 class="mb-6 text-2xl">Регистрация</h1>

                <p class="mb-6 text-gray-500">
                    Пожалуйста, заполните все обязательные поля формы для регистрации.
                </p>
                <p class="font-bold">
                    Уже зарегистрированы? <RouterLink :to="{'name': 'login'}" 
                    class="underline">Кликните здесь</RouterLink>  для входа!
                </p>
            </div>
            <div>
                <img class=" h-auto mt-10 rounded-md mx-auto border" src="@/assets/auto.jpg" alt="">
            </div>
        </div>

        <div class="main-right">
            <div class="p-12 bg-white border border-gray-200 rounded-lg shadow-sm">
                <form class="space-y-6">
                    <div>
                        <label>Имя</label><br>
                        <input type="text" placeholder=" Ваше имя"
                            class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg">
                    </div>

                    <div>
                        <label>Почта</label><br>
                        <input type="email" placeholder=" Ваша почта"
                            class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg">
                    </div>

                    <div>
                        <label>Пароль</label><br>
                        <input type="password"  placeholder="Ваш пароль"
                            class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg">
                    </div>

                    <div>
                        <label>Повторите пароль</label><br>
                        <input type="password" placeholder=" Повторите ваш пароль"
                            class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg">
                    </div>



                    <div>
                        <button class="py-4 px-6 bg-orange-500 text-white rounded-lg hover:bg-orange-700">Создать аккаунт</button>
                    </div>
                </form>
        </div>
    </div>
</div></template>