import React from 'react';
import { capitalize, dashCase } from "../.storybook/utils" 

const COMPONENT_NAME = "Text Input"

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
        <input class="ods-text-input" type={type} value={value} name="example-0" id="example-0" spellcheck="false" required />
        <label class="ods-label" for="example-0">{!label && `${capitalize(type)} Field Label`}{label}</label>
      </div>
    </fieldset>
    <fieldset class="ods-fieldset">
      <div class="ods-fieldset-flex">
        <input class="ods-text-input" type={type} value={value} name="example-1" id="example-1" spellcheck="false" />
        <label class="ods-label" for="example-1">{!label && `${capitalize(type)} Field Label, optional`}{label} <span class="ods-label--optional">Optional</span></label>
      </div>
    </fieldset>
    <fieldset class="ods-fieldset">
      <div class="ods-fieldset-flex">
        <input class="ods-text-input" type={type} value={value} name="example-2" id="example-2" spellcheck="false" disabled required />
        <label class="ods-label" for="example-2">{!label && `${capitalize(type)} Field Label, disabled`}{label}</label>
      </div>
    </fieldset>
    <fieldset class="ods-fieldset">
      <div class="ods-fieldset-flex">
        <input class="ods-text-input" type={type} value={value} name="example-3" id="example-3" spellcheck="false" data-invalid required />
        <label class="ods-label" for="example-3">{!label && `${capitalize(type)} Field Label, invalid`}{label}</label>
        <aside class="ods-field--error" id="checkbox-invalid-error">{errorMessage}</aside>
      </div>
    </fieldset>
  </>
);

const TemplateWithButton = ({ type, label, value, errorMessage }) => ( 
  <>
    <fieldset class="ods-fieldset">
      <div class="ods-fieldset--attached">
        <input type="search" name="example-0" id="example-0" autocomplete="search" spellcheck="false" aria-labelledby="example-0-button" required="required" class="ods-text-input" />
        <button id="example-0-button" class="ods-button">Button Label</button>
      </div>
    </fieldset>
    <fieldset class="ods-fieldset">
      <div class="ods-fieldset--attached">
        <input type="search" name="example-1" id="example-1" autocomplete="search" spellcheck="false" aria-labelledby="example-1-button" required="required" class="ods-text-input" disabled />
        <button id="example-1-button" class="ods-button" disabled>Button, disabled</button>
      </div>
    </fieldset>
    <fieldset class="ods-fieldset">
      <div class="ods-fieldset--attached">
        <input class="ods-text-input" type={type} value={value} name="example-3" id="example-3" spellcheck="false" data-invalid required />
        <label class="ods-label" for="example-3">{!label && `${capitalize(type)} Field Label, invalid`}{label}</label>
        <button id="example-6" class="ods-button">Button label</button>
        <aside class="ods-field--error" id="checkbox-invalid-error">{errorMessage}</aside>
      </div>
    </fieldset>
  </>
);

export const Text = Template.bind({});
Text.storyName = "Text (default)"
Text.args = {
  type: "text",
  errorMessage: "Invalid error description"
};

export const Email = Template.bind({});
Email.args = {
  type: "email",
  errorMessage: "Invalid error description"
};

export const Tel = Template.bind({});
Tel.args = {
  type: "tel",
  errorMessage: "Invalid error description"
};

export const Password = Template.bind({});
Password.args = {
  type: "password",
  errorMessage: "Invalid error description"
};

export const Textarea = Template.bind({});
Textarea.args = {
  type: "textarea",
  errorMessage: "Invalid error description"
};

export const Search = Template.bind({});
Search.args = {
  type: "search",
  errorMessage: "Invalid error description"
};

export const SearchWithButton = TemplateWithButton.bind({});
SearchWithButton.storyName = "Search, with Button"
SearchWithButton.args = {
  type: "search",
  errorMessage: "Invalid error description"
};

