(function( $ ) {
  $( document ).ready(function() {

    var headerHeight = $("#feature_prisma_layouts_base > #feature_prisma_layouts_base_header").outerHeight();
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if(scroll > headerHeight) {
        $("#feature_prisma_layouts_base > #feature_prisma_layouts_base_header").addClass("animated");
      } else {
        $("#feature_prisma_layouts_base > #feature_prisma_layouts_base_header").removeClass("animated");
      }
    });

    if( $( window ).width() < 768 ) {
      mobile();
    }

  });

  var mobile = function() {
    $( "table" ).wrap( "<div class='table-scroll'></div>" );

    // Menu
    $("body > div > header ul.menu > li a, body > div > header ul.menu > li span").click(function(e) {
      if( $(this).parent("li").hasClass("opened") ) {
        $(this).parent("li").toggleClass("opened");
        $(this).next("ul.menu").slideToggle( "fast" );

        return false;
      }

      $("body > div > header ul.menu li.opened ul.menu").slideToggle( "fast" );
      $("body > div > header ul.menu li").removeClass("opened");
      if( $(this).next("ul.menu").length > 0 ) {

        $(this).parent("li").toggleClass("opened");
        $(this).next("ul.menu").slideToggle( "fast" );
        
        return false;
      }
    });
  };

})(jQuery);;
