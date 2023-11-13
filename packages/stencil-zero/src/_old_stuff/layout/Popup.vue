<script setup lang="ts">
const emit = defineEmits(['close'])

const props = defineProps<Props>()
interface Props {
  mt?: string
  mb?: string
  mr?: string
  ml?: string
  hideClose?: boolean
  closeLabel?: string
  timeoutInSeconds?: string
}
</script>

<template>
  <Teleport to="body">
    <div class="popup-wrapper">
      <button
        v-if="!props.hideClose"
        class="popup-close-btn"
        :title="props.closeLabel"
        :aria-label="props.closeLabel"
        @click="emit('close')"
      >
        X
      </button>
      <div
        :style="{
          marginTop: props.mt,
          marginBottom: props.mb,
          marginRight: props.mr,
          marginLeft: props.ml
        }"
        class="popup"
      >
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.popup-wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  top: 0;
  position: absolute;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.6);
}
.popup {
  position: relative;
  display: flex;
  background: white;
  pointer-events: all;
  min-width: 40px;
  min-height: 40px;
  max-height: 90%;
  overflow: auto;
}

.popup-close-btn {
  position: absolute;
  top: 5px;
  right: 8px;
}
</style>
