var $body = $('body');
var $licence = $('#licence');
var $arrowshoot = $('#arrow-section');
var $foot = $('#footprint');
var $roundcar = $('#roundcar');

var fadeOut;
var fadeIn;

/* --Gas Spill--*/

$licence.on('mouseover', function () {
  $licence.toggleClass('gas-tilt');
});

$licence.on('mouseout', function () {
  $licence.removeClass('gas-tilt');
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
