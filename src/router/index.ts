// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/home.vue";
import ListaClientes from "../views/cliente/lista-clientes.vue";
import CadastroCliente from "../views/cliente/cadastro-clientes.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/lista-clientes",
    name: "ListaClientes",
    component: ListaClientes,
  },
  {
    path: "/cadastro-cliente",
    name: "CadastroCliente",
    component: CadastroCliente,
  },
];

const router = createRouter({
  history: createWebHistory(), // Use createWebHistory para Vite
  routes,
});

export default router;
