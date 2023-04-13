const contentConfig = {
  pageName: 'role',
  header: {
    title: 'role list',
    btnTitle: 'new role'
  },
  propList: [
    { type: 'selection', label: 'select', width: '80px' },
    { type: 'index', label: 'index', width: '80px' },
    { type: 'normal', label: 'roleName', prop: 'name', width: '180px' },
    { type: 'normal', label: 'roleDesc', prop: 'intro', width: '180px' },
    { type: 'timer', label: 'createAt', prop: 'createAt' },
    { type: 'timer', label: 'updateAt', prop: 'updateAt' },
    { type: 'handler', label: 'handle', width: '180px' },
  ]
}

export default contentConfig
