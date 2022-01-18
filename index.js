// Input range styling
document.getElementById("dept-calc").oninput = function () {
  var value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #FFD500 0%, #FFD500 " +
    value +
    "%, #EFECF3 " +
    value +
    "%, #EFECF3 100%)";
};
document.getElementById("time-calc").oninput = function () {
  var value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #FFD500 0%, #FFD500 " +
    value +
    "%, #EFECF3 " +
    value +
    "%, #EFECF3 100%)";
};
document.getElementById("dept-calc-dep").oninput = function () {
  var value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #FFD500 0%, #FFD500 " +
    value +
    "%, #EFECF3 " +
    value +
    "%, #EFECF3 100%)";
};
document.getElementById("time-calc-dep").oninput = function () {
  var value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #FFD500 0%, #FFD500 " +
    value +
    "%, #EFECF3 " +
    value +
    "%, #EFECF3 100%)";
};

// Navigation submenu
const navList = document.querySelector(".nav-list");
const closeMenu = document.querySelector(".close-tag");
const subLists = document.querySelectorAll(".sub-menu");
const navs = document.querySelectorAll(".nav-list li[data-action]");
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
const menu = document.querySelector(".menu-mob");

navs.forEach((nav) => {
  nav.onclick = (e) => {
    // If clicked on the same li, closing
    if (nav.classList.contains("active-li")) {
      nav.classList.remove("active-li");
      return nav.nextElementSibling.classList.remove("active-nav");
    }

    // Before assign class, we clear all li from active classes
    navs.forEach(nav => nav.classList.remove("active-li"))
    subLists.forEach(list => list.classList.remove("active-nav"));
    // Assigment
    nav.classList.add("active-li")
    nav.nextElementSibling.classList.add("active-nav");
  };
});


menu.addEventListener("click", mobileMenu);
closeMenu.onclick = () => navList.classList.add("disabled");

function mobileMenu() {
  navList.classList.toggle("disabled");
}

// Tabulation

function removeClass(selectors, className) {
  selectors.forEach((selector) => {
    if (selector.classList.contains(className)) {
      selector.classList.remove(className);
    }
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const selected = e.target;
    const content = document.querySelector(selected.dataset.tabTarget);
  
    removeClass(tabContents, "on");
    removeClass(tabs, "on");
    selected.classList.add("on");
    content.classList.add("on");
  });
});

// Slick slider

$(document).ready(function () {
  $(".slider").slick({
    centerMode: true,
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 620,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ],
  });
});
