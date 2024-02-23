//Default import
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//Router import
import router from './router'
//bootstrap import
import  'bootstrap'
import  'bootstrap/dist/css/bootstrap.min.css'

createApp(App)
.use(router)
.mount('#app')