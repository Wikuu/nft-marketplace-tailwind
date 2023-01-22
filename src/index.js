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
});
