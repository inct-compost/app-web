<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
import { registerSW } from 'virtual:pwa-register'

registerSW()
</script>
