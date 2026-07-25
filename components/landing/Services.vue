<script setup>

const translations = {
  title: 'Services that move your product forward',
  description: `I combine product thinking with frontend execution, so each deliverable improves usability,
      performance and maintainability in measurable ways.`
}

const services = [
  {
    title: 'Frontend development',
    description:
      'From landing pages to complex product interfaces in Vue, Nuxt and React, built to be scalable and easy to evolve.',
    icon: 'Device',
  },
  {
    title: 'Web app development',
    description:
      'Interactive product flows, state management and robust UI behavior for internal tools, SaaS products and customer portals.',
    icon: 'Brackets',
  },
  {
    title: 'Accessibility and UX quality',
    description:
      'Keyboard navigation, semantic markup and practical UX refinements that reduce friction and improve task completion.',
    icon: 'mdi:cursor-default-click-outline',

  },
  {
    title: 'Performance and Core Web Vitals',
    description:
      'Bundle optimization, rendering strategy and image delivery improvements for faster loading and stronger SEO outcomes.',
    icon: 'Gear',
  },
  {
    title: 'API and backend integration',
    description:
      'Reliable API integration, data mapping and resilient error states that keep real-world applications stable.',
    icon: 'Integration',
  },
  {
    title: 'AI-assisted delivery',
    description:
      'I use modern AI tooling to speed up prototyping and implementation while preserving code quality through manual review.',
    icon: 'Terminal',
  },
];
</script>

<template>
  <div class="pt-16 md:pt-24">
    <div>
      <UIHeading :level="1" class="lg:tracking-tight max-w-[735px]">{{ translations.title }}</UIHeading>
      <UIParagraph size="lg" className="mt-4 max-w-[850px]">
        {{ translations.description }}
      </UIParagraph>
    </div>
    <div class='grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16 mb-20'>
      <div v-for='item of services' class='flex gap-4 items-start'>
        <!-- <div class='mt-1 bg-primary-400 rounded-full p-2 w-8 h-8 shrink-0'> -->
        <div
          class='flex flex-shrink-0 justify-center items-center w-8 h-8  md:w-10 md:h-10 rounded-full bg-primary-500'>
          <Icon class='text-white' :name='item.icon' />
        </div>
        <div>
          <UIHeading :level="6" :tag="'div'" class="font-semibold">{{ item.title }}</UIHeading>
          <UIParagraph styleName="relaxed" className="mt-2">
            {{ item.description }}
          </UIParagraph>
        </div>
      </div>
    </div>
  </div>
</template>
