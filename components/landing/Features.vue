<script setup>

const translations = {
  title: 'Unlock Your Business Potential With My Services',
  description: `Offer a range of frontend development services to help you succeed online. From responsive design to website
      optimization, i'm here to help you create a website that not only looks great, but also performs flawlessly on any
      device.`
}

const features = [
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
    title: 'Cross-Browser Compatibility & Accessibility',
    description:
      'Cross-browser compability ensure that website compatible with different browsers and works on different platforms and devices.',
    icon: 'ph:browser',
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
    title: 'Analytics implementation',
    description:
      'Tracking business metrics on website is crucial for many companies. I can help you implement Google Analytics, HotJar and so on.',
    icon: 'Analytics',
  },
];
</script>

<template>
  <div class='mt-16 md:mt-0'>
    <UIHeading :level="1" class="lg:tracking-tight">{{ translations.title }}</UIHeading>
    <UIParagraph size="lg" className="mt-4 max-w-[850px]">
      {{ translations.description }}
    </UIParagraph>
  </div>

  <div class='grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16 mb-20'>
    <div v-for='item of features' class='flex gap-4 items-start'>
      <!-- <div class='mt-1 bg-primary-400 rounded-full p-2 w-8 h-8 shrink-0'> -->
      <div class='flex flex-shrink-0 justify-center items-center w-8 h-8  md:w-10 md:h-10 rounded-full bg-primary-500'>
        <Icon class='text-white' :name='item.icon' />
      </div>
      <div>
        <UIHeading :level="6" class="font-semibold">{{ item.title }}</UIHeading>
        <UIParagraph styleName="relaxed" className="mt-2">
          {{ item.description }}
        </UIParagraph>
      </div>
    </div>
  </div>
</template>
