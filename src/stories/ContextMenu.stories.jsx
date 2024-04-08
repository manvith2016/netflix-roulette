import ContextMenu from '../components/contextMenu/ContextMenu';
const onViewMoviewSelect = (data) => {
  alert("You clicked View: \n" + JSON.stringify(data))
}

const onEditMoviewSelect = (data) => {
  alert("You clicked Edit: \n" + JSON.stringify(data))
}

const onDeleteMoviewSelect = (data) => {
  alert("You clicked Delete: \n" + JSON.stringify(data))
}

export default {
  title: 'Example/ContextMenu',
  component: ContextMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    MENU_ID: { control: 'text' },
    menuData: { control: 'object' },
    onViewMoviewSelect: { control: 'object' },
    onEditMoviewSelect: { control: 'object' },
    onDeleteMoviewSelect: { control: 'object' },
  },
};

export const Primary = {
  args: {
    MENU_ID: "MENU_ID1",
    menuData: { data: "test1" },
    onViewMoviewSelect: onViewMoviewSelect,
    onEditMoviewSelect: onEditMoviewSelect,
    onDeleteMoviewSelect: onDeleteMoviewSelect
  },
};
