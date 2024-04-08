import MovieForm from "./../components/movieForm/MovieForm";

const genreList = ["Action", "Adventure", "Drama", "Sci-Fi", "Traditional"];
const onSubmit = (formData) => {
  console.log("MovieForm formData: ", JSON.stringify(formData))
  alert("MovieForm formData: " + JSON.stringify(formData))
}

export default {
  title: 'Example/MovieForm',
  component: MovieForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    initialMovieInfo: { control: 'object' },
    genreList: { control: 'object' },
    onSubmit: 'object'
  },
};

export const MovieForm_Add_Demo = {
  args: {
    genreList: genreList,
    onSubmit: onSubmit
  },
};

export const MovieForm_EDIT_Demo = {
  args: {
    initialMovieInfo: {
      "title": "La La Land1111",
      "tagline": "Here's to the fools who dream.",
      "vote_average": 7.9,
      "vote_count": 6782,
      "release_date": "2016-12-29",
      "poster_path": "https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg",
      "overview": "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
      "budget": 30000000,
      "revenue": 445435700,
      "runtime": 128,
      "genres": [
        "Comedy",
        "Drama",
        "Romance"
      ]
    },
    genreList: genreList,
    onSubmit: onSubmit
  },
};
