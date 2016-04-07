(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $("#foo1").carouFredSel({
        width: "100%",
        height: 323,
        circular: false,
        infinite: false,
        pagination  : "#foo1_pag",
        auto    : false,
        items: {
            width: 360,
            height: 320,
        },
        scroll: {
            items: 1,
            duration: 1200,
            pauseOnHover: true
        },
        prev    : {
	        button  : "#foo1_prev",
	        key     : "left"
	    },
	    next    : {
	        button  : "#foo1_next",
	        key     : "right"
	    }
    });
    $("#foo2").carouFredSel({
        width: "100%",
        height: 303,
        circular: false,
        infinite: false,
        pagination  : "#foo2_pag",
        auto    : false,
        items: {
            width: 360,
            height: 330
        },
        scroll: {
            items: 1,
            duration: 1200,
            pauseOnHover: true
        },
        prev    : {
            button  : "#foo2_prev",
            key     : "left"
        },
        next    : {
            button  : "#foo2_next",
            key     : "right"
        }
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space