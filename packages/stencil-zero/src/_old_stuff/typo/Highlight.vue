<script setup lang="ts">
import { h, computed, type VNode } from 'vue'

const slots = defineSlots<{
  default(): VNode
}>()

const props = defineProps<Props>()

interface Props {
  fontSize?: string
  color?: string
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'full-width' | 'full-size-kana'

  bold?: boolean // <strong>
  italic?: boolean // <em>
  code?: boolean // <code>
  strike?: boolean // <s>
  underline?: boolean // <u>
  sup?: boolean // <sup>
  sub?: boolean // <sub>
  mark?: boolean // <mark>
}

const mapPropsToTags = (properties: Props) => {
  const tagMap: any = {
    bold: 'strong',
    italic: 'em',
    code: 'code',
    strike: 's',
    underline: 'u',
    sup: 'sup',
    sub: 'sub',
    mark: 'mark'
  }

  const tags = []
  for (let prop in properties) {
    if (typeof properties[prop as keyof typeof props] == 'boolean') {
      properties[prop as keyof typeof props] && tags.push(tagMap[prop])
    }
  }
  return tags
}

// Nesting the <slot> inside multiple HTML tags with Recursion
function nestSlot(tags: string[]): VNode {
  if (tags.length > 0) {
    return h(tags.shift() as string, nestSlot(tags))
  } else {
    return h(
      'span',
      { style: { color: props.color, fontSize: props.fontSize, textTransform: props.transform } },
      slots.default()
    )
  }
}

const WrappedSlot = computed(() => {
  return nestSlot(mapPropsToTags(props))
})
</script>

<template>
  <WrappedSlot />
</template>

<style scoped></style>
