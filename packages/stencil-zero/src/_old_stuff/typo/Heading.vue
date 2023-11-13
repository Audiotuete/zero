<script setup lang="ts">
const props = defineProps<Props>()
interface Props {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  fontSize?: string
  color?: string
  spacingTop?: string
  spacingBottom?: string
  href?: string
}

console.log(
  props.fontSize && !props.spacingBottom ? parseInt(props.fontSize) / 2 : props.spacingBottom
)
</script>

<template>
  <component
    :is="as"
    :style="{
      fontSize: props.fontSize,
      color: props.color,
      marginTop: props.spacingTop,
      marginBottom:
        props.fontSize && !props.spacingBottom
          ? (parseInt(props.fontSize) / 2).toString() + 'rem'
          : props.spacingBottom
    }"
  >
    <a v-if="props.href" :href="props.href"><slot /></a>
    <slot v-else />
  </component>
</template>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600;
}

h1 {
  --h1-font-size: 2.125rem;
  font-size: var(--h1-font-size);
  line-height: 1;
  margin-bottom: calc(var(--h1-font-size) / 2);
}

h2 {
  --h2-font-size: 1.875rem;
  font-size: var(--h2-font-size);
  line-height: 1.067;
  margin-bottom: calc(var(--h2-font-size) / 2);
}

h3 {
  --h3-font-size: 1.5rem;
  font-size: var(--h3-font-size);
  line-height: 1.083;
  margin-bottom: calc(var(--h3-font-size) / 2);
}

h4 {
  --h4-font-size: 1.25rem;
  font-size: var(--h4-font-size);
  line-height: 1.1;
  margin-bottom: calc(var(--h4-font-size) / 2);
}

h5 {
  --h5-font-size: 1.125rem;
  font-size: var(--h5-font-size);
  line-height: 1.111;
  margin-bottom: calc(var(--h5-font-size) / 2);
}

h6 {
  --h6-font-size: 1rem;
  font-size: var(--h6-font-size);
  line-height: 1.125;
  margin-bottom: calc(var(--h6-font-size) / 2);
}
</style>
