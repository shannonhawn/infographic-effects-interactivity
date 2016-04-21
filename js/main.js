var $body = $('body');
var $btnMove = $('.btn-move');
var $diamond = $('.diamond');
var $gas = $('.gascan');

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


$btnMove.on('click', function () {
  $diamond.toggleClass('btn-slide');
});

$gascan.on('mouse-over', function() {
  $gascan.toggleClass('gas-tilt');
  fadeOut($(this).parents('svg'));
});

$gascan.on('mouse-out', function (){
  $gascan.removeClass('gas-tilt');
  fadeIn();
})
