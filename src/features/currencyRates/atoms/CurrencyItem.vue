<template>
  <div class="currency-item">
    <span class="currency-item__code">{{ currency }}</span>
    <span class="currency-item__rate">1 {{ currency }} = {{ formattedRate }} {{ baseCurrency }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { rate } = defineProps<{
  currency: Currency
  rate: number
  baseCurrency: Currency
}>()

const formattedRate = computed(() => {
  return Number(rate).toFixed(2)
})
</script>

<style lang="scss" scoped>
.currency-item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__currency-code {
    font-weight: bold;
    font-size: 16px;
  }

  &__currency-rate {
    font-size: 16px;
    color: #333;
  }
}
</style>
