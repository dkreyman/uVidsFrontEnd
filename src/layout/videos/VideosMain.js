import React, { Component, useEffect, useState } from "react";
import AllVideosCarousel from "./AllVideosCarousel";
import MyFavoritesCarousel from "./MyFavoritesCarousel";
import PlayingVideo from "./PlayingVideo";
import logo from "../assets/zype-logo-white.svg";
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

  useEffect(() => {
    if (videos !== 0) {
      setPlayingVideo(videos["response"][0]);
    }
  }, [videos]);

  function updateFavoriteVids(newVid) {
    if (!favoriteVideos.includes(newVid)) {
      setFavoriteVideos([...favoriteVideos, newVid]);
    } else {
      console.log("newvid", newVid, "fav", favoriteVideos[0]);
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
      <nav class="navbar navbar-light">
        <a class="navbar-brand p-1 ml-2" href="#">
          <img src={logo} width="130" height="45" alt="" />
        </a>
      </nav>
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
