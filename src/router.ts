// src/router/index.ts
import {createRouter, createWebHashHistory} from 'vue-router';

import Catalog from '@/views/Catalog.vue';
import Home from "@/views/Home.vue";
import CollectSystems from "@/views/CollectSystems.vue";

const routes= [
  { path: '/', name: 'Главная', component: Home, children: [
      { path: 'collect_systems/', name: 'Системы хранения', component: CollectSystems, children: [
          { path: 'shelving_system_kits/', name: 'Комплекты стеллажных систем', component: Catalog },
        ]},
  ]},
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
