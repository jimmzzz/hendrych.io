<template>
    <div>
        <header class="page-heading mt-9">
            <div class="wrapper">
                <h1 class="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl xl:text-6xl">
                    All articles
                </h1>
                <p class="font-light text-gray-500 md:text-lg xl:text-xl dark:text-gray-400">Here's a list of all my
                    great articles</p>
                <hr class="my-9">
            </div>
        </header>

        <!-- filtering tabs -> uxecel -->

        <ContentList :query="query" v-slot="{ list }">

            <div class="grid-wrapper">
                <template v-for="article in list" :key="article._path">
                    <BlogPostPreview :post="article" />
                </template>
            </div>

        </ContentList>
    </div>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

definePageMeta({
    layout: 'blog',
});

const query: QueryBuilderParams = {
    path: '/blog',
    // only: ['title', 'description', 'tags', '_path', 'img', 'createdAt', 'updatedAt', 'Author'],
    // where: [
    //     { layout: 'article' }
    // ],
    limit: 10,
    sort: [{ createdAt: -1 }]
}

</script>

<style scoped>
.grid-wrapper {
    @apply grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10;
}
</style>