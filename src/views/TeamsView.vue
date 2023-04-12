<template>
  <header-container>
    <template #title>
      <h1 class="w-full pb-5 text-4xl font-normal">Team Spotlight</h1>
    </template>

    <template #subtitle>
      <div class="hero container mx-auto max-w-screen-lg pb-10">
        <img
          class="mx-auto"
          src="../img/happy-group.jpg"
          alt="a happy group of people sitting together outdoors"
        />
      </div>
      <h2 class="my-4 w-full text-base font-light">You're going to love it here. Come join us!</h2>
    </template>
  </header-container>
</template>

<script lang="ts" setup>
import HeaderContainer from '@/components/Shared/HeaderContainer.vue'
</script>
