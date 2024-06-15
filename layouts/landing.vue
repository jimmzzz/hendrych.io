<template>
  <LandingNavbar></LandingNavbar>
  <slot></slot>
  <ConsentPanel />
  <LandingFooter></LandingFooter>
  <SpeedInsights />
</template>

<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"

</script>