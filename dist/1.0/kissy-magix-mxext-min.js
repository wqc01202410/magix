KISSY.add("magix/body",function(i,g,q){var n=g.has,c=g.listToMap("submit,focusin,focusout,mouseenter,mouseleave,mousewheel,change"),e=document.body,f={},k={},r=65536,m=function(b,a,d){d?b.setAttribute(a,d):d=b.getAttribute(a);return d},l,o={process:function(b){for(var a=b.target||b.srcElement;a&&1!=a.nodeType;)a=a.parentNode;var d=a,c=b.type,f=k[c]||(k[c]=RegExp("(?:^|,)"+c+"(?:,|$)"));if(!f.test(m(a,"mx-ie"))){for(var s="mx-"+c,u,p,B=[];d&&d!=e&&!(u=m(d,s),p=m(d,"mx-ie"),u||f.test(p));)B.push(d),
d=d.parentNode;if(u){c=m(d,"mx-owner");if(!c){f=d;for(p=l.all();f&&f!=e;)if(n(p,f.id)){m(d,"mx-owner",c=f.id);break}else f=f.parentNode}if(c)(c=(c=l.get(c))&&c.view)&&c.processEvent({info:u,se:b,tId:a.id||(a.id="mx-e-"+r--),cId:d.id||(d.id="mx-e-"+r--)});else throw Error("miss mx-owner:"+u);}else for(;B.length;)b=B.shift(),p=m(b,"mx-ie"),f.test(p)||(p=p?p+","+c:c,m(b,"mx-ie",p))}},on:function(b,a){var d=this;f[b]?f[b]++:(l=a,f[b]=1,c[b]?d.unbubble(0,e,b):e["on"+b]=function(a){(a=a||window.event)&&
d.process(a)})},un:function(b){var a=f[b];0<a&&(a--,a||(c[b]?this.unbubble(1,e,b):e["on"+b]=null),f[b]=a)}};o.unbubble=function(b,a,d){(b?q.undelegate:q.delegate).call(q,a,d,"[mx-"+d+"]",o.process)};return o},{requires:["magix/magix","event","sizzle"]});
KISSY.add("magix/event",function(i,g){var q=g.safeExec;return{fire:function(g,c,e,f){var k="~"+g,i=this[k];if(i){c||(c={});if(!c.type)c.type=g;for(var g=i.length,m=g-1,l,o;g--;){l=f?g:m-g;o=i[l];if(o.d||o.r)i.splice(l,1),m--;o.d||q(o.f,c,this)}}e&&delete this[k]},on:function(i,c,e){i="~"+i;i=this[i]||(this[i]=[]);g.isNumeric(e)?i.splice(e,0,{f:c}):i.push({f:c,r:e})},un:function(g,c){var e="~"+g,f=this[e];if(f)if(c)for(var e=f.length-1,k;0<=e;e--){if(k=f[e],k.f==c&&!k.d){k.d=1;break}}else delete this[e]}}},
{requires:["magix/magix"]});
KISSY.add("magix/magix",function(i){var g=[].slice,q=/\/\.\/|\/[^\/]+?\/\.{2}\/|([^:\/])\/\/+/,n=/\/[^\/]*$/,c=/[#?].*$/,e=/([^=&?\/#]+)=([^&=#?]*)/g,f=/^https?:\/\//i,k={},r=0,m={debug:false,iniFile:"app/ini",appName:"app",appHome:"./",tagName:"vframe",rootId:"magix_vf_root"},l=k.hasOwnProperty,o=function(a){return function(b,c,j){switch(arguments.length){case 0:j=a;break;case 1:j=p.isObject(b)?h(a,b):d(a,b)?a[b]:null;break;case 2:null===c?(delete a[b],j=c):a[b]=j=c}return j}},b=function(a){this.c=
[];this.x=a||20;this.b=this.x+5},a=function(a){return new b(a)},d=function(a,b){return a?l.call(a,b):0},h=function(a,b,c){for(var j in b)if(!c||!d(c,j))a[j]=b[j];return a};h(b.prototype,{get:function(a){var b=this.c,c,a="pathname"+a;if(d(b,a)&&(c=b[a],1<=c.f))c.f++,c.t=r++,c=c.v;return c},set:function(a,b){var c=this.c,a="pathname"+a,j=c[a];if(!d(c,a)){if(c.length>=this.b){c.sort(function(a,b){return b.f==a.f?b.t-a.t:b.f-a.f});for(var h=this.b-this.x;h--;)j=c.pop(),delete c[j.k]}j={};c.push(j);c[a]=
j}j.k=a;j.v=b;j.f=1;j.t=r++;return j},del:function(a){var a="pathname"+a,b=this.c,c=b[a];if(c)c.f=-1E5,c.v="",delete b[a]},has:function(a){return d(this.c,"pathname"+a)}});var v=a(60),s=a(),u=function(a,b,c,d,h,e){p.isArray(a)||(a=[a]);if(!b||!p.isArray(b)&&!b.callee)b=[b];for(d=0;d<a.length;d++)try{e=a[d],h=p.isFunction(e)&&e.apply(c,b)}catch(f){}return h},p={isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},mix:h,has:d,safeExec:u,noop:function(){},config:o(m),start:function(a){var b=
this,a=h(m,a);b.libEnv(a);b.libRequire(a.iniFile,function(c){m=h(a,c,a);var d=a.progress;b.libRequire(["magix/router","magix/vom"],function(c,h){c.on("!ul",h.locChged);c.on("changed",h.locChged);d&&h.on("progress",d);b.libRequire(a.extensions,c.start)})});a.ready&&(u(a.ready),delete a.ready)},keys:Object.keys||function(a){var b=[],c;for(c in a)d(a,c)&&b.push(c);return b},local:o({}),path:function(a,b){var d=a+"\n"+b,j=s.get(d);if(!j){f.test(b)?j=b:(a=a.replace(c,"").replace(n,"")+"/","/"==b.charAt(0)?
(j=f.test(a)?8:0,j=a.indexOf("/",j),j=a.substring(0,j)+b):j=a+b);for(;q.test(j);)j=j.replace(q,"$1/");s.set(d,j)}return j},pathToObject:function(a,b){var d=v.get(a);if(!d){var d={},j={},h="";c.test(a)?h=a.replace(c,""):~a.indexOf("=")||(h=a);if(h&&f.test(h))var p=h.indexOf("/",8),h=-1==p?"/":h.substring(p);a.replace(e,function(a,c,d){if(b)try{d=decodeURIComponent(d)}catch(h){}j[c]=d});d.pathname=h;d.params=j;v.set(a,d)}return d},objectToPath:function(a,b){var c=a.pathname,d=[],h=a.params,e,f;for(f in h)e=
h[f],b&&encodeURIComponent(e),d.push(f+"="+e);return c+(c&&d.length?"?":"")+d.join("&")},tmpl:function(a,b){return 1==arguments.length?{v:k[a],h:d(k,a)}:k[a]=b},listToMap:function(a,b){var c,d,h={},e;this.isString(a)&&(a=a.split(","));if(a&&(e=a.length))for(c=0;c<e;c++)d=a[c],h[b?d[b]:d]=b?d:1;return h},createCache:a};return h(p,{libRequire:function(a,b){a?i.use(a.toString(),function(a){b&&b.apply(a,g.call(arguments,1))}):b&&b()},libEnv:function(a){var b=a.appHome,c=location,d=a.appName,b=this.path(c.href,
b+"/");a.appHome=b;var h=a.debug;h&&(h=0==b.indexOf(c.protocol+"//"+c.host+"/"));c="";(c=h?i.now():a.appTag)&&(c+=".js");i.config({packages:[{name:d,path:b,debug:a.debug=h,combine:a.appCombine,tag:c}]})},isArray:i.isArray,isFunction:i.isFunction,isObject:i.isObject,isRegExp:i.isRegExp,isString:i.isString,isNumber:i.isNumber})});
KISSY.add("magix/router",function(i,g,q,n){var c=window,e=g.has,f=g.mix,k=document,r=/^UTF-8$/i.test(k.charset||k.characterSet||"UTF-8"),m=g.config(),l=g.createCache(),o=g.createCache(),b,a,d,h=65536,v=/#.*$/,s=/^[^#]*#?!?/,u=m.nativeHistory,p,B,H=function(a,b,c){if(a){c=this.params;g.isArray(a)||(a=a.split(","));for(var d=0;d<a.length&&!(b=e(c,a[d]));d++);}return b},C=function(){return e(this,"pathname")},j=function(){return e(this,"view")},I=function(){return this.hash.pathname!=this.query.pathname},
A=function(a){return this.hash.params[a]!=this.query.params[a]},D=function(a){return e(this.hash.params,a)},E=function(a){return e(this.query.params,a)},F=function(a){return this.params[a]},x=function(a){var a=g.pathToObject(a,r),b=a.pathname;b&&B&&(a.pathname=g.path(c.location.pathname,b));return a},t=f({getView:function(a){if(!d){d={rs:m.routes||{},nf:m.notFoundView};var b=m.defaultView;if(!b)throw Error("unset defaultView");d.home=b;var c=m.defaultPathname||"";d.rs[c]=b;d.pathname=c}a||(a=d.pathname);
b=d.rs;b=g.isFunction(b)?b.call(m,a):b[a];return{view:b?b:d.nf||d.home,pathname:b?a:d.nf?a:d.pathname}},start:function(){var a=t,b=c.history;p=u&&b.pushState;B=u&&!p;p?a.useState():a.useHash();a.route()},parseQH:function(a){var a=a||c.location.href,b=t,d=l.get(a);if(!d){var d=a.replace(v,""),j=a.replace(s,""),h=x(d),e=x(j),p={};f(p,h.params);f(p,e.params);d={pathnameDiff:I,paramDiff:A,hashOwn:D,queryOwn:E,get:F,href:a,srcQuery:d,srcHash:j,query:h,hash:e,params:p};l.set(a,d)}d.view||(a=b.getView(u?
d.hash.pathname||d.query.pathname:d.hash.pathname),f(d,a));return d},getChged:function(a,b){var d=b.href,c=a.href+"\n"+d,h=o.get(c);h||(c=d+"\n"+c,h=o.get(c));if(!h){var e,h={params:{}};if(a.pathname!=b.pathname)e=h.pathname=1;if(a.view!=b.view)e=h.view=1;var d=a.params,f=b.params,p;for(p in d)d[p]!=f[p]&&(e=1,h.params[p]=1);for(p in f)d[p]!=f[p]&&(e=1,h.params[p]=1);h.occur=e;h.isParam=H;h.isPathname=C;h.isView=j;o.set(c,h)}return h},route:function(){var d=t,c=d.parseQH(),j=a||{params:{},href:"~"},
h=!a;a=c;j=d.getChged(j,c);j.occur&&(b=c,d.fire("changed",{location:c,changed:j,force:h}))},navigate:function(a,d){var c=t;!d&&g.isObject(a)&&(d=a,a="");d&&(a=g.objectToPath({params:d,pathname:a},r));if(a){var j=x(a),s={};s.params=f({},j.params);s.pathname=j.pathname;if(s.pathname){if(B&&(j=b.query)&&(j=j.params))for(var u in j)e(j,u)&&!e(s.params,u)&&(s.params[u]="")}else u=f({},b.params),s.params=f(u,s.params),s.pathname=b.pathname;u=g.objectToPath(s);if(p?u!=b.srcQuery:u!=b.srcHash)p?(c.poped=
1,history.pushState(h--,k.title,u),c.route()):(f(s,b,s),s.srcHash=u,s.hash={params:s.params,pathname:s.pathname},c.fire("!ul",{loc:b=s}),location.hash="#!"+u)}}},q);t.useState=function(){var a=t,b=location.href;n.on(c,"popstate",function(){var d=location.href==b;if(a.poped||!d)a.poped=1,a.route()})};t.useHash=function(){n.on(c,"hashchange",t.route)};return t},{requires:["magix/magix","magix/event","event"]});
KISSY.add("magix/vframe",function(i,g,q,n){var c=document,e=65536,f=window.CollectGarbage||g.noop,k=g.mix,i=g.config(),r=i.tagName,m=i.rootId,l=g.has,o,b,a=function(a){return"object"==typeof a?a:c.getElementById(a)};c.createElement(r);var d=/<script[^>]*>[\s\S]*?<\/script>/ig,h,v=function(a){this.id=a;this.cM={};this.rC=this.cC=0;this.sign=-2147483648;this.rM={}};k(v,{root:function(b,d){if(!o){h=d;var e=a(m);if(!e)e=c.createElement(r),e.id=m,c.body.insertBefore(e,c.body.firstChild);o=new v(m);b.add(o)}return o}});
k(k(v.prototype,q),{mountView:function(b,c){var e=this,f=a(e.id);f._bak?f._chgd=1:(f._bak=1,f._tmpl=f.innerHTML.replace(d,""));e.unmountView();if(b){var i=g.pathToObject(b),v=i.pathname,j=--e.sign;g.libRequire(v,function(b){if(j==e.sign){var d=e.owner;n.prepare(b);var s=new b({owner:e,id:e.id,$:a,path:v,vom:d,location:h});e.view=s;s.on("interact",function(a){if(!a.tmpl){if(f._chgd)f.innerHTML=f._tmpl;e.mountZoneVframes(0,0,1)}s.on("rendered",function(){e.mountZoneVframes(0,0,1)});s.on("prerender",
function(){e.unmountZoneVframes()});s.on("inited",function(){e.viewUsable=1;e.fire("viewInteract",{view:s})})},0);c=c||{};s.load(k(c,i.params,c))}})}},unmountView:function(){if(this.view){b||(b={caused:this.id});this.unmountZoneVframes();this.cAlter(b);this.view.destroy();var d=a(this.id);if(d&&d._bak)d.innerHTML=d._tmpl;delete this.view;delete this.viewUsable;b=0;this.fire("viewUnmounted");f()}this.un("viewInteract");this.sign--},mountVframe:function(a,b,d,c){var h=this.owner,e=h.get(a);if(!e)e=
new v(a),e.pId=this.id,l(this.cM,a)||this.cC++,this.cM[a]=c,h.add(e);e.mountView(b,d);return e},mountZoneVframes:function(b,d,c){this.unmountZoneVframes(b);var b=a(b||this.id).getElementsByTagName(r),h=b.length,f={};if(h)for(var g=0,j,i,k,v;g<h;g++){j=b[g];i=j.id||(j.id="magix_vf_"+e--);l(f,i)||(k=j.getAttribute("mx-view"),v=j.getAttribute("mx-defer"),(!v||k)&&this.mountVframe(i,k,d,c));j=a(j).getElementsByTagName(r);i=0;for(k=j.length;i<k;i++)f[j[i].id||(j[i].id="magix_vf_"+e--)]=1}this.cC==this.rC&&
this.cCreated({})},unmountVframe:function(a){var a=a||this.id,b=this.owner,d=b.get(a);if(d){var c=d.fcc;d.unmountView();b.remove(a,c);if((b=b.get(d.pId))&&l(b.cM,a))delete b.cM[a],b.cC--}},unmountZoneVframes:function(b){if(b){for(var b=a(b).getElementsByTagName(r),d={},c=this.cM,h=b.length-1,e;0<=h;h--)e=b[h].id,l(c,e)&&(d[e]=1);b=d}else b=this.cM;for(var f in b)this.unmountVframe(f)},cCreated:function(a){var b=this.view;if(b&&!this.fcc)this.fcc=1,delete this.fca,b.fire("created",a),this.fire("created",
a);var d=this.owner;d.vfCreated();b=this.id;if((d=d.get(this.pId))&&!l(d.rM,b))d.rM[b]=d.cM[b],d.rC++,d.rC==d.cC&&d.cCreated(a)},cAlter:function(a){delete this.fcc;if(!this.fca){var b=this.view,d=this.id;if(b)this.fca=1,b.fire("alter",a),this.fire("alter",a);if((b=this.owner.get(this.pId))&&l(b.rM,d)){var c=b.rM[d];b.rC--;delete b.rM[d];c&&b.cAlter(a)}}},locChged:function(a,b){var d=this.view;if(d&&d.sign&&d.rendered){var c=d.olChanged(b),h={location:a,changed:b,prevent:function(){this.cs=[]},toChildren:function(a){a=
a||[];g.isString(a)&&(a=a.split(","));this.cs=a}};c&&g.safeExec(d.locationChange,h,d);for(var d=h.cs||g.keys(this.cM),c=0,h=d.length,e=this.owner,j;c<h;c++)(j=e.get(d[c]))&&j.locChged(a,b)}}});return v},{requires:["magix/magix","magix/event","magix/view"]});
KISSY.add("magix/view",function(i,g,q,n,c){var e=g.safeExec,f=g.has,k=[],r=g.config(),m=g.mix,l=g.listToMap("render,renderUI"),o=function(a){return function(){var b;this.sign&&(this.sign++,this.fire("rendercall"),b=a.apply(this,arguments));return b}},b=function(a){m(this,a);this.sign=1};m(b,{wrapAsyn:function(){if(!this["~"]){this["~"]=1;var a=this.prototype,b,d;for(d in l)b=a[d],g.isFunction(b)&&b!=g.noop&&(a[d]=o(b))}}});var a=b.prototype,d=window.CollectGarbage||g.noop,h=/<[a-z]+(?:[^">]|"[^"]*")+(?=>)/g,
v=/\smx-owner\s*=/,s=/\smx-[^v][a-z]+\s*=/,u=function(a){return!v.test(a)&&s.test(a)?a+' mx-owner="'+u.t+'"':a},p={prevent:function(a){a=a||this.domEvent;a.preventDefault?a.preventDefault():a.returnValue=!1},stop:function(a){a=a||this.domEvent;a.stopPropagation?a.stopPropagation():a.cancelBubble=!0},halt:function(a){this.prevent(a);this.stop(a)}},B=/(\w+)(?:<(\w+)>)?(?:{([\s\S]*)})?/,H=/(\w+):([^,]+)/g;m(a,q);m(a,{render:g.noop,locationChange:g.noop,init:g.noop,hasTmpl:!0,enableEvent:!0,load:function(){var a=
this,b=a.hasTmpl,d=arguments,c=a.sign,h=f(a,"template"),g=function(f){if(c==a.sign){if(!h)a.template=a.wrapMxEvent(f);a.delegateEvents();a.fire("interact",{tmpl:b},1);e(a.init,d,a);a.fire("inited",0,1);e(a.render,k,a);if(!b&&!a.rendered)a.rendered=!0,a.fire("primed",null,1)}};b&&!h?a.fetchTmpl(g):g()},beginUpdateHTML:function(){this.sign&&this.rendered&&(this.fire("refresh",0,1),this.fire("prerender"))},endUpdateHTML:function(){if(this.sign)this.rendered||this.fire("primed",0,1),this.rendered=!0,
this.fire("rendered"),d()},wrapMxEvent:function(a){u.t=this.id;return(""+a).replace(h,u)},setViewHTML:function(a){this.beginUpdateHTML();if(this.sign)this.$(this.id).innerHTML=a;this.endUpdateHTML()},observeLocation:function(a){var b;if(!this.$ol)this.$ol={keys:[]};b=this.$ol;var d=b.keys;if(g.isObject(a))b.pn=a.pathname,a=a.keys;if(a)b.keys=d.concat(g.isString(a)?a.split(","):a)},olChanged:function(a){var b=this.$ol;if(b){var d=0;b.pn&&(d=a.isPathname());d||(d=a.isParam(b.keys));return d}return 1},
destroy:function(){this.fire("refresh",0,1);this.fire("destroy",0,1,1);this.delegateEvents(1);this.sign=0},parentView:function(){var a=this.vom.get(this.owner.pId),b=null;if(a&&a.viewUsable)b=a.view;return b},processEvent:function(a){if(this.enableEvent&&this.sign){var b=a.se,d=a.info.match(B),c=d[1],h=d[2],d=d[3],f=this.events;if(f){var g=f[b.type];(h=p[h])&&h(b);if(g&&g[c]){var i={};d&&d.replace(H,function(a,b,d){i[b]=d});e(g[c],m({view:this,currentId:a.cId,targetId:a.tId,domEvent:b,events:f,params:i},
p),g)}}}},delegateEvents:function(a){var b=this.events,a=a?n.un:n.on,d=this.vom,c;for(c in b)a.call(n,c,d)}});var C=function(a,b,d){for(var c in b)i.isObject(b[c])?(f(a,c)||(a[c]={}),C(a[c],b[c],1)):d&&(a[c]=b[c])};b.prototype.fetchTmpl=function(a){var b=this,d=b.template;if(i.isUndefined(d))if(d=g.tmpl(b.path),d.h)a(d.v);else{var h=r.appHome+b.path+".html",f=C[h],d=function(d){a(g.tmpl(b.path,d))};f?f.push(d):(f=C[h]=[d],c({url:h+(r.debug?"?t="+i.now():""),success:function(a){e(f,a);delete C[h]},
error:function(a,b){e(f,b);delete C[h]}}))}else a(d)};b.extend=function(a,b){var d=function(){d.superclass.constructor.apply(this,arguments);b&&e(b,arguments,this)};d.extend=this.extend;return i.extend(d,this,a)};b.prepare=function(a){if(!a.wrapAsyn){a.wrapAsyn=this.wrapAsyn;a.extend=this.extend;for(var b=a.prototype,d=a.superclass;d;)d=d.constructor,C(b,d.prototype),d=d.superclass}a.wrapAsyn()};return b},{requires:["magix/magix","magix/event","magix/body","ajax"]});
KISSY.add("magix/vom",function(i,g,q,n){var c=q.has,e=q.mix,f=0,k=0,r=0,m=0,l={},o={},b=q.mix({all:function(){return l},add:function(a){if(!c(l,a.id))f++,l[a.id]=a,a.owner=b,b.fire("add",{vframe:a})},get:function(a){return l[a]},remove:function(a,d){var c=l[a];c&&(f--,d&&k--,delete l[a],b.fire("remove",{vframe:c}))},vfCreated:function(){if(!m){k++;var a=k/f;r<a&&b.fire("progress",{percent:r=a},m=1==a)}},root:function(){return g.root(b,o)},locChged:function(a){var d=a.loc,c;d?c=1:d=a.location;e(o,
d);if(!c)c=b.root(),a=a.changed,a.isView()?c.mountView(d.view):c.locChged(d,a)}},n);return b},{requires:["magix/vframe","magix/magix","magix/event"]});
KISSY.add("mxext/mmanager",function(i,g,q){var n=g.has,c=g.safeExec,e=function(b){i.isArray(b)||(b=[b]);for(var a=0,d;a<b.length;a++)d=b[a],delete d.cacheKey;return b},f=function(b){this.$mClass=b;this.$mCache=g.createCache();this.$mCacheKeys={};this.$mMetas={}},k=[].slice,r={urlParams:1,postParams:1,cacheKey:1,cacheTime:1,before:1,after:1},m=function(b){var a={},d;for(d in b)r[d]||(a[d]=b[d]);return a},l=function(b,a){var d=k.call(arguments,2);return function(){return b.apply(a,d.concat(k.call(arguments)))}};
g.mix(f,{create:function(b){if(!b)throw Error("MManager.create:modelClass ungiven");return new f(b)}});var o=function(b){this.$host=b;this.$doTask=!1;this.$reqModels={}};g.mix(o.prototype,{fetchModels:function(b,a,d){var h=this;if(h.$doTask)return h.next(function(c){c.fetchModels(b,a,d)}),h;h.$doTask=!0;var e=h.$host,f=e.$mCache,g=e.$mCacheKeys,k=h.$reqModels;i.isArray(b)||(b=[b]);var m=b.length,r=0,o,j,q=Array(m),A=[],D={},E=[],F=i.isArray(a);F&&(A=Array(a.length));for(var x=function(b,l,t,w){if(!h.$destroy){r++;
delete k[t.id];var x=t._cacheKey;q[b]=t;if(l)j=!0,o=w||o,D[b]=w;else{t._doneAt=i.now();if(x&&!f.has(x)){f.set(x,t);var z=t._after,y=t._meta}else z=t._after,y=t._meta;z&&c(z,[t,y]);e.fireAfter(y.name,[t])}if(2==d)(z=F?a[b]:a)&&(A[b]=c(z,[t,l?{msg:w}:null,j?D:null],h));else if(4==d){E[b]={m:t,e:l,s:w};for(b=E.i||0;z=E[b];b++)if(y=F?a[b]:a,A[b]=c(y,[z.m,z.e?{msg:z.s}:null,E.e?D:null,A],h),z.e)D[b]=z.s,E.e=1;E.i=b}x&&n(g,x)&&(b=g[x],delete g[x],c(b,[l,t,w],t));if(r>=m)D.msg=o,l=j?D:null,1==d?(q.push(l),
A[0]=c(a,q,h),A[1]=l):A.push(l),h.$ntId=setTimeout(function(){h.$doTask=!1;h.doNext(A)},30)}},t=0,w;t<b.length;t++)if(w=b[t]){var G;G=e.getModel(w);var y=G.cacheKey;y&&n(g,y)?g[y].push(l(x,h,t)):(w=G.entity,G.needUpdate?(k[w.id]=w,y&&(g[y]=[]),w.request({success:l(x,w,t,!1,w),error:l(x,w,t,!0,w)})):x(t,!1,w))}else throw Error("miss attrs:"+b);return h},fetchAll:function(b,a){return this.fetchModels(b,a,1)},saveAll:function(b,a){b=e(b);return this.fetchModels(b,a,1)},fetchOrder:function(b,a){var d=
k.call(arguments,1);return this.fetchModels(b,1<d.length?d:a,4)},saveOrder:function(b,a){var b=e(b),d=k.call(arguments,1);return this.fetchModels(b,1<d.length?d:a,4)},saveOne:function(b,a){var b=e(b),d=k.call(arguments,1);return this.reqModels(b,1<d.length?d:a,2)},fetchOne:function(b,a){var d=k.call(arguments,1);return this.fetchModels(b,1<d.length?d:a,2)},abort:function(){clearTimeout(this.$ntId);var b=this.$reqModels,a=this.$host.$mCacheKeys;if(b)for(var d in b){var h=b[d],e=h._cacheKey;if(e&&n(a,
e)){var f=a[e];delete a[e];c(f,[!0,h,"aborted"],h)}h.abort()}this.$reqModels={};this.$queue=[];this.$doTask=!1},next:function(b){if(!this.$queue)this.$queue=[];this.$queue.push(b);this.$doTask||this.doNext.apply(this,[this].concat(this.$latest||[]));return this},doNext:function(b){var a=this.$queue;a&&(a=a.shift())&&c(a,[this].concat(b),this);this.$latest=b},destroy:function(){this.$destroy=!0;this.abort()}});g.mix(f.prototype,{registerModels:function(b){var a=this.$mMetas;i.isArray(b)||(b=[b]);for(var d=
0,c;d<b.length;d++){c=b[d];if(!c.name)throw Error("model must own a name attribute");a[c.name]=c}},registerMethods:function(b){var a=this,d;for(d in b)a[d]=function(b){return function(){for(var d,c=arguments,e=[],f=0,g;f<c.length;f++)g=c[f],i.isFunction(g)?e.push(function(a){return function(){d||a.apply(a,arguments)}}(g)):e.push(g);var k=b.apply(a,e);return{destroy:function(){d=!0;k&&k.destroy&&k.destroy()}}}}(b[d])},createModel:function(b){var a=this.getModelMeta(b),d=new this.$mClass(m(a)),h=b.before||
a.before;this.fireBefore(a.name,[d]);i.isFunction(h)&&c(h,[d,a,b]);d._after=b.after||a.after;h=b.cacheKey||a.cacheKey;i.isFunction(h)&&(h=c(h,[a,b]));d._cacheKey=h;d._meta=a;d.set(m(b));d.setUrlParams(a.urlParams);d.setPostParams(a.postParams);d.setUrlParams(b.urlParams);d.setPostParams(b.postParams);return d},getModelMeta:function(b){var a=this.$mMetas,d;d=i.isString(b)?b:b.name;a=a[d];if(!a)throw Error("Not found:"+b.name);return a},getModel:function(b){var a=this.getCachedModel(b),d;a||(d=!0,a=
this.createModel(b));return{entity:a,cacheKey:a._cacheKey,needUpdate:d}},saveAll:function(b,a){return(new o(this)).saveAll(b,a)},fetchAll:function(b,a){return(new o(this)).fetchAll(b,a)},saveOrder:function(b,a){var d=new o(this);return d.saveOrder.apply(d,arguments)},fetchOrder:function(b,a){var d=new o(this);return d.fetchOrder.apply(d,arguments)},saveOne:function(b,a){var d=new o(this);return d.saveOne.apply(d,arguments)},fetchOne:function(b,a){var d=new o(this);return d.fetchOne.apply(d,arguments)},
clearCacheByKey:function(b){var a=this.$mCache;i.isString(b)&&a.del(b)},clearCacheByName:function(b){for(var a=this.$mCache,d=a.c,c=0;c<d.length;c++){var e=d[c].v;(e&&e._meta.name)==b&&a.del(e._cacheKey)}},getModelUrl:function(b){b=this.getModelMeta(b);return b.url?b.url:this.$mClass.prototype.url(b.uri)},listenBefore:function(b,a){q.on.call(this,b+"_before",a)},listenAfter:function(b,a){q.on.call(this,b+"_after",a)},unlistenBefore:function(b,a){q.un.call(this,b+"_before",a)},unlistenAfter:function(b,
a){q.un.call(this,b+"_after",a)},fireBefore:function(b,a){q.fire.call(this,b+"_before",a)},fireAfter:function(b,a){q.fire.call(this,b+"_after",a)},getCachedModel:function(b){var a=this.$mCache,d=null,e,f;i.isString(b)?e=b:(f=this.getModelMeta(b),e=b.cacheKey||f.cacheKey,i.isFunction(e)&&(e=c(e,[f,b])));if(e&&(d=a.get(e))){if(!f)f=d._meta;a=b.cacheTime||f.cacheTime||0;i.isFunction(a)&&(a=c(a,[f,b]));0<a&&i.now()-d._doneAt>a&&(this.clearCacheByKey(e),d=null)}return d}});return f},{requires:["magix/magix",
"magix/event"]});
KISSY.add("mxext/model",function(i,g){var q=function(c,e,f){for(var k in e)i.isObject(e[k])?(g.has(c,k)||(c[k]={}),q(c[k],e[k],!0)):f&&(c[k]=e[k])},n=function(c){c&&this.set(c);this.id=i.guid("m")};g.mix(n,{GET:"GET",POST:"POST",extend:function(c,e){var f=function(){f.superclass.constructor.apply(this,arguments);e&&g.safeExec(e,[],this)};g.mix(f,this,{prototype:!0});q(c,this.prototype);return i.extend(f,this,c)}});g.mix(n.prototype,{urlMap:{},sync:g.noop,parse:function(c){return c},getParamsObject:function(c){if(!c)c=
n.GET;return this["$"+c]||null},getUrlParamsObject:function(){return this.getParamsObject(n.GET)},getPostParamsObject:function(){return this.getParamsObject(n.POST)},getPostParams:function(){return this.getParams(n.POST)},getUrlParams:function(){return this.getParams(n.GET)},getParams:function(c){var c=c?c.toUpperCase():n.GET,c=this["$"+c],e=[],f;if(c)for(var g in c)if(f=c[g],i.isArray(f))for(var r=0;r<f.length;r++)e.push(g+"="+encodeURIComponent(f[r]));else e.push(g+"="+encodeURIComponent(f));return e.join("&")},
setUrlParamsIf:function(c,e){this.setParams(c,e,n.GET,!0)},setPostParamsIf:function(c,e){this.setParams(c,e,n.POST,!0)},setParams:function(c,e,f,g){f=f?f.toUpperCase():n.GET;if(!this.$types)this.$types={};this.$types[f]=!0;f="$"+f;this[f]||(this[f]={});if(i.isObject(c))for(var r in c){if(!g||!this[f][r])this[f][r]=c[r]}else if(c&&(!g||!this[f][c]))this[f][c]=e},setPostParams:function(c,e){this.setParams(c,e,n.POST)},setUrlParams:function(c,e){this.setParams(c,e,n.GET)},removeParamsObject:function(c){if(!c)c=
n.GET;delete this["$"+c]},removePostParamsObject:function(){this.removeParamsObject(n.POST)},removeUrlParamsObject:function(){this.removeParamsObject(n.GET)},reset:function(){var c=this.$types;if(c){for(var e in c)g.has(c,e)&&delete this["$"+e];delete this.$types}c=this.$keys;e=this.$attrs;if(c){for(var f=0;f<c.length;f++)delete e[c[f]];delete this.$keys}},url:function(c){var e=this.get("url");if(c=c||this.get("uri")){var e=c.split(":"),f=this.urlMap;if(f){for(var g=0,i=e.length;g<i&&!(f=f[e[g]],
!f);g++);c=f||c}e=c}else if(!e)throw Error("model not set uri and url");return e},get:function(c){var e=this.$attrs;return e?e[c]:null},set:function(c,e,f){if(!this.$attrs)this.$attrs={};if(f&&!this.$keys)this.$keys=[];if(i.isObject(c))for(var g in c)f&&this.$keys.push(g),this.$attrs[g]=c[g];else c&&(f&&this.$keys.push(c),this.$attrs[c]=e)},load:function(c){this.request(c)},save:function(c){this.request(c)},request:function(c){c||(c={});var e=c.success,f=c.error,g=this;g.$abort=!1;c.success=function(c){if(!g.$abort){if(c){var f=
g.parse(c);i.isObject(f)||(f={data:f});g.set(f,null,!0)}e&&e.apply(this,arguments)}};c.error=function(){g.$abort||f&&f.apply(this,arguments)};g.$trans=g.sync(c)},abort:function(){this.$trans&&this.$trans.abort&&this.$trans.abort();delete this.$trans;this.$abort=!0},isAborted:function(){return this.$abort},beginTransaction:function(){this.$bakAttrs=i.clone(this.$attrs)},rollbackTransaction:function(){var c=this.$bakAttrs;if(c)this.$attrs=c,delete this.$bakAttrs},endTransaction:function(){delete this.$bakAttrs}});
return n},{requires:["magix/magix"]});
KISSY.add("mxext/view",function(i,g,q,n){var c=window,e=function(a){c.clearTimeout(a);c.clearInterval(a)},f=function(a){r(a.destroy,[],a)},k=0,r=g.safeExec,m=g.has,l={},o=function(a){if(!o.d)o.d=1,a.on("add",function(a){var a=a.vframe,c=l[a.id];if(c){for(var e=0;e<c.length;e++)b(a,c[e]);delete l[a.id]}}),a.on("remove",function(a){delete l[a.vframe.id]}),a.root().on("created",function(){l={}})},b=function(a,b){var c=a.view;if(c&&a.viewUsable)r(c.receiveMessage,b,c);else{var e=function(c){a.un("viewInteract",
e);r(c.view.receiveMessage,b,c.view)};a.on("viewInteract",e)}};return q.extend({mxViewCtor:g.noop,navigate:function(){n.navigate.apply(n,arguments)},manage:function(a,b){var c=!0;1==arguments.length&&(b=a,a="res_"+k++,c=!1);if(!this.$res)this.$res={};var g;i.isNumber(b)?g=e:b&&b.destroy&&(g=f);this.$res[a]={hasKey:c,res:b,destroy:g};return b},getManaged:function(a){var b=this.$res;return b&&m(b,a)?b[a].res:null},removeManaged:function(a){var b=null,c=this.$res;if(c)if(m(c,a))b=c[a].res,delete c[a];
else for(var e in c)if(c[e].res===a){b=c[e].res;delete c[e];break}return b},destroyManaged:function(a){var b=this.$res;if(b){for(var c in b){var e=b[c],f=e.res,g=e.destroy,i=!1;g&&(g(f),i=!0);e.hasKey||delete b[c];this.fire("destroyManaged",{resource:f,processed:i})}"destroy"==a.type&&delete this.$res}},receiveMessage:g.noop,postMessageTo:function(a,c){var e=this.vom;o(e);g.isArray(a)||(a=[a]);c||(c={});for(var f=0,i;f<a.length;f++){i=a[f];var k=e.get(i);k?b(k,c):(l[i]||(l[i]=[]),l[i].push(c))}},
destroyMRequest:function(){var a=this.$res;if(a)for(var b in a){var c=a[b].res;c&&c.fetchOne&&c.fetchAll&&(c.destroy(),delete a[b])}}},function(){var a=this;a.home=g.config().appHome;a.on("interact",function(){a.on("rendercall",a.destroyMRequest);a.on("prerender",a.destroyManaged);a.on("destroy",a.destroyManaged)});a.mxViewCtor()})},{requires:["magix/magix","magix/view","magix/router"]});
(function(i){var g=function(){};if(!i.console)i.console={log:g,info:g,error:g};var q,n={};if(!i.Magix)i.Magix={config:function(c){for(var e in c)n[e]=c[e]},start:function(c){q=c}},KISSY.use("magix/magix",function(c,e){i.Magix=e;e.config(n);q&&e.start(q)})})(this);