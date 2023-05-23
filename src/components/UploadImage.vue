<script setup lang="ts">
import { ref } from "vue";

const image = ref("");

const onFileChange = (e: Event) => {
  const files = (e.target as HTMLInputElement).files;
  if (!files || files.length === 0) return;
  createImage(files[0]);
};

const createImage = (file: File) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    image.value = e.target?.result as string;
  };
  reader.readAsDataURL(file);
};
</script>

<template>
  <input type="file" accept="image/*" @change="onFileChange" />
</template>
