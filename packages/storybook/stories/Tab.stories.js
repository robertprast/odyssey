import React from 'react';

const COMPONENT_NAME = "Tab"

export default {
  title: `Components/${COMPONENT_NAME}/SCSS`,
};

const Template = (args) => (
  <div id="example" class="ods-tabs" aria-label="Describes the purpose of this set of tabs">
    <div role="tablist" aria-label="label" class="ods-tabs--tablist">
      <button id="tab-1" role="tab" tabindex="0" aria-controls="tab-1-tabpanel" class="ods-tabs--tab" aria-selected="true">Tab 1</button>
      <button id="tab-2" role="tab" tabindex="-1" aria-controls="tab-2-tabpanel" class="ods-tabs--tab">Tab 2</button>
      <button id="tab-3" role="tab" tabindex="-1" aria-controls="tab-3-tabpanel" class="ods-tabs--tab">Tab 3</button>
    </div>
    <div class="ods-tabs--tabpanel">
        <div id="tab-1-tabpanel" role="tabpanel" aria-labelledby="tab-1" tabindex="0">
          <p>Tabpanel 1 content&hellip;</p>
        </div>
        <div id="tab-2-tabpanel" role="tabpanel" aria-labelledby="tab-2" tabindex="0" hidden="hidden">
          <p>Tabpanel 2 content&hellip;</p>
        </div>
        <div id="tab-3-tabpanel" role="tabpanel" aria-labelledby="tab-3" tabindex="0" hidden="hidden">
          <p>Tabpanel 3 content&hellip;</p>
        </div>
    </div>
  </div>
);

export const Default = Template.bind({});
