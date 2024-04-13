import play from "../images/play.svg";
import fire from "../images/fire.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import { NavLink } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchingNowPlaying();
  }, []);

  const fetchingNowPlaying = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=54e89b04db35f4abd7d4656eb49a24e3",
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGU4OWIwNGRiMzVmNGFiZDdkNDY1NmViNDlhMjRlMyIsInN1YiI6IjY1ZmE5NGI2Y2Y2MmNkMDE3ZDU1YzVkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wU0wQqsf3DJbX9vEUqa7gq62LiC5LpawXZQeEuwp1ws",
          },
        }
      );
      setMovies(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:pt-20 w-full lg:ml-7">
        <div className="text-center lg:text-left lg:w-3/5">
          <h1 className="font-bold text-white text-3xl">FIND MOVIES</h1>
          <h1 className="font-bold text-white text-4xl pb-1">
            TV SHOWS AND MORE
          </h1>
          <div className="space-y-5 m-3 max-w-sm lg:max-w-none lg:ml-3">
            <p className="text-white max-w-sm">
              Lorem Ipsum has been industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </p>

            <button className="border-white bg-black text-white max-w-64 mx-auto lg:mx-0">
              <div className="flex items-center justify-center border p-4 rounded-lg">
                <img src={play} className="w-6 h-6 mr-2" alt="Play" />
                <p className="font-bold">Watch Tutorial</p>
              </div>
            </button>
          </div>
        </div>
        <div className="w-full lg:w-2/5"></div>
      </div>
      <div className="flex justify-center lg:justify-start lg:ml-7 mt-8">
        <img src={fire} alt="Fire Icon" className="w-6 h-6 mr-2" />
        <p className="text-white">Trending</p>
        <div className="hidden lg:block h-[1px] mx-5 bg-white"></div>
        <p className="text-white text-sm cursor-pointer">See More</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:ml-7 mt-4">
        {movies.map((movie) => (
          <NavLink key={movie.id} to={`/detail/${movie.id}`}>
            <Card
              image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              name={movie.original_title}
              date={movie.release_date}
              vote={movie.vote_average}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Home;
