(function(){


	$.ajax({
		type: 'GET',
		url : 'http://www.json-generator.com/api/json/get/cuZEIeaPoy?indent=2',
		dataType: 'json'
	})
	.done(function( data ){

		var personas=data;

		for(var i=0;i<personas.length;i++){
			var persona=personas[i];

			var tags="";
			for(var j=0;j<persona.tags.length;j++){
				tags+= '<span class="label label-primary">'+persona.tags[j]+'</span> ';
			}
			var html="";
			html+='<tr>';
			html+='	<td>'+personas[i].name+'</td>';
			html+='	<td>'+personas[i].age+'</td>';
			html+='	<td>'+tags+'</td>';
			html+='</tr>';
			$(".table").append(html);
		}



	})
	.fail(function(){
		console.log("Fallo!");
	})
	.always(function(){
		console.log("Completo!");
	});








})();