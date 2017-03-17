(function() {
  // anything smaller than 529 should change
    $('#mobileCard').hide();
    var windowWidth = $(window).width();
  // check one when first open window

  if ( windowWidth < 529 ) {
    $('#main_content').hide();
    $('#mobileCard').show();
  }

  // Looks for window resize function
  $( window ).resize(function() {
    var windowWidth = $(window).width();
    if (windowWidth < 600) {
      $('#main_content').hide();
      $('#mobileCard').show();
    } else if (windowWidth >= 600) {
      $('#mobileCard').hide();
      $('#main_content').show();
    }

  });


  // $('.content_container').css( 'width', '600px' );
  // $('.content').css( 'width', '90%' );
  //
  // var leadHeight = $('#lead').height();
  // $('.slave').css( 'height', leadHeight );
  //
  //
  // if ( $(window).width() < 1350 ) {
  //   $('#wall').css( 'justify-content', 'space-around' );
  //   $('.content_container').css( 'width', '100%' );
  //   $('.content').css( 'width', '90%' );
  // }
  //
  // // LOOKS FOR WINDOW SIZE TO DETERMINE FLEXBOX SIZE AND DIV SIZE

  // // **************************************************************

}());
