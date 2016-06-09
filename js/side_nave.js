function close_side_bar() {
  $(".side-bar-menu").css("margin-left", "-50%");
  $(".side-bar").addClass("hidden");
}

$(function() {

    $(document).on("click", "#menu-btn", function() {
        $(".side-bar").removeClass("hidden");
        $(".side-bar-menu").css("margin-left", "0%");

    });$(document).on("click", "#close-btn", function() {
    	close_side_bar();
        
    });


    $(document).on("click", "#menu-btn", function() {
        $(".side-bar").removeClass("hidden");
        $(".side-bar-menu").css("margin-left", "0%");
    });


    $(document).on("click", ".side-bar", function (e) {
      if($(e.target)[0] == $(this)[0]){
        close_side_bar();
      }
    });

    

});