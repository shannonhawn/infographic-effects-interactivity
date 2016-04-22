var $body = $('body');
var $gascan = $('#gascan');
var $arrowshoot = $('#arrow-section');
var $roundcar = $('#roundcar');
var $foot = $('#footprint')

var fadeOut;
var fadeIn;

/* --Footstep--*/

$arrowshoot.on('click', function () {
  $arrowshoot.toggleClass('arrow-shoot');
  $foot.toggleClass('footprint');
});


/* --Gas Spill--*/

$gascan.on('mouse-over', function () {
  $gascan.toggleClass('gas-tilt');
  fadeIn();
});

$gascan.on('mouse-out', function () {
  $gascan.removeClass('gas-tilt');
  fadeOut();
});

/* --Car Drive--*/

$roundcar.on('click', function () {
  $roundcar.toggleClass('roundcar');
});
