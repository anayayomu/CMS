import type { IModalConfig } from '@/components/page-modal/type'

const modalConfig: IModalConfig = {
  pageName: 'department',
  header: {
    newTitle: 'new Dep',
    editTitle: 'edit Dep',
  },
  formItem: [
    { type: 'input', label: 'nameDep', prop: 'name', initialValue: '' },
    { type: 'input', label: 'leader', prop: 'leader' },
    {
      type: 'select', label: 'boss', prop: 'parentId', options: []
    },
  ]
}

export default modalConfig
