<script setup lang="ts">
import type { Language } from '@/locales'
import { hideAllPoppers, Dropdown as VDropdown } from 'floating-vue'
import { i18n, languages } from '@/locales'

function onClick(language: Language) {
  i18n.global.locale.value = language
  hideAllPoppers()
}
</script>

<template>
  <VDropdown>
    <div class="trigger">
      <div class="i-mdi:earth cursor-pointer" />
    </div>
    <template #popper>
      <div
        class="dark:bg-black"
      >
        <div
          v-for="language in languages"
          :key="language"
          class="text-sm text-gray-600 px-1 py-.5 b-b-gray-300 cursor-pointer dark:text-gray-300 not-last-b-b-1 hover:bg-gray/30"
          @click="onClick(language)"
        >
          {{ language }}
        </div>
      </div>
    </template>
  </VDropdown>
</template>

<style>
html.dark .v-popper__inner {
  --at-apply: bg-gray-300
}
html.dark .v-popper__arrow-inner {
  --at-apply: b-black
}
html.dark .v-popper__arrow-outer {
  --at-apply: b-gray-300
}
</style>
