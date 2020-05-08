(function(){

	var $cajaRoja = $(".cajaRoja");

	$("#tamano").on("click",function(){
		$cajaRoja.animate({
			width:"+=100px",
			height:"+=100px",
		},1000,function(){
			console.log("Termino el aumento de tamaño");
			// $(this)
		}).animate({
			width:"-=100px",
			height:"-=100px",
		}).animate({
			opacity:0.1,
		},1500,function(){
			$(this).remove();
		});
	})

})();