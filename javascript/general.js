$(".arrow-down-symbol").on("click", function() {
    $(".submeny").slideToggle();

    if ($(".arrow-down-symbol i").hasClass("fa-chevron-down")) {
        $(".arrow-down-symbol i").removeClass("fa-chevron-down").addClass("fa-chevron-up");
    } else {
        $(".arrow-down-symbol i").addClass("fa-chevron-down").removeClass("fa-chevron-up");
    }
}) 

