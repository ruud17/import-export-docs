<script setup lang="ts">
import { onMounted, computed, ref } from 'vue';
import { useBookStore } from '@/store/bookStore';
import BookRow from './BookRow.vue';
import BookTableHeader from './BookTableHeader.vue';

const bookStore = useBookStore();

onMounted(async () => {
  await bookStore.getBooks();
});

const bookCount = computed(() => bookStore.books.length);
const error = computed(() => bookStore.error);

const itemsPerPage = ref(5);
const currentPage = ref(1);
const totalPages = computed(() => {
  return Math.ceil(bookCount.value / itemsPerPage.value);
});

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return bookStore.books.slice(start, end);
});
</script>

<template>
  <div>
    <div v-if="bookStore.error" class="error">
      {{ error }}
    </div>

    <div v-else-if="bookCount > 0">
      <v-container fluid fill-height class="bg-white outlined rounded">
        <p class="text-h4 font-weight-bold pb-8 pl-8 pt-10">Most popular Books of All time</p>
        <BookTableHeader />
        <v-row>
          <v-expansion-panels class="custom-panel pl-5 pr-5">
            <v-expansion-panel v-for="book in paginatedItems" :key="book.title">
              <BookRow :book="book" />
              <v-expansion-panel-text class="text-h6">
                {{ book.about }}
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
        <v-row v-show="bookCount > 1">
          <v-col class="text-center">
            <v-pagination
              v-model="currentPage"
              :length="totalPages"
              prev-icon="mdi-menu-left"
              next-icon="mdi-menu-right"
            >
            </v-pagination>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div v-else>No books to display</div>
  </div>
</template>

<style scoped>
.custom-panel > div:nth-child(2n + 1) {
  background-color: rgb(244, 243, 243);
}

.error {
  color: rgb(255, 0, 0);
}
</style>
