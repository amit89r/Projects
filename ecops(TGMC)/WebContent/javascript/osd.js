(function(){var e=true,h=null,i=false,aa=encodeURIComponent,j=window,ba=Goog_AdSense_getAdAdapterInstance,k=document,l=Math,m="push",n="getBoundingClientRect",o="width",s="round",t="nodeType",u="indexOf",v="left",w="getBoxObjectFor",x="addEventListener",y="attachEvent",z="defaultView",A="documentElement",B="scrollTop",C="length",ca="scrollY",D="prototype",E="document",F="body",G="scrollLeft",H="compatMode",I="bottom",J="height",K="join",L="right",M=this;l.floor(l.random()*2147483648).toString(36);
var da=Date.now||function(){return(new Date).getTime()};var N=function(a,b){this.x=a!==undefined?a:0;this.y=b!==undefined?b:0};N[D].toString=function(){return"("+this.x+", "+this.y+")"};var O=function(a,b){this.width=a;this.height=b};O[D].toString=function(){return"("+this[o]+" x "+this[J]+")"};O[D].floor=function(){this.width=l.floor(this[o]);this.height=l.floor(this[J]);return this};O[D].round=function(){this.width=l[s](this[o]);this.height=l[s](this[J]);return this};var ea=function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},fa=function(a,b){return a[u](b)!=-1},ha=function(a,b){var c=0;a=ea(String(a)).split(".");b=ea(String(b)).split(".");for(var d=l.max(a[C],b[C]),f=0;c==0&&f<d;f++){var g=a[f]||"",p=b[f]||"",V=new RegExp("(\\d*)(\\D*)","g"),W=new RegExp("(\\d*)(\\D*)","g");do{var r=V.exec(g)||["","",""],q=W.exec(p)||["","",""];if(r[0][C]==0&&q[0][C]==0)break;c=r[1][C]==0?0:parseInt(r[1],10);var ka=q[1][C]==0?0:parseInt(q[1],10);c=ga(c,ka)||ga(r[2][C]==
0,q[2][C]==0)||ga(r[2],q[2])}while(c==0)}return c},ga=function(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};da();var P,ia,ja,la,ma,na,oa,pa,qa,ra,sa=function(){return M.navigator?M.navigator.userAgent:h},ta=function(){return M.navigator},ua=function(){na=ma=la=ja=ia=P=i;var a;if(a=sa()){var b=ta();P=a[u]("Opera")==0;ia=!P&&a[u]("MSIE")!=-1;la=(ja=!P&&a[u]("WebKit")!=-1)&&a[u]("Mobile")!=-1;na=(ma=!P&&!ja&&b.product=="Gecko")&&b.vendor=="Camino"}};ua();
var Q=P,va=ia,wa=ma,R=ja,xa=la,ya=function(){var a=ta();return a&&a.platform||""},za=ya(),Aa=function(){oa=fa(za,"Mac");pa=fa(za,"Win");qa=fa(za,"Linux");ra=!!ta()&&fa(ta().appVersion||"","X11")};Aa();var Ba=function(){var a="",b;if(Q&&M.opera){a=M.opera.version;a=typeof a=="function"?a():a}else{if(wa)b=/rv\:([^\);]+)(\)|;)/;else if(va)b=/MSIE\s+([^\);]+)(\)|;)/;else if(R)b=/WebKit\/(\S+)/;if(b)a=(a=b.exec(sa()))?a[1]:""}return a},Ca=Ba(),Da={},Ea=function(a){return Da[a]||(Da[a]=ha(Ca,a)>=0)};var Fa;var Ga=function(a){return a?new S(T(a)):Fa||(Fa=new S)},Ha=function(a){var b=a[E];if(R&&!Ea("500")&&!xa){if(typeof a.innerHeight=="undefined")a=j;b=a.innerHeight;var c=a[E][A].scrollHeight;if(a==a.top)if(c<b)b-=15;return new O(a.innerWidth,b)}a=b[H]=="CSS1Compat"&&(!Q||Q&&Ea("9.50"))?b[A]:b[F];return new O(a.clientWidth,a.clientHeight)},Ia=function(a){a=!R&&a[H]=="CSS1Compat"?a[A]:a[F];return new N(a[G],a[B])},Ka=function(a){return a?Ja(a):j},Ja=function(a){if(a.parentWindow)return a.parentWindow;
if(R&&!Ea("500")&&!xa){var b=a.createElement("script");b.innerHTML="document.parentWindow=window";var c=a[A];c.appendChild(b);c.removeChild(b);return a.parentWindow}return a[z]},La=function(a,b){a.appendChild(b)},Ma=R&&Ea("522"),Na=function(a,b){if(typeof a.contains!="undefined"&&!Ma&&b[t]==1)return a==b||a.contains(b);if(typeof a.compareDocumentPosition!="undefined")return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a},T=function(a){return a[t]==9?a:a.ownerDocument||
a[E]},S=function(a){this.a=a||M[E]||k};S[D].createElement=function(a){return this.a.createElement(a)};var Oa=function(a){return a.a[H]=="CSS1Compat"},Pa=function(a){return Ia(a.a)};S[D].appendChild=La;S[D].contains=Na;function Qa(a,b){if(a=="true")return e;if(a=="false")return i;return b};Qa("false",i);Qa("false",i);Qa("false",i);Qa("false",i);var Ra=j;var Sa="pagead2.googlesyndication.com",Ta=Sa;function U(a){return typeof aa=="function"?aa(a):escape(a)}function Ua(a,b){if(a[y]){a[y]("onload",b);return e}if(a[x]){a[x]("load",b,i);return e}return i}function Va(a,b){a.google_image_requests||(a.google_image_requests=[]);var c=new Image;c.src=b;a.google_image_requests[m](c)}var Wa=function(a){var b=Ra;if(a&&b.top!=b)b=b.top;try{return b[E]&&!b[E][F]?new O(-1,-1):Ha(b||j)}catch(c){return new O(-12245933,-12245933)}};var Xa,Ya,Za,$a,ab,bb,cb=function(){bb=ab=$a=Za=Ya=Xa=i;var a=sa();if(a)if(a[u]("Firefox")!=-1)Xa=e;else if(a[u]("Camino")!=-1)Ya=e;else if(a[u]("iPhone")!=-1||a[u]("iPod")!=-1)Za=e;else if(a[u]("Android")!=-1)$a=e;else if(a[u]("Chrome")!=-1)ab=e;else if(a[u]("Safari")!=-1)bb=e};cb();var db=function(a,b){var c=T(a);if(c[z]&&c[z].getComputedStyle)if(a=c[z].getComputedStyle(a,""))return a[b];return h},eb=function(a,b){return db(a,b)||(a.currentStyle?a.currentStyle[b]:h)||a.style[b]},fb=function(a){a=a?a[t]==9?a:T(a):k;if(va&&!Oa(Ga(a)))return a[F];return a[A]},gb=function(a){var b=a[n]();if(va){a=a.ownerDocument;b.left-=a[A].clientLeft+a[F].clientLeft;b.top-=a[A].clientTop+a[F].clientTop}return b},hb=function(a){if(va)return a.offsetParent;var b=T(a),c=eb(a,"position"),d=c=="fixed"||
c=="absolute";for(a=a.parentNode;a&&a!=b;a=a.parentNode){c=eb(a,"position");d=d&&c=="static"&&a!=b[A]&&a!=b[F];if(!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||c=="fixed"||c=="absolute"))return a}return h},ib=function(a){var b,c=T(a),d=eb(a,"position"),f=wa&&c[w]&&!a[n]&&d=="absolute"&&(b=c[w](a))&&(b.screenX<0||b.screenY<0),g=new N(0,0),p=fb(c);if(a==p)return g;if(a[n]){b=gb(a);a=Pa(Ga(c));g.x=b[v]+a.x;g.y=b.top+a.y}else if(c[w]&&!f){b=c[w](a);a=c[w](p);g.x=b.screenX-a.screenX;
g.y=b.screenY-a.screenY}else{b=a;do{g.x+=b.offsetLeft;g.y+=b.offsetTop;if(b!=a){g.x+=b.clientLeft||0;g.y+=b.clientTop||0}if(R&&eb(b,"position")=="fixed"){g.x+=c[F][G];g.y+=c[F][B];break}b=b.offsetParent}while(b&&b!=a);if(Q||R&&d=="absolute")g.y-=c[F].offsetTop;for(b=a;(b=hb(b))&&b!=c[F]&&b!=p;){g.x-=b[G];if(!Q||b.tagName!="TR")g.y-=b[B]}}return g},kb=function(a,b){var c=new N(0,0),d=Ka(T(a));a=a;do{var f=d==b?ib(a):jb(a);c.x+=f.x;c.y+=f.y}while(d&&d!=b&&(a=d.frameElement)&&(d=d.parent));return c},
jb=function(a){var b=new N;if(a[t]==1)if(a[n]){var c=gb(a);b.x=c[v];b.y=c.top}else{c=Pa(Ga(a));a=ib(a);b.x=a.x-c.x;b.y=a.y-c.y}else{b.x=a.clientX;b.y=a.clientY}return b};var X,lb,tb=function(){try{var a=Y();if(mb()){var b=nb;b.adBlocksRegistered=X.numBlocks();var c=[];b.adBlocksFound=0;X.findBlocks(function(V,W){b.adBlocksFound++;var r=V[n](),q={x:0,y:0};try{q=kb(V,j.top);var ka=new Z(l[s](q.y),l[s](q.x),l[s](r[I]-r.top+q.y),l[s](r[L]-r[v]+q.x));c[m](new ob(ka,W))}catch(Cb){c[m](new ob(pb,W))}});qb=c;var d=X.getOsdMode();if(d==1)$("p");else{(d=d==0)&&rb();var f=function(){$("f")},g=function(){$("u")};if(k[y]){k[y]("onfocusout",f);j[y]("onunload",g);d&&j[y]("onscroll",
rb)}else{j[x]("blur",f,e);j[x]("unload",g,i);d&&j[x]("scroll",rb,i)}j.setTimeout(function(){$("t")},3600000)}b.initTime=Y()-a}else $("c")}catch(p){sb();$("x")}},rb=function(){if(!ub){var a=Y(),b=e;b=Wa(b);if(!(-1==b[o]||-1==b[J]||-12245933==b[o]||-12245933==b[J])){var c=h;try{c=Ia(k)}catch(d){return}b=new Z(c.y,c.x,c.y+b[J],c.x+b[o]);c=qb;for(var f=0;f<c[C];f++)c[f].update(a,b);b=nb;b.scrollTime+=Y()-a;b.scrollCount++}}},$=function(a){if(!ub){var b=["http://"+Ta+"/pagead/gen_204?id=osd"];try{var c=
qb;if(c[C]>0){rb();for(var d=0;d<c[C];d++)c[d].ifi>0&&b[m]("ad"+(c[d].ifi-1)+"="+U(vb(c[d])));d=e;var f=Wa(d);b[m]("bs="+f[o]+","+f[J]);var g=!j[ca]&&k[H]!="CSS1Compat"?new Z(0,0,k[F].scrollHeight,k[F].scrollWidth):new Z(0,0,k[F].offsetHeight,k[F].offsetWidth);b[m]("ps="+g[L]+","+g[I]);b[m]("fp="+U(wb(xb,c[0].url)))}else{b[m]("url="+U(j.location.href));k.referrer&&b[m]("referrer="+U(k.referrer));if(X){b[m]("correlator="+X.getCorrelator());b[m]("eid="+X.getEid())}}b[m]("deb="+U(yb()));b[m]("tt="+Y());
b[m]("r="+a);if(j.top!=j){b[m]("iframe_loc="+U(j.location.href));d=i;var p=Wa(d);b[m]("is="+p[o]+","+p[J])}}catch(V){b[m]("error")}try{Va(j,b[K]("&"))}catch(W){}ub=e}},zb=/[&\?](?:slotname|dt|format)=[^&]+/g,xb=/[&\?](?:client|correlator|url|eid)=[^&]+/g,wb=function(a,b){return(a=b.match(a))?a[K](""):""},qb=[],ub=i,Ab=(new Date).getTime(),sb=function(){qb=[]},Y=function(){return(new Date).getTime()-Ab},nb={adBlocksRegistered:0,adBlocksFound:0,scrollTime:0,scrollCount:0,initTime:0},yb=function(){var a=
nb;return[1,a.adBlocksRegistered,a.adBlocksFound,a.scrollTime,a.scrollCount,a.initTime][K]("-")},mb=function(){if(!k[F]||!k[F][n]||typeof ba!="function")return i;X=ba();if(typeof j[ca]!="undefined")lb=function(){return new Z(j[ca],j.scrollX,j[ca]+j.innerHeight,j.scrollX+j.innerWidth)};else if(k[H]){var a=h;a=k[H]=="CSS1Compat"?k[A]:k[F];lb=function(){return new Z(a[B],a[G],a[B]+a.clientHeight,a[G]+a.clientWidth)}}else return i;return e},ob=function(a,b){this.pos=a;this.d=(a[I]-a.top)*(a[L]-a[v]);
this.timeLastSeen=this.timeFirstSeen=-1;this.tos=[0,0,0];this.fp=wb(zb,b);this.b=i;this.c=Y();this.url=b;this.ifi=Bb(b)};
ob[D].update=function(a,b){var c=this.pos,d=a-this.c;this.c=a;var f=l.max(c.top,b.top),g=l.min(c[I],b[I]);if(f<=g){var p=l.max(c[v],b[v]);b=l.min(c[L],b[L]);if(p<=b){f=(g-f)*(b-p)/this.d;if(f>=1)this.tos[0]+=d;else if(f>=0.9)this.tos[1]+=d;else if(f>=0.75)this.tos[2]+=d;else{this.b=i;return}if(this.timeFirstSeen<0)this.timeFirstSeen=a;else if(!this.b){this.timeLastSeen=a;this.b=e}}}};
var vb=function(a){var b=a.pos,c=a.timeFirstSeen>=0?[",tos:",a.tos[K](","),"tfs:",a.timeFirstSeen,"tls:",a.timeLastSeen][K](","):"";return["p:",b.top,b[v],b[I],b[L]+c,"fp:",a.fp][K](",")},Bb=function(a){if((a=a.match(/[&\?](?:ifi)=([0-9]+)/))&&a[C]==2)return Number(a[1]);return 0},Z=function(a,b,c,d){this.top=a;this.bottom=c;this.left=b;this.right=d},pb=new Z(0,0,0,0);k.readyState=="complete"?tb():Ua(j,function(){j.setTimeout(tb,1100)});})()