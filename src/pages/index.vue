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
    <div class="gap-2 grid grid-cols-2">
      <Repository show-repo show-vscode name="open-npm" vscode-url="https://marketplace.visualstudio.com/items?itemName=micaiguai.micaiguai-open-npm" title="Open NPM" />
      <Repository show-repo show-vscode name="vscode-vue-3-snippets" title="Vue 3 Snippets" />
      <Repository show-repo show-vscode name="vscode-vue-autocomplete" title="Vue 3 Autocomplete" />
      <Repository show-repo show-web name="mix-icon" title="Mix Icon" />
      <Repository show-repo show-npm name="selfify" title="Selfify" />
    </div>
  </div>
</template>
