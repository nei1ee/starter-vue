<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="px-4 pt-10">
    <div class="text-5xl text-teal-700 i-carbon-warning dark:text-gray-200" />
    <p>
      {{ t('not-found') }}
    </p>
  </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
