<template>
  <div class="border-solid-border-brand-gray-1 w-full border-b">
    <div class="mx-auto my-16 text-center">
      <slot name="title">Sample Title</slot>

      <slot name="subtitle">Sample Subtitle</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderContainer'
}
</script>
