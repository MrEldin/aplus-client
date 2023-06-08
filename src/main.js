import { createApp } from 'vue'
import App from './App.vue'
import './assets/app.css'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'http://api.eldin.me'
axios.defaults.withCredentials = true

createApp(App).use(PerfectScrollbar, {
    watchOptions: true,
    options: {
        wheelSpeed: 1,
        swipeEasing: true,
    }
}).use(router).use(store).mount('#app')
