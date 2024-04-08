import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page';
import MovieDetails from './components/movieDetails/MovieDetails';
import AddMovieForm from './components/movieForm/AddMovieForm';
import EditMovieForm from './components/movieForm/EditMovieForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children : [
      {
        path: "movie/:movieId",
        element: <MovieDetails />,
      },
      {
        path: "new",
        element: <AddMovieForm />,
      },
      {
        path: ":movieId/edit",
        element: <EditMovieForm />,
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
