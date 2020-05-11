(function(){

$.ajax({
    type:'GET',
    url:'http://www.json-generator.com/api/json/get/bHAUvDCoOa?indent=2',
    dataType:'json'
}).done(function(data){
    console.log("Hecho correcto!");
    var person=data;
    console.log(person);
    $("#foto").attr("src",data.picture);
    $("#txtNombre").val(data.name);
    $("#txtDireccion").val(data.address);
    $("#txtTelefono").val(data.phone);
    $("#txtGenero").val(data.gender);

})
.fail(function(){
    console.log("fallo!");
})
.always(function(){
    console.log("Completo!")
})







})();