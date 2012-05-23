/**
 * Focus Elements v1.0.0
 * Enables focus/blur callbacks for every dom element
 *
 * Author Hannes Diercks, Hamburg 2012
 */
;(function($) {
$.fn.focusElm = function( focusCB, blurCB ) {
    if( typeof $.fn.focusElm.focused != 'object' ) {
        $.fn.focusElm.focused = [];
    }
    var thiz = this,
        f = $.fn.focusElm.focused;
    
    $( window ).click( function( e ) {
        var t = e.target;
        $.each( thiz, function() {
            if( t === this && f[0] !== this ) {
                f.push( this );
                focusCB.call( this );
            }
        });
        for( k in f ) {
            if( f[k] !== t ) {
               blurCB.call( f[k] );
               delete f[k];
            }
        }
    });
}})(jQuery);