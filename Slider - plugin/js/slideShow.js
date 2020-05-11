(function () {
  $.slideShow = function (opciones) {

	opciones=$.extend({
		divDestino:".slideShow",
		intervalo:1500,
		ancho:600,
		slides:[],	
		velocidad:1200,
		color:"pink",
	},opciones);

	if(opciones.slides.length==0){
		alert("los slides son necesarios");
		return;
	}

	opciones.velocidad=opciones.velocidad/1000;

    var actual = 0;
    var ancho = opciones.ancho;

    
	var slides = opciones.slides.length;
	//creacion del slideShor
	var content="";
	content+="<ul>";
	
	for(var i=0;i<opciones.slides.length;i++){
		content+='<li><img src='+opciones.slides[i]+'></li>';
	}

	content+="</ul>";

	$(opciones.divDestino).append(content);
	//creacion de los botones

	content="";
	content+='<div class="slideShowButtons">';
	for(var i=0;i<opciones.slides.length;i++){
		content+='<div data-idx="'+i+'" class="slideButton"></div>';
	}
	content+='</div>';

	$(opciones.divDestino).append(content);

	var $slideshow = $(opciones.divDestino+" ul");

    var $puntos = $(".slideShowButtons");
    $puntos.find("div").eq(0).css({
      backgroundColor: opciones.color,
    });

    var intervalo = setInterval(function () {
      mover("sig");
    }, opciones.intervalo);

    function mover(dir, click) {
      dir === "sig" ? actual-- : actual++;

      if (actual > 0) {
        actual = (slides - 1) * -1;
      } else if (actual <= slides * -1) {
        actual = 0;
      }

      mover_punto(actual);
      // var margen = actual * ancho;

      // var tl = new TimelineMax();
      // tl.to( $slideshow, 1.2, { marginLeft: margen, ease: Elastic.easeOut.config(1, 0.75) } );

      // $slideshow.animate({
      // 	marginLeft: margen
      // }, 400 );
    }

    function mover_punto(actual, click) {
      if (click) clearInterval(intervalo);
      var margen = actual * ancho;
      var idx = actual * -1;

      var $puntoActual = $puntos.find("div").eq(idx);
      var $demasPuntos = $puntos.find("div").not($puntoActual);

      var tl = new TimelineMax();
      tl.to($slideshow, opciones.velocidad, {
        marginLeft: margen,
        ease: Elastic.easeOut.config(1, 0.75),
      })
        .to(
          $puntoActual,
          0.5,
          {
            backgroundColor: opciones.color,
          },
          "-=1.2"
        )
        .to(
          $demasPuntos,
          0.5,
          {
            backgroundColor: "red",
          },
          "-=1.2"
        );
    }

    $(".slideButton").on("click", function () {
      var idx = $(this).data("idx");
      idx = idx * -1;
      mover_punto(idx, true);
    });

    $(".botSlide").on("click", function () {
      var dir = $(this).data("mov");
      mover(dir, true);
    });
  };
})();
