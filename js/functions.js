// Top bar function to close button 
function closeBtn() {
  let topBar = document.getElementById("topBar");
  topBar.remove();
}
// Navigation menu toggler function
function togglemenu() {
  let x = document.getElementById("navBar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//Slick Slider
$(document).ready(function(){
  // $('.heroSlider').slick({
  //   dots: true,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   autoplaySpeed: 5000,
  //   responsive: [
  //     {
  //       breakpoint: 980,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: false
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         arrows: false
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });

//   // Image Slider
//   $('.img_slider').slick({
//     dots: true,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   });
});


