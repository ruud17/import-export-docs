<script setup lang="ts">
import type { Book } from '@/types/book';
import { type PropType } from 'vue';

defineProps({
  book: {
    type: Object as PropType<Book>,
    required: true
  }
});
</script>

<template>
  <v-expansion-panel-title>
    <v-row>
      <v-col cols="6" class="font-weight-bold">
        <div class="d-flex">
          <v-img
            cols="4"
            class="bg-white"
            max-width="100"
            max-height="140"
            :src="book.cover_image"
            cover
          ></v-img>
          <div class="d-flex flex-column pl-4">
            <p class="text-h6 font-weight-bold">{{ book.title }}</p>
            <p class="text-h6 font-weight-medium text-disabled">{{ book.author }}</p>
          </div>
        </div>
      </v-col>
      <v-col cols="2" class="d-flex font-weight-bold align-center text-h6 justify-center">
        <span> {{ book.releaseDate }}</span>
      </v-col>
      <v-col cols="2" class="d-flex font-weight-bold align-center text-h6 justify-center">
        <span> {{ book.rating }}/10</span>
      </v-col>
      <v-col
        cols="2"
        class="d-flex flex-column font-weight-bold align-center text-h6 justify-center"
      >
        <ul v-for="s in book.buyOn" :key="s">
          <li class="font-weight-bold text-h6">{{ s }}</li>
        </ul>
      </v-col>
    </v-row>
  </v-expansion-panel-title>
</template>

<style>
ul {
  list-style-type: none;
}

ul li {
  color: rgb(164, 206, 96);
}

.v-icon {
  display: none !important;
}
</style>
