<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-grey"
      >
        <a href="#" class="flex items-center h-full text-xl">{{ brand }}</a>
        <h2 class="flex items-center h-full ml-8">Developed by {{ author }}</h2>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainNav',
  data() {
    return {
      brand: 'Job Search',
      author: 'Alex Corvin',
    };
  },
};
</script>

<style></style>
