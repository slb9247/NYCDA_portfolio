$(document).ready(function() {
    $('#photo1').hover(
      function() {
        $('div.hide1').toggleClass('show');
      }
    ),
    $('#photo2').hover(
      function() {
        $('div.hide2').toggleClass('show');
      }
    ),
    $('#photo3').hover(
      function() {
        $('div.hide3').toggleClass('show');
      }
    ),
    $('#photo4').hover(
      function() {
        $('div.hide4').toggleClass('show');
      }
    ),
    $('#photo5').hover(
      function() {
        $('div.hide5').toggleClass('show');
      }
    ),
    $('#photo6').hover(
      function() {
        $('div.hide6').toggleClass('show');
      }
    );

    $('#masthead').fadeIn(1500);
});
