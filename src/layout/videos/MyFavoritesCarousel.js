import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

/**
 * Defines the main layout of the application.
 *
 * You will not need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function MyFavoritesCarousel(props) {
  if (!props.favoriteVideos.length || props.favoriteVideos === undefined) {
    return (
      <div class="container carousel-wrap">
        <div className="mt-3 mb-3 ">
          <p className="mb-0 border-bottom">Favorite Videos</p>
          <div className="container mt-3">
            <p>None Right Now</p>
          </div>
        </div>
      </div>
    );
  }

  const favoritesImg = props.favoriteVideos.map((res) => {
    return res.thumbnails[0]["url"];
  });

  const makePlaying = (img) => {
    props.updatePlayingVid(img);
  };

  const settings = {
    arrow: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: favoritesImg.length > 3,
  };
  return (
    <div class="container carousel-wrap">
      <div className="mt-3 mb-3 ">
        <p className="mb-0 border-bottom">Favorite Videos</p>
      </div>
      <Slider {...settings}>
        {console.log("happens")}
        {favoritesImg.map((res, i) => {
          return (
            <div className="p-1 mb-2 float-left">
              <img
                onClick={() => makePlaying(props.favoriteVideos[i])}
                alt="thumbnail"
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

export default MyFavoritesCarousel;
