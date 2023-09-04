import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'clicked' },
    backgroundColor: { control: 'color' },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    }
  },
}

const Template = args => <Button {...args} />

export const Red = Template.bind({});
Red.args = {
  backgroundColor: 'red',
  label: 'Press Me!',
  size: 'md',
  onClick: () => {}
}

export const Green = Template.bind({});
Green.args = {
  backgroundColor: 'green',
  label: 'Press Me!',
  size: 'md',
  onClick: () => {}
}

export const Small = Template.bind({});
Small.args = {
  backgroundColor: 'red',
  label: 'Press Me!',
  size: 'sm',
  onClick: () => {}
}

export const Large = Template.bind({});
Large.args = {
  backgroundColor: 'red',
  label: 'Press Me!',
  size: 'lg',
  onClick: () => {}
}

export const LongLabel = Template.bind({});
LongLabel.args = {
  backgroundColor: 'red',
  label: 'Press the button with a really long label!',
  size: 'md',
  onClick: () => {}
}