import {
  collection,
  DocumentChange,
  DocumentData,
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
  const getSensingData = async (collectionId: string | 'now') => {
    if (authStore.isLoggedIn) {
      let docRef = collection(db, 'sensingData', '0MkJJN50KeAeELphQgEq', collectionId)
      if (!collectionId || collectionId === 'now') {
        docRef = collection(db, 'sensingData', '0MkJJN50KeAeELphQgEq', todayCollectionName.value)
      }
      const docSnap = await getDocs(docRef)

      docSnap.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data())
      })
    }
  }

  /**
   * 今日の分のセンシングデータをリアルタイムで取得する
   */
  const onSnapshotSensingData = () => {
    console.log(todayCollectionName.value)
    const q = query(collection(db, 'sensingData', '0MkJJN50KeAeELphQgEq', todayCollectionName.value))
    onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          addSendingData(generateGotDataToSensingData(change))
          // console.log('added:', change.doc.ref.path, change.doc.data())
        }
        if (change.type === 'modified') {
          // console.log('modified:', change.doc.id, change.doc.data())
        }
        if (change.type === 'removed') {
          // console.log('removed:', change.doc.id, change.doc.data())
        }
      })
    })
  }

  /* -- other -- */
  /**
   * 今日のセンシングデータを保存しているコレクションのPathを生成する
   */
  const todayCollectionName = computed(() => {
    const today = new Date()
    return today.getFullYear().toString() + ('0' + (today.getMonth() + 1)).slice(-2) + ('0' + today.getDate()).slice(-2)
  })

  /**
   * firestore から取得したデータをフロント上で扱うための値を追加して返す
   * @param documentData onSnapshot で取得したデータ
   * @returns センシングデータ
   */
  const generateGotDataToSensingData = (documentData: DocumentChange<DocumentData>): ISensingData => {
    const docRefPath = documentData.doc.ref.path.split('/')
    const yearMonthDay = docRefPath[2]
    const hourMinute = docRefPath[3]

    return {
      id: yearMonthDay + hourMinute,
      year: yearMonthDay.substring(0, 4),
      month: yearMonthDay.substring(4, 6),
      day: yearMonthDay.substring(6, 8),
      hour: hourMinute.substring(0, 2),
      minute: hourMinute.substring(2, 5),
      addedDate: documentData.doc.data().date,
      temperature: Math.round(documentData.doc.data().temperature * 10) / 10,
      waterAmount: Math.round(documentData.doc.data().humidity * 10) / 10
    }
  }

  // リアルタイムの更新を取得する
  onSnapshotSensingData()

  return {
    sensingDataList: readonly(sensingDataList),
    todayCollectionName,
    addSendingData,
    getSensingData,
    onSnapshotSensingData
  }
})
