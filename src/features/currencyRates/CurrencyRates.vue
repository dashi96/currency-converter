<template>
  <div class="currency-rates">
    <div v-if="loading" class="currency-rates__loading">Загрузка...</div>
    <div v-else-if="error" class="currency-rates__error">{{ error }}</div>
    <ul v-else class="currency-rates__list">
      <li v-if="!!rates" v-for="currency in filteredCurrencies" :key="currency" class="currency-rates__list__item">
        <CurrencyItem
          :currency="currency"
          :rate="rates[`${currency}-${baseCurrency}`.toLowerCase()] || 0"
          :base-currency="baseCurrency"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import CurrencyItem from './atoms/CurrencyItem.vue'

const { loading, rates, currencies, baseCurrency } = defineProps<{
  rates?: Rates
  currencies: Currency[]
  baseCurrency: Currency
  loading: boolean
  error?: string | null
}>()

const filteredCurrencies = computed(() => {
  return currencies.filter((currency: Currency) => currency !== baseCurrency)
})
</script>

<style lang="scss" scoped>
.currency-rates {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__loading {
    font-size: 16px;
    color: $primary-color;
    text-align: center;
  }

  &__error {
    font-size: 16px;
    color: $error-color;
    text-align: center;
  }

  &__list {
    list-style: none;
    padding: 0;
    display: grid;
    gap: 10px;

    &__item {
      padding: 10px;
      background-color: #f9f9f9;
      border-radius: 4px;
      transition: background-color 0.2s;

      &:hover {
        background-color: #e0e0e0;
      }
    }
  }
}
</style>
