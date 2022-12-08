<template>
  <div id="signIn" :class="displayType">
    <div class="title">
      <div class="title-text">
        <p>このアプリを使用することでコンポストトイレをより簡単に管理できます</p>
        <p v-if="(displayType === 'lp' || displayType === 'pc')">
          ログインしてダッシュボードにアクセスしましょう！
        </p>
      </div>
      <img
        src="~/assets/screenshots/dashboard-screenshot.png"
        alt="dashboard-screenshot"
        class="screenshot"
      >
    </div>
    <div class="content">
      <div class="content-title">
        <Icon
          icon="login"
          size="2rem"
          :style="{
            marginRight: '1rem'
          }"
        />
        <h3>
          ログイン・アカウント作成
        </h3>
      </div>
      <p class="content-sub-title">
        Googleアカウントと連携することでパスワードレスでログイン可能です<br>
        既に登録済みの方も、初めて利用する方も下の「Googleでサインイン」を押してログインを行ってください
      </p>
      <SignInButton />
    </div>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */
const authStore = useAuthStore()
const colorStore = useColorStore()

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const { displayType } = displayStatus()

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
  position: relative;
  width: 100%;
  height: 100%;

  .title {
    position: relative;
    padding: 1em;

    background-color: v-bind("colorStore.color.white.default");
    overflow: hidden;

    p {
      margin-top: 0px;

      font-size: 1.25rem;
      font-weight: 500;
    }

    .title-text {
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translateX(-50%);
    }

    .screenshot {
      position: absolute;
      height: 100vmin;
      bottom: -50vmin;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .content {
    align-self: center;
    justify-self: center;

    padding: 1em;

    .content-title {
      display: inline-flex;
      align-items: center;

      h1 {
        margin-left: 1rem;
      }
    }

    .content-sub-title {
      margin-top: 0px;
      margin-bottom: 2rem;

      color: v-bind("colorStore.color.theme.subText");
    }
  }

  &.lp, &.pc {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .title {
      grid-column: 1;
    }
  }

  &.sm {
    display: grid;
    grid-template-rows: 1fr 1fr;

    .title {
      p {
        margin-top: 0px;

        font-size: 1rem;
        font-weight: 500;
      }
    }
  }
}
</style>
