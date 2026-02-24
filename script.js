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
    $(".splash-btn").on("click", function () {
      sessionStorage.setItem("splashSeen", "true");
      $(".splash-container").fadeOut();
    });
  } else {
    // Skip splash entirely
    $(".splash-container").hide();
  }
});


/***Close Splash Screen***/

$('.splash-btn').click(function () {
    $('.splash-container').fadeOut(700);
})

/***Before / After Image Slider***/

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

/* Scroll Trigger Actions */

gsap.registerPlugin(ScrollTrigger);

gsap.to(".image-column img:first-of-type", {
  yPercent: 70,
  ease: "none",
  scrollTrigger: {
    trigger: ".section-one",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});