import { GenreSelection } from "../components/genreComponent/GenreSelection";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
    title: 'Example/GenreSelection',
    component: GenreSelection,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        onSelect: { control: 'function' },
        selectedGenre: { control: 'radio', options: ['All', 'Documentary', 'Comedy', 'Horror'] },
        genres: { control: 'array' },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
    args: {
        onSelect: undefined,
        selectedGenre: 'All',
        genres: ['All', 'Documentary', 'Comedy', 'Horror'],
    },
};
