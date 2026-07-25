<template>
  <div class="mt-16 mb-0 md:mt-16 md:mb-0">
    <UIHeading :level="2" class="text-center mb-2">Tools I use to ship production-ready frontends fast</UIHeading>
    <UIParagraph size="md" className="text-center mt-4 max-w-3xl mx-auto">
      Selected technologies grouped by how they contribute to delivery speed, quality and long-term maintainability.
    </UIParagraph>

    <div class="mt-10 grid gap-10 md:grid-cols-3">
      <div v-for="group in techStackGroups" :key="group.title">
        <UIHeading :level="6" :tag="'h3'" class="text-center mb-4">{{ group.title }}</UIHeading>
        <div class="flex gap-8 md:gap-8 items-center justify-center flex-wrap">
          <div v-for="item in group.items" :key="item.label" class="flex flex-col justify-center items-center min-w-14">
            <Icon :name="`simple-icons:${item.icon}`" class="h-8 md:h-10" size="32" :alt="item.label" />
            <UIParagraph size="xs" class="mt-1">{{ item.label }}</UIParagraph>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const techStackGroups = [
  {
    title: 'Tech & Frameworks',
    items: [
      { label: 'HTML', icon: 'html5' },
      { label: 'CSS3', icon: 'css3' },
      { label: 'JavaScript', icon: 'javascript' },
      { label: 'TypeScript', icon: 'typescript' },
      { label: 'Vue.js', icon: 'vuedotjs' },
      { label: 'React', icon: 'react' },
      { label: 'Nuxt.js', icon: 'nuxtdotjs' },
      { label: 'Tailwindcss', icon: 'tailwindcss' },
      { label: 'nodeJS', icon: 'nodedotjs' },
      { label: 'express', icon: 'express' },
      { label: 'GraphQL', icon: 'graphql' },
      { label: 'MongoDB', icon: 'mongodb' },
      { label: 'Docker', icon: 'docker' },
    ],
  },
  {
    title: 'Testing & Tooling',
    items: [
      { label: 'Vite', icon: 'vite' },
      { label: 'Vitest', icon: 'vitest' },
      { label: 'Jest', icon: 'jest' },
      { label: 'Cypress', icon: 'cypress' },
      { label: 'Playwright', icon: 'playwright' },
      { label: 'Storybook', icon: 'storybook' },
      { label: 'ESLint', icon: 'eslint' },
      { label: 'Prettier', icon: 'prettier' },
      { label: 'npm', icon: 'npm' },
      { label: 'Vercel', icon: 'vercel' },
      { label: 'Sentry', icon: 'sentry' },
    ],
  },
  {
    title: 'Workflow',
    items: [
      { label: 'Git', icon: 'git' },
      { label: 'GitLab', icon: 'gitlab' },
      { label: 'GitHub', icon: 'github' },
      { label: 'Claude Code', icon: 'claudecode' },
      { label: 'VS Code', icon: 'visualstudiocode' },
      { label: 'Figma', icon: 'figma' },
      { label: 'Slack', icon: 'slack' },
      { label: 'Notion', icon: 'notion' },
      { label: 'Jira', icon: 'jira' },
    ],
  },
]
</script>
