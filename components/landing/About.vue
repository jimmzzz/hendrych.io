<script setup>

</script>

<template>
  <div class="py-44 bg-[#F5F5F5] shadow-[0_0_0_100vmax_rgba(245,245,245,1)] [clip-path:inset(0_-100vmax)]">
    <!-- left -->
    <div class="flex flex-wrap lg:gap-28">
      <div class=" lg:flex-shrink-0">
        <img src="~/assets/img/landing/about.png" alt="about-me-photo" class="block max-w-[330px] lg:max-w-full">
      </div>
      <!-- right -->
      <div class="lg:max-w-[520px]">
        <UIHeading :level="'subHeading'" class="mb-6"> About me</UIHeading>
        <UIHeading :level="2" class="mb-4"> My goal is develop your online assets and grow your business </UIHeading>
        <!-- TODO: paragraph -->
        <p class="mb-6">
          Hello! I'm a 32-year-old self-taught Frontend Engineer from Prague, Czech Republic. My journey into the world
          of technology has been anything but conventional. I got a master's Degree in Economics and International
          relations, but if I look backward, it was the wrong direction and I did not like it at all.
        </p>

        <div class="flex flex-col sm:flex-row gap-3">
          <LandingLink href="https://github.com/Gr33nW33n/nuxtship-template" target="_blank" rel="noopener">
            Download CV
          </LandingLink>
          <LandingLink size="lg" styleName="outline" rel="noopener"
            href="https://github.com/Gr33nW33n/nuxtship-template" target="_blank">
            View Repo
          </LandingLink>
        </div>

      </div>
    </div>
  </div>
  <!-- <div class="mt-16 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      Unlock Your Business Potential With My Services
    </h2>
    <p class="text-lg mt-4 text-slate-600 max-w-[850px]">
      Offer a range of frontend development services to help you succeed online. From responsive design to website
      optimization, i'm here to help you create a website that not only looks great, but also performs flawlessly on any
      device.
    </p>
  </div>

  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item of features" class="flex gap-4 items-start">
      <div class="mt-1 bg-primary-400 rounded-full p-2 w-8 h-8 shrink-0">
        <Icon class="text-white" :name="item.icon" />
      </div>
      <div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="text-slate-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div> -->
</template>
