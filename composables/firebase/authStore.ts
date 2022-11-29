import {
  getAuth,
  signInWithPopup,
  signOut,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
  GoogleAuthProvider,
  User
} from 'firebase/auth'
import { IloggedInUser } from '~/types/composables/firebase/loggedInUserInterface'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
  const googleProvider = new GoogleAuthProvider()
  const auth = getAuth()

  /* -- state -- */
  /**
   * 現在ログイン中のユーザー情報
   */
  const loggedInUser = reactive<IloggedInUser>({
    name: null,
    email: null,
    uid: null,
    photoURL: null
  })

  const isLoggedIn = ref<boolean>(false)

  /* -- mutation -- */
  const updateLoggedInUser = ({ name, email, uid, photoURL }: IloggedInUser) => {
    loggedInUser.email = email
    loggedInUser.name = name
    loggedInUser.photoURL = photoURL
    loggedInUser.uid = uid
  }

  const updateIsLoggedIn = (state: boolean) => {
    isLoggedIn.value = state
  }

  /* -- action -- */
  /**
   * Googleアカウントを用いたログイン処理
   */
  const trySignIn = () => {
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        return signInWithPopup(auth, googleProvider).then((result) => {
          // const credential = TwitterAuthProvider.credentialFromResult(result)
          // const token = credential?.accessToken
          const user = result.user
          updateLoggedInUser({
            name: user.displayName,
            email: user.email,
            uid: user.uid,
            photoURL: user.photoURL
          })
          updateIsLoggedIn(true)
        }).catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          const email = error.email
          updateIsLoggedIn(false)
          console.error('error code:', errorCode, 'error message:', errorMessage, 'your email:', email)
        })
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        updateIsLoggedIn(false)

        console.error('ERROR: firebase/auth \n errorCode', errorCode, '\nerrorMessage', errorMessage)
      })
  }

  /**
   * ログアウト処理
   */
  const trySignOut = () => {
    signOut(auth).then(() => {
      updateLoggedInUser({
        name: null,
        email: null,
        uid: null,
        photoURL: null
      })
      updateIsLoggedIn(false)
      router.go(0)
    }).catch((error) => {
      console.log(error)
    })
  }

  /**
   * middleware用 ログイン状態取得
   */
  const checkAuthState = async () => {
    const checkState = () => new Promise<User | null>((resolve, reject) => {
      if (process.server) { return resolve(null) }
      onAuthStateChanged(auth,
        user => resolve(user || null),
        error => reject(error)
      )
    })

    try {
      const user = await checkState()
      updateLoggedInUser({
        name: user!.displayName,
        email: user!.email,
        uid: user!.uid,
        photoURL: user!.photoURL
      })
      updateIsLoggedIn(true)

      return user
    } catch (error) {
      updateLoggedInUser({
        name: null,
        email: null,
        uid: null,
        photoURL: null
      })
      updateIsLoggedIn(false)
    }
  }

  /* -- other -- */
  // ログイン状態を常時監視
  onAuthStateChanged(auth, (user) => {
    if (user) {
      updateLoggedInUser({
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        photoURL: user.photoURL
      })
      updateIsLoggedIn(true)
    } else {
      updateLoggedInUser({
        name: null,
        email: null,
        uid: null,
        photoURL: null
      })
      updateIsLoggedIn(false)
    }
  })

  return {
    loggedInUser: readonly(loggedInUser),
    isLoggedIn: readonly(isLoggedIn),
    trySignIn,
    trySignOut,
    checkAuthState
  }
})
