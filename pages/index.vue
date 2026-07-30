<script setup>
definePageMeta({
  layout: "landing",
});

const pageTitle = 'Tomáš Hendrych | Senior Frontend Engineer (Vue, Nuxt, React)'
const pageDescription = 'Senior frontend engineer from Prague helping product teams ship polished Vue, Nuxt and React experiences with strong performance, accessibility, and maintainable code.'
const pageUrl = 'https://hendrych.io/'
const ogImage = 'https://hendrych.io/img/ogImage.png'

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
