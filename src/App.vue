<template>
  <div class="text-sm text-gray-600 pb-2 flex flex-col h-dvh dark:text-gray-300 dark:bg-black">
    <Navbar />
    <div class="px-4 flex-1">
      <main class="mb-20">
        <RouterView />
      </main>
    </div>
  </div>
</template>
