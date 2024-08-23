<script setup lang="ts">
import { useForm, useFieldArray, useField } from 'vee-validate';
import * as yup from 'yup';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const schema = yup.object({
  regularField: yup.string().required(),
  arrayRow: yup.array().of(
    yup.object({
      arrayField: yup.string().required(),
    })
  ),
});

const { defineField, handleSubmit, resetForm, errors } = useForm({
  validationSchema: schema,
  initialValues: {
    arrayRow: [{ arrayField: '' }, { arrayField: 'dafdafg' }],
  },
});

const { fields, push } = useFieldArray('arrayRow');

const [regularField] = defineField('regularField');

const onSubmit = handleSubmit((values) => {
  console.log('Submitted with', values);
});
</script>

<template>
  <div class="q-pl-md">
    <h1 class="text-h4 text-weight-bold">PrimeVue + vee-validate v4</h1>
    <div class="q-mt-md q-gutter-md">
      <form @submit="onSubmit">
        <div class="field">
          <label for="regularField">Regular Field</label>
          <InputText
            v-model="regularField"
            aria-describedby="regularField-help"
            :class="{ 'p-invalid': errors.regularField }"
          />
          <small id="regularField-help" class="p-error">
            {{ errors.regularField }}
          </small>
        </div>

        <div class="field">
          <label for="r0">arrayRow 0</label>
          <InputText
            v-model="fields[0].value.arrayField"
            :class="{
              'p-invalid': errors[`arrayRow[0].arrayField`],
            }"
          />
          <small id="ro-help" class="p-error">
            {{ errors[`arrayRow[0].arrayField`] }}
          </small>
        </div>

        <div class="field">
          <label for="r1">arrayRow 1</label>
          <InputText
            v-model="fields[1].value.arrayField"
            :class="{
              'p-invalid': errors[`arrayRow[1].arrayField`],
            }"
          />
          <small id="r1-help" class="p-error">
            {{ errors[`arrayRow[1].arrayField`] }}
          </small>
        </div>

        <div class="footer">
          <Button label="Submit" type="submit" />

          <Button
            label="Reset"
            type="button"
            @click="resetForm"
            class="p-button-secondary"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
}

label {
  display: block;
  margin-top: 20px;
  margin-bottom: 4px;
}

.footer {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

.p-error {
  display: block;
}
</style>
