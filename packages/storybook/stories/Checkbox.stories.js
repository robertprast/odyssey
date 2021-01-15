import React from 'react';

const COMPONENT_NAME = "Checkbox"

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
      <legend class="ods-input-legend">Checkbox Group</legend>
      <input class="ods-checkbox" type="checkbox" name="example-1-1" id="label-0-0" value="value-1-1" checked />
      <label class="ods-checkbox--label" for="label-1-1">Default Label 1, </label>
      <input class="ods-checkbox" type="checkbox" name="example-1-2" id="label-2" value="value-1-2" />
      <label class="ods-checkbox--label" for="label-1-2">Default Label 2</label>
      <input class="ods-checkbox" type="checkbox" name="example-1-3" id="label-3" value="value-1-3" />
      <label class="ods-checkbox--label" for="label-1-3">Default Label 3</label>
    </fieldset>
      <fieldset class="ods-fieldset">
      <legend class="ods-input-legend">Checkbox Group, disabled</legend>
      <input class="ods-checkbox" type="checkbox" name="example-2-1" id="label-2-1" value="value-2-1"  disabled checked />
      <label class="ods-checkbox--label" for="label-2-1">Disabled Label 1</label>
      <input class="ods-checkbox" type="checkbox" name="example-2-2" id="label-2-2" value="value-2-2" disabled  />
      <label class="ods-checkbox--label" for="label-2-2">Disabled Label 2</label>
      <input class="ods-checkbox" type="checkbox" name="example-2-3" id="label-2-3" value="value-2-3" disabled  />
      <label class="ods-checkbox--label" for="label-2-3">Disabled Label 3</label>
    </fieldset>
    <fieldset class="ods-fieldset">
      <legend class="ods-input-legend">Checkbox Group, invalid</legend>
      <input class="ods-checkbox" type="checkbox" name="example-3" id="example-3-1" value="value-3-1" checked data-invalid />
      <label class="ods-checkbox--label" for="example-3-1">Invalid Label 1</label>
      <input class="ods-checkbox" type="checkbox" name="example-3" id="example-3-2" value="value-3-2" data-invalid />
      <label class="ods-checkbox--label" for="example-3-2">Invalid Label 2</label>
      <input class="ods-checkbox" type="checkbox" name="example-3" id="example-3-3" value="value-3-3" data-invalid />
      <label class="ods-checkbox--label" for="example-3-3">Invalid Label 3</label>
      <aside class="ods-field--error" id="checkbox-invalid-error">Invalid error description</aside>
    </fieldset>
  </>
);

const InlineTemplate = (args) => (
  <>
    <fieldset class="ods-fieldset">
      <input class="ods-checkbox" type="checkbox" name="example-0" id="example-0" value="0" required />
      <label class="ods-checkbox--label" for="example-0">Default inline label</label>
    </fieldset>
    <fieldset class="ods-fieldset">
      <input class="ods-checkbox" type="checkbox" name="example-1" id="example-1" value="1" checked required />
      <label class="ods-checkbox--label" for="example-1">Default inline label, checked</label>
    </fieldset>
    <fieldset class="ods-fieldset">
      <input class="ods-checkbox" type="checkbox" name="example-2" id="example-2" value="2" disabled required />
      <label class="ods-checkbox--label" for="example-2">Disabled inline label</label>
    </fieldset>
    <fieldset class="ods-fieldset">
      <input class="ods-checkbox" type="checkbox" name="example-2" id="example-2" value="2" disabled checked required />
      <label class="ods-checkbox--label" for="example-2">Disabled inline label, checked</label>
    </fieldset>
    <fieldset class="ods-fieldset">
      <input class="ods-checkbox" type="checkbox" name="example-3" id="example-3" value="3" data-invalid required />
      <label class="ods-checkbox--label" for="example-3">Invalid inline label</label>
    </fieldset>
    <fieldset class="ods-fieldset">
      <input class="ods-checkbox" type="checkbox" name="example-3" id="example-3" value="3" data-invalid checked required />
      <label class="ods-checkbox--label" for="example-3">Invalid inline label, checked</label>
    </fieldset>
  </>
);

export const Default = Template.bind({});
Default.args = {};

export const Inline = InlineTemplate.bind({});
Inline.args = {};
