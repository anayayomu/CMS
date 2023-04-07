import hyRequest from "..";

export function accountLogin(account: any) {
  return hyRequest.post({
    url: 'http://leju.bufan.cloud/lejuAdmin/index/login',
    data: account
  })
}

export function getUserInfo(id: number) {
  return hyRequest.get({
    url: '/user/' + id
  })
}

export function getUserMenu(id: number) {
  return hyRequest.get({
    url: `/role/${id}/menu`
  })
}
