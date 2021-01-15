import React from 'react';
import classNames from "classnames"
const COMPONENT_NAME = "Tooltip"

export default {
  title: `Components/${COMPONENT_NAME}/SCSS`,
  parameters: {
    layout: "centered"
  }
};

const Template = ({ label, position }) => {
  const componentClass = classNames({
    'ods-tooltip': true,
    [`is-ods-tooltip-${position}`]: position,
  });

  return (
    <span class="has-ods-tooltip">
      <button aria-describedby="edit-label" class="ods-button">
          <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="ods-icon">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8008 2.78969L11.2103 1.19923C10.9447 0.933589 10.5121 0.933589 10.2465 1.19923L9 2.44572L11.5543 5L12.8007 3.75351C13.0664 3.48787 13.0664 3.05533 12.8008 2.78969ZM3.5 13L10.5 6L8 3.5L1 10.5V13L3.5 13Z" fill="currentColor"></path>
          </svg>
        </button> 
        <aside id="edit-label" role="tooltip" class={componentClass}>
          {label}
        </aside>
    </span>
  )
};

export const Top = Template.bind({});
Top.args = {
  label: [COMPONENT_NAME, '(Top)'].join(' '),
  position: "top"
};

export const Right = Template.bind({});
Right.args = {
  label: [COMPONENT_NAME, '(Right)'].join(' '),
  position: "right"
};

export const Bottom = Template.bind({});
Bottom.args = {
  label: [COMPONENT_NAME, '(Bottom)'].join(' '),
  position: "bottom"
};

export const Left = Template.bind({});
Left.args = {
  label: [COMPONENT_NAME, '(Left)'].join(' '),
  position: "left"
};
