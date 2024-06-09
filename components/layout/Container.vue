<template>
    <component :is="tag" :class="styles[props.layout]">
        <slot />
    </component>
</template>

<script setup lang="ts">

interface LayoutProps {
    layout?: 'landing' | 'blog',
    tag?: string
}

const props = withDefaults(defineProps<LayoutProps>(), {
    layout: 'landing',
    tag: 'div'
});

const styles = {
    landing: 'max-w-screen-xl mx-auto px-5',
    blog: 'lg:max-w-screen-lg 2xl:max-w-screen-xl mx-auto px-5',
};
</script>

<style scoped></style>