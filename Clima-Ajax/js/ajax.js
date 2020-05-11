(function(){

	var Latitude = 39.877340;
	var Longitude = -3.937120;


	$.ajax({
		type: 'GET',
		url : 'http://api.openweathermap.org/data/2.5/weather?lat='+ Latitude +'&lon=' + Longitude + "&units=metric&appid=9f50a805aa0089a1edd1829a5db029f0",
		dataType: 'jsonp'
	})
	.done(function( data ){
		
		console.log("Correcto!");

		console.log( data ); // Se imprime en consola la api

		var wheather=data;
		console.log(wheather);
		$("#foto").attr("src",data.icon);
		$("#txtNombre").val(data.name);
		$("#txtDireccion").val(data.main.temp);
		$("#txtTelefono").val(data.weather[0].description);
	})
	.fail(function(){
		console.log("Fallo!");
	})
	.always(function(){
		console.log("Completo!");
	});








})();