const contentConfig = {
  pageName: 'menu',
  header: {
    title: 'menu list',
    btnTitle: 'add menu'
  },
  propList: [
    { label: 'menuName', prop: 'name', width: '180px' },
    { label: 'type', prop: 'type', width: '120px' },
    { label: 'menuURL', prop: 'url', width: '150px' },
    { label: 'menuIcon', prop: 'icon', width: '150px' },
    { label: 'sort', prop: 'sort', width: '120px' },
    { label: 'permission', prop: 'permission', width: '150px' },
    { label: 'createAt', prop: 'createAt' },
    { label: 'updateAt', prop: 'updateAt' },
    { label: 'handle', width: '150px' },
  ],
  childrenTree: {
    rowKey: 'id',
    treeProps: {
      children: 'children'
    }
  }
}

export default contentConfig
