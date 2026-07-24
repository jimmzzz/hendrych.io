<template>
    <div
        class="image-placeholder"
        :style="{ backgroundColor: tagColors[tag.toLowerCase()] || tagColors.default }"
    >
        <span class="image-placeholder__label">{{ tag }}</span>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    tag: string;
    title: string;
}>();

const tagColors: Record<string, string> = {
    javascript: "#F7DF1E",
    algorithms: "#4CAF50",
    css: "#1572B6",
    html: "#E34C26",
    typescript: "#3178C6",
    vue: "#4FC08D",
    react: "#61DAFB",
    python: "#3776AB",
    rust: "#CE422B",
    default: "#9CA3AF",
};
</script>

<style scoped lang="scss">
.image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 200px;
    border-radius: 8px;
    transition: background-color 0.3s ease;
}

.image-placeholder__label {
    color: black;
    font-size: 28px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
}
</style>
