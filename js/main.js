var $body = $('body');
var $gas = $('.gascan');
var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

var $foot = $('.foot');
var $footprint = $(.'footprint');
var $foothover = $(.'foothover');

var fadeOut;
var fadeIn;


/*--Footstep--*/

$foothover.on('click', function() {
  $foot.toggleClass('foot-grow');
  fadeOut($(this));
});

$foothover.on('mouseout', function() {
  fadeIn();
})

function fadeOut (exclude) {
  $('svg').not(exclude).addClass('fade');
};

function fadeIn () {
  $('svg').removeClass('fade');
};





/*--Arrow--*/

$btnMove.on('click', function () {
  $diamond.toggleClass('btn-slide');
});


/*--Gas Spill--*/

$gascan.on('mouse-over', function() {
  $gascan.toggleClass('gas-tilt');
  fadeOut($(this).parents('svg'));
});

$gascan.on('mouse-out', function (){
  $gascan.removeClass('gas-tilt');
  fadeIn();
})
