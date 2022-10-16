/*! For license information please see mja-org-single-spa-demo-nav.js.LICENSE.txt */
System.register(["react","react-dom"],(function(e,t){var r={},n={};return Object.defineProperty(r,"__esModule",{value:!0}),{setters:[function(e){Object.keys(e).forEach((function(t){r[t]=e[t]}))},function(e){n.default=e.default}],execute:function(){e((()=>{var e={307:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(15),o=r.n(n),a=r(645),i=r.n(a)()(o());i.push([e.id,".nav {\n  display: flex;\n  flex-direction: row;\n  padding: 20px;\n  background: #000;\n  color: #fff;\n}\n\n.link {\n  margin-right: 20px;\n  color: #fff;\n  text-decoration: none;\n}\n\n.link:hover,\n.link:focus {\n  color: #1098f7;\n}\n","",{version:3,sources:["webpack://./src/root.component.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,qBAAqB;AACvB;;AAEA;;EAEE,cAAc;AAChB",sourcesContent:[".nav {\n  display: flex;\n  flex-direction: row;\n  padding: 20px;\n  background: #000;\n  color: #fff;\n}\n\n.link {\n  margin-right: 20px;\n  color: #fff;\n  text-decoration: none;\n}\n\n.link:hover,\n.link:focus {\n  color: #1098f7;\n}\n"],sourceRoot:""}]);const c=i},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);n&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),t.push(s))}},t}},15:e=>{"use strict";function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}e.exports=function(e){var r,n,o=(n=4,function(e){if(Array.isArray(e))return e}(r=e)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(r,n)||function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if(!i)return a;if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),u="/*# ".concat(s," */"),l=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[a].concat(l).concat([u]).join("\n")}return[a].join("\n")}},418:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var i,c,s=o(e),u=1;u<arguments.length;u++){for(var l in i=Object(arguments[u]))r.call(i,l)&&(s[l]=i[l]);if(t){c=t(i);for(var p=0;p<c.length;p++)n.call(i,c[p])&&(s[c[p]]=i[c[p]])}}return s}},251:(e,t,r)=>{"use strict";r(418);var n=r(954),o=60103;if("function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),a("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,a={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,n)&&!s.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:l,props:a,_owner:i.current}}t.jsx=u,t.jsxs=u},893:(e,t,r)=>{"use strict";e.exports=r(251)},379:e=>{"use strict";var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=n.base?s[0]+n.base:s[0],l=a[u]||0,p="".concat(u," ").concat(l);a[u]=l+1;var f=r(p),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)t[f].references++,t[f].updater(d);else{var m=o(d,n);n.byIndex=c,t.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=r(a[i]);t[c].references--}for(var s=n(e,o),u=0;u<a.length;u++){var l=r(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{"use strict";var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},722:(e,t,r)=>{const n=r(905).R;t.s=function(e){if(e||(e=1),!r.y.meta||!r.y.meta.url)throw console.error("__system_context__",r.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");r.p=n(r.y.meta.url,e)}},905:(e,t,r)=>{t.R=function(e,t){var r=document.createElement("a");r.href=e;for(var n="/"===r.pathname[0]?r.pathname:"/"+r.pathname,o=0,a=n.length;o!==t&&a>=0;)"/"===n[--a]&&o++;if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);var i=n.slice(0,a+1);return r.protocol+"//"+r.host+i};Number.isInteger},954:e=>{"use strict";e.exports=r},493:e=>{"use strict";e.exports=n}},o={};function a(t){var r=o[t];if(void 0!==r)return r.exports;var n=o[t]={id:t,exports:{}};return e[t](n,n.exports,a),n.exports}a.y=t,a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="",a.nc=void 0;var i={};return(0,a(722).s)(1),(()=>{"use strict";a.r(i),a.d(i,{bootstrap:()=>Ee,mount:()=>Re,unmount:()=>Oe});var e=a(954),t=a(493);function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){var r;if("function"!=typeof(r=t.domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t=e.appName||e.name;if(!t)throw Error("single-spa's dom-element-getter-helpers was not given an application name as a prop, so it can't make a unique dom element container for the react application");var r="single-spa-application:".concat(t);return function(){var e=document.getElementById(r);return e||((e=document.createElement("div")).id=r,document.body.appendChild(e)),e}}(t)))throw Error("single-spa's dom-element-getter-helpers was given an invalid domElementGetter for application or parcel '".concat(t.name,"'. Expected a function, received ").concat(s(r)));return function(){var e=r(t);if(!(e instanceof HTMLElement))throw Error("single-spa's dom-element-getter-helpers: domElementGetter returned an invalid dom element for application or parcel '".concat(t.name,"'. Expected HTMLElement, received ").concat(s(e)));return e}}var l=null;try{l=require("react").createContext()}catch(r){}var p,f,d={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,renderType:null,errorBoundary:null,errorBoundaryClass:null,domElementGetter:null,parcelCanUpdate:!0,suppressComponentDidCatchWarning:!1,domElements:{},renderResults:{},updateResolves:{}};function m(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent(t).then((function(t){e.rootComponent=t}))}function h(e,t){return new Promise((function(r,n){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)||e.errorBoundary||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var o=g(e,t,(function(){r(this)})),a=u(e,t)(),i=function(e){var t=e.opts,r=e.elementToRender,n=e.domElement,o="function"==typeof t.renderType?t.renderType():t.renderType;if(["createRoot","unstable_createRoot","createBlockingRoot","unstable_createBlockingRoot"].indexOf(o)>=0){var a=t.ReactDOM[o](n);return a.render(r),a}return"hydrate"===o?t.ReactDOM.hydrate(r,n):t.ReactDOM.render(r,n),null}({elementToRender:o,domElement:a,opts:e});e.domElements[t.name]=a,e.renderResults[t.name]=i}))}function y(e,t){return new Promise((function(r){e.unmountFinished=r;var n=e.renderResults[t.name];n&&n.unmount?n.unmount():e.ReactDOM.unmountComponentAtNode(e.domElements[t.name]),delete e.domElements[t.name],delete e.renderResults[t.name]}))}function v(e,t){return new Promise((function(r){e.updateResolves[t.name]||(e.updateResolves[t.name]=[]),e.updateResolves[t.name].push(r);var n=g(e,t,null),o=e.renderResults[t.name];if(o&&o.render)o.render(n);else{var a=u(e,t)();e.ReactDOM.render(n,a)}}))}function g(e,t,r){var o=e.React.createElement(e.rootComponent,t),a=l?e.React.createElement(l.Provider,{value:t},o):o;return(e.errorBoundary||t.errorBoundary||e.errorBoundaryClass||t.errorBoundaryClass)&&(e.errorBoundaryClass=e.errorBoundaryClass||t.errorBoundaryClass||function(e,t){function r(t){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},r.displayName="SingleSpaReactErrorBoundary(".concat(t.name,")")}return r.prototype=Object.create(e.React.Component.prototype),r.prototype.render=function(){return this.state.caughtError?(e.errorBoundary||t.errorBoundary)(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},r.prototype.componentDidCatch=function(e,t){this.setState({caughtError:e,caughtErrorInfo:t})},r}(e,t),a=e.React.createElement(e.errorBoundaryClass,t,a)),e.React.createElement(e.SingleSpaRoot,n(n({},t),{},{mountFinished:r,updateFinished:function(){e.updateResolves[t.name]&&(e.updateResolves[t.name].forEach((function(e){return e()})),delete e.updateResolves[t.name])},unmountFinished:function(){setTimeout(e.unmountFinished)}}),a)}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b.apply(this,arguments)}(f=p||(p={})).Pop="POP",f.Push="PUSH",f.Replace="REPLACE";const E="popstate";function R(e){return{usr:e.state,key:e.key}}function O(e,t,r,n){return void 0===r&&(r=null),b({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?w(t):t,{state:r,key:t&&t.key||n||Math.random().toString(36).substr(2,8)})}function C(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&"?"!==r&&(t+="?"===r.charAt(0)?r:"?"+r),n&&"#"!==n&&(t+="#"===n.charAt(0)?n:"#"+n),t}function w(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}var S;function j(e,t){if(!1===e||null==e)throw new Error(t)}function x(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the `to."+r+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function A(e,t,r,n){let o;void 0===n&&(n=!1),"string"==typeof e?o=w(e):(o=b({},e),j(!o.pathname||!o.pathname.includes("?"),x("?","pathname","search",o)),j(!o.pathname||!o.pathname.includes("#"),x("#","pathname","hash",o)),j(!o.search||!o.search.includes("#"),x("#","search","hash",o)));let a,i=""===e||""===o.pathname,c=i?"/":o.pathname;if(n||null==c)a=r;else{let e=t.length-1;if(c.startsWith("..")){let t=c.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}a=e>=0?t[e]:"/"}let s=function(e,t){void 0===t&&(t="/");let{pathname:r,search:n="",hash:o=""}="string"==typeof e?w(e):e,a=r?r.startsWith("/")?r:function(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?r.length>1&&r.pop():"."!==e&&r.push(e)})),r.length>1?r.join("/"):"/"}(r,t):t;return{pathname:a,search:k(n),hash:_(o)}}(o,a),u=c&&"/"!==c&&c.endsWith("/"),l=(i||"."===c)&&r.endsWith("/");return s.pathname.endsWith("/")||!u&&!l||(s.pathname+="/"),s}!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(S||(S={}));const P=e=>e.join("/").replace(/\/\/+/g,"/"),k=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",_=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class B extends Error{}const D="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},{useState:T,useEffect:M,useLayoutEffect:N,useDebugValue:U}=e;function L(e){const t=e.getSnapshot,r=e.value;try{const e=t();return!D(r,e)}catch(e){return!0}}"undefined"==typeof window||void 0===window.document||window.document.createElement;"useSyncExternalStore"in e&&e.useSyncExternalStore;const I=e.createContext(null),F=e.createContext(null),W=e.createContext({outlet:null,matches:[]});function H(){return null!=e.useContext(F)}function q(){return H()||j(!1),e.useContext(F).location}function J(e){return e.filter(((t,r)=>0===r||!t.route.index&&t.pathnameBase!==e[r-1].pathnameBase))}function G(t,r){let{relative:n}=void 0===r?{}:r,{matches:o}=e.useContext(W),{pathname:a}=q(),i=JSON.stringify(J(o).map((e=>e.pathnameBase)));return e.useMemo((()=>A(t,JSON.parse(i),a,"path"===n)),[t,i,a,n])}class Z extends e.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location?{error:e.error,location:e.location}:{error:e.error||t.error,location:t.location}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?React.createElement(RouteErrorContext.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}var K,$,V;function X(t){let{basename:r="/",children:n=null,location:o,navigationType:a=p.Pop,navigator:i,static:c=!1}=t;H()&&j(!1);let s=r.replace(/^\/*/,"/"),u=e.useMemo((()=>({basename:s,navigator:i,static:c})),[s,i,c]);"string"==typeof o&&(o=w(o));let{pathname:l="/",search:f="",hash:d="",state:m=null,key:h="default"}=o,y=e.useMemo((()=>{let e=function(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&"/"!==n?null:e.slice(r)||"/"}(l,s);return null==e?null:{pathname:e,search:f,hash:d,state:m,key:h}}),[s,l,f,d,m,h]);return null==y?null:e.createElement(I.Provider,{value:u},e.createElement(F.Provider,{children:n,value:{location:y,navigationType:a}}))}!function(e){e.UseRevalidator="useRevalidator"}(K||(K={})),function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"}($||($={})),function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"}(V||(V={})),new Promise((()=>{}));class Y extends e.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error("<Await> caught the following error during render",e,t)}render(){let{children:e,errorElement:t,resolve:r}=this.props,n=null,o=V.pending;if(r instanceof Promise)if(this.state.error){V.error;let e=this.state.error;Promise.reject().catch((()=>{})),Object.defineProperty(n,"_tracked",{get:()=>!0}),Object.defineProperty(n,"_error",{get:()=>e})}else r._tracked?void 0!==n._error?V.error:void 0!==n._data?V.success:V.pending:(V.pending,Object.defineProperty(r,"_tracked",{get:()=>!0}),r.then((e=>Object.defineProperty(r,"_data",{get:()=>e})),(e=>Object.defineProperty(r,"_error",{get:()=>e}))));else V.success,Promise.resolve(),Object.defineProperty(n,"_tracked",{get:()=>!0}),Object.defineProperty(n,"_data",{get:()=>r});if(o===V.error&&n._error instanceof AbortedDeferredError)throw neverSettledPromise;if(o===V.error&&!t)throw n._error;if(o===V.error)return React.createElement(AwaitContext.Provider,{value:n,children:t});if(o===V.success)return React.createElement(AwaitContext.Provider,{value:n,children:e});throw n}}function z(){return z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},z.apply(this,arguments)}const Q=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function ee(t){let{basename:r,children:n,window:o}=t,a=e.useRef();null==a.current&&(a.current=function(e){return void 0===e&&(e={}),function(e,t,r,n){void 0===n&&(n={});let{window:o=document.defaultView,v5Compat:a=!1}=n,i=o.history,c=p.Pop,s=null;function u(){c=p.Pop,s&&s({action:c,location:l.location})}let l={get action(){return c},get location(){return e(o,i)},listen(e){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(E,u),s=e,()=>{o.removeEventListener(E,u),s=null}},createHref:e=>t(o,e),push:function(e,t){c=p.Push;let n=O(l.location,e,t);r&&r(n,e);let u=R(n),f=l.createHref(n);try{i.pushState(u,"",f)}catch(e){o.location.assign(f)}a&&s&&s({action:c,location:n})},replace:function(e,t){c=p.Replace;let n=O(l.location,e,t);r&&r(n,e);let o=R(n),u=l.createHref(n);i.replaceState(o,"",u),a&&s&&s({action:c,location:n})},go:e=>i.go(e)};return l}((function(e,t){let{pathname:r,search:n,hash:o}=e.location;return O("",{pathname:r,search:n,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:C(t)}),null,e)}({window:o,v5Compat:!0}));let i=a.current,[c,s]=e.useState({action:i.action,location:i.location});return e.useLayoutEffect((()=>i.listen(s)),[i]),e.createElement(X,{basename:r,children:n,location:c.location,navigationType:c.action,navigator:i})}const te=e.forwardRef((function(t,r){let{onClick:n,relative:o,reloadDocument:a,replace:i,state:c,target:s,to:u,preventScrollReset:l}=t,p=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(t,Q),f=function(t,r){let{relative:n}=void 0===r?{}:r;H()||j(!1);let{basename:o,navigator:a}=e.useContext(I),{hash:i,pathname:c,search:s}=G(t,{relative:n}),u=c;return"/"!==o&&(u="/"===c?o:P([o,c])),a.createHref({pathname:u,search:s,hash:i})}(u,{relative:o}),d=function(t,r){let{target:n,replace:o,state:a,preventScrollReset:i,relative:c}=void 0===r?{}:r,s=function(){H()||j(!1);let{basename:t,navigator:r}=e.useContext(I),{matches:n}=e.useContext(W),{pathname:o}=q(),a=JSON.stringify(J(n).map((e=>e.pathnameBase))),i=e.useRef(!1);e.useEffect((()=>{i.current=!0}));let c=e.useCallback((function(e,n){if(void 0===n&&(n={}),!i.current)return;if("number"==typeof e)return void r.go(e);let c=A(e,JSON.parse(a),o,"path"===n.relative);"/"!==t&&(c.pathname="/"===c.pathname?t:P([t,c.pathname])),(n.replace?r.replace:r.push)(c,n.state,n)}),[t,r,a,o]);return c}(),u=q(),l=G(t,{relative:c});return e.useCallback((e=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(e,n)){e.preventDefault();let r=void 0!==o?o:C(u)===C(l);s(t,{replace:r,state:a,preventScrollReset:i,relative:c})}}),[u,s,l,o,a,n,t,i,c])}(u,{replace:i,state:c,target:s,preventScrollReset:l,relative:o});return e.createElement("a",z({},p,{href:f,onClick:a?n:function(e){n&&n(e),e.defaultPrevented||d(e)},ref:r,target:s}))}));var re,ne;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(re||(re={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(ne||(ne={}));var oe=a(379),ae=a.n(oe),ie=a(795),ce=a.n(ie),se=a(569),ue=a.n(se),le=a(565),pe=a.n(le),fe=a(216),de=a.n(fe),me=a(589),he=a.n(me),ye=a(307),ve={};ve.styleTagTransform=he(),ve.setAttributes=pe(),ve.insert=ue().bind(null,"head"),ve.domAPI=ce(),ve.insertStyleElement=de(),ae()(ye.Z,ve),ye.Z&&ye.Z.locals&&ye.Z.locals;var ge=a(893),be=function(e){if("object"!==o(e))throw new Error("single-spa-react requires a configuration object");var t=n(n({},d),e);if(!t.React)throw new Error("single-spa-react must be passed opts.React");if(!t.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!t.rootComponent&&!t.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(t.errorBoundary&&"function"!=typeof t.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!l&&t.React.createContext&&(l=t.React.createContext()),t.SingleSpaRoot=function(e){function t(e){t.displayName="SingleSpaRoot(".concat(e.name,")")}return t.prototype=Object.create(e.React.Component.prototype),t.prototype.componentDidMount=function(){setTimeout(this.props.mountFinished)},t.prototype.componentWillUnmount=function(){setTimeout(this.props.unmountFinished)},t.prototype.render=function(){return setTimeout(this.props.updateFinished),this.props.children},t}(t);var r={bootstrap:m.bind(null,t),mount:h.bind(null,t),unmount:y.bind(null,t)};return t.parcelCanUpdate&&(r.update=v.bind(null,t)),r}({React:e.default,ReactDOM:t.default,rootComponent:function(){return(0,ge.jsx)(ee,{children:(0,ge.jsxs)("nav",{className:"nav",children:[(0,ge.jsx)(te,{to:"/page1",className:"link",children:"Page 1"}),(0,ge.jsx)(te,{to:"/page2",className:"link",children:"Page 2"})]})})},errorBoundary:function(e,t,r){return null}}),Ee=be.bootstrap,Re=be.mount,Oe=be.unmount})(),i})())}}}));
//# sourceMappingURL=mja-org-single-spa-demo-nav.js.map