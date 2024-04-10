(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function _(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=_(r);fetch(r.href,o)}})();var z,d,Se,O,ie,Ae,J,re,Q,Y,j={},De=[],Re=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,G=Array.isArray;function E(e,t){for(var _ in t)e[_]=t[_];return e}function Ee(e){var t=e.parentNode;t&&t.removeChild(e)}function ee(e,t,_){var n,r,o,i={};for(o in t)o=="key"?n=t[o]:o=="ref"?r=t[o]:i[o]=t[o];if(arguments.length>2&&(i.children=arguments.length>3?z.call(arguments,2):_),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)i[o]===void 0&&(i[o]=e.defaultProps[o]);return I(e,i,n,r,null)}function I(e,t,_,n,r){var o={type:e,props:t,key:_,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r??++Se,__i:-1,__u:0};return r==null&&d.vnode!=null&&d.vnode(o),o}function L(e){return e.children}function P(e,t){this.props=e,this.context=t}function U(e,t){if(t==null)return e.__?U(e.__,e.__i+1):null;for(var _;t<e.__k.length;t++)if((_=e.__k[t])!=null&&_.__e!=null)return _.__e;return typeof e.type=="function"?U(e):null}function He(e){var t,_;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((_=e.__k[t])!=null&&_.__e!=null){e.__e=e.__c.base=_.__e;break}return He(e)}}function ce(e){(!e.__d&&(e.__d=!0)&&O.push(e)&&!V.__r++||ie!==d.debounceRendering)&&((ie=d.debounceRendering)||Ae)(V)}function V(){var e,t,_,n,r,o,i,c;for(O.sort(J);e=O.shift();)e.__d&&(t=O.length,n=void 0,o=(r=(_=e).__v).__e,i=[],c=[],_.__P&&((n=E({},r)).__v=r.__v+1,d.vnode&&d.vnode(n),oe(_.__P,n,r,_.__n,_.__P.ownerSVGElement!==void 0,32&r.__u?[o]:null,i,o??U(r),!!(32&r.__u),c),n.__v=r.__v,n.__.__k[n.__i]=n,Ue(i,n,c),n.__e!=o&&He(n)),O.length>t&&O.sort(J));V.__r=0}function Oe(e,t,_,n,r,o,i,c,u,a,p){var l,h,s,b,$,x=n&&n.__k||De,v=t.length;for(_.__d=u,qe(_,t,x),u=_.__d,l=0;l<v;l++)(s=_.__k[l])!=null&&typeof s!="boolean"&&typeof s!="function"&&(h=s.__i===-1?j:x[s.__i]||j,s.__i=l,oe(e,s,h,r,o,i,c,u,a,p),b=s.__e,s.ref&&h.ref!=s.ref&&(h.ref&&le(h.ref,null,s),p.push(s.ref,s.__c||b,s)),$==null&&b!=null&&($=b),65536&s.__u||h.__k===s.__k?(u&&!u.isConnected&&(u=U(h)),u=Le(s,u,e)):typeof s.type=="function"&&s.__d!==void 0?u=s.__d:b&&(u=b.nextSibling),s.__d=void 0,s.__u&=-196609);_.__d=u,_.__e=$}function qe(e,t,_){var n,r,o,i,c,u=t.length,a=_.length,p=a,l=0;for(e.__k=[],n=0;n<u;n++)i=n+l,(r=e.__k[n]=(r=t[n])==null||typeof r=="boolean"||typeof r=="function"?null:typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?I(null,r,null,null,null):G(r)?I(L,{children:r},null,null,null):r.constructor===void 0&&r.__b>0?I(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)!=null?(r.__=e,r.__b=e.__b+1,c=ze(r,_,i,p),r.__i=c,o=null,c!==-1&&(p--,(o=_[c])&&(o.__u|=131072)),o==null||o.__v===null?(c==-1&&l--,typeof r.type!="function"&&(r.__u|=65536)):c!==i&&(c===i+1?l++:c>i?p>u-i?l+=c-i:l--:c<i?c==i-1&&(l=c-i):l=0,c!==n+l&&(r.__u|=65536))):(o=_[i])&&o.key==null&&o.__e&&!(131072&o.__u)&&(o.__e==e.__d&&(e.__d=U(o)),te(o,o,!1),_[i]=null,p--);if(p)for(n=0;n<a;n++)(o=_[n])!=null&&!(131072&o.__u)&&(o.__e==e.__d&&(e.__d=U(o)),te(o,o))}function Le(e,t,_){var n,r;if(typeof e.type=="function"){for(n=e.__k,r=0;n&&r<n.length;r++)n[r]&&(n[r].__=e,t=Le(n[r],t,_));return t}e.__e!=t&&(_.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType===8);return t}function R(e,t){return t=t||[],e==null||typeof e=="boolean"||(G(e)?e.some(function(_){R(_,t)}):t.push(e)),t}function ze(e,t,_,n){var r=e.key,o=e.type,i=_-1,c=_+1,u=t[_];if(u===null||u&&r==u.key&&o===u.type&&!(131072&u.__u))return _;if(n>(u!=null&&!(131072&u.__u)?1:0))for(;i>=0||c<t.length;){if(i>=0){if((u=t[i])&&!(131072&u.__u)&&r==u.key&&o===u.type)return i;i--}if(c<t.length){if((u=t[c])&&!(131072&u.__u)&&r==u.key&&o===u.type)return c;c++}}return-1}function ae(e,t,_){t[0]==="-"?e.setProperty(t,_??""):e[t]=_==null?"":typeof _!="number"||Re.test(t)?_:_+"px"}function F(e,t,_,n,r){var o;e:if(t==="style")if(typeof _=="string")e.style.cssText=_;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)_&&t in _||ae(e.style,t,"");if(_)for(t in _)n&&_[t]===n[t]||ae(e.style,t,_[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in e||t==="onFocusOut"||t==="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=_,_?n?_.u=n.u:(_.u=re,e.addEventListener(t,o?Y:Q,o)):e.removeEventListener(t,o?Y:Q,o);else{if(r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t in e)try{e[t]=_??"";break e}catch{}typeof _=="function"||(_==null||_===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,_))}}function ue(e){return function(t){if(this.l){var _=this.l[t.type+e];if(t.t==null)t.t=re++;else if(t.t<_.u)return;return _(d.event?d.event(t):t)}}}function oe(e,t,_,n,r,o,i,c,u,a){var p,l,h,s,b,$,x,v,k,C,T,H,m,N,S,w=t.type;if(t.constructor!==void 0)return null;128&_.__u&&(u=!!(32&_.__u),o=[c=t.__e=_.__e]),(p=d.__b)&&p(t);e:if(typeof w=="function")try{if(v=t.props,k=(p=w.contextType)&&n[p.__c],C=p?k?k.props.value:p.__:n,_.__c?x=(l=t.__c=_.__c).__=l.__E:("prototype"in w&&w.prototype.render?t.__c=l=new w(v,C):(t.__c=l=new P(v,C),l.constructor=w,l.render=Ze),k&&k.sub(l),l.props=v,l.state||(l.state={}),l.context=C,l.__n=n,h=l.__d=!0,l.__h=[],l._sb=[]),l.__s==null&&(l.__s=l.state),w.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=E({},l.__s)),E(l.__s,w.getDerivedStateFromProps(v,l.__s))),s=l.props,b=l.state,l.__v=t,h)w.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(w.getDerivedStateFromProps==null&&v!==s&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(v,C),!l.__e&&(l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(v,l.__s,C)===!1||t.__v===_.__v)){for(t.__v!==_.__v&&(l.props=v,l.state=l.__s,l.__d=!1),t.__e=_.__e,t.__k=_.__k,t.__k.forEach(function(A){A&&(A.__=t)}),T=0;T<l._sb.length;T++)l.__h.push(l._sb[T]);l._sb=[],l.__h.length&&i.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(v,l.__s,C),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(s,b,$)})}if(l.context=C,l.props=v,l.__P=e,l.__e=!1,H=d.__r,m=0,"prototype"in w&&w.prototype.render){for(l.state=l.__s,l.__d=!1,H&&H(t),p=l.render(l.props,l.state,l.context),N=0;N<l._sb.length;N++)l.__h.push(l._sb[N]);l._sb=[]}else do l.__d=!1,H&&H(t),p=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++m<25);l.state=l.__s,l.getChildContext!=null&&(n=E(E({},n),l.getChildContext())),h||l.getSnapshotBeforeUpdate==null||($=l.getSnapshotBeforeUpdate(s,b)),Oe(e,G(S=p!=null&&p.type===L&&p.key==null?p.props.children:p)?S:[S],t,_,n,r,o,i,c,u,a),l.base=t.__e,t.__u&=-161,l.__h.length&&i.push(l),x&&(l.__E=l.__=null)}catch(A){t.__v=null,u||o!=null?(t.__e=c,t.__u|=u?160:32,o[o.indexOf(c)]=null):(t.__e=_.__e,t.__k=_.__k),d.__e(A,t,_)}else o==null&&t.__v===_.__v?(t.__k=_.__k,t.__e=_.__e):t.__e=Ge(_.__e,t,_,n,r,o,i,u,a);(p=d.diffed)&&p(t)}function Ue(e,t,_){t.__d=void 0;for(var n=0;n<_.length;n++)le(_[n],_[++n],_[++n]);d.__c&&d.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(o){o.call(r)})}catch(o){d.__e(o,r.__v)}})}function Ge(e,t,_,n,r,o,i,c,u){var a,p,l,h,s,b,$,x=_.props,v=t.props,k=t.type;if(k==="svg"&&(r=!0),o!=null){for(a=0;a<o.length;a++)if((s=o[a])&&"setAttribute"in s==!!k&&(k?s.localName===k:s.nodeType===3)){e=s,o[a]=null;break}}if(e==null){if(k===null)return document.createTextNode(v);e=r?document.createElementNS("http://www.w3.org/2000/svg",k):document.createElement(k,v.is&&v),o=null,c=!1}if(k===null)x===v||c&&e.data===v||(e.data=v);else{if(o=o&&z.call(e.childNodes),x=_.props||j,!c&&o!=null)for(x={},a=0;a<e.attributes.length;a++)x[(s=e.attributes[a]).name]=s.value;for(a in x)s=x[a],a=="children"||(a=="dangerouslySetInnerHTML"?l=s:a==="key"||a in v||F(e,a,null,s,r));for(a in v)s=v[a],a=="children"?h=s:a=="dangerouslySetInnerHTML"?p=s:a=="value"?b=s:a=="checked"?$=s:a==="key"||c&&typeof s!="function"||x[a]===s||F(e,a,s,x[a],r);if(p)c||l&&(p.__html===l.__html||p.__html===e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(l&&(e.innerHTML=""),Oe(e,G(h)?h:[h],t,_,n,r&&k!=="foreignObject",o,i,o?o[0]:_.__k&&U(_,0),c,u),o!=null)for(a=o.length;a--;)o[a]!=null&&Ee(o[a]);c||(a="value",b!==void 0&&(b!==e[a]||k==="progress"&&!b||k==="option"&&b!==x[a])&&F(e,a,b,x[a],!1),a="checked",$!==void 0&&$!==e[a]&&F(e,a,$,x[a],!1))}return e}function le(e,t,_){try{typeof e=="function"?e(t):e.current=t}catch(n){d.__e(n,_)}}function te(e,t,_){var n,r;if(d.unmount&&d.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||le(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(o){d.__e(o,t)}n.base=n.__P=null}if(n=e.__k)for(r=0;r<n.length;r++)n[r]&&te(n[r],t,_||typeof e.type!="function");_||e.__e==null||Ee(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function Ze(e,t,_){return this.constructor(e,_)}function Ke(e,t,_){var n,r,o,i;d.__&&d.__(e,t),r=(n=typeof _=="function")?null:_&&_.__k||t.__k,o=[],i=[],oe(t,e=(!n&&_||t).__k=ee(L,null,[e]),r||j,j,t.ownerSVGElement!==void 0,!n&&_?[_]:r?null:t.firstChild?z.call(t.childNodes):null,o,!n&&_?_:r?r.__e:t.firstChild,n,i),Ue(o,e,i)}z=De.slice,d={__e:function(e,t,_,n){for(var r,o,i;t=t.__;)if((r=t.__c)&&!r.__)try{if((o=r.constructor)&&o.getDerivedStateFromError!=null&&(r.setState(o.getDerivedStateFromError(e)),i=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,n||{}),i=r.__d),i)return r.__E=r}catch(c){e=c}throw e}},Se=0,P.prototype.setState=function(e,t){var _;_=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=E({},this.state),typeof e=="function"&&(e=e(E({},_),this.props)),e&&E(_,e),e!=null&&this.__v&&(t&&this._sb.push(t),ce(this))},P.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ce(this))},P.prototype.render=L,O=[],Ae=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,J=function(e,t){return e.__v.__b-t.__v.__b},V.__r=0,re=0,Q=ue(!1),Y=ue(!0);var q,y,K,se,_e=0,Te=[],W=[],g=d,fe=g.__b,pe=g.__r,de=g.diffed,he=g.__c,ve=g.unmount,me=g.__;function je(e,t){g.__h&&g.__h(y,e,_e||t),_e=0;var _=y.__H||(y.__H={__:[],__h:[]});return e>=_.__.length&&_.__.push({__V:W}),_.__[e]}function D(e){return _e=1,Xe(Fe,e)}function Xe(e,t,_){var n=je(q++,2);if(n.t=e,!n.__c&&(n.__=[_?_(t):Fe(void 0,t),function(c){var u=n.__N?n.__N[0]:n.__[0],a=n.t(u,c);u!==a&&(n.__N=[a,n.__[1]],n.__c.setState({}))}],n.__c=y,!y.u)){var r=function(c,u,a){if(!n.__c.__H)return!0;var p=n.__c.__H.__.filter(function(h){return!!h.__c});if(p.every(function(h){return!h.__N}))return!o||o.call(this,c,u,a);var l=!1;return p.forEach(function(h){if(h.__N){var s=h.__[0];h.__=h.__N,h.__N=void 0,s!==h.__[0]&&(l=!0)}}),!(!l&&n.__c.props===c)&&(!o||o.call(this,c,u,a))};y.u=!0;var o=y.shouldComponentUpdate,i=y.componentWillUpdate;y.componentWillUpdate=function(c,u,a){if(this.__e){var p=o;o=void 0,r(c,u,a),o=p}i&&i.call(this,c,u,a)},y.shouldComponentUpdate=r}return n.__N||n.__}function Je(e,t){var _=je(q++,3);!g.__s&&et(_.__H,t)&&(_.__=e,_.i=t,y.__H.__h.push(_))}function Qe(){for(var e;e=Te.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(B),e.__H.__h.forEach(ne),e.__H.__h=[]}catch(t){e.__H.__h=[],g.__e(t,e.__v)}}g.__b=function(e){y=null,fe&&fe(e)},g.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),me&&me(e,t)},g.__r=function(e){pe&&pe(e),q=0;var t=(y=e.__c).__H;t&&(K===y?(t.__h=[],y.__h=[],t.__.forEach(function(_){_.__N&&(_.__=_.__N),_.__V=W,_.__N=_.i=void 0})):(t.__h.forEach(B),t.__h.forEach(ne),t.__h=[],q=0)),K=y},g.diffed=function(e){de&&de(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Te.push(t)!==1&&se===g.requestAnimationFrame||((se=g.requestAnimationFrame)||Ye)(Qe)),t.__H.__.forEach(function(_){_.i&&(_.__H=_.i),_.__V!==W&&(_.__=_.__V),_.i=void 0,_.__V=W})),K=y=null},g.__c=function(e,t){t.some(function(_){try{_.__h.forEach(B),_.__h=_.__h.filter(function(n){return!n.__||ne(n)})}catch(n){t.some(function(r){r.__h&&(r.__h=[])}),t=[],g.__e(n,_.__v)}}),he&&he(e,t)},g.unmount=function(e){ve&&ve(e);var t,_=e.__c;_&&_.__H&&(_.__H.__.forEach(function(n){try{B(n)}catch(r){t=r}}),_.__H=void 0,t&&g.__e(t,_.__v))};var ye=typeof requestAnimationFrame=="function";function Ye(e){var t,_=function(){clearTimeout(n),ye&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(_,100);ye&&(t=requestAnimationFrame(_))}function B(e){var t=y,_=e.__c;typeof _=="function"&&(e.__c=void 0,_()),y=t}function ne(e){var t=y;e.__c=e.__(),y=t}function et(e,t){return!e||e.length!==t.length||t.some(function(_,n){return _!==e[n]})}function Fe(e,t){return typeof t=="function"?t(e):t}var tt=0;function f(e,t,_,n,r,o){var i,c,u={};for(c in t)c=="ref"?i=t[c]:u[c]=t[c];var a={type:e,props:u,key:_,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--tt,__i:-1,__u:0,__source:r,__self:o};if(typeof e=="function"&&(i=e.defaultProps))for(c in i)u[c]===void 0&&(u[c]=i[c]);return d.vnode&&d.vnode(a),a}function _t({children:e}){return f("div",{className:"h-screen w-screen bg-japanese-blue",children:[f("nav",{className:"w-full top-0 h-16 bg-clickferry flex justify-center"}),f("content",{className:"w-full flex flex-col items-center px-6 md:px-12 py-4",children:e})]})}function nt(e,t){for(var _ in t)e[_]=t[_];return e}function ge(e,t){for(var _ in e)if(_!=="__source"&&!(_ in t))return!0;for(var n in t)if(n!=="__source"&&e[n]!==t[n])return!0;return!1}function be(e,t){this.props=e,this.context=t}(be.prototype=new P).isPureReactComponent=!0,be.prototype.shouldComponentUpdate=function(e,t){return ge(this.props,e)||ge(this.state,t)};var xe=d.__b;d.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),xe&&xe(e)};var rt=d.__e;d.__e=function(e,t,_,n){if(e.then){for(var r,o=t;o=o.__;)if((r=o.__c)&&r.__c)return t.__e==null&&(t.__e=_.__e,t.__k=_.__k),r.__c(e,t)}rt(e,t,_,n)};var ke=d.unmount;function Me(e,t,_){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(n){typeof n.__c=="function"&&n.__c()}),e.__c.__H=null),(e=nt({},e)).__c!=null&&(e.__c.__P===_&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(n){return Me(n,t,_)})),e}function Ie(e,t,_){return e&&_&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(n){return Ie(n,t,_)}),e.__c&&e.__c.__P===t&&(e.__e&&_.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=_)),e}function X(){this.__u=0,this.t=null,this.__b=null}function We(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function M(){this.u=null,this.o=null}d.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),ke&&ke(e)},(X.prototype=new P).__c=function(e,t){var _=t.__c,n=this;n.t==null&&(n.t=[]),n.t.push(_);var r=We(n.__v),o=!1,i=function(){o||(o=!0,_.__R=null,r?r(c):c())};_.__R=i;var c=function(){if(!--n.__u){if(n.state.__a){var u=n.state.__a;n.__v.__k[0]=Ie(u,u.__c.__P,u.__c.__O)}var a;for(n.setState({__a:n.__b=null});a=n.t.pop();)a.forceUpdate()}};n.__u++||32&t.__u||n.setState({__a:n.__b=n.__v.__k[0]}),e.then(i,i)},X.prototype.componentWillUnmount=function(){this.t=[]},X.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var _=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=Me(this.__b,_,n.__O=n.__P)}this.__b=null}var r=t.__a&&ee(L,null,e.fallback);return r&&(r.__u&=-33),[ee(L,null,t.__a?null:e.children),r]};var Ne=function(e,t,_){if(++_[1]===_[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(_=e.u;_;){for(;_.length>3;)_.pop()();if(_[1]<_[0])break;e.u=_=_[2]}};(M.prototype=new P).__a=function(e){var t=this,_=We(t.__v),n=t.o.get(e);return n[0]++,function(r){var o=function(){t.props.revealOrder?(n.push(r),Ne(t,e,n)):r()};_?_(o):o()}},M.prototype.render=function(e){this.u=null,this.o=new Map;var t=R(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var _=t.length;_--;)this.o.set(t[_],this.u=[1,0,this.u]);return e.children},M.prototype.componentDidUpdate=M.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,_){Ne(e,_,t)})};var ot=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,lt=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,it=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,ct=/[A-Z0-9]/g,at=typeof document<"u",ut=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};P.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(P.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var we=d.event;function st(){}function ft(){return this.cancelBubble}function pt(){return this.defaultPrevented}d.event=function(e){return we&&(e=we(e)),e.persist=st,e.isPropagationStopped=ft,e.isDefaultPrevented=pt,e.nativeEvent=e};var dt={enumerable:!1,configurable:!0,get:function(){return this.class}},$e=d.vnode;d.vnode=function(e){typeof e.type=="string"&&function(t){var _=t.props,n=t.type,r={};for(var o in _){var i=_[o];if(!(o==="value"&&"defaultValue"in _&&i==null||at&&o==="children"&&n==="noscript"||o==="class"||o==="className")){var c=o.toLowerCase();o==="defaultValue"&&"value"in _&&_.value==null?o="value":o==="download"&&i===!0?i="":c==="translate"&&i==="no"?i=!1:c==="ondoubleclick"?o="ondblclick":c!=="onchange"||n!=="input"&&n!=="textarea"||ut(_.type)?c==="onfocus"?o="onfocusin":c==="onblur"?o="onfocusout":it.test(o)?o=c:n.indexOf("-")===-1&&lt.test(o)?o=o.replace(ct,"-$&").toLowerCase():i===null&&(i=void 0):c=o="oninput",c==="oninput"&&r[o=c]&&(o="oninputCapture"),r[o]=i}}n=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=R(_.children).forEach(function(u){u.props.selected=r.value.indexOf(u.props.value)!=-1})),n=="select"&&r.defaultValue!=null&&(r.value=R(_.children).forEach(function(u){u.props.selected=r.multiple?r.defaultValue.indexOf(u.props.value)!=-1:r.defaultValue==u.props.value})),_.class&&!_.className?(r.class=_.class,Object.defineProperty(r,"className",dt)):(_.className&&!_.class||_.class&&_.className)&&(r.class=r.className=_.className),t.props=r}(e),e.$$typeof=ot,$e&&$e(e)};var Ce=d.__r;d.__r=function(e){Ce&&Ce(e),e.__c};var Pe=d.diffed;d.diffed=function(e){Pe&&Pe(e);var t=e.props,_=e.__e;_!=null&&e.type==="textarea"&&"value"in t&&t.value!==_.value&&(_.value=t.value==null?"":t.value)};const ht=10;function vt(){const[e,t]=D(""),[_,n]=D(0),[r,o]=D(0),[i,c]=D(0),[u,a]=D(!1),[p,l]=D([]),[h,s]=D([]),[b,$]=D(0);Je(()=>{if(h.lenth<1)return;let N=Math.min(20-(_-r-1),20)/20;console.log("CHANCES",(N*100).toFixed(2)+"%");let S=0;h.forEach(w=>{let A=w.reduce((Be,Z)=>{let Ve=Z*(Z+1)/2/Z;return Be+Ve},0);console.log(i,A,i+A),S+=(A+i)*N}),$(S.toFixed(2))},[_,r,i,h]);const x=m=>t(m.target.value),v=()=>{a(!1),l([])},k=m=>{p.length>=ht||l(N=>[...N,m])},C=()=>{p.length<1||(console.log(p,h),s(m=>[...m,p]),a(!1),l([]))},T=m=>{let N=[...h];N.splice(m,1),s(N)},H=[4,6,8,10,12,20];return f("div",{className:"w-full max-w-[800px] bg-blue-400 p-4 rounded-md",children:[f("input",{className:"input w-full px-2 mb-5 rounded-sm",onChange:x,placeholder:"Nombre de la jugada",value:e}),f("div",{className:"flex justify-around",children:[f("div",{className:" gap-2",children:[f("label",{for:"caInput",children:"CA:"}),f("input",{id:"caInput",type:"number",className:"w-8 rounded-sm flex flex-center text-center ",maxLength:2,value:_,placeholder:0,onChange:m=>n(m.target.value)})]}),f("div",{className:" gap-2",children:[f("label",{for:"bonusAttackInput",children:"Bonificador Ataque:"}),f("input",{id:"bonusAttackInput",type:"number",className:"w-8 rounded-sm flex flex-center text-center",maxLength:2,value:r,placeholder:0,onChange:m=>o(m.target.value)})]}),f("div",{className:" gap-2",children:[f("label",{for:"bonusDamageInput",children:"Bonificador Daño:"}),f("input",{id:"bonusDamageInput",type:"number",className:"w-8 rounded-sm flex flex-center text-center",maxLength:2,value:i,placeholder:0,onChange:m=>c(m.target.value)})]})]}),f("div",{className:"w-full h-28 mt-2 flex justify-center items-center",children:u?f("div",{class:"w-[400px] m-auto",children:[f("div",{className:"flex justify-end w-full",children:f("button",{className:"flex justify-center py-1 px-2 rounded-md",onclick:v,children:"X"})}),f("div",{children:[f("div",{className:"flex justify-center gap-3 px-10 mt-2 ",children:H.map((m,N)=>f("button",{className:"bg-white rounded-md py-1 px-3 font-bold border border-slate-800 w-14",onclick:()=>k(m),children:m},N))}),f("div",{className:"w-full"})]})]}):f("div",{className:"w-full flex justify-center",children:f("button",{className:"px-2 py-1 rounded-md bg-white ",onClick:()=>a(!0),children:"Añadir Ataque"})})}),f("div",{className:"w-full flex gap-1 mt-5",children:[f("div",{className:"grow flex gap-3",children:p.map(m=>f("span",{className:"bg-white text-xs rounded-full flex items-center justify-center px-3",children:m}))}),f("div",{children:f("button",{className:"flex text-green-800 bg-green-300 justify-center py-1 px-2 rounded-md "+(p.length<1?"invisible":""),onclick:C,children:"Seleccionar"})})]}),f("div",{className:"w-full flex justify-between",children:[f("div",{className:"text-center",children:[f("p",{children:"Daño medio"}),f("p",{className:"text-xl",children:b})]}),f("div",{})]}),f("div",{className:"px-1 flex flex-col gap-2 pt-4",children:h.map((m,N)=>f(L,{children:f("div",{class:"flex flex-grow w-full items-center py-2 px-2 bg-blue-200 rounded-sm",children:[f("div",{class:"flex gap-2 grow",children:m.map((S,w)=>f("span",{className:"bg-white text-xs rounded-full flex items-center justify-center px-3",children:S},w))}),f("div",{children:f("button",{onclick:()=>T(N),children:f("span",{className:"text-xs",children:"x"})})})]},N)}))})]})}function mt(){return f(_t,{children:f(vt,{})})}Ke(f(mt,{}),document.getElementById("app"));
