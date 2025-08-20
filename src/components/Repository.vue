<script setup lang="ts">
const props = withDefaults(defineProps<{
  name: string
  title: string
  author?: string
  npm?: boolean
  vscode?: boolean
  github?: boolean
  home?: boolean
}>(), {
  author: 'micaiguai',
  npm: false,
  vscode: false,
  github: false,
  home: false,
})

const npmUrl = computed(() => {
  return `https://www.npmjs.com/package/${props.name}`
})
const githubUrl = computed(() => {
  return `https://github.com/${props.author}/${props.name}`
})
const vscodeUrl = computed(() => {
  return `https://marketplace.visualstudio.com/items?itemName=${props.author}.${props.name}`
})
const iconUrl = computed(() => {
  return `https://raw.githubusercontent.com/${props.author}/${props.name}/refs/heads/main/assets/icon.png`
})
const homeUrl = computed(() => {
  return `https://micaiguai.github.io/${props.name}`
})
</script>

<template>
  <div class="p-2 rounded flex gap-2 ring ring-gray-300 items-stretch">
    <img class="size-12" :src="iconUrl" alt="">
    <div class="flex flex-col justify-between">
      <div class="">
        {{ title }}
      </div>
      <div class="flex gap-2">
        <Link v-if="props.npm" :href="npmUrl" class="hover:text-[#ea2039] !hover:border-[#ea2039]">
          <div class="i-mdi:npm-variant" />
        </Link>
        <Link v-if="props.github" :href="githubUrl" class="hover:text-black !hover:border-black">
          <div class="i-mdi:github" />
        </Link>
        <Link v-if="props.vscode" :href="vscodeUrl" class="hover:text-[#0078D4] !hover:border-[#0078D4]">
          <div class="i-mdi:microsoft-visual-studio-code" />
        </Link>
        <Link v-if="props.home" :href="homeUrl" class="hover:text-black !hover:border-black">
          <div class="i-mdi:home" />
        </Link>
      </div>
    </div>
  </div>
</template>
