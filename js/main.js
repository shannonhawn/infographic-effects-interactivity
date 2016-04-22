var $body = $('body');
var $gascan = $('#gascan');
var $arrowshoot = $('#arrow-section');
var $foot = $('#footprint');
var $roundcar = $('#roundcar');

var fadeOut;
var fadeIn;

/* --Gas Spill--*/

$gascan.on('mouseover', function () {
  $gascan.toggleClass('gas-tilt');
});

$gascan.on('mouseout', function () {
  $gascan.removeClass('gas-tilt');
});

/* --Footstep--*/

$arrowshoot.on('click', function () {
  $arrowshoot.toggleClass('arrow-shoot');
  $foot.toggleClass('footprint');
});

/* --Car Drive--*/

$roundcar.on('click', function () {
  $roundcar.toggleClass('roundcar');
});
