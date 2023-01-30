import { initializeApp } from 'firebase/app'
import { enableIndexedDbPersistence, getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: 'AIzaSyBS5YJp8t7SMdQK-A3h8kW8gIdQy0iRzdM',
    authDomain: 'research2022-5j.firebaseapp.com',
    projectId: 'research2022-5j',
    storageBucket: 'research2022-5j.appspot.com',
    messagingSenderId: '264448243728',
    appId: '1:264448243728:web:185992a8adf4d2bc7cf295',
    measurementId: 'G-10M1JPMG9T'
  }

  const app = initializeApp(firebaseConfig)

  const firestore = getFirestore(app)

  // connectFunctionsEmulator(functions, 'localhost', 5001)

  enableIndexedDbPersistence(firestore)
    .catch((err) => {
      if (err.code === 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled
        // in one tab at a a time.
        // ...
      } else if (err.code === 'unimplemented') {
        // The current browser does not support all of the
        // features required to enable persistencey
        // ...
      }
    })
})
