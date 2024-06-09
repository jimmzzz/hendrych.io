<template>
    <nav class="bc" aria-label="Breadcrumb">
        <ol class="bc__list">
            <li v-for="(item, index) in pathSegments" :key="item.title">
                <component :aria-current="route.path === item.path ? 'page' : null" :class="[
                    'bc__list-item',
                    { 'bc__list-item--first': index === 0 },
                    { 'bc__list-item--last': index === pathSegments.length - 1 },
                ]" :is="index === pathSegments.length - 1 ? 'div' : nl"
                    :to="index !== pathSegments.length - 1 ? item.path : ''">
                    <Icon :name="!index ? 'Home' : 'ArrowRight'" width="24" height="24" />
                    <span :class="[{ 'bc__item-text': index !== 0 }]">
                        {{ item.title.replaceAll('-', ' ') }}
                    </span>
                </component>
            </li>
        </ol>
    </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const nl = defineNuxtLink({});
const route = useRoute();

const pathSegments = computed(() => {
    const paths = route.path.substring(1).split('/');
    const composedPaths: string[] = [];
    paths.forEach((path) => {
        const newPath = `/${path}`;
        composedPaths.push(newPath);
    });

    const newPaths = composedPaths.map((item, index) => {
        return {
            title: paths[paths.length - (index + 1)],
            path: composedPaths.slice(0, composedPaths.length - index).join(''),
        };
    });
    return newPaths.reverse();
});
</script>

<style scoped>
.bc {
    @apply flex my-4;

    &__list {
        @apply inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse;
    }

    &__list-item {
        /* @apply text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white capitalize; */
        @apply flex items-center text-sm font-medium text-gray-700 hover:text-primary-500 capitalize;

        &--first {
            @apply inline-flex items-center;
        }

        &--last {
            /* @apply text-gray-500 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-400; */
            @apply text-gray-500 hover:text-gray-500;
        }
    }

    &__item-text {
        @apply ms-1 text-sm font-medium md:ms-2;
    }
}
</style>
