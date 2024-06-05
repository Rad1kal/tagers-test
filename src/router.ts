// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';

import Catalog from '@/views/Catalog.vue';
import Home from "@/views/Home.vue";
import CollectSystems from "@/views/CollectSystems.vue";

const routes= [
  { path: '/', name: 'Главная', component: Home, children: [
      { path: 'collect_systems/', name: 'Системы хранения', component: CollectSystems, children: [
          { path: 'shelving_system_kits/', name: 'Комплекты стеллажных систем', component: Catalog },
        ]},
  ]},


  // {
  //   path: '/static/:fileName',
  //   name: 'StaticFile',
  //   component: () => import('../views/StaticFile.vue'), // Создайте этот компонент
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
