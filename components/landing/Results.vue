<script setup lang="ts">
const translations = {
  title: 'Selected projects and outcomes',
  description: 'A quick snapshot of outcomes from recent frontend delivery work.',
}

const resultCards = [
  {
    title: 'Syntax - Design System development',
    value: 'Phrase.com',
    description: 'Contributed to whole development cycle of a design system. Ranging from component creation, improvements, and adoption.',
  },
  {
    title: 'High-Traffic E-Commerce',
    value: 'Mall.cz',
    description: 'Developed core pages and internal marketing apps for high-volume online shopping platforms.',
  },
  {
    title: 'Engineering Experience',
    value: '8+ Years',
    description: 'Delivering end-to-end frontend features using React, Vue, TypeScript, and modern AI tools',
  },
]
</script>

<template>
  <div class="py-16 md:py-16">
    <div class="mt-16 text-center">
      <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">{{ translations.title }}</h2>
      <p class="text-lg mt-4 text-slate-600">{{ translations.description }}</p>
    </div>

    <div class="mt-12 grid gap-6 md:grid-cols-3">
      <article
        v-for="card in resultCards"
        :key="card.title"
        class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <p class="text-sm uppercase tracking-wide text-primary-500">{{ card.title }}</p>
        <p class="mt-2 text-3xl font-bold text-slate-900">{{ card.value }}</p>
        <p class="mt-3 text-slate-600">{{ card.description }}</p>
      </article>
    </div>
  </div>
</template>
