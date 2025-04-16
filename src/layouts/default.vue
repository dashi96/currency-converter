<template>
  <div id="app">
    <Header />
    <slot />
  </div>
</template>

<script setup lang="ts">
import Header from '@/features/header/Header.vue'
import { useCurrencyStore } from '@/shared/store/currency'
import { onMounted } from 'vue'

const store = useCurrencyStore()
onMounted(async () => {
  await store.fetchRates()
})
</script>
