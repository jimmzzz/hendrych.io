<script setup>
import { LINKEDIN_URL } from '../../utils/links';
</script>

<template>
  <div class="py-20 lg:py-44 bg-[#F5F5F5] shadow-[0_0_0_100vmax_rgba(245,245,245,1)] [clip-path:inset(0_-100vmax)]">
    <!-- left -->
    <div class="flex flex-wrap lg:gap-28">
      <div class=" lg:flex-shrink-0">
        <img src="~/assets/img/landing/about.png" alt="about-me-photo"
          class="block mb-6 lg:mb-0 max-w-[330px] lg:max-w-full">
      </div>
      <!-- right -->
      <div class="lg:max-w-[520px]">
        <UIHeading :level="'subHeading'" class="mb-6"> About me</UIHeading>
        <UIHeading :level="2" class="mb-4"> My goal is develop your online assets and grow your business </UIHeading>
        <UIParagraph size="md" styleName="relaxed" className="mb-6 !text-black">
          Hello! I'm a 32-year-old self-taught Frontend Engineer from Prague, Czech Republic. My journey into the world
          of technology has been anything but conventional. I got a master's Degree in Economics and International
          relations, but if I look backward, it was the wrong direction and I did not like it at all.
        </UIParagraph>

        <div class="flex flex-col sm:flex-row gap-3">
          <!-- TODO: CV download -->
          <!-- <LandingLink href="" target="_blank" rel="noopener">
            Download CV
          </LandingLink> -->
          <LandingLink size="lg" styleName="outline" rel="noopener" :href="LINKEDIN_URL" target="_blank">
            <div class="flex justify-center items-center">
              <Icon class="text-gray-400 w-5 h-5 mr-2" name="uil:linkedin" />
              LinkedIn profile
            </div>
          </LandingLink>
        </div>

      </div>
    </div>
  </div>
</template>
