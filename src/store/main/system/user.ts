import {
  delPageData,
  delUser,
  editUserData,
  postNewUser,
  postPageListData,
  postUserList,
  pageNewData,
  editPageData
} from "@/service/main/system/system";
import { defineStore } from "pinia";

interface ISystem {
  userList: any[],
  userTotalCount: number,
  pageList: any[],
  pageTotalCount: number
}
const useSystemStore = defineStore('system', {
  state: (): ISystem => ({
    userList: [],
    userTotalCount: 0,
    pageList: [],
    pageTotalCount: 0
  }),
  actions: {
    // get data
    async getPostUserList(queryInfo: any) {
      const res = await postUserList(queryInfo)
      const { totalCount, list } = res.data
      this.userTotalCount = totalCount
      this.userList = list
    },

    // delete data
    async delUserById(id: number) {
      const deleteResult = await delUser(id)
      console.log(deleteResult);
      this.getPostUserList({ offset: 0, size: 10 })
    },

    // new data
    async postNewUserData(userInfo: any) {
      const newUser = await postNewUser(userInfo)
      console.log(newUser);
      this.getPostUserList({ offset: 0, size: 10 })
    },

    // edit data
    async patchEditUserDate(id: number, userInfo: any) {
      const editResult = await editUserData(id, userInfo)
      console.log(editResult);
      this.getPostUserList({ offset: 0, size: 10 })
    },

    /** page add del edit search*/
    async postPageList(pageName: string, queryInfo: any) {
      const pageList = await postPageListData(pageName, queryInfo)
      const { totalCount, list } = pageList.data
      this.pageList = list
      this.pageTotalCount = totalCount
    },
    async delPageList(pageName: string, id: number) {
      const pageList = await delPageData(pageName, id)
      console.log(pageList);
      this.postPageList(pageName, { offset: 0, size: 10 })

    },
    async newPageData(pageName: string, pageInfo: any) {
      const resultAdd = await pageNewData(pageName, pageInfo)
      console.log(resultAdd);
      this.postPageList(pageName, { offset: 0, size: 10 })
    },
    async editPageInfo(pageName: string, id: number, pageInfo: any) {
      const resultAdd = await editPageData(pageName, id, pageInfo)
      console.log(resultAdd);
      this.postPageList(pageName, { offset: 0, size: 10 })
    }
  }
})

export default useSystemStore
