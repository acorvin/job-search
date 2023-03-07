<template>
  <section>
    <h1>Build for everyone</h1>
    <h2>Find your next job at Corvin Careers.</h2>
  </section>
</template>

<script>
export default {
  name: 'TheHeadline',
  data() {
    return {
      sample: 'Helloooooooooo!'
    }
  },
  created() {
    console.log('Hey! I have been created. The data is alive! Look:', this.sample)
  }
}
</script>

<style lang="scss" scoped></style>
