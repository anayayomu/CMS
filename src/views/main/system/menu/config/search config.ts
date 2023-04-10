const searchConfig = {
  formItem: [
    {
      type: 'input',
      prop: 'name',
      label: 'department',
      initialValue: 11
    },
    {
      type: 'input',
      prop: 'leader',
      label: 'boss'
    },
    {
      type: 'date-picker',
      prop: 'createAt',
      label: 'createAt'
    },
    {
      type: 'select',
      prop: 'enable',
      label: 'select',
      options: [
        { label: 'start', value: 1 },
        { label: 'end', value: 0 }
      ]
    },
  ]
}

export default searchConfig
