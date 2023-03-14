<template>
  <div class="flex w-96 flex-col border-r border-solid border-brand-gray-1 bg-white p-4">
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filters" type="secondary" />
        </div>
      </div>
      <collapsible-accordion header="Job Type">Placeholder</collapsible-accordion>

      <collapsible-accordion header="Organizations">
        <div class="mt-5">
          <fieldset>
            <ul class="flex flex-row flex-wrap">
              <li class="h-8 w-1/2">
                <input type="checkbox" id="WattaVue" class="mr-3" />
                <label for="WattaVue">WattaVue</label>
              </li>

              <li class="h-8 w-1/2">
                <input type="checkbox" id="VueBetcha" class="mr-3" />
                <label for="VueBetcha">VueBetcha</label>
              </li>

              <li class="h-8 w-1/2">
                <input type="checkbox" id="VueGotIt" class="mr-3" />
                <label for="VueGotIt">VueGotIt</label>
              </li>

              <li class="h-8 w-1/2">
                <input type="checkbox" id="VueTube" class="mr-3" />
                <label for="VueTube">VueTube</label>
              </li>
            </ul>
          </fieldset>
        </div>
      </collapsible-accordion>
    </section>
  </div>
</template>

<script>
import ActionButton from '@/components/Shared/ActionButton.vue'
import CollapsibleAccordion from '@/components/Shared/CollapsibleAccordion.vue'

export default {
  name: 'JobFiltersSidebar',
  components: { ActionButton, CollapsibleAccordion }
}
</script>

<style scoped></style>
