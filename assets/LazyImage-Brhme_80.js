import{g as De,j as Be}from"./index-B1l4BiDB.js";var Pe={exports:{}},Le;function Ce(){return Le||(Le=1,(()=>{var ge={296:(d,b,a)=>{var J=/^\s+|\s+$/g,N=/^[-+]0x[0-9a-f]+$/i,te=/^0b[01]+$/i,T=/^0o[0-7]+$/i,$=parseInt,K=typeof a.g=="object"&&a.g&&a.g.Object===Object&&a.g,ne=typeof self=="object"&&self&&self.Object===Object&&self,re=K||ne||Function("return this")(),ae=Object.prototype.toString,oe=Math.max,ie=Math.min,Q=function(){return re.Date.now()};function Z(h){var j=typeof h;return!!h&&(j=="object"||j=="function")}function le(h){if(typeof h=="number")return h;if(function(l){return typeof l=="symbol"||function(m){return!!m&&typeof m=="object"}(l)&&ae.call(l)=="[object Symbol]"}(h))return NaN;if(Z(h)){var j=typeof h.valueOf=="function"?h.valueOf():h;h=Z(j)?j+"":j}if(typeof h!="string")return h===0?h:+h;h=h.replace(J,"");var V=te.test(h);return V||T.test(h)?$(h.slice(2),V?2:8):N.test(h)?NaN:+h}d.exports=function(h,j,V){var l,m,M,_,E,W,I=0,F=!1,D=!1,H=!0;if(typeof h!="function")throw new TypeError("Expected a function");function A(S){var B=l,U=m;return l=m=void 0,I=S,_=h.apply(U,B)}function G(S){var B=S-W;return W===void 0||B>=j||B<0||D&&S-I>=M}function O(){var S=Q();if(G(S))return Y(S);E=setTimeout(O,function(B){var U=j-(B-W);return D?ie(U,M-(B-I)):U}(S))}function Y(S){return E=void 0,H&&l?A(S):(l=m=void 0,_)}function q(){var S=Q(),B=G(S);if(l=arguments,m=this,W=S,B){if(E===void 0)return function(U){return I=U,E=setTimeout(O,j),F?A(U):_}(W);if(D)return E=setTimeout(O,j),A(W)}return E===void 0&&(E=setTimeout(O,j)),_}return j=le(j)||0,Z(V)&&(F=!!V.leading,M=(D="maxWait"in V)?oe(le(V.maxWait)||0,j):M,H="trailing"in V?!!V.trailing:H),q.cancel=function(){E!==void 0&&clearTimeout(E),I=0,l=W=m=E=void 0},q.flush=function(){return E===void 0?_:Y(Q())},q}},96:(d,b,a)=>{var J="Expected a function",N=NaN,te="[object Symbol]",T=/^\s+|\s+$/g,$=/^[-+]0x[0-9a-f]+$/i,K=/^0b[01]+$/i,ne=/^0o[0-7]+$/i,re=parseInt,ae=typeof a.g=="object"&&a.g&&a.g.Object===Object&&a.g,oe=typeof self=="object"&&self&&self.Object===Object&&self,ie=ae||oe||Function("return this")(),Q=Object.prototype.toString,Z=Math.max,le=Math.min,h=function(){return ie.Date.now()};function j(l){var m=typeof l;return!!l&&(m=="object"||m=="function")}function V(l){if(typeof l=="number")return l;if(function(_){return typeof _=="symbol"||function(E){return!!E&&typeof E=="object"}(_)&&Q.call(_)==te}(l))return N;if(j(l)){var m=typeof l.valueOf=="function"?l.valueOf():l;l=j(m)?m+"":m}if(typeof l!="string")return l===0?l:+l;l=l.replace(T,"");var M=K.test(l);return M||ne.test(l)?re(l.slice(2),M?2:8):$.test(l)?N:+l}d.exports=function(l,m,M){var _=!0,E=!0;if(typeof l!="function")throw new TypeError(J);return j(M)&&(_="leading"in M?!!M.leading:_,E="trailing"in M?!!M.trailing:E),function(W,I,F){var D,H,A,G,O,Y,q=0,S=!1,B=!1,U=!0;if(typeof W!="function")throw new TypeError(J);function ee(R){var X=D,z=H;return D=H=void 0,q=R,G=W.apply(z,X)}function de(R){var X=R-Y;return Y===void 0||X>=I||X<0||B&&R-q>=A}function ue(){var R=h();if(de(R))return ye(R);O=setTimeout(ue,function(X){var z=I-(X-Y);return B?le(z,A-(X-q)):z}(R))}function ye(R){return O=void 0,U&&D?ee(R):(D=H=void 0,G)}function se(){var R=h(),X=de(R);if(D=arguments,H=this,Y=R,X){if(O===void 0)return function(z){return q=z,O=setTimeout(ue,I),S?ee(z):G}(Y);if(B)return O=setTimeout(ue,I),ee(Y)}return O===void 0&&(O=setTimeout(ue,I)),G}return I=V(I)||0,j(F)&&(S=!!F.leading,A=(B="maxWait"in F)?Z(V(F.maxWait)||0,I):A,U="trailing"in F?!!F.trailing:U),se.cancel=function(){O!==void 0&&clearTimeout(O),q=0,D=Y=H=O=void 0},se.flush=function(){return O===void 0?G:ye(h())},se}(l,m,{leading:_,maxWait:m,trailing:E})}},703:(d,b,a)=>{var J=a(414);function N(){}function te(){}te.resetWarningCache=N,d.exports=function(){function T(ne,re,ae,oe,ie,Q){if(Q!==J){var Z=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw Z.name="Invariant Violation",Z}}function $(){return T}T.isRequired=T;var K={array:T,bigint:T,bool:T,func:T,number:T,object:T,string:T,symbol:T,any:T,arrayOf:$,element:T,elementType:T,instanceOf:$,node:T,objectOf:$,oneOf:$,oneOfType:$,shape:$,exact:$,checkPropTypes:te,resetWarningCache:N};return K.PropTypes=K,K}},697:(d,b,a)=>{d.exports=a(703)()},414:d=>{d.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},be={};function L(d){var b=be[d];if(b!==void 0)return b.exports;var a=be[d]={exports:{}};return ge[d](a,a.exports,L),a.exports}L.n=d=>{var b=d&&d.__esModule?()=>d.default:()=>d;return L.d(b,{a:b}),b},L.d=(d,b)=>{for(var a in b)L.o(b,a)&&!L.o(d,a)&&Object.defineProperty(d,a,{enumerable:!0,get:b[a]})},L.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),L.o=(d,b)=>Object.prototype.hasOwnProperty.call(d,b),L.r=d=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(d,"__esModule",{value:!0})};var pe={};(()=>{L.r(pe),L.d(pe,{LazyLoadComponent:()=>X,LazyLoadImage:()=>ke,trackWindowScroll:()=>G});const d=De();var b=L.n(d),a=L(697);function J(){return typeof window<"u"&&"IntersectionObserver"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype}function N(n){return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(n)}function te(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(f){return Object.getOwnPropertyDescriptor(n,f).enumerable})),o.push.apply(o,i)}return o}function T(n,e,o){return(e=K(e))in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function $(n,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,K(i.key),i)}}function K(n){var e=function(o,i){if(N(o)!=="object"||o===null)return o;var f=o[Symbol.toPrimitive];if(f!==void 0){var p=f.call(o,"string");if(N(p)!=="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(n);return N(e)==="symbol"?e:String(e)}function ne(n,e){return ne=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,i){return o.__proto__=i,o},ne(n,e)}function re(n){return re=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},re(n)}var ae=function(n){n.forEach(function(e){e.isIntersecting&&e.target.onVisible()})},oe={},ie=function(n){(function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&ne(t,r)})(v,n);var e,o,i,f,p=(i=v,f=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,r=re(i);if(f){var c=re(this).constructor;t=Reflect.construct(r,arguments,c)}else t=r.apply(this,arguments);return function(s,u){if(u&&(N(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(y){if(y===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y}(s)}(this,t)});function v(t){var r;if(function(s,u){if(!(s instanceof u))throw new TypeError("Cannot call a class as a function")}(this,v),(r=p.call(this,t)).supportsObserver=!t.scrollPosition&&t.useIntersectionObserver&&J(),r.supportsObserver){var c=t.threshold;r.observer=function(s){return oe[s]=oe[s]||new IntersectionObserver(ae,{rootMargin:s+"px"}),oe[s]}(c)}return r}return e=v,o=[{key:"componentDidMount",value:function(){this.placeholder&&this.observer&&(this.placeholder.onVisible=this.props.onVisible,this.observer.observe(this.placeholder)),this.supportsObserver||this.updateVisibility()}},{key:"componentWillUnmount",value:function(){this.observer&&this.placeholder&&this.observer.unobserve(this.placeholder)}},{key:"componentDidUpdate",value:function(){this.supportsObserver||this.updateVisibility()}},{key:"getPlaceholderBoundingBox",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.props.scrollPosition,r=this.placeholder.getBoundingClientRect(),c=this.placeholder.style,s=parseInt(c.getPropertyValue("margin-left"),10)||0,u=parseInt(c.getPropertyValue("margin-top"),10)||0;return{bottom:t.y+r.bottom+u,left:t.x+r.left+s,right:t.x+r.right+s,top:t.y+r.top+u}}},{key:"isPlaceholderInViewport",value:function(){if(typeof window>"u"||!this.placeholder)return!1;var t=this.props,r=t.scrollPosition,c=t.threshold,s=this.getPlaceholderBoundingBox(r),u=r.y+window.innerHeight,y=r.x,w=r.x+window.innerWidth,P=r.y;return P-c<=s.bottom&&u+c>=s.top&&y-c<=s.right&&w+c>=s.left}},{key:"updateVisibility",value:function(){this.isPlaceholderInViewport()&&this.props.onVisible()}},{key:"render",value:function(){var t=this,r=this.props,c=r.className,s=r.height,u=r.placeholder,y=r.style,w=r.width;if(u&&typeof u.type!="function")return b().cloneElement(u,{ref:function(g){return t.placeholder=g}});var P=function(g){for(var k=1;k<arguments.length;k++){var x=arguments[k]!=null?arguments[k]:{};k%2?te(Object(x),!0).forEach(function(C){T(g,C,x[C])}):Object.getOwnPropertyDescriptors?Object.defineProperties(g,Object.getOwnPropertyDescriptors(x)):te(Object(x)).forEach(function(C){Object.defineProperty(g,C,Object.getOwnPropertyDescriptor(x,C))})}return g}({display:"inline-block"},y);return w!==void 0&&(P.width=w),s!==void 0&&(P.height=s),b().createElement("span",{className:c,ref:function(g){return t.placeholder=g},style:P},u)}}],o&&$(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),v}(b().Component);ie.propTypes={onVisible:a.PropTypes.func.isRequired,className:a.PropTypes.string,height:a.PropTypes.oneOfType([a.PropTypes.number,a.PropTypes.string]),placeholder:a.PropTypes.element,threshold:a.PropTypes.number,useIntersectionObserver:a.PropTypes.bool,scrollPosition:a.PropTypes.shape({x:a.PropTypes.number.isRequired,y:a.PropTypes.number.isRequired}),width:a.PropTypes.oneOfType([a.PropTypes.number,a.PropTypes.string])},ie.defaultProps={className:"",placeholder:null,threshold:100,useIntersectionObserver:!0};const Q=ie;var Z=L(296),le=L.n(Z),h=L(96),j=L.n(h),V=function(n){var e=getComputedStyle(n,null);return e.getPropertyValue("overflow")+e.getPropertyValue("overflow-y")+e.getPropertyValue("overflow-x")};const l=function(n){if(!(n instanceof HTMLElement))return window;for(var e=n;e&&e instanceof HTMLElement;){if(/(scroll|auto)/.test(V(e)))return e;e=e.parentNode}return window};function m(n){return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(n)}var M=["delayMethod","delayTime"];function _(){return _=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n},_.apply(this,arguments)}function E(n,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,(f=function(p,v){if(m(p)!=="object"||p===null)return p;var t=p[Symbol.toPrimitive];if(t!==void 0){var r=t.call(p,"string");if(m(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(p)}(i.key),m(f)==="symbol"?f:String(f)),i)}var f}function W(n,e){return W=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,i){return o.__proto__=i,o},W(n,e)}function I(n,e){if(e&&(m(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return F(n)}function F(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function D(n){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(n)}var H=function(){return typeof window>"u"?0:window.scrollX||window.pageXOffset},A=function(){return typeof window>"u"?0:window.scrollY||window.pageYOffset};const G=function(n){var e=function(o){(function(c,s){if(typeof s!="function"&&s!==null)throw new TypeError("Super expression must either be null or a function");c.prototype=Object.create(s&&s.prototype,{constructor:{value:c,writable:!0,configurable:!0}}),Object.defineProperty(c,"prototype",{writable:!1}),s&&W(c,s)})(r,o);var i,f,p,v,t=(p=r,v=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var c,s=D(p);if(v){var u=D(this).constructor;c=Reflect.construct(s,arguments,u)}else c=s.apply(this,arguments);return I(this,c)});function r(c){var s;if(function(y,w){if(!(y instanceof w))throw new TypeError("Cannot call a class as a function")}(this,r),(s=t.call(this,c)).useIntersectionObserver=c.useIntersectionObserver&&J(),s.useIntersectionObserver)return I(s);var u=s.onChangeScroll.bind(F(s));return c.delayMethod==="debounce"?s.delayedScroll=le()(u,c.delayTime):c.delayMethod==="throttle"&&(s.delayedScroll=j()(u,c.delayTime)),s.state={scrollPosition:{x:H(),y:A()}},s.baseComponentRef=b().createRef(),s}return i=r,(f=[{key:"componentDidMount",value:function(){this.addListeners()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"componentDidUpdate",value:function(){typeof window>"u"||this.useIntersectionObserver||l(this.baseComponentRef.current)!==this.scrollElement&&(this.removeListeners(),this.addListeners())}},{key:"addListeners",value:function(){typeof window>"u"||this.useIntersectionObserver||(this.scrollElement=l(this.baseComponentRef.current),this.scrollElement.addEventListener("scroll",this.delayedScroll,{passive:!0}),window.addEventListener("resize",this.delayedScroll,{passive:!0}),this.scrollElement!==window&&window.addEventListener("scroll",this.delayedScroll,{passive:!0}))}},{key:"removeListeners",value:function(){typeof window>"u"||this.useIntersectionObserver||(this.scrollElement.removeEventListener("scroll",this.delayedScroll),window.removeEventListener("resize",this.delayedScroll),this.scrollElement!==window&&window.removeEventListener("scroll",this.delayedScroll))}},{key:"onChangeScroll",value:function(){this.useIntersectionObserver||this.setState({scrollPosition:{x:H(),y:A()}})}},{key:"render",value:function(){var c=this.props,s=(c.delayMethod,c.delayTime,function(y,w){if(y==null)return{};var P,g,k=function(C,fe){if(C==null)return{};var ce,me,Ee={},xe=Object.keys(C);for(me=0;me<xe.length;me++)ce=xe[me],fe.indexOf(ce)>=0||(Ee[ce]=C[ce]);return Ee}(y,w);if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(y);for(g=0;g<x.length;g++)P=x[g],w.indexOf(P)>=0||Object.prototype.propertyIsEnumerable.call(y,P)&&(k[P]=y[P])}return k}(c,M)),u=this.useIntersectionObserver?null:this.state.scrollPosition;return b().createElement(n,_({forwardRef:this.baseComponentRef,scrollPosition:u},s))}}])&&E(i.prototype,f),Object.defineProperty(i,"prototype",{writable:!1}),r}(b().Component);return e.propTypes={delayMethod:a.PropTypes.oneOf(["debounce","throttle"]),delayTime:a.PropTypes.number,useIntersectionObserver:a.PropTypes.bool},e.defaultProps={delayMethod:"throttle",delayTime:300,useIntersectionObserver:!0},e};function O(n){return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(n)}function Y(n,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,(f=function(p,v){if(O(p)!=="object"||p===null)return p;var t=p[Symbol.toPrimitive];if(t!==void 0){var r=t.call(p,"string");if(O(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(p)}(i.key),O(f)==="symbol"?f:String(f)),i)}var f}function q(n,e){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,i){return o.__proto__=i,o},q(n,e)}function S(n){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(n)}var B=function(n){(function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&q(t,r)})(v,n);var e,o,i,f,p=(i=v,f=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,r=S(i);if(f){var c=S(this).constructor;t=Reflect.construct(r,arguments,c)}else t=r.apply(this,arguments);return function(s,u){if(u&&(O(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(y){if(y===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y}(s)}(this,t)});function v(t){return function(r,c){if(!(r instanceof c))throw new TypeError("Cannot call a class as a function")}(this,v),p.call(this,t)}return e=v,(o=[{key:"render",value:function(){return b().createElement(Q,this.props)}}])&&Y(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),v}(b().Component);const U=G(B);function ee(n){return ee=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ee(n)}function de(n,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,(f=function(p,v){if(ee(p)!=="object"||p===null)return p;var t=p[Symbol.toPrimitive];if(t!==void 0){var r=t.call(p,"string");if(ee(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(p)}(i.key),ee(f)==="symbol"?f:String(f)),i)}var f}function ue(n,e){return ue=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,i){return o.__proto__=i,o},ue(n,e)}function ye(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function se(n){return se=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},se(n)}var R=function(n){(function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&ue(t,r)})(v,n);var e,o,i,f,p=(i=v,f=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,r=se(i);if(f){var c=se(this).constructor;t=Reflect.construct(r,arguments,c)}else t=r.apply(this,arguments);return function(s,u){if(u&&(ee(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ye(s)}(this,t)});function v(t){var r;(function(w,P){if(!(w instanceof P))throw new TypeError("Cannot call a class as a function")})(this,v),r=p.call(this,t);var c=t.afterLoad,s=t.beforeLoad,u=t.scrollPosition,y=t.visibleByDefault;return r.state={visible:y},y&&(s(),c()),r.onVisible=r.onVisible.bind(ye(r)),r.isScrollTracked=!!(u&&Number.isFinite(u.x)&&u.x>=0&&Number.isFinite(u.y)&&u.y>=0),r}return e=v,(o=[{key:"componentDidUpdate",value:function(t,r){r.visible!==this.state.visible&&this.props.afterLoad()}},{key:"onVisible",value:function(){this.props.beforeLoad(),this.setState({visible:!0})}},{key:"render",value:function(){if(this.state.visible)return this.props.children;var t=this.props,r=t.className,c=t.delayMethod,s=t.delayTime,u=t.height,y=t.placeholder,w=t.scrollPosition,P=t.style,g=t.threshold,k=t.useIntersectionObserver,x=t.width;return this.isScrollTracked||k&&J()?b().createElement(Q,{className:r,height:u,onVisible:this.onVisible,placeholder:y,scrollPosition:w,style:P,threshold:g,useIntersectionObserver:k,width:x}):b().createElement(U,{className:r,delayMethod:c,delayTime:s,height:u,onVisible:this.onVisible,placeholder:y,style:P,threshold:g,width:x})}}])&&de(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),v}(b().Component);R.propTypes={afterLoad:a.PropTypes.func,beforeLoad:a.PropTypes.func,useIntersectionObserver:a.PropTypes.bool,visibleByDefault:a.PropTypes.bool},R.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},useIntersectionObserver:!0,visibleByDefault:!1};const X=R;function z(n){return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(n)}var _e=["afterLoad","beforeLoad","delayMethod","delayTime","effect","placeholder","placeholderSrc","scrollPosition","threshold","useIntersectionObserver","visibleByDefault","wrapperClassName","wrapperProps"];function je(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(f){return Object.getOwnPropertyDescriptor(n,f).enumerable})),o.push.apply(o,i)}return o}function Te(n){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?je(Object(o),!0).forEach(function(i){Ie(n,i,o[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):je(Object(o)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(o,i))})}return n}function Ie(n,e,o){return(e=Se(e))in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function he(){return he=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n},he.apply(this,arguments)}function Re(n,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,Se(i.key),i)}}function Se(n){var e=function(o,i){if(z(o)!=="object"||o===null)return o;var f=o[Symbol.toPrimitive];if(f!==void 0){var p=f.call(o,"string");if(z(p)!=="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(n);return z(e)==="symbol"?e:String(e)}function Oe(n,e){return Oe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,i){return o.__proto__=i,o},Oe(n,e)}function ve(n){return ve=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ve(n)}var we=function(n){(function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&Oe(t,r)})(v,n);var e,o,i,f,p=(i=v,f=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,r=ve(i);if(f){var c=ve(this).constructor;t=Reflect.construct(r,arguments,c)}else t=r.apply(this,arguments);return function(s,u){if(u&&(z(u)==="object"||typeof u=="function"))return u;if(u!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(y){if(y===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y}(s)}(this,t)});function v(t){var r;return function(c,s){if(!(c instanceof s))throw new TypeError("Cannot call a class as a function")}(this,v),(r=p.call(this,t)).state={loaded:!1},r}return e=v,(o=[{key:"onImageLoad",value:function(){var t=this;return this.state.loaded?null:function(r){t.props.onLoad(r),t.props.afterLoad(),t.setState({loaded:!0})}}},{key:"getImg",value:function(){var t=this.props,r=(t.afterLoad,t.beforeLoad,t.delayMethod,t.delayTime,t.effect,t.placeholder,t.placeholderSrc,t.scrollPosition,t.threshold,t.useIntersectionObserver,t.visibleByDefault,t.wrapperClassName,t.wrapperProps,function(c,s){if(c==null)return{};var u,y,w=function(g,k){if(g==null)return{};var x,C,fe={},ce=Object.keys(g);for(C=0;C<ce.length;C++)x=ce[C],k.indexOf(x)>=0||(fe[x]=g[x]);return fe}(c,s);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(c);for(y=0;y<P.length;y++)u=P[y],s.indexOf(u)>=0||Object.prototype.propertyIsEnumerable.call(c,u)&&(w[u]=c[u])}return w}(t,_e));return b().createElement("img",he({},r,{onLoad:this.onImageLoad()}))}},{key:"getLazyLoadImage",value:function(){var t=this.props,r=t.beforeLoad,c=t.className,s=t.delayMethod,u=t.delayTime,y=t.height,w=t.placeholder,P=t.scrollPosition,g=t.style,k=t.threshold,x=t.useIntersectionObserver,C=t.visibleByDefault,fe=t.width;return b().createElement(X,{beforeLoad:r,className:c,delayMethod:s,delayTime:u,height:y,placeholder:w,scrollPosition:P,style:g,threshold:k,useIntersectionObserver:x,visibleByDefault:C,width:fe},this.getImg())}},{key:"getWrappedLazyLoadImage",value:function(t){var r=this.props,c=r.effect,s=r.height,u=r.placeholderSrc,y=r.width,w=r.wrapperClassName,P=r.wrapperProps,g=this.state.loaded,k=g?" lazy-load-image-loaded":"",x=g||!u?{}:{backgroundImage:"url(".concat(u,")"),backgroundSize:"100% 100%"};return b().createElement("span",he({className:w+" lazy-load-image-background "+c+k,style:Te(Te({},x),{},{color:"transparent",display:"inline-block",height:s,width:y})},P),t)}},{key:"render",value:function(){var t=this.props,r=t.effect,c=t.placeholderSrc,s=t.visibleByDefault,u=t.wrapperClassName,y=t.wrapperProps,w=this.getLazyLoadImage();return(r||c)&&!s||u||y?this.getWrappedLazyLoadImage(w):w}}])&&Re(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),v}(b().Component);we.propTypes={onLoad:a.PropTypes.func,afterLoad:a.PropTypes.func,beforeLoad:a.PropTypes.func,delayMethod:a.PropTypes.string,delayTime:a.PropTypes.number,effect:a.PropTypes.string,placeholderSrc:a.PropTypes.string,threshold:a.PropTypes.number,useIntersectionObserver:a.PropTypes.bool,visibleByDefault:a.PropTypes.bool,wrapperClassName:a.PropTypes.string,wrapperProps:a.PropTypes.object},we.defaultProps={onLoad:function(){},afterLoad:function(){return{}},beforeLoad:function(){return{}},delayMethod:"throttle",delayTime:300,effect:"",placeholderSrc:null,threshold:100,useIntersectionObserver:!0,visibleByDefault:!1,wrapperClassName:""};const ke=we})(),Pe.exports=pe})()),Pe.exports}var Me=Ce();const Ve=({src:ge,placeholderSrc:be,alt:L,className:pe,width:d,height:b})=>Be.jsx(Me.LazyLoadImage,{alt:L,src:ge,placeholderSrc:be,effect:"blur",className:pe,width:d,height:b});export{Ve as L};
