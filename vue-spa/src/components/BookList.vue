<script setup lang="ts">
import { onMounted, computed, ref } from 'vue';
import { useBookStore } from '@/store/bookStore';
import BookRow from './BookRow.vue';
import BookTableHeader from './BookTableHeader.vue';
import BookHeader from './BookHeader.vue';
import DisplayError from './DisplayError.vue';
import BookPagination from './BookPagination.vue';
import NoBooksToDisplay from './NoBooksToDisplay.vue';
import BooksLoading from './BooksLoading.vue';

const bookStore = useBookStore();

onMounted(async () => {
  await bookStore.getBooks();
});

const bookCount = computed(() => bookStore.books.length);
const error = computed(() => bookStore.error);
const loading = computed(() => bookStore.loading);

const itemsPerPage = ref(5);
const currentPage = ref(1);
const totalPages = computed(() => {
  return Math.ceil(bookCount.value / itemsPerPage.value);
});

// Although it's preferable for the API to handle pagination, in this case, it's managed on the frontend to showcase its capabilities.
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return bookStore.books.slice(start, end);
});

const updateCurrentPage = (newPage: number) => {
  currentPage.value = newPage;
};
</script>

<template>
  <div v-if="loading"><BooksLoading /></div>
  <div v-else>
    <div v-if="bookStore.error" class="error">
      <DisplayError :error="error" />
    </div>

    <div v-else-if="bookCount > 0">
      <v-container class="bg-white outlined rounded">
        <BookHeader />
        <BookTableHeader />
        <v-row>
          <v-expansion-panels class="custom-panel pl-5 pr-5">
            <v-expansion-panel v-for="book in paginatedItems" :key="book.title">
              <BookRow :book="book" />
              <v-expansion-panel-text class="text-h7">
                {{ book.about }}
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
        <v-row v-show="bookCount > 1">
          <BookPagination
            :current-page="currentPage"
            :total-pages="totalPages"
            @updateCurrentPage="updateCurrentPage"
          />
        </v-row>
      </v-container>
    </div>

    <div v-else><NoBooksToDisplay /></div>
  </div>
</template>

<style>
.custom-panel > div:nth-child(2n + 1) {
  background-color: rgb(244, 243, 243);
}

.error {
  color: rgb(255, 0, 0);
}
</style>
