<script setup lang="ts">
import allegroLogo from '~/assets/img/career/allegro.webp';
import digiterapieLogo from '~/assets/img/career/digiterapie.jpeg';
import phraseLogo from '~/assets/img/career/phrase.png';
import servodataLogo from '~/assets/img/career/servodata.webp';

definePageMeta({
  layout: 'landing',
});

useHead({
  title: 'Career Timeline | Tom Hendrych',
  meta: [
    {
      name: 'description',
      content: 'Career timeline of Tom Hendrych, Senior Frontend Engineer based in Prague.',
    },
  ],
});

interface CareerRole {
  role: string;
  company: string;
  description: string;
  contractType: string;
  period: string;
  location: string;
  logo?: string;
  technologies: string[];
  points: string[];
}

const timeline: CareerRole[] = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Phrase.com',
    description: 'Leading cloud-based software localization platform trusted by thousands of teams worldwide for translating and managing content across products.',
    contractType: 'Full-time employee',
    period: '03/2023 - Present',
    location: 'Prague (fully remote)',
    logo: phraseLogo,
    technologies: ['Vue.js', 'TypeScript', 'Design Systems', 'Accessibility', 'Testing', 'UI/UX', 'Performance Optimization'],
    points: [
      'Responsible for developing and maintaining a scalable design system by creating new components, enhancing existing ones, and ensuring quality through unit tests, visual regression testing, and bug fixing.',
      'Focused on delivering accessible, well-documented components that meet modern standards and provide seamless integration across Phrase products.',
      'Helped newly acquired engineering teams post-M&A accelerate design system adoption.',
    ],
  },
  {
    role: 'Frontend Engineer',
    company: 'Allegro / Mall.cz',
    description: 'One of the largest e-commerce marketplaces in central and eastern Europe, serving millions of customers with a wide range of products and services.',
    contractType: 'Full-time employee',
    period: '06/2018 - 02/2023',
    location: 'Prague',
    logo: allegroLogo,
    technologies: ['Vue.js', 'React', 'TypeScript', 'Node.js', 'MongoDB', 'E-commerce'],
    points: [
      'Member of the core web team responsible for development and maintenance of high-traffic e-commerce pages for Mall Group e-shops, including Homepage, Product Detail, Category / Listing pages, Loyalty Programs, and Bonus Sets.',
      'Closely cooperated with Product Owners and UI/UX designers throughout the full feature development lifecycle.',
      'Developed internal full-stack applications for the Marketing department to manage banners and create seasonal campaign pages for the Mall.cz website.',
    ],
  },
  {
    role: 'Frontend Engineer',
    company: 'DigiTerapie.cz',
    description: 'Startup digital mental health platform providing video online therapy and psychological support services.',
    contractType: 'Part-time freelance contract',
    period: '04/2021 - 08/2022',
    location: 'Prague',
    logo: digiterapieLogo,
    technologies: ['Vue.js', 'Nuxt.js', 'TypeScript', 'SCSS'],
    points: [
      'Developed and maintained web applications for DigiTerapie.cz, startup platform providing digital therapy solutions for mental health.',
      'Collaborated closely with Product Owner and UI/UX designers to implement new features and improve existing ones.',
      'Contributed to the development of frontend application using Vue.js, Nuxt.js, and other modern web technologies, ensuring high performance, accessibility, and maintainability.',
    ],
  },
  {
    role: 'Junior Frontend Developer',
    company: 'Servodata a.s',
    description: 'Small software development company providing IT solutions and services for various clients in the Czech Republic.',
    contractType: 'Full-time employee',
    period: '09/2017 - 05/2019',
    location: 'Prague',
    logo: servodataLogo,
    technologies: ['HTML/CSS', 'JavaScript', 'Angular 2'],
    points: [
      'Contributed to the Aukro.cz platform, which was a first experience working with a large enterprise-level codebase.',
    ],
  },
];
</script>

<template>
  <LayoutContainer>
    <section class="py-16 lg:py-24">
      <div class="mx-auto max-w-3xl">
        <LandingSectionhead align="center">
          <template #title>Career Timeline</template>
          <template #desc>
            Key frontend engineering roles and outcomes across product, design system, and e-commerce teams.
          </template>
        </LandingSectionhead>

        <div class="mt-12 space-y-8">
          <article
            v-for="(item, index) in timeline"
            :key="`${item.company}-${item.period}`"
            class="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-slate-300"
          >
            <div
              v-if="index !== timeline.length - 1"
              class="absolute left-10 bottom-0 hidden translate-y-full h-8 w-px bg-slate-200 md:block"
              aria-hidden="true"
            />

            <!-- Company Logo -->
            <div v-if="item.logo" class="md:absolute md:top-6 md:right-6 mb-4 md:mb-0 inline-block">
              <img
                :src="item.logo"
                :alt="`${item.company} logo`"
                class="h-16 w-16 rounded-lg object-scale-down"
              />
            </div>

            <div class="flex items-start gap-4">
              <div class="mt-1 hidden h-4 w-4 flex-shrink-0 rounded-full bg-primary md:block" aria-hidden="true" />

              <div class="w-full">
                <p class="text-sm font-semibold uppercase tracking-wide text-primary-600">
                  {{ item.period }} | {{ item.location }}
                </p>
                <h2 class="mt-1 text-2xl font-bold text-slate-900">
                  {{ item.role }}
                </h2>
                <div class="mt-2 flex items-center gap-2">
                  <p class="text-base font-semibold text-slate-800">{{ item.company }}</p> -
                  <span class="text-sm ">{{ item.contractType }}</span>
                </div>
                <p class="mt-1 text-sm italic text-slate-500">{{ item.description }}</p>

                <hr class="my-4 border-slate-200" />

                <ul class="mt-4 space-y-2 text-slate-600">
                  <li v-for="point in item.points" :key="point" class="leading-relaxed pl-4 -ml-4 text-sm">
                    - {{ point }}
                  </li>
                </ul>

                <!-- Technologies -->
                <hr class="my-4 border-slate-200" />
                <div class="mt-3 flex flex-wrap gap-2">
                  <span v-for="tech in item.technologies" :key="tech" class="inline-block bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-full">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div class="mt-10 flex justify-center">
          <LandingLink href="/#about-me" styleName="outline">
            Back to landing page
          </LandingLink>
        </div>
      </div>
    </section>
  </LayoutContainer>
</template>
