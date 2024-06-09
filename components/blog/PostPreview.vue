<template>
    <NuxtLink :to="post._path" class="post-preview">
        <img :src="post.image" alt="blog post image" class="post-preview__image">
        <div class="post-preview__text-wrapper">
            <div class="post-preview__title">
                {{ post.title }}
            </div>
            <p class="post-preview__description">
                {{ post.description }}
            </p>
        </div>
        <div class="post-preview__footer">

            <time class="text-sm text-slate-500" datetime="2022-09-05">
                <span>{{ articleDate }}</span>
            </time>

            <!-- move them to image on hover? -->
            <!-- <div v-for="tag in post.tags" :key="tag.id" class="post-preview__tag">
                {{ tag }}
            </div> -->
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { formatDate } from '../../utils/date';

const props = defineProps({
    post: {
        type: Object,
        required: true,
        default: () => ({
            title: 'Default Title',
            description: 'Default excerpt text...',
            image: 'default-image.jpg',
            tag: 'General'
        })
    }
});

const articleDate = computed(() => {
    const { createdAt, updatedAt } = props.post
    if (!createdAt && !updatedAt) return ''

    return updatedAt ? formatDate(updatedAt) : formatDate(createdAt)
})
</script>

<style scoped>
.post-preview {
    @apply flex flex-col md:max-w-sm overflow-hidden;

    &__image {
        @apply w-full h-[156px] object-cover rounded-md;
    }

    &__text-wrapper {
        @apply py-4 pb-2;
    }

    &__title {
        @apply font-bold text-xl mb-2 leading-tight;
    }

    &__description {
        @apply text-gray-700 line-clamp-3 text-sm;
    }

    &__footer {
        @apply pb-2 mt-auto;
    }

    &__tag {
        @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2;
    }
}
</style>