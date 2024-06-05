<template>
  <nav aria-label="breadcrumb" class="breadcrumbs-container">
    <ol class="breadcrumbs">
      <li v-for="(crumb, index) in breadcrumbs" :key="index" class="breadcrumbs__item" :class="{'active': index === breadcrumbs.length - 1}">
        <router-link :to="crumb.path" class="breadcrumbs__item-link">{{ crumb.name }}</router-link>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const breadcrumbs = computed(() => {
  const matched = route.matched;
  return matched.map((r) => {
    return {
      name: r.name as string,
      path: r.path,
    };
  });
});

</script>

<style>
.breadcrumbs-container {
  padding-top: 32px;
  margin-bottom: 32px;

  font-family: 'SF-UI-Text';
  font-size: 16px;
  line-height: 16px;
}

.breadcrumbs {
  display: flex;
  list-style: none;
  padding: 0;
}

.breadcrumbs__item + .breadcrumbs__item::before {
  content: '/';
  padding: 0 0.5rem;
}

.breadcrumbs__item-link {
  text-decoration: none;
  color: #727783;
}


</style>
