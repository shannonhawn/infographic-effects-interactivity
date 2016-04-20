
var $roundcar = $('.roundcar');
var $graph = $('.graph');
var $gas = $('.gas');
var $speech = $('.speech');
var $arrow = $('.arrow');

$('.arrow').on('mouseover', function() {
  $('.arrowPointer').addClass('colourArrow');
});

$('.arrow').on('mouseout', function() {
  $('.arrowPointer').removeClass('colourArrow');
});
