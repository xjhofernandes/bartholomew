<template>
  <div class="container mx-auto">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <TableJob/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TableJob from '@/components/TableJob.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    TableJob
  }
}
</script>
