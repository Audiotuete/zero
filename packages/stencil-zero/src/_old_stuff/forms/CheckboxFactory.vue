<script setup lang="ts">
import { ref, onMounted } from 'vue'

export type Checkbox = {
  name: string
  label: string
  checked?: boolean
  disabled?: boolean
  children?: Checkbox[] | null
}

const props = defineProps<Props>()
interface Props {
  name: string
  description?: string
  data: Checkbox[]
}

const optionsList = ref<HTMLLIElement[]>([])

onMounted(() => {
  props.data.map((item, index) => {
    let listItem = optionsList.value[index]

    let option: HTMLInputElement | null = listItem.querySelector('input.option')
    let subOptions: NodeListOf<HTMLInputElement> = listItem.querySelectorAll('input.subOption')

    option!.onclick = function () {
      const el = <HTMLInputElement>this

      if (item.children) {
        for (let i = 0; i < subOptions.length; i++) {
          if (!subOptions[i].disabled) {
            subOptions[i].checked = el.checked
            item.children[i].checked = el.checked
          }
        }
      }
    }

    if (subOptions.length) {
      for (let i = 0; i < subOptions.length; ++i) {
        subOptions[i].onclick = function () {
          let activeCount = listItem.querySelectorAll('input.subOption:not([disabled])').length
          let checkedCount = listItem.querySelectorAll('input.subOption:checked').length

          let cleanedCheckCount = checkedCount

          item.checked = cleanedCheckCount > 0
          option!.checked = cleanedCheckCount > 0

          option!.indeterminate = cleanedCheckCount > 0 && cleanedCheckCount < activeCount
        }
      }
    }
  })
})
</script>

<template>
  <span v-if="props.description">{{ props.description }}</span>
  <ul ref="ul">
    <li v-for="box in data" ref="optionsList">
      <label>
        <input
          v-model="box.checked"
          :name="box.name"
          type="checkbox"
          class="option"
          :disabled="box.disabled"
        />
        {{ box.label }}
      </label>
      <ul v-if="box.children" class="nested">
        <li v-for="deepBox in box.children">
          <label>
            <input
              :name="deepBox.name"
              v-model="deepBox.checked"
              type="checkbox"
              class="subOption"
              :disabled="deepBox.disabled || box.disabled"
            />
            {{ deepBox.label }}
          </label>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped>
.nested {
  padding-left: 1rem;
  list-style: none;
}
</style>
