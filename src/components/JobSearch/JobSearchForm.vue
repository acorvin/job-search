<template>
  <form
    class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-gray-3"
    @submit.prevent="searchForJobs"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex h-full flex-1 flex-nowrap text-base font-light">
      <div class="relative flex h-full flex-1 items-center pr-3">
        <!-- Job Role Start -->
        <label for="role" class="absolute left-0 -top-10">Role</label>
        <text-input id="role" v-model="role" placeholder="Software engineer" />
      </div>
      <!-- Border Start -->
      <span
        class="flex h-full items-center border-l border-r border-brand-gray-3 bg-brand-gray-2 px-3"
        >in</span
      >
      <!-- Location Start -->
      <div class="relative flex h-full flex-1 items-center pl-3">
        <label for="location" class="absolute left-0 -top-10">Where?</label>
        <text-input id="location" v-model="location" placeholder="New York" />
      </div>
    </div>
    <!-- Search Button Start -->
    <action-button text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import ActionButton from '@/components/Shared/ActionButton.vue'
import TextInput from '@/components/Shared/TextInput.vue'

const role = ref('')
const location = ref('')
const router = useRouter()

const searchForJobs = () => {
  router.push({
    name: 'JobResults',
    query: { role: role.value, location: location.value }
  })
}
</script>
