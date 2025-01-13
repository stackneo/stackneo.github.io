//Smooth scroll effect, using JQuery.
$("#navbar .nav-links .nav-link").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top }, 1000);
});