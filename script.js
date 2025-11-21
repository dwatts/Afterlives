/***Fade in Splash Screen on Load***/

$(document).ready(function(){
    $(".splash-container")
    .css("display", "flex")
    .hide()
    .fadeIn();
});

/***Close Splash Screen***/

$('.splash-btn').click(function () {
    $('.splash-container').fadeOut(700);
})