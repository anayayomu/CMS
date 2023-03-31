
import type { AxiosRequestConfig } from "axios"

export interface HYRequestConfig extends AxiosRequestConfig {
  interceptors?: {
    requestSuccessFn?: (config: any) => any
    requestFailFn?: (err: any) => any
    responseSuccessFn?: (res: any) => any
    responseFailFn?: (err: any) => any
    headers?: any
  }
}
