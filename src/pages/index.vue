<template>
  <div class="m-auto content">
    <div class="mb-4">
      <Avatar class="m-auto" />
      <h1 class="text-3xl mb-2">
        {{ $t('my.name') }}
      </h1>
      <p class="">
        {{ $t('my.introduce') }}
      </p>
    </div>
    <div class="flex flex-wrap gap-2">
      <Repository
        github
        class="flex-basis-[calc((100%-1rem)/2)]"
        vscode
        name="open-npm"
        vscode-url="https://marketplace.visualstudio.com/items?itemName=micaiguai.micaiguai-open-npm"
        title="Open NPM"
      />
      <Repository class="flex-basis-[calc((100%-1rem)/2)]" github vscode name="vscode-vue-3-snippets" title="Vue 3 Snippets" />
      <Repository class="flex-basis-[calc((100%-1rem)/2)]" github vscode name="vscode-vue-autocomplete" title="Vue 3 Autocomplete" />
      <Repository class="flex-basis-[calc((100%-1rem)/2)]" github home name="mix-icon" title="Mix Icon" />
      <Repository class="flex-basis-[calc((100%-1rem)/2)]" github npm name="selfify" title="Selfify" />
    </div>
  </div>
</template>
