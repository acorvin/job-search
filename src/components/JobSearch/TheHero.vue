<template>
  <main class="flex h-screen flex-col">
    <section class="pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1"></div>

        <div class="col-span-5 col-start-2">
          <the-headline />
          <job-search-form />
        </div>

        <div class="col-span-5 col-start-7 self-center justify-self-center">
          <img class="h-90 w-90 object-contain" src="../../img/vuejs-logo.png" alt="" />
        </div>

        <div class="col-span-1 col-start-12"></div>
      </div>
    </section>

    <spot-light class="flex flex-row justify-center pb-16">
      <template v-slot:default="{ img, title, description }">
        <router-link
          to="/jobs/results"
          class="mx-5 flex h-96 w-72 flex-col rounded-lg border bg-brand-gray-2"
        >
          <img :src="img" class="object-contain" />

          <div class="mt-3 h-48 px-6 py-4">
            <h3 class="text-lg font-medium">{{ title }}</h3>

            <p class="mt-3 text-sm">{{ description }}</p>
          </div>

          <router-link to="/jobs/results" class="px-6 pb-4 text-sm text-brand-blue-1"
            >View Jobs
          </router-link>
        </router-link>
      </template>
    </spot-light>
  </main>
</template>

<script lang="ts" setup>
import TheHeadline from '@/components/JobSearch/TheHeadline.vue'
import JobSearchForm from '@/components/JobSearch/JobSearchForm.vue'
import SpotLight from '@/components/JobSearch/SpotLight.vue'
</script>
