import SortControl, { RELEASE_DATE, TITLE } from "./../components/sortControl/SortControl";
const onSortSelection = (data) => {
  alert("You selected: \n" + JSON.stringify(data))
}

export default {
  title: 'Example/SortControl',
  component: SortControl,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultSortSelection: { control: 'text' },
    onSortSelection: { control: 'object' },
  },
};

export const SortControl_Sample_1 = {
  args: {
    defaultSortSelection: TITLE,
    onSortSelection: onSortSelection
  },
};

export const SortControl_Sample_2 = {
  args: {
    defaultSortSelection: RELEASE_DATE,
    onSortSelection: onSortSelection
  },
};
