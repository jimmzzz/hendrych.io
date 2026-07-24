<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  link: [
    {
      rel: 'alternate',
      type: 'text/plain',
      title: 'LLMs',
      href: '/llms.txt'
    }
  ]
})
</script>
