window.addEventListener("load",function(){

    var wrapContent1 = document.getElementsByClassName("wrap-content1")[0];
    var wrapContent2 = document.getElementsByClassName("wrap-content2")[0];
    var wrapContent3 = document.getElementsByClassName("wrap-content3")[0];

    var menu1 = document.getElementsByClassName("menu1")[0];
    var menu2 = document.getElementsByClassName("menu2")[0];
    var menu3 = document.getElementsByClassName("menu3")[0];
   
    menu1.onclick=function(){
       alert("hello");
    };
    



    menu1.onmouseover=function(){
        wrapContent1.style = "background-color: lawngreen";
    };
    menu1.onmouseout = function(){
        wrapContent1.style = "background-color: white";
    }
    menu2.onmouseover=function(){
        wrapContent2.style = "background-color: lawngreen";
    };
    menu2.onmouseout = function(){
        wrapContent2.style = "background-color: white";
    }
    menu3.onmouseover=function(){
        wrapContent3.style = "background-color: lawngreen";
    };
    menu3.onmouseout = function(){
        wrapContent3.style = "background-color: white";
    }

});