<script setup lang="ts">
import { ref } from "vue"

const json = ref([])

const fetchJSON = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => (json.value = data))
}

const mockHeaders = [
  { name: "ID", key: "id" },
  { name: "Name", key: "firstname" },
  { name: "Email", key: "email" },
  { name: "Street", key: "address" },
  { name: "Extra", key: "extra" },
]

const mockArray = [
  ["id", "firstname", "lastname", "email", "address", "extra"],
  [1, "Jan", "Janson", "Jan@mail.com", "Jan Street", "Extra-Jan"],
  [2, "Peter", "Peterson", "Peter@mail.com", "Peter Street", "Extra-Peter"],
  [3, "Rudy", "Rudyson", "Rudy@mail.com", "Rudy Street", "Extra-Rudy"],
  [4, "Kim", "Kimson", "Kim@mail.com", "Kim Street", "Extra-Kim"],
  [5, "Jake", "Jakeson", "Jake@mail.com", "Jake Street", "Extra-Jake"],
]

const options = [
  { name: "ID", key: "id", width: "100px" },
  { name: "Name", key: "name" },
  { name: "Email", key: "email", width: "60px" },
  { name: "Street", key: "address.street", width: "20px" },
  { name: "Suite", key: "address.suite", width: "20px" },
  { name: "Lat", key: "address.geo.lat", width: "30px" },
  { name: "Lng", key: "address.geo.lng" },
]
</script>

<template>
  <!-- TABLE BUILDER -->
  <z-box
    w="100vw"
    h="800px"
  >
    <z-table-builder
      :data.prop="json"
      :options.prop="options"
    ></z-table-builder
  ></z-box>
  <button @click="fetchJSON()">Fetch JSON</button>
  <!-- BOX LAYOUT -->
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
</template>

<style scoped></style>
