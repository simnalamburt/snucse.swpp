$(function() {
  $('#login').click(function() {
    var obj = {
      id: $('#id').val(),
      passwd: $('#passwd').val()
    };

    $.post('/login', obj)
    .done(function(res) {
      location.href = '/welcome';
    });
  });

  $('#join').click(function() {
    var obj = {
      id: $('#id').val(),
      passwd: $('#passwd').val()
    };

    $.post('/signup', obj)
    .done(function(res) {
      location.href = '/welcome';
    });
  });
});
