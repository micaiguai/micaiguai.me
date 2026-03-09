<script setup lang="ts">
import { getIconUrl, getNpmUrl, getRepoUrl, getVscodeUrl, getWebUrl } from '@/utils/url'

export interface Props {
  name: string
  title: string
  username?: string
  showNpm?: boolean
  showVscode?: boolean
  showRepo?: boolean
  showWeb?: boolean
  npmUrl?: string
  repoUrl?: string
  vscodeUrl?: string
  iconUrl?: string
  webUrl?: string
}

const props = withDefaults(defineProps<Props>(), {
  username: 'micaiguai',
})

const npmUrl = computed(() => props.npmUrl || getNpmUrl(props.username))
const repoUrl = computed(() => props.repoUrl || getRepoUrl(props.username, props.name))
const vscodeUrl = computed(() => props.vscodeUrl || getVscodeUrl(props.username, props.name))
const iconUrl = computed(() => props.iconUrl || getIconUrl(props.username, props.name))
const webUrl = computed(() => props.webUrl || getWebUrl(props.username, props.name))
</script>

<template>
  <div class="p-2 rounded flex gap-2 ring ring-gray-300 items-stretch">
    <img class="size-12" :src="iconUrl">
    <div class="flex flex-col justify-between">
      <div>{{ title }}</div>
      <div class="flex gap-2">
        <Link v-if="props.showWeb" :href="webUrl" class="hover:text-black hover:dark:text-white !hover:border-black !hover:dark:border-white">
          <div class="i-mdi:earth" />
        </Link>
        <Link v-if="props.showRepo" :href="repoUrl" class="hover:text-black hover:dark:text-white !hover:border-black !hover:dark:border-white">
          <div class="i-mdi:github" />
        </Link>
        <Link v-if="props.showNpm" :href="npmUrl" class="hover:text-[#ea2039] !hover:border-[#ea2039]">
          <div class="i-mdi:npm-variant" />
        </Link>
        <Link v-if="props.showVscode" :href="vscodeUrl" class="hover:text-[#0078D4] !hover:border-[#0078D4]">
          <div class="i-mdi:microsoft-visual-studio-code" />
        </Link>
      </div>
    </div>
  </div>
</template>
