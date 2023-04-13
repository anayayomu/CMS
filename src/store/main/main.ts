import { defineStore } from "pinia";
import { getEntireRoles, getEntireDepartment, getEntireMenus } from '@/service/main/main'

interface IMainState {
  entireRoles: any[],
  entireDepartment: any[],
  entireMenus: any[]
}

const useMainStore = defineStore('main', {
  state: (): IMainState => ({
    entireRoles: [],
    entireDepartment: [],
    entireMenus: []
  }),
  actions: {
    async fetchEntireData() {
      const rolesResult = await getEntireRoles()
      const departmentResult = await getEntireDepartment()
      const menuResult = await getEntireMenus()

      this.entireRoles = rolesResult.data.list
      this.entireDepartment = departmentResult.data.list
      this.entireMenus = menuResult.data.list
    }
  }
})

export default useMainStore
