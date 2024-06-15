<template>
  <LandingNavbar layout="blog" />
  <main class="lg:max-w-screen-lg 2xl:max-w-screen-xl mx-auto px-5">
    <UIBreadCrumb v-if="$route.path !== '/blog'" />
    <slot></slot>
  </main>
  <ConsentPanel />
  <LandingFooter></LandingFooter>
</template>