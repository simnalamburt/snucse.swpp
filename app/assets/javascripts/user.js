$(function() {
  $('#login').click(function() {
    var obj = {
      id: $('#id').val(),
      passwd: $('#passwd').val()
    };

    console.log(obj);
  });

  $('#join').click(function() {
    var obj = {
      id: $('#id').val(),
      passwd: $('#passwd').val()
    };

    console.log(obj);
  });
});
