<template>
  <div
    class="flex justify-center px-4 pt-48 bg-white md:pt-0 bg-gradient-to-b md:h-screen md:px-12 lg:px-20 xl:px-48"
  >
    <div
      class="relative flex flex-col items-center w-full h-full max-w-screen-xl md:flex-row"
    >
      <div class="max-w-sm mb-8 lg:max-w-lg md:mb-0">
        <p
          id="typeit"
          class="mb-8 text-4xl text-zinc-900 md:text-5xl lg:text-6xl min-h-[200px] md:min-h-0"
        ></p>
      </div>
      <img
        class="w-[22rem] lg:w-[28rem] md:absolute md:bottom-0 md:right-0"
        src="~/assets/img/pascalmattes-img.webp"
        alt="Pascal Mattes"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TypeIt from 'typeit';

export default defineComponent({
  mounted(): void {
    new TypeIt('#typeit', {
      speed: 50
    })
      .type('Hallo 👋', { delay: 500 })
      .break()
      .type('Ich bin <span class="text-zinc-500">Pascal</span>')
      .type(
        ' und versuche die Welt durch <a href="https://github.com/pascalmtts" class="underline text-zinc-500 decoration-zinc-500 decoration-4 underline-offset-4">Software</a> besser zu machen.'
      )
      .go();
  }
});
</script>
