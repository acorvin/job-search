<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-grey"
      >
        <a class="flex items-center h-full text-xl" :href="url">{{ brand }}</a>
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none space-x-4">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              class="h-full"
              data-test="main-nav-list-item"
            >
              <a class="flex items-center h-full py-2.5" href="">{{
                menuItem
              }}</a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLoggedIn" />
          <action-button v-else />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from '@/components/ActionButton.vue';
import ProfileImage from '@/components/ProfileImage.vue';

export default {
  name: 'MainNav',
  components: {
    ActionButton,
    ProfileImage,
  },
  data() {
    return {
      brand: 'Corvin Careers',
      url: 'https://careers.google.com',
      menuItems: [
        'Teams',
        'Locations',
        'Our Mission',
        'Work With Us',
        'Learn',
        'Jobs',
      ],
      isLoggedIn: false,
    };
  },
};
</script>

<style></style>
