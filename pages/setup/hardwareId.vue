<template>
  <div id="hardwareId">
    <TextField
      v-model:model-value="mac"
      label-text="コンポストトイレのmacアドレス"
      placeholder="例）00:00:5e:00:53:00"
    />
    <TextField
      v-model:model-value="pass"
      type="password"
      label-text="パスワード"
      placeholder="コンポストトイレに設定したパスワード"
    />
    <Button
      icon="leak_add"
    >
      連携する
    </Button>
  </div>
</template>

<script lang="ts" setup>
/* -- type, interface -- */

/* -- store -- */

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const mac = ref('')
const pass = ref('')

/* -- function -- */

/* -- watch -- */

/* -- life cycle -- */
definePageMeta({
  title: 'コンポストトイレとの連携',
  text: 'あなたのコンポストをこのアカウントと連携します。コンポストトイレに記載されている「macアドレス」と、設定されている「パスワード」を入力してください'
})
</script>

<style lang="scss" scoped>
#hardwareId {
  display: flex;
  flex-flow: column;
  align-items: center;
}
</style>
