(function() {
  $('.content_container').css( 'width', '600px' );
  $('.content').css( 'width', '90%' );

  var leadHeight = $('#lead').height();
  $('.slave').css( 'height', leadHeight );


  if ( $(window).width() < 1350 ) {
    $('#wall').css( 'justify-content', 'space-around' );
    $('.content_container').css( 'width', '100%' );
    $('.content').css( 'width', '90%' );
  }

  // LOOKS FOR WINDOW SIZE TO DETERMINE FLEXBOX SIZE AND DIV SIZE
  $( window ).resize(function() {
    var leadHeight = $('#lead').height();
    $('.slave').css( 'height', leadHeight );
    var windowWidth = $(window).width();
    if (windowWidth < 1350) {
      $('#wall').css( 'justify-content', 'space-around' );
      $('.content_container').css( 'width', '100%' );
      $('.content').css( 'width', '90%' );
    } else {
      $('#wall').css( 'justify-content', 'space-between' )
      $('.content_container').css( 'width', '600px' );
    }
  });
  // **************************************************************

}());
