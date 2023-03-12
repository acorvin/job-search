<template>
  <h1 class="text-6xl font-bold">Job Results Page</h1>
  <button @click="returnHome">Return home</button>
</template>

<script>
export default {
  name: 'JobResultsView',
  methods: {
    returnHome() {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style scoped></style>
