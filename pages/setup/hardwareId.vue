<template>
  <div id="hardwareId">
    <TextField
      v-model:model-value="mac"
      label-text="コンポストトイレのmacアドレス"
      placeholder="例）00:00:5e:00:53:00"
    />
    <TextField
      v-model:model-value="id"
      label-text="コンポストトイレのID"
      placeholder="例）GzD6ozqHvypv67VKkT4e"
    />
    <TextField
      v-model:model-value="pass"
      type="password"
      label-text="パスワード"
      placeholder="コンポストトイレに設定したパスワード"
    />
    <Button
      icon="leak_add"
      :disabled="isSubmitting"
      @click="submit"
    >
      連携する
    </Button>
  </div>
</template>

<script lang="ts" setup>
import { getFunctions, httpsCallable } from 'firebase/functions'

/* -- type, interface -- */

/* -- store -- */

/* -- props, emit -- */

/* -- variable(ref, reactive, computed) -- */
const functions = getFunctions()
const addHardwareId = httpsCallable(functions, 'addHardwareId')

const mac = ref('')
const id = ref('')
const pass = ref('')
const isSubmitting = ref(false)

/* -- function -- */
const submit = () => {
  isSubmitting.value = true

  addHardwareId({
    mac,
    id,
    password: pass
  }).then(() => {
    isSubmitting.value = false

    navigateTo('/', { replace: true })
  }).catch((err) => {
    isSubmitting.value = false
    console.error(err)
  })
}

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
