//Check off
$("ul").on("click", "li", function(){
    //se tiver padrão 
//      if ($(this).css("color") //=== "rgb(0, 0, 0)"){
  //      //torne marcado
  //      $(this).css({
  //          textDecoration: 
  //"line-through"
   //         color: "red",
   //     });
   // //se não
   // }else{
   //     //desmarque e torne //padrão
   //     $(this).css({
   //         color: "black",
   //         textDecoration: //"none"
  //      });
 //  // }
//});
    $(this).toggleClass("completa")
});

//click em X delete
$("ul").on("click","span", function(event){
    $(this).parent().fadeOut(500,function(){ //parent esta selecionando li inteira
        $(this).remove;
    }); 
    event.stopPropagation()
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var novoTodo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span>X</span> " + novoTodo + "</li>")
    };
});
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})