
$(function(){
            $('#fullpage').fullpage({
                'verticalCentered': false,
                anchors: ['page1', 'page2', 'page3', 'page4'],
                'navigation': true,                //是否显示导航栏
                'navigationPosition': 'left'  //导航栏的位置
});
$(function(){
    var ble=true;
    var menuTime=["50","100","150","200","250","300","350"];
    var menuTimes=["10","20","30","40","50","60","70"];
    $(".zdl_menu").on("click",function(){
        var navLength=$(".zdl_meun_nav .zdl_nav_1").length;
        if(ble){
            $(".zdl_meun_back").animate({"left":"0"},500);
            for(var i=0;i<navLength;i++){
                $(".nav"+i).delay(menuTime[i]).animate({"marginLeft":"0"},"slow");
            }
            ble=false;
        }else{
            $(".zdl_meun_back").delay(100).animate({"left":"-50%"},500);
            for(var ii=0;ii<navLength;ii++){
                $(".nav"+ii).delay(menuTimes[ii]).animate({marginLeft:"-155%"},100);
            }
            ble=true;
        }
    });

    var nav=$(".zdl_meun_nav").find(".zdl_nav_1");
    nav.hover(function() {
        $(this).children(".zdl_nav_park").css("opacity","1");
    },function(){
        $(this).children(".zdl_nav_park").css("opacity","0");
    });


           var zdl_img=$(".zdl_three_s2 ul").find("li");
            zdl_img.hover(function(){               
                $(this).children("div").children(".zdl_three_re").children(".zdl_z_back").css({ "opacity":"0.7"});
                $(this).children("div").children(".zdl_solid").css("background","#3CAF5A");
                $(this).children("div").children(".zdl_three_re").children(".zdl_z_left").animate({
                    "opacity":"1",
                    "left":"38%"
                },500);
                $(this).children("div").children(".zdl_three_re").children(".zdl_z_right").animate({
                    "opacity":"1",
                    "right":"45%"
                },500);
             },function(){
                $(this).children("div").children(".zdl_three_re").children(".zdl_z_back").css("opacity","0");
                $(this).children("div").children(".zdl_solid").css("background","#959595");
                $(this).children("div").children(".zdl_three_re").children(".zdl_z_left").animate({
                    "opacity":"0",
                    "left":"0"
                },500);
                $(this).children("div").children(".zdl_three_re").children(".zdl_z_right").animate({
                    "opacity":"0",
                     "right":"0"
                    },500);
                });
            });
});