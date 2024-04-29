;
(function( $ ) {
  Drupal.behaviors.mybehavior_header = {
    attach: function( context, settings ) {

      // ANIMATIONS
      $( ".animate", context ).once( "mybehavior_header", function() {
        if ( $( window ).width() > 768 ) {
          $( this ).scrollex({
            initialize: function() {
              $( "body" ).removeClass( "no-animation" );
            },
            enter: function() {
              $( this ).addClass( "animated " + this.data( "animation" ) );
            }
          });
        }
      });

    }
  };
})( jQuery );;
;
