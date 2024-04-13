import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();

  const [details, setDetails] = useState([]);

  useEffect(() => {
    const dataDetails = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=54e89b04db35f4abd7d4656eb49a24e3`
      );
      setDetails(response.data);
    };
    dataDetails();
  }, []);

  return (
      <NavLink to={`/watch/${details.id}`}>
    <div className=" h-82 w-52 p-1 m-5">
        <img
          className="w-full h-64 cursor-pointer"
          src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
        />
        <p className="text-black">{details.original_title}</p>
    </div>
      </NavLink>
  );
}

export default MovieDetails;
