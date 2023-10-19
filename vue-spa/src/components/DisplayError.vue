<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  error: string;
}>();
</script>

<template>
  <v-alert type="error" title="Error:" :text="error"></v-alert>
</template>
