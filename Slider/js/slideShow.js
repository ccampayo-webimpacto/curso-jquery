(function () {
  var actual = 0;
  var ancho = 600;

  var $slideShow = $(".slideShow ul");
  var slides = $slideShow.find("li").length;

  var intervalo = setInterval(function () {
    mover("sig");
  }, 1500);

  function mover(dir, click) {
    if (click) 
        clearInterval(intervalo);

    dir === "sig" ? actual-- : actual++;
    //hacen lo mismo
    // if(dir==="sig"){
    //     actual++;
    // }else{
    //     actual--;
    // }

    if (actual > 0) {
      actual = (slides - 1) * -1;
    } else if (actual <= slides * -1) {
      actual = 0;
    }
    console.log(actual);

    var margen = actual * ancho;
    var tl=new TimelineMax();
    tl.to($slideShow,2.5,{
        marginLeft:margen,
        ease:Elastic.easeOut.config(1.1, 0.4),
    });
    // $slideShow.animate(
    //   {
    //     marginLeft: margen,
    //   },
    //   450
    // );
  }

  $(".botSlide").on("click", function () {
    var dir = $(this).data("mov");
    mover(dir,true);
  });
})();
