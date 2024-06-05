<template>
  <div class="cards-catalog">
    <CardInCatalog :card-data="card" v-for="card in cards"/>
  </div>
</template>

<script setup lang="ts">


import CardInCatalog from "@/controls/CardInCatalog.vue";

const props = defineProps<{
  cards?: object[]
}>()
</script>

<style>
.cards-catalog {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px;
}

@media (min-width: 992px) and (max-width: 1490px) {
  .cards-catalog {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }
}

@media (min-width: 768px) and (max-width: 992px) {
  .cards-catalog {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .cards-catalog {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}

</style>