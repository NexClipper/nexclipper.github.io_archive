(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"1jzt":function(e,t,a){(function(n){var r,i;a("hEkN"),a("a1Th"),a("h7Nl"),a("Btvt"),a("8+KV"),i=void 0!==n?n:"undefined"!=typeof window?window:this,void 0===(r=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},a=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var a in t){if(!t.hasOwnProperty(a))return;e[a]=t[a]}})),e},n=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,a=String(e),n=a.length,r=-1,i="",o=a.charCodeAt(0);++r<n;){if(0===(t=a.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=1<=t&&t<=31||127==t||0===r&&48<=t&&t<=57||1===r&&48<=t&&t<=57&&45===o?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?a.charAt(r):"\\"+a.charAt(r)}return"#"+i},r=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},i=function(t,a,n,r){if(a.emitEvents&&"function"==typeof e.CustomEvent){var i=new CustomEvent(t,{bubbles:!0,detail:{anchor:n,toggle:r}});document.dispatchEvent(i)}};return function(o,s){var l,c,u,d,f={cancelScroll:function(e){cancelAnimationFrame(d),d=null,e||i("scrollCancel",l)},animateScroll:function(n,o,s){f.cancelScroll();var c=a(l||t,s||{}),m="[object Number]"===Object.prototype.toString.call(n),p=m||!n.tagName?null:n;if(m||p){var h=e.pageYOffset;c.header&&!u&&(u=document.querySelector(c.header));var g,b,y,v,E,S,w,O,I=function(t){return t?(a=t,parseInt(e.getComputedStyle(a).height,10)+t.offsetTop):0;var a}(u),C=m?n:function(t,a,n,i){var o=0;if(t.offsetParent)for(;o+=t.offsetTop,t=t.offsetParent;);return o=Math.max(o-a-n,0),i&&(o=Math.min(o,r()-e.innerHeight)),o}(p,I,parseInt("function"==typeof c.offset?c.offset(n,o):c.offset,10),c.clip),N=C-h,A=r(),k=0,L=(g=N,y=(b=c).speedAsDuration?b.speed:Math.abs(g/1e3*b.speed),b.durationMax&&y>b.durationMax?b.durationMax:b.durationMin&&y<b.durationMin?b.durationMin:parseInt(y,10));0===e.pageYOffset&&e.scrollTo(0,0),w=n,O=c,m||history.pushState&&O.updateURL&&history.pushState({smoothScroll:JSON.stringify(O),anchor:w.id},document.title,w===document.documentElement?"#top":"#"+w.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?e.scrollTo(0,Math.floor(C)):(i("scrollStart",c,n,o),f.cancelScroll(!0),e.requestAnimationFrame((function t(a){var r,s,l;v||(v=a),k+=a-v,S=h+N*(s=E=1<(E=0===L?0:k/L)?1:E,"easeInQuad"===(r=c).easing&&(l=s*s),"easeOutQuad"===r.easing&&(l=s*(2-s)),"easeInOutQuad"===r.easing&&(l=s<.5?2*s*s:(4-2*s)*s-1),"easeInCubic"===r.easing&&(l=s*s*s),"easeOutCubic"===r.easing&&(l=--s*s*s+1),"easeInOutCubic"===r.easing&&(l=s<.5?4*s*s*s:(s-1)*(2*s-2)*(2*s-2)+1),"easeInQuart"===r.easing&&(l=s*s*s*s),"easeOutQuart"===r.easing&&(l=1- --s*s*s*s),"easeInOutQuart"===r.easing&&(l=s<.5?8*s*s*s*s:1-8*--s*s*s*s),"easeInQuint"===r.easing&&(l=s*s*s*s*s),"easeOutQuint"===r.easing&&(l=1+--s*s*s*s*s),"easeInOutQuint"===r.easing&&(l=s<.5?16*s*s*s*s*s:1+16*--s*s*s*s*s),r.customEasing&&(l=r.customEasing(s)),l||s),e.scrollTo(0,Math.floor(S)),function(t,a){var r,s,l,u=e.pageYOffset;if(t==a||u==a||(h<a&&e.innerHeight+u)>=A)return f.cancelScroll(!0),s=a,l=m,0===(r=n)&&document.body.focus(),l||(r.focus(),document.activeElement!==r&&(r.setAttribute("tabindex","-1"),r.focus(),r.style.outline="none"),e.scrollTo(0,s)),i("scrollStop",c,n,o),!(d=v=null)}(S,C)||(d=e.requestAnimationFrame(t),v=a)})))}}},m=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(c=t.target.closest(o))&&"a"===c.tagName.toLowerCase()&&!t.target.closest(l.ignore)&&c.hostname===e.location.hostname&&c.pathname===e.location.pathname&&/#/.test(c.href)){var a,r=n(c.hash);if("#"===r){if(!l.topOnEmptyHash)return;a=document.documentElement}else a=document.querySelector(r);(a=a||"#top"!==r?a:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var a=e.location.hash;a=a||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:a||e.pageYOffset},document.title,a||e.location.href)}}(l),f.animateScroll(a,c))}},p=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(l)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(n(history.state.anchor)))||f.animateScroll(t,null,{updateURL:!1})}};return f.destroy=function(){l&&(document.removeEventListener("click",m,!1),e.removeEventListener("popstate",p,!1),f.cancelScroll(),d=u=c=l=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";f.destroy(),l=a(t,s||{}),u=l.header?document.querySelector(l.header):null,document.addEventListener("click",m,!1),l.updateURL&&l.popstate&&e.addEventListener("popstate",p,!1)}(),f}}(i)}.apply(t,[]))||(e.exports=r)}).call(this,a("yLpj"))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r,i=n(a("PJYZ")),o=n(a("VbXa")),s=n(a("8OQS")),l=n(a("pVnL")),c=n(a("q1tI")),u=n(a("17x9")),d=function(e){var t=(0,l.default)({},e),a=t.resolutions,n=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},h=Object.create({}),g=function(e){var t=d(e),a=m(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,E=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:r,srcSet:n,sizes:i}),c.default.createElement("source",{media:r,srcSet:a,sizes:i}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function O(e){return e.map((function(e){var t=e.src,a=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:n})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:n})}))}function C(e,t){var a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?n:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var N=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},A=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?C(e,!0):"")+C(e)})).join("")+"<img "+c+o+s+a+n+t+i+r+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=function(e){var t=e.src,a=e.imageVariants,n=e.generateSources,r=e.spreadProps,i=c.default.createElement(L,(0,l.default)({src:t},r));return a.length>1?c.default.createElement("picture",null,n(a),i):i},L=c.default.forwardRef((function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,i=e.style,o=e.onLoad,u=e.onError,d=e.loading,f=e.draggable,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:n,src:r},m,{onLoad:o,onError:u,ref:t,loading:d,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));L.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var x=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var n=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=N(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=d(e),a=m(t),h[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=d(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,m=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,E=e.itemProp,w=e.loading,C=e.draggable,N=!1===this.state.fadeIn||this.state.imgLoaded,x=!0===this.state.fadeIn&&!this.state.imgCached,q=(0,l.default)({opacity:N?1:0,transition:x?"opacity "+y+"ms":"none"},s),j="boolean"==typeof b?"lightgray":b,R={transitionDelay:y+"ms"},M=(0,l.default)({opacity:this.state.imgLoaded?0:1},x&&R,{},s,{},f),T={title:t,alt:this.state.isVisible?"":a,style:M,className:m,itemProp:E};if(h){var P=h,V=p(h);return c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),j&&c.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},x&&R)}),V.base64&&c.default.createElement(k,{src:V.base64,spreadProps:T,imageVariants:P,generateSources:I}),V.tracedSVG&&c.default.createElement(k,{src:V.tracedSVG,spreadProps:T,imageVariants:P,generateSources:O}),this.state.isVisible&&c.default.createElement("picture",null,S(P),c.default.createElement(L,{alt:a,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:C})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:A((0,l.default)({alt:a,title:t,loading:w},V,{imageVariants:P}))}}))}if(g){var z=g,_=p(g),H=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:_.width,height:_.height},i);return"inherit"===i.display&&delete H.display,c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(_.srcSet)},j&&c.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:j,width:_.width,opacity:this.state.imgLoaded?0:1,height:_.height},x&&R)}),_.base64&&c.default.createElement(k,{src:_.base64,spreadProps:T,imageVariants:z,generateSources:I}),_.tracedSVG&&c.default.createElement(k,{src:_.tracedSVG,spreadProps:T,imageVariants:z,generateSources:O}),this.state.isVisible&&c.default.createElement("picture",null,S(z),c.default.createElement(L,{alt:a,title:t,width:_.width,height:_.height,sizes:_.sizes,src:_.src,crossOrigin:this.props.crossOrigin,srcSet:_.srcSet,style:q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:C})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:A((0,l.default)({alt:a,title:t,loading:w},_,{imageVariants:z}))}}))}return null},t}(c.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var q=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),j=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});x.propTypes={resolutions:q,sizes:j,fixed:u.default.oneOfType([q,u.default.arrayOf(q)]),fluid:u.default.oneOfType([j,u.default.arrayOf(j)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var R=x;t.default=R},Cqjd:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACQklEQVQ4y61US4/SUBRuXLvyj/gnTPwV6sqFKxe6cFaSMGPihoUGoZhZTFuMzENiZQJJlTJDWIKJRpkhZoLCECaMPDoCQtvveu+FllIdQgy3OTmn595+/c49D2E8Hv9epQhkxUvAksumj2nbsKgsWpcyZJuOdsypEMv2OCdqxnAB4ByYflTEZqGAo+ZP/4/mQIXLwJiiYXL9tVFGSJNw41mEXH0okuf6MfEwddj/G3DKzGXAbi9WCOHx2xcksJ8h19Y2yZV72/hU68IH+jegA8ZMyza5/nKWRyBzl6ztxcj97de4/nQHwh2FiAcn/E5NyyZeRMHHijtZRpn+NTrHk4ObCOkPEFBlPEru4JachXBbIZHcAkCbloLtlgMFo89wfEGyJ1F8+BZFo/sd50YPxmDAz+1/buDjj/Y0ZBteMgL8eZ9GPxwbFNeaKxdnz3nHzO/4JnV4XKmgQuW0cYp+v8+EH+q0u1BTKrK6TorFImq1GgzjggxHI7Q7HcaWDIZDQluO9Lo9zpIDapqG9Y0NKIqCYHAd8fgrKPE4l8N8HtVqFbHYS+qPE5mekWWZ2djakkgwGIRE33d392Ca5oRhuVxGqVTCm2QSoijiXSqFJLU17T0SiQTS6TT0XI4wwGhUhCRJiEQiUFUV4XAYmUyGMjcmIfvukDsty3J9NBwwYXar1UKzeYYODbder/OzLEneshO8bcTuxNNOcxXL9nwJwtTnNoKblGWmjTMv/D0+66iJY6l56P8aPsSlps1/D9hVA/4BIADo8qlxIWsAAAAASUVORK5CYII=","width":72,"height":72,"src":"/static/cbf85de7c8effeb1724f113576bcb874/c5212/profile.png","srcSet":"/static/cbf85de7c8effeb1724f113576bcb874/c5212/profile.png 1x,\\n/static/cbf85de7c8effeb1724f113576bcb874/52093/profile.png 1.5x,\\n/static/cbf85de7c8effeb1724f113576bcb874/467da/profile.png 2x"}}},"site":{"siteMetadata":{"author":"[NexClipper]","introduction":"넥스클리퍼의 기술 블로그입니다.","social":{"twitter":"nexclipper","github":"NexClipper","medium":"","facebook":"nexclipper","linkedin":"company/nexcloud"}}}}}')},EXIE:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return l}));var n,r=a("1jzt"),i=a.n(r);function o(){return n=new i.a('a[href*="#"]',{speed:500,speedAsDuration:!0})}function s(){if(!n)throw Error("Not founded SmoothScroll instance");return n.destroy(),n=null}function l(e){if(!n)throw Error("Not founded SmoothScroll instance");return n.animateScroll(e),n}},INYr:function(e,t,a){"use strict";var n=a("XKFU"),r=a("CkkT")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),n(n.P+n.F*o,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(i)},OGtf:function(e,t,a){var n=a("XKFU"),r=a("eeVq"),i=a("vhPU"),o=/"/g,s=function(e,t,a,n){var r=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),n(n.P+n.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},RPjP:function(e,t,a){"use strict";e.exports=a("SLms")},SLms:function(e,t,a){"use strict";a("pIFo"),a("8+KV"),a("dZ+Y"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("DNiP"),a("V+eJ"),a("/SS/"),a("hHhE"),a("91GP"),a("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=s(a("q1tI")),o=s(a("17x9"));function s(e){return e&&e.__esModule?e:{default:e}}var l=["shortname","identifier","title","url","category_id","onNewComment","language"],c=!1;function u(e,t){var a=t.onNewComment,n=t.language,r=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["onNewComment","language"]);for(var i in r)e.page[i]=r[i];e.language=n,a&&(e.callbacks={onNewComment:[a]})}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce((function(t,a){return l.some((function(e){return e===a}))?t:n({},t,function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}({},a,e.props[a]))}),{});return i.default.createElement("div",t,i.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!c){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),c=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};l.forEach((function(a){"shortname"!==a&&e.props[a]&&(t[a]=e.props[a])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){u(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){u(this,t)},this.addDisqusScript())}}]),t}(i.default.Component);d.displayName="DisqusThread",d.propTypes={id:o.default.string,shortname:o.default.string.isRequired,identifier:o.default.string,title:o.default.string,url:o.default.string,category_id:o.default.string,onNewComment:o.default.func,language:o.default.string},d.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=d},hEkN:function(e,t,a){"use strict";a("OGtf")("anchor",(function(e){return function(t){return e(this,"a","name",t)}}))},lbRd:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a("0mN4");var n=a("Cqjd"),r=a("q1tI"),i=a.n(r),o=a("Wbzz"),s=a("9eSz"),l=a.n(s),c=(a("9H8W"),function(){return i.a.createElement(o.StaticQuery,{query:u,render:function(e){var t=e.site.siteMetadata,a=t.author,n=t.social,r=t.introduction;return i.a.createElement("div",{className:"bio"},i.a.createElement("div",{className:"author"},i.a.createElement("div",{className:"author-description"},i.a.createElement(l.a,{className:"author-image",fixed:e.avatar.childImageSharp.fixed,alt:a,style:{borderRadius:"100%"}}),i.a.createElement("div",{className:"author-name"},i.a.createElement("span",{className:"author-name-prefix"},"Written by"),i.a.createElement("a",{href:"https://www.nexclipper.io/",className:"author-name-content",target:"_blank"},i.a.createElement("span",null,"@",a)),i.a.createElement("div",{className:"author-introduction"},r),i.a.createElement("p",{className:"author-socials"},n.github&&i.a.createElement("a",{href:"https://github.com/"+n.github,target:"_blank"},"GitHub"),n.medium&&i.a.createElement("a",{href:"https://medium.com/"+n.medium,target:"_blank"},"Medium"),n.twitter&&i.a.createElement("a",{href:"https://twitter.com/"+n.twitter,target:"_blank"},"Twitter"),n.facebook&&i.a.createElement("a",{href:"https://www.facebook.com/"+n.facebook,target:"_blank"},"Facebook"),n.linkedin&&i.a.createElement("a",{href:"https://www.linkedin.com/"+n.linkedin,target:"_blank"},"Linkein"))))))},data:n})}),u="556011471"},yZlL:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=(a("TsVF"),function(){return r.a.createElement("hr",{className:"custom-hr"})}),o=a("hpys"),s=a("CC2r"),l=function(e){var t=e.title;return r.a.createElement("h1",null,t)},c=function(e){var t=e.html;return r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})},u=(a("weRM"),a("hUWy"),a("DMNx"),function(e){e.title,e.author;return r.a.createElement("div",{className:"social-share"})}),d=(a("jmfv"),function(e){var t=e.sponsorId;return r.a.createElement("div",{className:"sponsor-button"},r.a.createElement("a",{className:"bmc-button",target:"_blank",rel:"noopener noreferrer",href:"https://www.buymeacoffee.com/"+t},r.a.createElement("img",{src:"https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg",alt:"Buy me a coffee"}),r.a.createElement("span",null,"Buy me a coffee")))}),f=a("lbRd"),m=a("Wbzz"),p=(a("n1n/"),function(e){var t=e.pageContext,a=t.previous,n=t.next;return r.a.createElement("ul",{className:"navigator"},r.a.createElement("li",null,a&&r.a.createElement(m.Link,{to:a.fields.slug,rel:"prev"},"← ",a.frontmatter.title)),r.a.createElement("li",null,n&&r.a.createElement(m.Link,{to:n.fields.slug,rel:"next"},n.frontmatter.title," →")))}),h=a("RPjP"),g=a.n(h);function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var y=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={toasts:[]},a.notifyAboutComment=a.notifyAboutComment.bind(b(a)),a.onSnackbarDismiss=a.onSnackbarDismiss.bind(b(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},i.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!!"}),this.setState({toasts:e})},i.render=function(){var e=this.props,t=e.post,a=e.shortName,n=e.siteUrl+e.slug;return r.a.createElement(g.a,{shortname:a,identifier:t.frontmatter.title,title:t.frontmatter.title,url:n,category_id:t.frontmatter.category_id,onNewComment:this.notifyAboutComment})},n}(n.Component),v=(a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),function(e){var t=e.repo,a=r.a.createRef();return Object(n.useEffect)((function(){var e=document.createElement("script"),n={src:"https://utteranc.es/client.js",repo:t,branch:"master",async:!0,"issue-term":"pathname",crossorigin:"anonymous"};Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),a.current.appendChild(e)}),[]),r.a.createElement("div",{className:"utterences",ref:a})}),E=a("EXIE");a("uhgt");a.d(t,"pageQuery",(function(){return S}));t.default=function(e){var t=e.data,a=e.pageContext,m=e.location;Object(n.useEffect)((function(){return E.c(),function(){return E.a()}}),[]);var h=t.markdownRemark,g=t.site.siteMetadata,b=g.title,S=g.comment,w=g.siteUrl,O=g.author,I=g.sponsor,C=S.disqusShortName,N=S.utterances;return r.a.createElement(o.a,{location:m,title:b},r.a.createElement(s.a,{title:h.frontmatter.title,description:h.excerpt}),r.a.createElement(l,{title:h.frontmatter.title}),r.a.createElement(c,{html:h.html}),r.a.createElement(u,{title:h.frontmatter.title,author:O}),!!I.buyMeACoffeeId&&r.a.createElement(d,{sponsorId:I.buyMeACoffeeId}),r.a.createElement(i,null),r.a.createElement(f.a,null),r.a.createElement(p,{pageContext:a}),!!C&&r.a.createElement(y,{post:h,shortName:C,siteUrl:w,slug:a.slug}),!!N&&r.a.createElement(v,{repo:N}))};var S="1559320954"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-03df90f39d7ed5fc6cc8.js.map