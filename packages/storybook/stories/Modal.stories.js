import React from 'react';
import classNames from 'classnames'
const COMPONENT_NAME = "Modal"

export default {
  title: `Components/${COMPONENT_NAME}/SCSS`,
};

const Template = ({ title, content, footer, isOpen }) => {
  const componentClass = classNames({
    "ods-modal": true,
    "is-open": isOpen
  })
  return (
    <div class={componentClass} id="ods-modal-standard" aria-hidden={isOpen}>
      <div class="ods-modal--overlay" tabindex="-1" data-micromodal-close>
        <div class="ods-modal--dialog" role="dialog" aria-modal={isOpen} aria-labelledby="ods-modal-standard-title">
          <header class="ods-modal--header">
            <button class="ods-modal--close" aria-label="Close modal" data-micromodal-close></button>
            <h1 class="ods-modal--title" id="ods-modal-standard-title">
              {title}
            </h1>
          </header>
          <main class="ods-modal--content" dangerouslySetInnerHTML={{ __html: content }} id="ods-modal-standard-content" />
          <footer dangerouslySetInnerHTML={{ __html: footer }} class="ods-modal--footer" />
        </div>
      </div>
    </div>
  )
};

export const Default = Template.bind({});
Default.args = {
  title: "Modal title",
  content: "<p>Modal, main content</p>",
  footer: `<button class="ods-button is-ods-button-clear" data-micromodal-close aria-label="Close this dialog window">Cancel</button>
<button class="ods-button">Continue</button>`,
  isOpen: true
};
