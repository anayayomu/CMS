export interface IModalConfig {
  pageName: string
  header: {
    newTitle: string
    editTitle: string
  }
  formItem: any[]
}

export interface IModalProps {
  modalConfig: {
    header: {
      newTitle: string
      editTitle: string
    }
    formItem: any[]
  }
}
