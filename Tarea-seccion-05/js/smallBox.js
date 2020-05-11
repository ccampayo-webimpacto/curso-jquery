(function () {
  $.smallBox = function (opciones) {
    opciones = $.extend(
      {
        titutlo: undefined,
        subtitulo: undefined,
        contenido: undefined,
        fa: "fa-envelope",
        img: undefined,
        timeout:3000
      },
      opciones
    );

    var html = "";
    html += '<div class="smallBox-contenedor">';
    html += '  <div class="smallBox-foto">';
    html += '    <img src="'+opciones.img+'" alt="" />';
    html += "  </div>";
    html += '  <div class="smallBox-contenido">';
    html += '    <div class="smallBox-cajaColor">';

    html += '    <div class="smallBox-textoContenedor">';
    html += '      <span class="smallBox-titulo">'+opciones.titutlo+'</span>';
    html +=       ' <span class="smallBox-subTitulo">'+opciones.subtitulo+'</span>';
    html += "    </div>";
    html += '      <div class="smallBox-colorIcon">';
    html += '        <i class="fa '+opciones.fa+' fa-2x"></i>';
    html += "      </div>";
    html += "    </div>";
    html += "  </div>";
    html += "</div>";

    $("body").append(html);

      animar_entrada();
      setTimeout(function(){
          animar_salida();
      },opciones.timeout);
  };

  function animar_salida(){
    var $smallBox=$(".smallBox-contenedor");
    var tl =new TimelineMax();
      tl.to($smallBox,1.6,{ x:"+=100px"})
      .to($smallBox,1,{ opacity:0, onComplete:remover_smallBox},"-=1.3");
  }

  function remover_smallBox(){
    var $smallBox=$(".smallBox-contenedor");
    $smallBox.remove();
  }
  function animar_entrada(){
      var $smallBox=$(".smallBox-contenedor");
      var tl =new TimelineMax();
        tl.from($smallBox,1.6,{ x:"+=100px", ease:Bounce.easeOut })
        .from($smallBox,1,{ opacity:0,},"-=1.3");
  }
})();
