


$(document).ready(function(){

  "use strict";

/* ==============================================
Back To Top Button
=============================================== */

  $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
      // scroll body to 0px on click
      $('#back-top').click(function () {
          $('#back-top a').tooltip('hide');
          $('body,html').animate({
              scrollTop: 0
          }, 800);
          return false;
      });
    /* ---------------------------------------------------------------------- */
    /*	Toggle
     /* ---------------------------------------------------------------------- */

    (function() {

        if($('.box-toggle').length) {
            $(".toggle-container").hide();
            $(".trigger").click(function(e){
                $(this).find("i").toggleClass("icon-minus");
                $(this).next().slideToggle("slow");
                e.preventDefault();
            });

        }

    })();

    /* end Toggle */



});




