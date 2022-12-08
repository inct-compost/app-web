export default defineNuxtRouteMiddleware(async () => {
  if (!process.server) {
    const authStore = useAuthStore()
    const accessibleHardwareIdsStore = useAccessibleHardwareIdsStore()

    await authStore.checkAuthState()

    if (authStore.loggedInUser.uid === null) {
      return navigateTo('/signIn', { replace: true })
    } else {
      await accessibleHardwareIdsStore.getAccessibleHardwareIds()

      if (accessibleHardwareIdsStore.accessibleHardwareIdList.length === 0) {
        return navigateTo('/setup/hardwareId', { replace: true })
      }
    }
  }
})
