import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    // AJUSTE: A expressão regular agora aceita os idiomas completos
    path: "/:lang(pt|en|es)?",
    component: () => import("layouts/home/HomeLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("pages/HomePage.vue"),
        meta: { requiresAuth: false },
      },
      {
        path: 'tours/:slug',
        name: 'tourDetails',
        component: () => import('pages/tours/TourDetailsPage.vue'),
        meta: { requiresAuth: false },
      },
      {
        path: 'passeio/:slug',
        name: 'singleTourDetails',
        component: () => import('pages/tours/SingleTourDetailsPage.vue'),
        meta: { requiresAuth: false },
      },
      {
        path: 'passeios',
        name: 'allTours',
        component: () => import('pages/tours/AllToursPage.vue'),
        meta: { requiresAuth: false },
      },
    ],
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      // ADICIONE ESTA LINHA: Redireciona /auth -> /auth/login
      { path: '', redirect: { name: 'login' } }, 
      
      { 
        path: 'login', 
        name: 'login', 
        component: () => import('pages/auth/LoginPage.vue') 
      }
    ]
  },

  // --- NOVA ÁREA: ADMIN DASHBOARD (Protegida + NO-SEO) ---
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    meta: { requiresAuth: true }, // Meta tag para o Guard
    children: [
      { 
        path: '', 
        name: 'dashboard', 
        component: () => import('pages/admin/DashboardPage.vue') 
      },
      // Outras rotas administrativas aqui...
    ]
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;