import { ref } from "vue"
import type PageModal from '@/components/page-modal/page-modal.vue'

type EditFnType = (data?: any) => void

function usePageModal(newCallBack: EditFnType, editCallBack?: EditFnType) {
  const modalRef = ref<InstanceType<typeof PageModal>>()
  function handleNewData() {
    modalRef.value?.setModalDialog()
    if (newCallBack) newCallBack()
  }
  function handleEdit(item: any) {
    modalRef.value?.setModalDialog(false, item)
    if (editCallBack) editCallBack(item)
  }

  return {
    modalRef,
    handleNewData,
    handleEdit
  }
}

export default usePageModal
