<template>
<button @click="openModal" class="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 float-right">Add Job</button>
  <div v-if="status.active" class="fixed z-10 inset-0 overflow-y-auto">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
            <svg class="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
              Add a job
            </h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">
                Need a help to set a specified cron value? Acess <a class="text-green-600 text-base font-medium hover:text-green-700" target="_blank" href="http://www.cronmaker.com/;jsessionid=node06e8g4otqx18l1sytqy0uuug8n415398.node0?0">Cron Maker</a> to make your cron expression.
              </p>
            </div>
            <div class="mt-2">
              <p>Name:</p>
              <input class="bg-gray-100 focus:ring-2 focus:ring-gray-300 rounded-md h-8 text-2xl" type="text">
            </div>
            <div class="mt-2">
              <p>Endpoint:</p>
              <input class="bg-gray-100 focus:ring-2 focus:ring-gray-300 rounded-md h-8 text-2xl" type="text">
            </div>

            <div class="mt-2">
              <p>Method:</p>
              <select class="bg-gray-100 focus:ring-2 focus:ring-gray-300 rounded-md h-8" v-model="selected">
                <option disabled value="">Please select one</option>
                <option v-for="option in options" :key="option" :value="option.value">
                  {{ option.text }}
                </option>
              </select>
            </div>

            <div class="mt-2">
              <p>Cron Expression:</p>
              <input class="bg-gray-100 focus:ring-2 focus:ring-gray-300 rounded-md h-8 text-2xl" type="text">
            </div>
            <div class="mt-2">
              <p>Criticality:</p>
              <select class="bg-gray-100 focus:ring-2 focus:ring-gray-300 rounded-md h-8" v-model="critical" required>
                <option disabled value="">Please select one</option>
                <option v-for="criticality in criticalitys" :key="criticality" :value="criticality.value">
                  {{ criticality.text }}
                </option>
              </select>
            </div>
          </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
            Save
          </button>
          <button @click="closeModal"  type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'ModalAddJob',
  data() {
    return {
      selected: 'get',
      options: [
        { text: 'GET', value: 'get' },
        { text: 'POST', value: 'post' }
      ],
      critical: 'high',
      criticalitys: [
        {text : 'High', value: 'high'},
        {text : 'Medium', value: 'medium'},
        {text : 'Low', value: 'low'}
      ]
    }
  },
  setup(){
  const status = reactive({
      active : false
    });

    function openModal() {
      status.active = true;
    }

    function closeModal() {
      status.active = false;
    }

    return {openModal, status, closeModal}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
