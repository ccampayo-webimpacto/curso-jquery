(function () {
  var $cajaRoja = $(".cajaRoja");
  function mover(dir) {
    $cajaRoja.clearQueue();
    switch (dir) {
      case "arr":
        $cajaRoja.animate({
          top: "-=50px",
        });
        break;
      case "abj":
        $cajaRoja.animate({
          top: "+=50px",
        });
        break;
      case "der":
        $cajaRoja.animate({
          left: "+=50px",
        });
        break;
      case "izq":
        $cajaRoja.animate({
          left: "-=50px",
        });
        break;
      default:
        $cajaRoja.animate({
          left: "0px",
          top: "0px",
        });
    }
  }
  $("button").on("click", function () {
    console.log("click");
    var dir = $(this).data("dir");
    mover(dir);
  });

  $(document).on("keypress",function(e){
    var key = e.keyCode;
    console.log(e.keyCode);
    console.log("hola");
    switch (key) {
      case 119:
        mover("arr");
        break;
      case 115:
        mover("abj");
        break;
      case 100:
        mover("der");
        break;
      case 97:
        mover("izq");
        break;
      default:
        mover("res");
    }
  });

})();
