import React, { useEffect, useState } from "react";
import AllVideosCarousel from "./AllVideosCarousel";
import MyFavoritesCarousel from "./MyFavoritesCarousel";
import PlayingVideo from "./PlayingVideo";
import { fetchVideos } from "../utils/api";

/**
 * Defines the main layout of the application.
 *
 * You will not need to make changes to this file.
 *
 * @returns {JSX.Element}
 */

function VideosMain() {
  const [videos, setVideos] = useState(0);
  const [favoriteVideos, setFavoriteVideos] = useState([]);
  const [playingVideo, setPlayingVideo] = useState(0);

  //fetch all videos from the api
  useEffect(() => {
    const loadVideos = () => {
      const abortController = new AbortController();
      fetchVideos(abortController.signal)
        .then(setVideos)
        .catch((err) => console.error("error:" + err));
      return () => {
        abortController.abort();
      };
    };
    loadVideos();
  }, []);

  //when videos are loaded set playing video to the first video
  useEffect(() => {
    if (videos !== 0) {
      setPlayingVideo(videos["response"][0]);
    }
  }, [videos]);

  //if the video is not in favorites include it; if it is remove it.
  function updateFavoriteVids(newVid) {
    if (!favoriteVideos.includes(newVid)) {
      setFavoriteVideos([...favoriteVideos, newVid]);
    } else {
      setFavoriteVideos((favoriteVideos) =>
        favoriteVideos.filter((vid) => vid._id !== newVid._id)
      );
    }
  }

  function updatePlayingVid(vid) {
    setPlayingVideo(vid);
  }

  return (
    <div>
      {/* <nav className="navbar navbar-light">
        <a className="navbar-brand p-1 ml-2" href="/">
          <img src={logo} width="130" height="45" alt="" />
        </a>
      </nav> */}
      <div className="container">
        <div className="row">
          <div className="col">
            {playingVideo !== 0 && (
              <PlayingVideo
                playingVideo={playingVideo}
                updateFavoriteVids={updateFavoriteVids}
              />
            )}
          </div>
        </div>
        <div className="row ">
          <div className="col">
            {videos !== 0 && (
              <AllVideosCarousel
                updatePlayingVid={updatePlayingVid}
                videos={videos}
              />
            )}
          </div>
        </div>
        <div className="row ">
          <div className="col">
            {videos !== 0 && (
              <MyFavoritesCarousel
                favoriteVideos={favoriteVideos}
                videos={videos}
                updatePlayingVid={updatePlayingVid}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideosMain;
