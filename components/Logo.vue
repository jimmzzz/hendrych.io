<template>
    <nuxt-link to="/" class="flex items-center">
        <Icon name="Terminal" width="36" height="36" class="text-primary-500 mr-1" />
        <span :class="[
            'self-center text-xl font-semibold whitespace-nowrap dark:text-whit',
            styles[props.variant]
        ]">
            hendrych.io
        </span>
    </nuxt-link>
</template>

<script setup lang="ts">

interface LogoProps {
    variant: 'dark' | 'light'
}

const props = withDefaults(defineProps<LogoProps>(), {
    variant: 'dark'
});

const styles = {
    light: 'text-white',
    dark: 'text-black',
};

</script>
