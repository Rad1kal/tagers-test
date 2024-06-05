// src/router/index.ts
import {createRouter, createWebHistory} from 'vue-router';

import Catalog from '@/views/Catalog.vue';
import Home from "@/views/Home.vue";
import CollectSystems from "@/views/CollectSystems.vue";

const routes= [
  { path: '/', name: 'Главная', component: Home, children: [
      { path: '', name: 'Системы хранения', component: CollectSystems, children: [
          { path: '', name: 'Комплекты стеллажных систем', component: Catalog },
        ]},
  ]},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
