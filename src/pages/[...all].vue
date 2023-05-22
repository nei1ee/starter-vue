<script setup lang="ts">
const { t } = useI18n()
const router = useRouter()
</script>

<template>
  <div class="text-center">
    <div class="px-4 pt-10">
      <div class="i-carbon-warning text-5xl text-teal-700 dark:text-gray-200" />
      <p>
        {{ t('not-found') }}
      </p>
    </div>
    <div class="m-3">
      <button
        class="inline-block cursor-pointer rounded bg-teal-700 px-4 py-1 text-white hover:bg-teal-800"
        @click="router.back()"
      >
        Back
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
