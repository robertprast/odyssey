import React from 'react';
import classNames from "classnames" 

const COMPONENT_NAME = "Toast"

export default {
  title: `Components/${COMPONENT_NAME}/SCSS`,
  argTypes: {
    title: {
      description: 'Human readable heading displayed within',
      defaultValue: 'Toast title',
      control: 'text'
    },
    body: {
      description: 'Human readable descriptive text displayed within',
      defaultValue: 'Toast body text.',
      control: 'text'
    },
    variant: {
      description: 'Toast appearance based on use-case',
      control: {
        defaultValue: 'info',
        type: 'select',
        options: ['info', 'success', 'caution', 'danger'],
      }
    }
  }
};

const ToastTemplate = ({ variant, title, body }) => {
  const componentClass = classNames({
    "ods-toast": true,
    [`is-ods-toast-${variant}`]: variant
  })
  
  return (
    <aside role="status" className={componentClass}>
      <span className="ods-toast--icon">
          <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="ods-icon">
            {variant === "info" && <path fill-rule="evenodd" clip-rule="evenodd" d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13ZM8 4C8 4.55228 7.55228 5 7 5C6.44772 5 6 4.55228 6 4C6 3.44772 6.44772 3 7 3C7.55228 3 8 3.44772 8 4ZM8 6V11H6V6H8Z" fill="currentColor"></path>}
            {variant === "success" && <path fill-rule="evenodd" clip-rule="evenodd" d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13ZM9.50016 3.42651L6.63849 8.8669L4.22481 7.07784C3.89245 6.83149 3.42613 6.89322 3.16837 7.21769C2.90629 7.5476 2.95548 8.02808 3.27889 8.29728L6.32704 10.8344C6.67432 11.1235 7.19733 11.0221 7.41313 10.6239L10.9026 4.18507C11.1185 3.78675 10.963 3.28766 10.5598 3.08475C10.173 2.89009 9.70251 3.04183 9.50016 3.42651Z" fill="currentColor"></path>}
            {variant === "caution" && <path fill-rule="evenodd" clip-rule="evenodd" d="M6.52856 1.29141L1.05633 12.2371C0.881095 12.5876 1.13594 13 1.52777 13H12.4722C12.8641 13 13.1189 12.5876 12.9437 12.2371L7.47144 1.29141C7.2772 0.902874 6.7228 0.902874 6.52856 1.29141ZM8 4.50001H6V9.00001H8V4.50001ZM7 12C7.55228 12 8 11.5523 8 11C8 10.4477 7.55228 10 7 10C6.44772 10 6 10.4477 6 11C6 11.5523 6.44772 12 7 12Z" fill="currentColor"></path>}
            {variant === "danger" && <path fill-rule="evenodd" clip-rule="evenodd" d="M6.63381 1.15168L1.15168 6.63381C0.949439 6.83605 0.949439 7.16395 1.15168 7.36619L6.63381 12.8483C6.83605 13.0506 7.16395 13.0506 7.36619 12.8483L12.8483 7.36619C13.0506 7.16395 13.0506 6.83605 12.8483 6.63381L7.36619 1.15168C7.16395 0.949439 6.83605 0.949439 6.63381 1.15168ZM6 3.00001H8V8H6V3.00001ZM8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10C6 9.44771 6.44772 9 7 9C7.55228 9 8 9.44771 8 10Z" fill="currentColor"></path>}
          </svg>
      </span>
      {title && <h1 className="ods-toast--title">{title}</h1>}
      {body && <p className="ods-toast--body">{body}</p>}
      <button aria-label="Dismiss toast" className="ods-toast--dismiss"></button>
    </aside>
  )
};


const ToastPenTemplate = ({ variant, title, body }) => (
  <div class="ods-toast-pen">
    <ToastTemplate variant={variant} title={title} body={body} />
  </div>
);

export const Info = ToastTemplate.bind({});
Info.args = {
  title: "Info title",
};
Info.storyName = "Info (default)"
Info.argTypes = {
  variant: { table: { disable: true } },
}

export const Success = ToastTemplate.bind({});
Success.args = {
  title: "Success title",
  variant: "success"
};
Success.argTypes = {
  variant: { table: { disable: true } },
}

export const Caution = ToastTemplate.bind({});
Caution.args = {
  title: "Caution title",
  variant: "caution"
};
Caution.argTypes = {
  variant: { table: { disable: true } },
}

export const Danger = ToastTemplate.bind({});
Danger.args = {
  title: "Danger title",
  variant: "danger"
};
Danger.argTypes = {
  variant: { table: { disable: true } },
}


export const ToastPen = ToastPenTemplate.bind({});
ToastPen.storyName = "within Toast Pen"
ToastPen.args = {
  variant: "info"
};
