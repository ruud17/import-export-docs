<script setup lang="ts">
import BookList from './components/BookList.vue'
</script>

<template>
<main>
    <BookList />
  </main>
</template>

<style scoped>
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
