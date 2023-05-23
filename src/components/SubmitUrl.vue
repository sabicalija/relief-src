<script setup lang="ts">
import { ref } from "vue";

const imageUrl = ref("");

const submitUrl = () => {
  console.log(imageUrl.value);
};
</script>

<template>
  <form @submit.prevent="submitUrl">
    <input type="text" v-model="imageUrl" placeholder="Enter image URL" />
    <button type="submit">Submit</button>
  </form>
</template>
