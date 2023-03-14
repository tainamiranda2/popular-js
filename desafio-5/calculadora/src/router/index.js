import { createRouter, createWebHistory } from "vue-router";
import Calculadora from "../views/Calculadora.vue";

const routes = [
  {
    path: "/",
    name: "calculadora",
    component: Calculadora
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
