<template>
  <label class="sorts-controller__label">
    <span class="sorts-controller__label-text">{{ label }}</span>
    <select class="sorts-controller__label-select" v-model="selectedOption">
      <option v-if="unselectOption" value="0">{{unselectOption}}</option>
      <option v-for="option in options" :value="option.id">{{ option.name }}</option>
    </select>
    <img class="sorts-controller__label-custom-arrow" src="@/assets/icons/dropdown-arrow.svg" alt="Custom arrow">
  </label>
</template>

<script setup lang="ts">
import type {ISelectOption} from "@/interfaces";

const props = defineProps<{
  options: ISelectOption[]
  label?: string
  unselectOption?: string
}>()

const selectedOption = defineModel()

</script>

<style>
.sorts-controller__label {
  position: relative;

  display: flex;
  flex-direction: column;

  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.03em;
}

.sorts-controller__label-text {
  margin-left: 16px;
  margin-bottom: 6px;
}

.sorts-controller__label-select {
  font-family: 'SF-Pro-Display';
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.03em;

  width: 288px;
  padding: 10px 16px;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.sorts-controller__label-custom-arrow {
  position: absolute;
  top: 50%;
  right: 16px;
  width: 24px;
  height: 24px;
  transform: translateY(-10%);
}

@media (max-width: 768px) {
  .sorts-controller__label-select {
    width: 100%;
    padding: 5px 8px;
  }
}
</style>