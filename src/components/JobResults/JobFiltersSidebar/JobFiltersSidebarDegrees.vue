<template>
  <job-filters-sidebar-checkbox-group
    :unique-values="UNIQUE_DEGREES"
    :action="userStore.ADD_SELECTED_DEGREES"
  />
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import JobFiltersSidebarCheckboxGroup from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue'

import { useDegreesStore } from '@/stores/degrees'
import { useUserStore } from '@/stores/user'

const degreesStore = useDegreesStore()
const UNIQUE_DEGREES = computed(() => degreesStore.UNIQUE_DEGREES)

const userStore = useUserStore()
</script>
