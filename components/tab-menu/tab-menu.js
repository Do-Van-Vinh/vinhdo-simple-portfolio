const menu_button = document.querySelectorAll(".menu__button");
// const tab_menu = document.querySelector(".tab-menu");
// const tab_section = document.querySelector(".tab-section");
const section_layouts = document.querySelectorAll(".section__layouts");

let button_active = "home";

menu_button.forEach((e) => {
  e.addEventListener("click", () => {
    // Lấy tên nút hiện tại
    const name_btn = e.dataset.menu;

    if (name_btn === "home") {
      setTimeout(() => {
        tab_effects.classList.remove("effects-hide");
        load_section(name_btn);
      }, 2000);
    } else {
      tab_effects.classList.add("effects-hide");
    }

    // Nút home đang sáng
    if (button_active === "home") {
      // Nút vừa click
      if (name_btn !== "home") {
        menu_button.forEach((e) => {
          e.classList.remove("menu-reverse");
          tab_menu.offsetWidth;
          e.classList.add("menu-start");
        });
        setTimeout(() => {
          tab_menu.classList.remove("menu-reverse");
          tab_menu.offsetWidth;
          tab_menu.classList.add("menu-start");
        }, 1000);
        setTimeout(() => {
          // tab_section.classList.add("section-show", "show_glitch");
          load_section(name_btn);
        }, 2000);
        load_active(name_btn);
      }
    }
    // Nút # đang sáng
    else {
      // Click nút home
      if (name_btn === "home") {
        menu_button.forEach((e) => {
          setTimeout(() => {
            e.classList.remove("menu-start");
            tab_menu.offsetWidth;
            e.classList.add("menu-reverse");
          }, 1000);
        });
        tab_menu.classList.remove("menu-start");
        tab_menu.offsetWidth;
        tab_menu.classList.add("menu-reverse");
        load_active(name_btn);
        load_section(name_btn);
      }
      //   Click nút #
      else if (name_btn !== button_active) {
        load_active(name_btn);
        load_section(name_btn);
      }
    }
  });
});

function load_active(name_btn) {
  menu_button.forEach((e) => {
    e.classList.remove("button-active");
  });
  document
    .querySelector(`[data-menu = "${name_btn}"]`)
    .classList.add("button-active");
  button_active = name_btn;
}
function load_section(name_btn) {
  section_layouts.forEach((e) => e.classList.remove("show_glitch"));
  if (name_btn !== "home") {
    document
      .querySelector(`[data-section="${name_btn}"]`)
      .classList.add("show_glitch");
  }
}
