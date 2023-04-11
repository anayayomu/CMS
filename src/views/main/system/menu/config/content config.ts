const contentConfig = {
  pageName: 'department',
  header: {
    title: 'department',
    btnTitle: 'new'
  },
  propList: [
    { type: 'selection', label: 'select', width: '80px' },
    { type: 'index', label: 'index', width: '80px' },

    { type: 'normal', label: 'depName', prop: 'name', width: '150px' },
    { type: 'normal', label: 'leader', prop: 'leader', width: '150px' },
    { type: 'normal', label: 'boss', prop: 'parentId', width: '150px' },

    { type: 'custom', label: 'boss', prop: 'parentId', width: '150px', slotName: 'parent' },
    { type: 'custom', label: 'leader', prop: 'leader', width: '150px', slotName: 'leader' },

    { type: 'timer', label: 'createAt', prop: 'createAt' },
    { type: 'timer', label: 'updateAt', prop: 'updateAt' },

    { type: 'handle', label: 'handle' },
  ]
}

export default contentConfig
