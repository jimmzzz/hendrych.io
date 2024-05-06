<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingHero id="home" />
    <!-- <LandingClients /> -->
    <!-- TODO: clients -->
    <LandingServices id="services" />
    <LandingAbout id="aboutMe" />
    <LandingTechStack />
    <LandingProjects id="projects" />

    <!-- <LandingNewsletter /> -->
    <!-- <LandingCta /> -->
  </LandingContainer>
</template>
