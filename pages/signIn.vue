<template>
  <div id="signIn">
    signIn
    <SignInButton />
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const authStore = useAuthStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
if (authStore.loggedInUser.uid) {
  useRouter().push('/')
}

definePageMeta({
  title: 'Sign In',
  layout: 'no-nav-bar'
})
</script>

<style lang="scss" scoped>
#signIn {

}
</style>
