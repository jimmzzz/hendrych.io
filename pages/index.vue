<script setup>
definePageMeta({
  layout: "landing",
});

useHead({
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
    <LandingAbout id="aboutMe" />
    <LandingTechStack />

    <!-- <LandingProjects id="projects" /> -->

    <LandingContactSection id="contact" />
    <!-- <LandingSectionhead></LandingSectionhead> -->
    <!-- <LandingNewsletter /> -->
  </LayoutContainer>
</template>
