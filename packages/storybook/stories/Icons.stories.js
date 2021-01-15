import { icons as glyphs } from '../.storybook/data' 
export default {
  title: 'Base/Icons/HTML'
};

const Template = ({glyphs}) => (
  <table>
    <thead><tr><th scope="column">Icon</th> <th scope="column">Name</th> <th scope="column">Use</th></tr></thead>
    <tbody>
    {glyphs.map(({ name, desc }) => (
      <tr>
        <td>⭕</td> 
        <td>{name}</td> 
        <td>{desc}</td>
      </tr>
    ))}
    </tbody>
  </table>
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  glyphs
};
