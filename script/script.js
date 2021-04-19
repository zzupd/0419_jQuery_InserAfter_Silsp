/* eslint-disable */

$(document).ready(function () {

    var totalNum = $(".vis > div").length; // 선택자의 div 개수 4

    var currentNum = 0;
    // 이부분에 코드를 작성합니다.
    $("span.page_n>span:first-child").text(currentNum+1);

    $(".next_b").click(function () {


        if (currentNum==3) {
            currentNum = 0;
        } else {
            currentNum++;
        }

        $("span.page_n>span:first-child").text(currentNum+1);

        $(".vis>div").eq(0).insertAfter(".vis>div:last-child")

    });



    $(".prev_b").click(function () {

        if (currentNum==0) {
            currentNum = 3;
        } else {
            currentNum--;
        }

        $("span.page_n>span:first-child").text(currentNum+1);

        $(".vis>div").eq(3).insertBefore(".vis>div:first-child")


    });



});
