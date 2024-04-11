<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="pb-24 md:order-1 hidden md:block">
      <img class="relative left-12" src="~/assets/img/hero-photo.png" alt="Starship starts the engine" loading="eager"
        format="avif" width="618" height="604" />
    </div>

    <div>
      <UIHeading :level="'subHeading'" class="mb-6">
        Hi, I'm Tom Hendrych
      </UIHeading>
      <UIHeading :level="'display'">
        I'm a front-end engineer.
      </UIHeading>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Nuxtship is a starter template for startups, marketing websites &
        landing pages.<wbr /> Built with Nuxt & TailwindCSS. You can quickly
        create any website with this starter.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink href="https://github.com/Gr33nW33n/nuxtship-template" target="_blank" rel="noopener">Get Started
        </LandingLink>
        <LandingLink size="lg" styleName="outline" rel="noopener" href="https://github.com/Gr33nW33n/nuxtship-template"
          target="_blank">View Repo</LandingLink>
      </div>
    </div>
  </main>
</template>
