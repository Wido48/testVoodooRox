import './assets/styles/global.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import {initializeApp} from './services/initialization.service.js'
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
initializeApp()
app.mount('#app')
