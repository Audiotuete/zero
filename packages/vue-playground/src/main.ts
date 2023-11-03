import "./assets/main.css"
import { ComponentLibrary } from "vue-zero"

import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router"

const app = createApp(App)

app.use(ComponentLibrary)
app.use(createPinia())
app.use(router)

app.mount("#app")
