<template>
  <div class="currency-converter">
    <div class="currency-converter__row">
      <Dropdown
        label="Выберите валюту:"
        :selected="currency1"
        :options="currencies"
        @update:selected="handleCurrencyUpdate($event, '1')"
      />
      <Input v-model="amount1" type="number" placeholder="Введите сумму" @input="convertFromFirst" :error="error1" />
    </div>

    <div class="currency-converter__row">
      <Dropdown
        label="Выберите валюту:"
        :selected="currency2"
        :options="currencies"
        @update:selected="handleCurrencyUpdate($event, '2')"
      />
      <Input v-model="amount2" type="number" placeholder="Введите сумму" @input="convertFromSecond" :error="error2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Input from '@/shared/ui/components/Input/Input.vue'
import Dropdown from '@/shared/ui/components/Dropdown/Dropdown.vue'

const { rates, currencies } = defineProps<{
  rates?: Rates
  currencies: Currency[]
}>()

const currency1 = ref<Currency>('USD')
const currency2 = ref<Currency>('RUB')
const amount1 = ref('')
const amount2 = ref('')
const error1 = ref<string | null>(null)
const error2 = ref<string | null>(null)

function handleCurrencyUpdate(newCurrency: string, type: '1' | '2') {
  switch (type) {
    case '1':
      currency1.value = newCurrency as Currency
      convertFromFirst()
      break
    case '2':
      currency2.value = newCurrency as Currency
      convertFromSecond()
      break
  }
}

function convertCurrency(amount: number, from: Currency, to: Currency, rates?: Rates): number {
  if (!rates || from === to) return amount
  const rateKey = `${from.toLowerCase()}-${to.toLowerCase()}`
  const rate = rates[rateKey]
  if (!rate) return 0
  return amount * rate
}

const convertFromFirst = () => {
  error1.value = null
  error2.value = null

  if (!isValidNumber(amount1.value)) {
    error1.value = 'Введите корректное число'
    amount2.value = ''
    return
  }

  const result = convertCurrency(Number(amount1.value), currency1.value, currency2.value, rates)
  amount2.value = result.toFixed(2)
}

const convertFromSecond = () => {
  error1.value = null
  error2.value = null

  if (!isValidNumber(amount2.value)) {
    error2.value = 'Введите корректное число'
    amount1.value = ''
    return
  }

  const result = convertCurrency(Number(amount2.value), currency2.value, currency1.value, rates)
  amount1.value = result.toFixed(2)
}

const isValidNumber = (value: string) => {
  return !isNaN(Number(value)) && Number(value) >= 0
}
</script>

<style lang="scss" scoped>
.currency-converter {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__row {
    display: flex;
    gap: 10px;
    align-items: center;
  }
}
</style>
