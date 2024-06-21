<template>
    <div>
        <section class="info-panel">
            <div class="info-panel__left">
                <Icon :name="iconName" class="info-panel__icon" />
                <span class="info-panel__file-name" v-if="props.filename">{{ fileNameText }}</span>
            </div>

            <button class="flex gap-1" @click="copyToClipboard">
                <div v-if="textCopied" class="flex">
                    <Icon name="carbon:checkmark-filled" class="info-panel__icon text-green-500 mr-1" />
                    <span>Copied successfully</span>
                </div>
                <div v-else class="flex">
                    <Icon name="ph:clipboard" class="info-panel__icon mr-1" />
                    Copy code
                </div>
            </button>
        </section>
        <slot />
    </div>
</template>

<script setup lang="ts">
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
        default: `index`
    },
    highlights: {
        type: Array as () => number[],
        default: () => []
    },
    meta: {
        type: String,
        default: null
    },
    class: {
        type: String,
        default: null
    }
})

const iconMapTable = {
    html: 'logos:html-5',
    css: 'logos:css-3',
    sass: 'logos:sass',
    js: 'logos:javascript',
    javascript: 'logos:javascript',
    vue: 'logos:vue',
    md: 'logos:markdown',
    nodejs: 'logos:node-js-icon',

}
const langMapTable = {
    html: 'html',
    css: 'css',
    js: 'javascript',
    javascript: 'logos:javascript',
    sass: 'Sass',
    vue: 'logos:vue',
    md: 'logos:markdown',
    nodejs: 'logos:node-js-icon',
}

const textCopied = ref(false)

const copyToClipboard = () => {
    navigator.clipboard.writeText(props.code).then(function () {
        textCopied.value = true
        setTimeout(() => {
            textCopied.value = false
        }, 3000);
    }, function (err) {
        console.error('Async: Could not copy text: ', err);
    }
    );
}

const langText = computed(() => {
    return langMapTable[props.language] ?? ''
})
const iconName = computed(() => {
    return iconMapTable[props.language]
})
const fileNameText = computed(() => {
    return `${props.filename}.${props.language}`
})
</script>

<style lang="scss">
.info-panel {
    --panel-height: 45px;
    position: relative;
    height: var(--panel-height);
    align-items: center;
    border-radius: 0.375rem 0.375rem 0 0;

    @apply flex justify-between p-4 text-white text-sm z-10 bg-slate-600;

    &__left {
        @apply flex gap-2;
    }

    &__language {
        @apply uppercase mr-6;
    }

    &__file-name {
        @apply text-sm;
    }

    &__icon {
        @apply flex h-5 w-5;
    }
}
</style>
