<script setup lang="ts">
const props = defineProps<Props>()
interface Props {
  legend: string
}
</script>

<template>
  <fieldset>
    <legend>{{ props.legend }}</legend>
    <slot />
  </fieldset>
</template>

<style scoped>
fieldset {
  border: 1px solid black;
  padding: 10px;
  padding-top: 0;
}
</style>
