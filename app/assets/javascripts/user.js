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

    $.post('/signup')
    .done(function(res) {
      console.log('AJAX 요청이 끝나서 잘 돌아왔따');
      console.log(res);
    });
  });
});
