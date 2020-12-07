const prva = $('#prvaFoto');
const poslednja =$('#poslednjaFoto');

$(document).ready(function(){
    $('.sledeca').on('click', function(){
      var trenutnaF = $('.prikazana');
      var sledecaF = trenutnaF.next();
  
      if(!sledecaF.length){
        sledecaF=prva;
     }       
       trenutnaF.removeClass('prikazana');
       sledecaF.addClass('prikazana');
     
    });
  
    $('.prethodna').on('click', function(){
      var trenutnaF = $('.prikazana');
      var prethodnaF = trenutnaF.prev();
  
      if(!prethodnaF.length ){
        prethodnaF=poslednja;
      }
      trenutnaF.removeClass('prikazana');
      prethodnaF.addClass('prikazana');
    });
  });
  