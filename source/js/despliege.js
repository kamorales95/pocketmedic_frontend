$(".accordion-titulo").click(function(){
  event.preventDefault();
   var contenido=$(this).next(".accordion-content");

   if(contenido.css("display")=="none"){ //open
      contenido.slideDown(800);
      $(this).addClass("open");
   }
   else{ //close
      contenido.slideUp(800);
      $(this).removeClass("open");
  }

});
