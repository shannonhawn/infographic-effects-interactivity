var $body = $('body');
var $gascan = $('.gascan');

var $arrowshoot = $('.arrow-shoot');


var fadeOut;
var fadeIn;


/*--Footstep--*/

$arrowshoot.on('click', function() {
  $arrowshoot.toggleClass('arrow-shoot');
});

$arrowshoot.on('mouseout', function() {
  $arrowshoot.removeClass('arrow-shoot');
})


/*--Gas Spill--*/

$gascan.on('mouse-over', function() {
  $gascan.toggleClass('gas-tilt');
  fadeOut();
});

$gascan.on('mouse-out', function (){
  $gascan.removeClass('gas-tilt');
  fadeIn();
})
