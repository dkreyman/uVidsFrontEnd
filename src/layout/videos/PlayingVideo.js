import React, { useState } from "react";

/**
 * Defines the main layout of the application.
 *
 * You will not need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function PlayingVideo(props) {
  const API_BASE_URL = process.env.REACT_APP_BASE_URL;
  const API_PLAYER_KEY = process.env.REACT_APP_PLAYER_KEY;
  const [hearted, setHearted] = useState({});

  const changeFavorites = (vid) => {
    //updates state that carousel uses
    props.updateFavoriteVids(vid);
    //changes state that heart icon uses
    setHearted({
      ...hearted,
      [vid._id]: !hearted[vid._id],
    });
  };

  //video duration
  let date = new Date(0);
  date.setSeconds(props.playingVideo.duration);
  let timeString = date.toISOString().substr(14, 8);
  return (
    props.playingVideo !== undefined && (
      <div className="container">
        <div className="row">
          <div className="mt-5 col-sm-12 col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                title={props.playingVideo.title}
                className="embed-responsive-item"
                src={`${API_BASE_URL}/embed/${props.playingVideo._id}.format?api_key=${API_PLAYER_KEY}`}
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="mt-5 d-flex flex-column col-lg-4">
            <div className="p-2 gray">
              <div>
                <i
                  onClick={() => changeFavorites(props.playingVideo)}
                  className={
                    hearted[props.playingVideo._id]
                      ? "fas fa-heart float-right mt-4"
                      : "far fa-heart float-right mt-4"
                  }
                ></i>

                <h4 className="mb-0 text-white">{props.playingVideo.title}</h4>

                <small className="ml-1">1,651,008 Views - {timeString}</small>
              </div>
            </div>
            <div className="p-2 mt-3 gray">
              <p className="text-center">
                {props.playingVideo.short_description}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default PlayingVideo;
