<script setup lang="ts">
import { computed } from 'vue'

// @ts-expect-error
import { v4 as uuid } from 'uuid'

const props = withDefaults(defineProps<Props>(), {
  id: () => `field-${uuid()}`
})
interface Props {
  name: string
  id?: string
  label?: string
  required?: boolean
  disabled?: boolean
  error?: string
  help?: string
  modelValue: string | number
  invalid?: boolean
  placeholder?: string
  rows?: string
  cols?: string
  maxlength?: string
  minlength?: string
}

const emit = defineEmits<{
  change: [id: number]
  'update:modelValue': [value: string]
}>()

const ariaDescribedBy = computed(() => {
  return !!props.help ? `help-${uuid()}` : undefined
})
</script>
<template>
  <div>
    <label v-if="props.label" :required="props.required">
      {{ props.label }}<span v-if="props.required">*</span>
      <input
        :id="props.id"
        :name="props.name"
        :rows="props.rows"
        :cols="props.cols"
        :disabled="props.disabled"
        :maxlength="props.maxlength"
        :minlength="props.minlength"
        :placeholder="props.placeholder"
        :value="props.modelValue"
        :required="props.required"
        @input="
          ($event: Event) => emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)
        "
        style="width: 100%"
      />
    </label>

    <p v-if="props.error">
      {{ props.error }}
    </p>

    <p v-if="props.help" :id="ariaDescribedBy">
      {{ props.help }}
    </p>
  </div>
</template>
