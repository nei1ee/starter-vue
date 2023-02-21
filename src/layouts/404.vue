<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main class="text-center">
    <RouterView />
    <div class="m-3">
      <button
        class="inline-block cursor-pointer rounded bg-teal-700 px-4 py-1 text-white hover:bg-teal-800"
        @click="router.back()"
      >
        Back
      </button>
    </div>
  </main>
</template>
