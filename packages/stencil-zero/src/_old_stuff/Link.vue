<script setup lang="ts">
const props = defineProps<Props>()
interface Props {
  href: string
}
</script>

<template>
  <a class="link" :href="props.href">
    <slot />
  </a>
</template>

<style scoped>
.link {
  text-decoration: underline;
}
</style>
