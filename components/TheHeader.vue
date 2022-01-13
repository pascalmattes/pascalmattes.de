<template>
  <div
    class="absolute z-50 flex items-center justify-center w-full py-8 md:px-24 lg:px-48"
  >
    <div class="md:w-full max-w-screen-2xl">
      <NuxtLink to="/"><Logo /></NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Logo from '~/assets/img/logo.svg?component';

export default {
  components: { Logo }
};
</script>
