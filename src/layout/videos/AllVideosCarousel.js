import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

/**
 *
 * Defines the main layout of the application.
 *
 * You will not need to make changes to this file.
 *
 * @returns {JSX.Element}
 */

function AllVideosCarousel(props) {
  const settings = {
    arrow: true,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  const imgs = props.videos.response.map((res) => {
    return res.thumbnails[0]["url"];
  });
  const makePlaying = (img) => {
    props.updatePlayingVid(img);
  };
  return (
    <div class="container carousel-wrap">
      <div className="mt-3 mb-3 ">
        <p className="mb-0 border-bottom">All Videos</p>
      </div>
      <Slider {...settings}>
        {imgs.map((res, i) => {
          return (
            <div className="p-1">
              <img
                onClick={() => makePlaying(props.videos.response[i])}
                width="260px"
                height="150px"
                length="100px"
                src={res}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default AllVideosCarousel;
