// ANIMATION LIGHT-RAYS START
const rays_bottom = document.querySelectorAll(".light-rays__bottom");
const rays_top = document.querySelectorAll(".light-rays__top");
const rays_center = document.querySelectorAll(".light-rays__center");
const screen_reveal = document.querySelectorAll(".screen--reveal");
const screen = document.querySelector(".screen");
// const screen_menu = document.querySelector(".screen__tab-menu");
const tab_menu = document.querySelector(".tab-menu");
const tab_effects = document.querySelector(".tab-effects");

rays_bottom.forEach((e) => {
  e.classList.add("light-rays-start");
});

rays_bottom.forEach((e) => {
  e.addEventListener("animationend", () => {
    rays_top.forEach((e) => {
      e.classList.add("light-rays-start");
    });
  });
});

rays_top.forEach((e) => {
  e.addEventListener("animationend", () => {
    rays_center.forEach((e) => {
      e.classList.add("light-rays-start");
    });
    // ANIMATION SCREEN START
    screen_reveal.forEach((e) => {
      e.classList.add("screen-start");
    });

    screen.classList.add("screen-start");
    // ANIMATION SCREEN END
  });
});
// ANIMATION LIGHT-RAYS END
screen.addEventListener("animationend", () => {
  tab_menu.classList.add("show_glitch");
});
