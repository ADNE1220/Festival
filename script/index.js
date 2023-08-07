$(function(){

    //헤더 메뉴
    $(".head_nav ul li a, .guide_map ul li a, .quick_fix a").click(function(){
        var go= $(this).attr("href");
        console.log("go: ",go);
        var gomove= $(go).offset().top;
        console.log("go move: ", gomove);
        $("html, body").stop().animate({scrollTop : gomove},"slow")
    })// harder menu click

    //헤더 메뉴 호버
    $(".head_nav ul li a").hover(function(){
        $(this).toggleClass("on");
    })//menu hover

    //메인 슬라이드 이미지
    $(".main_move li").hide();
    $(".main_move li").eq(0).show();
    var n= 0;
    setInterval(function(){
        $(".main_move li").eq(n).fadeOut();
        if(n==2){
            n=0;
        }else{
            n++
        };
        console.log(n);
        $(".main_move li").eq(n).fadeIn();
    },3000)//main slide img fade

    //공연 슬라이드 이미지
    //낮 공연
    $(".noon_imgs").slick({
        autoplay:true,
        autoplaySpeed:2500,
        fade:true,
        arrows:true
    })//noon slick end

    //밤 공연
    $(".night_imgs").slick({
        autoplay:true,
        autoplaySpeed:2500,
        fade:true,
        arrows:true
    })//night slick end

    //포스터 팝업
    $(".close").click(function(){
        $(".popup").hide()
    })//

    //이벤트 탭off
    $("a").click(function(e){
        e.preventDefault();
    })//
})//jq end

$(window).scroll(function(){
    var top= $(this).scrollTop();
    console.log("top: ",top);
    if(top > 130){
        $("#header").addClass("scro");
    }else{
        $("#header").removeClass("scro");
    }//header scroll
})//window