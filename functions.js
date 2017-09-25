var $document = $(document),
		windowHeight = $(window).height(),
		windowWidth = $(window).width();

$(document).ready(function() {
    $("#about-link").click(function(){
   	$("#about").fadeToggle(1000);
    $("#music").fadeToggle(1000);
    $("#work-nav").fadeToggle(1000);
//  	$("#about2").toggleClass("active");
    $("body").toggleClass("body-active");
    $("#contact").toggleClass("contact-active");
  	$(this).text(function(i, text){
      return text === "close x" ? "about me" : "close x";
    });
  });
    
    
	$(".scroll").click(function(event){		
	event.preventDefault();
	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1200);
	});
});

