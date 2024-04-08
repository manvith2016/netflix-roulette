import axios from "axios";
import { useEffect, useState } from 'react';
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import './App.css';
import Dialog from './components/dialogBox/Dialog';
import { GenreSelection }from './components/genreComponent/GenreSelection';
import Header from './components/header/Header';
import DeleteMovie from './components/movieForm/DeleteMovie';
import MovieFormResult from './components/movieForm/MovieFormResult';
import MovieTitle from './components/movieTitle/MovieTitle';
import SortControl, { RELEASE_DATE } from './components/sortControl/SortControl';
import { fetchCurrentQueryParams } from './utils/utils';
import { fetchGenreList } from './services/genreService'
export const HOST="http://localhost:4000";
function App() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedGenre, setSelectedGenre] = useState(searchParams.get('activeGenre') || 'Adventure');
  const [sortBy,setSortBy] = useState(searchParams.get('sortBy') || RELEASE_DATE)
  const query = searchParams.get('query') || null;
  const [searchString, setSearchString] = useState(query);


  const [movies, setMovies] = useState([]);
  const [genreList, setGenreList] = useState([]);
  
  const [selectedMovieData,setSelectedMovieData] = useState(null);
  const [showMovieInfoPanel,setShowMovieInfoPanel] = useState(false);
  
  
  const [deleteMovieDialog, setDeleteMovieDialog] = useState({
    isOpen: false,
    movieInfo: null
  });
  const [movieFormResult, setMovieFormResult] = useState({
    msg: null,
    isOpen: false,
    isSuccess: true
  })

  const openDeleteMovieDialog = (movieInfo) => {
    setDeleteMovieDialog({
      isOpen: true,
      movieInfo: movieInfo
    });
  };

  const closeDeleteMovieDialog = () => {
    setDeleteMovieDialog({
      isOpen: false,
      movieInfo: null
    });
  };

  const openMovieFormResultDialog = (msg, isSuccess) => {
    setMovieFormResult({
      isSuccess: isSuccess,
      msg: msg,
      isOpen: true
    })
  };

  const closeMovieFormResultDialog = () => {
    setMovieFormResult({
      isSuccess: true,
      msg: null,
      isOpen: false
    })
  };
  

  useEffect(() => {
    console.log("useEffect Setting Genre Menu's", selectedGenre, fetchCurrentQueryParams(searchParams))
    let tempList = [];
    fetchGenreList()
    .then((response) => {
      response.data.data.map(i=>{
        tempList = tempList.concat(i.genres)
        return i.genres;
      });
      tempList = Array.from(new Set(tempList));
      setGenreList(tempList.toSorted())
      return tempList;
    })
    .catch((err) => {
      console.log('error', err)
     });
  }, [])

  
  useEffect(() => {
    updateCurrentURL()
    console.log("useEffect called.>>")
    callMoviewAPI(selectedGenre, sortBy, query);
  }, [selectedGenre, sortBy, query, searchString])

  const updateCurrentURL=()=>{
    const queryParams ={activeGenre: selectedGenre, sortBy: sortBy};
    if(searchString){
      queryParams['query'] = searchString;
    }
    setSearchParams(queryParams);
  }

  const callMoviewAPI = (selectedGenre, sortBy,  searchString) =>{
    let searchQuerParam = new URLSearchParams();
    searchQuerParam.set("offset", 0);
    searchQuerParam.set("limit", 20);
    if(selectedGenre && !searchString){
      searchQuerParam.set("filter", selectedGenre);
    }
    searchQuerParam.set("sortBy", sortBy);
    searchQuerParam.set("sortOrder", "desc");
    if (searchString) {
      searchQuerParam.set("searchBy", "title");
      searchQuerParam.set("search", searchString);
    }
    axios.get(HOST+"/movies?"+searchQuerParam.toString())
    .then((response) => {
      setMovies(response.data.data);
    })
    .catch((err) => {
      console.log('error', err)
     });
  }

  const createSearchParamsCustom = ()=>{
    const queryParams ={activeGenre: selectedGenre, sortBy: sortBy};
    if(searchString){
      queryParams['query'] = searchString;
    }
    return createSearchParams(queryParams);
  }
  const onGenreSelected = (selectedGenre) => {
    console.log("You selected: "+ selectedGenre)
    setSearchString(null)
    setSelectedGenre(selectedGenre);
    navigate({
      pathname: "/",
      search: createSearchParamsCustom().toString()
    });
  }

  const onTileSelected = (movieData) => {
    navigate("/movie/"+movieData.id)
    setSelectedMovieData(movieData)
    toggleMovieInfoPanel(true)
  }

  const toggleMovieInfoPanel = (show) =>{
    window.scrollTo(0, 0)
    setShowMovieInfoPanel(show)
    console.log("toggleMovieInfoPanel called: ", show)
  }

  const viewMovieData = (movieData) => {
    console.log("viewMovieData: ", movieData)
    // alert("viewMovieData: "+ movieData)
    var str="\n\n";
    for (const [key, value] of Object.entries(movieData)) {
      str = str + key+ " : "+ value + "\n";
    }
    alert("=====viewMovieData======="+ str)
  }

  const editMovieData = (movieData) => {
    console.log("editMovieData: ", movieData)
    // alert("editMovieData: "+ movieData)
    var str="\n\n";
    for (const [key, value] of Object.entries(movieData)) {
      str = str + key+ " : "+ value + "\n";
    }
    // alert("=====editMovieData======="+ str)
    
    navigate("/"+movieData.id+"/edit?"+fetchCurrentQueryParams(searchParams))
  }

  const deleteMovieData = (movieData) => {
    console.log("deleteMovieData: ", movieData)
    // alert("deleteMovieData: "+ movieData)
    var str="\n\n";
    for (const [key, value] of Object.entries(movieData)) {
      str = str + key+ " : "+ value + "\n";
    }
    // alert("=====deleteMovieData======="+ str)
    openDeleteMovieDialog(movieData)
  }

  const onSortSelectionListener = (sortBy) =>{
    console.log("onSortSelectionListener", sortBy)
    setSortBy(sortBy);
    navigate({
      pathname: "/",
      search: createSearchParamsCustom().toString()
    });
  }

  const onSearch = (inputText) =>{
    setSearchString(inputText);
    callMoviewAPI(null, sortBy, inputText);
  }

  

  const onDeleteMovie = (movieInfo) =>{
    console.log(movieInfo)
    axios.delete(HOST+"/movies/"+movieInfo.id)
    .then((response) => {
      openMovieFormResultDialog("The movie has been deleted from database successfully", true)
    })
    .catch((err) => {
      console.log('error', err)
      openMovieFormResultDialog("Failed to delete the movie. Please try again !!", false)
     }).finally(()=>{
      closeDeleteMovieDialog()
     });
  }


  return (
    <>
      <Header
        selectedMovieData={selectedMovieData}
        showMovieInfoPanel={showMovieInfoPanel}
        toggleMovieInfoPanel={toggleMovieInfoPanel}
        onSearch={onSearch}
      ></Header>
      <div className="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-10 col-md-10 px-0">
              <ul className="nav nav-tabs bg-dark">
                <GenreSelection
                  genres={genreList}
                  defaultSelectedGenre={selectedGenre}
                  onSelect={onGenreSelected}
                ></GenreSelection>
              </ul>
            </div>
            <div className="col-sm-2 col-md-2 px-0">
              <ul className="bg-dark">
                <SortControl
                  defaultSortSelection={sortBy}
                  onSortSelection={onSortSelectionListener}
                ></SortControl>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-content">
          <div className="row">
            {movies?.map((movie) => (
              <MovieTitle
                key={movie?.id}
                movieTileData={{
                  id: movie?.id,
                  imageURL: movie?.poster_path,
                  movieName: movie?.title,
                  releaseYear: movie?.release_date.split("-")[0],
                  generes: movie?.genres,
                  ...movie,
                }}
                onViewMoviewSelect={viewMovieData}
                onEditMoviewSelect={editMovieData}
                onDeleteMoviewSelect={deleteMovieData}
                onTileSelected={onTileSelected}
              ></MovieTitle>
            ))}
          </div>
        </div>
        
        <footer>
        { movieFormResult.isOpen && (
          <Dialog title={""} onClose={closeMovieFormResultDialog}>
            <MovieFormResult movieFormResult={movieFormResult}></MovieFormResult>
          </Dialog>
        )}

        { deleteMovieDialog.isOpen && (
          <Dialog title={"DELETE MOVIE"} onClose={closeDeleteMovieDialog}>
            <DeleteMovie movieInfo={deleteMovieDialog.movieInfo} onDeleteMovie={onDeleteMovie}></DeleteMovie>
          </Dialog>
        )}  
          <img src="/logo.png" />
        </footer>
      </div>
    </>
  );
}

export default App;
