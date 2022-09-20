$(document).ready(function(){

    $(".burger").click(function(){
        $(".overlay").toggleClass("show");
        $($(this).children("i.fa")).toggleClass("fa-bars fa-times")
    });

    function scrollToSection(event) {
        event.preventDefault();
        var $section = $($(this).attr('href')); 
        $('html, body').animate({
        scrollTop: $section.offset().top - 60
        }, 1000);
    }
    $('.sidebar a').on('click', scrollToSection);
    $(".sidebar a").click(function(){
        $(".sidebar a").removeClass("active");
        $(this).addClass("active");
    });

});