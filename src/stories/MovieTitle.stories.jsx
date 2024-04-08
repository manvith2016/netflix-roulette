import MovieTitle from "../components/movieTitle/MovieTitle";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
    title: 'Example/MovieTitle',
    component: MovieTitle,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        onViewMovieSelect: { control: 'function' },
        onEditMovieSelect: { control: 'function' },
        onDeleteMovieSelect: { control: 'function' },
        onTileSelected: { control: 'function' },
        movieTileData: { control: 'object' }
    },
};

const imageURL = "http://localhost/dummy_poster.jpeg";
const movieName = "Black Panther";
const releaseYear = "2023";
const generes = ["Action", "Adventure", "Fantasy"]

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
    args: {
        onViewMovieSelect: (data) => { alert("you clicked on view movie") },
        onEditMovieSelect: (data) => { alert("you clicked on edit movie") },
        onDeleteMovieSelect: (data) => { alert("you clicked on delete movie") },
        onTitleSelected: (data) => { alert("you clicked on select title") },
        movieTileData: {
            id: "1",
            imageURL: imageURL,
            movieName: movieName,
            releaseYear: releaseYear,
            generes: generes,
        }
    },
};
