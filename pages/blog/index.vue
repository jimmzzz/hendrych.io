<template>
  <div>
    <header class="page-heading mt-9">
      <div class="wrapper">
        <h1
          class="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl xl:text-6xl"
        >
          All articles
        </h1>
        <!-- <p
          class="font-light text-gray-500 md:text-lg xl:text-xl dark:text-gray-400 mb-2"
        >
          Here's a list of all my great articles
        </p> -->

        <BlogArticleFilter
            v-model:selectedTag="selectedTag"
            @update:selectedTag="(tag) => console.log('selectedTag updated:', tag)"
        />
        <hr class="mb-4" />
      </div>
    </header>

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
import BlogArticleFilter from "~/components/blog/ArticleFilter.vue";

definePageMeta({
  layout: "blog",
});

const selectedTag = ref("");

const query = computed(() => {
  const baseQuery = {
    path: "/blog", // The folder containing your markdown files
    limit: 10,
    sort: [{ createdAt: -1 }],
    where: [],
  };

  // Inject a Nuxt Content filter clause only if a tag is active
  if (selectedTag.value) {
    baseQuery.where.push({
      tags: { $contains: selectedTag.value },
    });
  }

  return baseQuery;
});

const setFilterTag = (tag) => {
  selectedTag.value = selectedTag.value === tag ? "" : tag;
};
</script>

<style scoped>
.grid-wrapper {
  @apply grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10;
}
</style>
