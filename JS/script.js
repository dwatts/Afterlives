/***Start: Global code to send images on click to modal and launch***/

$('.app-image').click(function (e) {
  let location = $(e.target).attr('src')
  let caption = $(e.target).attr('data-caption')
  $('#neatModalImg').attr('src', location);
  $('#img-modal').fadeIn(500);
  $('#img-caption').html(caption);
});

//Close all modals

// $('#about-close, #img-close').click(function () {
//     $('#img-modal').fadeOut(500);
//     $('#about-modal').fadeOut(500);
// })

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

// $('.splash-btn').click(function () {
//     $('.splash-container').fadeOut(700);
// })

$('.splash-close').click(function () {
    $('.splash-container').fadeOut(700);
})

/***Before / After Image Slider 1***/

const container = document.getElementById('container');
const before = document.getElementById('before');
const slider = document.getElementById('slider');

let dragging = false;

function updateSlider(x) {
  const rect = container.getBoundingClientRect();
  let offset = x - rect.left;

  offset = Math.max(0, Math.min(offset, rect.width));
  const percent = (offset / rect.width) * 100;

  before.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
  slider.style.left = percent + "%";
}

slider.addEventListener("mousedown", () => dragging = true);
window.addEventListener("mouseup", () => dragging = false);
window.addEventListener("mousemove", e => {
  if (!dragging) return;
  updateSlider(e.clientX);
});

// Touch support
slider.addEventListener("touchstart", () => dragging = true);
window.addEventListener("touchend", () => dragging = false);
window.addEventListener("touchmove", e => {
  if (!dragging) return;
  updateSlider(e.touches[0].clientX);
});

/***Before / After Image Slider 2***/

const container_two = document.getElementById('container_two');
const before_two = document.getElementById('before_two');
const slider_two = document.getElementById('slider_two');

let dragging_two = false;

function updateSliderTwo(x) {
  const rect_two = container_two.getBoundingClientRect();
  let offset_two = x - rect_two.left;

  offset_two = Math.max(0, Math.min(offset_two, rect_two.width));
  const percent_two = (offset_two / rect_two.width) * 100;

  before_two.style.clipPath = `inset(0 ${100 - percent_two}% 0 0)`;
  slider_two.style.left = percent_two + "%";
}

slider_two.addEventListener("mousedown", () => dragging_two = true);
window.addEventListener("mouseup", () => dragging_two = false);
window.addEventListener("mousemove", e => {
  if (!dragging_two) return;
  updateSliderTwo(e.clientX);
});

// Touch support
slider_two.addEventListener("touchstart", () => dragging_two = true);
window.addEventListener("touchend", () => dragging_two = false);
window.addEventListener("touchmove", e => {
  if (!dragging_two) return;
  updateSliderTwo(e.touches[0].clientX);
});



