(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00b24d2c"],{"06cf":function(t,n,e){var r=e("83ab"),o=e("d1e7"),c=e("5c6c"),i=e("fc6a"),a=e("c04e"),u=e("5135"),f=e("0cfb"),l=Object.getOwnPropertyDescriptor;n.f=r?l:function(t,n){if(t=i(t),n=a(n,!0),f)try{return l(t,n)}catch(e){}if(u(t,n))return c(!o.f.call(t,n),t[n])}},"14c3":function(t,n,e){var r=e("c6b6"),o=e("9263");t.exports=function(t,n){var e=t.exec;if("function"===typeof e){var c=e.call(t,n);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},"1d80":function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"23cb":function(t,n,e){var r=e("a691"),o=Math.max,c=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):c(e,n)}},"23e7":function(t,n,e){var r=e("da84"),o=e("06cf").f,c=e("9112"),i=e("6eeb"),a=e("ce4e"),u=e("e893"),f=e("94ca");t.exports=function(t,n){var e,l,s,p,d,v,h=t.target,x=t.global,g=t.stat;if(l=x?r:g?r[h]||a(h,{}):(r[h]||{}).prototype,l)for(s in n){if(d=n[s],t.noTargetGet?(v=o(l,s),p=v&&v.value):p=l[s],e=f(x?s:h+(g?".":"#")+s,t.forced),!e&&void 0!==p){if(typeof d===typeof p)continue;u(d,p)}(t.sham||p&&p.sham)&&c(d,"sham",!0),i(l,s,d,t)}}},"241c":function(t,n,e){var r=e("ca84"),o=e("7839"),c=o.concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,c)}},"428f":function(t,n,e){var r=e("da84");t.exports=r},"44ad":function(t,n,e){var r=e("d039"),o=e("c6b6"),c="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?c.call(t,""):Object(t)}:Object},"4d64":function(t,n,e){var r=e("fc6a"),o=e("50c4"),c=e("23cb"),i=function(t){return function(n,e,i){var a,u=r(n),f=o(u.length),l=c(i,f);if(t&&e!=e){while(f>l)if(a=u[l++],a!=a)return!0}else for(;f>l;l++)if((t||l in u)&&u[l]===e)return t||l||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},"50c4":function(t,n,e){var r=e("a691"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},5319:function(t,n,e){"use strict";var r=e("d784"),o=e("825a"),c=e("7b0b"),i=e("50c4"),a=e("a691"),u=e("1d80"),f=e("8aa5"),l=e("14c3"),s=Math.max,p=Math.min,d=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,x=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,n,e,r){var g=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,E=r.REPLACE_KEEPS_$0,b=g?"$":"$0";return[function(e,r){var o=u(this),c=void 0==e?void 0:e[t];return void 0!==c?c.call(e,o,r):n.call(String(o),e,r)},function(t,r){if(!g&&E||"string"===typeof r&&-1===r.indexOf(b)){var c=e(n,t,this,r);if(c.done)return c.value}var u=o(t),d=String(this),v="function"===typeof r;v||(r=String(r));var h=u.global;if(h){var m=u.unicode;u.lastIndex=0}var O=[];while(1){var S=l(u,d);if(null===S)break;if(O.push(S),!h)break;var R=String(S[0]);""===R&&(u.lastIndex=f(d,i(u.lastIndex),m))}for(var _="",I=0,$=0;$<O.length;$++){S=O[$];for(var w=String(S[0]),P=s(p(a(S.index),d.length),0),k=[],T=1;T<S.length;T++)k.push(x(S[T]));var A=S.groups;if(v){var C=[w].concat(k,P,d);void 0!==A&&C.push(A);var U=String(r.apply(void 0,C))}else U=y(w,d,P,k,A,r);P>=I&&(_+=d.slice(I,P)+U,I=P+w.length)}return _+d.slice(I)}];function y(t,e,r,o,i,a){var u=r+t.length,f=o.length,l=h;return void 0!==i&&(i=c(i),l=v),n.call(a,l,(function(n,c){var a;switch(c.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(u);case"<":a=i[c.slice(1,-1)];break;default:var l=+c;if(0===l)return n;if(l>f){var s=d(l/10);return 0===s?n:s<=f?void 0===o[s-1]?c.charAt(1):o[s-1]+c.charAt(1):n}a=o[l-1]}return void 0===a?"":a}))}}))},"56ef":function(t,n,e){var r=e("d066"),o=e("241c"),c=e("7418"),i=e("825a");t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(i(t)),e=c.f;return e?n.concat(e(t)):n}},6547:function(t,n,e){var r=e("a691"),o=e("1d80"),c=function(t){return function(n,e){var c,i,a=String(o(n)),u=r(e),f=a.length;return u<0||u>=f?t?"":void 0:(c=a.charCodeAt(u),c<55296||c>56319||u+1===f||(i=a.charCodeAt(u+1))<56320||i>57343?t?a.charAt(u):c:t?a.slice(u,u+2):i-56320+(c-55296<<10)+65536)}};t.exports={codeAt:c(!1),charAt:c(!0)}},7418:function(t,n){n.f=Object.getOwnPropertySymbols},7839:function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,n,e){var r=e("1d80");t.exports=function(t){return Object(r(t))}},"8aa5":function(t,n,e){"use strict";var r=e("6547").charAt;t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},9263:function(t,n,e){"use strict";var r=e("ad6d"),o=e("9f7f"),c=RegExp.prototype.exec,i=String.prototype.replace,a=c,u=function(){var t=/a/,n=/b*/g;return c.call(t,"a"),c.call(n,"a"),0!==t.lastIndex||0!==n.lastIndex}(),f=o.UNSUPPORTED_Y||o.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],s=u||l||f;s&&(a=function(t){var n,e,o,a,s=this,p=f&&s.sticky,d=r.call(s),v=s.source,h=0,x=t;return p&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),x=String(t).slice(s.lastIndex),s.lastIndex>0&&(!s.multiline||s.multiline&&"\n"!==t[s.lastIndex-1])&&(v="(?: "+v+")",x=" "+x,h++),e=new RegExp("^(?:"+v+")",d)),l&&(e=new RegExp("^"+v+"$(?!\\s)",d)),u&&(n=s.lastIndex),o=c.call(p?e:s,x),p?o?(o.input=o.input.slice(h),o[0]=o[0].slice(h),o.index=s.lastIndex,s.lastIndex+=o[0].length):s.lastIndex=0:u&&o&&(s.lastIndex=s.global?o.index+o[0].length:n),l&&o&&o.length>1&&i.call(o[0],e,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(o[a]=void 0)})),o}),t.exports=a},"94ca":function(t,n,e){var r=e("d039"),o=/#|\.prototype\./,c=function(t,n){var e=a[i(t)];return e==f||e!=u&&("function"==typeof n?r(n):!!n)},i=c.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=c.data={},u=c.NATIVE="N",f=c.POLYFILL="P";t.exports=c},"9f7f":function(t,n,e){"use strict";var r=e("d039");function o(t,n){return RegExp(t,n)}n.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),n.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a691:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},ac1f:function(t,n,e){"use strict";var r=e("23e7"),o=e("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(t,n,e){"use strict";var r=e("825a");t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},ca84:function(t,n,e){var r=e("5135"),o=e("fc6a"),c=e("4d64").indexOf,i=e("d012");t.exports=function(t,n){var e,a=o(t),u=0,f=[];for(e in a)!r(i,e)&&r(a,e)&&f.push(e);while(n.length>u)r(a,e=n[u++])&&(~c(f,e)||f.push(e));return f}},d066:function(t,n,e){var r=e("428f"),o=e("da84"),c=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?c(r[t])||c(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},d1e7:function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,c=o&&!r.call({1:2},1);n.f=c?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},d784:function(t,n,e){"use strict";e("ac1f");var r=e("6eeb"),o=e("d039"),c=e("b622"),i=e("9263"),a=e("9112"),u=c("species"),f=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),s=c("replace"),p=function(){return!!/./[s]&&""===/./[s]("a","$0")}(),d=!o((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));t.exports=function(t,n,e,s){var v=c(t),h=!o((function(){var n={};return n[v]=function(){return 7},7!=""[t](n)})),x=h&&!o((function(){var n=!1,e=/a/;return"split"===t&&(e={},e.constructor={},e.constructor[u]=function(){return e},e.flags="",e[v]=/./[v]),e.exec=function(){return n=!0,null},e[v](""),!n}));if(!h||!x||"replace"===t&&(!f||!l||p)||"split"===t&&!d){var g=/./[v],E=e(v,""[t],(function(t,n,e,r,o){return n.exec===i?h&&!o?{done:!0,value:g.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),b=E[0],y=E[1];r(String.prototype,t,b),r(RegExp.prototype,v,2==n?function(t,n){return y.call(t,this,n)}:function(t){return y.call(t,this)})}s&&a(RegExp.prototype[v],"sham",!0)}},e313:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{attrs:{id:"nav"}},[e("router-link",{attrs:{to:"/admin/index"}},[t._v("後台首頁")]),t._v("| "),e("router-link",{attrs:{to:"/admin/products"}},[t._v("後台產品列表")]),t._v("| "),e("router-link",{attrs:{to:"/admin/orders"}},[t._v("後台訂單")]),t._v("| "),e("a",{attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.signOut(n)}}},[t._v("登出")])],1),e("router-view")],1)},o=[],c=(e("ac1f"),e("5319"),{name:"Dashboard",data:function(){return{user:{token:"",uuid:""}}},methods:{signOut:function(){document.cookie="token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",document.cookie="uuid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",this.$router.push("/index")}},created:function(){this.user.token=document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,"$1"),this.user.uuid=document.cookie.replace(/(?:(?:^|.*;\s*)uuid\s*=\s*([^;]*).*$)|^.*$/,"$1"),""===this.user.token&&this.$router.push("/login")}}),i=c,a=e("2877"),u=Object(a["a"])(i,r,o,!1,null,null,null);n["default"]=u.exports},e893:function(t,n,e){var r=e("5135"),o=e("56ef"),c=e("06cf"),i=e("9bf2");t.exports=function(t,n){for(var e=o(n),a=i.f,u=c.f,f=0;f<e.length;f++){var l=e[f];r(t,l)||a(t,l,u(n,l))}}},fc6a:function(t,n,e){var r=e("44ad"),o=e("1d80");t.exports=function(t){return r(o(t))}}}]);
//# sourceMappingURL=chunk-00b24d2c.b5370170.js.map