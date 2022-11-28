<template>
  <div
    id="signInButton"
    @click="signInOut"
  >
    <div class="google-logo">
      <img src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg" alt="google-logo">
    </div>
    <span class="text">
      <span v-if="!authStore.loggedInUser.uid">
        Googleでサインイン
      </span>
      <span v-else>
        サインアウト
      </span>
    </span>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */
export interface ISignInButtonProps {
  modelValue: any;
}

/* -- store -- */
const authStore = useAuthStore()

/* -- props, emit -- */
/* const props = withDefaults(defineProps<ISignInButtonProps>(), {
  modelValue: false
}) */

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */
const signInOut = () => {
  if (authStore.loggedInUser.uid) {
    authStore.trySignOut()
  } else {
    authStore.trySignIn()
  }
}

/* -- watch -- */

/* -- life cycle -- */
</script>

<style lang="scss" scoped>
#signInButton {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 40px;

  font-size: 14px;
  font-weight: 600;

  color: #FFFFFF;
  background-color: #4285F4;
  box-sizing: border-box;
  border-radius: 6px;
  border: solid 1px #4285F4;
  cursor: pointer;

  .text {
    margin-right: 1em;
  }

  .google-logo {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    height: 36px;
    width: 36px;
    margin: 2px;
    margin-right: 1em;

    border-radius: 4px;
    background-color: #FFFFFF;

    img {
      width: 18px;
    }
  }
}
</style>
