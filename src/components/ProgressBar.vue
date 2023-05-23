<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const steps = ["Upload Image", "Generate Depth Map", "Generate STL"];

const currentStep = computed(() => {
  switch (route.path) {
    case "/":
      return 0;
    case "/depth-map":
      return 1;
    case "/stl":
      return 2;
    default:
      return -1;
  }
});

const navigateToStep = (index: number) => {
  console.log("DUMMY", index, route.path);
  if (currentStep.value >= index) {
    switch (index) {
      case 0:
        console.log("DUMMY", index);
        router.push("/");
        break;
      case 1:
        console.log("DUMMY", index);
        router.push("/depth-map");
        break;
      case 2:
        console.log("DUMMY", index);
        router.push("/stl");
        break;
    }
  }
};
</script>

<template>
  <div class="progress-bar">
    <div
      v-for="(step, index) in steps"
      :key="index"
      :class="{ active: currentStep >= index, completed: currentStep > index }"
      @click="navigateToStep(index)"
    >
      {{ step }}
    </div>
  </div>
</template>

<style scoped lang="stylus">
.progress-bar
  display flex
  gap 1em

  div
    padding 1em
    cursor pointer

.active
  background-color lightblue

.completed
  background-color lightgreen
</style>
