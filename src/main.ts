import { createApp } from 'vue'
import App from './App.vue'
import "normalize.css"

import './assets/css/index.less'
import router from './router'
import registerIcon from './global/register-icon'
import store from './store'

const app = createApp(App)
app.use(registerIcon)
app.use(store)
app.use(router)

app.mount('#app')

