<script setup lang="ts">
const props = defineProps<{ name: string }>()
const router = useRouter()
const user = useUserStore()
const { t } = useI18n()

watchEffect(() => {
  user.setNewName(props.name)
})
</script>

<template>
  <div class="px-4 pt-10">
    <div class="text-5xl i-carbon-pedestrian" />

    <p>
      {{ t('intro.hi', { name: props.name }) }}
    </p>

    <p class="py-4">
      <em class="text-sm opacity-75">{{ t('intro.dynamic-route') }}</em>
    </p>

    <template v-if="user.otherNames.length">
      <p text-sm mt-4>
        <span opacity-75>{{ t('intro.aka') }}:</span>
        <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            <router-link :to="`/hi/${otherName}`" replace>
              {{ otherName }}
            </router-link>
          </li>
        </ul>
      </p>
    </template>

    <div class="m-4">
      <button
        class="rounded cursor-pointer bg-teal-700 text-white
        py-1 px-4 inline-block hover:bg-teal-800" @click="router.back()"
      >
        {{ t('button.back') }}
      </button>
    </div>
  </div>
</template>
