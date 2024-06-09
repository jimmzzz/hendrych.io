<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LayoutContainer>
    <LandingHero id="home" />
    <!-- <LandingClients /> -->
    <!-- TODO: clients -->
    <LandingServices id="services" />
    <LandingAbout id="aboutMe" />
    <LandingTechStack />
    <LandingProjects id="projects" />

    <!-- <LandingNewsletter /> -->
    <!-- <LandingCta /> -->
  </LayoutContainer>
</template>
