<script setup lang="ts">
const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
const { t } = useI18n()

const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}
</script>

<template>
  <div class="px-4 pt-10">
    <div class="text-5xl i-carbon-campsite" />
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
      type="text" autocomplete="false" class="bg-transparent border-base text-center py-2 px-4 w-250px"
      border="~ rounded" outline="none active:none" @keydown.enter="go"
    >
    <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>

    <div class="m-4">
      <button
        class="rounded cursor-pointer bg-teal-700 text-white
        py-1 px-4 inline-block hover:bg-teal-800 disabled:(cursor-default bg-gray-600 opacity-50) " :disabled="!name"
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
