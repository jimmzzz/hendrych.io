<template>
  <main class="grid lg:grid-cols-2 place-items-center md:pt-16 mb-8">
    <div class="pb-18 md:order-1 hidden md:block">
      <img class="relative left-12" src="~/assets/img/hero-photo.png" alt="Starship starts the engine" loading="eager"
        format="avif" width="618" height="604" />
    </div>

    <div class="relative self-start top-20">
      <UIHeading :level="'subHeading'" class="mb-6">
        Hi, I'm Tom Hendrych
      </UIHeading>
      <UIHeading :level="'display'">
        I'm a front-end engineer.
      </UIHeading>

      <UIParagraph size="lg" className="mt-4">
        <!-- Nuxtship is a starter template for startups, marketing websites &
        landing pages.<wbr /> Built with Nuxt & TailwindCSS. You can quickly
        create any website with this starter. -->

        Frontend developer from Prague. Building dynamic websites and apps using Vue.js, Nuxt.js and TailwindCSS,
        ensuring top-notch design and functionality.
      </UIParagraph>

      <div class="mt-6 flex flex-col sm:flex-row gap-3">

        <NuxtLink :to="{ path: '/', hash: '#contact' }">
          <UIButton>
            Contact me
          </UIButton>
        </NuxtLink>
      </div>

      <div class="my-4 mb-10 flex justify-center md:mb-0 md:mt-6 md:justify-start dark:text-white text-gray-800 gap-6">
        <a v-for="social in socialLinks" :key="social.icon" :href="social.path" :aria-label="social.label"
          target="_blank" class="w-[32px] h-[32px] text-gray-400 hover:text-gray-800 ">
          <Icon :name="social.icon" width="32" height="32" />
        </a>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { socialLinks } from './../utils/links';

const config = useRuntimeConfig()

</script>
