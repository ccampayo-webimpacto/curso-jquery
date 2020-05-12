(function () {
  function $_GET(param) {
    var vars = {};
    window.location.href.replace(location.hash, "").replace(
      /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
      function (m, key, value) {
        // callback
        vars[key] = value !== undefined ? value : "";
      }
    );

    if (param) {
      return vars[param] ? vars[param] : null;
    }
    return vars;
  }
  $document.ready(function () {
    var id = $_GET("id");

    $.ajax({
      type: "POST",
      url: "php/servicios/get.alumnos.php?id" + id,
      dataType: "json",
      data: dataSerializada,
    })
      .done(function (data) {
        console.log("Correcto!");

        console.log(data); // Se imprime en consola la api

        var alumno = data.alumnos[0];
        $("#id").val(alumno.id);
        $("#nombre").val(alumno.nombre);
        $("#estado").val(alumno.estado);
      })
      .fail(function () {
        console.log("Fallo!");
      })
      .always(function () {
        console.log("Completo!");
      });
  });
  $("#frmData").on("submit", function (e) {
    console.log(e);
    e.preventDefault();

    var formulario = $(this);
    var dataSerializada = formulario.serialize();
    console.log(dataSerializada);

    $.ajax({
      type: "POST",
      url: "php/servicios/post.guardaralumnos.php",
      dataType: "json",
      data: dataSerializada,
    })
      .done(function (data) {
        console.log("Correcto!");

        console.log(data); // Se imprime en consola la api
      })
      .fail(function () {
        console.log("Fallo!");
      })
      .always(function () {
        console.log("Completo!");
      });
  });
})();
