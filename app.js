!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){var r=n(1);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"html, body {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    background-color: lightgrey;\n}\n\n.container {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n}\n\ncanvas {\n    align-self: center;\n    margin: auto;\n    width: 90vh;\n    height: 90vh;\n}",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){var r={},o=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),s=null,a=0,u=[],c=n(4);function f(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=r[o.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](o.parts[s]);for(;s<o.parts.length;s++)i.parts.push(v(o.parts[s],e))}else{var a=[];for(s=0;s<o.parts.length;s++)a.push(v(o.parts[s],e));r[o.id]={id:o.id,refs:1,parts:a}}}}function l(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function p(t,e){var n=i(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function d(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function h(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),y(e,t.attrs),p(t,e),e}function y(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function v(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var u=a++;n=s||(s=h(e)),r=m.bind(null,n,u,!1),o=m.bind(null,n,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),p(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=c(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),o=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){d(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=l(t,e);return f(n,e),function(t){for(var o=[],i=0;i<n.length;i++){var s=n[i];(a=r[s.id]).refs--,o.push(a)}t&&f(l(t,e),e);for(i=0;i<o.length;i++){var a;if(0===(a=o[i]).refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete r[a.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function m(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=b(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){"use strict";function r(t){Object.assign(this,t),this.pupil=Object.assign({},t.center),this.focus=Object.assign({},t.center),this.irisData=r.irisData(t.hue||200)}n.r(e),r.prototype.speed=10;const o=100,i=25,s=50;r.prototype.draw=function(){const{context:t,center:e,pupil:n,radius:r=o,pupilRadius:s=i}=this;t.fillStyle="white",t.shadowBlur=8,t.shadowColor="gray",t.beginPath(),t.ellipse(e.x,e.y,r,r,0,0,2*Math.PI),t.fill(),t.shadowBlur=0,this.drawIris(),t.fillStyle="black",t.beginPath(),t.ellipse(n.x,n.y,s,s,0,0,2*Math.PI),t.fill()},r.prototype.update=function(){const t=this.focusVector();this.pupil={x:this.pupil.x+t.x,y:this.pupil.y+t.y},this.draw()},r.prototype.focusVector=function(){const{focus:t,center:e,pupil:n,radius:i=o,irisRadius:a=s}=this,u=i-a,c={};if(r.distance(e,t)>u){const n=t.x-e.x,r=t.y-e.y,o=Math.sqrt(Math.abs(Math.pow(n,2)+Math.pow(r,2)));c.x=e.x+n/o*u,c.y=e.y+r/o*u}else c.x=t.x,c.y=t.y;const f=c.x-n.x,l=c.y-n.y,p=Math.sqrt(Math.abs(Math.pow(f,2)+Math.pow(l,2)));return 0===p?{x:0,y:0,magnitude:0}:p<this.speed?{x:c.x-n.x,y:c.y-n.y}:{x:f/p*this.speed,y:l/p*this.speed}},r.prototype.drawIris=function(){const{context:t,pupil:e,irisRadius:n}=this;t.beginPath(),t.shadowBlur=2,t.shadowColor="black",t.ellipse(e.x,e.y,n,n,0,0,2*Math.PI),t.fill(),t.shadowBlur=0,t.moveTo(e.x,e.y+n),this.irisData.forEach(function(r){t.fillStyle=r[0];let o=Math.sin(r[1]),i=Math.cos(r[1]),s=e.x+n*o,a=e.y+n*i;t.beginPath(),t.lineTo(s,a),o=Math.sin(r[2]),i=Math.cos(r[2]),s=e.x+n*o,a=e.y+n*i,t.lineTo(s,a),t.lineTo(e.x,e.y),t.fill()})},r.distance=function(t,e){const n=e.x-t.x,r=e.y-t.y;return Math.sqrt(Math.abs(n*n+r*r))},r.irisData=function(t=200,e=50,n=50){let r=0;const o=Math.PI/24,i=[];for(;r<2*Math.PI;)i.push([`hsl(${t},${e-15+30*Math.random()}%,${n-15+30*Math.random()}%)`,r,r+o]),r+=o;return i};n(0);window.onload=function(){const t=function(){const t=document.querySelector("#canvas"),e=t.offsetHeight,n=t.offsetWidth;return t.setAttribute("width",`${n}px`),t.setAttribute("height",`${e}px`),t}(),e=t.getContext("2d"),n=[],o=t.offsetWidth,i=(t.offsetHeight,(o-480)/2);for(let t=0;t<5;t+=1)for(let o=0;o<5;o+=1){const s=new r({context:e,center:{x:120*t+i,y:120*o+i},radius:50,irisRadius:25,pupilRadius:12,hue:Math.floor(360*Math.random())});n.push(s)}t.onmousemove=function(t){const{x:e,y:r,target:o}=t;n.forEach(function(t){t.focus={x:e-o.offsetLeft,y:r-o.offsetTop}})},t.onmouseenter=function(t){const{x:e,y:r}=t;n.forEach(function(t){t.speed=Math.round(1+5*Math.random())})},t.onmouseleave=function(t){n.forEach(function(t){t.speed=.5,t.focus={x:t.center.x,y:t.center.y}})},requestAnimationFrame(function t(){e.clearRect(0,0,1e3,1e3),n.forEach(function(t){t.update()}),requestAnimationFrame(t)})}}]);