import {
  collection,
  getDocs,
  getFirestore,
  onSnapshot,
  query
} from 'firebase/firestore'
import { ISensingData, sensingDataListType } from '~/types/composables/firebase/sensingDataList'

export const useSensingDataStore = defineStore('sensingData', () => {
  const db = getFirestore()
  const authStore = useAuthStore()

  /* -- state -- */
  /**
   * センシングデータ配列
   */
  const sensingDataList = ref<sensingDataListType>([])

  /* -- mutation -- */
  /**
   * sensingDataList に引数のセンシングデータを追加する
   * @param sensingData センシングデータ
   */
  const addSendingData = (sensingData: ISensingData) => {
    sensingDataList.value.push(sensingData)
  }

  /* -- action -- */
  /**
   * センシングデータを1回取得する
   */
  const getSensingData = async () => {
    if (authStore.isLoggedIn) {
      const docRef = collection(db, 'sensingData', '0MkJJN50KeAeELphQgEq', '20221118')
      const docSnap = await getDocs(docRef)

      docSnap.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data())
      })
    }
  }

  /**
   * センシングデータをリアルタイムの更新を取得する
   */
  const onSnapshotSensingData = () => {
    if (authStore.isLoggedIn) {
      const q = query(collection(db, 'sensingData', '0MkJJN50KeAeELphQgEq', '20221118'))
      onSnapshot(q, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            console.log('added:', change.doc.ref.path, change.doc.data())
          }
          if (change.type === 'modified') {
            console.log('modified:', change.doc.id, change.doc.data())
          }
          if (change.type === 'removed') {
            console.log('removed:', change.doc.id, change.doc.data())
          }
        })
      })
    }
  }

  /* -- other -- */
  const todayCollectionName = computed(() => {
    const today = new Date()
    return today.getFullYear().toString() + today.getMonth().toString() + today.getDay().toString
  })

  return {
    sensingDataList: readonly(sensingDataList),
    todayCollectionName,
    addSendingData,
    getSensingData,
    onSnapshotSensingData
  }
})
