import MovieDetails from "./../components/movieDetails/MovieDetails";
const toggleMovieInfoPanel = () => {
  alert("onClicked X CLOSE button ")
}
const imageURL = "http://localhost/dummy_poster.jpeg";
const movieName = "Black Panther";
const releaseYear = "2023";
const generes = ["Action", "Adventure", "Fantasy"]

export default {
  title: 'Example/MovieDetails',
  component: MovieDetails,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    key: { control: 'text' },
    selectedMovieData: { control: 'object' },
    toggleMovieInfoPanel: { control: 'object' },
  },
};

export const MovieDetails_Sample_1 = {
  args: {
    key: "1",
    selectedMovieData: {
      id: "12345",
      imageURL: imageURL,
      movieName: movieName,
      releaseYear: releaseYear,
      generes: generes,
      overview: "overview",
      runtime: "runtime",
      revenue: "revenue",
      budget: "budget",
      vote_count: "1000",
      vote_average: "222",
      tagline: "tagLine",
    },
    toggleMovieInfoPanel: toggleMovieInfoPanel
  },
};

export const MovieDetails_Sample_2 = {
  args: {
    key: "1",
    selectedMovieData: {
      id: "12345",
      imageURL: imageURL,
      movieName: movieName,
      releaseYear: releaseYear,
      generes: generes,
      overview: "overview",
      runtime: "runtime",
      revenue: "revenue",
      budget: "budget",
      vote_count: "1000",
      vote_average: "222",
      tagline: "tagLine",
    },
    toggleMovieInfoPanel: toggleMovieInfoPanel
  },
};
