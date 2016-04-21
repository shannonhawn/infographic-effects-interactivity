var $body = $('body');

$('html').on('keydown', function (e) {
  var $foot;

  if (e.keyCode == 32) {
    $foot = $('<div>');
    $foot.addClass('foot');
    $foot.css({
      'top': Math.random() * (document.documentElement.clientHeight - 100),
      'left': Math.random() * (document.documentElement.clientHeight - 100)
    });
    $body.append($foot);
  }
});

  $body.on('click', '.foot', function () {
    $(this).addClass('is-walking');
  });

  $body.on('transition', '.foot', function () {
    $(this).remove();
  });
