<template>
  <div class="filters">
    <span class="block xl:inline mr-2 mb-2 text-sm  text-gray-700">Filter by tag:</span>
    <UITag
      v-for="tag in VALID_TAGS"
      :key="tag"
      className="mr-2 mb-2"
      :active="selectedTag === tag"
      @click="emit('update:selectedTag', selectedTag === tag ? '' : tag)"
    >
      {{ tag?.at(0).toUpperCase() + tag.slice(1) }}
    </UITag>
  </div>
</template>

<script setup lang="ts">
import { VALID_TAGS } from "../../utils/blog";

const props = defineProps({
  selectedTag: String,
});

const emit = defineEmits<{
  (e: "update:selectedTag", value: string): void;
}>();
</script>

<style scoped lang="scss">

</style>
