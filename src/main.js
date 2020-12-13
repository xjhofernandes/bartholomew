import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
require('@/assets/css/tailwind.css');

createApp(App).use(router).mount('#app')
