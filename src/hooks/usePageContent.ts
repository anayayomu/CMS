import { ref } from "vue"
import type PageContent from '@/components/page-content/page-content.vue'

function usePageCount() {
  const contentRef = ref<InstanceType<typeof PageContent>>()
  function handleQueryClick(queryInfo: any) {
    contentRef.value?.fetchPageList(queryInfo)
  }
  function handleReset() {
    contentRef.value?.fetchPageList()
  }

  return {
    contentRef,
    handleQueryClick,
    handleReset
  }
}

export default usePageCount
