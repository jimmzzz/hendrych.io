<template>
    <div>
        <section>
            <span>{{ props.language }}</span>
            <span>{{ props.filename }}</span>
            <button @click="navigator.clipboard.writeText(props.code)">Copy</button>
        </section>
        <slot />
    </div>
</template>

<script setup>
const props = defineProps({
    code: {
        type: String,
        default: ''
    },
    language: {
        type: String,
        default: null
    },
    filename: {
        type: String,
        default: null
    },
    highlights: {
        type: Array,
        default: []
    }
})
</script>
