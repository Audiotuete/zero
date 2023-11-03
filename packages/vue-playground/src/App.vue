<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router"
import HelloWorld from "./components/HelloWorld.vue"
</script>

<template>
  <z-box
    w="400px"
    h="800px"
  >
    <z-box
      row
      justify="space-between"
      flex="1"
    >
      <z-box w="60px"></z-box> <z-box w="60px"></z-box
    ></z-box>
    <z-box
      block
      flex="1"
      ><p>Home</p></z-box
    >
    <z-box
      name="Social Bar"
      row
      justify="space-between"
      flex="1"
    >
      <z-box w="60px"></z-box>
      <z-box w="60px"></z-box>
      <z-box w="60px"></z-box>
      <z-box w="60px"></z-box>
      <z-box w="60px"></z-box>
      <z-box w="60px"></z-box>
    </z-box>
    <z-box
      gap="10px"
      row
      flex="1"
    >
      <z-box w="60px"></z-box>
      <z-box w="120px"></z-box>
    </z-box>
    <z-box
      block
      pt="10px"
      justfiy="center"
      flex="10"
    >
      <z-box
        name="Stats"
        row
        wrap
        gap="10px"
        justify="center"
      >
        <z-list-item-box
          name="Stat"
          w="180px"
          h="180px"
        ></z-list-item-box>
        <z-list-item-box
          name="Stat"
          w="180px"
          h="180px"
        ></z-list-item-box>
        <z-list-item-box
          name="Stat"
          w="180px"
          h="180px"
        ></z-list-item-box>
        <z-list-item-box
          name="Stat"
          w="180px"
          h="180px"
        ></z-list-item-box>
      </z-box>
    </z-box>
    <z-box
      name="Navbar"
      row
      justify="space-around"
      flex="1"
    >
      <z-box w="60px"></z-box>
      <z-box w="60px"></z-box>
      <z-box w="60px"></z-box>
      <z-box w="60px"></z-box>
    </z-box>
  </z-box>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
</template>

<style scoped></style>
