/* eslint-disable */

$(document).ready(function () {

    var totalNum = $(".vis > div").length; // 선택자의 div 개수 4

    var currentNum = 0;
    // 이부분에 코드를 작성합니다.
    $("span.page_n>span:first-child").text(currentNum+1);

    $(".next_b").click(function () {


        // 1. 다음 이미지로 변경됨
        $(".vis>div").hide();
        /*$(".vis>div").css({"visibility": "hidden"});*/

        if (currentNum==3) {
            currentNum = 0;
        } else {
            currentNum++;
        }
        $(".vis>div").eq(currentNum).show();
        /*$(".vis>div").eq(currentNum).css({"visibility": "visible"});*/

        // 2. currentNum를 1에서 2로, 2에서 3으로 증가함

        /*$("#currentNumDp").text("currentNum : " + currentNum);*/
        $("span.page_n>span:first-child").text(currentNum+1);
    });
    $(".prev_b").click(function () {

        // 1. 이전 이미지로 변경됨
        $(".vis>div").hide();
       /* $(".vis>div").css({"visibility": "hidden"});*/

        // 2. currentNum를 4에서 3로, 3에서 2으로 감소함

        if (currentNum==0) {
            currentNum = 3;
        } else {
            currentNum--;
        }

        $(".vis>div").eq(currentNum).show();
        /*$(".vis>div").eq(currentNum).css({"visibility": "visible"});*/

        /*$("#currentNumDp").text("currentNum : " + currentNum);*/
        $("span.page_n>span:first-child").text(currentNum+1);


    });



});
