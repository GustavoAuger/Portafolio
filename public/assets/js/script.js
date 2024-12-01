$(document).ready(function(){

	var height = $(window).height();

	ajustesIniciales();


	function ajustesIniciales(){
		$("section#body").css({"margin-top": height - 400 + "px"});
	}


	$(document).scroll(function(){
		var scrollTop = $(this).scrollTop();
		var pixels = scrollTop / 70;

		if(scrollTop < height){
			$("section#contenedor_general").css({
				"-webkit-filter": "blur(" + pixels + "px)",
				"background-position": "center -" + pixels * 10 + "px"
			});

		}

	});


});
