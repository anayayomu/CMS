import { ref } from "vue"
import type PageModal from '@/components/page-modal/page-modal.vue'

type EditFnType = (data: any) => void

function usePageModal(editCallBack?: EditFnType) {
  const modalRef = ref<InstanceType<typeof PageModal>>()
  function handleNewData() {
    modalRef.value?.setModalDialog()
  }
  function handleEdit(item: any) {
    modalRef.value?.setModalDialog(false, item)
    if (editCallBack) return editCallBack
  }

  return {
    modalRef,
    handleNewData,
    handleEdit
  }
}

export default usePageModal
