<template>
    <nav class="flex justify-between bg-black p-5">
        <ul class="flex flex-row items-center ">
            <li><img class="h-12 pr-5" alt="Vue logo" src="../assets/logo.svg"></li>
            <li><a class="text-gray-200 font-mono italic text-2xl" href="#">Bartholomew</a></li>
        </ul>
        <ul class="flex flex-row items-center ">
            <li class="pr-5 text-gray-200"><router-link to="/">Home</router-link></li>
            <li class="pr-5 text-gray-200"><router-link to="/about">About</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
