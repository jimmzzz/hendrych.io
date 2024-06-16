<template>
  <footer class="pt-10 bg-darkBlue">
    <LayoutContainer>
      <div class="mx-auto max-w-screen-xl">
        <div class="md:flex md:justify-between">
          <!-- LOGO -->
          <div class="mb-6 md:mb-0 basis-5/12">
            <Logo variant='light' class="mb-8" />
            <UIParagraph size="sm" styleName="relaxed" className="!text-gray-400 mb-8">
              {{ translations.description }}
            </UIParagraph>

            <div class="flex gap-3">
              <a v-for="social in socialLinks" :key="social.icon" :href="social.path" :aria-label="social.label"
                target="_blank"
                class="social-circles w-[40px] h-[40px] bg-darkLight flex items-center justify-center rounded-full text-gray-400 hover:text-gray-800 ">
                <Icon :name="social.icon" width="18" height="18" class="text-white" />
              </a>
            </div>
          </div>


          <!-- Column -->
          <!-- md:grid-cols-3 -->
          <div class="grid grid-cols-2 sm:gap-0 md:grid-cols-footer">
            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase text-white">Sitemap</h2>
              <ul class="text-gray-400">
                <li v-for="link in navigationLinks.slice(0, navigationLinks.length - 1)" :id="`${link.id}-footer`"
                  class="mb-4">
                  <nuxt-link :to="{ path: link.url, hash: link.hash }" class="hover:underline">
                    {{ link.label }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase text-white">Follow me</h2>
              <ul class="text-gray-400">
                <li v-for="link in socialLinks" class="mb-4">
                  <nuxt-link :to="link.path" :target="'_blank'" class="hover:underline">
                    {{ link.label }}
                  </nuxt-link>
                </li>
              </ul>
            </div>

            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase text-white">Contact</h2>

              <ul class="text-gray-400">

                <li v-for="item in contactItems" :key="item.id" class="mb-4">
                  <div class="flex gap-2">
                    <Icon :name="item.icon" width="26" height="26" />
                    <span>{{ item.label }}</span>
                  </div>
                </li>

                <!-- <li class="mb-4">
                  <div class="flex gap-2">
                    <Icon name="solar:phone-bold" width="26" height="26" />
                    <span>+ 420 607 737 765</span>
                  </div>
                </li>
                <li class="mb-4">
                  <div class="flex gap-2">
                    <Icon name="heroicons:envelope-solid" width="26" height="26" />
                    <a :href="`mailto:${EMAIL_ADDRESS}`">
                      {{ EMAIL_ADDRESS }}
                    </a>
                  </div>
                </li>
                <li class="mb-4">
                  <div class="flex gap-2">
                    <Icon name="carbon:location-filled" width="26" height="26" />
                    <span class="block max-w-44">Prague, Czech republic</span>
                  </div>
                </li> -->

              </ul>

            </div>
          </div>
        </div>

        <hr class="my-6 sm:mx-auto border-gray-700 lg:mt-10" />

        <!-- Copyright section -->
        <div class="sm:flex sm:items-center sm:justify-between">
          <UIParagraph size="sm" styleName="relaxed" className="!text-gray-400 pb-6">
            <span class="text-sm sm:text-center text-gray-400">© {{ new Date().getFullYear() }}
              {{ translations.footerCompanyName }} {{ translations.footerRightsReserved }}
            </span>
          </UIParagraph>

        </div>
      </div>
    </LayoutContainer>
  </footer>
</template>

<script setup>
import { ref, computed } from "vue";
import { navigationLinks, socialLinks, PHYSICAL_ADDRESS, PHONE_NUMBER, EMAIL_ADDRESS } from "./../utils/links";

const contactItems = computed(() => {
  return [
    { label: PHONE_NUMBER, icon: 'uil:phone', href: `tel:${PHONE_NUMBER.replace(' ', '')}` },
    { label: EMAIL_ADDRESS, icon: 'uil:envelope', href: `mailto:${EMAIL_ADDRESS}` },
    { label: PHYSICAL_ADDRESS, icon: 'uil:map-marker' },
  ]
})

const translations = computed(() => {
  return {
    description: `Frontend engineer from Prague specializing in designing and creating highly interactive websites and web applications. Focused on building responsive, accessible and performant websites with SEO in mind. Currently, I’m working on building UI components for design system at Phrase.com`,
    footerCompanyName: 'Tomáš Hendrych.',
    footerRightsReserved: 'All Rights Reserved.',
  };
});
</script>

<style scoped>
.social-circles:hover {
  transition: all 150ms linear;
  filter: drop-shadow(0 0 3mm rgb(160, 0, 210))
}
</style>
