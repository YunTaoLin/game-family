// var popup = document.querySelector(".menu-toggle")
// var Popup_Menu = document.querySelector(".popup-menu")

// popup.addEventListener('click',function(){
//     Popup_Menu.style = "display:block";
//     console.log("OK");
// },false)
$('.carousel').carousel({
    interval: 2000
  })


$(document).ready(function () {
    $(".menu-toggle").click(function () { 
        $('.popup-menu').fadeIn(500); })

    $(".close").click(function () { 
        $('.popup-menu').fadeOut(500); })
    $(".popup-item").click(function () { 
        $('.popup-menu').hide(); })
    $("#ToMenu").click(function () { 
            $('.popup-menu').fadeIn(500); })

    var $changebgc = $(".js-scroll");
    var $pagetop = $(".pagetop")
    var SD=0
    $(window).on("scroll",function(){
    if($(window).scrollTop() >=200){
         if($(window).scrollTop() > SD){
            $changebgc.addClass("scrooll-changeBGC");
            $changebgc.slideDown();
        }
        else{
            $changebgc.slideUp() ;
        }
        $pagetop.fadeIn();

        
    }
    else{
        $changebgc.removeClass("scrooll-changeBGC")
        $changebgc.show();
        $pagetop.fadeOut();
    } 
    SD = $(window).scrollTop();
    })


        
        var $backToTop = $('.js-back-to-top');
        
        $backToTop.click(function () {

            $('html, body').animate({scrollTop: 0}, 1000);            
        
        });
        
    
})




