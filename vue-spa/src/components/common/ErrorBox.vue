<script setup lang="ts">
defineProps({
  error: {
    type: String,
    required: false
  }
});
</script>

<template>
  <v-alert type="error" title="Error:" :text="error"></v-alert>
</template>
