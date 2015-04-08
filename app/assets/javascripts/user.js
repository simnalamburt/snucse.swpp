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

    $.post('/signup', obj)
    .done(function(res) {
      console.log(res);
    });
  });
});
