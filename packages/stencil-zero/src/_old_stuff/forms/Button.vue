<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<Props>()
interface Props {
  iconLeft?: object
  iconRight?: object
  loading?: boolean
  disabled?: boolean
  type?: string
  href?: string
}
const renderAs = computed(() => {
  return props.href ? 'a' : 'button'
})
</script>

<template>
  <component
    style="text-align: center"
    :is="renderAs"
    :href="props.href"
    :disabled="props.disabled"
    :type="renderAs === 'button' && props.type"
  >
    <component v-if="!props.loading" :is="props.iconLeft" />
    <span style="font-weight: bold" v-if="!props.loading"><slot /></span>

    <component :is="props.iconRight" v-if="!props.loading" />
    <span v-if="props.loading">Loading...</span>
  </component>
</template>
