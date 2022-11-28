export default defineNuxtRouteMiddleware(async () => {
  if (!process.server) {
    const authStore = useAuthStore()
    await authStore.checkAuthState()
    if (authStore.loggedInUser.uid === null) {
      return navigateTo('/signIn', { replace: true })
    }
  }
})
