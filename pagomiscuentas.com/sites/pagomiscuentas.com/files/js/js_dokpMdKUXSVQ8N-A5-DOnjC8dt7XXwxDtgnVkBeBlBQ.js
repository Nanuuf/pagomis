(function($) {
  $( "a#main-menu-nav-open-btn, a#main-menu-nav-close-btn" ).click( function() { 
    $( "html" ).toggleClass( "js-nav" );
    return false;
  });
})(jQuery);;
