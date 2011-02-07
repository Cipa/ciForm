(function($){
    $.fn.extend({
        ciform: function(options) {
 
            var defaults = {};
             
            var options = $.extend(defaults, options);
         	
         	return this.each(function() {
                  
                  var obj = $(this);

                  $('input[type=text]', obj).addClass('ciText');
                  $('select', obj).addClass('ciSelect');
                  $('textarea', obj).addClass('ciTextarea');
                  $('input[type=submit]', obj).addClass('ciSubmit');
                  $('input[type=reset]', obj).addClass('ciReset');
                  $('input[type=button]', obj).addClass('ciButton');
                  
            });
        }
    });
})(jQuery);