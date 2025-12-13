var swiper = new Swiper(".mySwiper", {
      spaceBetween: 10,
      slidesPerView: 6,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
      spaceBetween: 10,
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
      thumbs: {
        swiper: swiper,
      },
    });

    const menuBtn = document.querySelector(".menu-button");
    const menu = document.querySelector(".navbar-panel");
    const menuCloseBtn = document.querySelector(".close-menu");
    menuBtn.addEventListener("click", () => {
      // console.log("click");
      menu.classList.toggle("is-open");
    })
    menuCloseBtn.addEventListener("click", () => {
      // console.log("click");
      menu.classList.toggle("is-open");
    })