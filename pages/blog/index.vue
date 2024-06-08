<template>
    <main class="max-w-screen-lg mx-auto px-5">
        <header class="page-heading mt-9">
            <div class="wrapper">
                <h1 class="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl xl:text-6xl">
                    All articles</h1>
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
    </main>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = {
    path: '/blog',
    // only: ['title', 'description', 'tags', '_path', 'img', 'createdAt', 'updatedAt', 'Author'],
    // where: [
    //     { layout: 'article' }
    // ],
    limit: 10,
    sort: [{ date: -1 }]
}

console.log(query)

//   async asyncData({ $content }) {
//     const posts = await $content()
//         .only(['title', 'image', 'tags', 'slug'])
//         .sortBy('createdAt', 'desc')
//         .fetch()

//     console.log("posts", posts)

//     return {
//         posts,
//     }
//  }

</script>

<style scoped>
.grid-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}
</style>