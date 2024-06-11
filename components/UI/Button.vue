<script setup lang="ts">
interface Props {
    tag?: string;
    href: string;
    size?: 'lg' | 'md' | 'sm';
    block?: boolean;
    styleName?: 'outline' | 'primary' | 'inverted' | 'muted';
    className?: string;
    [x: string]: any;
}

withDefaults(defineProps<Props>(), {
    size: 'lg',
    styleName: 'primary',
    tag: 'button'
});

const sizes = {
    lg: 'px-5 py-2.5',
    md: 'px-4 py-2',
    sm: 'px-2 py-1',
};

const styles = {
    primary: 'bg-primary text-white hover:bg-primary-600 border-2 border-transparent',
    outline: 'bg-white border-2 border-primary hover:bg-primary-100 text-black',
    inverted: 'bg-white text-black border-2 border-transparent',
    muted: 'bg-gray-100 hover:bg-gray-200 border-2 border-transparent',
};
</script>

<template>
    <component :is="tag" :href="href" :class="[
        'rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 font-medium',
        block && 'w-full',
        sizes[size],
        styles[styleName],
    ]">
        <slot />
    </component>
</template>
