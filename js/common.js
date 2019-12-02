$(document).ready(function() {



    $(window).on("scroll", function(){

        console.log($(".list-pasture tbody").offset().top);

        if ($(window).scrollTop() > $(".list-pasture tbody").offset().top) {
            $(".list-pasture table").addClass("fit");
            $(".list-pasture thead th:nth-child(1)").css("width", $(".list-pasture tbody tr:first-child td:nth-child(1)").outerWidth());
            $(".list-pasture thead th:nth-child(2)").css("width", $(".list-pasture tbody tr:first-child td:nth-child(2)").outerWidth());
            $(".list-pasture thead th:nth-child(3)").css("width", $(".list-pasture tbody tr:first-child td:nth-child(3)").outerWidth());
        } else {
            $(".list-pasture table").removeClass("fit");
        }
    });
    


});

