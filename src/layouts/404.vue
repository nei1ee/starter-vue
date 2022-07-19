<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <main class="h-full text-center color-base">
    <RouterView />
    <div class="m-3">
      <button
        class="rounded cursor-pointer bg-teal-700 text-white
        py-1 px-4 inline-block hover:bg-teal-800" @click="router.back()"
      >
        {{ t('button.back') }}
      </button>
    </div>
  </main>
</template>
