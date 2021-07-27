import React, { Component, useEffect, useState } from "react";
import AllVideosCarousel from "./AllVideosCarousel";
import MyFavoritesCarousel from "./MyFavoritesCarousel";
import PlayingVideo from "./PlayingVideo";
import logo from "../assets/zype-logo-white.svg";
import { fetchVideos } from "../../utils/api";

/**
 * Defines the main layout of the application.
 *
 * You will not need to make changes to this file.
 *
 * @returns {JSX.Element}
 */

function VideosMain() {
  const [videos, setVideos] = useState();
  const [playingVideo, setPlayingVideo] = useState();
  useEffect(() => {
    const loadVideos = () => {
      const abortController = new AbortController();
      fetchVideos(abortController.signal)
        .then((res) => {
          setVideos(res);
          setPlayingVideo(res["response"][0]);
          return videos;
        })
        .catch((err) => console.error("error:" + err));
      return () => {
        abortController.abort();
      };
    };
    loadVideos();
  }, []);

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
            <PlayingVideo playingVideo={playingVideo} />
          </div>
        </div>
        <div className="row ">
          <div className="col">
            <AllVideosCarousel videos={videos} />
          </div>
        </div>
        <div className="row ">
          <div className="col">
            <MyFavoritesCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideosMain;
