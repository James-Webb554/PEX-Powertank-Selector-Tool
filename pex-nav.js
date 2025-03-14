jQuery(document).ready(function ($) {
    // [FORWARD] Fade out section-1 and replace it with section-2
    $("#Section-1-Btn-1").on("click", function () {
        $("#Section-1").fadeOut("10", function () {
            $("#Section-2").fadeIn("10").css('display', 'contents');
        });
    });

    // [FORWARD] Fade out section-2 and replace it with section-3
    $("#PTFormSubmit").on("click", function () {
        $("#Section-2").fadeOut("10", function () {
            $("#Section-3").fadeIn("10").css('display', 'contents');
        });
    });

    // [BACKWARD] Fade out section-2 and replace it with section-1
    $("#inputs-back").on("click", function () {
        $("#Section-2").fadeOut("10", function () {
            $("#Section-1").fadeIn("10").css('display', 'contents');
        });
    });

    // [BACKWARD] Fade out section-3 and replace it with section-2
    $("#results-back").on("click", function () {
        $("#Section-3").fadeOut("10", function () {
            $("#result-card-wrapper").empty();
            $('#result-card-wrapper-form').css('display', 'none');
            $("#Section-2").fadeIn("10").css('display', 'contents');
        });
    });
});
