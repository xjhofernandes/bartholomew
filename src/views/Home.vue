<template>
  <div class="container mx-auto">
    <img alt="Vue logo" src="../assets/logo.png">
    <ModalAddJob/>
    <TableJobs/>
  </div>
</template>

<script>
// @ is an alias to /src
import ModalAddJob from '@/components/ModalAddJob.vue'
import TableJobs from '@/components/TableJobs.vue'

export default {
  name: 'Home',
  components: {
    ModalAddJob,
    TableJobs
  },
}
</script>
