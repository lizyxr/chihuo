/*$(document).ready(function(){
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
  $(".button").click(function () {
    $("#sForm").toggleClass("open");   
  });
  $(".controlTd").click(function () {
    $(this).children(".settingsIcons").toggleClass("display"); 
    $(this).children(".settingsIcon").toggleClass("openIcon"); 
  });
  $(".floating-placeholder input").keydown(updateText);
  $(".floating-placeholder input").change(updateText);
});*/
/*$(document).ready(function(){*/
  var $TABLE = $('#restaurantList');
  $(".table-add").click(function () { 
    console.log($TABLE);
    var $clone = $TABLE.find('tr.hide').clone().removeClass('hide');
    console.log($clone);
    $TABLE.find('flatTable').append($clone);
    console.log($TABLE.find('flatTable'));
  });
  $('.table-remove').click(function () {
    $(this).parents('tr').detach();
  });
//});
