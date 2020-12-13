<template>
  <div class="container mx-auto">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ModalAddJob/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ModalAddJob from '@/components/ModalAddJob.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    ModalAddJob
  }
}
</script>
