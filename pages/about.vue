<template>
  <div id="about">
    about
    <Button
      to="signIn"
      icon="login"
    >
      サインイン画面へ
    </Button>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
definePageMeta({
  title: 'About',
  middleware: [ 'auth' ]
})
</script>

<style lang="scss" scoped>
#about {

}
</style>
