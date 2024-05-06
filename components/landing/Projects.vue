<script setup>
const features = [
  {
    img: 'changing-dom',
    title: 'Bring Your Own Framework',
    description:
      "Build your site using Vue, web components, or just plain ol' HTML + JavaScript.",
  },
  {
    img: 'create-remove-dom-elements',
    title: '100% Static HTML, No JS',
    description:
      'Nuxt renders your entire page to static HTML, removing all JavaScript from your final build by default.',
  },
  {
    img: 'scroll-indicator',
    title: 'On-Demand Components',
    description:
      'Need some JS? Nuxt can automatically hydcreate-remove-dom-elementsrate interactive components when they become visible on the page.  ',
  },
];
</script>

<template>
  <div>
    <div class="pt-24 md:pt-36">
      <UIHeading :level="'subHeading'" class="mb-6"> Projects </UIHeading>
      <UIHeading :level="2" class="mb-8 lg:mb-14"> My working portfolio </UIHeading>
    </div>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-12 mb-48">
      <div v-for="item of features" class="flex gap-4 items-start">
        <div>
          <!-- src="~/assets/img/projects/scroll-indicator.png" -->
          <div
            :alt="item.img"
            class="min-h-[255px] rounded-3xl bg-slate-500 mb-6"
          />
          <h3 class="font-semibold text-lg"></h3>
         <UIHeading :level="4"> {{ item.title }} </UIHeading>
          <p class="text-slate-500 mt-2 leading-relaxed">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
