jQuery - Focus for Elements
===========================

Author: Hannes Diercks  
Version: 1.0.1  
Date: 2012-05-23 17:12:00  


*----------------------------------------------------------------------------  
"THE BEER-WARE LICENSE" (Revision 42.5):  
Hannes Diercks <xiphe@gmx.de> wrote this file.  
If we meet some day, and you think this stuff is worth it, you can buy me a beer in return.  
----------------------------------------------------------------------------*



Description
-----------

Enables focus/blur callbacks for every dom element.  




Usage
-----

Just call $(element).focusElm( focusCallback(), blurCallback() );  
See demo.html or http://jsfiddle.net/f2pDE/18/  




Changelog
---------

### 1.0.1:  
- Added Documentation
- Changed focus storage to internal
- Callback functions will now be checked if they are functions so you are able to just use one of the callback function ( $('.foo').focusElm( null, function() { alert('element blured'); } ); ).
- Code checked via http://www.jshint.com/
- Basic Twitter Bootstrap styling for demo.html