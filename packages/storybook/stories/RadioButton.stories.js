import React from 'react';

const COMPONENT_NAME = "Radio Button"

export default {
  title: `Components/${COMPONENT_NAME}/SCSS`,
  argTypes: {
    label: {
      description: 'Human readable text displayed within the button',
      control: 'text'
    },
    variant: {
      description: 'Button appearance based on use-case',
      control: {
        defaultValue: {summary: 'primary'},
        type: 'select',
        options: ['primary', 'secondary', 'danger', 'clear'],
      }
    },
    icon: {
      table: {
        disable: () => this.argTypes.variant === "secondary"
      }
    }
  }
};

const Template = (args) => (
  <>
    <fieldset class="ods-fieldset">
      <legend class="ods-input-legend">Radio Button</legend>
      <input class="ods-radio" type="checkbox" name="example-0" id="label-1" value="value-1" checked />
      <label class="ods-radio--label" for="label-1">Default Label 1, </label>
      <input class="ods-radio" type="checkbox" name="example-0" id="label-2" value="value-2" />
      <label class="ods-radio--label" for="label-2">Default Label 2</label>
      <input class="ods-radio" type="checkbox" name="example-0" id="label-3" value="value-3" />
      <label class="ods-radio--label" for="label-3">Default Label 3</label>
    </fieldset>
      <fieldset class="ods-fieldset">
      <legend class="ods-input-legend">Radio Button, disabled</legend>
      <input class="ods-radio" type="checkbox" name="example-0" id="label-1" value="value-1"  disabled checked />
      <label class="ods-radio--label" for="label-1">Disabled Label 1</label>
      <input class="ods-radio" type="checkbox" name="example-0" id="label-2" value="value-2" disabled  />
      <label class="ods-radio--label" for="label-2">Disabled Label 2</label>
      <input class="ods-radio" type="checkbox" name="example-0" id="label-3" value="value-3" disabled  />
      <label class="ods-radio--label" for="label-3">Disabled Label 3</label>
    </fieldset>
    <fieldset class="ods-fieldset">
      <legend class="ods-input-legend">Radio Button, invalid</legend>
      <input class="ods-radio" type="checkbox" name="example-3" id="example-3-1" value="value-1" checked data-invalid />
      <label class="ods-radio--label" for="example-3-1">Invalid Label 1</label>
      <input class="ods-radio" type="checkbox" name="example-3" id="example-3-2" value="value-2" data-invalid />
      <label class="ods-radio--label" for="example-3-2">Invalid Label 2</label>
      <input class="ods-radio" type="checkbox" name="example-3" id="example-3-3" value="value-3" data-invalid />
      <label class="ods-radio--label" for="example-3-3">Invalid Label 3</label>
      <aside class="ods-field--error" id="checkbox-invalid-error">Invalid error description</aside>
    </fieldset>
  </>
);

export const Default = Template.bind({});
Default.storyName = "Default"
Default.args = {};
