
$(document).ready(function () {

    var acc = document.getElementsByClassName("accordion");

    for (var i = 0; i < acc.length; i++) {

        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var img_down = $("#" + this.id  + "_down" );
            var img_right = $("#" + this.id  + "_right" );
            img_down.toggle();
            img_right.toggle();  
            var panel = $(this.nextElementSibling);
            panel.toggle(); 
        });
        $("#" + acc[i].id  + "_down" ).show();
        $("#" + acc[i].id  + "_right" ).hide();
        $("#" + acc[i].id  + "_panel" ).show();
    }

});