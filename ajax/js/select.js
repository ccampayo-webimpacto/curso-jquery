(function () {
  $document.ready(function () {
    $.ajax({
      type: "POST",
      url: "php/servicios/get.alumnos.php",
      dataType: "json",
      data: dataSerializada,
    })
      .done(function (data) {
        console.log("Correcto!");

        console.log(data); // Se imprime en consola la api

        if (data.error) {
          alert("Algo raro paso");
          return;
        }
        data.alumnos.forEach(function (alumno, index) {
          var content = "";
          content += '<tr id=fila'+alumno.id+'>';
          content += "<td>" + alumno.id + "</td>";
          content += "<td>" + alumno.nombre + "</td>";
          content += '<td class="text-center">';
          content +=
            '    <a href="actualizar.html?id=' +
            alumno.id +
            '" class="btn btn-primary">Actualizar</a>';
          content += "</td>";
          content += '<td class="text-center">';
          content +=
            '    <a href="" data-id="' +
            alumno.id +
            '" data-nombre="' +
            alumno.nombre +
            '" class="btn btn-primary botEliminar">Eliminar</a>';
          content += "</td>";
          content += "</tr>";

          $("#registros").append(content);
        });
      })
      .fail(function () {
        console.log("Fallo!");
      })
      .always(function () {
        console.log("Completo!");
      });
  });
  $("body").on("click", ".botEliminar", function (e) {
    e.preventDefault();
    var nombre = $(this).data("nombre");
    swal({
      title: "Are you sure?",
      text: "De querer borrar a: " + nombre,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Borrado! El registro ha sido eliminado correctamente!", {
          icon: "success",
        });
        var id = $(this).data("id");
        borrarRegistro(id);
        console.log(id);
        
      }
    });
  });
  function borrarRegistro(id) {
    $.ajax({
        type: "POST",
        url: "php/servicios/post.eliminaalumno.php?id" + id,
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
          $('#fila'+id).remove();
        })
        .fail(function () {
          console.log("Fallo!");
        })
        .always(function () {
          console.log("Completo!");
        });
  }
})();
