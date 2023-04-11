import { ref } from "vue"
import type PageModal from '@/components/page-modal/page-modal.vue'

function usePageModal() {
  const modalRef = ref<InstanceType<typeof PageModal>>()
  function handleNewData() {
    modalRef.value?.setModalDialog()
  }
  function handleEdit(item: any) {
    modalRef.value?.setModalDialog(false, item)
  }

  return {
    modalRef,
    handleNewData,
    handleEdit
  }
}

export default usePageModal
