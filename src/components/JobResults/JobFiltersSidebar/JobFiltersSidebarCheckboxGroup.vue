<template>
  <collapsible-accordion :header="header">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li v-for="value in uniqueValues" :key="value" class="h-8 w-1/2">
            <input
              :id="value"
              v-model="selectedValues"
              :value="value"
              type="checkbox"
              class="mr-3"
              @change="selectValue"
            />
            <label :for="value">{{ value }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import CollapsibleAccordion from '@/components/Shared/CollapsibleAccordion.vue'
import { useUserStore, CLEAR_USER_JOB_FILTER_SELECTIONS } from '@/stores/user'

const props = defineProps({
  header: {
    type: String,
    required: true
  },
  uniqueValues: {
    type: [Set<string>, Array<string>],
    required: true
  },
  action: {
    type: Function,
    required: true
  }
})
const selectedValues = ref<string[]>([])

const router = useRouter()

const selectValue = () => {
  props.action(selectedValues.value)
  router.push({ name: 'JobResults' })
}

const userStore = useUserStore()
userStore.$onAction(({ after, name }) => {
  after(() => {
    if (name === CLEAR_USER_JOB_FILTER_SELECTIONS) {
      selectedValues.value = []
    }
  })
})
</script>
