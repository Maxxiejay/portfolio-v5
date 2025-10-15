import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import AOS from 'aos'
import { configure } from "vue-gtag";
import 'aos/dist/aos.css'
import './style.css'
import './assets/font-awesome-6-pro-main/css/all.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
configure({
  tagId: "G-ZSX7795JMC"
})
app.use(AOS)
app.mount('#app')
