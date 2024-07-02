/// <reference types="../@types/jquery"/>

$(document).ready(function(){
    $('#openSideBar').on('click',function(){
        $('.sideBar').addClass('open');
    });

    $('#closeSideBar').on('click',function(){
        $('.sideBar').removeClass('open');
    });

    $('.SingerInfo p').hide();

    $('.SingerInfo h2').on('click',function(){
        $('.SingerInfo p').not($(this).next('p')).slideUp(500);
        $(this).next('p').slideToggle(500);
    });

    $('a[href^="#"]').on('click', function(e){
        e.preventDefault(); // Prevent default anchor behavior

        let secId = $(this).attr('href');
        let secOffset = $(secId).offset().top;

        $('html, body').animate({ scrollTop: secOffset }, 1000);

        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });
});

window.onload = function(){
    setInterval(function(){
        countDownToTime("10 october 2024 10:30:00");
    }, 1000);
}

function countDownToTime(countTo){
   let futureDate = new Date(countTo);
   futureDate = (futureDate.getTime()/1000);

   let now = new Date();
   now = (now.getTime()/1000);

   let timeDifference = futureDate - now;

   let days = Math.floor(timeDifference / (24 * 60 * 60));
   let hours = Math.floor((timeDifference % (24 * 60 * 60)) / 3600);
   let minutes = Math.floor((timeDifference % 3600) / 60);
   let secs = Math.floor(timeDifference % 60);

   $('.days').html(`${days}D`);
   $('.hours').html(`${hours}H`);
   $('.minutes').html(`${minutes}M`);
   $('.seconds').html(`${secs}S`);
}


// textArea

 let maxLenght = 100;
 $('textarea').keyup(function(){
    let lenght = $(this).val().length;
    let AmountLeft = maxLenght - lenght;
     
    if(AmountLeft <= 0){

        $('#char').html(`<span class="text-danger fw-bold"> you have reached your maximum limit</span>`);
    }
   else{
    $('#char').text(AmountLeft + " characters left");
    }




 });

 $(window).on('scroll', function() {
    let wScroll = $(window).scrollTop(); // Corrected to $(window).scrollTop()

    // Get the offset of the #Duration section
    let SOffset = $('#Duration').offset().top;

    if (wScroll > SOffset) {
        $('.navBars').css({ color: 'black' });
    } else {
        $('.navBars').css({ color: '#EEEEE' });
    }
});
