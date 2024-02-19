<template>
    <div class="">

        <div class="flex flex-col justify-center items-center ">

            <img src="/public/sad_icon.png" width="320px" height="auto" class="my-10">
            <h1 class="">404</h1>
            <h2>Страница не найдена</h2>
            <p>Перейдите на <RouterLink :to="{ 'name': 'home' }" class="underline">


                    <span class="link-home ">главную</span>


                </RouterLink>
            </p>
        </div>

    </div>
</template>

<style scoped>
.link-home {
    color: rgb(217, 93, 5);
    text-decoration: none;
    font-style: italic;
    font-size: 18px;
}

h1 {
    font-size: 140px;
}

h2 {
    font-size: 36px;
    padding: 20px 0;
}

p {
    font-size: 18px;
}
</style>