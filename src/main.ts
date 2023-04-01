import { createApp } from 'vue'
import App from './App.vue'
import "normalize.css"

import './assets/css/index.less'
import router from './router'
import pinia from './store'
import registerIcon from './global/register-icon'

createApp(App).use(router).use(pinia).use(registerIcon).mount('#app')
