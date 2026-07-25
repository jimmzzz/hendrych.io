<template>
  <main class="grid lg:grid-cols-2 place-items-center md:pt-16 mb-8">
    <div class="pb-18 md:order-1 hidden md:block">
      <img
        class="relative left-12"
        :src="heroPhoto"
        alt="Starship starts the engine"
        loading="eager"
        fetchpriority="high"
        width="618"
        height="604"
      />
    </div>

    <div class="relative self-start top-20">
      <UIHeading :level="'subHeading'" class="mb-6">
        Hi, I'm Tom Hendrych
      </UIHeading>
      <UIHeading :level="'display'">
        I'm a front-end engineer.
      </UIHeading>

      <UIParagraph size="lg" className="mt-4">
        Senior front-end engineer from Prague. I help companies and product teams ship polished Vue, Nuxt and React experiences with strong performance,
        accessibility and maintainable code.
      </UIParagraph>

      <UIParagraph size="md" className="mt-3">
        Best fit: SaaS products, Design systems, marketing websites, and internal tools that need better UX, faster performance or
        frontend modernization.
      </UIParagraph>

      <div class="mt-6 flex flex-col sm:flex-row gap-3">

        <NuxtLink :to="{ path: '/', hash: '#contact' }">
          <UIButton class="w-full">
            {{ translations.heroCtaContact }}
          </UIButton>
        </NuxtLink>

        <LandingLink href="/#results" styleName="outline" className="w-full">
          {{ translations.heroCtaResults }}
        </LandingLink>
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
import { computed } from 'vue';
import heroPhoto from '~/assets/img/landing/hero-photo.webp';
import { socialLinks } from './../utils/links';

useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: heroPhoto,
      fetchpriority: 'high'
    }
  ]
})

const translations = computed(() => {
  return {
    heroCtaContact: 'Contact me →',
    heroCtaResults: 'See my achievements',
  }
})

</script>
