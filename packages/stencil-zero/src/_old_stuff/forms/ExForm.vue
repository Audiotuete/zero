<script setup lang="ts">
import { reactive, ref } from 'vue'
import Button from '@/components/forms/Button.vue'
import Input from '@/components/forms/Input.vue'
import CheckboxFactory, { type Checkbox } from '@/components/forms/CheckboxFactory.vue'
import Textarea from '@/components/forms//Textarea.vue'
import Fieldset from '@/components/forms//Fieldset.vue'
import Form from '@/components/forms//Form.vue'

interface Fields {
  name: string
  email: string
  password: string
  notes: string
}

const form = ref({
  name: '',
  email: '',
  password: '',
  notes: ''
})

const checkboxes: Checkbox[] = reactive([
  {
    label: 'Mike',
    name: 'mike',
    checked: false
  },
  {
    label: 'Parent',
    name: 'parent',
    checked: false,
    children: [
      {
        label: 'Bob',
        name: 'bob',
        checked: false
      },
      {
        label: 'Alice',
        name: 'alice',
        checked: false,
        disabled: true
      }
    ]
  }
])

const errors = ref({ name: '', email: '', password: '', notes: '' })

const doSomething = (data: object) => {
  console.log(data)
}

const doSomethingElse = (data: Event) => {
  console.log('data')
}
</script>

<template>
  <Form formDataCasing="snake" @submit.prevent="doSomethingElse" @formDataCreated="doSomething">
    <Fieldset legend="This is sparta">
      <Input
        v-model="form.name"
        name="FullName"
        placeholder="John Doe"
        type="text"
        label="Name"
        :error="errors.name"
      />

      <Input
        v-model="form.email"
        name="email"
        type="email"
        placeholder="john@doe.com"
        label="Email"
        :error="errors.email"
      />

      <Input
        v-model="form.password"
        name="password"
        type="password"
        label="Password"
        :error="errors.password"
        help="Sould be at least 8 characters long."
      />

      <Textarea name="notes" label="Notes" v-model="form.notes" placeholder="Important notes" />
    </Fieldset>

    <Fieldset legend="This is sparta">
      <CheckboxFactory
        name="friends"
        description="Chose your friend"
        :data="checkboxes"
      ></CheckboxFactory>
    </Fieldset>

    <Button type="submit">Register</Button>
  </Form>
</template>
