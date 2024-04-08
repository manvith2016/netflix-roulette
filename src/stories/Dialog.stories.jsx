import Dialog from './../components/dialogBox/Dialog'

const onClose = () => {
  alert("You clicked Close button \n")
}
const children = (<div>This is Dialog Body as child</div>)

export default {
  title: 'Example/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    onClose: { control: 'object' },
    children: { control: 'object' },
  },
};

export const Dialog_Sample_1 = {
  args: {
    title: "Dialog Title",
    onClose: onClose,
    children: children
  },
};
