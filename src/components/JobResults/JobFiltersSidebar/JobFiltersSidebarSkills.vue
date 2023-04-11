<template>
  <div class="mt-2">
    <input
      v-model.lazy="skillsSearchTerm"
      type="text"
      class="mt-2 w-full rounded border border-solid border-brand-gray-1 p-3 text-base shadow-gray"
      placeholder="Computer programming, Finance degree"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const skillsSearchTerm = computed({
  get() {
    return userStore.skillsSearchTerm
  },
  set(value: string) {
    userStore.UPDATE_SKILLS_SEARCH_TERM(value)
  }
})
</script>
