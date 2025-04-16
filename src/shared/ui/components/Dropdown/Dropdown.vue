<template>
  <div class="app-dropdown">
    <label v-if="!!label" for="select" class="app-dropdown__label">{{ label }}</label>
    <select id="select" :value="selected" class="app-dropdown__selector" @change="handleChange">
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label?: string
  selected: string
  options: string[]
}>()

const emit = defineEmits<{
  (e: 'update:selected', value: string): void
}>()

function handleChange(event: Event) {
  const newValue = (event.target as HTMLSelectElement).value
  emit('update:selected', newValue)
}
</script>

<style lang="scss" scoped>
.app-dropdown {
  display: flex;
  align-items: center;
  gap: 10px;

  &__label {
    font-size: 16px;
    color: #333;
  }

  &__selector {
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
    transition: border-color 0.2s;

    &:hover,
    &:focus {
      border-color: $primary-color;
      outline: none;
    }
  }
}
</style>
