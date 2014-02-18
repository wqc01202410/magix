define("magix/magix",function(){var e=/\/\.\/|\/[^\/.]+?\/\.{2}\/|([^:\/])\/\/+|\.{2}\//,t=/\/[^\/]*$/,r=/[#?].*$/,n="",i=/([^=&?\/#]+)=?([^&=#?]*)/g,a="pathname",o=/^https?:\/\//i,s=0,c="/",f="vframe",u="\n",v=window.console,m=v&&v.error,l=function(){},h={tagName:f,rootId:"magix_vf_root",execError:function(e){m&&v.error(e)}},d=h.hasOwnProperty,g=function(e,t){return e?d.call(e,t):e},p=function(e){return function(t,r,n){switch(arguments.length){case 0:n=e;break;case 1:n=M.isObject(t)?w(e,t):g(e,t)?e[t]:null;break;case 2:null===r?(delete e[t],n=r):e[t]=n=r}return n}},x=function(e,t){return t.f==e.f?t.t-e.t:t.f-e.f},y=function(e,t){var r=this;return r.get?(r.c=[],r.x=e||20,r.b=r.x+(0|t||5),void 0):new y(e,t)},w=function(e,t,r){for(var n in t)r&&g(r,n)||(e[n]=t[n]);return e};w(y.prototype,{get:function(e){var t,r=this,n=r.c;return e=a+e,g(n,e)&&(t=n[e],t.f>=1&&(t.f++,t.t=s++,t=t.v)),t},set:function(e,t,r){var n=this,i=n.c,o=a+e,c=i[o];if(!g(i,o)){if(i.length>=n.b){i.sort(x);for(var f=n.b-n.x;f--;)c=i.pop(),delete i[c.k],c.m&&E(c.m,c.o,c)}c={},i.push(c),i[o]=c}return c.o=e,c.k=o,c.v=t,c.f=1,c.t=s++,c.m=r,t},del:function(e){e=a+e;var t=this.c,r=t[e];r&&(r.f=-1e5,r.v=n,delete t[e],r.m&&(E(r.m,r.o,r),r.m=n))},has:function(e){return e=a+e,g(this.c,e)}});var b=y(60),C=y(),E=function(e,t,r,n,i,a){for(M.isArray(e)||(e=[e]),t&&(M.isArray(t)||t.callee)||(t=[t]),n=0;e.length>n;n++)try{a=e[n],i=a&&a.apply(r,t)}catch(o){h.execError(o)}return i},M={mix:w,has:g,safeExec:E,noop:l,config:p(h),start:function(e){var t=this;w(h,e),t.libRequire(h.iniFile,function(r){h=w(h,r,e),h["!tnc"]=h.tagName!=f;var n=h.progress;t.libRequire(["magix/router","magix/vom"],function(e,r){e.on("!ul",r.locChged),e.on("changed",r.locChged),n&&r.on("progress",n),t.libRequire(h.extensions,e.start)})})},keys:Object.keys||function(e){var t=[];for(var r in e)g(e,r)&&t.push(r);return t},local:p({}),path:function(i,a){var s=i+u+a,f=C.get(s);if(!f){if(o.test(a))f=a;else if(i=i.replace(r,n).replace(t,n)+c,a.charAt(0)==c){var v=o.test(i)?8:0,m=i.indexOf(c,v);f=i.substring(0,m)+a}else f=i+a;for(;e.test(f);)f=f.replace(e,"$1/");C.set(s,f)}return f},pathToObject:function(e,t){var s=e+u+t,f=b.get(s);if(!f){f={};var v={},m=n;r.test(e)?m=e.replace(r,n):~e.indexOf("=")||(m=e);var l=e.replace(m,n);if(m&&o.test(m)){var h=m.indexOf(c,8);m=~h?m.substring(h):c}l.replace(i,function(e,r,n){if(t)try{n=decodeURIComponent(n)}catch(i){}v[r]=n}),f[a]=m,f.params=v,b.set(s,f)}return f},objectToPath:function(e,t,r){var n,i=e[a],o=[],s=e.params;for(var c in s)n=s[c],(!r||n||g(r,c))&&(t&&(n=encodeURIComponent(n)),o.push(c+"="+n));return o.length&&(i=i+"?"+o.join("&")),i},listToMap:function(e,t){var r,n,i,a={};if(M.isString(e)&&(e=e.split(",")),e&&(i=e.length))for(r=0;i>r;r++)n=e[r],a[t?n[t]:n]=t?n:1;return a},cache:y},P=Object.prototype.toString;return w(M,{libRequire:function(e,t){e?seajs.use(e,t):t&&t()},isArray:$.isArray,isFunction:$.isFunction,isObject:function(e){return"[object Object]"==P.call(e)},isString:function(e){return"[object String]"==P.call(e)},isNumber:function(e){return"[object Number]"==P.call(e)},extend:function(e,t,r,n){e.superclass=t.prototype,t.prototype.constructor=t;var i=function(){};return i.prototype=t.prototype,e.prototype=new i,M.mix(e.prototype,r),M.mix(e,n),e.prototype.constructor=e,e}})}),define("magix/router",["magix/magix","magix/event"],function(e){var t,r,n,i,a=e("magix/magix"),o=e("magix/event"),s=window,c="",f="pathname",u="view",v=a.has,m=a.mix,l=document,h=a.keys,d=/^UTF-8$/i.test(l.charset||l.characterSet||"UTF-8"),g=a.config(),p=a.cache(),x=a.cache(40),y={params:{},href:c},w=/#.*$/,b=/^[^#]*#?!?/,C="params",E=g.nativeHistory,M=function(e,t,r){if(e){r=this[C],a.isString(e)&&(e=e.split(","));for(var n=0;e.length>n&&!(t=v(r,e[n]));n++);}return t},P=function(){return this[f]},T=function(){return this[u]},O=function(e,t,r,n){return r=this,n=r[C],arguments.length>1?n[e]=t:n[e]},V=function(e){var t=a.pathToObject(e,d),r=t[f];return r&&i&&(t[f]=a.path(s.location[f],r)),t},I=m({viewInfo:function(e,t){var n,i;if(!r){r={rs:g.routes||{},nf:g.notFoundView};var o=g.defaultView;r.dv=o;var s=g.defaultPathname||c;n=r.rs,r.f=a.isFunction(n),r.f||n[s]||!o||(n[s]=o),r[f]=s}return e||(e=r[f]),n=r.rs,i=r.f?n.call(g,e,t):n[e],{view:i||r.nf||r.dv,pathname:i||E||r.nf?e:r[f]}},start:function(){var e=I,t=s.history;n=E&&t.pushState,i=E&&!n,n?e.useState():e.useHash(),e.route()},parseQH:function(e,t){e=e||s.location.href;var r=I,n=p.get(e);if(!n){var i=e.replace(w,c),a=e.replace(b,c),o=V(i),v=V(a),l={};m(l,o[C]),m(l,v[C]),n={get:O,set:O,href:e,refHref:y.href,srcQuery:i,srcHash:a,query:o,hash:v,params:l},p.set(e,n)}if(t&&!n[u]){var h;h=E?n.hash[f]||n.query[f]:n.hash[f];var d=r.viewInfo(h,n);m(n,d)}return n},getChged:function(e,t){var r=e.href,n=t.href,i=r+"\n"+n,a=x.get(i);if(!a){var o,s,c;a={},a[u]=c,a[f]=c,a[C]={};var v,m,l=[f,u];for(v=1;v>=0;v--)m=l[v],s=e[m],c=t[m],s!=c&&(a[m]={from:s,to:c},o=1);var d=e[C],g=t[C];for(l=h(d).concat(h(g)),v=l.length-1;v>=0;v--)m=l[v],s=d[m],c=g[m],s!=c&&(a[C][m]={from:s,to:c},o=1);a.occur=o,a.isParam=M,a.isPathname=P,a.isView=T,x.set(i,a)}return a},route:function(){var e=I,r=e.parseQH(0,1),n=!y.get,i=e.getChged(y,r);y=r,i.occur&&(t=r,e.fire("changed",{location:r,changed:i,force:n}))},navigate:function(e,r,o){var s=I;if(!r&&a.isObject(e)&&(r=e,e=c),r&&(e=a.objectToPath({params:r,pathname:e},d)),e){var u=V(e),l={};if(l[C]=m({},u[C]),l[f]=u[f],l[f]){if(i){var h=t.query[C];for(var g in h)v(h,g)&&!v(l[C],g)&&(l[C][g]=c)}}else{var p=m({},t[C]);l[C]=m(p,l[C]),l[f]=t[f]}var x,y=a.objectToPath(l,d,t.query[C]);x=n?y!=t.srcQuery:y!=t.srcHash,x&&(n?(s.poped=1,history[o?"replaceState":"pushState"](c,c,y),s.route()):(m(l,t,l),l.srcHash=y,l.hash={params:l[C],pathname:l[f]},s.fire("!ul",{loc:t=l}),y="#!"+y,o?location.replace(y):location.hash=y))}}},o);return I.useState=function(){var e=I,t=location.href;$(s).on("popstate",function(){var r=location.href==t;(e.poped||!r)&&(e.poped=1,e.route())})},I.useHash=function(){$(s).on("hashchange",I.route)},I}),define("magix/body",["magix/magix"],function(e){var t,r=e("magix/magix"),n=r.has,i=r.mix,a={},o=document.body,s={},c=String.fromCharCode(26),f="mx-ei",u="mx-owner",v="addEventListener",m="removeEventListener",l=o[v],h={},d=65536,g="on",p=",",x=function(e){return e.id||(e.id="mx-e-"+d--)},y=function(e,t,r){return e&&e.setAttribute&&(r?e.setAttribute(t,r):r=e.getAttribute(t)),r},w=function(){this.returnValue=!1},b=function(){this.cancelBubble=!0},C={special:function(e){i(a,e)},process:function(e){if(e=e||window.event,e&&!e[g]){var r=e.target||e.srcElement||o;for(e[g]=1;r&&1!=r.nodeType;)r=r.parentNode;var i=r,a=e.type,s=h[a]||(h[a]=RegExp(p+a+"(?:,|$)"));if(!s.test(y(r,f))){for(var v,m,d="mx-"+a,$=[];i&&(v=y(i,d),m=y(i,f),!v&&!s.test(m));)$.push(i),i=i.parentNode;if(v){var C,E=v.split(c);if(E.length>1&&(C=E[0],v=E.pop()),C=C||y(i,u),!C)for(var M=i,P=t.all();M;){if(n(P,M.id)){y(i,u,C=M.id);break}M=M.parentNode}if(!C)throw Error("bad:"+v);var T=t.get(C),O=T&&T.view;O&&(l||(e.preventDefault=w,e.stopPropagation=b),O.processEvent({info:v,se:e,st:a,tId:x(r),cId:x(i)}))}else for(var V;$.length;)V=$.shift(),m=y(V,f)||g,s.test(m)||(m=m+p+a,y(V,f,m))}}},act:function(e,r,n){var i=s[e]||0,c=i>0?1:0,f=C.process;if(i+=r?-c:c,!i){n&&(t=n);var u=a[e];u?C.lib(o,e,r,f):l?o[r?m:v](e,f,!1):o[g+e]=r?null:f,r||(i=1)}s[e]=i}},E={focus:2,blur:2,mouseenter:2,mouseleave:2};return C.special(E),C.lib=function(e,t,r,n){var i=E[t];1==i?$(e)[r?"off":"on"](t,n):$(e)[(r?"un":"")+"delegate"]("[mx-"+t+"]",t,n)},C}),define("magix/event",["magix/magix"],function(e){var t=e("magix/magix"),r=function(e){return"~"+e},n=t.safeExec,i={fire:function(e,t,i,a){var o=r(e),s=this,c=s[o];if(c){t||(t={}),t.type||(t.type=e);for(var f,u,v=c.length,m=v-1;v--;)f=a?v:m-v,u=c[f],(u.d||u.r)&&(c.splice(f,1),m--),u.d||n(u.f,t,s)}i&&delete s[o]},on:function(e,t,n){var i=r(e),a=this[i]||(this[i]=[]);isNaN(n)?a.push({f:t,r:n}):a.splice(0|n,0,{f:t})},off:function(e,t){var n=r(e),i=this[n];if(i)if(t){for(var a,o=i.length-1;o>=0;o--)if(a=i[o],a.f==t&&!a.d){a.d=1;break}}else delete this[n]},once:function(e,t){this.on(e,t,r)}};return i}),define("magix/vframe",["magix/magix","magix/event","magix/view"],function(e){var t,r,n,i,a,o=e("magix/magix"),s=e("magix/event"),c=e("magix/view"),f=document,u=f.body,v=65536,m=o.safeExec,l=[],h=l.slice,d=o.mix,g=o.config("tagName"),p=o.config("rootId"),x=o.config("!tnc"),y=o.has,w=x?"mx-vframe":"mx-defer",b=u.contains,$=x&&u.querySelectorAll,C=" "+g+"[mx-vframe]",E="alter",M="created",P=function(e){return"object"==typeof e?e:f.getElementById(e)},T=function(e,t,r){return t=P(e),t&&(r=$?f.querySelectorAll("#"+t.id+C):t.getElementsByTagName(g)),r||l},O=function(e){return e.id||(e.id="magix_vf_"+v--)},V=function(e,t,r){if(e=P(e),t=P(t),e&&t)if(e!==t)try{r=b?t.contains(e):16&t.compareDocumentPosition(e)}catch(n){r=0}else r=1;return r},I=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<30,t.rM={},t.owner=a};return d(I,{root:function(e,r,o){if(!t){n=r,i=o,a=e;var s=P(p);s||(s=f.createElement(g),s.id=p,u.insertBefore(s,u.firstChild)),t=new I(p),e.add(t)}return t}}),d(d(I.prototype,s),{mountView:function(e,t,r){var s=this,f=P(s.id);if(f._bak?f._chgd=1:(f._bak=1,f._tmpl=f.innerHTML),s.unmountView(),e){var u=o.pathToObject(e),v=u.pathname,l=--s.sign;o.libRequire(v,function(e){if(l==s.sign){c.prepare(e);var o=new e({owner:s,id:s.id,$:P,path:v,vom:a,location:n});s.view=o,o.on("interact",function(e){e.tmpl||(f._chgd&&(f.innerHTML=f._tmpl),s.mountZoneVframes()),o.on("rendered",function(){s.mountZoneVframes()}),o.on("prerender",function(){s.unmountZoneVframes(0,1)||s.cAlter()}),o.on("inited",function(){s.viewInited=1,s.fire("viewInited",{view:o}),r&&m(r,o,s)})},0),t=t||{},o.load(d(t,u.params,t),i)}})}},unmountView:function(){var e=this;if(e.view){r||(r={}),e.unmountZoneVframes(0,1),e.cAlter(r),e.view.oust();var t=P(e.id);t&&t._bak&&(t.innerHTML=t._tmpl),delete e.view,delete e.viewInited,r=0,e.fire("viewUnmounted")}e.sign--},mountVframe:function(e,t,r,n){var i=this;i.fcc&&i.cAlter();var o=a.get(e);return o||(o=new I(e),o.pId=i.id,y(i.cM,e)||i.cC++,i.cM[e]=1,a.add(o)),o.mountView(t,r,n),o},mountZoneVframes:function(e,t,r){var n=this,i=e||n.id;n.unmountZoneVframes(i,1);var a=T(i),o=a.length,s={};if(o)for(var c,f,u,v,m=0;o>m;m++)if(c=a[m],f=O(c),!y(s,f)&&(u=c.getAttribute("mx-view"),v=!c.getAttribute(w),v=v!=x,v||u)){n.mountVframe(f,u,t,r);for(var l,h=T(c),d=0,g=h.length;g>d;d++)l=h[d],s[O(l)]=1}n.cCreated()},unmountVframe:function(e,t){var r=this;e=e||r.id;var n=a.get(e);if(n){var i=n.fcc;n.unmountView(),a.remove(e,i);var o=a.get(n.pId);o&&y(o.cM,e)&&(delete o.cM[e],o.cC--,t||o.cCreated())}},unmountZoneVframes:function(e,t){var r,n,i=this,a=i.cM;for(n in a)e?V(n,e)&&i.unmountVframe(n,r=1):i.unmountVframe(n,r=1);return t||i.cCreated(),r},invokeView:function(e){var t,r=this,n=r.view,i=r.viewInited&&n[e],a=h.call(arguments,1);return i&&(t=m(i,a,n)),t},cCreated:function(e){var t=this;if(t.cC==t.rC){var r=t.view;r&&!t.fcc&&(t.fcc=1,delete t.fca,r.fire(M,e),t.fire(M,e)),a.vfCreated();var n=t.id,i=a.get(t.pId);i&&!y(i.rM,n)&&(i.rM[n]=i.cM[n],i.rC++,i.cCreated(e))}},cAlter:function(e){var t=this;e||(e={});var r=t.fcc;if(delete t.fcc,!t.fca&&r){var n=t.view,i=t.id;n&&(t.fca=1,n.fire(E,e),t.fire(E,e));var o=a.get(t.pId);o&&y(o.rM,i)&&(o.rC--,delete o.rM[i],o.cAlter(e))}},locChged:function(){var e=this,t=e.view;if(e.viewInited&&t.sign>0){var r=t.olChanged(i),s={location:n,changed:i,prevent:function(){this.cs=l},to:function(e){e=e||l,o.isString(e)&&(e=e.split(",")),this.cs=e}};r&&m(t.locationChange,s,t);for(var c,f=s.cs||o.keys(e.cM),u=0,v=f.length;v>u;u++)c=a.get(f[u]),c&&c.locChged()}}}),I}),define("magix/view",function(e){var t=e("magix/magix"),r=e("magix/event"),n=e("magix/body"),i=t.safeExec,a=t.has,o=",",s=[],c=t.noop,f=t.mix,u="~",v=function(e){return function(){var t,r=this,n=r.notifyUpdate();return n&&(t=e.apply(r,arguments)),t}},m=t.cache(40),l="<",h=">",d=/\smx-(?!view|defer|owner|vframe)[a-z]+\s*=\s*"/g,g=String.fromCharCode(26),p={prevent:function(e){e=e||this.srcEvent,e.preventDefault()},stop:function(e){e=e||this.srcEvent,e.stopPropagation()},halt:function(e){this.prevent(e),this.stop(e)}},x=/(\w+)(?:<(\w+)>)?(?:\(?{([\s\S]*)}\)?)?/,y=/(\w+):([^,]+)/g,w=/([$\w]+)<([\w,]+)>/,b=function(e){var t=this;f(t,e),t.sign=1,i(b.ms,[e],t)};b.ms=[],b.prepare=function(e){if(!e[u]){e[u]=1;var t,r,n,i,a,s=e.prototype,f={};for(var m in s)if(t=s[m],r=m.match(w))for(n=r[1],i=r[2],i=i.split(o),a=i.length-1;a>-1;a--)r=i[a],f[r]=1,s[n+l+r+h]=t;else"render"==m&&t!=c&&(s[m]=v(t));i&&(s.$evts=f)}},b.mixin=function(e,t){t&&b.ms.push(t),f(b.prototype,e)},f(f(b.prototype,r),{render:c,locationChange:c,init:c,hasTmpl:!0,enableEvent:!0,load:function(){var e=this,t=e.hasTmpl,r=arguments,n=e.sign,a=function(a){if(n>0&&n==e.sign){t&&(e.template=e.wrapMxEvent(a)),e.delegateEvents(),e.fire("interact",{tmpl:t},1),i(e.init,r,e),e.fire("inited",0,1),i(e.render,s,e);var o=!t&&!e.rendered;o&&(e.rendered=!0,e.fire("primed",0,1))}};t?e.fetchTmpl(e.path,a):a()},beginUpdate:function(){var e=this;e.sign>0&&e.rendered&&(e.fire("refresh",0,1),e.fire("prerender"))},endUpdate:function(){var e=this;e.sign>0&&(e.rendered||(e.fire("primed",0,1),e.rendered=!0),e.fire("rendered"))},notifyUpdate:function(){var e=this;return e.sign>0&&(e.sign++,e.fire("rendercall")),e.sign},wrapMxEvent:function(e){return(e+"").replace(d,"$&"+this.id+g)},setViewHTML:function(e){var t,r=this;r.beginUpdate(),r.sign>0&&(t=r.$(r.id),t&&(t.innerHTML=e)),r.endUpdate()},observeLocation:function(e){var r,n=this;n.$ol||(n.$ol={keys:[]}),r=n.$ol;var i=r.keys;t.isObject(e)&&(r.pn=e.pathname,e=e.keys),e&&(r.keys=i.concat((e+"").split(o)))},olChanged:function(e){var t=this,r=t.$ol;if(r){var n=0;if(r.pn&&(n=e.isPathname()),!n){var i=r.keys;n=e.isParam(i)}return n}return 1},oust:function(){var e=this;e.sign>0&&(e.sign=0,e.fire("refresh",0,1),e.fire("destroy",0,1,1),e.delegateEvents(1)),e.sign--},processEvent:function(e){var t=this;if(t.enableEvent&&t.sign>0){var r=e.info,n=e.se,a=m.get(r);a||(a=r.match(x),a={n:a[1],f:a[2],i:a[3],p:{}},a.i&&a.i.replace(y,function(e,t,r){a.p[t]=r}),m.set(r,a));var o=a.n+l+e.st+h,s=t[o];if(s){var c=p[a.f];c&&c.call(p,n),i(s,{currentId:e.cId,targetId:e.tId,type:e.st,srcEvent:n,halt:p.halt,prevent:p.prevent,stop:p.stop,params:a.p},t)}}},delegateEvents:function(e){var t=this,r=t.$evts,i=t.vom;for(var a in r)n.act(a,e,i)}});var C,E="?t="+Date.now(),M={},P={};return b.prototype.fetchTmpl=function(e,t){var r=this,n="template"in r;if(n)t(r.template);else if(a(M,e))t(M[e]);else{var o=e.indexOf("/");if(!C){var s=e.substring(0,o);C=seajs.data.paths[s]}e=e.substring(o+1);var c=C+e+".html",f=P[c],u=function(r){t(M[e]=r)};f?f.push(u):(f=P[c]=[u],$.ajax({url:c+E,success:function(e){i(f,e),delete P[c]},error:function(e,t){i(f,t),delete P[c]}}))}},b.extend=function(e,r,n){var a=this,o=function(){o.superclass.constructor.apply(this,arguments),r&&i(r,arguments,this)};return o.extend=a.extend,t.extend(o,a,e,n)},b}),define("magix/vom",["magix/vframe","magix/magix","magix/event"],function(e){var t=e("magix/vframe"),r=e("magix/magix"),n=e("magix/event"),i=r.has,a=r.mix,o=0,s=0,c=0,f=0,u={},v={},m={},l=r.mix({all:function(){return u},add:function(e){i(u,e.id)||(o++,u[e.id]=e,l.fire("add",{vframe:e}))},get:function(e){return u[e]},remove:function(e,t){var r=u[e];r&&(o--,t&&s--,delete u[e],l.fire("remove",{vframe:r}))},vfCreated:function(){if(!f){s++;var e=s/o;e>c&&l.fire("progress",{percent:c=e},f=1==e)}},locChged:function(e){var r,n=e.loc;if(n?r=1:n=e.location,a(v,n),!r){a(m,e.changed);var i=t.root(l,v,m);m.view?i.mountView(n.view):i.locChged()}}},n);return l}),define("mxext/mmanager",["magix/magix","magix/event"],function(e){var t=e("magix/magix"),r=e("magix/event"),n=t.has,i=t.safeExec,a=t.mix,o="mr",s=String.fromCharCode(26),c=t.isFunction,f=12e5,u=function(e,t,r){t=[];for(r in e)t.push(r,o,e[r]);return t},v=function(e,t){return[e.name,u(t.urlParams),u(t.postParams)].join(s)},m=Date.now||function(){return+new Date},l=m(),h=function(e){throw Error(e)},d=function(e){var r=this;r.$mClass=e,r.$mCache=t.cache(),r.$mCacheKeys={},r.$mMetas={},r.id="mm"+l--,i(d.ms,arguments,r)},g=[].slice,p=function(e,t,r){return function(){return e.apply(t,[t,r].concat(g.call(arguments)))}},x=function(e,t,r){var n=r.key,a=r.cKeys,o=a[n];if(o){var s=o.q;delete a[n],i(s,e)}},y=function(e){return function(){var t=new $(this),r=arguments,n=r[r.length-1];return n&&n.manage&&(n.manage(t),r=g.call(r,0,-1)),t[e].apply(t,r)}},w=function(e,t){return function(r,n){var i=g.call(arguments,1);return this.send(r,i.length>1?i:n,e,t)}};a(d,{create:function(e){return e||h("ungiven modelClass"),new d(e)},mixin:function(e,t){t&&d.ms.push(t),a(d.prototype,e)},ms:[]});var b={ALL:1,ONE:2,ORDER:4},$=function(e){this.$host=e,this.$busy=0,this.$reqs={},this.id=o+l--};return a($.prototype,{send:function(e,r,a,o){var s=this;if(s.$busy)return s.next(function(){this.send(e,r,a,o)}),s;s.$busy=1;var c=s.$host,f=c.$mCache,u=c.$mCacheKeys,v=s.$reqs;t.isArray(e)||(e=[e]);var l,d,g,y=e.length,w=0,$=Array(y),C=[],E={},M=[],P=t.isArray(r);P&&(C=Array(r.length));for(var T,O=function(e,t,n){if(!s.$destroy){w++,delete v[e.id];var o=e.$mm,u=o.key;if($[t]=e,n)l=1,g=1,d=n,E.msg=n,E[t]=n;else{if(g=0,!u||u&&!f.has(u)){u&&f.set(u,e),o.done=m();var h=o.after,p=o.meta;h&&i(h,[e,p]),c.fire("done",{model:e,meta:p})}!e.fromCache&&o.used>0&&(e.fromCache=1),o.used++}if(a==b.ONE){var x=P?r[t]:r;x&&(C[t]=i(x,[g?E:null,e,E],s))}else if(a==b.ORDER){M[t]={m:e,e:g,s:n};for(var T,O,V=M.i||0;T=M[V];V++)O=P?r[V]:r,T.e&&(E.msg=T.s,E[V]=T.s),C[V]=i(O,[T.e?E:null,T.m,E].concat(C),s);M.i=V}w>=y&&(l||(E=null),a==b.ALL?($.unshift(E),C[0]=E,C[1]=i(r,$,s)):C.unshift(E),s.$ntId=setTimeout(function(){s.doNext(C)},30))}},V=0;e.length>V;V++)if(T=e[V]){var I=c.getModel(T,o),k=I.cKey,A=I.entity,j=p(O,A,V);j.id=s.id,k&&n(u,k)?u[k].q.push(j):I.update?(v[A.id]=A,k&&(u[k]={q:[j],e:A},j=x),A.request(j,{key:k,cKeys:u})):j()}else h("empty model");return s},fetchAll:function(e,t){return this.send(e,t,b.ALL)},saveAll:function(e,t){return this.send(e,t,b.ALL,1)},fetchOrder:w(b.ORDER),saveOrder:w(b.ORDER,1),saveOne:w(b.ONE,1),fetchOne:w(b.ONE),abort:function(){var e=this;clearTimeout(e.$ntId);var t=e.$host,r=e.$reqs,a=t.$mCacheKeys;for(var o in r){var s=r[o],c=s.$mm.key;if(c&&n(a,c)){for(var f,u=a[c],v=u.q,m=[],l=[],h=0;v.length>h;h++)f=v[h],f.id!=e.id?m.push(f):e.$destroy||l.push(f);i(l,["abort"],e),m.length?u.q=m:s.abort()}else s.abort()}e.$reqs={},e.$queue=[],e.$busy=0},next:function(e){var t=this;if(t.$queue||(t.$queue=[]),t.$queue.push(e),!t.$busy){var r=t.$latest;t.doNext(r)}return t},doNext:function(e){var t=this;t.$busy=0;var r=t.$queue;if(r){var n=r.shift();n&&i(n,e,t)}t.$latest=e},destroy:function(){var e=this;e.$destroy=1,e.abort()}}),a(a(d.prototype,r),{registerModels:function(e){var r=this,n=r.$mMetas;t.isArray(e)||(e=[e]);for(var i,a,o=0;e.length>o;o++)i=e[o],i&&(a=i.name,a?n[a]&&h("already exist:"+a):h("miss name"),i.cache&&(i.cacheKey||(i.cacheKey=v),i.cacheTime||(i.cacheTime=f)),n[a]=i)},registerMethods:function(e){a(this,e)},createModel:function(e){var t=this,r=t.getModelMeta(e),n=new t.$mClass;n.set(r),n.$mm={used:0};var a=e.before||r.before;c(a)&&i(a,[n,r]);var o=e.after||r.after;n.$mm.after=o;var s=e.cacheKey||r.cacheKey;return c(s)&&(s=i(s,[r,e])),n.$mm.key=s,n.$mm.meta=r,n.set(e),n.setUrlParams(r.urlParams),n.setPostParams(r.postParams),n.setUrlParams(e.urlParams),n.setPostParams(e.postParams),t.fire("inited",{model:n,meta:r}),n},getModelMeta:function(e){var r,n=this,i=n.$mMetas;r=t.isString(e)?e:e.name;var a=i[r];return a||h("Unfound:"+r),a},getModel:function(e,t){var r,n,i=this;return t||(r=i.getCachedModel(e)),r||(n=1,r=i.createModel(e)),{entity:r,cKey:r.$mm.key,update:n}},saveAll:y("saveAll"),fetchAll:y("fetchAll"),saveOrder:y("saveOrder"),fetchOrder:y("fetchOrder"),saveOne:y("saveOne"),fetchOne:y("fetchOne"),createMRequest:function(e){var t=new $(this);return e&&e.manage&&e.manage(t),t},clearCacheByKey:function(e){var t=this,r=t.$mCache;r.del(e)},clearCacheByName:function(e){for(var t=this,r=t.$mCache,n=r.c,i=0;n.length>i;i++){var a=n[i],o=a.v,s=o&&o.$mm;if(s){var c=s.meta.name;c==e&&r.del(s.key)}}},getCachedModel:function(e){var r,n,a=this,o=a.$mCache,s=null;if(t.isString(e)?r=e:(n=a.getModelMeta(e),r=e.cacheKey||n.cacheKey,c(r)&&(r=i(r,[n,e]))),r){var f=a.$mCacheKeys,u=f[r];if(u)s=u.e;else if(s=o.get(r)){n||(n=s.$mm.meta);var v=e.cacheTime||n.cacheTime||0;c(v)&&(v=i(v,[n,e])),v>0&&m()-s.$mm.done>v&&(a.clearCacheByKey(r),s=0)}}return s}}),d}),define("mxext/model",["magix/magix"],function(e){var t=e("magix/magix"),r=function(e,r){var n=this,i=function(){i.superclass.constructor.apply(this,arguments),r&&t.safeExec(r,arguments,this)};return t.mix(i,n,{prototype:!0}),t.extend(i,n,e)},n=+new Date,i=encodeURIComponent,a=t.has,o=t.isObject,s=t.toString,c=function(e){this.set(e),this.id="m"+n--};return t.mix(c,{GET:"GET",POST:"POST",extend:r}),t.mix(c.prototype,{sync:t.noop,getPostParams:function(){return this.getParams(c.POST)},getUrlParams:function(){return this.getParams(c.GET)},getParams:function(e){var r=this;e||(e=c.GET);var n,a="$"+e,o=r[a],s=[];for(var f in o){n=o[f],t.isArray(n)||(n=[n]);for(var u=0;n.length>u;u++)s.push(f+"="+i(n[u]))}return s.join("&")},setUrlParamsIf:function(e,t){this.setParams(e,t,c.GET,!0)},setPostParamsIf:function(e,t){var r=this;r.setParams(e,t,c.POST,!0)},setParams:function(e,t,r,n){var i=this,s="$"+r;i[s]||(i[s]={});var c=i[s];if(!o(e)&&e){var f={};f[e]=t,e=f}for(var u in e)n&&a(c,u)||(c[u]=e[u])},setPostParams:function(e,t){var r=this;r.setParams(e,t,c.POST)},setUrlParams:function(e,t){this.setParams(e,t,c.GET)},get:function(e,t){var r=this,n=arguments.length,i=!n,a=2==n,o=r.$attrs;return o&&(o=i?o:o[e]),a&&s.call(t)!=s.call(o)&&(o=t),o},set:function(e,t){var r=this;if(r.$attrs||(r.$attrs={}),o(e))for(var n in e)r.$attrs[n]=e[n];else e&&(r.$attrs[e]=t)},request:function(e,t){var r=this;r.$abt=0;var n=function(n,i){r.$abt?e("abort",null,t):n?e(n,i,t):(o(i)||(i={data:i}),r.set(i),e(n,i,t))};r.$trans=r.sync(n)},abort:function(){var e=this,t=e.$trans;t&&t.abort&&t.abort(),delete e.$trans,e.$abt=1},isAborted:function(){return this.$abt}}),c}),define("mxext/view",["magix/magix","magix/view","magix/router"],function(e){var t=e("magix/magix"),r=e("magix/view"),n=e("magix/router"),i=window,a=0,o=t.safeExec,s=t.has,c=[],f=c.slice,u="rendercall",v="destroy",m=function(e){i.clearTimeout(e),i.clearInterval(e)},l=function(e){o(e.destroy,c,e)},h=function(e){var t=this,r=t.$res,n=e.type==u,i=e.type!=v;for(var a in r){var o=r[a];(!n||o.mr)&&t.destroyManaged(a,i)}},d=r.extend({navigate:n.navigate,manage:function(e,r,n){var i=this,o=arguments,s=1,c=i.$res;if(1==o.length)r=e,e="res_"+a++,s=0;else{var f=c[e];f&&f.res!=r&&i.destroyManaged(e)}var u;t.isNumber(r)?u=m:r&&r.destroy&&(u=l);var v={hk:s,res:r,ol:n,mr:r&&r.fetchOne,oust:u};return c[e]=v,r},getManaged:function(e,t){var r=this,n=r.$res,i=null;if(s(n,e)){var a=n[e];i=a.res,t&&delete n[e]}return i},removeManaged:function(e){return this.getManaged(e,1)},destroyManaged:function(e,t){var r,n=this,i=n.$res,a=i[e];if(a&&(!t||!a.ol)){r=a.res;var o=a.oust,s=!1;o&&(o(r),s=!0),a.hk&&t||delete i[e],n.fire("destroyManaged",{resource:r,processed:s})}return r},invokeView:function(e){var t,r=this.vom.get(e);if(r){var n=f.call(arguments,1);t=r.invokeView.apply(r,n)}return t},invokeParentView:function(){var e=this,t=f.call(arguments);return t.unshift(e.owner.pId),e.invokeView.apply(e,t)}},function(){var e=this;e.$res={},e.on("interact",function(){e.on(u,h),e.on("prerender",h),e.on(v,h)}),o(d.ms,arguments,e)},{ms:[],mixin:function(e,r){r&&d.ms.push(r),t.mix(d.prototype,e)}});return d}),document.createElement("vframe");