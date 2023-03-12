<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing />
      <job-listing />
      <job-listing />
    </ol>
  </main>
</template>

<script>
import JobListing from '@/components/JobResults/JobListing.vue'
export default {
  name: 'JobListings',
  components: {
    JobListing
  }
}
</script>

<style scoped></style>
