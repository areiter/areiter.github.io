/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/
!function(t){t.fn.fitText=function(e,n){var i=e||1,o=t.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY},n);return this.each(function(){var e=t(this),n=function(){e.css("font-size",Math.max(Math.min(e.width()/(10*i),parseFloat(o.maxFontSize)),parseFloat(o.minFontSize)))};n(),t(window).on("resize.fittext orientationchange.fittext",n)})}}(jQuery),$(document).ready(function(){$(".Me-blurb h3").fitText(1.5),$(".Me-blurb h4").fitText(2)});