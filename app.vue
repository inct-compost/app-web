<template>
  <div>
    <NuxtWelcome />
    {{ msg }}
  </div>
</template>

<script lang="ts" setup>
import { registerSW } from 'virtual:pwa-register'

registerSW()
const msg = ref('hello')
</script>
