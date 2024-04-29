<template>
  <div class="my-16">
    <UIHeading :level="2" class="text-center mb-2">Technologies and tools that I'm using</UIHeading>
    <div class="flex gap-8 md:gap-8 items-center justify-center mt-10 flex-wrap">
      <div v-for="item in techStack" :key="item.label" class="flex flex-col justify-center items-center min-w-14">
        <Icon :name="`simple-icons:${item.icon}`" class="h-8 md:h-14" size="32" />
        <UIParagraph size="xs" class="mt-1">{{ item.label }}</UIParagraph>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const techStack = [
  { label: 'html5', icon: 'html5' },
  { label: 'css3', icon: 'css3' },
  { label: 'JavaScript', icon: 'javascript' },
  { label: 'TypeScript', icon: 'typescript' },
  { label: 'Vue.js', icon: 'vuedotjs' },
  { label: 'Nuxt.js', icon: 'nuxtdotjs' },
  { label: 'Tailwindcss', icon: 'tailwindcss' },
  { label: 'nodeJS', icon: 'nodedotjs' },
  { label: 'mongoDB', icon: 'mongodb' },
  { label: 'Git', icon: 'git' },
  { label: 'Gitlab', icon: 'gitlab' },
  { label: 'GitHub', icon: 'github' },
  { label: 'Figma', icon: 'figma' },
]
</script>
