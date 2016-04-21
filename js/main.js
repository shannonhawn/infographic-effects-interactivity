var $body = $('body');
var $gas = $('.gascan');
var $arrow = $('.arrow');

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

$arrow.waypoint(function() {
  $arrow.addClass('js-appear-animate');
}, { offset: '75%'});


/*--Gas Spill--*/

$gascan.on('mouse-over', function() {
  $gascan.toggleClass('gas-tilt');
  fadeOut($(this).parents('svg'));
});

$gascan.on('mouse-out', function (){
  $gascan.removeClass('gas-tilt');
  fadeIn();
})
