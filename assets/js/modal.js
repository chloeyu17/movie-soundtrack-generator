$(document).ready(function() {


    $("#myBtn").on("click", function() {
      $("#modalContainer").show();
    });
  
    $(".close").on("click", function() {
      $("#modalContainer").hide();
    });
  
  });