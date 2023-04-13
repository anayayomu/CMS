import hyRequest from "@/service";

export function getDashboardData() {
  return hyRequest.get({
    url: '/goods/amount/list'
  })
}
