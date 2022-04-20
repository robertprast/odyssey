/*!
 * Copyright (c) 2022-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const Portal: FC = ({ children }) => {
  const [el, setEl] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    setEl(document.createElement("div"));
  }, []);

  useEffect(() => {
    const portalElement = el;
    if (portalElement) {
      document.body.appendChild(portalElement);
    }

    return () => {
      if (portalElement) {
        document.body.removeChild(portalElement);
      }
    };
  }, [el]);
  return el ? createPortal(children, el) : null;
};

Portal.displayName = "Portal";
