<script setup lang="ts">
useHead({
  title: 'Stater Vue',
  meta: [
    { name: 'description', content: 'Opinionated Vue Starter Template' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})
</script>

<template>
  <div class="h-full bg-base">
    <RouterView />
  </div>
</template>
