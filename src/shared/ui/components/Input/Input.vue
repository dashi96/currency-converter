<template>
  <div class="app-input">
    <label v-if="label" for="app-input" class="app-input__label">{{ label }}</label>
    <input
      id="app-input"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      class="app-input__field"
      :class="{ 'app-input__field--error': error }"
      v-bind="$attrs"
      @input="handleInput"
      @blur="handleBlur"
    />
    <div v-if="error" class="app-input__error">{{ error }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string | number
  label?: string
  type?: string
  placeholder?: string
  error?: string | null
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
  (e: 'blur'): void
}>()

function handleInput(event: Event) {
  const input = event.target as HTMLInputElement
  emit('update:modelValue', input.type === 'number' ? Number(input.value) : input.value)
}

function handleBlur() {
  emit('blur')
}
</script>

<style lang="scss" scoped>
.app-input {
  display: flex;
  flex-direction: column;
  gap: 5px;

  &__label {
    font-size: 14px;
    color: #333;
  }

  &__field {
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: border-color 0.2s;

    &:hover,
    &:focus {
      border-color: $primary-color;
      outline: none;
    }

    &--error {
      border-color: $error-color;
    }
  }

  &__error {
    font-size: 12px;
    color: $error-color;
  }
}
</style>
