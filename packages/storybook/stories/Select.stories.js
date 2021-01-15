import React from 'react';

const COMPONENT_NAME = "Select"

export default {
  title: `Components/${COMPONENT_NAME}/SCSS`,
};

const Template = (args) => (<h2>{args.label} TODO</h2>);

export const Primary = Template.bind({});
Primary.args = {
  label: [COMPONENT_NAME, '(Primary)'].join(' ')
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: [COMPONENT_NAME, '(Secondary)'].join(' ')
};
