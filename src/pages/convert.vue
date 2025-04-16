<template>
  <div class="convert-page">
    <h1>Конвертация валют</h1>
    <CurrencyConverter :rates="rates" :currencies="currencies" />
  </div>
</template>

<script setup lang="ts">
import CurrencyConverter from '@/features/currencyConverter/CurrencyConverter.vue'
import { useCurrencyStore } from '@/shared/store/currency'
import { storeToRefs } from 'pinia'

const store = useCurrencyStore()
const { rates, currencies } = storeToRefs(store)
</script>

<style lang="scss" scoped>
.convert-page {
  padding: 20px;
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
}
</style>
