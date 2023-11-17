<script setup lang="ts">
import { ref, render } from "vue"

const helloWorld = () => {
  return "Hello World"
}

const renderStaticComponent = (component: any) => {
  const el = document.createElement("div")
  render(component.render(), el)

  return el.firstChild
}

const variable = ref(10)
</script>

<template>
  <div @click="variable++">{{ helloWorld() }} {{ variable }}</div>
</template>

<style scoped></style>
