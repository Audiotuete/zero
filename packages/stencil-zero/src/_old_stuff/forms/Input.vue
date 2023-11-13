<script setup lang="ts">
import { computed } from 'vue'

// @ts-expect-error
import { v4 as uuid } from 'uuid'

const props = withDefaults(defineProps<Props>(), {
  id: () => `field-${uuid()}`
})
interface Props {
  type: string
  name: string
  id?: string
  label?: string
  required?: boolean
  error?: string
  help?: string
  modelValue: string | number
  invalid?: boolean
  placeholder?: string
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
        :type="props.type"
        :name="props.name"
        :placeholder="props.placeholder"
        :value="props.modelValue"
        @input="
          ($event: Event) => emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
        :required="props.required"
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
