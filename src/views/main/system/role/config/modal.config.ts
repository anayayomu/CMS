const modalConfig = {
  pageName: 'role',
  header: {
    newTitle: 'new role',
    editTitle: 'edit role',
  },
  formItem: [
    { type: 'input', label: 'roleName', prop: 'name' },
    { type: 'input', label: 'roleDesc', prop: 'intro' },
    { type: 'custom', slotName: 'menuList' },
  ]
}

export default modalConfig
