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
    $(".table-modify").addClass('hide');
    $(".table-save").removeClass('hide');
    $(".editableCell").each(function() {$( this ).attr("contenteditable","true");});
    $(".deletable").each(function() {$( this ).addClass('hide');});
  });
  $(".table-save").click(function () {
    $(".table-save").addClass('hide');
    $(".table-modify").removeClass('hide');  
    $(".editableCell").each(function() {$( this ).attr("contenteditable","false");});    
    $(".deletable").each(function() {$( this ).addClass('hide');});
  });
  $('.table-remove').click(function () {
    $(this).parents('tr').detach();
  });  
});
