import type { RouteRecordRaw } from "vue-router";

export let firstMenu: any = null
export function mapMenuRoutes(userMenu: any[]) {
  const localRoute: RouteRecordRaw[] = []
  const files: Record<string, any> = import.meta.glob('../router/main/**/*.ts', { eager: true })
  for (const key in files) {
    const module = files[key]
    localRoute.push(module.default)
  }

  const routes: RouteRecordRaw[] = []
  for (const menu of userMenu) {
    for (const subMenu of menu.children) {
      const route = localRoute.find(item => item.path === subMenu.url)
      if (route) {
        if (!routes.find(item => item.path === menu.url)) {
          routes.push({ path: menu.url, redirect: route.path })
        }
        routes.push(route)
      }
      if (!firstMenu && route) firstMenu = subMenu
    }
  }
  return routes
}

/**
 * 根据路径匹配需要显示的菜单
 * @param path 需要匹配的路径
 * @param userMenu 所有菜单
*/
export function mapPathMenu(path: string, userMenu: any[]) {
  for (const menu of userMenu) {
    for (const subMenu of menu.children) {
      if (subMenu.url === path) {
        return subMenu
      }
    }
  }
}

interface IBreakcrumb {
  name: string,
  path?: string
}
export function mapPathCrumb(path: string, userMenu: any[]) {
  const breakcrumbs: IBreakcrumb[] = []
  for (const menu of userMenu) {
    for (const subMenu of menu.children) {
      if (subMenu.url === path) {
        breakcrumbs.push({ name: menu.name })
        breakcrumbs.push({ name: subMenu.name, path: subMenu.url })
      }
    }
  }
  return breakcrumbs
}

/**
 * 菜单映射到id的列表
 * @param menuList
*/
export function mapMenuList(menuList: any[]) {
  const ids: number[] = []

  function recurseGetId(menus: any[]) {
    for (const item of menus) {
      if (item.children) {
        recurseGetId(item.children)
      } else {
        ids.push(item.id)
      }
    }
  }
  recurseGetId(menuList)

  return ids
}

/**
 * 按钮权限映射
*/
export function mapMenuListPermission(menuList: any[]) {
  const permission: string[] = []

  function recurseGetPermission(menus: any[]) {
    for (const item of menus) {
      if (item.type === 3) {
        permission.push(item.permission)
      } else {
        recurseGetPermission(item.children ?? [])
      }
    }
  }
  recurseGetPermission(menuList)

  return permission
}
