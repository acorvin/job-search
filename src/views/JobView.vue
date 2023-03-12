<template>
  <div>Job Page for job {{ currentJobId }}</div>
</template>

<script>
export default {
  name: 'JobView.vue',
  computed: {
    currentJobId() {
      return this.$route.params.id
    }
  }
}
</script>

<style scoped></style>
