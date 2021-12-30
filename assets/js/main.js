// nav
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 630) {
    $("#header").addClass("on");
  } else {
    $("#header").removeClass("on");
  }
});

// preloader
$(window).on("load", function () {
  if ($(".preloader").length) {
    $(".preloader")
      .delay(100)
      .fadeOut("slow", function () {
        $(this).remove();
      });
  }
});
