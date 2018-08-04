function createGrid(){
  var inputHeight = $('#input_height').val();
  var inputWidth= $('#input_width').val();
  var container = $('.container');
  container.children().remove();
  for(var r=0; r<inputWidth; r++) {
    container.append('<tr></tr>');
  }

  for(var c=0; c<inputHeight;c++) {
    $("tr").append('<td></td>');
    $("td").addClass("grids");
    $('#error').hide();
  } 
}

$("#sub").click(function() {
  // var inputHeight = $('#input_height').val();
  // var inputWidth= $('#input_width').val();
  if($('#input_height').val() === '' || $('#input_width').val() === '') {
     $('#error').show();
     }  else {
  createGrid();
  resetGrid();
     }
});

$("#reset").click(function() {
  $('#input_height').val('');
  $('#input_width').val('');
  $('.container').children().remove();
   resetGrid();
});

$('table').click(function(event){
   event.target.style.background = $('#colorPicker').val();
  console.log(event.target);
});


function resetGrid() {
  if($('.grids').is(":visible")) {
     $('#reset').show();
     $('#sub').hide();
     } else {
      $('#reset').hide();
      $('#sub').show();
     }
}

$(document).ready(function(){
  resetGrid();
  $('#error').css('display', 'none');
})