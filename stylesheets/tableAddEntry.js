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
$(document).ready(function(){
  var $TABLE = $('#restaurantList');
  $(".table-add").click(function () {
    var $clone = $TABLE.find('tr.cloneTr').clone(true).removeClass('cloneTr');
    $TABLE.append($clone);  
  });
  $(".table-modify").click(function () {
    var $btn1 = $(".table-modify");
    $btn1.removeClass('table-modify');
    $btn1.addClass("table-save");  
    $(".table-save").click(function () {
    console.log("111");
    var $btn2 = $(".table-save");    
    console.log("222");   
    console.log($btn2);
    $btn2.removeClass('table-save');
    console.log("333");    
    console.log($btn2);
    $btn2.addClass("table-modify");
    console.log("444");
    console.log($btn2);
    });
  });
  $('.table-remove').click(function () {
    $(this).parents('tr').detach();
  });  
});
