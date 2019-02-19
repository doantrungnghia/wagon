var navBar = document.querySelector("nav.menu");
var menuBtn = document.querySelector(".menu_toggler");
var collapse = document.querySelector(".menu_items");
var craftersBtn1 = document.querySelector(".crafters_btn-1");
var craftersBtn2 = document.querySelector(".crafters_btn-2");
var craftersSlide2 = document.querySelector(".crafters_carousel-2");
var craftersSlide1 = document.querySelector(".crafters_carousel-1");
var craftersSlide3 = document.querySelectorAll(".crafters_carousel-3");
var slideBtn = document.querySelector(".right_icon");
var slideSlide = document.querySelectorAll(".slide_item");
var firstSlide = 2; //Default slide is 1, so when click next, the slide show first is 2
var statusSlide = 1;
var statusSlide_2 = 1;
menuBtn.addEventListener("click", function() {
  collapse.classList.toggle("show");
});
//? SLIDE SHOW CRAFTERS //
craftersBtn1.addEventListener("click", function() {
  if (firstSlide > 3) {
    var previousSlide = firstSlide - 1;
    craftersSlide1.classList.remove("crafters_slide-" + previousSlide);
    firstSlide = 1;
  }
  var previousSlide = firstSlide - 1;
  craftersSlide1.classList.remove("crafters_slide-" + previousSlide);
  craftersSlide1.classList.add("crafters_slide-" + firstSlide);
  firstSlide++;
});
var firstSlide_2 = 5; //Default slide is 4, so when click next, the slide show first is 5
craftersBtn2.addEventListener("click", function() {
  if (firstSlide_2 > 6) {
    //*Slide of carousel 2 is 4 5 6 //
    var previousSlide = firstSlide_2 - 1;
    craftersSlide2.classList.remove("crafters_slide-" + previousSlide);
    firstSlide_2 = 4;
  }
  var previousSlide = firstSlide_2 - 1;
  craftersSlide2.classList.remove("crafters_slide-" + previousSlide);
  craftersSlide2.classList.add("crafters_slide-" + firstSlide_2);
  if (firstSlide_2 > 4) {
    craftersSlide3[firstSlide_2 - 5].classList.add("not-show");
  } else {
    //*2 is max of lenght of array CrafterSlide3
    craftersSlide3[2].classList.add("not-show");
  }
  craftersSlide3[firstSlide_2 - 4].classList.remove("not-show");
  firstSlide_2++;
});
//? SLIDE SHOW OF SLIDE//
var firstSlide_3 = 1;
slideBtn.addEventListener("click", function() {
  if (firstSlide_3 > slideSlide.length - 1) {
    firstSlide_3 = 0;
    slideSlide[slideSlide.length - 1].classList.add("not-show");
    slideSlide[firstSlide_3].classList.remove("not-show");
  } else {
    slideSlide[firstSlide_3 - 1].classList.add("not-show");
    slideSlide[firstSlide_3].classList.remove("not-show");
  }
  firstSlide_3++;
});
//* JS FOR CHANGE COLOR *//
var colorChange_1 = document.querySelector(".services");
var colorChange_2 = document.querySelector(".portfolio");
var colorChange_3 = document.querySelector(".crafters");
var colorChange_4 = document.querySelector(".stories");
var colorChange_5 = document.querySelector(".offer");
var colorChange_5_1 = document.querySelector(".slide_2");
var colorChange_6 = document.querySelector(".exp");
var colorChange_7 = document.querySelector(".contact");
var colorChange_8 = document.querySelector("footer");
var square_1 = document.querySelector(".services_square");
var square_2 = document.querySelector(".portfolio_square");
var square_3 = document.querySelector(".crafters_square");
var square_4 = document.querySelector(".stories_square");
var square_5 = document.querySelector(".offer_square");
var square_6 = document.querySelector(".exp_square");
var square_7 = document.querySelector(".contact_square");
var square_content_1 = document.querySelector(".services_content");
var square_content_2 = document.querySelector(".portfolio_content");
var square_content_3 = document.querySelector(".crafters_content");
var square_content_4 = document.querySelector(".stories_content");
var square_content_4_1 = document.querySelector(".slide");
var square_content_5 = document.querySelector(".offer_content");
var square_content_6 = document.querySelector(".exp_content");
var square_content_7 = document.querySelector(".contact_content");
var map_content = document.querySelector("iframe");
var slideSection = document.querySelector("section.slide");
var menuItem = document.querySelectorAll(".menu_link");
menuItem[0].classList.add("--color_white");
function changeColor(navbarColor, rmColorWhite, addColorWhite, addFixedTop) {
  navBar.style.backgroundColor = navbarColor;
  rmColorWhite.classList.remove("--color_white");
  addColorWhite.classList.add("--color_white");
  addFixedTop.classList.add("--fixed_top");
}
function changeColor2(rmColorWhite, rmFixedTop) {
  rmColorWhite.classList.remove("--color_white");
  rmFixedTop.classList.remove("--fixed_top");
}
window.addEventListener("scroll", function() {
  if (window.innerWidth >= 992) {
    // console.log(this.scrollY);
    //64 is height of navbar
    //434 is height of square + height of navbar
    //* SERVICES //////////////////////////////
    if (window.pageYOffset < colorChange_1.offsetTop - 64)
      menuItem[0].classList.add("--color_white");
    if (
      window.pageYOffset >= colorChange_1.offsetTop - 64 &&
      window.pageYOffset < colorChange_2.offsetTop - 64
    ) {
      changeColor("#32DB8A", menuItem[0], menuItem[1], square_1);
      if (window.pageYOffset >= colorChange_2.offsetTop - 434) {
        square_1.setAttribute(
          "style",
          "top:" + (square_content_1.clientHeight + 1) + "px"
        );
        square_1.classList.remove("--fixed_top"); // REMOVE SQUARE STICKY MODE
      } else square_1.removeAttribute("style");
    } else {
      changeColor2(menuItem[1], square_1);
    }
    //* PORTFOLIO //////////////////////////////
    if (
      window.pageYOffset >= colorChange_2.offsetTop - 64 &&
      window.pageYOffset < colorChange_3.offsetTop - 64
    ) {
      changeColor("rgb(255, 186, 66)", menuItem[1], menuItem[2], square_2);
      //* MARGIN LEFT = WIDTH OF LEFT-CONTENT
      square_2.setAttribute(
        "style",
        "margin-left:" + square_content_2.clientWidth + "px"
      );
      if (window.pageYOffset >= colorChange_3.offsetTop - 434) {
        square_2.setAttribute(
          "style",
          "top:" + (square_content_2.clientHeight + 1) + "px"
        );
        square_2.classList.remove("--fixed_top"); // REMOVE SQUARE STICKY MODE
      }
    } else {
      changeColor2(menuItem[2], square_2);
    }
    //* CRAFTERS //////////////////////////////
    if (
      window.pageYOffset >= colorChange_3.offsetTop - 64 &&
      window.pageYOffset < colorChange_4.offsetTop - 64
    ) {
      changeColor("#E74C78", menuItem[2], menuItem[3], square_3);
      if (window.pageYOffset >= colorChange_4.offsetTop - 434) {
        square_3.setAttribute(
          "style",
          "top:" + (square_content_3.clientHeight + 1) + "px"
        );
        square_3.classList.remove("--fixed_top"); // REMOVE SQUARE STICKY MODE
      }
    } else {
      changeColor2(menuItem[3], square_3);
      square_3.removeAttribute("style");
    }
    //* STORIES //////////////////////////////
    if (
      window.pageYOffset >= colorChange_4.offsetTop - 64 &&
      window.pageYOffset < colorChange_5.offsetTop - 64
    ) {
      changeColor("#32DB8A", menuItem[3], menuItem[4], square_4);
      //* MARGIN LEFT = WIDTH OF LEFT-CONTENT
      square_4.setAttribute(
        "style",
        "margin-left:" + square_content_4.clientWidth + "px"
      );
      if (window.pageYOffset >= colorChange_5.offsetTop - 434) {
        square_4.setAttribute(
          "style",
          "top:" +
            (square_content_4.clientHeight +
              square_content_4_1.clientHeight +
              2) +
            "px"
        );
        square_4.classList.remove("--fixed_top"); // REMOVE SQUARE STICKY MODE
      }
    } else {
      changeColor2(menuItem[4], square_4);
    }
    //* OFFER //////////////////////////////
    if (
      window.pageYOffset >= colorChange_5.offsetTop - 64 &&
      window.pageYOffset < colorChange_6.offsetTop - 64
    ) {
      changeColor("rgb(255, 186, 66)", menuItem[4], menuItem[5], square_5);
      if (window.pageYOffset >= colorChange_5_1.offsetTop - 434) {
        square_5.setAttribute(
          "style",
          "top:" + (square_content_5.clientHeight + 1) + "px"
        );
        square_5.classList.remove("--fixed_top"); // REMOVE SQUARE STICKY MODE
      }
    } else {
      changeColor2(menuItem[5], square_5);
      square_5.removeAttribute("style");
    }
    //* EXPERIENCE //////////////////////////////
    if (
      window.pageYOffset >= colorChange_6.offsetTop - 64 &&
      window.pageYOffset < colorChange_7.offsetTop - 64
    ) {
      changeColor("#32DB8A", menuItem[5], menuItem[6], square_6);
      //* MARGIN LEFT = WIDTH OF LEFT-CONTENT
      square_6.setAttribute(
        "style",
        "margin-left:" + square_content_6.clientWidth + "px"
      );
      if (window.pageYOffset >= colorChange_7.offsetTop - 434) {
        square_6.setAttribute(
          "style",
          "top:" + (square_content_6.clientHeight + 1) + "px"
        );
        square_6.classList.remove("--fixed_top"); // REMOVE SQUARE STICKY MODE
      }
    } else {
      changeColor2(menuItem[6], square_6);
      square_6.removeAttribute("style");
    }
    //* CONTACT //////////////////////////////
    if (
      window.pageYOffset >= colorChange_7.offsetTop - 64 &&
      window.pageYOffset < colorChange_8.offsetTop - 64
    ) {
      changeColor("#E74C78", menuItem[6], menuItem[7], square_7);
      if (window.pageYOffset >= colorChange_8.offsetTop - 434) {
        square_7.setAttribute(
          "style",
          "top:" +
            (square_content_7.clientHeight + map_content.clientHeight) +
            "px"
        );
        square_7.classList.remove("--fixed_top"); // REMOVE SQUARE STICKY MODE
      }
    } else {
      changeColor2(menuItem[7], square_7);
      square_7.removeAttribute("style");
    }
  }
});
//* JS SLIDER 2 ///////////////////////////
//TODO NOT COMPLETED - TO DO LATER
// var slider_2 = document.querySelector(".slide_2 .container-fluid.no-gutters");
// var slideLenght = document.querySelectorAll(".s2_item");
// if (innerWidth <= 992) {
//   addBtnSlider(3);
// }
// if (innerWidth > 992) {
//   addBtnSlider(4);
// }
// var slider_btn = document.querySelectorAll(".slide_2 .s2_btn .btn");
// console.log(slider_btn);
// function addBtnSlider(slideItemLength) {
//   var k = 1;
//   var btnLength2 = Math.ceil(slideLenght.length / slideItemLength);
//   for (var x = 0; x < btnLength2; x++) {
//     var btnSlider = document.createElement("DIV");
//     btnSlider.classList.add("btn");
//     btnSlider.setAttribute("onclick", "slideShow(" + k + ")");
//     k++;
//     document.querySelector(".s2_btn").appendChild(btnSlider);
//   }
// }
