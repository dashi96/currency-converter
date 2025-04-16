<template>
  <header class="header">
    <nav class="header__nav">
      <NuxtLink class="header__nav__link" to="/">Главная</NuxtLink>
      <NuxtLink class="header__nav__link" to="/convert">Конвертация</NuxtLink>
    </nav>

    <Dropdown
      label="Выберите основную валюту:"
      :selected="selectedCurrency"
      :options="currencies"
      @update:selected="handleCurrencyUpdate"
    />
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCurrencyStore } from '@/shared/store/currency'
import Dropdown from '@/shared/ui/components/Dropdown/Dropdown.vue'

const store = useCurrencyStore()
const { baseCurrency, currencies } = store

function handleCurrencyUpdate(newCurrency: string) {
  selectedCurrency.value = newCurrency as Currency
}

const selectedCurrency = computed({
  get() {
    return baseCurrency
  },
  set(newValue: Currency) {
    store.setBaseCurrency(newValue)
  }
})
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f0f0f0;

  &__nav {
    display: flex;
    gap: 20px;

    &__link {
      text-decoration: none;
      color: #333;

      &.router-link-active {
        font-weight: bold;
      }
    }
  }
}
</style>
