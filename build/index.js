module.exports=function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=5)}([function(t,e){t.exports=require("react")},function(t,e,o){t.exports=o(2)()},function(t,e,o){"use strict";var n=o(3);function r(){}t.exports=function(){function t(t,e,o,r,l,i){if(i!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return t}t.isRequired=t;var o={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return o.checkPropTypes=r,o.PropTypes=o,o}},function(t,e,o){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,o){!function(){"use strict";t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style&&!0!==t.__forceSmoothScrollPolyfill__)){var o=t.HTMLElement||t.Element,n=468,r={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:o.prototype.scroll||c,scrollIntoView:o.prototype.scrollIntoView},l=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,i=function(t){return new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(t)}(t.navigator.userAgent)?1:0;t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?y.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):r.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(f(arguments[0])?r.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):y.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==f(arguments[0])){var t=arguments[0].left,e=arguments[0].top;y.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==f(arguments[0])){var o=function(t){for(;t!==e.body&&!1===s(t);)t=t.parentNode||t.host;return t}(this),n=o.getBoundingClientRect(),l=this.getBoundingClientRect();o!==e.body?(y.call(this,o,o.scrollLeft+l.left-n.left,o.scrollTop+l.top-n.top),"fixed"!==t.getComputedStyle(o).position&&t.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):t.scrollBy({left:l.left,top:l.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function c(t,e){this.scrollLeft=t,this.scrollTop=e}function f(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function u(t,e){return"Y"===e?t.clientHeight+i<t.scrollHeight:"X"===e?t.clientWidth+i<t.scrollWidth:void 0}function a(e,o){var n=t.getComputedStyle(e,null)["overflow"+o];return"auto"===n||"scroll"===n}function s(t){var e=u(t,"Y")&&a(t,"Y"),o=u(t,"X")&&a(t,"X");return e||o}function p(e){var o,r,i,c=(l()-e.startTime)/n;o=function(t){return.5*(1-Math.cos(Math.PI*t))}(c=c>1?1:c),r=e.startX+(e.x-e.startX)*o,i=e.startY+(e.y-e.startY)*o,e.method.call(e.scrollable,r,i),r===e.x&&i===e.y||t.requestAnimationFrame(p.bind(t,e))}function y(o,n,i){var f,u,a,s,y=l();o===e.body?(f=t,u=t.scrollX||t.pageXOffset,a=t.scrollY||t.pageYOffset,s=r.scroll):(f=o,u=o.scrollLeft,a=o.scrollTop,s=c),p({scrollable:f,method:s,startTime:y,startX:u,startY:a,x:n,y:i})}}}}()},function(t,e,o){"use strict";o.r(e);var n=o(0),r=o.n(n);o(1);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}function c(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var s=r.a.createContext({addScrollRef:function(){},scrollTo:function(){},closestElement:""}),p=function(t){var e,o;return o=e=function(e){function o(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),f(this,u(o).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(o,r.a.Component),function(t,e,o){e&&c(t.prototype,e),o&&c(t,o)}(o,[{key:"render",value:function(){var e=this;return r.a.createElement(s.Consumer,null,function(o){return r.a.createElement(t,i({},e.props,{active:o.closestElement==e.props.target?"active":void 0}))})}}]),o}(),function(t,e,o){e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o}(e,"contextType",s),o};o(4);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var g=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),m(v(v(t=function(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?v(t):e}(this,d(e).call(this)))),"toggleClosestElement",function(e){t.state.closestElement!=e&&t.setState(function(o){return function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),n.forEach(function(e){m(t,e,o[e])})}return t}({},t.state,{closestElement:e})})}),m(v(v(t)),"handleScroll",function(){if("undefined"!==t.refRepo){var e=[],o="",n="";t.refRepo.map(function(t){if(t.ref){var o=t.ref.getBoundingClientRect(),n=o.top,r=o.bottom;n<window.innerHeight&&r>=0&&e.push({id:t.id,top:n-60,bottom:r})}}),e.length>0?(o=e.reduce(function(t,e){return t.top<e.top?t:e}),n=e.reduce(function(t,e){return Math.abs(e.top-window.innerHeight/2)<Math.abs(t.top-window.innerHeight/2)?e:t}),o.top<0&&t.toggleClosestElement(o.id),o.bottom<90&&o.top<0&&n.top<250&&t.toggleClosestElement(n.id)):t.toggleClosestElement("")}}),m(v(v(t)),"addScrollRef",function(e,o){t.refRepo||(t.refRepo=[]),o&&!t.refRepo.some(function(t){return t.id===e})&&t.refRepo.push({id:e,ref:o})}),m(v(v(t)),"scrollTo",function(e){var o=t.refRepo.find(function(t){return t.id===e});if(o){var n=o.ref.getBoundingClientRect().top;"undefined"!=typeof window&&window.scrollBy({top:n-60,left:0,behavior:"smooth"})}}),t.state={addScrollRef:t.addScrollRef,scrollTo:t.scrollTo,closestElement:""},t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(e,n["Component"]),function(t,e,o){e&&b(t.prototype,e),o&&b(t,o)}(e,[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){"undefined"!=typeof window&&window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var t=this.props.children;return r.a.createElement(s.Provider,{value:this.state},n.Children.only(t))}}]),e}();function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(){return(w=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}function S(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)o=l[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)o=l[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}function j(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function T(t){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _(t,e){return(_=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function P(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var E=function(t){function e(){var t,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return function(t,e,o){e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o}(P(P(o=function(t,e){return!e||"object"!==O(e)&&"function"!=typeof e?P(t):e}(this,(t=T(e)).call.apply(t,[this].concat(r))))),"handleClick",function(t){var e=o.context.scrollTo;e&&e(t)}),o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_(t,e)}(e,r.a.Component),function(t,e,o){e&&j(t.prototype,e),o&&j(t,o)}(e,[{key:"render",value:function(){var t=this,e=this.props,o=e.target,n=e.children,l=e.Parent,i=S(e,["target","children","Parent"]);return r.a.createElement(l,w({},i,{onClick:function(){return t.handleClick(o)}}),n)}}]),e}(),x=p(E);E.contextType=s,o.d(e,"ScrollToProvider",function(){return g}),o.d(e,"ScrollToContext",function(){return s}),o.d(e,"ScrollToActionElement",function(){return x}),o.d(e,"withScrollTo",function(){return p})}]);