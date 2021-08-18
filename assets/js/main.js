(function ($) {
  let $navbar = $('#header-navbar');
  let $btnStart1Page = $('#start1page');

  const start1PageOffset = 700;
  const start1PageAnimationDuration = 500;
  const start1PageAnimationFunction = 'swing';
  const start1Page = (pos) =>
    pos >= start1PageOffset
      ? $btnStart1Page.fadeIn(500)
      : $btnStart1Page.fadeOut(500);

  $btnStart1Page.on('click', () => {
    $('html').animate(
      {
        scrollTop: 0
      },
      start1PageAnimationDuration,
      start1PageAnimationFunction
    );
    return false;
  });

  const headerClassOnScroll = 'header-navbar--scrolled';
  const headerScrollTrigger = 100;

  $(window).on('scroll', () => {
    $(window).scrollTop() > headerScrollTrigger
      ? $navbar.addClass(headerClassOnScroll)
      : $navbar.removeClass(headerClassOnScroll);
    start1Page($(window).scrollTop());
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
