import React from 'react';
import { capitalize, dashCase } from "../.storybook/utils" 

const COMPONENT_NAME = "Select"

const argTypes = {
  label: {
    description: 'Human readable text displayed above the field label',
    control: 'text'
  },
  type: {
    description: 'Button appearance based on use-case',
    control: {
      type: 'select',
      options: ['text', 'email', 'tel', 'password', 'search'],
    }
  },
  value: {
    description: 'The value within the text input',
    control: 'text'
  },
  errorMessage: {
    description: 'A message to be shown when there is a validation or other error.',
    control: {
      type: 'text'
    }
  },
  icon: {
    table: {
      disable: () => this.argTypes.type === "secondary"
    }
  }
}

export default {
  title: `Components/${COMPONENT_NAME}/SCSS`,
  argTypes
};

const Template = ({ type, label, value, errorMessage }) => ( 
<>
  <fieldset class="ods-fieldset">
    <div class="ods-fieldset-flex">
      <select class="ods-select" id="example-0" name="example-0" required>
        <option></option>
        <option value="value-1">Option 1</option>
        <option value="value-2">Option 2</option>
        <option value="value-3">Option 3</option>
        <option value="value-4">Option 4</option>
        <option value="value-5">Option 5</option>
        <option value="value-6">Option 6</option>
      </select>
      <label class="ods-label" for="example-0">{!label && `${capitalize(type)} Field Label`}{label}</label>
    </div>
  </fieldset>
  <fieldset class="ods-fieldset">
    <div class="ods-fieldset-flex">
      <select class="ods-select" id="example-1" name="example-1" required>
        <option></option>
        <option value="value-1">Option 1</option>
        <option value="value-2">Option 2</option>
        <option value="value-3">Option 3</option>
        <option value="value-4">Option 4</option>
        <option value="value-5">Option 5</option>
        <option value="value-6">Option 6</option>
      </select>
      <label class="ods-label" for="example-1">{!label && `${capitalize(type)} Field Label, optional`}{label} <span class="ods-label--optional">Optional</span></label>
    </div>
  </fieldset>
  <fieldset class="ods-fieldset">
    <div class="ods-fieldset-flex">
      <select class="ods-select" id="example-2" name="example-2" disabled>
        <option></option>
        <option value="value-1">Option 1</option>
        <option value="value-2">Option 2</option>
        <option value="value-3">Option 3</option>
        <option value="value-4">Option 4</option>
        <option value="value-5">Option 5</option>
        <option value="value-6">Option 6</option>
      </select>
      <label class="ods-label" for="example-2">{!label && `${capitalize(type)} Field Label, disabled`}{label}</label>
    </div>
  </fieldset>
  <fieldset class="ods-fieldset">
    <div class="ods-fieldset-flex">
      <select class="ods-select" id="example-3" name="example-3" data-invalid>
        <option></option>
        <option value="value-1">Option 1</option>
        <option value="value-2">Option 2</option>
        <option value="value-3">Option 3</option>
        <option value="value-4">Option 4</option>
        <option value="value-5">Option 5</option>
        <option value="value-6">Option 6</option>
      </select>
      <label class="ods-label" for="example-3">{!label && `${capitalize(type)} Field Label, invalid`}{label}</label>
      <aside class="ods-field--error" id="checkbox-invalid-error">{errorMessage}</aside>
    </div>
  </fieldset>
</>
);

export const Default = Template.bind({});
Default.args = {
};
