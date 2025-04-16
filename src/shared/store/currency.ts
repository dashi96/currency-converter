import { ref } from 'vue'
import { defineStore } from 'pinia'

import { fetchCurrencies } from '@/shared/api/currency'

export const useCurrencyStore = defineStore('currency', () => {
  const baseCurrency = ref<Currency>('RUB')
  const currencies = ref<Currency[]>(['USD', 'EUR', 'RUB'])
  const rates = ref<Rates>()
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchRates() {
    loading.value = true
    try {
      rates.value = await fetchCurrencies()
      error.value = null
    } catch (err) {
      error.value = 'Failed to fetch rates'
    } finally {
      loading.value = false
    }
  }

  function setBaseCurrency(currency: Currency) {
    baseCurrency.value = currency
  }

  return {
    baseCurrency,
    currencies,
    rates,
    loading,
    error,
    fetchRates,
    setBaseCurrency
  }
})
