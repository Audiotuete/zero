<script setup lang="ts">
import { render, ref } from "vue"

import TestStatic from "@/components/TestStatic.vue"

const renderStaticComponent = (component: any) => {
  const el = document.createElement("div")
  render(component.render(), el)

  return el.firstChild
}

const mockTabData = [
  {
    id: "fruit",
    name: "Fruit & Cake",
    staticHtmlElement: renderStaticComponent(TestStatic),
  },
  {
    id: "veggies",
    name: "Veggies",
    staticHtmlElement: renderStaticComponent(TestStatic),
  },
  {
    id: "meat",
    name: "Meat",
    staticHtmlElement: "Test",
  },
  {
    id: "juicy",
    name: "Juice",
    staticHtmlElement: "Test",
  },
]
</script>

<template>
  <z-tabs
    :data.prop="mockTabData"
    vertial
    selected-tab-index="0"
    nav-items-width="120px"
    content-width="900px"
    content-height="600px"
  >
    <!-- <z-tab-nav>
      <z-tab-nav-item>One</z-tab-nav-item>
      <z-tab-nav-item>Two</z-tab-nav-item>
      <z-tab-nav-item>Three</z-tab-nav-item>
      <z-tab-nav-item>Four</z-tab-nav-item>
    </z-tab-nav>

    <z-tab-content>
      <z-tab-content-item> <Test></Test></z-tab-content-item>
      <z-tab-content-item>
        <z-box
          w="500px"
          h="100px"
          background="yellow"
        ></z-box>
      </z-tab-content-item>
      <z-tab-content-item>
        <z-box
          w="100px"
          h="500px"
          background="green"
        ></z-box>
      </z-tab-content-item>
      <z-tab-content-item>
        <z-box
          w="1200px"
          h="1200px"
          background="blue"
        ></z-box>
      </z-tab-content-item>
    </z-tab-content> -->
  </z-tabs>
</template>

<style scoped></style>
