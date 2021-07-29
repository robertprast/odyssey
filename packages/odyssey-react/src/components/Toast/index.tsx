/*!
 * Copyright (c) 2021-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import React, { createContext, useContext, useState } from "react";
import type { FunctionComponent, ReactElement, AnimationEvent } from "react";
import { useCx, oid } from '../../utils';
import Button from '../Button';

export type ToastVariants = 'info' | 'success' | 'caution' | 'danger';

export type PropsToast = {
  /**
   * The title to be displayed on the toast. Provides quick context; one line max.
   */
  title: string,
  
  /**
   * Supplemental information. Be concise - less than three lines of content - as your Toast will soon vanish!
   */
  body?: string,

 /**
   * The visual variant to be displayed to the user.
   * @default info
   */
  variant?: ToastVariants,
  
 /**
   * The visual variant to be displayed to the user.
   * @default info
   */
  id?: string,
  
  onAnimationEnd?: (event: AnimationEvent) => void,

  onDismiss: () => void
}

export type PropsToastProvider = { 
  /**
   * Child react nodes which leverage the toast context. This is typically an entire app. 
   */
  children?: ReactElement | ReactElement[]
}

export type StaticComponents = {
  Provider: FunctionComponent<PropsToastProvider>
}

export type ToastObject = {
  id?: string,
  title: string,
  body?: string,
  variant?: ToastVariants
}

export const ToastContext = createContext<(obj: ToastObject) => void>(() => void 0 );

/**
 * Toasts are transient, non-disruptive messages that provide at-a-glance, 
 * asynchronous feedback or updates.
 * 
 * @component
 * @example  
 * <Toast>...</Toast>
 */
const Toast: FunctionComponent<PropsToast> & StaticComponents = ({ title, body, variant = 'info', id, onDismiss, ...rest }) => {
  const componentClass = useCx(
    "ods-toast",
    `is-ods-toast-${variant}`
  );

  const xid = id || oid();

  return (
    <aside role="status" id={xid} className={componentClass} {...rest}>
      <span className="ods-toast--icon">
        {/* @todo Insert <Icon> component */} &#8253;
      </span>
      <h1 className="ods-toast--title">{title}</h1>
      {body && <p className="ods-toast--body">{body}</p>}
      <span className="ods-toast--dismiss">
        <Button variant="dismiss" onClick={onDismiss} aria-label="Dismiss toast"> 
          {/* @todo Insert <Icon> component */} &#8253;
        </Button>
      </span>
    </aside>
  )
};

/**
 * Provides applications a way to add Toasts to their app 
 * via React's Context API.
 * 
 * @component
 * @example
 * <Toast.Provider>
 *  App with toast context.
 * </ToastProvider>
 */

Toast.Provider = React.memo(({ children }) => {
  const [toasts, setToasts] = useState<ToastObject[]>([]);
  
  const addToast = (toast: ToastObject) => {
    const id = toast.id || oid();
    setToasts([...toasts, {...toast, id}])
  }

  const removeToast = (id: string) => {
    setToasts([...toasts.filter(toast => toast.id !== id)])
  }

  const handleAnimationEnd = (event: AnimationEvent) => {
    const { animationName, currentTarget } = event;

    if (animationName === "ods-toast-out") {
      removeToast(currentTarget.id)
    }
  }

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <div className="ods-toast-pen" data-testid="ods-toast-pen">
        {toasts.map(({ title, body, variant = 'info', id = oid() }) => (
          <Toast
            id={id}
            key={id}
            title={title}
            body={body}
            variant={variant}
            onDismiss={() => removeToast(id)}
            onAnimationEnd={handleAnimationEnd}
          />
        ))}
      </div>
    </ToastContext.Provider>
  )
})

export const useToast = () => useContext(ToastContext)

export default Toast
