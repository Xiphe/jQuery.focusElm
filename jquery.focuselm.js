/**
 * Focus Elements v1.0.1
 * Enables focus/blur callbacks for every dom element
 *
 * Author Hannes Diercks, Hamburg 2012
 */
;(function($){
	"use strict";
	// initiate the plugin.
	$.fn.focusElm = function(fcb, bcb) {
		var tz = this, // the element(s), the plugin was called on.
			f = []; // will contain the focused elements.
		
		// catch all clicks on the window.
		$(window).click(function(e) {
			// shorter variable name for e.target
			var t = e.target;

			// for each element in the focus array...
			$.each(f, function(k,v) {
				// ...if it is not the current click target.
				if(v !== t) {
					// check if the blur callback is a valid function
					if(typeof bcb === 'function') {
						// do the callback
						bcb.call(v);
					}
					// delete the focus entry.
					f.splice(k,1);
				}
			});

			// for each element...
			$.each(tz, function() {
				// ...check if it is equivalent to the current click target
				// and if it was not focused before.
				if(t === this && f[0] !== this) {
					// push it to the focus array.
					f.push(this);
					// check if the focus callback is a valid function.
					if(typeof fcb === 'function') {
						// do the callback.
						fcb.call(this);
					}
				}
			});
			
		});
	};
})(jQuery);