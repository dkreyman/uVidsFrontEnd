import React from "react";

/**
 * Defines the main layout of the application.
 *
 * You will not need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function MyFavoritesCarousel() {
  return (
    <div class="container carousel-wrap">
      <div className="mt-3 mb-3 ">
        <p className="mb-0 border-bottom">Favorite Videos</p>
      </div>
      <div class="owl-carousel owl-theme lazy-owl">
        <div class="item">
          <img src="https://image.zype.com/56a7b4a369702d1927000000/56a7b83069702d2f8315d9b7/custom_thumbnail/240.jpg?1507648247" />
        </div>
        <div class="item ">
          <img src="https://picsum.photos/640/480?pic=2" />
        </div>
        <div class="item ">
          <img src="https://picsum.photos/640/480?pic=3" />
        </div>
        <div class="item ">
          <img src="https://picsum.photos/640/480?pic=4" />
        </div>
        <div class="item ">
          <img src="https://picsum.photos/640/480?pic=5" />
        </div>
        <div class="item ">
          <img src="https://picsum.photos/640/480?pic=6" />
        </div>
        <div class="item">
          <img src="https://picsum.photos/640/480?pic=7" />
        </div>
        <div class="item">
          <img src="https://picsum.photos/640/480?pic=8" />
        </div>
        <div class="item">
          <img src="https://picsum.photos/640/480?pic=9" />
        </div>
        <div class="item ">
          <img src="https://picsum.photos/640/480?pic=10" />
        </div>
        <div class="item">
          <img src="https://picsum.photos/640/480?pic=11" />
        </div>
        <div class="item">
          <img src="https://picsum.photos/640/480?pic=12" />
        </div>
        <div class="item ">
          <img src="https://picsum.photos/640/480?pic=13" />
        </div>
      </div>
    </div>
  );
}

export default MyFavoritesCarousel;
