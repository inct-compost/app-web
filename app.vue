<template>
  <div>
    <NuxtWelcome />
    {{ msg }}
  </div>
</template>

<script lang="ts" setup>
const msg = ref('hello')

</script>
