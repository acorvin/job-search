<template>
  <main>
    <section class="flex h-screen flex-col bg-yellow-100 pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1 border border-blue-700">1 Col</div>

        <div class="col-span-5 col-start-2 border border-red-700">
          <the-headline />
        </div>

        <div class="col-span-5 col-start-7 border border-purple-700">5 Cols</div>

        <div class="col-span-1 col-start-12 border border-green-700">1 Col</div>
      </div>
    </section>
  </main>
</template>

<script>
import TheHeadline from './TheHeadline.vue'
export default {
  name: 'TheHero',
  components: {
    TheHeadline
  }
}
</script>

<style scoped></style>
