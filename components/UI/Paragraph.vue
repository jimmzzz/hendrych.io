<script setup lang="ts">
import { computed } from 'vue';

interface Props {
    size?: 'lg' | 'md' | 'sm' | 'xs',
    styleName?: 'regular' | 'relaxed',
    className?: string;
}

const props = withDefaults(defineProps<Props>(), {
    size: 'md',
    styleName: 'regular',
})

const sizes = {
    lg: 'text-lg',
    md: 'text-base',
    sm: 'text-sm',
    xs: 'text-xs',
};

const styles = {
    regular: 'text-slate-600',
    relaxed: 'text-slate-500 leading-relaxed',
    black: 'text-black',
};

</script>

<template>
    <p :class="[
        sizes[props.size],
        styles[props.styleName],
        className,
        // 'max-w-xl'
    ]">
        <slot />
    </p>
</template>
