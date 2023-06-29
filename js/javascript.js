

//頁面滑動
$(function(){
    var wh = $(window).innerHeight();
    // var max = 937;
    // var outer = (max - wh) * 3;

    if(wh >= 745)
    {
        $(".innerPage")
        .css("height",""+ (wh - 450) +"px");
    }
    else
    {
        $(".innerPage")
        .css("height",""+ (295) +"px");
    }

    if(wh >= 725)
    {
        $(".gameBox")
        .css("height",""+ (wh - 275) +"px");
    }
    else
    {
        $(".gameBox")
        .css("height",""+ (450) +"px");
    }
    
    // if(wh >= 785)
    // {
    //     $(".scrollBox")
    //     .css("height",""+ (wh - 470) +"px");
    // }
    // else
    // {
    //     $(".scrollBox")
    //     .css("height",""+ (315) +"px");
    // }

    if(wh >= 855)
    {
        $(".registerBox")
        .css("height",""+ (wh - 120) +"px");
    }
    else
    {
        $(".registerBox")
        .css("height",""+ (735) +"px");
    }
    
    // if(wh <= 937 && wh > 0)
    // {
    //     $(".outer_container")
    //     .css("height","" + outer + "px");
    // }

    $(window).resize(function(){
        var wh = $(window).innerHeight();
        var max = 937;
        var outer = (max - wh) * 3;

        if(wh >= 745)
        {
            $(".innerPage")
            .css("height",""+ (wh - 450) +"px");
        }
        else
        {
            $(".innerPage")
            .css("height",""+ (295) +"px");
        }

        if(wh >= 725)
        {
            $(".gameBox")
            .css("height",""+ (wh - 275) +"px");
        }
        else
        {
            $(".gameBox")
            .css("height",""+ (450) +"px");
        }

        // if(wh >= 785)
        // {
        //     $(".scrollBox")
        //     .css("height",""+ (wh - 470) +"px");
        // }
        // else
        // {
        //     $(".scrollBox")
        //     .css("height",""+ (315) +"px");
        // }

        if(wh >= 855)
        {
            $(".registerBox")
            .css("height",""+ (wh - 120) +"px");
        }
        else
        {
            $(".registerBox")
            .css("height",""+ (735) +"px");
        }

        // if(wh <= 937)
        // {
        //     $(".middle .outer_container")
        //     .css("height",""+ (wh - 101) +"px");
        // }
    })

})

//filter
$(function(){
    $(".jumpWindow .close_ic,.jumpWindow .close").on("click",function(){
        $(".filter")
        .removeClass("display");
    })
})

//利用規約
$(function(){
	$(".termsContentArea .outerBox").scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal < 100){
            $(".sideNav li:nth-of-type(1)") 
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 5780){
            $(".sideNav li:nth-of-type(11)") 
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 5300){
            $(".sideNav li:nth-of-type(10)") 
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 5200){
            $(".sideNav li:nth-of-type(9)") 
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 5300){
            $(".sideNav li:nth-of-type(9)") 
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 5000){
            $(".sideNav li:nth-of-type(8)") 
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 4300){
            $(".sideNav li:nth-of-type(7)")
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 3300){
            $(".sideNav li:nth-of-type(6)")
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 2100){
            $(".sideNav li:nth-of-type(5)")
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 1300){
            $(".sideNav li:nth-of-type(4)")
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 800){
            $(".sideNav li:nth-of-type(3)")
            .addClass("active")
            .siblings().removeClass("active");
        }else if(scrollVal >= 100){
            $(".sideNav li:nth-of-type(2)")
            .addClass("active")
            .siblings().removeClass("active");
        }
	})
})

//faq
$(function(){
	$(".faqContentArea .outerBox").scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal < 200){
            $(".sideNav li:eq(0)")
            .addClass("active")
            .siblings().removeClass("active");
        } else if(scrollVal >= 753){
            $(".sideNav li:eq(2)")
            .addClass("active")
            .siblings().removeClass("active");
        } else if(scrollVal >= 300){
            $(".sideNav li:eq(1)")
            .addClass("active")
            .siblings().removeClass("active");
        }
	})
})

//點擊滑動至指定位
$(function(){
    $('.sideNav li').click(function(){
        var n = $(this).index();
        var target = $(".contentBlock:eq("+ n +") .subTitle").offset().top;
        var ori = $(".outerBox").offset().top;
        var scrollVal = $(".outerBox").scrollTop();

        $(".outerBox").animate({
            scrollTop: target - ori + scrollVal,
        },300)
    });
})

//回到頂端
$(function(){
    $(".scrollBox,.innerPage,.gameBox").scroll(function(){
        var n = $(".scrollBox").scrollTop();
        var i = $(".innerPage").scrollTop();
        var c = $(".gameBox").scrollTop();
        
        if(n > 0 || i > 0 || c > 0)
        {
            $(".goTop")
            .addClass("display");
        }
        else
        {
            $(".goTop")
            .removeClass("display");
        }
    })

    $(".goTop").on("click",function(){
        $(".scrollBox,.innerPage,.gameBox")
        .animate({
            scrollTop : "0",
        },300);
    })
})

//代理申請
$(function(){
    $("header .selectBox label button, button.apply").on("click",function(){
        $(".filter, .jumpWindow.agentApplyWindow")
        .addClass("display");
    })
})