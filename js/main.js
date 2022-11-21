// 设置侧边栏点击就亮
$("#item1").click(function(){
    $(".nav-item").removeClass("active");
    // $(".nav-item").html("普通按钮样式");
    $(this).addClass("active");
    // $(this).html("选中按钮样式");
    $(".info").css("display","block");
    $(".change").css("display","none");
    $(".look").css("display","none");
    $(".sign").css("display","none");
});
$("#item2").click(function(){
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
    $(".info").css("display","none");
    $(".change").css("display","block");
    $(".look").css("display","none");
    $(".sign").css("display","none");
});
$("#item3").click(function(){
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
    $(".info").css("display","none");
    $(".change").css("display","none");
    $(".look").css("display","block");
    $(".sign").css("display","none");
});
$("#item4").click(function(){
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
    $(".info").css("display","none");
    $(".change").css("display","none");
    $(".look").css("display","none");
    $(".sign").css("display","block");
});
var x=JSON.stringify(localStorage.getItem('idCard'))
console.log(x)