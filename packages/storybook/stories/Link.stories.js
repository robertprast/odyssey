import React from 'react';

const COMPONENT_NAME = "Link"

export default {
  title: `Components/${COMPONENT_NAME}/SCSS`,
  argTypes: {
    text: {
      description: 'Descriptive text for the link',
      control: 'text'
    },
    target: {
      description: 'Used to specify the window or a frame where the linked document is loaded.',
      control: {
        type: 'select',
        options: ['_blank', '_self', '_parent', '_top', 'framename']
      }
    },
    rel: {
      description: 'Specifies the relationship between the current and linked document',
      control: { 
        type: 'select',
        options: [
          "alternate",
          "author",
          "dns-prefetch",
          "help",
          "icon",
          "license",
          "next",
          "nofollow",
          "noreferrer",
          "noopener",
          "pingback",
          "preconnect",
          "prefetch",
          "preload",
          "prerender",
          "prev",
          "search",
          "stylesheet"
        ]
      },
      table: {
        disable: () => this.argTypes.target === undefined && this.argTypes.rel === undefined
      }
    },
    href: {
      description: `URL to the linked resource or document`,
      control: 'text'
    }
  }
};

const Template = ({ href, icon, text, target, rel }) => (
  <a href={href} target={target} rel={rel}>
    {icon && <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="ods-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13ZM8 4C8 4.55228 7.55228 5 7 5C6.44772 5 6 4.55228 6 4C6 3.44772 6.44772 3 7 3C7.55228 3 8 3.44772 8 4ZM8 6V11H6V6H8Z" fill="currentColor"/></svg>}
    {text}
  </a>
);

export const Default = Template.bind({});
Default.storyName = "Default"
Default.args = {
  text: "Link text",
  href: "https://www.okta.com"
};


export const WithExternalIndicator = Template.bind({});
WithExternalIndicator.storyName = "With external indicator"
WithExternalIndicator.args = {
  text: "Link text, opens in new window",
  href: "https://www.okta.com",
  target: "_blank",
  rel: "noopener"
};

export const WithIcon = Template.bind({});
WithIcon.storyName = "Link text, with icon"
WithIcon.args = {
  text: "Link text",
  href: "https://www.okta.com",
  icon: true
};
