// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/home.vue";
import ListaClientes from "../views/cliente/lista-clientes.vue";
import CadastroCliente from "../views/cliente/cadastro-clientes.vue";
import EditarClientes from "../views/cliente/editar-cliente.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "Página Inicial" },
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: { title: "Página Inicial" },
  },
  {
    path: "/lista-clientes",
    name: "ListaClientes",
    component: ListaClientes,
    meta: { title: "Lista de Clientes" },
    props: true,
  },
  {
    path: "/cadastro-cliente",
    name: "CadastroCliente",
    component: CadastroCliente,
    meta: { title: "Cadastro de Cliente" },
  },
  {
    path: "/editar-cliente/:idRegistro",
    name: "EditarClientes",
    component: EditarClientes,
    meta: { title: "Editar de Cliente" },
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(), // Use createWebHistory para Vite
  routes,
});

// Atualiza o título do documento conforme a rota
router.afterEach((to: any) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
