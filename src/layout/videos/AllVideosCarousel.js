import React from "react";

/**
 * Defines the main layout of the application.
 *
 * You will not need to make changes to this file.
 *
 * @returns {JSX.Element}
 */

function AllVideosCarousel(props) {
  return (
    props.videos !== undefined && (
      <div class="container carousel-wrap">
        <div className="mt-5 mb-3">
          <p className="mb-0 border-bottom">All Videos</p>
        </div>
        <div class="owl-carousel owl-theme lazy-owl">
          {props.videos.response.forEach((vid) => {
            return (
              <div class="item">
                <img src="https://image.zype.com/56a7b4a369702d1927000000/56a7b83069702d2f8315d9b7/custom_thumbnail/240.jpg?1507648247" />
              </div>
            );
          })}
        </div>
      </div>
    )
  );
}

export default AllVideosCarousel;
