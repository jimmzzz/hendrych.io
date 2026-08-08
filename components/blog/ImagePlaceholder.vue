<template>
    <div
        class="image-placeholder"
        :style="{ backgroundColor: tagColors[normalizedTag] || tagColors.default }"
    >
        <Icon :name="tagIcons[normalizedTag] || tagIcons.default" class="image-placeholder__icon" />
        <span class="image-placeholder__label">{{ tag }}</span>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    tag: string;
    title: string;
}>();

const normalizedTag = computed(() => props.tag?.toLowerCase() ?? "");

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
    ai: "#10A37F",
    git: "#F05032",
    animations: "#8B5CF6",
    development: "#64748B",
    default: "#9CA3AF",
};

const tagIcons: Record<string, string> = {
    javascript: "simple-icons:javascript",
    algorithms: "carbon:function",
    css: "simple-icons:css3",
    html: "simple-icons:html5",
    typescript: "simple-icons:typescript",
    vue: "simple-icons:vuedotjs",
    react: "simple-icons:react",
    python: "simple-icons:python",
    rust: "simple-icons:rust",
    ai: "hugeicons:artificial-intelligence-04",
    animations: "mdi:motion-outline",
    git: "mdi:git",
    development: "carbon:code",
    default: "carbon:document-blank",
};
</script>

<style scoped lang="scss">
.image-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    height: 200px;
    border-radius: 8px;
    transition: background-color 0.3s ease;
}

.image-placeholder__icon {
    width: 56px;
    height: 56px;
    color: rgba(0, 0, 0, 0.75);
}

.image-placeholder__label {
    color: black;
    font-size: 16px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
}
</style>
