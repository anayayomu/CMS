import { getDashboardData } from "@/service/main/analysis/dashboard";
import { defineStore } from "pinia";

interface IAnalysis {
  amountAnalysis: any[]
}

const useAnalysisStore = defineStore('analysis', {
  state: (): IAnalysis => ({
    amountAnalysis: []
  }),
  actions: {
    async fetchAnalysisData() {
      const resultGet = await getDashboardData()
      this.amountAnalysis = resultGet.data
    }
  }
})

export default useAnalysisStore
