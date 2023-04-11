<template>
  <img :src="imageLink" class="h-8 w-8 rounded-3xl object-contain" alt="user profile image" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const imageLink = ref(
  'https://avatars.githubusercontent.com/u/48366916?s=400&u=9f2a04d656ad8ca0402d118010921ae8496171cf&v=4'
)
</script>
