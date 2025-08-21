<script setup lang='ts'>
import { useDark } from '@vueuse/core'

const isDark = useDark()
function toggleDark() {
  isDark.value = !isDark.value
}
</script>

<template>
  <a class="trigger cursor-pointer select-none" title="Toggle Color Scheme" @click="toggleDark">
    <span class="i-ri:sun-line dark:i-ri:moon-line" />
  </a>
</template>
