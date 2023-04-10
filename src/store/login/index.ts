import { defineStore } from "pinia";
import { accountLogin, getUserInfo, getUserMenu } from "@/service/login";
import { local } from "@/utils/cache";
// import router from "@/router";
import { TOKEN } from "@/global/content";
import { mapMenuRoutes } from "@/utils/mapMenu";
import router from "@/router";
import useMainStore from "../main/main";

interface ILoginState {
  token: string
  userInfo: any,
  userMenu: any
}

const useLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    token: local.getCache(TOKEN) ?? '',
    userInfo: local.getCache('userInfo') ?? {},
    userMenu: local.getCache('userMenu') ?? {}
  }),
  actions: {
    async loginData(account: any) {
      const res = await accountLogin(account)
      const id = res.data.id
      const name = res.data.name
      local.setCache(TOKEN, res.data.token)
      console.log(name);
      const userInfoResult = await getUserInfo(id)
      this.userInfo = userInfoResult.data
      const useMenuResult = await getUserMenu(this.userInfo.role.id)
      this.userMenu = useMenuResult.data

      local.setCache('userInfo', this.userInfo)
      local.setCache('userMenu', this.userMenu)

      //登录之后立即请求role和department的数据
      const mainStore = useMainStore()
      mainStore.fetchEntireData()

      const routes = mapMenuRoutes(this.userMenu)
      routes.forEach(route => router.addRoute('main', route))

      // router.push('/main')
    },
    loadLocalAccount() {
      const token = local.getCache(TOKEN)
      const userInfo = local.getCache('userInfo')
      const userMenu = local.getCache('userMenu')
      if (token && userInfo && userMenu) {
        this.token = token
        this.userInfo = userInfo
        this.userMenu = userMenu

        //刷新后再次请求role和department的数据
        const mainStore = useMainStore()
        mainStore.fetchEntireData()

        const routes = mapMenuRoutes(userMenu)
        routes.forEach(route => router.addRoute('main', route))
      }
    }
  }
})

export default useLoginStore
