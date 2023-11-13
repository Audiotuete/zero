<script setup lang="ts">
type Casing = 'snake' | 'camel'

const props = defineProps<Props>()
interface Props {
  formDataCasing: Casing
}

const emit = defineEmits<{
  formDataCreated: [data: object]
}>()

function createFormDataObject(event: Event) {
  const rawformData = Object.fromEntries(new FormData(event.target as HTMLFormElement))

  function transformCasingTo(s: string, casing: Casing): string {
    // first letter to lowercase to eliminate PascalCase
    let string = s[0].toLowerCase() + s.slice(1)
    if (casing === 'snake') {
      // transform into snake_case
      return string.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase()
    } else if (casing === 'camel') {
      // transform into camelCase
      return string.replace(/(_\w)/g, (k) => k[1].toUpperCase())
    }
    return string
  }

  const formData = Object.entries(rawformData).reduce((data, [key, value]) => {
    let convertedEntry = { [transformCasingTo(key, props.formDataCasing)]: value ? value : '' }
    return Object.assign(convertedEntry, data)
  }, {})
  emit('formDataCreated', formData)
}
</script>

<template>
  <form @submit.prevent="createFormDataObject"><slot /></form>
</template>

<style scoped></style>
