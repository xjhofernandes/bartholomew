<template>
  <div class="container mx-auto">
    <img alt="Vue logo" src="../assets/logo.png">
    <ModalAddJob/>
  </div>
</template>

<script>
// @ is an alias to /src
import ModalAddJob from '@/components/ModalAddJob.vue'

export default {
  name: 'Home',
  components: {
    ModalAddJob
  },
}
</script>
