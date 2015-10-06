/*$(document).ready(function(){
  $(".button").click(function () {
    $("#sForm").toggleClass("open");   
  });
  $(".controlTd").click(function () {
    $(this).children(".settingsIcons").toggleClass("display"); 
    $(this).children(".settingsIcon").toggleClass("openIcon"); 
  });
});*/
$(document).ready(function(){
  function updateText(event){
    var input=$(this);
    setTimeout(function(){
      var val=input.val();
      if(val!="")
        input.parent().addClass("floating-placeholder-float");
      else
        input.parent().removeClass("floating-placeholder-float");
    },1)
  }
  $(".floating-placeholder input").keydown(updateText);
  $(".floating-placeholder input").change(updateText);
  $(".table-add").click(function () { 
    var $clone = $TABLE.find('tr.hide').clone(true).removeClass('hide table-line');
    $TABLE.find('table').append($clone);
  });
  $('.table-remove').click(function () {
  $(this).parents('tr').detach();
});
});
