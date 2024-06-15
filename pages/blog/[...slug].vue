<template>
    <ContentQuery :path="$route.path" find="one" v-slot="{ data }">
        <div class="prose max-w-[735px]">


            <div class="not-prose">
                <!-- <NuxtImg class="aspect-video object-fit object-center rounded-xl mb-6" :src="data?.image" /> -->
                <UIHeading :level="1" class="text-5xl font-extrabold mt-8 mb-4"> {{ data?.title }} </UIHeading>

                <span class="block mb-4 text-slate-600 text-sm">Published on {{ formatDate(data?.createdAt) }}</span>

                <div v-for="tag in data.tags" :key="tag.id"
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-6">
                    {{ tag }}
                </div>

                <NuxtImg class="w-full md:h-72 object-cover object-center rounded-xl mb-8" :src="data?.image" />
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

<style scoped></style>