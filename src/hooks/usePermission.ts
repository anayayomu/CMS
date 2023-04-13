import useLoginStore from "@/store/login"

function usePermission(permissionID: string) {
  const loginStore = useLoginStore()
  const { permission } = loginStore

  return !!permission.find(item => item.includes(permissionID))
}

export default usePermission
