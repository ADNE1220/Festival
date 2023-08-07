$(function(){

    //주의
    $(".warning_close, .warning_bg").click(function(){
        $(".warning, .warning_bg").fadeOut();
    })//warning click

    //입장
    $(".enter").click(function(){
        $(".main_logo").fadeOut();
        $(".door_L").animate({left: "-500px"},1000);
        $(".door_R").animate({right: "-500px"},1000);
        $(".enter").fadeOut("slow");
        $(".halmoni img").delay(800).fadeOut("slow")
        setTimeout(function(){
            location.href="index.html";
        },2000)
    })//enter click
    

})//js end