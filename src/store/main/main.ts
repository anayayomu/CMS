import { defineStore } from "pinia";
import { getEntireRoles, getEntireDepartment } from '@/service/main/main'

interface IMainState {
  entireRoles: any[],
  entireDepartment: any[]
}

const useMainStore = defineStore('main', {
  state: (): IMainState => ({
    entireRoles: [],
    entireDepartment: []
  }),
  actions: {
    async fetchEntireData() {
      const rolesResult = await getEntireRoles()
      const departmentResult = await getEntireDepartment()
      this.entireRoles = rolesResult.data.list
      this.entireDepartment = departmentResult.data.list
    }
  }
})

export default useMainStore
