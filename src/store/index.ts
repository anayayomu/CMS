import { createPinia } from 'pinia'
import useLoginStore from './login'
import type { App } from 'vue'

const pinia = createPinia()

function registerStore(app: App<Element>) {
  app.use(pinia)
  const loginStore = useLoginStore()
  loginStore.loadLocalAccount()
}

export default registerStore
