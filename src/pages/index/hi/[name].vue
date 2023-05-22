<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const { currentRoute, back } = useRouter()
const userStore = useUserStore()
const { t } = useI18n()
const name = computed(() => currentRoute.value.params?.name as string)

userStore.setNewName(name.value)
</script>

<template>
  <div class="px-4 pt-10">
    <div class="i-carbon-pedestrian text-5xl" />

    <p>
      {{ t('intro.hi', { name }) }}
    </p>

    <p class="py-4">
      <em class="text-sm opacity-75">{{ t('intro.dynamic-route') }}</em>
    </p>

    <template v-if="userStore.otherNames.length">
      <p mt-4 text-sm>
        <span opacity-75>{{ t('intro.aka') }}:</span>
        <ul>
          <li v-for="otherName of userStore.otherNames" :key="otherName">
            <router-link :to="`/hi/${otherName}`" replace>
              {{ otherName }}
            </router-link>
          </li>
        </ul>
      </p>
    </template>

    <div class="m-4">
      <button
        class="inline-block cursor-pointer rounded bg-teal-700 px-4 py-1 text-white hover:bg-teal-800"
        @click="back()"
      >
        {{ t('button.back') }}
      </button>
    </div>
  </div>
</template>
