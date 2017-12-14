$(document).ready(function(){

  $('.home').hide();
//Vista splash
	setTimeout(function(){ 
		 $('#splash').fadeOut(500);
     $('.home').show();
		}, 4000);


//Esconder fotos que no están en home
  $('.peruana, .chilena, .japonesa, .italiana, .vegetariana').hide();

//Función peruana
  $('.op-peruana').click(function(){
    $('img').hide();
    $('.peruana, .peruana-home').fadeIn();
  });
//Función chilena
  $('.op-chilena').click(function(){
    $('img').hide();
    $('.chilena, .chilena-home').fadeIn();
  });
//Función japonesa
  $('.op-japonesa').click(function(){
    $('img').hide();
    $('.japonesa, .japonesa-home').fadeIn();
  });
//Función vegetariana
  $('.op-vegetariana').click(function(){
    $('img').hide();
    $('.vegetariana, .vegetariana-home').fadeIn();
  });
//Función pastas
  $('.op-pastas').click(function(){
    $('img').hide();
    $('.italiana, .italiana-home').fadeIn();
  });

//Función zoom
  $('.zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });

});