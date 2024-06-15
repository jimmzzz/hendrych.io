<script setup lang="ts">
import { computed } from 'vue';

interface Props {
    level: 1 | 2 | 3 | 4 | 5 | 6 | 'display' | 'subHeading';
    tag?: string;
}

const props = defineProps<Props>()

// withDefaults(defineProps<Props>(), {
//   styleName: "primary",
// });

const sizes = {
    'display': 'text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight',
    'subHeading': 'text-2xl text-slate-500 font-semibold',
    '1': 'text-4xl lg:text-5xl font-bold',
    '2': 'text-3xl lg:text-4xl font-bold',
    '3': 'text-3xl font-bold',
    '4': 'text-2xl font-bold',
    '5': 'text-xl font-bold',
    '6': 'text-lg font-bold',
};

const getTag = computed(() => {
    if (props.tag) return props.tag

    if (props.level === 'display') {
        return 'h1'
    }
    if (props.level === 'subHeading') {
        return 'h2'
    }
    return `h${props.level}`
})

</script>

<template>
    <component :is="getTag" :class="[
        sizes[props.level],
    ]">
        <slot />
    </component>
</template>
