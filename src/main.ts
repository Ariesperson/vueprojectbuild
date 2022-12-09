import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import { useCounterStore } from '@/stores/index'

createApp(App).use(router).mount('#app')
