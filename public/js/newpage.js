//var $body = $('body');

//var loading = [
	//{ elements: $body, properties: { height: '100%' }},
  //  { elements: $body, properties: { width: '0%' } },
    //{ elements: $body, properties: { width: '100%' }, options: {
      //complete: function () {
		
        //$('.wrap').velocity( 'transition.slideUpIn' );
       // $('img').velocity( 'transition.flipYIn' );
        
        //$('html').css({ background: '#fff' });

      //}
   // }
  //}
//];
//$.Velocity.RunSequence(loading);
$(document).ready(function(){//comienzo de la pagina
		var ii= 0;
		$(window).scroll(function(){
				
				var a = $(window).scrollTop(); 
				var b = $(".homepage_banner").offset();
				var c = a - b.top;
				console.log(a);	
				console.log(b);	
				console.log(c);	
				//    do{	
//						ii= ii +3;
				//		$(".homepage_banner").css("top", "80"-ii+"px");
						
				//    }while(c >= -80  );
					
				

		               });
              
	//return callback();
});