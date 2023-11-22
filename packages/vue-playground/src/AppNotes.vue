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
const switchRef = ref(false)
const checkboxRef = ref(false)

const statusOne = ref(false)
const statusTwo = ref(false)
</script>

<template>
  <!-- DIALOG & DRAWER -->
  <z-box
    w="300px"
    h="300px"
    background="#fdcb6e"
    @click="statusOne = !statusOne"
  >
  </z-box>
  <z-drawer
    v-if="statusOne"
    hide-close-button
    position=""
    @close="statusOne = !statusOne"
  >
    <z-box
      @click="statusTwo = !statusTwo"
      w="200px"
      h="200px"
      background="#00b894"
    >
    </z-box>
  </z-drawer>
  <z-dialog
    v-if="statusTwo"
    disable-overlay-close
    @close="statusTwo = !statusTwo"
    position="center"
  >
    <z-close-button m="0">x</z-close-button>
    <z-box
      w="100px"
      h="100px"
      background="#0984e3"
    >
      Hello
    </z-box>
  </z-dialog>

  <!-- BUTTON -->
  <z-button
    :loading="false"
    :disabled="true"
    href="https://chakra-ui.com/docs/components/button"
    target-blank
  >
    <svg
      slot="loading-svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
        opacity=".25"
      />
      <path
        d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="0.75s"
          values="0 12 12;360 12 12"
          repeatCount="indefinite"
        />
      </path>
    </svg>
    <div slot="icon-left">Icon ▶️</div>
    <div slot="icon-right">◀️ Icon</div>
    CLICK ME
  </z-button>

  <!-- CHECKBOX -->
  <z-checkbox
    :checked="checkboxRef"
    value="newsletter"
    @change="(event: Event) => {
      console.log((event.target as HTMLInputElement).value)
      checkboxRef = (event.target as HTMLInputElement).checked
    }"
  >
    Was geht denn ab
  </z-checkbox>
  <div v-if="checkboxRef">True</div>
  <div v-else>False</div>

  <!-- SWITCH -->
  <z-switch
    :value="switchRef"
    @change="(event: Event) => (switchRef = !!(event.target as HTMLInputElement).value)"
  ></z-switch>
  <div v-if="switchRef">True</div>
  <div v-else>False</div>

  <!-- DETAILS / ACCORDION -->
  <z-details-group
    accordion
    gap="10px"
  >
    <z-details summary="Hello">
      <div slot="icon-collapsed">Open</div>
      <div slot="icon-expanded">Close</div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </z-details>
    <z-details summary="World"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </z-details>
    <z-details summary="Year"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </z-details>
  </z-details-group>

  <!-- TABS -->
  <z-tabs
    vertical
    active-tab-index="1"
    nav-items-width="120px"
    content-width="900px"
    content-height="600px"
  >
    <!-- <z-tab-nav>
      <z-tab-nav-item>One</z-tab-nav-item>
      <z-tab-nav-item>Two</z-tab-nav-item>
      <z-tab-nav-item>Three</z-tab-nav-item>
      <z-tab-nav-item>Four</z-tab-nav-item>
    </z-tab-nav> -->

    <z-tab-content>
      <z-tab-content-item name="Veggies">
        <z-box
          w="500px"
          h="100px"
          background="yellow"
        ></z-box>
      </z-tab-content-item>
      <z-tab-content-item name="Fruit & Cake">
        <Test></Test>
      </z-tab-content-item>
      <z-tab-content-item name="Meat">
        <z-box
          w="100px"
          h="500px"
          background="green"
        ></z-box>
      </z-tab-content-item>
      <z-tab-content-item name="Nuts">
        <z-box
          w="1200px"
          h="1200px"
          background="blue"
        ></z-box>
      </z-tab-content-item>
    </z-tab-content>
  </z-tabs>

  <!-- DEVIDER -->

  <z-box
    justify="space-around"
    align="center"
    h="600px"
    w="600px"
  >
    <z-divider divider-expansion="80">Cool</z-divider>

    <z-divider
      vertical
      content-position="10"
      divider-thickness="2px"
      divider-style="dotted"
      divider-color="red"
      divider-expansion="60"
    >
      <z-box p="10px">Cool</z-box>
    </z-divider>
  </z-box>

  <!-- TEXT & HIGHLIGHT -->
  <z-text p="20px"
    >Lorem ipsum dolor
    <z-highlight
      bold
      mark
      font-size="1.5rem"
      >onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua.
    </z-highlight>
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
  </z-text>

  <!-- HEADINGS -->
  <z-heading
    level="1"
    font-size="3rem"
    href="https://chakra-ui.com/docs/components/button"
    target-blank
    spacing-top="2em"
    spacing-bottom="4rem"
    color="blue"
    >Hello</z-heading
  >
  <z-heading level="2">Hello</z-heading>
  <z-heading level="3">Hello</z-heading>
  <z-heading level="4">Hello</z-heading>
  <z-heading level="5">Hello</z-heading>
  <z-heading level="6">Hello</z-heading>

  <!-- ASPECT RATIO -->
  <z-aspect-ratio
    ratio="16:9"
    max-width="600px"
  >
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
    />
    <!-- <img src="https://i0.wp.com/images.metmuseum.org/CRDImages/as/original/DP130155.jpg?w=1290&ssl=1" alt="" /> -->
  </z-aspect-ratio>

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
        <z-box
          name="Stat"
          w="180px"
          h="180px"
        ></z-box>
        <z-box
          name="Stat"
          w="180px"
          h="180px"
        ></z-box>
        <z-box
          name="Stat"
          w="180px"
          h="180px"
        ></z-box>
        <z-box
          name="Stat"
          w="180px"
          h="180px"
        ></z-box>
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
