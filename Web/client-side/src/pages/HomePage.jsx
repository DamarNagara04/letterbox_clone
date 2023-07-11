import { useEffect } from "react";
// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../index.css";
import { toast } from "react-toastify";

// Action
import { fetchMoviesData } from "../actions/actionCreator";

// Components
import NavbarComponent from "../components/NavbarComponent";
import CardComponent from "../components/CardComponent";

function Home() {
  const dispatch = useDispatch();

  const {
    moviesData: movies,
    errMessage,
    loading,
  } = useSelector((state) => state.movies); // Dari Reducer State nya

  useEffect(() => {
    dispatch(fetchMoviesData());
  }, []);

  //   EROR =======================S

  const notify = (msg) => toast.error(msg);
  useEffect(() => {
    if (errMessage) {
      notify(errMessage);
    }
  }, [errMessage]);

  return (
    <>
      <div className="homeBackground">
        <div className="backDrop"></div>
      </div>
      <div className="container mx-5">
        <NavbarComponent />
      </div>
      <div className="welcomeText flex">
        <p>Track films you`ve watched.</p>
        <p>Save those you want to see.</p>
        <p>Tell your friends what`s good. </p>
      </div>
      {/* {JSON.stringify(movies)} */}
      <div className="container px-5 py-4">
        {loading ? <p>...Loading</p> : <CardComponent movies={movies} />}
      </div>
    </>
  );
}

export default Home;
