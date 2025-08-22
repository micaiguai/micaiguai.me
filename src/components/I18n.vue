<script setup lang="ts">
import { i18n, languageLabels, languages } from '@/locales'

const languageIndex = ref(0)

function onClick() {
  languageIndex.value = (languageIndex.value + 1) % languages.length
  const language = languages[languageIndex.value]!
  i18n.global.locale.value = language
}
</script>

<template>
  <div
    class="trigger flex gap-1 items-center"
    @click="onClick"
  >
    <div class="i-mdi:earth cursor-pointer" />
    <div class="text-gray-400">
      {{ languageLabels[languageIndex] }}
    </div>
  </div>
</template>
