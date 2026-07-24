<script setup lang="ts">

interface Props {
    size?: 'lg' | 'md' | 'sm',
    color?: 'gray' | 'slate' | 'blue' | 'green' | 'amber' | 'rose',
    active?: boolean,
    className?: string;
}

const props = withDefaults(defineProps<Props>(), {
    size: 'md',
    color: 'gray',
    active: false,
})

const sizes = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
};

const colors = {
    gray: 'bg-gray-200 text-gray-700',
    slate: 'bg-slate-200 text-slate-700',
    blue: 'bg-blue-100 text-blue-700',
    green: 'bg-emerald-100 text-emerald-700',
    amber: 'bg-amber-100 text-amber-700',
    rose: 'bg-rose-100 text-rose-700',
};

const activeColors = {
    gray: 'bg-gray-700 text-gray-100',
    slate: 'bg-slate-700 text-slate-100',
    blue: 'bg-blue-700 text-blue-100',
    green: 'bg-emerald-700 text-emerald-100',
    amber: 'bg-amber-600 text-amber-100',
    rose: 'bg-rose-700 text-rose-100',
};

</script>

<template>
    <span :class="['inline-flex items-center gap-1 rounded-full font-semibold transition-colors', sizes[props.size], props.active ? activeColors[props.color] : colors[props.color], props.className]">
        <slot name="prefix" />
        <slot />
        <slot name="suffix" />
    </span>
</template>
