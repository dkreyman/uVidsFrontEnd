import React from "react";

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
  return (
    props.playingVideo !== undefined && (
      <div className="container">
        <div className="row">
          {/* <div className="mt-5 col-sm-1"></div> */}
          <div className="mt-5 col-sm-12 col-md-8">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                class="embed-responsive-item"
                src={`${API_BASE_URL}/embed/${props.playingVideo._id}.format?api_key=${API_PLAYER_KEY}`}
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="mt-5 d-flex flex-column col-lg-4">
            <div className="p-2 gray">
              <div>
                <i class="far fa-heart float-right mt-4"></i>

                <h4 className="mb-0 text-white">{props.playingVideo.title}</h4>

                <small className="ml-1">5 Views - 04:200</small>
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
