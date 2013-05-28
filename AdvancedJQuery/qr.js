(function( $ ) {

    $.fn.qrify = function(options) {
        var settings = $.extend({}, $.fn.qrify.options, options);

        return this.each(function() {
            var $this = $(this);
            href = $this.attr("href");
            encoded = encodeURI(href);
            url = "https://chart.googleapis.com/chart?chs=" +
                settings.width + "x" + settings.height +
                "&cht=qr&chl="...
    };
    
    $.fn.qrify.options = {
        width: 150,
        height: 150
    };


}( jQuery) );
