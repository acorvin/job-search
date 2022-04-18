<template>
  <img
    :src="profileImg"
    alt="profile image"
    class="w-8 h-8 object-contain rounded-3xl"
  />
</template>

<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      profileImg:
        'https://pbs.twimg.com/profile_images/1515427764924563456/ZCZciB5T_400x400.jpg',
    };
  },
};
</script>

<style></style>
