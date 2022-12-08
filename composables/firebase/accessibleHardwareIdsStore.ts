import { doc, getDoc, getFirestore } from 'firebase/firestore'

export const useAccessibleHardwareIdsStore = defineStore('accessibleHardwareIds', () => {
  const db = getFirestore()
  const authStore = useAuthStore()

  /* -- state -- */
  const accessibleHardwareIdList = ref<Array<string>>([])

  /* -- mutation -- */
  const pushtToIdList = (id: string) => {
    accessibleHardwareIdList.value.push(id)
  }

  const initAccessibleHardwareIdList = () => {
    accessibleHardwareIdList.value = []
  }

  /* -- action -- */
  const getAccessibleHardwareIds = async () => {
    if (authStore.isLoggedIn) {
      const docRef = doc(db, 'userData', authStore.loggedInUser.uid!)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        initAccessibleHardwareIdList()
        docSnap.data().hardwareIds.forEach((id: string) => {
          pushtToIdList(id)
        })

        // console.log('Document data:', accessibleHardwareIdList.value)
      } else {
        // doc.data() will be undefined in this case
        initAccessibleHardwareIdList()
      }
    } else {
      console.log('Please login')
    }
  }

  /* -- other -- */

  return {
    accessibleHardwareIdList: readonly(accessibleHardwareIdList),
    pushtToIdList,
    getAccessibleHardwareIds
  }
})
