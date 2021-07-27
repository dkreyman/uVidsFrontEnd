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
  const arr = [
    "https://picsum.photos/640/480?pic=2",
    "https://picsum.photos/640/480?pic=3",
    "https://picsum.photos/640/480?pic=4",
    "https://picsum.photos/640/480?pic=5",
    "https://picsum.photos/640/480?pic=2",
    "https://picsum.photos/640/480?pic=3",
    "https://picsum.photos/640/480?pic=4",
    "https://picsum.photos/640/480?pic=5",
  ];
  const imgs = props.videos.response.map((res) => {
    return res.thumbnails[0]["url"];
  });
  const makePlaying = (e) => {
    console.log(props);
  };
  return (
    <div class="container carousel-wrap">
      <div className="mt-3 mb-3 ">
        <p className="mb-0 border-bottom">All Videos</p>
      </div>
      <Slider {...settings}>
        {imgs.map((res) => {
          return (
            <div className="p-1">
              <img
                onClick={() => makePlaying(res)}
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
