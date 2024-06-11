<template>
  <LayoutContainer class="pt-20 mb-20">
    <!-- bg-[#F5F5F5] shadow-[0_0_0_100vmax_rgba(245,245,245,1)] [clip-path:inset(0_-100vmax)] py-20 lg:py-44  -->
    <LandingSectionhead>
      <template #title>{{ translations.title }}</template>
      <template #desc>{{ translations.subTitle }}</template>
    </LandingSectionhead>

    <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
      <div>
        <h2 class="font-medium text-2xl text-gray-800">
          {{ translations.formTitle }}
        </h2>
        <!-- <p class="text-lg leading-relaxed text-slate-500 mt-3">
          {{ translations.description }}
        </p> -->
        <div class="mt-5">
          <div v-for="item in contactItems" :key="item.label" class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-gray-400 w-4 h-4" :name="item.icon" />
            <a :href="item.href">{{ item.label }}</a>
          </div>
        </div>
      </div>

      <LandingContactform />

    </div>
  </LayoutContainer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { EMAIL_ADDRESS, PHONE_NUMBER, PHYSICAL_ADDRESS } from "./../../utils/links";

interface ContactSectionRow {
  icon: string;
  label: string;
  href?: string;
}

const translations = computed(() => {
  return {
    title: 'Contact',
    subTitle: `Got a question? I'm here to help!`,
    formTitle: 'Contact info',
    description: `Do you have a question? I'm here to help! Please fill out the form or send an email.`,
  }
})

const contactItems = computed((): ContactSectionRow[] => {
  return [
    { label: PHYSICAL_ADDRESS, icon: 'uil:map-marker' },
    { label: EMAIL_ADDRESS, icon: 'uil:envelope', href: `mailto:${EMAIL_ADDRESS}` },
    { label: PHONE_NUMBER, icon: 'uil:phone', href: `tel:${PHONE_NUMBER.replace(' ', '')}` },
  ]
})
</script>

<style scoped></style>
