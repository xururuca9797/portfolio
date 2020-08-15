//gnb bar jq
let num = 0; //0닫힘, 1열림
$("#ham").click(function () {
    if (num == 1) {
        //닫힘상태면 열어라
        num = 0; //열림상태
        $(".h_inner").animate({
                left: "0",
            },
            500
        );
        $(".tab_menu").animate({
                left: "-300%",
            },
            600
        );
        $("section img:first-child").animate({
            left: "0%",
        });
    } else if (num == 0) {
        //열림상태면 닫아라

        num = 1; //닫힘상태
        $(".h_inner").animate({
                left: "-300%",
            },
            500
        );
        $(".tab_menu").animate({
                left: "0%",
            },
            600
        );
        $("section img:first-child").animate({
            left: "-7%",
        });
    }
}); ///click///