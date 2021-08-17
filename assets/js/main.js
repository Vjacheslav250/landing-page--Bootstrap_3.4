(function ($) {
  let $navbar = $('#header-navbar');
  let $btnBack2Top = $('#back2top');

  const back2TopOffset = 700;
  const back2TopAnimationDuration = 500;
  const back2TopAnimationFunction = 'swing';
  const back2Top = (pos) =>
    pos >= back2TopOffset
      ? $btnBack2Top.fadeIn(500)
      : $btnBack2Top.fadeOut(500);

  $btnBack2Top.on('click', () => {
    $('html').animate(
      {
        scrollTop: 0
      },
      back2TopAnimationDuration,
      back2TopAnimationFunction
    );
    return false;
  });

  const headerClassOnScroll = 'header-navbar--scrolled';
  const headerScrollTrigger = 100;

  $(window).on('scroll', () => {
    $(window).scrollTop() > headerScrollTrigger
      ? $navbar.addClass(headerClassOnScroll)
      : $navbar.removeClass(headerClassOnScroll);
    back2Top($(window).scrollTop());
  });

  $navbar.onePageNav({
    currentClass: 'active',
    scrollSpeed: 750,
    easing: 'swing',
    filter: ':not(.navbar-brand)'
  });

  let windowWidth = $(window).width();

  $(window).on('resize', () => (windowWidth = $(window).width()));

  let $navbarLink = $('#header-navbar-collapse a');
  let $navbarToggler = $('.navbar-toggler');
  let $headerNavbarCollapse = $('#header-navbar-collapse');

  $navbarLink.on('click', () => {
    if (windowWidth < 992) {
      $navbarToggler.addClass('collapsed');
      $headerNavbarCollapse.removeClass('show');
    }
  });

  AOS.init({
    disable: 'mobile',
    duration: 600,
    easing: 'ease-in-sine'
  });

})(jQuery);
