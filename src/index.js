$(function () {
  // Sidebar toggle function
  $('.navbar-toggler').click(() => {
    const mobileMenuEl = $('#mobile-menu');

    if (mobileMenuEl.hasClass('menu-open')) {
      mobileMenuEl.removeClass('menu-open').addClass('menu-close');
    } else {
      mobileMenuEl.addClass('menu-open').removeClass('menu-close');
    }
  });

  // Close sidebar if anywhere other than sidebar is clicked
  $('body').click(function (e) {
    const clickedEl = $(e.target);
    if (!clickedEl.hasClass('fa-bars')) {
      const mobileMenuEl = $('#mobile-menu');
      mobileMenuEl.removeClass('menu-open').addClass('menu-close');
    }
  });

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    slidesPerView: 1,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-after',
      prevEl: '.swiper-before',
    },

    breakpoints: {
      680: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      1280: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
});
