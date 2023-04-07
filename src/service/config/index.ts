
// export const BASE_URL = "http://codercba.com:8000"
// export const TIME_OUT = 10000

let BASE_URL = ''
if (import.meta.env.NODE_ENV === 'development') {
  BASE_URL = '/api'; // 在vue.config.js的devServer中配置将 /api 替换为域名，解决跨域
} else if (import.meta.env.NODE_ENV === 'production') {
  BASE_URL = 'http://leju.bufan.cloud';
} else {
  BASE_URL = 'http://leju.bufan.cloud';
}


export const TIME_OUT = 10000
export { BASE_URL }
