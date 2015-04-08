$(function() {
  $('#login').click(function() {
    var obj = {
      id: $('#id').val(),
      passwd: $('#passwd').val()
    };

    $.post('/login', obj)
    .done(function(res) {
      console.log(res);
    });
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
