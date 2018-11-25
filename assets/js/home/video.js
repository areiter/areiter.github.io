!function(t,n){"function"==typeof define&&define.amd?define(["jquery"],function(e){return n(t,e)}):"object"==typeof exports?n(t,require("jquery")):n(t,t.jQuery||t.Zepto)}(this,function(t,n){"use strict";function e(t){if(E&&"none"===t.css("animation-name")&&"none"===t.css("-webkit-animation-name")&&"none"===t.css("-moz-animation-name")&&"none"===t.css("-o-animation-name")&&"none"===t.css("-ms-animation-name"))return 0;var n,e,a,i,o=t.css("animation-duration")||t.css("-webkit-animation-duration")||t.css("-moz-animation-duration")||t.css("-o-animation-duration")||t.css("-ms-animation-duration")||"0s",s=t.css("animation-delay")||t.css("-webkit-animation-delay")||t.css("-moz-animation-delay")||t.css("-o-animation-delay")||t.css("-ms-animation-delay")||"0s",r=t.css("animation-iteration-count")||t.css("-webkit-animation-iteration-count")||t.css("-moz-animation-iteration-count")||t.css("-o-animation-iteration-count")||t.css("-ms-animation-iteration-count")||"1";for(o=o.split(", "),s=s.split(", "),r=r.split(", "),i=0,e=o.length,n=Number.NEGATIVE_INFINITY;i<e;i++)(a=parseFloat(o[i])*parseInt(r[i],10)+parseFloat(s[i]))>n&&(n=a);return n}function a(){if(n(document.body).height()<=n(window).height())return 0;var t,e,a=document.createElement("div"),i=document.createElement("div");return a.style.visibility="hidden",a.style.width="100px",document.body.appendChild(a),t=a.offsetWidth,a.style.overflow="scroll",i.style.width="100%",a.appendChild(i),e=i.offsetWidth,a.parentNode.removeChild(a),t-e}function i(){if(!N){var t,e,i=n("html"),o=l("is-locked");i.hasClass(o)||(e=n(document.body),t=parseInt(e.css("padding-right"),10)+a(),e.css("padding-right",t+"px"),i.addClass(o))}}function o(){if(!N){var t,e,i=n("html"),o=l("is-locked");i.hasClass(o)&&(e=n(document.body),t=parseInt(e.css("padding-right"),10)-a(),e.css("padding-right",t+"px"),i.removeClass(o))}}function s(t,n,e,a){var i=l("is",n),o=[l("is",O.CLOSING),l("is",O.OPENING),l("is",O.CLOSED),l("is",O.OPENED)].join(" ");t.$bg.removeClass(o).addClass(i),t.$overlay.removeClass(o).addClass(i),t.$wrapper.removeClass(o).addClass(i),t.$modal.removeClass(o).addClass(i),t.state=n,!e&&t.$modal.trigger({type:n,reason:a},[{reason:a}])}function r(t,a,i){var o=0,s=function(t){t.target===this&&o++},r=function(t){t.target===this&&0==--o&&(n.each(["$bg","$overlay","$wrapper","$modal"],function(t,n){i[n].off(v+" "+$)}),a())};n.each(["$bg","$overlay","$wrapper","$modal"],function(t,n){i[n].on(v,s).on($,r)}),t(),0===e(i.$bg)&&0===e(i.$overlay)&&0===e(i.$wrapper)&&0===e(i.$modal)&&(n.each(["$bg","$overlay","$wrapper","$modal"],function(t,n){i[n].off(v+" "+$)}),a())}function d(t){t.state!==O.CLOSED&&(n.each(["$bg","$overlay","$wrapper","$modal"],function(n,e){t[e].off(v+" "+$)}),t.$bg.removeClass(t.settings.modifier),t.$overlay.removeClass(t.settings.modifier).hide(),t.$wrapper.hide(),o(),s(t,O.CLOSED,!0))}function c(t){var n,e,a,i,o={};for(t=t.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,","),n=t.split(","),i=0,e=n.length;i<e;i++)n[i]=n[i].split(":"),a=n[i][1],("string"==typeof a||a instanceof String)&&(a="true"===a||"false"!==a&&a),("string"==typeof a||a instanceof String)&&(a=isNaN(a)?a:+a),o[n[i][0]]=a;return o}function l(){for(var t=g,n=0;n<arguments.length;++n)t+="-"+arguments[n];return t}function m(){var t,e,a=location.hash.replace("#","");if(a){try{e=n("[data-"+h+'-id="'+a+'"]')}catch(t){}e&&e.length&&(t=n[h].lookup[e.data(h)])&&t.settings.hashTracking&&t.open()}else p&&p.state===O.OPENED&&p.settings.hashTracking&&p.close()}function u(t,e){var a=n(document.body),i=this;i.settings=n.extend({},C,e),i.index=n[h].lookup.push(i)-1,i.state=O.CLOSED,i.$overlay=n("."+l("overlay")),i.$overlay.length||(i.$overlay=n("<div>").addClass(l("overlay")+" "+l("is",O.CLOSED)).hide(),a.append(i.$overlay)),i.$bg=n("."+l("bg")).addClass(l("is",O.CLOSED)),i.$modal=t.addClass(g+" "+l("is-initialized")+" "+i.settings.modifier+" "+l("is",O.CLOSED)).attr("tabindex","-1"),i.$wrapper=n("<div>").addClass(l("wrapper")+" "+i.settings.modifier+" "+l("is",O.CLOSED)).hide().append(i.$modal),a.append(i.$wrapper),i.$wrapper.on("click."+g,"[data-"+h+'-action="close"]',function(t){t.preventDefault(),i.close()}),i.$wrapper.on("click."+g,"[data-"+h+'-action="cancel"]',function(t){t.preventDefault(),i.$modal.trigger(y.CANCELLATION),i.settings.closeOnCancel&&i.close(y.CANCELLATION)}),i.$wrapper.on("click."+g,"[data-"+h+'-action="confirm"]',function(t){t.preventDefault(),i.$modal.trigger(y.CONFIRMATION),i.settings.closeOnConfirm&&i.close(y.CONFIRMATION)}),i.$wrapper.on("click."+g,function(t){n(t.target).hasClass(l("wrapper"))&&i.settings.closeOnOutsideClick&&i.close()})}var p,f,h="remodal",g=t.REMODAL_GLOBALS&&t.REMODAL_GLOBALS.NAMESPACE||h,v=n.map(["animationstart","webkitAnimationStart","MSAnimationStart","oAnimationStart"],function(t){return t+"."+g}).join(" "),$=n.map(["animationend","webkitAnimationEnd","MSAnimationEnd","oAnimationEnd"],function(t){return t+"."+g}).join(" "),C=n.extend({hashTracking:!0,closeOnConfirm:!0,closeOnCancel:!0,closeOnEscape:!0,closeOnOutsideClick:!0,modifier:""},t.REMODAL_GLOBALS&&t.REMODAL_GLOBALS.DEFAULTS),O={CLOSING:"closing",CLOSED:"closed",OPENING:"opening",OPENED:"opened"},y={CONFIRMATION:"confirmation",CANCELLATION:"cancellation"},E=function(){var t=document.createElement("div").style;return t.animationName!==undefined||t.WebkitAnimationName!==undefined||t.MozAnimationName!==undefined||t.msAnimationName!==undefined||t.OAnimationName!==undefined}(),N=/iPad|iPhone|iPod/.test(navigator.platform);u.prototype.open=function(){var t,e=this;e.state!==O.OPENING&&e.state!==O.CLOSING&&(t=e.$modal.attr("data-"+h+"-id"),t&&e.settings.hashTracking&&(f=n(window).scrollTop(),location.hash=t),p&&p!==e&&d(p),p=e,i(),e.$bg.addClass(e.settings.modifier),e.$overlay.addClass(e.settings.modifier).show(),e.$wrapper.show().scrollTop(0),e.$modal.focus(),r(function(){s(e,O.OPENING)},function(){s(e,O.OPENED)},e))},u.prototype.close=function(t){var e=this;e.state!==O.OPENING&&e.state!==O.CLOSING&&(e.settings.hashTracking&&e.$modal.attr("data-"+h+"-id")===location.hash.substr(1)&&(location.hash="",n(window).scrollTop(f)),r(function(){s(e,O.CLOSING,!1,t)},function(){e.$bg.removeClass(e.settings.modifier),e.$overlay.removeClass(e.settings.modifier).hide(),e.$wrapper.hide(),o(),s(e,O.CLOSED,!1,t)},e))},u.prototype.getState=function(){return this.state},u.prototype.destroy=function(){var t,e=n[h].lookup;d(this),this.$wrapper.remove(),delete e[this.index],0===(t=n.grep(e,function(t){return!!t}).length)&&(this.$overlay.remove(),this.$bg.removeClass(l("is",O.CLOSING)+" "+l("is",O.OPENING)+" "+l("is",O.CLOSED)+" "+l("is",O.OPENED)))},n[h]={lookup:[]},n.fn[h]=function(t){var e,a;return this.each(function(i,o){a=n(o),null==a.data(h)?(e=new u(a,t),a.data(h,e.index),e.settings.hashTracking&&a.attr("data-"+h+"-id")===location.hash.substr(1)&&e.open()):e=n[h].lookup[a.data(h)]}),e},n(document).ready(function(){n(document).on("click","[data-"+h+"-target]",function(t){t.preventDefault();var e=t.currentTarget,a=e.getAttribute("data-"+h+"-target"),i=n("[data-"+h+'-id="'+a+'"]');n[h].lookup[i.data(h)].open()}),n(document).find("."+g).each(function(t,e){var a=n(e),i=a.data(h+"-options");i?("string"==typeof i||i instanceof String)&&(i=c(i)):i={},a[h](i)}),n(document).on("keydown."+g,function(t){p&&p.settings.closeOnEscape&&p.state===O.OPENED&&27===t.keyCode&&p.close()}),n(window).on("hashchange."+g,m)})}),$(document).ready(function(){$(document).on("closed",".remodal",function(){$("[data-remodal-id]").remove()}),$("[video-modal]").on("click",function(){$("[data-remodal-id]").remove();var t=$("#video-modal-template").html();$(t).find("iframe").attr("src","https://www.youtube.com/embed/"+$(this).attr("video-modal")+"?autoplay=1").end().appendTo("body").remodal().open()})});