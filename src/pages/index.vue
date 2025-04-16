<template>
  <div class="home">
    <h1>Курсы валют</h1>
    <CurrencyRates :rates="rates" :currencies="currencies" :base-currency="baseCurrency" :loading="loading" />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCurrencyStore } from '@/shared/store/currency'
import CurrencyRates from '@/features/currencyRates/CurrencyRates.vue'

useSeoMeta({
  title: 'Home | Currency Converter',
  description: 'This is site for currency conversion'
})

const store = useCurrencyStore()
const { rates, currencies, baseCurrency, loading } = storeToRefs(store)
</script>

<style lang="scss" scoped>
.home {
  padding: 20px;

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
}
</style>
