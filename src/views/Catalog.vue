<template>
  <div class="main-container">
    <BreadCrumbs/>
    <SortController heading="Комплекты стеллажных систем">
      <SortControllerSelect v-model="activeCostSort" :options="sortPrice" unselect-option="Без сортировки" label="Сортировать по:"/>
      <SortControllerSelect v-model="activeMaterialFilter" :options="sortMaterial" unselect-option="Все" label="Материал:"/>
    </SortController>
    <CardCatalog :cards="data"/>
  </div>
</template>

<script setup lang="ts">
import SortController from "@/components/SortController.vue";
import SortControllerSelect from "@/controls/SortControllerSelect.vue";
import CardCatalog from "@/components/CardCatalog.vue";
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import rawItemsData from "@/data/items.json"
import sortMaterial from '@/data/materials.json'

import type {IProduct} from "@/interfaces";

import {ref, watch} from "vue";


const activeCostSort = ref('0');
const activeMaterialFilter = ref('0');

watch(activeCostSort, (newValue)=>{
  switch (newValue){
    case "0":
      data.value = rawItemsData
      break
    case "1":
      data.value = data.value.sort((a,b)=>{
        return a.price.current_price - b.price.current_price
      })
      break
    case "2":
      data.value = data.value.sort((a,b)=>{
        return b.price.current_price - a.price.current_price
      })
      break
  }
})

watch(activeMaterialFilter, (newValue)=>{
  switch (newValue){
    case "0":
      data.value = rawItemsData
      break
    case "1":
      data.value = rawItemsData.filter((card)=>card.material === 1)
      break
    case "2":
      data.value = rawItemsData.filter((card)=>card.material === 2)
      break
  }
})

const sortPrice = [
  {
    "id": "1",
    "name": "Цена по возрастанию"
  },
  {
    "id": "2",
    "name": "Цена по убыванию"
  }
];
console.log(rawItemsData);

const data = ref<IProduct[]>([...rawItemsData]);

</script>

<style>
.main-container {
  width: 1488px;
  margin: 0 auto;
}

@media (min-width: 992px) and (max-width: 1490px) {
  .main-container {
    width: 990px;
  }
}

@media (min-width: 768px) and (max-width: 992px) {
  .main-container {
    width: 700px;
  }
}

@media (max-width: 768px) {
  .main-container {
    width: 570px;
  }
}
</style>