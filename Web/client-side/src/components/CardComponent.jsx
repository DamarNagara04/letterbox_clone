import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "../index.css";
import { NavLink } from "react-router-dom";

function CardComponent({ movies }) {
  return (
    <div className="card-container">
      {movies.map((movie) => (
        <div key={movie.id}>
          <NavLink to={"/movie/" + movie.id}>
            <Card
              className="card-whole"
              style={{
                backgroundImage: `url(${movie.imgUrl})`, // Fix the imgUrl value with backticks
              }}
            >
              <Card.Body className="cardInside"></Card.Body>
            </Card>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default CardComponent;

//   const [movieData, setMovieData] = useState([]);
//   const fetchMovieData = async (event) => {
//     try {
//       const response = await fetch("http://localhost:3000/client", {
//         method: "GET",
//       });
//       const data = await response.json();
//       console.log(data);
//       setMovieData(data);
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   useEffect(() => {
//     fetchMovieData();
//   }, []);
