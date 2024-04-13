import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

function PlayMovie() {
  const { id } = useParams();
  console.log(id);
  const [video, setVideo] = useState([]);

  useEffect(() => {
    
    const userLoggedIn = () =>
    {
      const userData = localStorage.getItem("userData")
      if(userData == null)
      {
        window.location.href="/login";
      }

    }
    userLoggedIn()
    const videoData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US?language=en-US&page=1&api_key=54e89b04db35f4abd7d4656eb49a24e3`
      );
      console.log(response.data.results[0]);
      setVideo(response.data.results[0]);
    };
    videoData();
  }, []);
  console.log(video.key);
  return (
    <p>
      <YouTube videoId={`${video.key}`} />
    </p>
  );
}

export default PlayMovie;
