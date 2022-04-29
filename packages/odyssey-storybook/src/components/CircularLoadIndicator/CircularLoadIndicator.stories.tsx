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

import React from "react";
import type { Story } from "@storybook/react";
import {
  CircularLoadIndicator,
  CircularLoadIndicatorProps,
} from "../../../../odyssey-react/src";
import CircularLoadIndicatorMdx from "./CircularLoadIndicator.mdx";

export default {
  title: `Components/CircularLoadIndicator`,
  component: CircularLoadIndicator,
  parameters: {
    docs: {
      page: CircularLoadIndicatorMdx,
    },
  },
};

const Template: Story<CircularLoadIndicatorProps> = () => (
  <div aria-describedby="my-loader" aria-busy>
    <CircularLoadIndicator
      aria-label="Loader"
      aria-valuetext="Loading..."
      id="my-loader"
    />
  </div>
);

export const Default = Template.bind({});
