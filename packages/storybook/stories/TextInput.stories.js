import React from 'react';

const COMPONENT_NAME = "Text Input"

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
      <div class="ods-fieldset-flex">
        <input class="ods-text-input" type="text" name="example-0" id="example-0" spellcheck="false" required />
        <label class="ods-label" for="example-0">Field label</label>
      </div>
    </fieldset>
    <fieldset class="ods-fieldset">
      <div class="ods-fieldset-flex">
        <input class="ods-text-input" type="text" name="example-1" id="example-1" spellcheck="false" />
        <label class="ods-label" for="example-1">Field label <span class="ods-label--optional">Optional</span></label>
      </div>
    </fieldset>
    <fieldset class="ods-fieldset">
      <div class="ods-fieldset-flex">
        <input class="ods-text-input" type="text" name="example-2" id="example-2" spellcheck="false" disabled required />
        <label class="ods-label" for="example-2">Field label, disabled</label>
      </div>
    </fieldset>
    <fieldset class="ods-fieldset">
      <div class="ods-fieldset-flex">
        <input class="ods-text-input" type="text" name="example-3" id="example-3" spellcheck="false" data-invalid required />
        <label class="ods-label" for="example-3">Field label, invalid</label>
        <aside class="ods-field--error" id="checkbox-invalid-error">Invalid error description</aside>
      </div>
    </fieldset>
  </>
);

export const Text = Template.bind({});
Text.storyName = "Text (default)"
Text.args = {};

export const Email = Template.bind({});
Email.args = {};

export const Telephone = Template.bind({});
Telephone.args = {};

export const Password = Template.bind({});
Password.args = {};

export const Textarea = Template.bind({});
Textarea.args = {};

export const Search = Template.bind({});
Search.args = {};

export const SearchWithButton = Template.bind({});
SearchWithButton.storyName = "Search, with Button"
SearchWithButton.args = {};

