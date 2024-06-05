<template>
  <div class="sorts-controller">
    <h1 class="sorts-controller__heading">{{ heading }}</h1>
    <div class="sorts-controller__sorts-container">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  heading?: string
}>()
</script>

<style>
.sorts-controller {
  width: 100%;
  display: flex;
  flex-direction: column;

  font-family: "SF-Pro-Display";
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.03em;
  text-align: left;
  margin-bottom: 41px;
}

.sorts-controller__heading {
  margin-bottom: 32px;

  font-size: 36px;
  font-weight: 600;
  line-height: 48px;
}

.sorts-controller__sorts-container {
  display: flex;
  gap: 24px;
}

@media (max-width: 768px) {
  .sorts-controller__sorts-container {
    flex-direction: column;
    gap: 10px;
  }
}
</style>