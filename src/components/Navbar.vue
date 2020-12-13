<template>
    <nav class="flex justify-between bg-black p-4">
        <div>
            <a class="text-gray-200 italic text-1x" href="#">Bartholomew</a>
        </div>
        <ul class="flex flex-row">
            <li class="pr-5 text-gray-200"><router-link to="/">Home</router-link> |</li>
            <li class="pr-5 text-gray-200"><router-link to="/about">About</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'NarBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
