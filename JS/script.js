/***Start: Global code to send images on click to modal and launch***/

$('.app-image').click(function (e) {
  let location = $(e.target).attr('src')
  let caption = $(e.target).attr('data-caption')
  $('#neatModalImg').attr('src', location);
  $('#img-modal').fadeIn(500);
  $('#img-caption').html(caption);
});

//Close all modals

$('#about-close, #img-close').click(function (e) {
    e.preventDefault();
    $('#img-modal').fadeOut(500);
    $('#about-modal').fadeOut(500);
});

/***Fade in Splash Screen on Load***/

function showDivInner() {
  $(".splash-inner").fadeIn(500);
}

$(document).ready(function () {
  const splashSeen = sessionStorage.getItem("splashSeen");

  if (!splashSeen) {
    // Show splash container
    $(".splash-container")
      .css("display", "flex")
      .hide()
      .fadeIn();

    // Delay inner content
    setTimeout(showDivInner, 2000);

    // When user proceeds
    $(".splash-close").on("click", function () {
      sessionStorage.setItem("splashSeen", "true");
      $(".splash-container").fadeOut();
    });
  } else {
    // Skip splash entirely
    $(".splash-container").hide();
  }
});


/***Close Splash Screen***/

$('.splash-close').click(function () {
    $('.splash-container').fadeOut(700);
})





