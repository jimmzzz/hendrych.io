<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer class="py-20">

    <UIHeading :level="1" class="mb-8"> Typography </UIHeading>
    <hr class="my-6">

    <UIHeading :level="'display'" class="mb-6"> Display </UIHeading>
    <UIHeading :level="1" class="mb-6"> Heading 1</UIHeading>
    <UIHeading :level="2" class="mb-6"> Heading 2</UIHeading>
    <UIHeading :level="3" class="mb-6"> Heading 3</UIHeading>
    <UIHeading :level="4" class="mb-6"> Heading 4</UIHeading>
    <UIHeading :level="5" class="mb-6"> Heading 5</UIHeading>
    <UIHeading :level="6" class="mb-6"> Heading 6</UIHeading>

    <UIParagraph size="lg" class="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Rerum perspiciatis
      porro vitae
      placeat vero
      expedita, cupiditate soluta repudiandae modi odit voluptatem accusantium aut eaque voluptatibus facere excepturi?
      Labore exercitationem deserunt iste explicabo libero aspernatur temporibus nihil minus, quam harum quos. Ullam
      quis ad aspernatur voluptatum nostrum iusto eligendi cum officiis!
    </UIParagraph>

    <UIParagraph size="md" class="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Rerum perspiciatis
      porro vitae
      placeat vero
      expedita, cupiditate soluta repudiandae modi odit voluptatem accusantium aut eaque voluptatibus facere excepturi?
      Labore exercitationem deserunt iste explicabo libero aspernatur temporibus nihil minus, quam harum quos. Ullam
      quis ad aspernatur voluptatum nostrum iusto eligendi cum officiis!
    </UIParagraph>

    <UIParagraph size="sm" class="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum perspiciatis
      porro vitae
      placeat vero
      expedita, cupiditate soluta repudiandae modi odit voluptatem accusantium aut eaque voluptatibus facere excepturi?
      Labore exercitationem deserunt iste explicabo libero aspernatur temporibus nihil minus, quam harum quos. Ullam
      quis ad aspernatur voluptatum nostrum iusto eligendi cum officiis!
    </UIParagraph>

    <UIParagraph size="xs" class="mb-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum perspiciatis
      porro vitae
      placeat vero
      expedita, cupiditate soluta repudiandae modi odit voluptatem accusantium aut eaque voluptatibus facere excepturi?
      Labore exercitationem deserunt iste explicabo libero aspernatur temporibus nihil minus, quam harum quos. Ullam
      quis ad aspernatur voluptatum nostrum iusto eligendi cum officiis!
    </UIParagraph>

    <UIHeading :level="1" class="mb-8"> Buttons </UIHeading>

    <div class="mb-8">
      <UIButton size="lg" class="mr-6"> Primary </UIButton>
      <UIButton size="md" class="mr-6"> Primary </UIButton>
      <UIButton size="sm" class="mr-6"> Primary </UIButton>
    </div>

    <div class="mb-8">
      <UIButton size="lg" styleName="outline" class="mr-6"> Primary </UIButton>
      <UIButton size="md" styleName="outline" class="mr-6"> Primary </UIButton>
      <UIButton size="sm" styleName="outline" class="mr-6"> Primary </UIButton>
    </div>

    <div class="mb-8">
      <UIButton size="lg" styleName="inverted" class="mr-6"> Secondary </UIButton>
      <UIButton size="md" styleName="inverted" class="mr-6"> Secondary </UIButton>
      <UIButton size="sm" styleName="inverted" class="mr-6"> Secondary </UIButton>
    </div>

    <div class="mb-8">
      <UIButton size="lg" styleName="muted" class="mr-6"> Secondary </UIButton>
      <UIButton size="md" styleName="muted" class="mr-6"> Secondary </UIButton>
      <UIButton size="sm" styleName="muted" class="mr-6"> Secondary </UIButton>
    </div>
  </LandingContainer>
</template>
