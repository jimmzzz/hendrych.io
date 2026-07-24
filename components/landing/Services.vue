<script setup>

const translations = {
  title: 'Unlock Your Business Potential With My Services',
  description: `Offer a range of frontend development services to help you succeed online. From responsive design to website
      optimization, i'm here to help you create a website that not only looks great, but also performs flawlessly on any
      device.`
}

const services = [
  {
    title: 'HTML & CSS responsive web design',
    description:
      'Develop websites that are optimized for different devices and screen sizes and ensure that websites and applications are accessible and usable across different screen resolutions and orientations.',
    icon: 'Device',
  },
  {
    title: 'Web app development (JavaScript)',
    description:
      'Build highly interactive web apps, ranging from a basic online forms to more complex applications such as CRM system, ecommerce platform ect.',
    icon: 'Brackets',
  },
  {
    title: 'UI/UX quality & accessibility',
    description:
      'I focus on smooth user experience with intuitive navigation, practical keyboard shortcuts and accessibility standards, while ensuring cross-browser compatibility.',
    icon: 'mdi:cursor-default-click-outline',

  },
  {
    title: 'Performance Optimization',
    description:
      'Optimize websites and applications for better performance, Faster page loading time improves user experience',
    icon: 'Gear',
  },
  {
    title: 'Integration with Backend Systems',
    description:
      'Connect your application to external systems and API. So your application will be able send & receive data.',
    icon: 'Integration',
  },
  {
    title: 'AI-assisted development',
    description:
      'I use Claude Code, Claude and Gemini in daily work to speed up research, prototyping and implementation while keeping code quality high.',
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
