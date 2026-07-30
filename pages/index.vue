<script setup>
import { EMAIL_ADDRESS, GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL, X_URL } from '@/utils/links';

definePageMeta({
  layout: "landing",
});

const pageTitle = 'Tomáš Hendrych | Senior Frontend Engineer (Vue, Nuxt, React)'
const pageDescription = 'Senior frontend engineer from Prague helping product teams ship polished Vue, Nuxt and React experiences with strong performance, accessibility, and maintainable code.'
const pageUrl = 'https://hendrych.io/'
const ogImage = 'https://hendrych.io/img/ogImage.png'
const entityId = `${pageUrl}#tomas-hendrych`

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': entityId,
      name: 'Tomáš Hendrych',
      url: pageUrl,
      jobTitle: 'Senior Frontend Engineer',
      description: pageDescription,
      image: ogImage,
      email: `mailto:${EMAIL_ADDRESS}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Prague',
        addressCountry: 'CZ',
      },
      knowsAbout: [
        'Frontend development',
        'Vue.js',
        'Nuxt',
        'React',
        'TypeScript',
        'Web performance',
        'Accessibility',
      ],
      sameAs: [LINKEDIN_URL, GITHUB_URL, X_URL, INSTAGRAM_URL],
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${pageUrl}#services`,
      name: 'Hendrych.io Frontend Services',
      url: pageUrl,
      description: 'Frontend development services for SaaS products, design systems, marketing websites, and internal tools.',
      areaServed: [
        {
          '@type': 'Country',
          name: 'Czech Republic',
        },
        {
          '@type': 'Place',
          name: 'Remote',
        },
      ],
      provider: {
        '@id': entityId,
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${pageUrl}#website`,
      name: 'Hendrych.io',
      url: pageUrl,
      inLanguage: 'en',
      publisher: {
        '@id': entityId,
      },
    },
  ],
}

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogType: 'website',
  ogUrl: pageUrl,
  ogImage,
  twitterCard: 'summary_large_image',
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
  twitterImage: ogImage,
})

useHead({
  link: [
    { rel: 'canonical', href: pageUrl },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(structuredData),
    },
  ],
  meta: [
    { name: 'seznam-wmt', content: 'kTVKDlnCJbNfmrhyNG5nCjhLSMCI9aX7' },
    { name: 'msvalidate.01', content: 'FE3C2A9B35244356503146E02A2DFEFD' },
  ],
})
</script>

<template>
  <LayoutContainer>
    <LandingHero id="home" />
    <!-- <LandingClients /> -->
    <!-- TODO: clients -->
    <LandingServices id="services" />
    <LandingAbout id="about-me" />
    <LandingResults id="results" />
    <LandingTechStack />

    <!-- <LandingProjects id="projects" /> -->

    <LandingContactSection id="contact" />
    <!-- <LandingSectionhead></LandingSectionhead> -->
    <!-- <LandingNewsletter /> -->
  </LayoutContainer>
</template>
