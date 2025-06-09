$(function () {
    $(".pager>li>a").on("click", function (e) {
        e.preventDefault(); // 기본 동작 방지
        var target = $(this).attr("href");
        var offset = $(target).offset().top;
        $(".pager>li").removeClass("active");
        $(this).parent("li").addClass("active")
        $("html, body").animate({ scrollTop: offset }, 500);
    })
    $(".topBtn").on("click", function (e) {
        $("html, body").animate({ scrollTop: 0 }, 500);
    })
    $(".control-item>li").on("click",function(e){
        let id=$(this).index();
        $(".banner>li").eq(id).fadeIn(500).siblings().fadeOut(500)
        $(this).addClass("active").siblings().removeClass("active");
    })
})