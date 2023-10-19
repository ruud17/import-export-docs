<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';

const { currentPage, totalPages } = defineProps(['currentPage', 'totalPages']);

const emit = defineEmits<{
  (event: 'updateCurrentPage', id: number): void;
}>();

const internalCurrentPage = ref(currentPage.value);

const pageChanged = (newPage: number) => {
  internalCurrentPage.value = newPage;
  emit('updateCurrentPage', newPage);
};
</script>

<template>
  <v-col class="text-center">
    <v-pagination
      v-model="internalCurrentPage"
      :length="totalPages"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
      @update:model-value="pageChanged"
      class="elevation-1"
    >
    </v-pagination>
  </v-col>
</template>
