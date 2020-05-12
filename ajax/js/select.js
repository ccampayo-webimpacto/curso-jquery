(function () {
    $document.ready(function(){


        $.ajax({
            type: "POST",
            url: "php/servicios/get.alumnos.php",
            dataType: "json",
            data:dataSerializada
          })
            .done(function (data) {
              console.log("Correcto!");
      
              console.log(data); // Se imprime en consola la api

              if(data.error){
                  alert("Algo raro paso");
                  return;
              }
              data.alumnos.forEach(function(alumno,index){
                var content="";
                content+='<tr>';
                content+='<td>'+alumno.id+'</td>';
                content+='<td>'+alumno.nombre+'</td>';
                content+='<td class="text-center">';
                content+='    <a href="actualizar.html?id='+alumno.id+'" class="btn btn-primary">Actualizar</a>';
                content+='</td>';
                content+='<td class="text-center">';
                content+='    <a href="" data-id="'+alumno.nombre+'" class="btn btn-primary">Eliminar</a>';
                content+='</td>';
                content+='</tr>';

                $("#registros").append(content);
              });
            })
            .fail(function () {
              console.log("Fallo!");
            })
            .always(function () {
              console.log("Completo!");
            });

    })

  
  
      
    });
  })();