$(function() {
  function error(msg) {
    $('#msg').text(msg);
  }

  $('#login').click(function() {
    var obj = {
      id: $('#id').val(),
      passwd: $('#passwd').val()
    };

    $.post('/login', obj)
    .done(function(res) {
      location.href = '/welcome';
    })
    .fail(function() {
      error('Invalid username and password combination. Please try again.');
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
    })
    .fail(function(e) {
      switch(e.responseJSON.error_code) {
        case -1:
          msg = 'The user name should be 5~20 characters long. Please try again.'
          break;
        case -2:
          msg = 'The password should be 8~20 characters long. Please try again.'
          break;
        case -3:
          msg = 'This user name already exists. Please try again.'
          break;
      }
      error(msg);
    });
  });
});
