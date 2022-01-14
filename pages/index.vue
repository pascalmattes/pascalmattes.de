<template>
  <div>
    <div
      class="flex justify-center px-4 pt-48 bg-white md:pt-0 md:h-screen md:px-12 lg:px-20 xl:px-48"
    >
      <div
        class="relative flex flex-col items-center w-full h-full max-w-screen-2xl md:flex-row"
      >
        <div
          class="flex flex-col items-stretch w-full max-w-sm mb-8 lg:max-w-lg md:mb-0"
        >
          <h1
            id="typeit"
            class="text-4xl text-zinc-900 md:text-5xl lg:text-6xl min-h-[200px] md:min-h-0"
          ></h1>
        </div>
        <img
          class="w-[22rem] lg:w-[28rem] md:absolute md:bottom-0 md:right-0"
          src="~/public/img/pascalmattes-img.webp"
          alt="Pascal Mattes"
        />
      </div>
    </div>
    <div
      class="flex justify-center px-8 py-24 text-white lg:py-48 bg-gradient-to-b from-slate-900 to-zinc-900 sm:px-20 lg:px-48"
    >
      <div class="flex flex-col w-full max-w-screen-lg md:flex-row">
        <div
          class="flex flex-col items-center justify-center w-full pb-12 md:items-start md:pb-0 md:w-1/2"
        >
          <div>
            <h2 class="mb-8 text-3xl font-semibold md:text-4xl lg:text-5xl">
              Kontakt
            </h2>
            <div class="text-xl">
              <p class="mb-4">Du hast fragen oder Anregungen?</p>
              <p class="mb-4">Dir liegt etwas auf dem Herzen?</p>
              <p class="mb-4">
                <b>Schreib' mir</b> gerne 'ne Mail oder <b>folge mir</b>.
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center w-full md:items-end md:w-1/2">
          <a
            href="mailto:me@pascalmattes.de"
            class="flex items-center justify-center w-full max-w-sm py-2 mb-6 text-lg font-semibold transition-all rounded-lg shadow-lg bg-gradient-to-r from-indigo-500 to-blue-500 md:w-56 shadow-indigo-500/40 hover:scale-105"
          >
            <span class="pr-4 text-lg icon-envelope-letter"></span>
            <span>Mail</span>
          </a>
          <a
            href="https://twitter.com/pascalmtts"
            class="flex items-center justify-center w-full max-w-sm py-2 mb-6 text-lg font-semibold transition-colors border rounded-lg md:w-56 hover:bg-white hover:text-zinc-900"
          >
            <span class="pr-4 icon-social-twitter"></span>
            <span>Twitter</span>
          </a>
          <a
            href="https://instagram.com/pascalmtts"
            class="flex items-center justify-center w-full max-w-sm py-2 mb-6 text-lg font-semibold transition-colors border rounded-lg md:w-56 hover:bg-white hover:text-zinc-900"
          >
            <span class="pr-4 icon-social-instagram"></span>
            <span>Instagram</span>
          </a>
          <a
            href="https://linkedin.com/in/pascalmtts"
            class="flex items-center justify-center w-full max-w-sm py-2 mb-6 text-lg font-semibold transition-colors border rounded-lg md:w-56 hover:bg-white hover:text-zinc-900"
          >
            <span class="pr-4 icon-social-linkedin"></span>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TypeIt from 'typeit';

export default defineComponent({
  setup(): void {
    onMounted((): void => {
      setTimeout((): void => {
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
      }, 100);
    });
  }
});
</script>
