/***Fade in Splash Screen on Load***/

function showDivInner() {
  $(".splash-inner").fadeIn(500);
}

$(document).ready(function(){
    $(".splash-container")
    .css("display", "flex")
    .hide()
    .fadeIn();
    setTimeout(showDivInner, 2000);
});

/***Close Splash Screen***/

$('.splash-btn').click(function () {
    $('.splash-container').fadeOut(700);
})