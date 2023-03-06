$(document).ready(function(){
    $('#main-nav a').click(function(){
        $("section").removeClass("show");
        var target = $(this).attr("href");
        $(target).addClass("show");
    });

    $(".typeeffect").typed({
        strings: ["Full Stack Developer","Web Designer","Python Enthusiast"],
        typeSpeed:100,
        loop:true,
        backSpeed:50

    })
});