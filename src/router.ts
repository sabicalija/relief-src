import { createRouter, createWebHistory } from "vue-router";
import UploadImage from "./routes/UploadImage.vue";
import GenerateDepthMap from "./routes/GenerateDepthMap.vue";
import GenerateStl from "./routes/GenerateStl.vue";

const routes = [
  { path: "/", component: UploadImage },
  { path: "/depth-map", component: GenerateDepthMap },
  { path: "/stl", component: GenerateStl },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
