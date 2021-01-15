import React from 'react';

const COMPONENT_NAME = "Table"

export default {
  title: `Components/${COMPONENT_NAME}/SCSS`,
};

const Template = ({ title = "Title", caption = "Table caption" }) => (
  <figure class="ods-table--figure">
    <figcaption class="ods-table--figcaption">
      {title}
    </figcaption>
    <table class="ods-table">
      <caption>{caption}</caption>
      <thead>
        <tr>
          <th scope="column">Table header 1</th>
          <th scope="column" class="is-ods-table-num">Radius (km)</th>
          <th scope="column">Type</th>
          <th scope="column" class="is-ods-table-date">Perihelion date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Jupiter</td>
          <td class="is-ods-table-num">69,911</td>
          <td>Gas giant</td>
          <td class="is-ods-table-date">January 21, 2023</td>
        </tr>
        <tr>
          <td>Earth</td>
          <td class="is-ods-table-num">6,371</td>
          <td>Terrestrial</td>
          <td class="is-ods-table-date">January 2, 2021</td>
        </tr>
        <tr>
          <td>Mercury</td>
          <td class="is-ods-table-num">1,737</td>
          <td>Terrestrial</td>
          <td class="is-ods-table-date">&ndash;</td>
        </tr>
      </tbody>
    </table>
  </figure>
);

export const Primary = Template.bind({});
Primary.args = {
  label: [COMPONENT_NAME, '(Primary)'].join(' ')
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: [COMPONENT_NAME, '(Secondary)'].join(' ')
};
