
import { local } from "@/utils/cache";
import { BASE_URL, TIME_OUT } from "./config";
import HYRequest from "./request";
import { TOKEN } from "@/global/content";

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn(config) {
      const token = local.getCache(TOKEN)
      if (config.headers) {
        config.headers.Authorization = 'Bearer' + token
      }
      return config
    },
  }
})

export default hyRequest
