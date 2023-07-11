import { createBrowserRouter, redirect } from "react-router-dom";

import Layout from "../pages/LayoutPage";
import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage";

import Home from "../pages/HomePage";
import Genre from "../pages/GenrePage";

import MovieForm from "../pages/MovieFormPage";
import GenreForm from "../pages/GenreFormPage";

import EditMovieForm from "../pages/EditMoviePage";
import EditGenreForm from "../pages/EditGenrePage";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    loader: () => {
      const token = localStorage.getItem("access_token");
      if (!token) {
        throw redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/genre",
        element: <Genre />,
      },
      {
        path: "/add",
        element: <MovieForm />,
      },
      {
        path: "/genre/add",
        element: <GenreForm />,
      },
      {
        path: "/movie/:id",
        element: <EditMovieForm />,
      },
      {
        path: "/genre/edit/:id",
        element: <EditGenreForm />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      if (localStorage.getItem("access_token")) {
        throw redirect("/");
      }
      return null;
    },
  },
]);

export default router;
