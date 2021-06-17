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

import { Story } from "@storybook/react";
import React from "react";
import Menu from ".";
import type { Props } from ".";

export default {
  title: `Components/Menu`,
  component: Menu,
  argTypes: {
    children: {
      control: { type: null }
    },
    disabled: {
      control: { type: "boolean" }
    },
    onClick: {
      control: { type: null }
    },
    wide: {
      control: { type: "boolean" }
    },
  },
  parameters: {
    controls: {
      sort: 'requiredFirst'
    }
  }
};

const Template: Story<Props> = ({ variant, items }) => (
  <Menu variant={variant} items={items}>Menu Label</Menu>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  items: [
    {
      type: 'node',
      node: () => (
        <div className="ods-action-list-item is-ods-action-list-item-link is-ods-action-list-item-overlay">
          <a href="#account">
            <div><strong>Ddot McNonnik</strong></div>
            <div>ddot@otka.com</div>
          </a>
        </div>
      )
    },
    {
        type: 'separator',
    },
    {
      type: 'link',
      href: '#',
      label: 'Account Settings'
    },
    {
      type: 'link',
      href: '#',
      label: 'Preferences'
    },
    {
      type: 'link',
      href: '#',
      label: 'Back to the old dashboard'
    },
    {
      type: 'separator'
    },
    {
      type: 'link',
      href: '/login/signout',
      label: 'Sign out',
      variant: 'danger',
      prominent: true
    }
]
};
Primary.argTypes = {
  onClick: { action: 'clicked Menu/primary (default)' },
};
