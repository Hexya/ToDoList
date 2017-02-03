// (function($){
//     $('#container2').submit(function(e){
//         var val = $('#in').val();
//         $('ul.list').append('<li>' + val + '</li>');
//         e.preventDefault();
//     });
// })(jQuery);

$("ul").on("click","li",function(){
  $(this).toggleClass("completed")//recup le click pour barrer lier a completed dans css
});
$("ul").on("click","span",function(event){ // delete
  $(this).parent().fadeOut(500,function(){ // fadeout degradé
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
  if(event.which === 13){ // 13 = Entré
  var todoText = $(this).val(); //recup new valeur
  $(this).val("");
  $("ul").append("<li><span><i class='fa fa-trash-o'></i> </span>"+ todoText + "</li>")
}
});
$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});
