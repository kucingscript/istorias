// nav
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 660) {
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

// typed
const options = {
  strings: ["Menyenangkan", "Mengasyikkan"],
  startDelay: 1000,
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
};

const typed = new Typed(".typed", options);
