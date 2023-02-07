<script setup lang="ts">
const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()
const { t } = useI18n()

const go = () => {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div class="px-4 pt-10">
    <div class="i-carbon-campsite text-5xl" />
    <p>
      <a rel="noreferrer" href="https://github.com/zguolee/starter-vue" target="_blank">
        Starter Vue
      </a>
    </p>
    <p class="py-4">
      <em class="text-sm opacity-75">{{ t('intro.desc') }}</em>
    </p>
    <input
      id="input" v-model="name" :placeholder="t('intro.whats-your-name')" :aria-label="t('intro.whats-your-name')"
      type="text" autocomplete="false" class="w-250px bg-transparent px-4 py-2 text-center border-base"
      border="~ rounded" outline="none active:none" @keydown.enter="go"
    >
    <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>

    <div class="m-4">
      <button
        class="inline-block cursor-pointer rounded bg-teal-700 px-4 py-1 text-white disabled:(cursor-default bg-gray-600 opacity-50) hover:bg-teal-800" :disabled="!name"
        @click="go"
      >
        {{ t('button.go') }}
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>

<route lang="yaml">
meta:
  layout: home
</route>
