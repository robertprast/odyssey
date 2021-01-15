import React from 'react';
import classNames from 'classnames'
const COMPONENT_NAME = "Status"

export default {
  title: `Components/${COMPONENT_NAME}/SCSS`,
  argTypes: {
    variant: {
      description: 'Visual appearance of indicator dot',
      control: {
        defaultValue: 'primary',
        type: 'select',
        options: ['neutral', 'success', 'caution', 'danger'],
      }
    },
    label: {
      description: 'Label text which appears above dot indicator (optional)',
      control: 'text'
    },
    value: {
      description: 'Status descriptor which appears beside indicator dot',
      control: 'text'
    },
  }
};

const Template = ({ label, value, variant, labelHidden }) => {
  const componentClass = classNames({
    "ods-status": true,
    // Neutral is the default, and therefore there is no class which applies style to it.
    [`is-ods-status-${variant}`]: variant && variant !== 'neutral',
    "is-ods-status-label-hidden": labelHidden
  })
  return (
    <dl class={componentClass}>
      {label && <dt class="ods-status--label">
        {label}
      </dt>}
      <dd class="ods-status--value">
        {value}
      </dd>
    </dl>
  )
};

export const Neutral = Template.bind({});
Neutral.storyName = "Neutral (default)"
Neutral.args = {
  variant: "neutral",
  label: "Status Label",
  value: "Neutral descriptor"
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  label: "Status Label",
  value: "Success descriptor"
};

export const Caution = Template.bind({});
Caution.args = {
  variant: "caution",
  label: "Status Label",
  value: "Caution descriptor"
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
  label: "Status Label",
  value: "Danger descriptor"
};

export const NoLabel = Template.bind({});
NoLabel.storyName = "without label"
NoLabel.argTypes = {
  labelHidden: { table: { disable: true } }
}
NoLabel.args = {
  variant: "neutral",
  labelHidden: true,
  label: "This label is visually hidden, but provides context to assistive technologies.",
  value: "Status descriptor, no label"
};
