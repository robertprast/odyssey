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

import type { ThemeReducer } from "@okta/odyssey-react-theme";

export const theme: ThemeReducer = (theme) => ({
  ItemBackgroundColor: theme.ColorPaletteNeutral100,
  ItemBorderRadius: theme.BorderRadiusBase,
  ItemMarginBlockEnd: theme.Space2,
  ItemMarginBlockStart: 0,
  ItemMarginInlineEnd: theme.Space2,
  ItemMarginInlineStart: 0,
  ItemPaddingBlock: 0,
  ItemPaddingInline: theme.Space2,
  MarginBlockEnd: theme.Space2,
  MarginInlineStart: theme.Space2,
});
