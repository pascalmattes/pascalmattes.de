<template>
  <div
    class="
      bg-gradient-to-b bg-white
      md:h-screen
      flex
      justify-center
      px-4
      pt-24
      md:px-12
      lg:px-20
      xl:px-48
    "
  >
    <div
      class="
        w-full
        h-full
        relative
        max-w-screen-xl
        flex
        items-center
        flex-col
        md:flex-row
      "
    >
      <div class="max-w-sm lg:max-w-lg mb-8 md:mb-0">
        <p class="text-zinc-900 text-4xl md:text-5xl lg:text-6xl mb-8">
          Hallo 👋<br />
          Ich bin
          <span class="text-zinc-500">Pascal</span>
          und versuche die Welt durch
          <a
            href="https://github.com/pascalmtts"
            class="
              text-zinc-500
              underline
              decoration-zinc-500 decoration-4
              underline-offset-4
            "
            >Software</a
          >
          besser zu machen.
        </p>
      </div>
      <img
        class="w-[22rem] lg:w-[28rem] md:absolute md:bottom-0 md:right-0"
        src="../assets/img/pascalmattes-img.webp"
        alt="Pascal Mattes"
      />
    </div>
  </div>
</template>
