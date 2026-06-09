<template>
    <ContentQuery :path="$route.path" find="one" v-slot="{ data }">
        <div class="blog-post prose">


            <div class="blog-post__header not-prose">
                <UIHeading :level="1" class="blog-post__title"> {{ data?.title }} </UIHeading>

                <span class="blog-post__date">Published on {{ formatDate(data?.createdAt) }} / {{ data?.author }}</span>

                <div
                    v-for="tag in data.tags"
                    :key="tag.id"
                    class="blog-post__tag"
                >
                    {{ tag }}
                </div>

                <NuxtImg v-if="data?.image" class="blog-post__image" :src="data?.image" />
            </div>

            <!-- ARTICLE renderer -->
            <ContentRenderer :value="data" />

            <!-- TODO: footer for blog with socials links -->
        </div>
    </ContentQuery>
</template>

<script setup lang="ts">
import { formatDate } from '../../utils/date';

definePageMeta({
    layout: 'blog',
});
</script>

<style scoped lang="scss">
.blog-post {
    @apply max-w-[735px];
}

.blog-post__title {
    @apply mt-8 mb-4 text-5xl font-extrabold leading-tight;
}

.blog-post__date {
    @apply block mb-4 text-sm text-slate-600;
}

.blog-post__tag {
    @apply inline-block mr-2 mb-6 rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700;
}

.blog-post__image {
    @apply mb-8 h-auto w-full rounded-xl object-cover object-center md:h-72;
}
</style>