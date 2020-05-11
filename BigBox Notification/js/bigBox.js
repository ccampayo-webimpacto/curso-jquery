(function () {
  $.bigBox = function (opciones,callback) {
    opciones = $.extend({
        fa:"fa-thumbs-up",
        titulo:undefined,
        contenido:undefined,
        boton:"Aceptar",
    }, opciones);

    if(opciones.titulo===undefined){
        alert('El titulo es necesario.');
        return;
    }
    if(opciones.contenido=== undefined){
        alert("el titulo es necesario");
        return;
    }

    console.log("vamos bien");
    var contenido = "";
    contenido = '<div class="bigBox-Fondo"></div>';

    // contenido+= '';
    contenido += '<div class="bigBox-contenedor" align="center">';
    contenido +=
      '<div class="big-Box-Cerrar"><i class="fas fa-times"></i></div>';
    contenido +=
      '<div class="big-Box-Circulo"><i class="far '+opciones.fa+' fa-3x"></i></div>';
    contenido += '<div class="big-Box-Contenido">';
    contenido += '<span class="big-Box-Contenido-Titulo">'+opciones.titulo+'</span>';
    contenido +=
      '<span class="big-Box-Contenido-Texto">'+opciones.contenido+'</span>';
    contenido += "</div>";
    contenido += '<button class="bigBox-Button ">'+opciones.boton+'</button>';
    contenido += "</div>";
    $("body").append(contenido);
    animar_entrada();


    //funcion del bpton cerrar
    $(".big-Box-Cerrar").on("click",function(){
        animar_salida();
        if(typeof callback=='function'){
            callback('boton-cerrar');
        }

    });

    //funcion del boton principal
    $(".bigBox-Button").on("click",function(){
        animar_salida();
        if(typeof callback=='function'){
            callback('boton-principal');
        }

    });
    function animar_salida() {
        var $fondo = $(".bigBox-Fondo");
        // $fondo.fadeIn(300);
        var $bigBox = $(".bigBox-contenedor");
        // $bigBox.show();
        // $fondo.show();
        var tl = new TimelineMax();
        tl.to($fondo, 0.3, { opacity: 0 })
          .to($bigBox, 0.3, { opacity: 0 , onComplete:remover_bigbox}, "-=0.5");
        
          ///hace lo mism que la ultima linea, llamar a la funcion remover_bigbox
        // $bigBox.animate({
        //     opacity:0,
        //     function() {
        //         $(this).remove();
        //     }
        // });  
      }


    //animar la entrada
    function animar_entrada() {
      var $fondo = $(".bigBox-Fondo");
      // $fondo.fadeIn(300);
      var $bigBox = $(".bigBox-contenedor");
      var anchoP=$(window).width();
      var altoP=$(window).height();
      
      var anchoB=$bigBox.width();
      var altoB=$bigBox.height();

      $bigBox.css({
          top:(altoP/2)-(altoB/2),
          left:(anchoP/2)-(anchoB/2),

      });

      $bigBox.show();
      $fondo.show();
      var tl = new TimelineMax();
      tl.to($fondo, 0.6, { opacity: 0.3 })
        .to($bigBox, 1, { opacity: 1 }, "-=0.5")
        .from($bigBox, 0.8, { y: "-=20", ease: Bounce.easeOut }, "-=0.5");
    }


    function remover_bigbox(){
        var $fondo = $(".bigBox-Fondo");
        // $fondo.fadeIn(300);
        var $bigBox = $(".bigBox-contenedor");

        $fondo.remove();
        $bigBox.remove();

    }
  };
})();
