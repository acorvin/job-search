<template>
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
</template>

<script>
import CollapsibleAccordion from '@/components/Shared/CollapsibleAccordion.vue'

export default {
  name: 'JobFiltersSidebarOrganizations',
  components: { CollapsibleAccordion }
}
</script>

<style scoped></style>
