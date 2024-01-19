
// ! SideMenu
$(".openMenu").on('click' , function(){
    $("#menu").animate({width:'250px'},50)
    $('.homeInfo').animate({"margin-left":'250px'},50)
})

// ! closeBtn
$(".closeBtn").on('click' , function(){
    $("#menu").animate({width:'0px'},50)
    $('.homeInfo').animate({"margin-left":'0px'},50)
})

//! scroll
$('#menu a.link-item').on('click' , function(){
    let aHref = $(this).attr('href');
    let postionOfSection = $(aHref).offset().top;
    $('body ,html').animate({ scrollTop: postionOfSection},2000);
})


//! sliderDown
$('#sliderDown .toggle').on('click' , function(){
    $('.slider').not($(this).next()).slideUp(500);
    $(this).next().removeClass('d-none').slideToggle(500);

})


//! Data counter
let targetDate = new Date("January 31, 2024 00:00:00").getTime();

let countdownInterval = setInterval(function () {
    let currentDate = new Date().getTime();
    let timeRemaining = targetDate - currentDate;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    $(".days").text(days + " D");
    $(".hours").text(hours + " H");
    $(".minutes").text(minutes + " M");
    $(".seconds").text(seconds + " S");

    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        console.log("Countdown finished!");
    }
}, 1000);



//! joinUs
$(document).ready(function () {

    $('textarea').on('input', function () {
        let currentChars = $(this).val().length;
        let remainingChars = 100 - currentChars;
        $('#chars').text(remainingChars + ' Character Remaining');

        if (currentChars >= 100) {
            $(this).val($(this).val().substring(0, 100));
            $(this).attr('disabled', 'disabled');
        } else {
            $(this).removeAttr('disabled');
        }
    });

    $('#joinUs button').on('click', function () {
        let textarea = $('textarea');
        textarea.val(''); 
        textarea.removeAttr('disabled');
        $('#chars').text('100 Character Remaining');
    });
});


