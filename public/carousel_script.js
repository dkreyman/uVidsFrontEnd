// import { fetchVideos } from "../src/layout/utils/api";
// export default function makeCarousel(props) {
//   let carousel = $(".owl-carousel").owlCarousel({
//     margin: 10,
//     padding: 10,
//     stagePadding: 10,
//     nav: true,
//     responsive: {
//       0: {
//         items: 1,
//       },
//       600: {
//         items: 3,
//       },
//       1000: {
//         items: 4,
//       },
//     },
//   });

//   carousel.trigger("destroy.owl.carousel");
//   carousel.find(".owl-stage-outer").children().unwrap();
//   carousel.removeClass("owl-center owl-loaded owl-text-select-on");

//   // add the new items
//   let content = "";
//   let genres = ["dog", "cat", "mouse", "bull"];
//   for (let i = 0; i < genres.length; i++) {
//     content +=
//       '<div class="item">' +
//       '<img src="https://image.zype.com/56a7b4a369702d1927000000/56a7b83069702d2f8315d9b7/custom_thumbnail/240.jpg?1507648247" />' +
//       "</div>";
//   }
//   carousel.html(content);

//   //reinitialize the carousel (call here your method in which you've set specific carousel properties)
//   carousel.owlCarousel({
//     margin: 10,
//     padding: 10,
//     stagePadding: 10,
//     nav: true,
//     responsive: {
//       0: {
//         items: 1,
//       },
//       600: {
//         items: 3,
//       },
//       1000: {
//         items: 4,
//       },
//     },
//   });
// }
