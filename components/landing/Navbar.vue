<template>
  <div id="navBar" class="sticky top-0 z-50 bg-white transition-shadow delay-100">
    <LayoutContainer :layout="layout">
      <header class="flex flex-col lg:flex-row justify-between items-center py-5">
        <div class="flex w-full lg:w-auto items-center justify-between">
          <!-- mobile logo & logo -->
          <a href="/" class="text-lg lg:hidden">
            <span class="font-bold text-slate-800">hendrych.</span> {{ scrolled }}
            <span class="text-primary-500">io</span>
          </a>
          <Logo class="hidden lg:flex" />
          <div class="block lg:hidden">
            <button @click="open = !open" class="text-gray-800">
              <svg fill="currentColor" class="w-4 h-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path v-show="open" fill-rule="evenodd" clip-rule="evenodd"
                  d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z">
                </path>
                <path v-show="!open" fill-rule="evenodd"
                  d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z">
                </path>
              </svg>
            </button>
          </div>
        </div>
        <nav class="w-full lg:w-auto mt-2 lg:flex lg:mt-0" :class="{ block: open, hidden: !open }">
          <ul class="flex flex-col lg:flex-row lg:gap-3">
            <li v-for="link in navLinks" :key="link.label">
              <!-- v-if="link.url !== '/blog'" -->
              <nuxt-link aria-current="page" :to="{ path: link.path, hash: link.hash }"
                class="flex lg:px-3 py-2 text-gray-600 hover:text-primary-500"
                @click.prevent="scrollToElement(link.id)">
                {{ link.label }}
              </nuxt-link>
            </li>
          </ul>
          <div class="lg:hidden flex items-center mt-3 gap-4">
            <LandingLink href="#" styleName="muted" block size="md">Log in</LandingLink>
            <LandingLink href="#" size="md" block>Sign up</LandingLink>
          </div>
        </nav>
        <!-- <div>
          <div class="hidden lg:flex items-center gap-4">
            <a href="#">Log in</a>
            <LandingLink href="#" size="md">Sign up</LandingLink>
          </div>
        </div> -->
      </header>
    </LayoutContainer>
    <div v-if="$route.name === 'blog-slug'" class="mx-auto">
      <div class="indicator" :style="{ width: `${scrolled}%` }
        ">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { navigationLinks, navigationLinksBlog } from '@/utils/links';
import { useRoute } from 'vue-router';

interface NavbarProps {
  layout?: 'landing' | 'blog',
  showScrollIndicator?: boolean;
}

const props = withDefaults(defineProps<NavbarProps>(), {
  layout: 'landing',
  showScrollIndicator: false,
});

const route = useRoute()
const open = ref(false);
const scrolled = ref(0)

const navLinks = computed(() => {
  return String(route.name).includes('blog') ? navigationLinksBlog : navigationLinks
})

const scrollToElement = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const toggleNavbarShadow = () => {
  const navBar = document.getElementById('navBar');
  if (!navBar) return

  if (window.scrollY > 22) {
    navBar.classList.add('shadow-lg');
  } else {
    navBar.classList.remove('shadow-lg');
  }
}

const calcScrollIndicator = () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  scrolled.value = Math.round((winScroll / height) * 100);
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (route.name !== 'blog-slug') {
      toggleNavbarShadow()
    }

    if (route.name === 'blog-slug') {
      calcScrollIndicator()
    }
  });
});
</script>

<style scoped>
.indicator {
  transition: width 0.3s ease;

  @apply h-[4px] bg-primary-500;
}
</style>
