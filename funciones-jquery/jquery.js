//SIEMPRE PRIMERO LLAMAR $(document).ready(function(){}
$(document).ready(function () {
  console.log("ready!");
  $("#red").on("click", function () {
    $("p#parrafo").css("color", "red");
  });

  $("#toggle").on("click", function () {
    $("img").show("slow");
  });

  $("#show").on("click", function () {
    $("p#append").show("slow");
  });
});
