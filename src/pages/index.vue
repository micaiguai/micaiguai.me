<script setup lang="ts">

</script>

<template>
  <div class="content m-auto">
    <div class="mb-4">
      <Avatar class="m-auto" />
      <h1 class="text-5xl mb-2">
        Micaiguai
      </h1>
      <p class="">
        Hi! I'm Micaiguai, a Fullstack Developer.
      </p>
    </div>
    <div class="flex flex-wrap gap-2">
      <Repository github vscode name="vscode-vue-3-snippets" title="Vue 3 Snippets" />
      <Repository github vscode name="open-npm" title="Open NPM" />
      <Repository github vscode name="vscode-vue-autocomplete" title="Vue 3 Autocomplete" />
      <Repository github home name="mix-icon" title="Mix Icon" />
      <Repository github npm name="selfify" title="Selfify" />
    </div>
  </div>
</template>
