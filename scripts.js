$( document ).ready(function() {

    $(".category-picked").hide();

    //Populating Category
    $(".u-max-full-width").on("click", (e) => {
      $(".category-picked").show();
      $(".category-chosen").text(e.target.id);
      });

//Scroll to categories function
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

});