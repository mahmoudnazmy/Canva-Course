const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CourseView-Cw9jzT7R.js","assets/CourseView-BJpUtP73.css","assets/RegisterView-Dfk0f-3k.js","assets/RegisterView-d8G9wjZS.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ih(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const At={},Xo=[],ar=()=>{},sS=()=>!1,Ru=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Uh=n=>n.startsWith("onUpdate:"),sn=Object.assign,Nh=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},oS=Object.prototype.hasOwnProperty,St=(n,e)=>oS.call(n,e),Ve=Array.isArray,$o=n=>Ol(n)==="[object Map]",ba=n=>Ol(n)==="[object Set]",Op=n=>Ol(n)==="[object Date]",Ze=n=>typeof n=="function",Ht=n=>typeof n=="string",fr=n=>typeof n=="symbol",Ct=n=>n!==null&&typeof n=="object",gg=n=>(Ct(n)||Ze(n))&&Ze(n.then)&&Ze(n.catch),vg=Object.prototype.toString,Ol=n=>vg.call(n),aS=n=>Ol(n).slice(8,-1),xg=n=>Ol(n)==="[object Object]",Oh=n=>Ht(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ja=Ih(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pu=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},lS=/-(\w)/g,Ni=Pu(n=>n.replace(lS,(e,t)=>t?t.toUpperCase():"")),cS=/\B([A-Z])/g,mo=Pu(n=>n.replace(cS,"-$1").toLowerCase()),Du=Pu(n=>n.charAt(0).toUpperCase()+n.slice(1)),Zu=Pu(n=>n?`on${Du(n)}`:""),us=(n,e)=>!Object.is(n,e),Nc=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Sg=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},iu=n=>{const e=parseFloat(n);return isNaN(e)?n:e},uS=n=>{const e=Ht(n)?Number(n):NaN;return isNaN(e)?n:e};let Fp;const Lu=()=>Fp||(Fp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fh(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Ht(i)?pS(i):Fh(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Ht(n)||Ct(n))return n}const fS=/;(?![^(]*\))/g,dS=/:([^]+)/,hS=/\/\*[^]*?\*\//g;function pS(n){const e={};return n.replace(hS,"").split(fS).forEach(t=>{if(t){const i=t.split(dS);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Wi(n){let e="";if(Ht(n))e=n;else if(Ve(n))for(let t=0;t<n.length;t++){const i=Wi(n[t]);i&&(e+=i+" ")}else if(Ct(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const mS="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_S=Ih(mS);function yg(n){return!!n||n===""}function gS(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Fl(n[i],e[i]);return t}function Fl(n,e){if(n===e)return!0;let t=Op(n),i=Op(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=fr(n),i=fr(e),t||i)return n===e;if(t=Ve(n),i=Ve(e),t||i)return t&&i?gS(n,e):!1;if(t=Ct(n),i=Ct(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Fl(n[o],e[o]))return!1}}return String(n)===String(e)}function Bh(n,e){return n.findIndex(t=>Fl(t,e))}const Mg=n=>!!(n&&n.__v_isRef===!0),Fn=n=>Ht(n)?n:n==null?"":Ve(n)||Ct(n)&&(n.toString===vg||!Ze(n.toString))?Mg(n)?Fn(n.value):JSON.stringify(n,Eg,2):String(n),Eg=(n,e)=>Mg(e)?Eg(n,e.value):$o(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Ju(i,s)+" =>"]=r,t),{})}:ba(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ju(t))}:fr(e)?Ju(e):Ct(e)&&!Ve(e)&&!xg(e)?String(e):e,Ju=(n,e="")=>{var t;return fr(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let oi;class vS{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=oi,!e&&oi&&(this.index=(oi.scopes||(oi.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=oi;try{return oi=this,e()}finally{oi=t}}}on(){oi=this}off(){oi=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function xS(){return oi}let Dt;const Qu=new WeakSet;class bg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,oi&&oi.active&&oi.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Qu.has(this)&&(Qu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ag(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bp(this),wg(this);const e=Dt,t=Xi;Dt=this,Xi=!0;try{return this.fn()}finally{Cg(this),Dt=e,Xi=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Hh(e);this.deps=this.depsTail=void 0,Bp(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Qu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){id(this)&&this.run()}get dirty(){return id(this)}}let Tg=0,Za,Ja;function Ag(n,e=!1){if(n.flags|=8,e){n.next=Ja,Ja=n;return}n.next=Za,Za=n}function kh(){Tg++}function zh(){if(--Tg>0)return;if(Ja){let e=Ja;for(Ja=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Za;){let e=Za;for(Za=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function wg(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Cg(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Hh(i),SS(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function id(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Rg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Rg(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===_l))return;n.globalVersion=_l;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!id(n)){n.flags&=-3;return}const t=Dt,i=Xi;Dt=n,Xi=!0;try{wg(n);const r=n.fn(n._value);(e.version===0||us(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Dt=t,Xi=i,Cg(n),n.flags&=-3}}function Hh(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Hh(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function SS(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Xi=!0;const Pg=[];function Ms(){Pg.push(Xi),Xi=!1}function Es(){const n=Pg.pop();Xi=n===void 0?!0:n}function Bp(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Dt;Dt=void 0;try{e()}finally{Dt=t}}}let _l=0;class yS{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Vh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Dt||!Xi||Dt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Dt)t=this.activeLink=new yS(Dt,this),Dt.deps?(t.prevDep=Dt.depsTail,Dt.depsTail.nextDep=t,Dt.depsTail=t):Dt.deps=Dt.depsTail=t,Dg(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Dt.depsTail,t.nextDep=void 0,Dt.depsTail.nextDep=t,Dt.depsTail=t,Dt.deps===t&&(Dt.deps=i)}return t}trigger(e){this.version++,_l++,this.notify(e)}notify(e){kh();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{zh()}}}function Dg(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Dg(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const rd=new WeakMap,Zs=Symbol(""),sd=Symbol(""),gl=Symbol("");function Sn(n,e,t){if(Xi&&Dt){let i=rd.get(n);i||rd.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Vh),r.map=i,r.key=t),r.track()}}function Tr(n,e,t,i,r,s){const o=rd.get(n);if(!o){_l++;return}const a=l=>{l&&l.trigger()};if(kh(),e==="clear")o.forEach(a);else{const l=Ve(n),c=l&&Oh(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===gl||!fr(d)&&d>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(gl)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Zs)),$o(n)&&a(o.get(sd)));break;case"delete":l||(a(o.get(Zs)),$o(n)&&a(o.get(sd)));break;case"set":$o(n)&&a(o.get(Zs));break}}zh()}function vo(n){const e=ht(n);return e===n?e:(Sn(e,"iterate",gl),Li(n)?e:e.map(yn))}function Iu(n){return Sn(n=ht(n),"iterate",gl),n}const MS={__proto__:null,[Symbol.iterator](){return ef(this,Symbol.iterator,yn)},concat(...n){return vo(this).concat(...n.map(e=>Ve(e)?vo(e):e))},entries(){return ef(this,"entries",n=>(n[1]=yn(n[1]),n))},every(n,e){return pr(this,"every",n,e,void 0,arguments)},filter(n,e){return pr(this,"filter",n,e,t=>t.map(yn),arguments)},find(n,e){return pr(this,"find",n,e,yn,arguments)},findIndex(n,e){return pr(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return pr(this,"findLast",n,e,yn,arguments)},findLastIndex(n,e){return pr(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return pr(this,"forEach",n,e,void 0,arguments)},includes(...n){return tf(this,"includes",n)},indexOf(...n){return tf(this,"indexOf",n)},join(n){return vo(this).join(n)},lastIndexOf(...n){return tf(this,"lastIndexOf",n)},map(n,e){return pr(this,"map",n,e,void 0,arguments)},pop(){return Ca(this,"pop")},push(...n){return Ca(this,"push",n)},reduce(n,...e){return kp(this,"reduce",n,e)},reduceRight(n,...e){return kp(this,"reduceRight",n,e)},shift(){return Ca(this,"shift")},some(n,e){return pr(this,"some",n,e,void 0,arguments)},splice(...n){return Ca(this,"splice",n)},toReversed(){return vo(this).toReversed()},toSorted(n){return vo(this).toSorted(n)},toSpliced(...n){return vo(this).toSpliced(...n)},unshift(...n){return Ca(this,"unshift",n)},values(){return ef(this,"values",yn)}};function ef(n,e,t){const i=Iu(n),r=i[e]();return i!==n&&!Li(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const ES=Array.prototype;function pr(n,e,t,i,r,s){const o=Iu(n),a=o!==n&&!Li(n),l=o[e];if(l!==ES[e]){const f=l.apply(n,s);return a?yn(f):f}let c=t;o!==n&&(a?c=function(f,d){return t.call(this,yn(f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function kp(n,e,t,i){const r=Iu(n);let s=t;return r!==n&&(Li(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,yn(a),l,n)}),r[e](s,...i)}function tf(n,e,t){const i=ht(n);Sn(i,"iterate",gl);const r=i[e](...t);return(r===-1||r===!1)&&Xh(t[0])?(t[0]=ht(t[0]),i[e](...t)):r}function Ca(n,e,t=[]){Ms(),kh();const i=ht(n)[e].apply(n,t);return zh(),Es(),i}const bS=Ih("__proto__,__v_isRef,__isVue"),Lg=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(fr));function TS(n){fr(n)||(n=String(n));const e=ht(this);return Sn(e,"has",n),e.hasOwnProperty(n)}class Ig{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?NS:Fg:s?Og:Ng).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ve(e);if(!r){let l;if(o&&(l=MS[t]))return l;if(t==="hasOwnProperty")return TS}const a=Reflect.get(e,t,An(e)?e:i);return(fr(t)?Lg.has(t):bS(t))||(r||Sn(e,"get",t),s)?a:An(a)?o&&Oh(t)?a:a.value:Ct(a)?r?kg(a):Uu(a):a}}class Ug extends Ig{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=oo(s);if(!Li(i)&&!oo(i)&&(s=ht(s),i=ht(i)),!Ve(e)&&An(s)&&!An(i))return l?!1:(s.value=i,!0)}const o=Ve(e)&&Oh(t)?Number(t)<e.length:St(e,t),a=Reflect.set(e,t,i,An(e)?e:r);return e===ht(r)&&(o?us(i,s)&&Tr(e,"set",t,i):Tr(e,"add",t,i)),a}deleteProperty(e,t){const i=St(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Tr(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!fr(t)||!Lg.has(t))&&Sn(e,"has",t),i}ownKeys(e){return Sn(e,"iterate",Ve(e)?"length":Zs),Reflect.ownKeys(e)}}class AS extends Ig{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const wS=new Ug,CS=new AS,RS=new Ug(!0);const od=n=>n,Yl=n=>Reflect.getPrototypeOf(n);function PS(n,e,t){return function(...i){const r=this.__v_raw,s=ht(r),o=$o(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?od:e?ad:yn;return!e&&Sn(s,"iterate",l?sd:Zs),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Kl(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function DS(n,e){const t={get(r){const s=this.__v_raw,o=ht(s),a=ht(r);n||(us(r,a)&&Sn(o,"get",r),Sn(o,"get",a));const{has:l}=Yl(o),c=e?od:n?ad:yn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Sn(ht(r),"iterate",Zs),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=ht(s),a=ht(r);return n||(us(r,a)&&Sn(o,"has",r),Sn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=ht(a),c=e?od:n?ad:yn;return!n&&Sn(l,"iterate",Zs),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return sn(t,n?{add:Kl("add"),set:Kl("set"),delete:Kl("delete"),clear:Kl("clear")}:{add(r){!e&&!Li(r)&&!oo(r)&&(r=ht(r));const s=ht(this);return Yl(s).has.call(s,r)||(s.add(r),Tr(s,"add",r,r)),this},set(r,s){!e&&!Li(s)&&!oo(s)&&(s=ht(s));const o=ht(this),{has:a,get:l}=Yl(o);let c=a.call(o,r);c||(r=ht(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?us(s,u)&&Tr(o,"set",r,s):Tr(o,"add",r,s),this},delete(r){const s=ht(this),{has:o,get:a}=Yl(s);let l=o.call(s,r);l||(r=ht(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Tr(s,"delete",r,void 0),c},clear(){const r=ht(this),s=r.size!==0,o=r.clear();return s&&Tr(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=PS(r,n,e)}),t}function Gh(n,e){const t=DS(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(St(t,r)&&r in i?t:i,r,s)}const LS={get:Gh(!1,!1)},IS={get:Gh(!1,!0)},US={get:Gh(!0,!1)};const Ng=new WeakMap,Og=new WeakMap,Fg=new WeakMap,NS=new WeakMap;function OS(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function FS(n){return n.__v_skip||!Object.isExtensible(n)?0:OS(aS(n))}function Uu(n){return oo(n)?n:Wh(n,!1,wS,LS,Ng)}function Bg(n){return Wh(n,!1,RS,IS,Og)}function kg(n){return Wh(n,!0,CS,US,Fg)}function Wh(n,e,t,i,r){if(!Ct(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=FS(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function qo(n){return oo(n)?qo(n.__v_raw):!!(n&&n.__v_isReactive)}function oo(n){return!!(n&&n.__v_isReadonly)}function Li(n){return!!(n&&n.__v_isShallow)}function Xh(n){return n?!!n.__v_raw:!1}function ht(n){const e=n&&n.__v_raw;return e?ht(e):n}function BS(n){return!St(n,"__v_skip")&&Object.isExtensible(n)&&Sg(n,"__v_skip",!0),n}const yn=n=>Ct(n)?Uu(n):n,ad=n=>Ct(n)?kg(n):n;function An(n){return n?n.__v_isRef===!0:!1}function Ii(n){return zg(n,!1)}function kS(n){return zg(n,!0)}function zg(n,e){return An(n)?n:new zS(n,e)}class zS{constructor(e,t){this.dep=new Vh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ht(e),this._value=t?e:yn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Li(e)||oo(e);e=i?e:ht(e),us(e,t)&&(this._rawValue=e,this._value=i?e:yn(e),this.dep.trigger())}}function Yo(n){return An(n)?n.value:n}const HS={get:(n,e,t)=>e==="__v_raw"?n:Yo(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return An(r)&&!An(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Hg(n){return qo(n)?n:new Proxy(n,HS)}class VS{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Vh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_l-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Dt!==this)return Ag(this,!0),!0}get value(){const e=this.dep.track();return Rg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function GS(n,e,t=!1){let i,r;return Ze(n)?i=n:(i=n.get,r=n.set),new VS(i,r,t)}const jl={},ru=new WeakMap;let Bs;function WS(n,e=!1,t=Bs){if(t){let i=ru.get(t);i||ru.set(t,i=[]),i.push(n)}}function XS(n,e,t=At){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=v=>r?v:Li(v)||r===!1||r===0?Ar(v,1):Ar(v);let u,f,d,h,g=!1,_=!1;if(An(n)?(f=()=>n.value,g=Li(n)):qo(n)?(f=()=>c(n),g=!0):Ve(n)?(_=!0,g=n.some(v=>qo(v)||Li(v)),f=()=>n.map(v=>{if(An(v))return v.value;if(qo(v))return c(v);if(Ze(v))return l?l(v,2):v()})):Ze(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){Ms();try{d()}finally{Es()}}const v=Bs;Bs=u;try{return l?l(n,3,[h]):n(h)}finally{Bs=v}}:f=ar,e&&r){const v=f,R=r===!0?1/0:r;f=()=>Ar(v(),R)}const m=xS(),p=()=>{u.stop(),m&&m.active&&Nh(m.effects,u)};if(s&&e){const v=e;e=(...R)=>{v(...R),p()}}let T=_?new Array(n.length).fill(jl):jl;const E=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(e){const R=u.run();if(r||g||(_?R.some((C,w)=>us(C,T[w])):us(R,T))){d&&d();const C=Bs;Bs=u;try{const w=[R,T===jl?void 0:_&&T[0]===jl?[]:T,h];l?l(e,3,w):e(...w),T=R}finally{Bs=C}}}else u.run()};return a&&a(E),u=new bg(f),u.scheduler=o?()=>o(E,!1):E,h=v=>WS(v,!1,u),d=u.onStop=()=>{const v=ru.get(u);if(v){if(l)l(v,4);else for(const R of v)R();ru.delete(u)}},e?i?E(!0):T=u.run():o?o(E.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Ar(n,e=1/0,t){if(e<=0||!Ct(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,An(n))Ar(n.value,e,t);else if(Ve(n))for(let i=0;i<n.length;i++)Ar(n[i],e,t);else if(ba(n)||$o(n))n.forEach(i=>{Ar(i,e,t)});else if(xg(n)){for(const i in n)Ar(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ar(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Bl(n,e,t,i){try{return i?n(...i):n()}catch(r){Nu(r,e,t)}}function Yi(n,e,t,i){if(Ze(n)){const r=Bl(n,e,t,i);return r&&gg(r)&&r.catch(s=>{Nu(s,e,t)}),r}if(Ve(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Yi(n[s],e,t,i));return r}}function Nu(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||At;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){Ms(),Bl(s,null,10,[n,l,c]),Es();return}}$S(n,t,r,i,o)}function $S(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Bn=[];let Ji=-1;const Ko=[];let Qr=null,Oo=0;const Vg=Promise.resolve();let su=null;function $h(n){const e=su||Vg;return n?e.then(this?n.bind(this):n):e}function qS(n){let e=Ji+1,t=Bn.length;for(;e<t;){const i=e+t>>>1,r=Bn[i],s=vl(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function qh(n){if(!(n.flags&1)){const e=vl(n),t=Bn[Bn.length-1];!t||!(n.flags&2)&&e>=vl(t)?Bn.push(n):Bn.splice(qS(e),0,n),n.flags|=1,Gg()}}function Gg(){su||(su=Vg.then(Xg))}function YS(n){Ve(n)?Ko.push(...n):Qr&&n.id===-1?Qr.splice(Oo+1,0,n):n.flags&1||(Ko.push(n),n.flags|=1),Gg()}function zp(n,e,t=Ji+1){for(;t<Bn.length;t++){const i=Bn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Bn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Wg(n){if(Ko.length){const e=[...new Set(Ko)].sort((t,i)=>vl(t)-vl(i));if(Ko.length=0,Qr){Qr.push(...e);return}for(Qr=e,Oo=0;Oo<Qr.length;Oo++){const t=Qr[Oo];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Qr=null,Oo=0}}const vl=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Xg(n){try{for(Ji=0;Ji<Bn.length;Ji++){const e=Bn[Ji];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Bl(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ji<Bn.length;Ji++){const e=Bn[Ji];e&&(e.flags&=-2)}Ji=-1,Bn.length=0,Wg(),su=null,(Bn.length||Ko.length)&&Xg()}}let $n=null,$g=null;function ou(n){const e=$n;return $n=n,$g=n&&n.type.__scopeId||null,e}function pi(n,e=$n,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Zp(-1);const s=ou(e);let o;try{o=n(...r)}finally{ou(s),i._d&&Zp(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ld(n,e){if($n===null)return n;const t=zu($n),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=At]=e[r];s&&(Ze(s)&&(s={mounted:s,updated:s}),s.deep&&Ar(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function ws(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Ms(),Yi(l,t,8,[n.el,a,n,e]),Es())}}const KS=Symbol("_vte"),qg=n=>n.__isTeleport,es=Symbol("_leaveCb"),Zl=Symbol("_enterCb");function Yg(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return bs(()=>{n.isMounted=!0}),i0(()=>{n.isUnmounting=!0}),n}const Ei=[Function,Array],Kg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ei,onEnter:Ei,onAfterEnter:Ei,onEnterCancelled:Ei,onBeforeLeave:Ei,onLeave:Ei,onAfterLeave:Ei,onLeaveCancelled:Ei,onBeforeAppear:Ei,onAppear:Ei,onAfterAppear:Ei,onAppearCancelled:Ei},jg=n=>{const e=n.subTree;return e.component?jg(e.component):e},jS={name:"BaseTransition",props:Kg,setup(n,{slots:e}){const t=w0(),i=Yg();return()=>{const r=e.default&&Yh(e.default(),!0);if(!r||!r.length)return;const s=Zg(r),o=ht(n),{mode:a}=o;if(i.isLeaving)return nf(s);const l=Hp(s);if(!l)return nf(s);let c=xl(l,o,i,t,f=>c=f);l.type!==Xn&&ao(l,c);let u=t.subTree&&Hp(t.subTree);if(u&&u.type!==Xn&&!Ws(l,u)&&jg(t).type!==Xn){let f=xl(u,o,i,t);if(ao(u,f),a==="out-in"&&l.type!==Xn)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},nf(s);a==="in-out"&&l.type!==Xn?f.delayLeave=(d,h,g)=>{const _=Jg(i,u);_[String(u.key)]=u,d[es]=()=>{h(),d[es]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Zg(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Xn){e=t;break}}return e}const ZS=jS;function Jg(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function xl(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:h,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:T,onAppearCancelled:E}=e,v=String(n.key),R=Jg(t,n),C=(S,x)=>{S&&Yi(S,i,9,x)},w=(S,x)=>{const U=x[1];C(S,x),Ve(S)?S.every(N=>N.length<=1)&&U():S.length<=1&&U()},I={mode:o,persisted:a,beforeEnter(S){let x=l;if(!t.isMounted)if(s)x=m||l;else return;S[es]&&S[es](!0);const U=R[v];U&&Ws(n,U)&&U.el[es]&&U.el[es](),C(x,[S])},enter(S){let x=c,U=u,N=f;if(!t.isMounted)if(s)x=p||c,U=T||u,N=E||f;else return;let z=!1;const X=S[Zl]=ee=>{z||(z=!0,ee?C(N,[S]):C(U,[S]),I.delayedLeave&&I.delayedLeave(),S[Zl]=void 0)};x?w(x,[S,X]):X()},leave(S,x){const U=String(n.key);if(S[Zl]&&S[Zl](!0),t.isUnmounting)return x();C(d,[S]);let N=!1;const z=S[es]=X=>{N||(N=!0,x(),X?C(_,[S]):C(g,[S]),S[es]=void 0,R[U]===n&&delete R[U])};R[U]=n,h?w(h,[S,z]):z()},clone(S){const x=xl(S,e,t,i,r);return r&&r(x),x}};return I}function nf(n){if(Ou(n))return n=_s(n),n.children=null,n}function Hp(n){if(!Ou(n))return qg(n.type)&&n.children?Zg(n.children):n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Ze(t.default))return t.default()}}function ao(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ao(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Yh(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Mn?(o.patchFlag&128&&r++,i=i.concat(Yh(o.children,e,a))):(e||o.type!==Xn)&&i.push(a!=null?_s(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Qg(n,e){return Ze(n)?sn({name:n.name},e,{setup:n}):n}function e0(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function au(n,e,t,i,r=!1){if(Ve(n)){n.forEach((g,_)=>au(g,e&&(Ve(e)?e[_]:e),t,i,r));return}if(Qa(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&au(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?zu(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===At?a.refs={}:a.refs,f=a.setupState,d=ht(f),h=f===At?()=>!1:g=>St(d,g);if(c!=null&&c!==l&&(Ht(c)?(u[c]=null,h(c)&&(f[c]=null)):An(c)&&(c.value=null)),Ze(l))Bl(l,a,12,[o,u]);else{const g=Ht(l),_=An(l);if(g||_){const m=()=>{if(n.f){const p=g?h(l)?f[l]:u[l]:l.value;r?Ve(p)&&Nh(p,s):Ve(p)?p.includes(s)||p.push(s):g?(u[l]=[s],h(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else g?(u[l]=o,h(l)&&(f[l]=o)):_&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,si(m,t)):m()}}}Lu().requestIdleCallback;Lu().cancelIdleCallback;const Qa=n=>!!n.type.__asyncLoader,Ou=n=>n.type.__isKeepAlive;function JS(n,e){t0(n,"a",e)}function QS(n,e){t0(n,"da",e)}function t0(n,e,t=hn){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Fu(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Ou(r.parent.vnode)&&ey(i,e,t,r),r=r.parent}}function ey(n,e,t,i){const r=Fu(e,n,i,!0);kl(()=>{Nh(i[e],r)},t)}function Fu(n,e,t=hn,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Ms();const a=zl(t),l=Yi(e,t,n,o);return a(),Es(),l});return i?r.unshift(s):r.push(s),s}}const Hr=n=>(e,t=hn)=>{(!Ml||n==="sp")&&Fu(n,(...i)=>e(...i),t)},ty=Hr("bm"),bs=Hr("m"),ny=Hr("bu"),n0=Hr("u"),i0=Hr("bum"),kl=Hr("um"),iy=Hr("sp"),ry=Hr("rtg"),sy=Hr("rtc");function oy(n,e=hn){Fu("ec",n,e)}const Kh="components",ay="directives";function ui(n,e){return jh(Kh,n,!0,e)||n}const r0=Symbol.for("v-ndc");function ly(n){return Ht(n)?jh(Kh,n,!1)||n:n||r0}function s0(n){return jh(ay,n)}function jh(n,e,t=!0,i=!1){const r=$n||hn;if(r){const s=r.type;if(n===Kh){const a=Yy(s,!1);if(a&&(a===e||a===Ni(e)||a===Du(Ni(e))))return s}const o=Vp(r[n]||s[n],e)||Vp(r.appContext[n],e);return!o&&i?s:o}}function Vp(n,e){return n&&(n[e]||n[Ni(e)]||n[Du(Ni(e))])}function za(n,e,t,i){let r;const s=t,o=Ve(n);if(o||Ht(n)){const a=o&&qo(n);let l=!1;a&&(l=!Li(n),n=Iu(n)),r=new Array(n.length);for(let c=0,u=n.length;c<u;c++)r[c]=e(l?yn(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(Ct(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const cd=n=>n?C0(n)?zu(n):cd(n.parent):null,el=sn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>cd(n.parent),$root:n=>cd(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>a0(n),$forceUpdate:n=>n.f||(n.f=()=>{qh(n.update)}),$nextTick:n=>n.n||(n.n=$h.bind(n.proxy)),$watch:n=>Ry.bind(n)}),rf=(n,e)=>n!==At&&!n.__isScriptSetup&&St(n,e),cy={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(rf(i,e))return o[e]=1,i[e];if(r!==At&&St(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&St(c,e))return o[e]=3,s[e];if(t!==At&&St(t,e))return o[e]=4,t[e];ud&&(o[e]=0)}}const u=el[e];let f,d;if(u)return e==="$attrs"&&Sn(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==At&&St(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,St(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return rf(r,e)?(r[e]=t,!0):i!==At&&St(i,e)?(i[e]=t,!0):St(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==At&&St(n,o)||rf(e,o)||(a=s[0])&&St(a,o)||St(i,o)||St(el,o)||St(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:St(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Gp(n){return Ve(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ud=!0;function uy(n){const e=a0(n),t=n.proxy,i=n.ctx;ud=!1,e.beforeCreate&&Wp(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:T,destroyed:E,unmounted:v,render:R,renderTracked:C,renderTriggered:w,errorCaptured:I,serverPrefetch:S,expose:x,inheritAttrs:U,components:N,directives:z,filters:X}=e;if(c&&fy(c,i,null),o)for(const Y in o){const V=o[Y];Ze(V)&&(i[Y]=V.bind(t))}if(r){const Y=r.call(t,t);Ct(Y)&&(n.data=Uu(Y))}if(ud=!0,s)for(const Y in s){const V=s[Y],de=Ze(V)?V.bind(t,t):Ze(V.get)?V.get.bind(t,t):ar,O=!Ze(V)&&Ze(V.set)?V.set.bind(t):ar,Se=Hi({get:de,set:O});Object.defineProperty(i,Y,{enumerable:!0,configurable:!0,get:()=>Se.value,set:De=>Se.value=De})}if(a)for(const Y in a)o0(a[Y],i,t,Y);if(l){const Y=Ze(l)?l.call(t):l;Reflect.ownKeys(Y).forEach(V=>{Oc(V,Y[V])})}u&&Wp(u,n,"c");function W(Y,V){Ve(V)?V.forEach(de=>Y(de.bind(t))):V&&Y(V.bind(t))}if(W(ty,f),W(bs,d),W(ny,h),W(n0,g),W(JS,_),W(QS,m),W(oy,I),W(sy,C),W(ry,w),W(i0,T),W(kl,v),W(iy,S),Ve(x))if(x.length){const Y=n.exposed||(n.exposed={});x.forEach(V=>{Object.defineProperty(Y,V,{get:()=>t[V],set:de=>t[V]=de})})}else n.exposed||(n.exposed={});R&&n.render===ar&&(n.render=R),U!=null&&(n.inheritAttrs=U),N&&(n.components=N),z&&(n.directives=z),S&&e0(n)}function fy(n,e,t=ar){Ve(n)&&(n=fd(n));for(const i in n){const r=n[i];let s;Ct(r)?"default"in r?s=Ir(r.from||i,r.default,!0):s=Ir(r.from||i):s=Ir(r),An(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Wp(n,e,t){Yi(Ve(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function o0(n,e,t,i){let r=i.includes(".")?y0(t,i):()=>t[i];if(Ht(n)){const s=e[n];Ze(s)&&Fc(r,s)}else if(Ze(n))Fc(r,n.bind(t));else if(Ct(n))if(Ve(n))n.forEach(s=>o0(s,e,t,i));else{const s=Ze(n.handler)?n.handler.bind(t):e[n.handler];Ze(s)&&Fc(r,s,n)}}function a0(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>lu(l,c,o,!0)),lu(l,e,o)),Ct(e)&&s.set(e,l),l}function lu(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&lu(n,s,t,!0),r&&r.forEach(o=>lu(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=dy[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const dy={data:Xp,props:$p,emits:$p,methods:Ha,computed:Ha,beforeCreate:Dn,created:Dn,beforeMount:Dn,mounted:Dn,beforeUpdate:Dn,updated:Dn,beforeDestroy:Dn,beforeUnmount:Dn,destroyed:Dn,unmounted:Dn,activated:Dn,deactivated:Dn,errorCaptured:Dn,serverPrefetch:Dn,components:Ha,directives:Ha,watch:py,provide:Xp,inject:hy};function Xp(n,e){return e?n?function(){return sn(Ze(n)?n.call(this,this):n,Ze(e)?e.call(this,this):e)}:e:n}function hy(n,e){return Ha(fd(n),fd(e))}function fd(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Dn(n,e){return n?[...new Set([].concat(n,e))]:e}function Ha(n,e){return n?sn(Object.create(null),n,e):e}function $p(n,e){return n?Ve(n)&&Ve(e)?[...new Set([...n,...e])]:sn(Object.create(null),Gp(n),Gp(e??{})):e}function py(n,e){if(!n)return e;if(!e)return n;const t=sn(Object.create(null),n);for(const i in e)t[i]=Dn(n[i],e[i]);return t}function l0(){return{app:null,config:{isNativeTag:sS,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let my=0;function _y(n,e){return function(i,r=null){Ze(i)||(i=sn({},i)),r!=null&&!Ct(r)&&(r=null);const s=l0(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:my++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:jy,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ze(u.install)?(o.add(u),u.install(c,...f)):Ze(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||lt(i,r);return h.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(h,u,d),l=!0,c._container=u,u.__vue_app__=c,zu(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Yi(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=jo;jo=c;try{return u()}finally{jo=f}}};return c}}let jo=null;function Oc(n,e){if(hn){let t=hn.provides;const i=hn.parent&&hn.parent.provides;i===t&&(t=hn.provides=Object.create(i)),t[n]=e}}function Ir(n,e,t=!1){const i=hn||$n;if(i||jo){const r=jo?jo._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ze(e)?e.call(i&&i.proxy):e}}const c0={},u0=()=>Object.create(c0),f0=n=>Object.getPrototypeOf(n)===c0;function gy(n,e,t,i=!1){const r={},s=u0();n.propsDefaults=Object.create(null),d0(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Bg(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function vy(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=ht(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Bu(n.emitsOptions,d))continue;const h=e[d];if(l)if(St(s,d))h!==s[d]&&(s[d]=h,c=!0);else{const g=Ni(d);r[g]=dd(l,a,g,h,n,!1)}else h!==s[d]&&(s[d]=h,c=!0)}}}else{d0(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!St(e,f)&&((u=mo(f))===f||!St(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=dd(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!St(e,f))&&(delete s[f],c=!0)}c&&Tr(n.attrs,"set","")}function d0(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(ja(l))continue;const c=e[l];let u;r&&St(r,u=Ni(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Bu(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=ht(t),c=a||At;for(let u=0;u<s.length;u++){const f=s[u];t[f]=dd(r,l,f,c[f],n,!St(c,f))}}return o}function dd(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=St(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ze(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=zl(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===mo(t))&&(i=!0))}return i}const xy=new WeakMap;function h0(n,e,t=!1){const i=t?xy:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Ze(n)){const u=f=>{l=!0;const[d,h]=h0(f,e,!0);sn(o,d),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Ct(n)&&i.set(n,Xo),Xo;if(Ve(s))for(let u=0;u<s.length;u++){const f=Ni(s[u]);qp(f)&&(o[f]=At)}else if(s)for(const u in s){const f=Ni(u);if(qp(f)){const d=s[u],h=o[f]=Ve(d)||Ze(d)?{type:d}:sn({},d),g=h.type;let _=!1,m=!0;if(Ve(g))for(let p=0;p<g.length;++p){const T=g[p],E=Ze(T)&&T.name;if(E==="Boolean"){_=!0;break}else E==="String"&&(m=!1)}else _=Ze(g)&&g.name==="Boolean";h[0]=_,h[1]=m,(_||St(h,"default"))&&a.push(f)}}const c=[o,a];return Ct(n)&&i.set(n,c),c}function qp(n){return n[0]!=="$"&&!ja(n)}const p0=n=>n[0]==="_"||n==="$stable",Zh=n=>Ve(n)?n.map(tr):[tr(n)],Sy=(n,e,t)=>{if(e._n)return e;const i=pi((...r)=>Zh(e(...r)),t);return i._c=!1,i},m0=(n,e,t)=>{const i=n._ctx;for(const r in n){if(p0(r))continue;const s=n[r];if(Ze(s))e[r]=Sy(r,s,i);else if(s!=null){const o=Zh(s);e[r]=()=>o}}},_0=(n,e)=>{const t=Zh(e);n.slots.default=()=>t},g0=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},yy=(n,e,t)=>{const i=n.slots=u0();if(n.vnode.shapeFlag&32){const r=e._;r?(g0(i,e,t),t&&Sg(i,"_",r,!0)):m0(e,i)}else e&&_0(n,e)},My=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=At;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:g0(r,e,t):(s=!e.$stable,m0(e,r)),o=e}else e&&(_0(n,e),o={default:1});if(s)for(const a in r)!p0(a)&&o[a]==null&&delete r[a]},si=Oy;function Ey(n){return by(n)}function by(n,e){const t=Lu();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=ar,insertStaticContent:g}=n,_=(P,D,M,ie=null,Z=null,L=null,ne=void 0,ue=null,Q=!!D.dynamicChildren)=>{if(P===D)return;P&&!Ws(P,D)&&(ie=k(P),De(P,Z,L,!0),P=null),D.patchFlag===-2&&(Q=!1,D.dynamicChildren=null);const{type:b,ref:y,shapeFlag:F}=D;switch(b){case ku:m(P,D,M,ie);break;case Xn:p(P,D,M,ie);break;case Bc:P==null&&T(D,M,ie,ne);break;case Mn:N(P,D,M,ie,Z,L,ne,ue,Q);break;default:F&1?R(P,D,M,ie,Z,L,ne,ue,Q):F&6?z(P,D,M,ie,Z,L,ne,ue,Q):(F&64||F&128)&&b.process(P,D,M,ie,Z,L,ne,ue,Q,pe)}y!=null&&Z&&au(y,P&&P.ref,L,D||P,!D)},m=(P,D,M,ie)=>{if(P==null)i(D.el=a(D.children),M,ie);else{const Z=D.el=P.el;D.children!==P.children&&c(Z,D.children)}},p=(P,D,M,ie)=>{P==null?i(D.el=l(D.children||""),M,ie):D.el=P.el},T=(P,D,M,ie)=>{[P.el,P.anchor]=g(P.children,D,M,ie,P.el,P.anchor)},E=({el:P,anchor:D},M,ie)=>{let Z;for(;P&&P!==D;)Z=d(P),i(P,M,ie),P=Z;i(D,M,ie)},v=({el:P,anchor:D})=>{let M;for(;P&&P!==D;)M=d(P),r(P),P=M;r(D)},R=(P,D,M,ie,Z,L,ne,ue,Q)=>{D.type==="svg"?ne="svg":D.type==="math"&&(ne="mathml"),P==null?C(D,M,ie,Z,L,ne,ue,Q):S(P,D,Z,L,ne,ue,Q)},C=(P,D,M,ie,Z,L,ne,ue)=>{let Q,b;const{props:y,shapeFlag:F,transition:$,dirs:q}=P;if(Q=P.el=o(P.type,L,y&&y.is,y),F&8?u(Q,P.children):F&16&&I(P.children,Q,null,ie,Z,sf(P,L),ne,ue),q&&ws(P,null,ie,"created"),w(Q,P,P.scopeId,ne,ie),y){for(const he in y)he!=="value"&&!ja(he)&&s(Q,he,null,y[he],L,ie);"value"in y&&s(Q,"value",null,y.value,L),(b=y.onVnodeBeforeMount)&&ji(b,ie,P)}q&&ws(P,null,ie,"beforeMount");const j=Ty(Z,$);j&&$.beforeEnter(Q),i(Q,D,M),((b=y&&y.onVnodeMounted)||j||q)&&si(()=>{b&&ji(b,ie,P),j&&$.enter(Q),q&&ws(P,null,ie,"mounted")},Z)},w=(P,D,M,ie,Z)=>{if(M&&h(P,M),ie)for(let L=0;L<ie.length;L++)h(P,ie[L]);if(Z){let L=Z.subTree;if(D===L||E0(L.type)&&(L.ssContent===D||L.ssFallback===D)){const ne=Z.vnode;w(P,ne,ne.scopeId,ne.slotScopeIds,Z.parent)}}},I=(P,D,M,ie,Z,L,ne,ue,Q=0)=>{for(let b=Q;b<P.length;b++){const y=P[b]=ue?ts(P[b]):tr(P[b]);_(null,y,D,M,ie,Z,L,ne,ue)}},S=(P,D,M,ie,Z,L,ne)=>{const ue=D.el=P.el;let{patchFlag:Q,dynamicChildren:b,dirs:y}=D;Q|=P.patchFlag&16;const F=P.props||At,$=D.props||At;let q;if(M&&Cs(M,!1),(q=$.onVnodeBeforeUpdate)&&ji(q,M,D,P),y&&ws(D,P,M,"beforeUpdate"),M&&Cs(M,!0),(F.innerHTML&&$.innerHTML==null||F.textContent&&$.textContent==null)&&u(ue,""),b?x(P.dynamicChildren,b,ue,M,ie,sf(D,Z),L):ne||V(P,D,ue,null,M,ie,sf(D,Z),L,!1),Q>0){if(Q&16)U(ue,F,$,M,Z);else if(Q&2&&F.class!==$.class&&s(ue,"class",null,$.class,Z),Q&4&&s(ue,"style",F.style,$.style,Z),Q&8){const j=D.dynamicProps;for(let he=0;he<j.length;he++){const fe=j[he],xe=F[fe],Be=$[fe];(Be!==xe||fe==="value")&&s(ue,fe,xe,Be,Z,M)}}Q&1&&P.children!==D.children&&u(ue,D.children)}else!ne&&b==null&&U(ue,F,$,M,Z);((q=$.onVnodeUpdated)||y)&&si(()=>{q&&ji(q,M,D,P),y&&ws(D,P,M,"updated")},ie)},x=(P,D,M,ie,Z,L,ne)=>{for(let ue=0;ue<D.length;ue++){const Q=P[ue],b=D[ue],y=Q.el&&(Q.type===Mn||!Ws(Q,b)||Q.shapeFlag&70)?f(Q.el):M;_(Q,b,y,null,ie,Z,L,ne,!0)}},U=(P,D,M,ie,Z)=>{if(D!==M){if(D!==At)for(const L in D)!ja(L)&&!(L in M)&&s(P,L,D[L],null,Z,ie);for(const L in M){if(ja(L))continue;const ne=M[L],ue=D[L];ne!==ue&&L!=="value"&&s(P,L,ue,ne,Z,ie)}"value"in M&&s(P,"value",D.value,M.value,Z)}},N=(P,D,M,ie,Z,L,ne,ue,Q)=>{const b=D.el=P?P.el:a(""),y=D.anchor=P?P.anchor:a("");let{patchFlag:F,dynamicChildren:$,slotScopeIds:q}=D;q&&(ue=ue?ue.concat(q):q),P==null?(i(b,M,ie),i(y,M,ie),I(D.children||[],M,y,Z,L,ne,ue,Q)):F>0&&F&64&&$&&P.dynamicChildren?(x(P.dynamicChildren,$,M,Z,L,ne,ue),(D.key!=null||Z&&D===Z.subTree)&&v0(P,D,!0)):V(P,D,M,y,Z,L,ne,ue,Q)},z=(P,D,M,ie,Z,L,ne,ue,Q)=>{D.slotScopeIds=ue,P==null?D.shapeFlag&512?Z.ctx.activate(D,M,ie,ne,Q):X(D,M,ie,Z,L,ne,Q):ee(P,D,Q)},X=(P,D,M,ie,Z,L,ne)=>{const ue=P.component=Gy(P,ie,Z);if(Ou(P)&&(ue.ctx.renderer=pe),Wy(ue,!1,ne),ue.asyncDep){if(Z&&Z.registerDep(ue,W,ne),!P.el){const Q=ue.subTree=lt(Xn);p(null,Q,D,M)}}else W(ue,P,D,M,Z,L,ne)},ee=(P,D,M)=>{const ie=D.component=P.component;if(Uy(P,D,M))if(ie.asyncDep&&!ie.asyncResolved){Y(ie,D,M);return}else ie.next=D,ie.update();else D.el=P.el,ie.vnode=D},W=(P,D,M,ie,Z,L,ne)=>{const ue=()=>{if(P.isMounted){let{next:F,bu:$,u:q,parent:j,vnode:he}=P;{const ve=x0(P);if(ve){F&&(F.el=he.el,Y(P,F,ne)),ve.asyncDep.then(()=>{P.isUnmounted||ue()});return}}let fe=F,xe;Cs(P,!1),F?(F.el=he.el,Y(P,F,ne)):F=he,$&&Nc($),(xe=F.props&&F.props.onVnodeBeforeUpdate)&&ji(xe,j,F,he),Cs(P,!0);const Be=Kp(P),me=P.subTree;P.subTree=Be,_(me,Be,f(me.el),k(me),P,Z,L),F.el=Be.el,fe===null&&Ny(P,Be.el),q&&si(q,Z),(xe=F.props&&F.props.onVnodeUpdated)&&si(()=>ji(xe,j,F,he),Z)}else{let F;const{el:$,props:q}=D,{bm:j,m:he,parent:fe,root:xe,type:Be}=P,me=Qa(D);Cs(P,!1),j&&Nc(j),!me&&(F=q&&q.onVnodeBeforeMount)&&ji(F,fe,D),Cs(P,!0);{xe.ce&&xe.ce._injectChildStyle(Be);const ve=P.subTree=Kp(P);_(null,ve,M,ie,P,Z,L),D.el=ve.el}if(he&&si(he,Z),!me&&(F=q&&q.onVnodeMounted)){const ve=D;si(()=>ji(F,fe,ve),Z)}(D.shapeFlag&256||fe&&Qa(fe.vnode)&&fe.vnode.shapeFlag&256)&&P.a&&si(P.a,Z),P.isMounted=!0,D=M=ie=null}};P.scope.on();const Q=P.effect=new bg(ue);P.scope.off();const b=P.update=Q.run.bind(Q),y=P.job=Q.runIfDirty.bind(Q);y.i=P,y.id=P.uid,Q.scheduler=()=>qh(y),Cs(P,!0),b()},Y=(P,D,M)=>{D.component=P;const ie=P.vnode.props;P.vnode=D,P.next=null,vy(P,D.props,ie,M),My(P,D.children,M),Ms(),zp(P),Es()},V=(P,D,M,ie,Z,L,ne,ue,Q=!1)=>{const b=P&&P.children,y=P?P.shapeFlag:0,F=D.children,{patchFlag:$,shapeFlag:q}=D;if($>0){if($&128){O(b,F,M,ie,Z,L,ne,ue,Q);return}else if($&256){de(b,F,M,ie,Z,L,ne,ue,Q);return}}q&8?(y&16&&ye(b,Z,L),F!==b&&u(M,F)):y&16?q&16?O(b,F,M,ie,Z,L,ne,ue,Q):ye(b,Z,L,!0):(y&8&&u(M,""),q&16&&I(F,M,ie,Z,L,ne,ue,Q))},de=(P,D,M,ie,Z,L,ne,ue,Q)=>{P=P||Xo,D=D||Xo;const b=P.length,y=D.length,F=Math.min(b,y);let $;for($=0;$<F;$++){const q=D[$]=Q?ts(D[$]):tr(D[$]);_(P[$],q,M,null,Z,L,ne,ue,Q)}b>y?ye(P,Z,L,!0,!1,F):I(D,M,ie,Z,L,ne,ue,Q,F)},O=(P,D,M,ie,Z,L,ne,ue,Q)=>{let b=0;const y=D.length;let F=P.length-1,$=y-1;for(;b<=F&&b<=$;){const q=P[b],j=D[b]=Q?ts(D[b]):tr(D[b]);if(Ws(q,j))_(q,j,M,null,Z,L,ne,ue,Q);else break;b++}for(;b<=F&&b<=$;){const q=P[F],j=D[$]=Q?ts(D[$]):tr(D[$]);if(Ws(q,j))_(q,j,M,null,Z,L,ne,ue,Q);else break;F--,$--}if(b>F){if(b<=$){const q=$+1,j=q<y?D[q].el:ie;for(;b<=$;)_(null,D[b]=Q?ts(D[b]):tr(D[b]),M,j,Z,L,ne,ue,Q),b++}}else if(b>$)for(;b<=F;)De(P[b],Z,L,!0),b++;else{const q=b,j=b,he=new Map;for(b=j;b<=$;b++){const Me=D[b]=Q?ts(D[b]):tr(D[b]);Me.key!=null&&he.set(Me.key,b)}let fe,xe=0;const Be=$-j+1;let me=!1,ve=0;const Oe=new Array(Be);for(b=0;b<Be;b++)Oe[b]=0;for(b=q;b<=F;b++){const Me=P[b];if(xe>=Be){De(Me,Z,L,!0);continue}let Ge;if(Me.key!=null)Ge=he.get(Me.key);else for(fe=j;fe<=$;fe++)if(Oe[fe-j]===0&&Ws(Me,D[fe])){Ge=fe;break}Ge===void 0?De(Me,Z,L,!0):(Oe[Ge-j]=b+1,Ge>=ve?ve=Ge:me=!0,_(Me,D[Ge],M,null,Z,L,ne,ue,Q),xe++)}const ke=me?Ay(Oe):Xo;for(fe=ke.length-1,b=Be-1;b>=0;b--){const Me=j+b,Ge=D[Me],We=Me+1<y?D[Me+1].el:ie;Oe[b]===0?_(null,Ge,M,We,Z,L,ne,ue,Q):me&&(fe<0||b!==ke[fe]?Se(Ge,M,We,2):fe--)}}},Se=(P,D,M,ie,Z=null)=>{const{el:L,type:ne,transition:ue,children:Q,shapeFlag:b}=P;if(b&6){Se(P.component.subTree,D,M,ie);return}if(b&128){P.suspense.move(D,M,ie);return}if(b&64){ne.move(P,D,M,pe);return}if(ne===Mn){i(L,D,M);for(let F=0;F<Q.length;F++)Se(Q[F],D,M,ie);i(P.anchor,D,M);return}if(ne===Bc){E(P,D,M);return}if(ie!==2&&b&1&&ue)if(ie===0)ue.beforeEnter(L),i(L,D,M),si(()=>ue.enter(L),Z);else{const{leave:F,delayLeave:$,afterLeave:q}=ue,j=()=>i(L,D,M),he=()=>{F(L,()=>{j(),q&&q()})};$?$(L,j,he):he()}else i(L,D,M)},De=(P,D,M,ie=!1,Z=!1)=>{const{type:L,props:ne,ref:ue,children:Q,dynamicChildren:b,shapeFlag:y,patchFlag:F,dirs:$,cacheIndex:q}=P;if(F===-2&&(Z=!1),ue!=null&&au(ue,null,M,P,!0),q!=null&&(D.renderCache[q]=void 0),y&256){D.ctx.deactivate(P);return}const j=y&1&&$,he=!Qa(P);let fe;if(he&&(fe=ne&&ne.onVnodeBeforeUnmount)&&ji(fe,D,P),y&6)_e(P.component,M,ie);else{if(y&128){P.suspense.unmount(M,ie);return}j&&ws(P,null,D,"beforeUnmount"),y&64?P.type.remove(P,D,M,pe,ie):b&&!b.hasOnce&&(L!==Mn||F>0&&F&64)?ye(b,D,M,!1,!0):(L===Mn&&F&384||!Z&&y&16)&&ye(Q,D,M),ie&&Ke(P)}(he&&(fe=ne&&ne.onVnodeUnmounted)||j)&&si(()=>{fe&&ji(fe,D,P),j&&ws(P,null,D,"unmounted")},M)},Ke=P=>{const{type:D,el:M,anchor:ie,transition:Z}=P;if(D===Mn){te(M,ie);return}if(D===Bc){v(P);return}const L=()=>{r(M),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(P.shapeFlag&1&&Z&&!Z.persisted){const{leave:ne,delayLeave:ue}=Z,Q=()=>ne(M,L);ue?ue(P.el,L,Q):Q()}else L()},te=(P,D)=>{let M;for(;P!==D;)M=d(P),r(P),P=M;r(D)},_e=(P,D,M)=>{const{bum:ie,scope:Z,job:L,subTree:ne,um:ue,m:Q,a:b}=P;Yp(Q),Yp(b),ie&&Nc(ie),Z.stop(),L&&(L.flags|=8,De(ne,P,D,M)),ue&&si(ue,D),si(()=>{P.isUnmounted=!0},D),D&&D.pendingBranch&&!D.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===D.pendingId&&(D.deps--,D.deps===0&&D.resolve())},ye=(P,D,M,ie=!1,Z=!1,L=0)=>{for(let ne=L;ne<P.length;ne++)De(P[ne],D,M,ie,Z)},k=P=>{if(P.shapeFlag&6)return k(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const D=d(P.anchor||P.el),M=D&&D[KS];return M?d(M):D};let ae=!1;const oe=(P,D,M)=>{P==null?D._vnode&&De(D._vnode,null,null,!0):_(D._vnode||null,P,D,null,null,null,M),D._vnode=P,ae||(ae=!0,zp(),Wg(),ae=!1)},pe={p:_,um:De,m:Se,r:Ke,mt:X,mc:I,pc:V,pbc:x,n:k,o:n};return{render:oe,hydrate:void 0,createApp:_y(oe)}}function sf({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Cs({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Ty(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function v0(n,e,t=!1){const i=n.children,r=e.children;if(Ve(i)&&Ve(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ts(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&v0(o,a)),a.type===ku&&(a.el=o.el)}}function Ay(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function x0(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:x0(e)}function Yp(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const wy=Symbol.for("v-scx"),Cy=()=>Ir(wy);function Fc(n,e,t){return S0(n,e,t)}function S0(n,e,t=At){const{immediate:i,deep:r,flush:s,once:o}=t,a=sn({},t),l=e&&i||!e&&s!=="post";let c;if(Ml){if(s==="sync"){const h=Cy();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=ar,h.resume=ar,h.pause=ar,h}}const u=hn;a.call=(h,g,_)=>Yi(h,u,g,_);let f=!1;s==="post"?a.scheduler=h=>{si(h,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(h,g)=>{g?h():qh(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=XS(n,e,a);return Ml&&(c?c.push(d):l&&d()),d}function Ry(n,e,t){const i=this.proxy,r=Ht(n)?n.includes(".")?y0(i,n):()=>i[n]:n.bind(i,i);let s;Ze(e)?s=e:(s=e.handler,t=e);const o=zl(this),a=S0(r,s.bind(i),t);return o(),a}function y0(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Py=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Ni(e)}Modifiers`]||n[`${mo(e)}Modifiers`];function Dy(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||At;let r=t;const s=e.startsWith("update:"),o=s&&Py(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Ht(u)?u.trim():u)),o.number&&(r=t.map(iu)));let a,l=i[a=Zu(e)]||i[a=Zu(Ni(e))];!l&&s&&(l=i[a=Zu(mo(e))]),l&&Yi(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Yi(c,n,6,r)}}function M0(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Ze(n)){const l=c=>{const u=M0(c,e,!0);u&&(a=!0,sn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(Ct(n)&&i.set(n,null),null):(Ve(s)?s.forEach(l=>o[l]=null):sn(o,s),Ct(n)&&i.set(n,o),o)}function Bu(n,e){return!n||!Ru(e)?!1:(e=e.slice(2).replace(/Once$/,""),St(n,e[0].toLowerCase()+e.slice(1))||St(n,mo(e))||St(n,e))}function Kp(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:g,inheritAttrs:_}=n,m=ou(n);let p,T;try{if(t.shapeFlag&4){const v=r||i,R=v;p=tr(c.call(R,v,u,f,h,d,g)),T=a}else{const v=e;p=tr(v.length>1?v(f,{attrs:a,slots:o,emit:l}):v(f,null)),T=e.props?a:Ly(a)}}catch(v){tl.length=0,Nu(v,n,1),p=lt(Xn)}let E=p;if(T&&_!==!1){const v=Object.keys(T),{shapeFlag:R}=E;v.length&&R&7&&(s&&v.some(Uh)&&(T=Iy(T,s)),E=_s(E,T,!1,!0))}return t.dirs&&(E=_s(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&ao(E,t.transition),p=E,ou(m),p}const Ly=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ru(t))&&((e||(e={}))[t]=n[t]);return e},Iy=(n,e)=>{const t={};for(const i in n)(!Uh(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Uy(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?jp(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!Bu(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?jp(i,o,c):!0:!!o;return!1}function jp(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Bu(t,s))return!0}return!1}function Ny({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const E0=n=>n.__isSuspense;function Oy(n,e){e&&e.pendingBranch?Ve(n)?e.effects.push(...n):e.effects.push(n):YS(n)}const Mn=Symbol.for("v-fgt"),ku=Symbol.for("v-txt"),Xn=Symbol.for("v-cmt"),Bc=Symbol.for("v-stc"),tl=[];let mi=null;function Nt(n=!1){tl.push(mi=n?null:[])}function Fy(){tl.pop(),mi=tl[tl.length-1]||null}let Sl=1;function Zp(n,e=!1){Sl+=n,n<0&&mi&&e&&(mi.hasOnce=!0)}function b0(n){return n.dynamicChildren=Sl>0?mi||Xo:null,Fy(),Sl>0&&mi&&mi.push(n),n}function Gt(n,e,t,i,r,s){return b0(le(n,e,t,i,r,s,!0))}function T0(n,e,t,i,r){return b0(lt(n,e,t,i,r,!0))}function cu(n){return n?n.__v_isVNode===!0:!1}function Ws(n,e){return n.type===e.type&&n.key===e.key}const A0=({key:n})=>n??null,kc=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ht(n)||An(n)||Ze(n)?{i:$n,r:n,k:e,f:!!t}:n:null);function le(n,e=null,t=null,i=0,r=null,s=n===Mn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&A0(e),ref:e&&kc(e),scopeId:$g,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:$n};return a?(Jh(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Ht(t)?8:16),Sl>0&&!o&&mi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&mi.push(l),l}const lt=By;function By(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===r0)&&(n=Xn),cu(n)){const a=_s(n,e,!0);return t&&Jh(a,t),Sl>0&&!s&&mi&&(a.shapeFlag&6?mi[mi.indexOf(n)]=a:mi.push(a)),a.patchFlag=-2,a}if(Ky(n)&&(n=n.__vccOpts),e){e=ky(e);let{class:a,style:l}=e;a&&!Ht(a)&&(e.class=Wi(a)),Ct(l)&&(Xh(l)&&!Ve(l)&&(l=sn({},l)),e.style=Fh(l))}const o=Ht(n)?1:E0(n)?128:qg(n)?64:Ct(n)?4:Ze(n)?2:0;return le(n,e,t,i,r,o,s,!0)}function ky(n){return n?Xh(n)||f0(n)?sn({},n):n:null}function _s(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?zy(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&A0(c),ref:e&&e.ref?t&&s?Ve(s)?s.concat(kc(e)):[s,kc(e)]:kc(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Mn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&_s(n.ssContent),ssFallback:n.ssFallback&&_s(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&ao(u,l.clone(u)),u}function Hn(n=" ",e=0){return lt(ku,null,n,e)}function yl(n,e){const t=lt(Bc,null,n);return t.staticCount=e,t}function _L(n="",e=!1){return e?(Nt(),T0(Xn,null,n)):lt(Xn,null,n)}function tr(n){return n==null||typeof n=="boolean"?lt(Xn):Ve(n)?lt(Mn,null,n.slice()):cu(n)?ts(n):lt(ku,null,String(n))}function ts(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:_s(n)}function Jh(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ve(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Jh(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!f0(e)?e._ctx=$n:r===3&&$n&&($n.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ze(e)?(e={default:e,_ctx:$n},t=32):(e=String(e),i&64?(t=16,e=[Hn(e)]):t=8);n.children=e,n.shapeFlag|=t}function zy(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Wi([e.class,i.class]));else if(r==="style")e.style=Fh([e.style,i.style]);else if(Ru(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ve(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function ji(n,e,t,i=null){Yi(n,e,7,[t,i])}const Hy=l0();let Vy=0;function Gy(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Hy,s={uid:Vy++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new vS(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:h0(i,r),emitsOptions:M0(i,r),emit:null,emitted:null,propsDefaults:At,inheritAttrs:i.inheritAttrs,ctx:At,data:At,props:At,attrs:At,slots:At,refs:At,setupState:At,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Dy.bind(null,s),n.ce&&n.ce(s),s}let hn=null;const w0=()=>hn||$n;let uu,hd;{const n=Lu(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};uu=e("__VUE_INSTANCE_SETTERS__",t=>hn=t),hd=e("__VUE_SSR_SETTERS__",t=>Ml=t)}const zl=n=>{const e=hn;return uu(n),n.scope.on(),()=>{n.scope.off(),uu(e)}},Jp=()=>{hn&&hn.scope.off(),uu(null)};function C0(n){return n.vnode.shapeFlag&4}let Ml=!1;function Wy(n,e=!1,t=!1){e&&hd(e);const{props:i,children:r}=n.vnode,s=C0(n);gy(n,i,s,e),yy(n,r,t);const o=s?Xy(n,e):void 0;return e&&hd(!1),o}function Xy(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,cy);const{setup:i}=t;if(i){Ms();const r=n.setupContext=i.length>1?qy(n):null,s=zl(n),o=Bl(i,n,0,[n.props,r]),a=gg(o);if(Es(),s(),(a||n.sp)&&!Qa(n)&&e0(n),a){if(o.then(Jp,Jp),e)return o.then(l=>{Qp(n,l)}).catch(l=>{Nu(l,n,0)});n.asyncDep=o}else Qp(n,o)}else R0(n)}function Qp(n,e,t){Ze(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ct(e)&&(n.setupState=Hg(e)),R0(n)}function R0(n,e,t){const i=n.type;n.render||(n.render=i.render||ar);{const r=zl(n);Ms();try{uy(n)}finally{Es(),r()}}}const $y={get(n,e){return Sn(n,"get",""),n[e]}};function qy(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,$y),slots:n.slots,emit:n.emit,expose:e}}function zu(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Hg(BS(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in el)return el[t](n)},has(e,t){return t in e||t in el}})):n.proxy}function Yy(n,e=!0){return Ze(n)?n.displayName||n.name:n.name||e&&n.__name}function Ky(n){return Ze(n)&&"__vccOpts"in n}const Hi=(n,e)=>GS(n,e,Ml);function Qh(n,e,t){const i=arguments.length;return i===2?Ct(e)&&!Ve(e)?cu(e)?lt(n,null,[e]):lt(n,e):lt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&cu(t)&&(t=[t]),lt(n,e,t))}const jy="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pd;const em=typeof window<"u"&&window.trustedTypes;if(em)try{pd=em.createPolicy("vue",{createHTML:n=>n})}catch{}const P0=pd?n=>pd.createHTML(n):n=>n,Zy="http://www.w3.org/2000/svg",Jy="http://www.w3.org/1998/Math/MathML",Mr=typeof document<"u"?document:null,tm=Mr&&Mr.createElement("template"),Qy={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Mr.createElementNS(Zy,n):e==="mathml"?Mr.createElementNS(Jy,n):t?Mr.createElement(n,{is:t}):Mr.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Mr.createTextNode(n),createComment:n=>Mr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Mr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{tm.innerHTML=P0(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=tm.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Gr="transition",Ra="animation",oa=Symbol("_vtc"),D0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},L0=sn({},Kg,D0),eM=n=>(n.displayName="Transition",n.props=L0,n),tM=eM((n,{slots:e})=>Qh(ZS,I0(n),e)),Rs=(n,e=[])=>{Ve(n)?n.forEach(t=>t(...e)):n&&n(...e)},nm=n=>n?Ve(n)?n.some(e=>e.length>1):n.length>1:!1;function I0(n){const e={};for(const N in n)N in D0||(e[N]=n[N]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=n,g=nM(r),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:T,onEnterCancelled:E,onLeave:v,onLeaveCancelled:R,onBeforeAppear:C=p,onAppear:w=T,onAppearCancelled:I=E}=e,S=(N,z,X,ee)=>{N._enterCancelled=ee,Zr(N,z?u:a),Zr(N,z?c:o),X&&X()},x=(N,z)=>{N._isLeaving=!1,Zr(N,f),Zr(N,h),Zr(N,d),z&&z()},U=N=>(z,X)=>{const ee=N?w:T,W=()=>S(z,N,X);Rs(ee,[z,W]),im(()=>{Zr(z,N?l:s),Zi(z,N?u:a),nm(ee)||rm(z,i,_,W)})};return sn(e,{onBeforeEnter(N){Rs(p,[N]),Zi(N,s),Zi(N,o)},onBeforeAppear(N){Rs(C,[N]),Zi(N,l),Zi(N,c)},onEnter:U(!1),onAppear:U(!0),onLeave(N,z){N._isLeaving=!0;const X=()=>x(N,z);Zi(N,f),N._enterCancelled?(Zi(N,d),md()):(md(),Zi(N,d)),im(()=>{N._isLeaving&&(Zr(N,f),Zi(N,h),nm(v)||rm(N,i,m,X))}),Rs(v,[N,X])},onEnterCancelled(N){S(N,!1,void 0,!0),Rs(E,[N])},onAppearCancelled(N){S(N,!0,void 0,!0),Rs(I,[N])},onLeaveCancelled(N){x(N),Rs(R,[N])}})}function nM(n){if(n==null)return null;if(Ct(n))return[of(n.enter),of(n.leave)];{const e=of(n);return[e,e]}}function of(n){return uS(n)}function Zi(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[oa]||(n[oa]=new Set)).add(e)}function Zr(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[oa];t&&(t.delete(e),t.size||(n[oa]=void 0))}function im(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let iM=0;function rm(n,e,t,i){const r=n._endId=++iM,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=U0(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,d),s()},d=h=>{h.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,d)}function U0(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),r=i(`${Gr}Delay`),s=i(`${Gr}Duration`),o=sm(r,s),a=i(`${Ra}Delay`),l=i(`${Ra}Duration`),c=sm(a,l);let u=null,f=0,d=0;e===Gr?o>0&&(u=Gr,f=o,d=s.length):e===Ra?c>0&&(u=Ra,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?Gr:Ra:null,d=u?u===Gr?s.length:l.length:0);const h=u===Gr&&/\b(transform|all)(,|$)/.test(i(`${Gr}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:h}}function sm(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>om(t)+om(n[i])))}function om(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function md(){return document.body.offsetHeight}function rM(n,e,t){const i=n[oa];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const fu=Symbol("_vod"),N0=Symbol("_vsh"),sM={beforeMount(n,{value:e},{transition:t}){n[fu]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Pa(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Pa(n,!0),i.enter(n)):i.leave(n,()=>{Pa(n,!1)}):Pa(n,e))},beforeUnmount(n,{value:e}){Pa(n,e)}};function Pa(n,e){n.style.display=e?n[fu]:"none",n[N0]=!e}const oM=Symbol(""),aM=/(^|;)\s*display\s*:/;function lM(n,e,t){const i=n.style,r=Ht(t);let s=!1;if(t&&!r){if(e)if(Ht(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&zc(i,a,"")}else for(const o in e)t[o]==null&&zc(i,o,"");for(const o in t)o==="display"&&(s=!0),zc(i,o,t[o])}else if(r){if(e!==t){const o=i[oM];o&&(t+=";"+o),i.cssText=t,s=aM.test(t)}}else e&&n.removeAttribute("style");fu in n&&(n[fu]=s?i.display:"",n[N0]&&(i.display="none"))}const am=/\s*!important$/;function zc(n,e,t){if(Ve(t))t.forEach(i=>zc(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=cM(n,e);am.test(t)?n.setProperty(mo(i),t.replace(am,""),"important"):n[i]=t}}const lm=["Webkit","Moz","ms"],af={};function cM(n,e){const t=af[e];if(t)return t;let i=Ni(e);if(i!=="filter"&&i in n)return af[e]=i;i=Du(i);for(let r=0;r<lm.length;r++){const s=lm[r]+i;if(s in n)return af[e]=s}return e}const cm="http://www.w3.org/1999/xlink";function um(n,e,t,i,r,s=_S(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(cm,e.slice(6,e.length)):n.setAttributeNS(cm,e,t):t==null||s&&!yg(t)?n.removeAttribute(e):n.setAttribute(e,s?"":fr(t)?String(t):t)}function fm(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?P0(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=yg(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function is(n,e,t,i){n.addEventListener(e,t,i)}function uM(n,e,t,i){n.removeEventListener(e,t,i)}const dm=Symbol("_vei");function fM(n,e,t,i,r=null){const s=n[dm]||(n[dm]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=dM(e);if(i){const c=s[e]=mM(i,r);is(n,a,c,l)}else o&&(uM(n,a,o,l),s[e]=void 0)}}const hm=/(?:Once|Passive|Capture)$/;function dM(n){let e;if(hm.test(n)){e={};let i;for(;i=n.match(hm);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):mo(n.slice(2)),e]}let lf=0;const hM=Promise.resolve(),pM=()=>lf||(hM.then(()=>lf=0),lf=Date.now());function mM(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Yi(_M(i,t.value),e,5,[i])};return t.value=n,t.attached=pM(),t}function _M(n,e){if(Ve(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const pm=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,gM=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?rM(n,i,o):e==="style"?lM(n,t,i):Ru(e)?Uh(e)||fM(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vM(n,e,i,o))?(fm(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&um(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Ht(i))?fm(n,Ni(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),um(n,e,i,o))};function vM(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&pm(e)&&Ze(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return pm(e)&&Ht(t)?!1:e in n}const O0=new WeakMap,F0=new WeakMap,du=Symbol("_moveCb"),mm=Symbol("_enterCb"),xM=n=>(delete n.props.mode,n),SM=xM({name:"TransitionGroup",props:sn({},L0,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=w0(),i=Yg();let r,s;return n0(()=>{if(!r.length)return;const o=n.moveClass||`${n.name||"v"}-move`;if(!TM(r[0].el,t.vnode.el,o))return;r.forEach(MM),r.forEach(EM);const a=r.filter(bM);md(),a.forEach(l=>{const c=l.el,u=c.style;Zi(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=c[du]=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",f),c[du]=null,Zr(c,o))};c.addEventListener("transitionend",f)})}),()=>{const o=ht(n),a=I0(o);let l=o.tag||Mn;if(r=[],s)for(let c=0;c<s.length;c++){const u=s[c];u.el&&u.el instanceof Element&&(r.push(u),ao(u,xl(u,a,i,t)),O0.set(u,u.el.getBoundingClientRect()))}s=e.default?Yh(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&ao(u,xl(u,a,i,t))}return lt(l,null,s)}}}),yM=SM;function MM(n){const e=n.el;e[du]&&e[du](),e[mm]&&e[mm]()}function EM(n){F0.set(n,n.el.getBoundingClientRect())}function bM(n){const e=O0.get(n),t=F0.get(n),i=e.left-t.left,r=e.top-t.top;if(i||r){const s=n.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",n}}function TM(n,e,t){const i=n.cloneNode(),r=n[oa];r&&r.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),t.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(i);const{hasTransform:o}=U0(i);return s.removeChild(i),o}const aa=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ve(e)?t=>Nc(e,t):e};function AM(n){n.target.composing=!0}function _m(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ur=Symbol("_assign"),gL={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[Ur]=aa(r);const s=i||r.props&&r.props.type==="number";is(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),s&&(a=iu(a)),n[Ur](a)}),t&&is(n,"change",()=>{n.value=n.value.trim()}),e||(is(n,"compositionstart",AM),is(n,"compositionend",_m),is(n,"change",_m))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[Ur]=aa(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?iu(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},vL={deep:!0,created(n,e,t){n[Ur]=aa(t),is(n,"change",()=>{const i=n._modelValue,r=El(n),s=n.checked,o=n[Ur];if(Ve(i)){const a=Bh(i,r),l=a!==-1;if(s&&!l)o(i.concat(r));else if(!s&&l){const c=[...i];c.splice(a,1),o(c)}}else if(ba(i)){const a=new Set(i);s?a.add(r):a.delete(r),o(a)}else o(B0(n,s))})},mounted:gm,beforeUpdate(n,e,t){n[Ur]=aa(t),gm(n,e,t)}};function gm(n,{value:e,oldValue:t},i){n._modelValue=e;let r;if(Ve(e))r=Bh(e,i.props.value)>-1;else if(ba(e))r=e.has(i.props.value);else{if(e===t)return;r=Fl(e,B0(n,!0))}n.checked!==r&&(n.checked=r)}const xL={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=ba(e);is(n,"change",()=>{const s=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?iu(El(o)):El(o));n[Ur](n.multiple?r?new Set(s):s:s[0]),n._assigning=!0,$h(()=>{n._assigning=!1})}),n[Ur]=aa(i)},mounted(n,{value:e}){vm(n,e)},beforeUpdate(n,e,t){n[Ur]=aa(t)},updated(n,{value:e}){n._assigning||vm(n,e)}};function vm(n,e){const t=n.multiple,i=Ve(e);if(!(t&&!i&&!ba(e))){for(let r=0,s=n.options.length;r<s;r++){const o=n.options[r],a=El(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Bh(e,a)>-1}else o.selected=e.has(a);else if(Fl(El(o),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function El(n){return"_value"in n?n._value:n.value}function B0(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const wM=["ctrl","shift","alt","meta"],CM={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>wM.some(t=>n[`${t}Key`]&&!e.includes(t))},SL=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=CM[e[o]];if(a&&a(r,e))return}return n(r,...s)})},RM=sn({patchProp:gM},Qy);let xm;function PM(){return xm||(xm=Ey(RM))}const DM=(...n)=>{const e=PM().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=IM(i);if(!r)return;const s=e._component;!Ze(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,LM(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function LM(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function IM(n){return Ht(n)?document.querySelector(n):n}const hr=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},UM={name:"TheNavbar",setup(){const n=Ii(!1),e=Ii(!1),t=()=>{n.value=!n.value,n.value?document.body.style.overflow="hidden":document.body.style.overflow=""},i=()=>{n.value=!1,document.body.style.overflow=""},r=()=>{e.value=window.scrollY>50};return bs(()=>{window.addEventListener("scroll",r)}),kl(()=>{window.removeEventListener("scroll",r),document.body.style.overflow=""}),{isMenuOpen:n,isScrolled:e,toggleMenu:t,closeMenu:i}}},NM={class:"navbar-container"},OM={class:"logo"},FM={class:"nav-links"};function BM(n,e,t,i,r,s){const o=ui("router-link");return Nt(),Gt("nav",{class:Wi([{"nav-scrolled":i.isScrolled},"navbar"])},[le("div",NM,[le("div",OM,[lt(o,{to:"/",class:"logo-link"},{default:pi(()=>e[1]||(e[1]=[le("div",{class:"logo-icon"},[le("i",{class:"fas fa-paint-brush"})],-1),le("span",{class:"logo-text"},"كانفا برو",-1)])),_:1})]),le("div",{class:Wi(["nav-toggle",{active:i.isMenuOpen}]),onClick:e[0]||(e[0]=(...a)=>i.toggleMenu&&i.toggleMenu(...a))},e[2]||(e[2]=[le("div",{class:"hamburger"},[le("span"),le("span"),le("span")],-1)]),2),le("div",{class:Wi(["nav-menu",{active:i.isMenuOpen}])},[le("div",FM,[lt(o,{to:"/",class:"nav-link",onClick:i.closeMenu},{default:pi(()=>e[3]||(e[3]=[le("i",{class:"fas fa-home"},null,-1),Hn(" الرئيسية ")])),_:1},8,["onClick"]),lt(o,{to:"/course",class:"nav-link",onClick:i.closeMenu},{default:pi(()=>e[4]||(e[4]=[le("i",{class:"fas fa-graduation-cap"},null,-1),Hn(" الكورس ")])),_:1},8,["onClick"])]),lt(o,{to:"/register",class:"nav-button",onClick:i.closeMenu},{default:pi(()=>e[5]||(e[5]=[le("span",null,"سجل الآن",-1),le("i",{class:"fas fa-arrow-left"},null,-1)])),_:1},8,["onClick"])],2)])],2)}const kM=hr(UM,[["render",BM],["__scopeId","data-v-28069610"]]),zM={name:"TheFooter",setup(){const n=Ii("");return{email:n,subscribe:()=>{console.log("تم الاشتراك باستخدام:",n.value),n.value=""}}}},HM={class:"footer"},VM={class:"footer-container"},GM={class:"footer-grid"},WM={class:"footer-section"},XM={class:"footer-links"},$M={class:"footer-bottom"};function qM(n,e,t,i,r,s){const o=ui("router-link");return Nt(),Gt("footer",HM,[le("div",VM,[le("div",GM,[e[5]||(e[5]=yl('<div class="footer-section" data-v-3584fea6><div class="footer-logo" data-v-3584fea6><i class="fas fa-paint-brush" data-v-3584fea6></i><span data-v-3584fea6>كانفا برو</span></div><p class="footer-description" data-v-3584fea6> تم التصميم والتطوير بواسطة : Mahmoud Nazmy </p><div class="social-links" data-v-3584fea6><a href="https://github.com/mahmoudnazmy" class="social-link" data-v-3584fea6><i class="fab fa-github" data-v-3584fea6></i></a><a href="https://www.facebook.com/11mahmoud12" class="social-link" data-v-3584fea6><i class="fab fa-facebook-f" data-v-3584fea6></i></a><a href="https://www.linkedin.com/in/mahmoud-n/" class="social-link" data-v-3584fea6><i class="fab fa-linkedin" data-v-3584fea6></i></a></div></div>',1)),le("div",WM,[e[4]||(e[4]=le("h3",null,"روابط سريعة",-1)),le("ul",XM,[le("li",null,[lt(o,{to:"/"},{default:pi(()=>e[0]||(e[0]=[Hn("الرئيسية")])),_:1})]),le("li",null,[lt(o,{to:"/course"},{default:pi(()=>e[1]||(e[1]=[Hn("الكورس")])),_:1})]),le("li",null,[lt(o,{to:"/register"},{default:pi(()=>e[2]||(e[2]=[Hn("التسجيل")])),_:1})]),e[3]||(e[3]=le("li",null,[le("a",{href:"#"},"المدونة")],-1))])]),e[6]||(e[6]=yl('<div class="footer-section" data-v-3584fea6><h3 data-v-3584fea6>معلومات التواصل</h3><ul class="contact-info" data-v-3584fea6><li data-v-3584fea6><i class="fas fa-phone" data-v-3584fea6></i><span data-v-3584fea6>0123456789</span></li><li data-v-3584fea6><i class="fas fa-envelope" data-v-3584fea6></i><span data-v-3584fea6>email@email.com</span></li><li data-v-3584fea6><i class="fas fa-map-marker-alt" data-v-3584fea6></i><span data-v-3584fea6>القاهرة - مصر</span></li></ul></div>',1))]),le("div",$M,[le("p",null,"© "+Fn(new Date().getFullYear())+" كانفا برو. جميع الحقوق محفوظة",1),e[7]||(e[7]=le("div",{class:"footer-bottom-links"},[le("a",{href:"#"},"سياسة الخصوصية"),le("a",{href:"#"},"الشروط والأحكام")],-1))])])])}const YM=hr(zM,[["render",qM],["__scopeId","data-v-3584fea6"]]),KM={name:"App",components:{TheNavbar:kM,TheFooter:YM},setup(){const n=Ii(!1),e=()=>{n.value=!n.value,localStorage.setItem("darkMode",n.value)},t=localStorage.getItem("darkMode");return t!==null&&(n.value=JSON.parse(t)),{isDarkMode:n,toggleTheme:e}}};function jM(n,e,t,i,r,s){const o=ui("TheNavbar"),a=ui("router-view"),l=ui("TheFooter");return Nt(),Gt("div",{class:Wi([{"dark-mode":i.isDarkMode},"app-container"])},[lt(o,{onToggleTheme:i.toggleTheme},null,8,["onToggleTheme"]),lt(a,null,{default:pi(({Component:c})=>[lt(tM,{name:"page-transition",mode:"out-in"},{default:pi(()=>[(Nt(),T0(ly(c)))]),_:2},1024)]),_:1}),lt(l)],2)}const ZM=hr(KM,[["render",jM]]),JM="modulepreload",QM=function(n){return"/Canva-Course/"+n},Sm={},ym=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=QM(l),l in Sm)return;Sm[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":JM,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((d,h)=>{f.addEventListener("load",d),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Fo=typeof document<"u";function k0(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function eE(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&k0(n.default)}const vt=Object.assign;function cf(n,e){const t={};for(const i in e){const r=e[i];t[i]=Ki(r)?r.map(n):n(r)}return t}const nl=()=>{},Ki=Array.isArray,z0=/#/g,tE=/&/g,nE=/\//g,iE=/=/g,rE=/\?/g,H0=/\+/g,sE=/%5B/g,oE=/%5D/g,V0=/%5E/g,aE=/%60/g,G0=/%7B/g,lE=/%7C/g,W0=/%7D/g,cE=/%20/g;function ep(n){return encodeURI(""+n).replace(lE,"|").replace(sE,"[").replace(oE,"]")}function uE(n){return ep(n).replace(G0,"{").replace(W0,"}").replace(V0,"^")}function _d(n){return ep(n).replace(H0,"%2B").replace(cE,"+").replace(z0,"%23").replace(tE,"%26").replace(aE,"`").replace(G0,"{").replace(W0,"}").replace(V0,"^")}function fE(n){return _d(n).replace(iE,"%3D")}function dE(n){return ep(n).replace(z0,"%23").replace(rE,"%3F")}function hE(n){return n==null?"":dE(n).replace(nE,"%2F")}function bl(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const pE=/\/$/,mE=n=>n.replace(pE,"");function uf(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=xE(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:bl(o)}}function _E(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Mm(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function gE(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&la(e.matched[i],t.matched[r])&&X0(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function la(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function X0(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!vE(n[t],e[t]))return!1;return!0}function vE(n,e){return Ki(n)?Em(n,e):Ki(e)?Em(e,n):n===e}function Em(n,e){return Ki(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function xE(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const Wr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Tl;(function(n){n.pop="pop",n.push="push"})(Tl||(Tl={}));var il;(function(n){n.back="back",n.forward="forward",n.unknown=""})(il||(il={}));function SE(n){if(!n)if(Fo){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),mE(n)}const yE=/^[^#]+#/;function ME(n,e){return n.replace(yE,"#")+e}function EE(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Hu=()=>({left:window.scrollX,top:window.scrollY});function bE(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=EE(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function bm(n,e){return(history.state?history.state.position-e:-1)+n}const gd=new Map;function TE(n,e){gd.set(n,e)}function AE(n){const e=gd.get(n);return gd.delete(n),e}let wE=()=>location.protocol+"//"+location.host;function $0(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Mm(l,"")}return Mm(t,n)+i+r}function CE(n,e,t,i){let r=[],s=[],o=null;const a=({state:d})=>{const h=$0(n,location),g=t.value,_=e.value;let m=0;if(d){if(t.value=h,e.value=d,o&&o===g){o=null;return}m=_?d.position-_.position:0}else i(h);r.forEach(p=>{p(t.value,g,{delta:m,type:Tl.pop,direction:m?m>0?il.forward:il.back:il.unknown})})};function l(){o=t.value}function c(d){r.push(d);const h=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return s.push(h),h}function u(){const{history:d}=window;d.state&&d.replaceState(vt({},d.state,{scroll:Hu()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Tm(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Hu():null}}function RE(n){const{history:e,location:t}=window,i={value:$0(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),d=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:wE()+n+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(h){console.error(h),t[u?"replace":"assign"](d)}}function o(l,c){const u=vt({},e.state,Tm(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=vt({},r.value,e.state,{forward:l,scroll:Hu()});s(u.current,u,!0);const f=vt({},Tm(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function PE(n){n=SE(n);const e=RE(n),t=CE(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=vt({location:"",base:n,go:i,createHref:ME.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function DE(n){return typeof n=="string"||n&&typeof n=="object"}function q0(n){return typeof n=="string"||typeof n=="symbol"}const Y0=Symbol("");var Am;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Am||(Am={}));function ca(n,e){return vt(new Error,{type:n,[Y0]:!0},e)}function mr(n,e){return n instanceof Error&&Y0 in n&&(e==null||!!(n.type&e))}const wm="[^/]+?",LE={sensitive:!1,strict:!1,start:!0,end:!0},IE=/[.+*?^${}()[\]/\\]/g;function UE(n,e){const t=vt({},LE,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=40+(t.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(IE,"\\$&"),h+=40;else if(d.type===1){const{value:g,repeatable:_,optional:m,regexp:p}=d;s.push({name:g,repeatable:_,optional:m});const T=p||wm;if(T!==wm){h+=10;try{new RegExp(`(${T})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${g}" (${T}): `+v.message)}}let E=_?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;f||(E=m&&c.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),r+=E,h+=20,m&&(h+=-8),_&&(h+=-20),T===".*"&&(h+=-50)}u.push(h)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",g=s[d-1];f[g.name]=h&&g.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===0)u+=h.value;else if(h.type===1){const{value:g,repeatable:_,optional:m}=h,p=g in c?c[g]:"";if(Ki(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const T=Ki(p)?p.join("/"):p;if(!T)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=T}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function NE(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function K0(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=NE(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Cm(i))return 1;if(Cm(r))return-1}return r.length-i.length}function Cm(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const OE={type:0,value:""},FE=/[a-zA-Z0-9_]/;function BE(n){if(!n)return[[]];if(n==="/")return[[OE]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(h){throw new Error(`ERR (${t})/"${c}": ${h}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):d();break;case 4:d(),t=i;break;case 1:l==="("?t=2:FE.test(l)?d():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function kE(n,e,t){const i=UE(BE(n.path),t),r=vt(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function zE(n,e){const t=[],i=new Map;e=Lm({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,d,h){const g=!h,_=Pm(f);_.aliasOf=h&&h.record;const m=Lm(e,f),p=[_];if("alias"in f){const v=typeof f.alias=="string"?[f.alias]:f.alias;for(const R of v)p.push(Pm(vt({},_,{components:h?h.record.components:_.components,path:R,aliasOf:h?h.record:_})))}let T,E;for(const v of p){const{path:R}=v;if(d&&R[0]!=="/"){const C=d.record.path,w=C[C.length-1]==="/"?"":"/";v.path=d.record.path+(R&&w+R)}if(T=kE(v,d,m),h?h.alias.push(T):(E=E||T,E!==T&&E.alias.push(T),g&&f.name&&!Dm(T)&&o(f.name)),j0(T)&&l(T),_.children){const C=_.children;for(let w=0;w<C.length;w++)s(C[w],T,h&&h.children[w])}h=h||T}return E?()=>{o(E)}:nl}function o(f){if(q0(f)){const d=i.get(f);d&&(i.delete(f),t.splice(t.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=t.indexOf(f);d>-1&&(t.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function l(f){const d=GE(f,t);t.splice(d,0,f),f.record.name&&!Dm(f)&&i.set(f.record.name,f)}function c(f,d){let h,g={},_,m;if("name"in f&&f.name){if(h=i.get(f.name),!h)throw ca(1,{location:f});m=h.record.name,g=vt(Rm(d.params,h.keys.filter(E=>!E.optional).concat(h.parent?h.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),f.params&&Rm(f.params,h.keys.map(E=>E.name))),_=h.stringify(g)}else if(f.path!=null)_=f.path,h=t.find(E=>E.re.test(_)),h&&(g=h.parse(_),m=h.record.name);else{if(h=d.name?i.get(d.name):t.find(E=>E.re.test(d.path)),!h)throw ca(1,{location:f,currentLocation:d});m=h.record.name,g=vt({},d.params,f.params),_=h.stringify(g)}const p=[];let T=h;for(;T;)p.unshift(T.record),T=T.parent;return{name:m,path:_,params:g,matched:p,meta:VE(p)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Rm(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Pm(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:HE(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function HE(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Dm(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function VE(n){return n.reduce((e,t)=>vt(e,t.meta),{})}function Lm(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function GE(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;K0(n,e[s])<0?i=s:t=s+1}const r=WE(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function WE(n){let e=n;for(;e=e.parent;)if(j0(e)&&K0(n,e)===0)return e}function j0({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function XE(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(H0," "),o=s.indexOf("="),a=bl(o<0?s:s.slice(0,o)),l=o<0?null:bl(s.slice(o+1));if(a in e){let c=e[a];Ki(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Im(n){let e="";for(let t in n){const i=n[t];if(t=fE(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Ki(i)?i.map(s=>s&&_d(s)):[i&&_d(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function $E(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Ki(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const qE=Symbol(""),Um=Symbol(""),tp=Symbol(""),Z0=Symbol(""),vd=Symbol("");function Da(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function ns(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(ca(4,{from:t,to:e})):d instanceof Error?l(d):DE(d)?l(ca(2,{from:e,to:d})):(o&&i.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function ff(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(k0(l)){const u=(l.__vccOpts||l)[e];u&&s.push(ns(u,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=eE(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const h=(f.__vccOpts||f)[e];return h&&ns(h,t,i,o,a,r)()}))}}return s}function Nm(n){const e=Ir(tp),t=Ir(Z0),i=Hi(()=>{const l=Yo(n.to);return e.resolve(l)}),r=Hi(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const d=f.findIndex(la.bind(null,u));if(d>-1)return d;const h=Om(l[c-2]);return c>1&&Om(u)===h&&f[f.length-1].path!==h?f.findIndex(la.bind(null,l[c-2])):d}),s=Hi(()=>r.value>-1&&JE(t.params,i.value.params)),o=Hi(()=>r.value>-1&&r.value===t.matched.length-1&&X0(t.params,i.value.params));function a(l={}){if(ZE(l)){const c=e[Yo(n.replace)?"replace":"push"](Yo(n.to)).catch(nl);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Hi(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function YE(n){return n.length===1?n[0]:n}const KE=Qg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Nm,setup(n,{slots:e}){const t=Uu(Nm(n)),{options:i}=Ir(tp),r=Hi(()=>({[Fm(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Fm(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&YE(e.default(t));return n.custom?s:Qh("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),jE=KE;function ZE(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function JE(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!Ki(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Om(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Fm=(n,e,t)=>n??e??t,QE=Qg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Ir(vd),r=Hi(()=>n.route||i.value),s=Ir(Um,0),o=Hi(()=>{let c=Yo(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Hi(()=>r.value.matched[o.value]);Oc(Um,Hi(()=>o.value+1)),Oc(qE,a),Oc(vd,r);const l=Ii();return Fc(()=>[l.value,a.value,n.name],([c,u,f],[d,h,g])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!la(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,d=f&&f.components[u];if(!d)return Bm(t.default,{Component:d,route:c});const h=f.props[u],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=Qh(d,vt({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Bm(t.default,{Component:m,route:c})||m}}});function Bm(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const eb=QE;function tb(n){const e=zE(n.routes,n),t=n.parseQuery||XE,i=n.stringifyQuery||Im,r=n.history,s=Da(),o=Da(),a=Da(),l=kS(Wr);let c=Wr;Fo&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=cf.bind(null,k=>""+k),f=cf.bind(null,hE),d=cf.bind(null,bl);function h(k,ae){let oe,pe;return q0(k)?(oe=e.getRecordMatcher(k),pe=ae):pe=k,e.addRoute(pe,oe)}function g(k){const ae=e.getRecordMatcher(k);ae&&e.removeRoute(ae)}function _(){return e.getRoutes().map(k=>k.record)}function m(k){return!!e.getRecordMatcher(k)}function p(k,ae){if(ae=vt({},ae||l.value),typeof k=="string"){const M=uf(t,k,ae.path),ie=e.resolve({path:M.path},ae),Z=r.createHref(M.fullPath);return vt(M,ie,{params:d(ie.params),hash:bl(M.hash),redirectedFrom:void 0,href:Z})}let oe;if(k.path!=null)oe=vt({},k,{path:uf(t,k.path,ae.path).path});else{const M=vt({},k.params);for(const ie in M)M[ie]==null&&delete M[ie];oe=vt({},k,{params:f(M)}),ae.params=f(ae.params)}const pe=e.resolve(oe,ae),Ie=k.hash||"";pe.params=u(d(pe.params));const P=_E(i,vt({},k,{hash:uE(Ie),path:pe.path})),D=r.createHref(P);return vt({fullPath:P,hash:Ie,query:i===Im?$E(k.query):k.query||{}},pe,{redirectedFrom:void 0,href:D})}function T(k){return typeof k=="string"?uf(t,k,l.value.path):vt({},k)}function E(k,ae){if(c!==k)return ca(8,{from:ae,to:k})}function v(k){return w(k)}function R(k){return v(vt(T(k),{replace:!0}))}function C(k){const ae=k.matched[k.matched.length-1];if(ae&&ae.redirect){const{redirect:oe}=ae;let pe=typeof oe=="function"?oe(k):oe;return typeof pe=="string"&&(pe=pe.includes("?")||pe.includes("#")?pe=T(pe):{path:pe},pe.params={}),vt({query:k.query,hash:k.hash,params:pe.path!=null?{}:k.params},pe)}}function w(k,ae){const oe=c=p(k),pe=l.value,Ie=k.state,P=k.force,D=k.replace===!0,M=C(oe);if(M)return w(vt(T(M),{state:typeof M=="object"?vt({},Ie,M.state):Ie,force:P,replace:D}),ae||oe);const ie=oe;ie.redirectedFrom=ae;let Z;return!P&&gE(i,pe,oe)&&(Z=ca(16,{to:ie,from:pe}),Se(pe,pe,!0,!1)),(Z?Promise.resolve(Z):x(ie,pe)).catch(L=>mr(L)?mr(L,2)?L:O(L):V(L,ie,pe)).then(L=>{if(L){if(mr(L,2))return w(vt({replace:D},T(L.to),{state:typeof L.to=="object"?vt({},Ie,L.to.state):Ie,force:P}),ae||ie)}else L=N(ie,pe,!0,D,Ie);return U(ie,pe,L),L})}function I(k,ae){const oe=E(k,ae);return oe?Promise.reject(oe):Promise.resolve()}function S(k){const ae=te.values().next().value;return ae&&typeof ae.runWithContext=="function"?ae.runWithContext(k):k()}function x(k,ae){let oe;const[pe,Ie,P]=nb(k,ae);oe=ff(pe.reverse(),"beforeRouteLeave",k,ae);for(const M of pe)M.leaveGuards.forEach(ie=>{oe.push(ns(ie,k,ae))});const D=I.bind(null,k,ae);return oe.push(D),ye(oe).then(()=>{oe=[];for(const M of s.list())oe.push(ns(M,k,ae));return oe.push(D),ye(oe)}).then(()=>{oe=ff(Ie,"beforeRouteUpdate",k,ae);for(const M of Ie)M.updateGuards.forEach(ie=>{oe.push(ns(ie,k,ae))});return oe.push(D),ye(oe)}).then(()=>{oe=[];for(const M of P)if(M.beforeEnter)if(Ki(M.beforeEnter))for(const ie of M.beforeEnter)oe.push(ns(ie,k,ae));else oe.push(ns(M.beforeEnter,k,ae));return oe.push(D),ye(oe)}).then(()=>(k.matched.forEach(M=>M.enterCallbacks={}),oe=ff(P,"beforeRouteEnter",k,ae,S),oe.push(D),ye(oe))).then(()=>{oe=[];for(const M of o.list())oe.push(ns(M,k,ae));return oe.push(D),ye(oe)}).catch(M=>mr(M,8)?M:Promise.reject(M))}function U(k,ae,oe){a.list().forEach(pe=>S(()=>pe(k,ae,oe)))}function N(k,ae,oe,pe,Ie){const P=E(k,ae);if(P)return P;const D=ae===Wr,M=Fo?history.state:{};oe&&(pe||D?r.replace(k.fullPath,vt({scroll:D&&M&&M.scroll},Ie)):r.push(k.fullPath,Ie)),l.value=k,Se(k,ae,oe,D),O()}let z;function X(){z||(z=r.listen((k,ae,oe)=>{if(!_e.listening)return;const pe=p(k),Ie=C(pe);if(Ie){w(vt(Ie,{replace:!0,force:!0}),pe).catch(nl);return}c=pe;const P=l.value;Fo&&TE(bm(P.fullPath,oe.delta),Hu()),x(pe,P).catch(D=>mr(D,12)?D:mr(D,2)?(w(vt(T(D.to),{force:!0}),pe).then(M=>{mr(M,20)&&!oe.delta&&oe.type===Tl.pop&&r.go(-1,!1)}).catch(nl),Promise.reject()):(oe.delta&&r.go(-oe.delta,!1),V(D,pe,P))).then(D=>{D=D||N(pe,P,!1),D&&(oe.delta&&!mr(D,8)?r.go(-oe.delta,!1):oe.type===Tl.pop&&mr(D,20)&&r.go(-1,!1)),U(pe,P,D)}).catch(nl)}))}let ee=Da(),W=Da(),Y;function V(k,ae,oe){O(k);const pe=W.list();return pe.length?pe.forEach(Ie=>Ie(k,ae,oe)):console.error(k),Promise.reject(k)}function de(){return Y&&l.value!==Wr?Promise.resolve():new Promise((k,ae)=>{ee.add([k,ae])})}function O(k){return Y||(Y=!k,X(),ee.list().forEach(([ae,oe])=>k?oe(k):ae()),ee.reset()),k}function Se(k,ae,oe,pe){const{scrollBehavior:Ie}=n;if(!Fo||!Ie)return Promise.resolve();const P=!oe&&AE(bm(k.fullPath,0))||(pe||!oe)&&history.state&&history.state.scroll||null;return $h().then(()=>Ie(k,ae,P)).then(D=>D&&bE(D)).catch(D=>V(D,k,ae))}const De=k=>r.go(k);let Ke;const te=new Set,_e={currentRoute:l,listening:!0,addRoute:h,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:n,push:v,replace:R,go:De,back:()=>De(-1),forward:()=>De(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:W.add,isReady:de,install(k){const ae=this;k.component("RouterLink",jE),k.component("RouterView",eb),k.config.globalProperties.$router=ae,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Yo(l)}),Fo&&!Ke&&l.value===Wr&&(Ke=!0,v(r.location).catch(Ie=>{}));const oe={};for(const Ie in Wr)Object.defineProperty(oe,Ie,{get:()=>l.value[Ie],enumerable:!0});k.provide(tp,ae),k.provide(Z0,Bg(oe)),k.provide(vd,l);const pe=k.unmount;te.add(k),k.unmount=function(){te.delete(k),te.size<1&&(c=Wr,z&&z(),z=null,l.value=Wr,Ke=!1,Y=!1),pe()}}};function ye(k){return k.reduce((ae,oe)=>ae.then(()=>S(oe)),Promise.resolve())}return _e}function nb(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>la(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>la(c,l))||r.push(l))}return[t,i,r]}function Er(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function J0(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var gi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ua={duration:.5,overwrite:!1,delay:0},np,mn,Ut,lr=1e8,Tn=1/lr,xd=Math.PI*2,ib=xd/4,rb=0,Q0=Math.sqrt,sb=Math.cos,ob=Math.sin,fn=function(e){return typeof e=="string"},zt=function(e){return typeof e=="function"},Fr=function(e){return typeof e=="number"},ip=function(e){return typeof e>"u"},dr=function(e){return typeof e=="object"},qn=function(e){return e!==!1},rp=function(){return typeof window<"u"},Jl=function(e){return zt(e)||fn(e)},ev=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},wn=Array.isArray,Sd=/(?:-?\.?\d|\.)+/gi,tv=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ho=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,df=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nv=/[+-]=-?[.\d]+/,iv=/[^,'"\[\]\s]+/gi,ab=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ot,Qi,yd,sp,vi={},hu={},rv,sv=function(e){return(hu=fa(e,vi))&&ei},op=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Al=function(e,t){return!t&&console.warn(e)},ov=function(e,t){return e&&(vi[e]=t)&&hu&&(hu[e]=t)||vi},wl=function(){return 0},lb={suppressEvents:!0,isStart:!0,kill:!1},Hc={suppressEvents:!0,kill:!1},cb={suppressEvents:!0},ap={},fs=[],Md={},av,ci={},hf={},km=30,Vc=[],lp="",cp=function(e){var t=e[0],i,r;if(dr(t)||zt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Vc.length;r--&&!Vc[r].targetTest(t););i=Vc[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Dv(e[r],i)))||e.splice(r,1);return e},Js=function(e){return e._gsap||cp(Pi(e))[0]._gsap},lv=function(e,t,i){return(i=e[t])&&zt(i)?e[t]():ip(i)&&e.getAttribute&&e.getAttribute(t)||i},Yn=function(e,t){return(e=e.split(",")).forEach(t)||e},Wt=function(e){return Math.round(e*1e5)/1e5||0},Jt=function(e){return Math.round(e*1e7)/1e7||0},Zo=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},ub=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},pu=function(){var e=fs.length,t=fs.slice(0),i,r;for(Md={},fs.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},cv=function(e,t,i,r){fs.length&&!mn&&pu(),e.render(t,i,mn&&t<0&&(e._initted||e._startAt)),fs.length&&!mn&&pu()},uv=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(iv).length<2?t:fn(e)?e.trim():e},fv=function(e){return e},xi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},fb=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},fa=function(e,t){for(var i in t)e[i]=t[i];return e},zm=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=dr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},mu=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},rl=function(e){var t=e.parent||Ot,i=e.keyframes?fb(wn(e.keyframes)):xi;if(qn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},db=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},dv=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Vu=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},gs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Qs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},hb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ed=function(e,t,i,r){return e._startAt&&(mn?e._startAt.revert(Hc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},pb=function n(e){return!e||e._ts&&n(e.parent)},Hm=function(e){return e._repeat?da(e._tTime,e=e.duration()+e._rDelay)*e:0},da=function(e,t){var i=Math.floor(e=Jt(e/t));return e&&i===e?i-1:i},_u=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Gu=function(e){return e._end=Jt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Tn)||0))},Wu=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Jt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Gu(e),i._dirty||Qs(i,e)),e},hv=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=_u(e.rawTime(),t),(!t._dur||Hl(0,t.totalDuration(),i)-t._tTime>Tn)&&t.render(i,!0)),Qs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-1e-8}},ir=function(e,t,i,r){return t.parent&&gs(t),t._start=Jt((Fr(i)?i:i||e!==Ot?Ti(e,i,t):e._time)+t._delay),t._end=Jt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),dv(e,t,"_first","_last",e._sort?"_start":0),bd(t)||(e._recent=t),r||hv(e,t),e._ts<0&&Wu(e,e._tTime),e},pv=function(e,t){return(vi.ScrollTrigger||op("scrollTrigger",t))&&vi.ScrollTrigger.create(t,e)},mv=function(e,t,i,r,s){if(fp(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!mn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&av!==di.frame)return fs.push(e),e._lazy=[s,r],1},mb=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},bd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},_b=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&mb(e)&&!(!e._initted&&bd(e))||(e._ts<0||e._dp._ts<0)&&!bd(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Hl(0,e._tDur,t),u=da(l,a),e._yoyo&&u&1&&(o=1-o),u!==da(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||mn||r||e._zTime===Tn||!t&&e._zTime){if(!e._initted&&mv(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?Tn:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Ed(e,t,i,!0),e._onUpdate&&!i&&_i(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&_i(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&gs(e,1),!i&&!mn&&(_i(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},gb=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ha=function(e,t,i,r){var s=e._repeat,o=Jt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Jt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Wu(e,e._tTime=e._tDur*a),e.parent&&Gu(e),i||Qs(e.parent,e),e},Vm=function(e){return e instanceof kn?Qs(e):ha(e,e._dur)},vb={_start:0,endTime:wl,totalDuration:wl},Ti=function n(e,t,i){var r=e.labels,s=e._recent||vb,o=e.duration()>=lr?s.endTime(!1):e._dur,a,l,c;return fn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(wn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},sl=function(e,t,i){var r=Fr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=qn(l.vars.inherit)&&l.parent;o.immediateRender=qn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Zt(t[0],o,t[s+1])},Ts=function(e,t){return e||e===0?t(e):t},Hl=function(e,t,i){return i<e?e:i>t?t:i},En=function(e,t){return!fn(e)||!(t=ab.exec(e))?"":t[1]},xb=function(e,t,i){return Ts(i,function(r){return Hl(e,t,r)})},Td=[].slice,_v=function(e,t){return e&&dr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&dr(e[0]))&&!e.nodeType&&e!==Qi},Sb=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return fn(r)&&!t||_v(r,1)?(s=i).push.apply(s,Pi(r)):i.push(r)})||i},Pi=function(e,t,i){return Ut&&!t&&Ut.selector?Ut.selector(e):fn(e)&&!i&&(yd||!pa())?Td.call((t||sp).querySelectorAll(e),0):wn(e)?Sb(e,i):_v(e)?Td.call(e,0):e?[e]:[]},Ad=function(e){return e=Pi(e)[0]||Al("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Pi(t,i.querySelectorAll?i:i===e?Al("Invalid scope")||sp.createElement("div"):e)}},gv=function(e){return e.sort(function(){return .5-Math.random()})},vv=function(e){if(zt(e))return e;var t=dr(e)?e:{each:e},i=eo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return fn(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(d,h,g){var _=(g||t).length,m=o[_],p,T,E,v,R,C,w,I,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,lr])[1],!S){for(w=-1e8;w<(w=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=o[_]=[],p=l?Math.min(S,_)*u-.5:r%S,T=S===lr?0:l?_*f/S-.5:r/S|0,w=0,I=lr,C=0;C<_;C++)E=C%S-p,v=T-(C/S|0),m[C]=R=c?Math.abs(c==="y"?v:E):Q0(E*E+v*v),R>w&&(w=R),R<I&&(I=R);r==="random"&&gv(m),m.max=w-I,m.min=I,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=En(t.amount||t.each)||0,i=i&&_<0?Cv(i):i}return _=(m[d]-m.min)/m.max||0,Jt(m.b+(i?i(_):_)*m.v)+m.u}},wd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Jt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Fr(i)?0:En(i))}},xv=function(e,t){var i=wn(e),r,s;return!i&&dr(e)&&(r=i=e.radius||lr,e.values?(e=Pi(e.values),(s=!Fr(e[0]))&&(r*=r)):e=wd(e.increment)),Ts(t,i?zt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=lr,u=0,f=e.length,d,h;f--;)s?(d=e[f].x-a,h=e[f].y-l,d=d*d+h*h):d=Math.abs(e[f]-a),d<c&&(c=d,u=f);return u=!r||c<=r?e[u]:o,s||u===o||Fr(o)?u:u+En(o)}:wd(e))},Sv=function(e,t,i,r){return Ts(wn(e)?!t:i===!0?!!(i=0):!r,function(){return wn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},yb=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},Mb=function(e,t){return function(i){return e(parseFloat(i))+(t||En(i))}},Eb=function(e,t,i){return Mv(e,t,0,1,i)},yv=function(e,t,i){return Ts(i,function(r){return e[~~t(r)]})},bb=function n(e,t,i){var r=t-e;return wn(e)?yv(e,n(0,e.length),t):Ts(i,function(s){return(r+(s-e)%r)%r+e})},Tb=function n(e,t,i){var r=t-e,s=r*2;return wn(e)?yv(e,n(0,e.length-1),t):Ts(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Cl=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?iv:Sd),i+=e.substr(t,r-t)+Sv(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},Mv=function(e,t,i,r,s){var o=t-e,a=r-i;return Ts(s,function(l){return i+((l-e)/o*a||0)})},Ab=function n(e,t,i,r){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var o=fn(e),a={},l,c,u,f,d;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(wn(e)&&!wn(t)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(n(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(d,~~g);return u[_](g-_)},i=t}else r||(e=fa(wn(e)?[]:{},e));if(!u){for(l in t)up.call(a,e,l,"get",t[l]);s=function(g){return pp(g,a)||(o?e.p:e)}}}return Ts(i,s)},Gm=function(e,t,i){var r=e.labels,s=lr,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},_i=function(e,t,i){var r=e.vars,s=r[t],o=Ut,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&fs.length&&pu(),a&&(Ut=a),u=l?s.apply(c,l):s.call(c),Ut=o,u},Va=function(e){return gs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!mn),e.progress()<1&&_i(e,"onInterrupt"),e},Vo,Ev=[],bv=function(e){if(e)if(e=!e.name&&e.default||e,rp()||e.headless){var t=e.name,i=zt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:wl,render:pp,add:up,kill:Vb,modifier:Hb,rawVars:0},o={targetTest:0,get:0,getSetter:hp,aliases:{},register:0};if(pa(),e!==r){if(ci[t])return;xi(r,xi(mu(e,s),o)),fa(r.prototype,fa(s,mu(e,o))),ci[r.prop=t]=r,e.targetTest&&(Vc.push(r),ap[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ov(t,r),e.register&&e.register(ei,r,Kn)}else Ev.push(e)},Tt=255,Ga={aqua:[0,Tt,Tt],lime:[0,Tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Tt],navy:[0,0,128],white:[Tt,Tt,Tt],olive:[128,128,0],yellow:[Tt,Tt,0],orange:[Tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Tt,0,0],pink:[Tt,192,203],cyan:[0,Tt,Tt],transparent:[Tt,Tt,Tt,0]},pf=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Tt+.5|0},Tv=function(e,t,i){var r=e?Fr(e)?[e>>16,e>>8&Tt,e&Tt]:0:Ga.black,s,o,a,l,c,u,f,d,h,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ga[e])r=Ga[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Tt,r&Tt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Tt,e&Tt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(Sd),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=pf(l+1/3,s,o),r[1]=pf(l,s,o),r[2]=pf(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(tv),i&&r.length<4&&(r[3]=1),r}else r=e.match(Sd)||Ga.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/Tt,o=r[1]/Tt,a=r[2]/Tt,f=Math.max(s,o,a),d=Math.min(s,o,a),u=(f+d)/2,f===d?l=c=0:(h=f-d,c=u>.5?h/(2-f-d):h/(f+d),l=f===s?(o-a)/h+(o<a?6:0):f===o?(a-s)/h+2:(s-o)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},Av=function(e){var t=[],i=[],r=-1;return e.split(ds).forEach(function(s){var o=s.match(Ho)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},Wm=function(e,t,i){var r="",s=(e+r).match(ds),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(d){return(d=Tv(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(u=Av(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(ds,"1").split(Ho),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(ds),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},ds=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ga)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),wb=/hsl[a]?\(/,wv=function(e){var t=e.join(" "),i;if(ds.lastIndex=0,ds.test(t))return i=wb.test(t),e[1]=Wm(e[1],i),e[0]=Wm(e[0],i,Av(e[1])),!0},Rl,di=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,f,d,h,g=function _(m){var p=n()-r,T=m===!0,E,v,R,C;if((p>e||p<0)&&(i+=p-t),r+=p,R=r-i,E=R-o,(E>0||T)&&(C=++f.frame,d=R-f.time*1e3,f.time=R=R/1e3,o+=E+(E>=s?4:s-E),v=1),T||(l=c(_)),v)for(h=0;h<a.length;h++)a[h](R,d,C,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){rv&&(!yd&&rp()&&(Qi=yd=window,sp=Qi.document||{},vi.gsap=ei,(Qi.gsapVersions||(Qi.gsapVersions=[])).push(ei.version),sv(hu||Qi.GreenSockGlobals||!Qi.gsap&&Qi||{}),Ev.forEach(bv)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Rl=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Rl=0,c=wl},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,T){var E=p?function(v,R,C,w){m(v,R,C,w),f.remove(E)}:m;return f.remove(m),a[T?"unshift":"push"](E),pa(),E},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&h>=p&&h--},_listeners:a},f}(),pa=function(){return!Rl&&di.wake()},ct={},Cb=/^[\d.\-M][\d.\-,\s]/,Rb=/["']/g,Pb=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(Rb,"").trim():+c,r=l.substr(a+1).trim();return t},Db=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},Lb=function(e){var t=(e+"").split("("),i=ct[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Pb(t[1])]:Db(e).split(",").map(uv)):ct._CE&&Cb.test(e)?ct._CE("",e):i},Cv=function(e){return function(t){return 1-e(1-t)}},Rv=function n(e,t){for(var i=e._first,r;i;)i instanceof kn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},eo=function(e,t){return e&&(zt(e)?e:ct[e]||Lb(e))||t},_o=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return Yn(e,function(a){ct[a]=vi[a]=s,ct[o=a.toLowerCase()]=i;for(var l in s)ct[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ct[a+"."+l]=s[l]}),s},Pv=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},mf=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/xd*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*ob((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Pv(a);return s=xd/s,l.config=function(c,u){return n(e,c,u)},l},_f=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:Pv(i);return r.config=function(s){return n(e,s)},r};Yn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;_o(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ct.Linear.easeNone=ct.none=ct.Linear.easeIn;_o("Elastic",mf("in"),mf("out"),mf());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};_o("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);_o("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});_o("Circ",function(n){return-(Q0(1-n*n)-1)});_o("Sine",function(n){return n===1?1:-sb(n*ib)+1});_o("Back",_f("in"),_f("out"),_f());ct.SteppedEase=ct.steps=vi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Tn;return function(a){return((r*Hl(0,o,a)|0)+s)*i}}};ua.ease=ct["quad.out"];Yn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return lp+=n+","+n+"Params,"});var Dv=function(e,t){this.id=rb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:lv,this.set=t?t.getSetter:hp},Pl=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ha(this,+t.duration,1,1),this.data=t.data,Ut&&(this._ctx=Ut,Ut.data.push(this)),Rl||di.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,ha(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(pa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Wu(this,i),!s._dp||s.parent||hv(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ir(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Tn||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),cv(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Hm(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Hm(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?da(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?_u(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-1e-8?0:this._rts,this.totalTime(Hl(-Math.abs(this._delay),this._tDur,s),r!==!1),Gu(this),hb(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(pa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Tn&&(this._tTime-=Tn)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&ir(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(qn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?_u(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=cb);var r=mn;return mn=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),mn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Vm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Vm(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Ti(this,i),qn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,qn(r)),this._dur||(this._zTime=-1e-8),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Tn)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=zt(i)?i:fv,a=function(){var c=r.then;r.then=null,zt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Va(this)},n}();xi(Pl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var kn=function(n){J0(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=qn(i.sortChildren),Ot&&ir(i.parent||Ot,Er(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&pv(Er(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return sl(0,arguments,this),this},t.from=function(r,s,o){return sl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return sl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,rl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Zt(r,s,Ti(this,o),1),this},t.call=function(r,s,o){return ir(this,Zt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Zt(r,o,Ti(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,rl(o).immediateRender=qn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,rl(a).immediateRender=qn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Jt(r),f=this._zTime<0!=r<0&&(this._initted||!c),d,h,g,_,m,p,T,E,v,R,C,w;if(this!==Ot&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),d=u,v=this._start,E=this._ts,p=!E,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(d=Jt(u%m),u===l?(_=this._repeat,d=c):(R=Jt(u/m),_=~~R,_&&_===R&&(d=c,_--),d>c&&(d=c)),R=da(this._tTime,m),!a&&this._tTime&&R!==_&&this._tTime-R*m-this._dur<=0&&(R=_),C&&_&1&&(d=c-d,w=1),_!==R&&!this._lock){var I=C&&R&1,S=I===(C&&_&1);if(_<R&&(I=!I),a=I?0:u%c?c:u,this._lock=1,this.render(a||(w?0:Jt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&_i(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=I?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Rv(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=gb(this,Jt(a),Jt(d)),T&&(u-=d-(d=T._start))),this._tTime=u,this._time=d,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&d&&!s&&!_&&(_i(this,"onStart"),this._tTime!==u))return this;if(d>=a&&r>=0)for(h=this._first;h;){if(g=h._next,(h._act||d>=h._start)&&h._ts&&T!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(d-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(d-h._start)*h._ts,s,o),d!==this._time||!this._ts&&!p){T=0,g&&(u+=this._zTime=-1e-8);break}}h=g}else{h=this._last;for(var x=r<0?r:d;h;){if(g=h._prev,(h._act||x<=h._end)&&h._ts&&T!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(x-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(x-h._start)*h._ts,s,o||mn&&(h._initted||h._startAt)),d!==this._time||!this._ts&&!p){T=0,g&&(u+=this._zTime=x?-1e-8:Tn);break}}h=g}}if(T&&!s&&(this.pause(),T.render(d>=a?0:-1e-8)._zTime=d>=a?1:-1,this._ts))return this._start=v,Gu(this),this.render(r,s,o);this._onUpdate&&!s&&_i(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&gs(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(_i(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Fr(s)||(s=Ti(this,s,r)),!(r instanceof Pl)){if(wn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(fn(r))return this.addLabel(r,s);if(zt(r))r=Zt.delayedCall(0,r);else return this}return this!==r?ir(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-1e8);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Zt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return fn(r)?this.removeLabel(r):zt(r)?this.killTweensOf(r):(r.parent===this&&Vu(this,r),r===this._recent&&(this._recent=this._last),Qs(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Jt(di.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Ti(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Zt.delayedCall(0,s||wl,o);return a.data="isPause",this._hasPause=1,ir(this,a,Ti(this,r))},t.removePause=function(r){var s=this._first;for(r=Ti(this,r);s;)s._start===r&&s.data==="isPause"&&gs(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)ss!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Pi(r),l=this._first,c=Fr(s),u;l;)l instanceof Zt?ub(l._targets,a)&&(c?(!ss||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Ti(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,h,g=Zt.to(o,xi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Tn,onStart:function(){if(o.pause(),!h){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&ha(g,m,0,1).render(g._time,!0,!0),h=1}u&&u.apply(g,f||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,xi({startAt:{time:Ti(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Gm(this,Ti(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Gm(this,Ti(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Tn)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Qs(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Qs(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=lr,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ir(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ha(o,o===Ot&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Ot._ts&&(cv(Ot,_u(r,Ot)),av=di.frame),di.frame>=km){km+=gi.autoSleep||120;var s=Ot._first;if((!s||!s._ts)&&gi.autoSleep&&di._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||di.sleep()}}},e}(Pl);xi(kn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ib=function(e,t,i,r,s,o,a){var l=new Kn(this._pt,e,t,0,1,Fv,null,s),c=0,u=0,f,d,h,g,_,m,p,T;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=Cl(r)),o&&(T=[i,r],o(T,e,t),i=T[0],r=T[1]),d=i.match(df)||[];f=df.exec(r);)g=f[0],_=r.substring(c,f.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),g!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Zo(m,g)-m:parseFloat(g)-m,m:h&&h<4?Math.round:0},c=df.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(nv.test(r)||p)&&(l.e=0),this._pt=l,l},up=function(e,t,i,r,s,o,a,l,c,u){zt(r)&&(r=r(s||0,e,o));var f=e[t],d=i!=="get"?i:zt(f)?c?e[t.indexOf("set")||!zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,h=zt(f)?c?Bb:Nv:dp,g;if(fn(r)&&(~r.indexOf("random(")&&(r=Cl(r)),r.charAt(1)==="="&&(g=Zo(d,r)+(En(d)||0),(g||g===0)&&(r=g))),!u||d!==r||Cd)return!isNaN(d*r)&&r!==""?(g=new Kn(this._pt,e,t,+d||0,r-(d||0),typeof f=="boolean"?zb:Ov,0,h),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&op(t,r),Ib.call(this,e,t,d,r,h,l||gi.stringFilter,c))},Ub=function(e,t,i,r,s){if(zt(e)&&(e=ol(e,s,t,i,r)),!dr(e)||e.style&&e.nodeType||wn(e)||ev(e))return fn(e)?ol(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=ol(e[a],s,t,i,r);return o},Lv=function(e,t,i,r,s,o){var a,l,c,u;if(ci[e]&&(a=new ci[e]).init(s,a.rawVars?t[e]:Ub(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new Kn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Vo))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},ss,Cd,fp=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,d=r.keyframes,h=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,T=p&&p.data==="nested"?p.vars.targets:m,E=e._overwrite==="auto"&&!np,v=e.timeline,R,C,w,I,S,x,U,N,z,X,ee,W,Y;if(v&&(!d||!s)&&(s="none"),e._ease=eo(s,ua.ease),e._yEase=f?Cv(eo(f===!0?s:f,ua.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!v&&!!r.runBackwards,!v||d&&!r.stagger){if(N=m[0]?Js(m[0]).harness:0,W=N&&r[N.prop],R=mu(r,ap),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!h?_.render(-1,!0):_.revert(u&&g?Hc:lb),_._lazy=0),o){if(gs(e._startAt=Zt.set(m,xi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&qn(l),startAt:null,delay:0,onUpdate:c&&function(){return _i(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(mn||!a&&!h)&&e._startAt.revert(Hc),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),w=xi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&qn(l),immediateRender:a,stagger:0,parent:p},R),W&&(w[N.prop]=W),gs(e._startAt=Zt.set(m,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(mn?e._startAt.revert(Hc):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Tn,Tn);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&qn(l)||l&&!g,C=0;C<m.length;C++){if(S=m[C],U=S._gsap||cp(m)[C]._gsap,e._ptLookup[C]=X={},Md[U.id]&&fs.length&&pu(),ee=T===m?C:T.indexOf(S),N&&(z=new N).init(S,W||R,e,ee,T)!==!1&&(e._pt=I=new Kn(e._pt,S,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(V){X[V]=I}),z.priority&&(x=1)),!N||W)for(w in R)ci[w]&&(z=Lv(w,R,e,ee,S,T))?z.priority&&(x=1):X[w]=I=up.call(e,S,w,"get",R[w],ee,T,0,r.stringFilter);e._op&&e._op[C]&&e.kill(S,e._op[C]),E&&e._pt&&(ss=e,Ot.killTweensOf(S,X,e.globalTime(t)),Y=!e.parent,ss=0),e._pt&&l&&(Md[U.id]=1)}x&&Bv(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,d&&t<=0&&v.render(lr,!0,!0)},Nb=function(e,t,i,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,d,h;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(u=d[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Cd=1,e.vars[t]="+=0",fp(e,a),Cd=0,l?Al(t+" not eligible for reset"):1;c.push(u)}for(h=c.length;h--;)f=c[h],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,f.e&&(f.e=Wt(i)+En(f.e)),f.b&&(f.b=u.s+En(f.b))},Ob=function(e,t){var i=e[0]?Js(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=fa({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Fb=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(wn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ol=function(e,t,i,r,s){return zt(e)?e.call(t,i,r,s):fn(e)&&~e.indexOf("random(")?Cl(e):e},Iv=lp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Uv={};Yn(Iv+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Uv[n]=1});var Zt=function(n){J0(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:rl(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,h=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,T=r.parent||Ot,E=(wn(i)||ev(i)?Fr(i[0]):"length"in r)?[i]:Pi(i),v,R,C,w,I,S,x,U;if(a._targets=E.length?cp(E):Al("GSAP target "+i+" not found. https://gsap.com",!gi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,g||d||Jl(c)||Jl(u)){if(r=a.vars,v=a.timeline=new kn({data:"nested",defaults:_||{},targets:T&&T.data==="nested"?T.vars.targets:E}),v.kill(),v.parent=v._dp=Er(a),v._start=0,d||Jl(c)||Jl(u)){if(w=E.length,x=d&&vv(d),dr(d))for(I in d)~Iv.indexOf(I)&&(U||(U={}),U[I]=d[I]);for(R=0;R<w;R++)C=mu(r,Uv),C.stagger=0,p&&(C.yoyoEase=p),U&&fa(C,U),S=E[R],C.duration=+ol(c,Er(a),R,S,E),C.delay=(+ol(u,Er(a),R,S,E)||0)-a._delay,!d&&w===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),v.to(S,C,x?x(R,S,E):0),v._ease=ct.none;v.duration()?c=u=0:a.timeline=0}else if(g){rl(xi(v.vars.defaults,{ease:"none"})),v._ease=eo(g.ease||r.ease||"none");var N=0,z,X,ee;if(wn(g))g.forEach(function(W){return v.to(E,W,">")}),v.duration();else{C={};for(I in g)I==="ease"||I==="easeEach"||Fb(I,g[I],C,g.easeEach);for(I in C)for(z=C[I].sort(function(W,Y){return W.t-Y.t}),N=0,R=0;R<z.length;R++)X=z[R],ee={ease:X.e,duration:(X.t-(R?z[R-1].t:0))/100*c},ee[I]=X.v,v.to(E,ee,N),N+=ee.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return h===!0&&!np&&(ss=Er(a),Ot.killTweensOf(E),ss=0),ir(T,Er(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!g&&a._start===Jt(T._time)&&qn(f)&&pb(Er(a))&&T.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-u)||0)),m&&pv(Er(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-Tn&&!u?l:r<Tn?0:r,d,h,g,_,m,p,T,E,v;if(!c)_b(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=f,E=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(d=Jt(f%_),f===l?(g=this._repeat,d=c):(m=Jt(f/_),g=~~m,g&&g===m?(d=c,g--):d>c&&(d=c)),p=this._yoyo&&g&1,p&&(v=this._yEase,d=c-d),m=da(this._tTime,_),d===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(E&&this._yEase&&Rv(E,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(Jt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(mv(this,u?r:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=T=(v||this._ease)(d/c),this._from&&(this.ratio=T=1-T),d&&!a&&!s&&!g&&(_i(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(T,h.d),h=h._next;E&&E.render(r<0?r:E._dur*E._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Ed(this,r,s,o),_i(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&_i(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Ed(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&gs(this,1),!s&&!(u&&!a)&&(f||a||p)&&(_i(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Rl||di.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||fp(this,c),u=this._ease(c/this._dur),Nb(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(Wu(this,0),this.parent||dv(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Va(this):this.scrollTrigger&&this.scrollTrigger.kill(!!mn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ss&&ss.vars.overwrite!==!0)._first||Va(this),this.parent&&o!==this.timeline.totalDuration()&&ha(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Pi(r):a,c=this._ptLookup,u=this._pt,f,d,h,g,_,m,p;if((!s||s==="all")&&db(a,l))return s==="all"&&(this._pt=0),Va(this);for(f=this._op=this._op||[],s!=="all"&&(fn(s)&&(_={},Yn(s,function(T){return _[T]=1}),s=_),s=Ob(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(f[p]=s,g=d,h={}):(h=f[p]=f[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Vu(this,m,"_pt"),delete d[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&u&&Va(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return sl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return sl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Ot.killTweensOf(r,s,o)},e}(Pl);xi(Zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Yn("staggerTo,staggerFrom,staggerFromTo",function(n){Zt[n]=function(){var e=new kn,t=Td.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var dp=function(e,t,i){return e[t]=i},Nv=function(e,t,i){return e[t](i)},Bb=function(e,t,i,r){return e[t](r.fp,i)},kb=function(e,t,i){return e.setAttribute(t,i)},hp=function(e,t){return zt(e[t])?Nv:ip(e[t])&&e.setAttribute?kb:dp},Ov=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},zb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Fv=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},pp=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Hb=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},Vb=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Vu(this,t,"_pt"):t.dep||(i=1),t=r;return!i},Gb=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},Bv=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},Kn=function(){function n(t,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||Ov,this.d=l||this,this.set=c||dp,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=Gb,this.m=i,this.mt=s,this.tween=r},n}();Yn(lp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return ap[n]=1});vi.TweenMax=vi.TweenLite=Zt;vi.TimelineLite=vi.TimelineMax=kn;Ot=new kn({sortChildren:!1,defaults:ua,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});gi.stringFilter=wv;var to=[],Gc={},Wb=[],Xm=0,Xb=0,gf=function(e){return(Gc[e]||Wb).map(function(t){return t()})},Rd=function(){var e=Date.now(),t=[];e-Xm>2&&(gf("matchMediaInit"),to.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=Qi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),gf("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Xm=e,gf("matchMedia"))},kv=function(){function n(t,i){this.selector=i&&Ad(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Xb++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){zt(i)&&(s=r,r=i,i=zt);var o=this,a=function(){var c=Ut,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Ad(s)),Ut=o,f=r.apply(o,arguments),zt(f)&&o._r.push(f),Ut=c,o.selector=u,o.isReverted=!1,f};return o.last=a,i===zt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Ut;Ut=null,i(this),Ut=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Zt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof kn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Zt)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=to.length;o--;)to[o].id===this.id&&to.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),$b=function(){function n(t){this.contexts=[],this.scope=t,Ut&&Ut.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){dr(i)||(i={matches:i});var o=new kv(0,s||this.scope),a=o.conditions={},l,c,u;Ut&&!o.selector&&(o.selector=Ut.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=Qi.matchMedia(i[c]),l&&(to.indexOf(o)<0&&to.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Rd):l.addEventListener("change",Rd)));return u&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),gu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return bv(r)})},timeline:function(e){return new kn(e)},getTweensOf:function(e,t){return Ot.getTweensOf(e,t)},getProperty:function(e,t,i,r){fn(e)&&(e=Pi(e)[0]);var s=Js(e||{}).get,o=i?fv:uv;return i==="native"&&(i=""),e&&(t?o((ci[t]&&ci[t].get||s)(e,t,i,r)):function(a,l,c){return o((ci[a]&&ci[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=Pi(e),e.length>1){var r=e.map(function(u){return ei.quickSetter(u,t,i)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=ci[t],a=Js(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;Vo._pt=0,f.init(e,i?u+i:u,Vo,0,[e]),f.render(1,f),Vo._pt&&pp(1,Vo)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,s=ei.to(e,xi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=eo(e.ease,ua.ease)),zm(ua,e||{})},config:function(e){return zm(gi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!ci[a]&&!vi[a]&&Al(t+" effect requires "+a+" plugin.")}),hf[t]=function(a,l,c){return i(Pi(a),xi(l||{},s),c)},o&&(kn.prototype[t]=function(a,l,c){return this.add(hf[t](a,dr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ct[e]=eo(t)},parseEase:function(e,t){return arguments.length?eo(e,t):ct},getById:function(e){return Ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new kn(e),r,s;for(i.smoothChildTiming=qn(e.smoothChildTiming),Ot.remove(i),i._dp=0,i._time=i._tTime=Ot._time,r=Ot._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Zt&&r.vars.onComplete===r._targets[0]))&&ir(i,r,r._start-r._delay),r=s;return ir(Ot,i,0),i},context:function(e,t){return e?new kv(e,t):Ut},matchMedia:function(e){return new $b(e)},matchMediaRefresh:function(){return to.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Rd()},addEventListener:function(e,t){var i=Gc[e]||(Gc[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Gc[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:bb,wrapYoyo:Tb,distribute:vv,random:Sv,snap:xv,normalize:Eb,getUnit:En,clamp:xb,splitColor:Tv,toArray:Pi,selector:Ad,mapRange:Mv,pipe:yb,unitize:Mb,interpolate:Ab,shuffle:gv},install:sv,effects:hf,ticker:di,updateRoot:kn.updateRoot,plugins:ci,globalTimeline:Ot,core:{PropTween:Kn,globals:ov,Tween:Zt,Timeline:kn,Animation:Pl,getCache:Js,_removeLinkedListItem:Vu,reverting:function(){return mn},context:function(e){return e&&Ut&&(Ut.data.push(e),e._ctx=Ut),Ut},suppressOverwrites:function(e){return np=e}}};Yn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return gu[n]=Zt[n]});di.add(kn.updateRoot);Vo=gu.to({},{duration:0});var qb=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},Yb=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=qb(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},vf=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(fn(s)&&(l={},Yn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Yb(a,s)}}}},ei=gu.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)mn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},vf("roundProps",wd),vf("modifiers"),vf("snap",xv))||gu;Zt.version=kn.version=ei.version="3.12.7";rv=1;rp()&&pa();ct.Power0;ct.Power1;ct.Power2;ct.Power3;ct.Power4;ct.Linear;ct.Quad;ct.Cubic;ct.Quart;ct.Quint;ct.Strong;ct.Elastic;ct.Back;ct.SteppedEase;ct.Bounce;ct.Sine;ct.Expo;ct.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var $m,os,Jo,mp,qs,qm,_p,Kb=function(){return typeof window<"u"},Br={},ks=180/Math.PI,Qo=Math.PI/180,xo=Math.atan2,Ym=1e8,gp=/([A-Z])/g,jb=/(left|right|width|margin|padding|x)/i,Zb=/[\s,\(]\S/,rr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Pd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Jb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Qb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},eT=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},zv=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Hv=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},tT=function(e,t,i){return e.style[t]=i},nT=function(e,t,i){return e.style.setProperty(t,i)},iT=function(e,t,i){return e._gsap[t]=i},rT=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},sT=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},oT=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Ft="transform",jn=Ft+"Origin",aT=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Br&&s){if(this.tfm=this.tfm||{},e!=="transform")e=rr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=br(r,a)}):this.tfm[e]=o.x?o[e]:br(r,e),e===jn&&(this.tfm.zOrigin=o.zOrigin);else return rr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Ft)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(jn,t,"")),e=Ft}(s||t)&&this.props.push(e,t,s[e])},Vv=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},lT=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(gp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=_p(),(!s||!s.isStart)&&!i[Ft]&&(Vv(i),r.zOrigin&&i[jn]&&(i[jn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Gv=function(e,t){var i={target:e,props:[],revert:lT,save:aT};return e._gsap||ei.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},Wv,Dd=function(e,t){var i=os.createElementNS?os.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):os.createElement(e);return i&&i.style?i:os.createElement(e)},cr=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(gp,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,ma(t)||t,1)||""},Km="O,Moz,ms,Ms,Webkit".split(","),ma=function(e,t,i){var r=t||qs,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Km[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Km[o]:"")+e},Ld=function(){Kb()&&window.document&&($m=window,os=$m.document,Jo=os.documentElement,qs=Dd("div")||{style:{}},Dd("div"),Ft=ma(Ft),jn=Ft+"Origin",qs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Wv=!!ma("perspective"),_p=ei.core.reverting,mp=1)},jm=function(e){var t=e.ownerSVGElement,i=Dd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Jo.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Jo.removeChild(i),s},Zm=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Xv=function(e){var t,i;try{t=e.getBBox()}catch{t=jm(e),i=1}return t&&(t.width||t.height)||i||(t=jm(e)),t&&!t.width&&!t.x&&!t.y?{x:+Zm(e,["x","cx","x1"])||0,y:+Zm(e,["y","cy","y1"])||0,width:0,height:0}:t},$v=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Xv(e))},lo=function(e,t){if(t){var i=e.style,r;t in Br&&t!==jn&&(t=Ft),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(gp,"-$1").toLowerCase())):i.removeAttribute(t)}},as=function(e,t,i,r,s,o){var a=new Kn(e._pt,t,i,0,1,o?Hv:zv);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},Jm={deg:1,rad:1,turn:1},cT={grid:1,flex:1},vs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=qs.style,l=jb.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",h=r==="%",g,_,m,p;if(r===o||!s||Jm[r]||Jm[o])return s;if(o!=="px"&&!d&&(s=n(e,t,i,"px")),p=e.getCTM&&$v(e),(h||o==="%")&&(Br[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Wt(h?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(d?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===os||!_.appendChild)&&(_=os.body),m=_._gsap,m&&h&&m.width&&l&&m.time===di.time&&!m.uncache)return Wt(s/m.width*f);if(h&&(t==="height"||t==="width")){var T=e.style[t];e.style[t]=f+r,g=e[u],T?e.style[t]=T:lo(e,t)}else(h||o==="%")&&!cT[cr(_,"display")]&&(a.position=cr(e,"position")),_===e&&(a.position="static"),_.appendChild(qs),g=qs[u],_.removeChild(qs),a.position="absolute";return l&&h&&(m=Js(_),m.time=di.time,m.width=_[u]),Wt(d?g*s/f:g&&s?f/g*s:0)},br=function(e,t,i,r){var s;return mp||Ld(),t in rr&&t!=="transform"&&(t=rr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Br[t]&&t!=="transform"?(s=Ll(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:xu(cr(e,jn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=vu[t]&&vu[t](e,t,i)||cr(e,t)||lv(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?vs(e,t,s,i)+i:s},uT=function(e,t,i,r){if(!i||i==="none"){var s=ma(t,e,1),o=s&&cr(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=cr(e,"borderTopColor"))}var a=new Kn(this._pt,e.style,t,0,1,Fv),l=0,c=0,u,f,d,h,g,_,m,p,T,E,v,R;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(_=e.style[t],e.style[t]=r,r=cr(e,t)||r,_?e.style[t]=_:lo(e,t)),u=[i,r],wv(u),i=u[0],r=u[1],d=i.match(Ho)||[],R=r.match(Ho)||[],R.length){for(;f=Ho.exec(r);)m=f[0],T=r.substring(l,f.index),g?g=(g+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(h=parseFloat(_)||0,v=_.substr((h+"").length),m.charAt(1)==="="&&(m=Zo(h,m)+v),p=parseFloat(m),E=m.substr((p+"").length),l=Ho.lastIndex-E.length,E||(E=E||gi.units[t]||v,l===r.length&&(r+=E,a.e+=E)),v!==E&&(h=vs(e,t,_,E)||0),a._pt={_next:a._pt,p:T||c===1?T:",",s:h,c:p-h,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Hv:zv;return nv.test(r)&&(a.e=0),this._pt=a,a},Qm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},fT=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Qm[i]||i,t[1]=Qm[r]||r,t.join(" ")},dT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Br[a]&&(l=1,a=a==="transformOrigin"?jn:Ft),lo(i,a);l&&(lo(i,Ft),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ll(i,1),o.uncache=1,Vv(r)))}},vu={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Kn(e._pt,t,i,0,0,dT);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Dl=[1,0,0,1,0,0],qv={},Yv=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},e_=function(e){var t=cr(e,Ft);return Yv(t)?Dl:t.substr(7).match(tv).map(Wt)},vp=function(e,t){var i=e._gsap||Js(e),r=e.style,s=e_(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Dl:s):(s===Dl&&!e.offsetParent&&e!==Jo&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Jo.appendChild(e)),s=e_(e),l?r.display=l:lo(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Jo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Id=function(e,t,i,r,s,o){var a=e._gsap,l=s||vp(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,h=l[0],g=l[1],_=l[2],m=l[3],p=l[4],T=l[5],E=t.split(" "),v=parseFloat(E[0])||0,R=parseFloat(E[1])||0,C,w,I,S;i?l!==Dl&&(w=h*m-g*_)&&(I=v*(m/w)+R*(-_/w)+(_*T-m*p)/w,S=v*(-g/w)+R*(h/w)-(h*T-g*p)/w,v=I,R=S):(C=Xv(e),v=C.x+(~E[0].indexOf("%")?v/100*C.width:v),R=C.y+(~(E[1]||E[0]).indexOf("%")?R/100*C.height:R)),r||r!==!1&&a.smooth?(p=v-c,T=R-u,a.xOffset=f+(p*h+T*_)-p,a.yOffset=d+(p*g+T*m)-T):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=R,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[jn]="0px 0px",o&&(as(o,a,"xOrigin",c,v),as(o,a,"yOrigin",u,R),as(o,a,"xOffset",f,a.xOffset),as(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+R)},Ll=function(e,t){var i=e._gsap||new Dv(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=cr(e,jn)||"0",u,f,d,h,g,_,m,p,T,E,v,R,C,w,I,S,x,U,N,z,X,ee,W,Y,V,de,O,Se,De,Ke,te,_e;return u=f=d=_=m=p=T=E=v=0,h=g=1,i.svg=!!(e.getCTM&&$v(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ft]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ft]!=="none"?l[Ft]:"")),r.scale=r.rotate=r.translate="none"),w=vp(e,i.svg),i.svg&&(i.uncache?(V=e.getBBox(),c=i.xOrigin-V.x+"px "+(i.yOrigin-V.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),Id(e,Y||c,!!Y||i.originIsAbsolute,i.smooth!==!1,w)),R=i.xOrigin||0,C=i.yOrigin||0,w!==Dl&&(U=w[0],N=w[1],z=w[2],X=w[3],u=ee=w[4],f=W=w[5],w.length===6?(h=Math.sqrt(U*U+N*N),g=Math.sqrt(X*X+z*z),_=U||N?xo(N,U)*ks:0,T=z||X?xo(z,X)*ks+_:0,T&&(g*=Math.abs(Math.cos(T*Qo))),i.svg&&(u-=R-(R*U+C*z),f-=C-(R*N+C*X))):(_e=w[6],Ke=w[7],O=w[8],Se=w[9],De=w[10],te=w[11],u=w[12],f=w[13],d=w[14],I=xo(_e,De),m=I*ks,I&&(S=Math.cos(-I),x=Math.sin(-I),Y=ee*S+O*x,V=W*S+Se*x,de=_e*S+De*x,O=ee*-x+O*S,Se=W*-x+Se*S,De=_e*-x+De*S,te=Ke*-x+te*S,ee=Y,W=V,_e=de),I=xo(-z,De),p=I*ks,I&&(S=Math.cos(-I),x=Math.sin(-I),Y=U*S-O*x,V=N*S-Se*x,de=z*S-De*x,te=X*x+te*S,U=Y,N=V,z=de),I=xo(N,U),_=I*ks,I&&(S=Math.cos(I),x=Math.sin(I),Y=U*S+N*x,V=ee*S+W*x,N=N*S-U*x,W=W*S-ee*x,U=Y,ee=V),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),h=Wt(Math.sqrt(U*U+N*N+z*z)),g=Wt(Math.sqrt(W*W+_e*_e)),I=xo(ee,W),T=Math.abs(I)>2e-4?I*ks:0,v=te?1/(te<0?-te:te):0),i.svg&&(Y=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Yv(cr(e,Ft)),Y&&e.setAttribute("transform",Y))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(h*=-1,T+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,T+=T<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=d+o,i.scaleX=Wt(h),i.scaleY=Wt(g),i.rotation=Wt(_)+a,i.rotationX=Wt(m)+a,i.rotationY=Wt(p)+a,i.skewX=T+a,i.skewY=E+a,i.transformPerspective=v+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[jn]=xu(c)),i.xOffset=i.yOffset=0,i.force3D=gi.force3D,i.renderTransform=i.svg?pT:Wv?Kv:hT,i.uncache=0,i},xu=function(e){return(e=e.split(" "))[0]+" "+e[1]},xf=function(e,t,i){var r=En(t);return Wt(parseFloat(t)+parseFloat(vs(e,"x",i+"px",r)))+r},hT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Kv(e,t)},Ps="0deg",La="0px",Ds=") ",Kv=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,d=i.skewX,h=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,p=i.force3D,T=i.target,E=i.zOrigin,v="",R=p==="auto"&&e&&e!==1||p===!0;if(E&&(f!==Ps||u!==Ps)){var C=parseFloat(u)*Qo,w=Math.sin(C),I=Math.cos(C),S;C=parseFloat(f)*Qo,S=Math.cos(C),o=xf(T,o,w*S*-E),a=xf(T,a,-Math.sin(C)*-E),l=xf(T,l,I*S*-E+E)}m!==La&&(v+="perspective("+m+Ds),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(R||o!==La||a!==La||l!==La)&&(v+=l!==La||R?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ds),c!==Ps&&(v+="rotate("+c+Ds),u!==Ps&&(v+="rotateY("+u+Ds),f!==Ps&&(v+="rotateX("+f+Ds),(d!==Ps||h!==Ps)&&(v+="skew("+d+", "+h+Ds),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Ds),T.style[Ft]=v||"translate(0, 0)"},pT=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,d=i.scaleY,h=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,p=i.yOffset,T=i.forceCSS,E=parseFloat(o),v=parseFloat(a),R,C,w,I,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Qo,c*=Qo,R=Math.cos(l)*f,C=Math.sin(l)*f,w=Math.sin(l-c)*-d,I=Math.cos(l-c)*d,c&&(u*=Qo,S=Math.tan(c-u),S=Math.sqrt(1+S*S),w*=S,I*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),R*=S,C*=S)),R=Wt(R),C=Wt(C),w=Wt(w),I=Wt(I)):(R=f,I=d,C=w=0),(E&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(E=vs(h,"x",o,"px"),v=vs(h,"y",a,"px")),(g||_||m||p)&&(E=Wt(E+g-(g*R+_*w)+m),v=Wt(v+_-(g*C+_*I)+p)),(r||s)&&(S=h.getBBox(),E=Wt(E+r/100*S.width),v=Wt(v+s/100*S.height)),S="matrix("+R+","+C+","+w+","+I+","+E+","+v+")",h.setAttribute("transform",S),T&&(h.style[Ft]=S)},mT=function(e,t,i,r,s){var o=360,a=fn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ks:1),c=l-r,u=r+c+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-360)),f==="cw"&&c<0?c=(c+o*Ym)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Ym)%o-~~(c/o)*o)),e._pt=d=new Kn(e._pt,t,i,r,c,Jb),d.e=u,d.u="deg",e._props.push(i),d},t_=function(e,t){for(var i in t)e[i]=t[i];return e},_T=function(e,t,i){var r=t_({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,f,d,h,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[Ft]=t,a=Ll(i,1),lo(i,Ft),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Ft],o[Ft]=t,a=Ll(i,1),o[Ft]=c);for(l in Br)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(h=En(c),g=En(u),f=h!==g?vs(i,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new Kn(e._pt,a,l,f,d-f,Pd),e._pt.u=g||0,e._props.push(l));t_(a,r)};Yn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});vu[e>1?"border"+n:n]=function(a,l,c,u,f){var d,h;if(arguments.length<4)return d=o.map(function(g){return br(a,g,c)}),h=d.join(" "),h.split(d[0]).length===5?d[0]:h;d=(u+"").split(" "),h={},o.forEach(function(g,_){return h[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,h,f)}});var jv={name:"css",register:Ld,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,f,d,h,g,_,m,p,T,E,v,R,C,w,I;mp||Ld(),this.styles=this.styles||Gv(e),I=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(ci[_]&&Lv(_,t,i,r,e,s)))){if(h=typeof u,g=vu[_],h==="function"&&(u=u.call(i,r,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=Cl(u)),g)g(this,e,_,u,i)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",ds.lastIndex=0,ds.test(c)||(m=En(c),p=En(u)),p?m!==p&&(c=vs(e,_,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),I.push(_,0,a[_]);else if(h!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],fn(c)&&~c.indexOf("random(")&&(c=Cl(c)),En(c+"")||c==="auto"||(c+=gi.units[_]||En(br(e,_))||""),(c+"").charAt(1)==="="&&(c=br(e,_))):c=br(e,_),d=parseFloat(c),T=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),T&&(u=u.substr(2)),f=parseFloat(u),_ in rr&&(_==="autoAlpha"&&(d===1&&br(e,"visibility")==="hidden"&&f&&(d=0),I.push("visibility",0,a.visibility),as(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=rr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in Br,E){if(this.styles.save(_),v||(R=e._gsap,R.renderTransform&&!t.parseTransform||Ll(e,t.parseTransform),C=t.smoothOrigin!==!1&&R.smooth,v=this._pt=new Kn(this._pt,a,Ft,0,1,R.renderTransform,R,0,-1),v.dep=1),_==="scale")this._pt=new Kn(this._pt,R,"scaleY",R.scaleY,(T?Zo(R.scaleY,T+f):f)-R.scaleY||0,Pd),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){I.push(jn,0,a[jn]),u=fT(u),R.svg?Id(e,u,0,C,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==R.zOrigin&&as(this,R,"zOrigin",R.zOrigin,p),as(this,a,_,xu(c),xu(u)));continue}else if(_==="svgOrigin"){Id(e,u,1,C,0,this);continue}else if(_ in qv){mT(this,R,_,d,T?Zo(d,T+u):u);continue}else if(_==="smoothOrigin"){as(this,R,"smooth",R.smooth,u);continue}else if(_==="force3D"){R[_]=u;continue}else if(_==="transform"){_T(this,u,e);continue}}else _ in a||(_=ma(_)||_);if(E||(f||f===0)&&(d||d===0)&&!Zb.test(u)&&_ in a)m=(c+"").substr((d+"").length),f||(f=0),p=En(u)||(_ in gi.units?gi.units[_]:m),m!==p&&(d=vs(e,_,c,p)),this._pt=new Kn(this._pt,E?R:a,_,d,(T?Zo(d,T+f):f)-d,!E&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?eT:Pd),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Qb);else if(_ in a)uT.call(this,e,_,c,T?T+u:u);else if(_ in e)this.add(e,_,c||e[_],T?T+u:u,r,s);else if(_!=="parseTransform"){op(_,u);continue}E||(_ in a?I.push(_,0,a[_]):typeof e[_]=="function"?I.push(_,2,e[_]()):I.push(_,1,c||e[_])),o.push(_)}}w&&Bv(this)},render:function(e,t){if(t.tween._time||!_p())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:br,aliases:rr,getSetter:function(e,t,i){var r=rr[t];return r&&r.indexOf(",")<0&&(t=r),t in Br&&t!==jn&&(e._gsap.x||br(e,"x"))?i&&qm===i?t==="scale"?rT:iT:(qm=i||{})&&(t==="scale"?sT:oT):e.style&&!ip(e.style[t])?tT:~t.indexOf("-")?nT:hp(e,t)},core:{_removeProperty:lo,_getMatrix:vp}};ei.utils.checkPrefix=ma;ei.core.getStyleSaver=Gv;(function(n,e,t,i){var r=Yn(n+","+e+","+t,function(s){Br[s]=1});Yn(e,function(s){gi.units[s]="deg",qv[s]=1}),rr[r[13]]=n+","+e,Yn(i,function(s){var o=s.split(":");rr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Yn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){gi.units[n]="px"});ei.registerPlugin(jv);var Di=ei.registerPlugin(jv)||ei;Di.core.Tween;const gT={name:"HeroSection",setup(){const n=()=>{document.querySelector("#features").scrollIntoView({behavior:"smooth"})};return bs(()=>{Di.timeline().from(".hero-title",{y:50,opacity:0,duration:1,ease:"power3.out"}).from(".hero-description",{y:30,opacity:0,duration:.8,ease:"power3.out"},"-=0.5").from(".hero-cta",{y:30,opacity:0,duration:.8,ease:"power3.out"},"-=0.5").from(".stat-item",{y:20,opacity:0,duration:.6,stagger:.2,ease:"power3.out"},"-=0.3").from(".floating-shape",{scale:0,opacity:0,duration:1,stagger:.2,ease:"elastic.out(1, 0.5)"},"-=1")}),{scrollToFeatures:n}}},vT={class:"hero"},xT={class:"hero-content"},ST={class:"hero-cta"};function yT(n,e,t,i,r,s){const o=ui("router-link");return Nt(),Gt("section",vT,[le("div",xT,[e[3]||(e[3]=le("h1",{class:"hero-title"},[le("span",{class:"gradient-text"},"احترف التصميم"),le("br"),Hn(" مع كانفا في 2024 ")],-1)),e[4]||(e[4]=le("p",{class:"hero-description"}," تعلم أسرار التصميم الاحترافي على منصة كانفا مع أفضل الخبراء في المجال ",-1)),le("div",ST,[lt(o,{to:"/register",class:"primary-button"},{default:pi(()=>e[1]||(e[1]=[Hn(" ابدأ رحلتك الآن "),le("i",{class:"fas fa-arrow-left"},null,-1)])),_:1}),le("button",{class:"secondary-button",onClick:e[0]||(e[0]=(...a)=>i.scrollToFeatures&&i.scrollToFeatures(...a))},e[2]||(e[2]=[le("i",{class:"fas fa-play"},null,-1),Hn(" شاهد المميزات ")]))]),e[5]||(e[5]=yl('<div class="hero-stats" data-v-395dbf5d><div class="stat-item" data-v-395dbf5d><i class="fas fa-users" data-v-395dbf5d></i><span class="stat-number" data-v-395dbf5d>1000+</span><span class="stat-label" data-v-395dbf5d>متدرب</span></div><div class="stat-item" data-v-395dbf5d><i class="fas fa-video" data-v-395dbf5d></i><span class="stat-number" data-v-395dbf5d>50+</span><span class="stat-label" data-v-395dbf5d>درس</span></div><div class="stat-item" data-v-395dbf5d><i class="fas fa-certificate" data-v-395dbf5d></i><span class="stat-number" data-v-395dbf5d>100%</span><span class="stat-label" data-v-395dbf5d>نسبة الرضا</span></div></div>',1))]),e[6]||(e[6]=le("div",{class:"hero-3d"},[le("div",{class:"floating-shape shape-1"}),le("div",{class:"floating-shape shape-2"}),le("div",{class:"floating-shape shape-3"})],-1))])}const MT=hr(gT,[["render",yT],["__scopeId","data-v-395dbf5d"]]),ET={name:"FeaturesSection",setup(){return{features:Ii([{icon:"fas fa-graduation-cap",title:"تعلم احترافي",description:"محتوى تعليمي منظم ومتدرج في الصعوبة يناسب جميع المستويات"},{icon:"fas fa-clock",title:"تعلم ذاتي",description:"ادرس في الوقت المناسب لك وبالسرعة التي تناسبك"},{icon:"fas fa-tools",title:"تطبيق عملي",description:"مشاريع عملية ومهام تطبيقية لترسيخ المهارات المكتسبة"},{icon:"fas fa-comments",title:"دعم مستمر",description:"تواصل مباشر مع المدرب وزملائك في المجتمع التعليمي"},{icon:"fas fa-certificate",title:"شهادة معتمدة",description:"احصل على شهادة إتمام الكورس بعد إنهاء جميع المتطلبات"},{icon:"fas fa-infinity",title:"وصول دائم",description:"وصول مدى الحياة للمحتوى والتحديثات المستقبلية"}]),onVisibilityChange:(t,i)=>{t&&Di.from(i.target,{y:50,opacity:0,duration:.8,ease:"power3.out"})}}}},bT={id:"features",class:"features"},TT={class:"features-grid"},AT={class:"feature-icon"};function wT(n,e,t,i,r,s){const o=s0("observe-visibility");return Nt(),Gt("section",bT,[e[0]||(e[0]=le("h2",{class:"section-title"},[le("span",{class:"gradient-text"},"مميزات"),Hn(" الكورس ")],-1)),le("div",TT,[(Nt(!0),Gt(Mn,null,za(i.features,(a,l)=>ld((Nt(),Gt("div",{key:l,class:"feature-card"},[le("div",AT,[le("i",{class:Wi(a.icon)},null,2)]),le("h3",null,Fn(a.title),1),le("p",null,Fn(a.description),1)])),[[o,i.onVisibilityChange]])),128))])])}const CT=hr(ET,[["render",wT],["__scopeId","data-v-6e3f4e75"]]),RT={name:"CoursePathSection",setup(){const n=Ii(0),e=Ii(null),t=Ii([{title:"أساسيات التصميم على كانفا",duration:"4 أسابيع",description:"تعلم الأساسيات وأدوات كانفا وكيفية استخدامها بكفاءة",skills:[{name:"واجهة كانفا",icon:"fas fa-desktop"},{name:"الأدوات الأساسية",icon:"fas fa-tools"},{name:"تنسيق العناصر",icon:"fas fa-object-group"},{name:"العمل مع القوالب",icon:"fas fa-copy"}],projects:[{name:"تصميم الشعار الشخصي",description:"إنشاء هوية بصرية خاصة بك",icon:"fas fa-paint-brush"},{name:"تصميم السيرة الذاتية",description:"تصميم سيرة ذاتية احترافية",icon:"fas fa-file-alt"}]},{title:"التصميم الاحترافي",duration:"6 أسابيع",description:"تعلم تقنيات التصميم المتقدمة وأسرار المصممين المحترفين",skills:[{name:"نظرية الألوان",icon:"fas fa-palette"},{name:"التايبوغرافي",icon:"fas fa-font"},{name:"التكوين البصري",icon:"fas fa-vector-square"},{name:"المؤثرات البصرية",icon:"fas fa-star"}],projects:[{name:"الهوية البصرية",description:"تصميم هوية بصرية كاملة لشركة",icon:"fas fa-building"},{name:"حملة تسويقية",description:"تصميم مجموعة إعلانات متناسقة",icon:"fas fa-ad"}]},{title:"التسويق الرقمي",duration:"5 أسابيع",description:"تصميم محتوى جذاب لمنصات التواصل الاجتماعي",skills:[{name:"تصميم السوشيال ميديا",icon:"fas fa-hashtag"},{name:"الرسوم المتحركة",icon:"fas fa-film"},{name:"تصميم الإعلانات",icon:"fas fa-ad"},{name:"تحليل النتائج",icon:"fas fa-chart-line"}],projects:[{name:"المحتوى المتكامل",description:"تصميم محتوى شهر كامل",icon:"fas fa-calendar-alt"},{name:"حملة إعلانية",description:"تصميم إعلانات متعددة المنصات",icon:"fas fa-bullhorn"}]},{title:"المشروع النهائي",duration:"3 أسابيع",description:"تطبيق جميع المهارات في مشروع احترافي متكامل",skills:[{name:"إدارة المشاريع",icon:"fas fa-tasks"},{name:"العمل مع العملاء",icon:"fas fa-handshake"},{name:"التسعير",icon:"fas fa-dollar-sign"},{name:"العرض النهائي",icon:"fas fa-chart-pie"}],projects:[{name:"المشروع الشامل",description:"تصميم مشروع كامل مع عميل حقيقي",icon:"fas fa-project-diagram"},{name:"المحفظة الاحترافية",description:"إعداد محفظة أعمال احترافية",icon:"fas fa-briefcase"}]}]),i=l=>{l>=0&&l<t.value.length&&Di.to(".stage-content",{opacity:0,y:20,duration:.3,onComplete:()=>{n.value=l,r(l),Di.to(".stage-content",{opacity:1,y:0,duration:.5,delay:.1})}})},r=l=>{const c=(l+1)/t.value.length*100;Di.to(e.value,{width:`${c}%`,duration:.5,ease:"power2.out"})},s=()=>{n.value>0&&i(n.value-1)},o=()=>{n.value<t.value.length-1&&i(n.value+1)},a=l=>{l&&Di.from(".section-header",{opacity:0,y:50,duration:1})};return bs(()=>{r(0)}),{stages:t,currentStage:n,progressBar:e,setCurrentStage:i,prevStage:s,nextStage:o,onSectionVisible:a}}},PT={class:"course-path"},DT={class:"section-header"},LT={class:"path-container"},IT={class:"stages-nav"},UT={class:"stages-progress"},NT={class:"progress-line",ref:"progressBar"},OT=["onClick"],FT={class:"dot-number"},BT={class:"stages-content"},kT={class:"stage-header"},zT={class:"stage-title"},HT={class:"duration"},VT={class:"stage-description"},GT={class:"skills-section"},WT={class:"skills-grid"},XT={class:"skill-icon"},$T={class:"projects-section"},qT={class:"projects-grid"},YT={class:"project-icon"},KT={class:"project-details"},jT={class:"stages-navigation"},ZT=["disabled"],JT=["disabled"];function QT(n,e,t,i,r,s){const o=s0("observe-visibility");return Nt(),Gt("section",PT,[ld((Nt(),Gt("div",DT,e[2]||(e[2]=[le("h2",{class:"section-title"},[le("span",{class:"gradient-text"},"مسار"),Hn(" التعلم ")],-1),le("p",{class:"section-subtitle"},"رحلة تعليمية منظمة ومتكاملة تقودك نحو احتراف التصميم",-1)]))),[[o,i.onSectionVisible]]),le("div",LT,[e[8]||(e[8]=le("div",{class:"floating-shapes","aria-hidden":"true"},[le("div",{class:"shape shape-1"}),le("div",{class:"shape shape-2"}),le("div",{class:"shape shape-3"})],-1)),le("div",IT,[le("div",UT,[le("div",NT,null,512),(Nt(!0),Gt(Mn,null,za(i.stages,(a,l)=>(Nt(),Gt("div",{key:l,class:Wi(["stage-dot",{active:i.currentStage===l}]),onClick:c=>i.setCurrentStage(l)},[le("span",FT,Fn(l+1),1)],10,OT))),128))])]),le("div",BT,[lt(yM,{name:"fade",mode:"out-in"},{default:pi(()=>[(Nt(!0),Gt(Mn,null,za(i.stages,(a,l)=>ld((Nt(),Gt("div",{key:l,class:"stage-content"},[le("div",kT,[le("div",zT,[le("h3",null,Fn(a.title),1),le("span",HT,[e[3]||(e[3]=le("i",{class:"fas fa-clock"},null,-1)),Hn(" "+Fn(a.duration),1)])]),le("p",VT,Fn(a.description),1)]),le("div",GT,[e[4]||(e[4]=le("h4",null,"المهارات المكتسبة",-1)),le("div",WT,[(Nt(!0),Gt(Mn,null,za(a.skills,(c,u)=>(Nt(),Gt("div",{key:u,class:"skill-item"},[le("div",XT,[le("i",{class:Wi(c.icon)},null,2)]),le("span",null,Fn(c.name),1)]))),128))])]),le("div",$T,[e[5]||(e[5]=le("h4",null,"المشاريع العملية",-1)),le("div",qT,[(Nt(!0),Gt(Mn,null,za(a.projects,(c,u)=>(Nt(),Gt("div",{key:u,class:"project-card"},[le("div",YT,[le("i",{class:Wi(c.icon)},null,2)]),le("div",KT,[le("h5",null,Fn(c.name),1),le("p",null,Fn(c.description),1)])]))),128))])])])),[[sM,i.currentStage===l]])),128))]),_:1})]),le("div",jT,[le("button",{class:"nav-button prev",onClick:e[0]||(e[0]=(...a)=>i.prevStage&&i.prevStage(...a)),disabled:i.currentStage===0},e[6]||(e[6]=[le("i",{class:"fas fa-chevron-right"},null,-1)]),8,ZT),le("button",{class:"nav-button next",onClick:e[1]||(e[1]=(...a)=>i.nextStage&&i.nextStage(...a)),disabled:i.currentStage===i.stages.length-1},e[7]||(e[7]=[le("i",{class:"fas fa-chevron-left"},null,-1)]),8,JT)])])])}const e1=hr(RT,[["render",QT],["__scopeId","data-v-e047bf38"]]);function t1(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function n1(n,e,t){return t1(n.prototype,e),n}/*!
 * Observer 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var pn,Wc,hi,ls,cs,ea,Zv,zs,al,Jv,Rr,zi,Qv,ex=function(){return pn||typeof window<"u"&&(pn=window.gsap)&&pn.registerPlugin&&pn},tx=1,Go=[],st=[],ur=[],ll=Date.now,Ud=function(e,t){return t},i1=function(){var e=al.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,st),r.push.apply(r,ur),st=i,ur=r,Ud=function(o,a){return t[o](a)}},hs=function(e,t){return~ur.indexOf(e)&&ur[ur.indexOf(e)+1][t]},cl=function(e){return!!~Jv.indexOf(e)},Ln=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Pn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Ql="scrollLeft",ec="scrollTop",Nd=function(){return Rr&&Rr.isPressed||st.cache++},Su=function(e,t){var i=function r(s){if(s||s===0){tx&&(hi.history.scrollRestoration="manual");var o=Rr&&Rr.isPressed;s=r.v=Math.round(s)||(Rr&&Rr.iOS?1:0),e(s),r.cacheID=st.cache,o&&Ud("ss",s)}else(t||st.cache!==r.cacheID||Ud("ref"))&&(r.cacheID=st.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},zn={s:Ql,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Su(function(n){return arguments.length?hi.scrollTo(n,rn.sc()):hi.pageXOffset||ls[Ql]||cs[Ql]||ea[Ql]||0})},rn={s:ec,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:zn,sc:Su(function(n){return arguments.length?hi.scrollTo(zn.sc(),n):hi.pageYOffset||ls[ec]||cs[ec]||ea[ec]||0})},Wn=function(e,t){return(t&&t._ctx&&t._ctx.selector||pn.utils.toArray)(e)[0]||(typeof e=="string"&&pn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},xs=function(e,t){var i=t.s,r=t.sc;cl(e)&&(e=ls.scrollingElement||cs);var s=st.indexOf(e),o=r===rn.sc?1:2;!~s&&(s=st.push(e)-1),st[s+o]||Ln(e,"scroll",Nd);var a=st[s+o],l=a||(st[s+o]=Su(hs(e,i),!0)||(cl(e)?r:Su(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,a||(l.smooth=pn.getProperty(e,"scrollBehavior")==="smooth"),l},Od=function(e,t,i){var r=e,s=e,o=ll(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=ll();_||m-o>l?(s=r,r=g,a=o,o=m):i?r+=g:r=s+(g-s)/(m-a)*(o-a)},f=function(){s=r=i?0:r,a=o=0},d=function(g){var _=a,m=s,p=ll();return(g||g===0)&&g!==r&&u(g),o===a||p-a>c?0:(r+(i?m:-m))/((i?p:o)-_)*1e3};return{update:u,reset:f,getVelocity:d}},Ia=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},n_=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},nx=function(){al=pn.core.globals().ScrollTrigger,al&&al.core&&i1()},ix=function(e){return pn=e||ex(),!Wc&&pn&&typeof document<"u"&&document.body&&(hi=window,ls=document,cs=ls.documentElement,ea=ls.body,Jv=[hi,ls,cs,ea],pn.utils.clamp,Qv=pn.core.context||function(){},zs="onpointerenter"in ea?"pointer":"mouse",Zv=$t.isTouch=hi.matchMedia&&hi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in hi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,zi=$t.eventTypes=("ontouchstart"in cs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in cs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return tx=0},500),nx(),Wc=1),Wc};zn.op=rn;st.cache=0;var $t=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){Wc||ix(pn)||console.warn("Please gsap.registerPlugin(Observer)"),al||nx();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,f=i.onStop,d=i.onStopDelay,h=i.ignore,g=i.wheelSpeed,_=i.event,m=i.onDragStart,p=i.onDragEnd,T=i.onDrag,E=i.onPress,v=i.onRelease,R=i.onRight,C=i.onLeft,w=i.onUp,I=i.onDown,S=i.onChangeX,x=i.onChangeY,U=i.onChange,N=i.onToggleX,z=i.onToggleY,X=i.onHover,ee=i.onHoverEnd,W=i.onMove,Y=i.ignoreCheck,V=i.isNormalizer,de=i.onGestureStart,O=i.onGestureEnd,Se=i.onWheel,De=i.onEnable,Ke=i.onDisable,te=i.onClick,_e=i.scrollSpeed,ye=i.capture,k=i.allowClicks,ae=i.lockAxis,oe=i.onLockAxis;this.target=a=Wn(a)||cs,this.vars=i,h&&(h=pn.utils.toArray(h)),r=r||1e-9,s=s||0,g=g||1,_e=_e||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(hi.getComputedStyle(ea).lineHeight)||22);var pe,Ie,P,D,M,ie,Z,L=this,ne=0,ue=0,Q=i.passive||!u&&i.passive!==!1,b=xs(a,zn),y=xs(a,rn),F=b(),$=y(),q=~o.indexOf("touch")&&!~o.indexOf("pointer")&&zi[0]==="pointerdown",j=cl(a),he=a.ownerDocument||ls,fe=[0,0,0],xe=[0,0,0],Be=0,me=function(){return Be=ll()},ve=function(Ne,Je){return(L.event=Ne)&&h&&~h.indexOf(Ne.target)||Je&&q&&Ne.pointerType!=="touch"||Y&&Y(Ne,Je)},Oe=function(){L._vx.reset(),L._vy.reset(),Ie.pause(),f&&f(L)},ke=function(){var Ne=L.deltaX=n_(fe),Je=L.deltaY=n_(xe),Ae=Math.abs(Ne)>=r,je=Math.abs(Je)>=r;U&&(Ae||je)&&U(L,Ne,Je,fe,xe),Ae&&(R&&L.deltaX>0&&R(L),C&&L.deltaX<0&&C(L),S&&S(L),N&&L.deltaX<0!=ne<0&&N(L),ne=L.deltaX,fe[0]=fe[1]=fe[2]=0),je&&(I&&L.deltaY>0&&I(L),w&&L.deltaY<0&&w(L),x&&x(L),z&&L.deltaY<0!=ue<0&&z(L),ue=L.deltaY,xe[0]=xe[1]=xe[2]=0),(D||P)&&(W&&W(L),P&&(m&&P===1&&m(L),T&&T(L),P=0),D=!1),ie&&!(ie=!1)&&oe&&oe(L),M&&(Se(L),M=!1),pe=0},Me=function(Ne,Je,Ae){fe[Ae]+=Ne,xe[Ae]+=Je,L._vx.update(Ne),L._vy.update(Je),c?pe||(pe=requestAnimationFrame(ke)):ke()},Ge=function(Ne,Je){ae&&!Z&&(L.axis=Z=Math.abs(Ne)>Math.abs(Je)?"x":"y",ie=!0),Z!=="y"&&(fe[2]+=Ne,L._vx.update(Ne,!0)),Z!=="x"&&(xe[2]+=Je,L._vy.update(Je,!0)),c?pe||(pe=requestAnimationFrame(ke)):ke()},We=function(Ne){if(!ve(Ne,1)){Ne=Ia(Ne,u);var Je=Ne.clientX,Ae=Ne.clientY,je=Je-L.x,Fe=Ae-L.y,Ye=L.isDragging;L.x=Je,L.y=Ae,(Ye||(je||Fe)&&(Math.abs(L.startX-Je)>=s||Math.abs(L.startY-Ae)>=s))&&(P=Ye?2:1,Ye||(L.isDragging=!0),Ge(je,Fe))}},ut=L.onPress=function(Re){ve(Re,1)||Re&&Re.button||(L.axis=Z=null,Ie.pause(),L.isPressed=!0,Re=Ia(Re),ne=ue=0,L.startX=L.x=Re.clientX,L.startY=L.y=Re.clientY,L._vx.reset(),L._vy.reset(),Ln(V?a:he,zi[1],We,Q,!0),L.deltaX=L.deltaY=0,E&&E(L))},B=L.onRelease=function(Re){if(!ve(Re,1)){Pn(V?a:he,zi[1],We,!0);var Ne=!isNaN(L.y-L.startY),Je=L.isDragging,Ae=Je&&(Math.abs(L.x-L.startX)>3||Math.abs(L.y-L.startY)>3),je=Ia(Re);!Ae&&Ne&&(L._vx.reset(),L._vy.reset(),u&&k&&pn.delayedCall(.08,function(){if(ll()-Be>300&&!Re.defaultPrevented){if(Re.target.click)Re.target.click();else if(he.createEvent){var Fe=he.createEvent("MouseEvents");Fe.initMouseEvent("click",!0,!0,hi,1,je.screenX,je.screenY,je.clientX,je.clientY,!1,!1,!1,!1,0,null),Re.target.dispatchEvent(Fe)}}})),L.isDragging=L.isGesturing=L.isPressed=!1,f&&Je&&!V&&Ie.restart(!0),P&&ke(),p&&Je&&p(L),v&&v(L,Ae)}},be=function(Ne){return Ne.touches&&Ne.touches.length>1&&(L.isGesturing=!0)&&de(Ne,L.isDragging)},se=function(){return(L.isGesturing=!1)||O(L)},ce=function(Ne){if(!ve(Ne)){var Je=b(),Ae=y();Me((Je-F)*_e,(Ae-$)*_e,1),F=Je,$=Ae,f&&Ie.restart(!0)}},Ee=function(Ne){if(!ve(Ne)){Ne=Ia(Ne,u),Se&&(M=!0);var Je=(Ne.deltaMode===1?l:Ne.deltaMode===2?hi.innerHeight:1)*g;Me(Ne.deltaX*Je,Ne.deltaY*Je,0),f&&!V&&Ie.restart(!0)}},Te=function(Ne){if(!ve(Ne)){var Je=Ne.clientX,Ae=Ne.clientY,je=Je-L.x,Fe=Ae-L.y;L.x=Je,L.y=Ae,D=!0,f&&Ie.restart(!0),(je||Fe)&&Ge(je,Fe)}},qe=function(Ne){L.event=Ne,X(L)},ft=function(Ne){L.event=Ne,ee(L)},Bt=function(Ne){return ve(Ne)||Ia(Ne,u)&&te(L)};Ie=L._dc=pn.delayedCall(d||.25,Oe).pause(),L.deltaX=L.deltaY=0,L._vx=Od(0,50,!0),L._vy=Od(0,50,!0),L.scrollX=b,L.scrollY=y,L.isDragging=L.isGesturing=L.isPressed=!1,Qv(this),L.enable=function(Re){return L.isEnabled||(Ln(j?he:a,"scroll",Nd),o.indexOf("scroll")>=0&&Ln(j?he:a,"scroll",ce,Q,ye),o.indexOf("wheel")>=0&&Ln(a,"wheel",Ee,Q,ye),(o.indexOf("touch")>=0&&Zv||o.indexOf("pointer")>=0)&&(Ln(a,zi[0],ut,Q,ye),Ln(he,zi[2],B),Ln(he,zi[3],B),k&&Ln(a,"click",me,!0,!0),te&&Ln(a,"click",Bt),de&&Ln(he,"gesturestart",be),O&&Ln(he,"gestureend",se),X&&Ln(a,zs+"enter",qe),ee&&Ln(a,zs+"leave",ft),W&&Ln(a,zs+"move",Te)),L.isEnabled=!0,L.isDragging=L.isGesturing=L.isPressed=D=P=!1,L._vx.reset(),L._vy.reset(),F=b(),$=y(),Re&&Re.type&&ut(Re),De&&De(L)),L},L.disable=function(){L.isEnabled&&(Go.filter(function(Re){return Re!==L&&cl(Re.target)}).length||Pn(j?he:a,"scroll",Nd),L.isPressed&&(L._vx.reset(),L._vy.reset(),Pn(V?a:he,zi[1],We,!0)),Pn(j?he:a,"scroll",ce,ye),Pn(a,"wheel",Ee,ye),Pn(a,zi[0],ut,ye),Pn(he,zi[2],B),Pn(he,zi[3],B),Pn(a,"click",me,!0),Pn(a,"click",Bt),Pn(he,"gesturestart",be),Pn(he,"gestureend",se),Pn(a,zs+"enter",qe),Pn(a,zs+"leave",ft),Pn(a,zs+"move",Te),L.isEnabled=L.isPressed=L.isDragging=!1,Ke&&Ke(L))},L.kill=L.revert=function(){L.disable();var Re=Go.indexOf(L);Re>=0&&Go.splice(Re,1),Rr===L&&(Rr=0)},Go.push(L),V&&cl(a)&&(Rr=L),L.enable(_)},n1(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();$t.version="3.12.7";$t.create=function(n){return new $t(n)};$t.register=ix;$t.getAll=function(){return Go.slice()};$t.getById=function(n){return Go.filter(function(e){return e.vars.id===n})[0]};ex()&&pn.registerPlugin($t);/*!
 * ScrollTrigger 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ue,Bo,rt,Pt,fi,xt,xp,yu,Il,ul,Wa,tc,vn,Xu,Fd,Nn,i_,r_,ko,rx,Sf,sx,Un,Bd,ox,ax,Jr,kd,Sp,ta,yp,Mu,zd,yf,nc=1,xn=Date.now,Mf=xn(),Ui=0,Xa=0,s_=function(e,t,i){var r=li(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},o_=function(e,t){return t&&(!li(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},r1=function n(){return Xa&&requestAnimationFrame(n)},a_=function(){return Xu=1},l_=function(){return Xu=0},er=function(e){return e},$a=function(e){return Math.round(e*1e5)/1e5||0},lx=function(){return typeof window<"u"},cx=function(){return Ue||lx()&&(Ue=window.gsap)&&Ue.registerPlugin&&Ue},co=function(e){return!!~xp.indexOf(e)},ux=function(e){return(e==="Height"?yp:rt["inner"+e])||fi["client"+e]||xt["client"+e]},fx=function(e){return hs(e,"getBoundingClientRect")||(co(e)?function(){return Kc.width=rt.innerWidth,Kc.height=yp,Kc}:function(){return wr(e)})},s1=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=hs(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?ux(s):e["client"+s])||0}},o1=function(e,t){return!t||~ur.indexOf(e)?fx(e):function(){return Kc}},sr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=hs(e,i))?o()-fx(e)()[s]:co(e)?(fi[i]||xt[i])-ux(r):e[i]-e["offset"+r])},ic=function(e,t){for(var i=0;i<ko.length;i+=3)(!t||~t.indexOf(ko[i+1]))&&e(ko[i],ko[i+1],ko[i+2])},li=function(e){return typeof e=="string"},bn=function(e){return typeof e=="function"},qa=function(e){return typeof e=="number"},Hs=function(e){return typeof e=="object"},Ua=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Ef=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},So=Math.abs,dx="left",hx="top",Mp="right",Ep="bottom",no="width",io="height",fl="Right",dl="Left",hl="Top",pl="Bottom",jt="padding",wi="margin",_a="Width",bp="Height",nn="px",Ci=function(e){return rt.getComputedStyle(e)},a1=function(e){var t=Ci(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},c_=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},wr=function(e,t){var i=t&&Ci(e)[Fd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ue.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},Eu=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},px=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},l1=function(e){return function(t){return Ue.utils.snap(px(e),t)}},Tp=function(e){var t=Ue.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},c1=function(e){return function(t,i){return Tp(px(e))(t,i.direction)}},rc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},un=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},cn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},sc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},u_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},oc={toggleActions:"play",anticipatePin:0},bu={top:0,left:0,center:.5,bottom:1,right:1},Xc=function(e,t){if(li(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in bu?bu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ac=function(e,t,i,r,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,d=s.indent,h=s.fontWeight,g=Pt.createElement("div"),_=co(i)||hs(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?xt:i,T=e.indexOf("start")!==-1,E=T?c:u,v="border-color:"+E+";font-size:"+f+";color:"+E+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(r===rn?Mp:Ep)+":"+(o+parseFloat(d))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=T,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=v,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+r.op.d2],$c(g,0,r,T),g},$c=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+_a]=1,s["border"+a+_a]=0,s[i.p]=t+"px",Ue.set(e,s)},nt=[],Hd={},Ul,f_=function(){return xn()-Ui>34&&(Ul||(Ul=requestAnimationFrame(Nr)))},yo=function(){(!Un||!Un.isPressed||Un.startX>xt.clientWidth)&&(st.cache++,Un?Ul||(Ul=requestAnimationFrame(Nr)):Nr(),Ui||fo("scrollStart"),Ui=xn())},bf=function(){ax=rt.innerWidth,ox=rt.innerHeight},Ya=function(e){st.cache++,(e===!0||!vn&&!sx&&!Pt.fullscreenElement&&!Pt.webkitFullscreenElement&&(!Bd||ax!==rt.innerWidth||Math.abs(rt.innerHeight-ox)>rt.innerHeight*.25))&&yu.restart(!0)},uo={},u1=[],mx=function n(){return cn(ot,"scrollEnd",n)||Ys(!0)},fo=function(e){return uo[e]&&uo[e].map(function(t){return t()})||u1},ai=[],_x=function(e){for(var t=0;t<ai.length;t+=5)(!e||ai[t+4]&&ai[t+4].query===e)&&(ai[t].style.cssText=ai[t+1],ai[t].getBBox&&ai[t].setAttribute("transform",ai[t+2]||""),ai[t+3].uncache=1)},Ap=function(e,t){var i;for(Nn=0;Nn<nt.length;Nn++)i=nt[Nn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Mu=!0,t&&_x(t),t||fo("revert")},gx=function(e,t){st.cache++,(t||!On)&&st.forEach(function(i){return bn(i)&&i.cacheID++&&(i.rec=0)}),li(e)&&(rt.history.scrollRestoration=Sp=e)},On,ro=0,d_,f1=function(){if(d_!==ro){var e=d_=ro;requestAnimationFrame(function(){return e===ro&&Ys(!0)})}},vx=function(){xt.appendChild(ta),yp=!Un&&ta.offsetHeight||rt.innerHeight,xt.removeChild(ta)},h_=function(e){return Il(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ys=function(e,t){if(fi=Pt.documentElement,xt=Pt.body,xp=[rt,Pt,fi,xt],Ui&&!e&&!Mu){un(ot,"scrollEnd",mx);return}vx(),On=ot.isRefreshing=!0,st.forEach(function(r){return bn(r)&&++r.cacheID&&(r.rec=r())});var i=fo("refreshInit");rx&&ot.sort(),t||Ap(),st.forEach(function(r){bn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),nt.slice(0).forEach(function(r){return r.refresh()}),Mu=!1,nt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),zd=1,h_(!0),nt.forEach(function(r){var s=sr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),h_(!1),zd=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),st.forEach(function(r){bn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),gx(Sp,1),yu.pause(),ro++,On=2,Nr(2),nt.forEach(function(r){return bn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),On=ot.isRefreshing=!1,fo("refresh")},Vd=0,qc=1,ml,Nr=function(e){if(e===2||!On&&!Mu){ot.isUpdating=!0,ml&&ml.update(0);var t=nt.length,i=xn(),r=i-Mf>=50,s=t&&nt[0].scroll();if(qc=Vd>s?-1:1,On||(Vd=s),r&&(Ui&&!Xu&&i-Ui>200&&(Ui=0,fo("scrollEnd")),Wa=Mf,Mf=i),qc<0){for(Nn=t;Nn-- >0;)nt[Nn]&&nt[Nn].update(0,r);qc=1}else for(Nn=0;Nn<t;Nn++)nt[Nn]&&nt[Nn].update(0,r);ot.isUpdating=!1}Ul=0},Gd=[dx,hx,Ep,Mp,wi+pl,wi+fl,wi+hl,wi+dl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Yc=Gd.concat([no,io,"boxSizing","max"+_a,"max"+bp,"position",wi,jt,jt+hl,jt+fl,jt+pl,jt+dl]),d1=function(e,t,i){na(i);var r=e._gsap;if(r.spacerIsNative)na(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Tf=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=Gd.length,o=t.style,a=e.style,l;s--;)l=Gd[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Ep]=a[Mp]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[no]=Eu(e,zn)+nn,o[io]=Eu(e,rn)+nn,o[jt]=a[wi]=a[hx]=a[dx]="0",na(r),a[no]=a["max"+_a]=i[no],a[io]=a["max"+bp]=i[io],a[jt]=i[jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},h1=/([A-Z])/g,na=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Ue.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(h1,"-$1").toLowerCase())}},lc=function(e){for(var t=Yc.length,i=e.style,r=[],s=0;s<t;s++)r.push(Yc[s],i[Yc[s]]);return r.t=e,r},p1=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Kc={left:0,top:0},p_=function(e,t,i,r,s,o,a,l,c,u,f,d,h,g){bn(e)&&(e=e(l)),li(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Xc("0"+e.substr(3),i):0));var _=h?h.time():0,m,p,T;if(h&&h.seek(0),isNaN(e)||(e=+e),qa(e))h&&(e=Ue.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,d,e)),a&&$c(a,i,r,!0);else{bn(t)&&(t=t(l));var E=(e||"0").split(" "),v,R,C,w;T=Wn(t,l)||xt,v=wr(T)||{},(!v||!v.left&&!v.top)&&Ci(T).display==="none"&&(w=T.style.display,T.style.display="block",v=wr(T),w?T.style.display=w:T.style.removeProperty("display")),R=Xc(E[0],v[r.d]),C=Xc(E[1]||"0",i),e=v[r.p]-c[r.p]-u+R+s-C,a&&$c(a,C,r,i-C<20||a._isStart&&C>20),i-=i-C}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var I=e+i,S=o._isStart;m="scroll"+r.d2,$c(o,I,r,S&&I>20||!S&&(f?Math.max(xt[m],fi[m]):o.parentNode[m])<=I+1),f&&(c=wr(a),f&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+nn))}return h&&T&&(m=wr(T),h.seek(d),p=wr(T),h._caScrollDist=m[r.p]-p[r.p],e=e/h._caScrollDist*d),h&&h.seek(_),h?e:Math.round(e)},m1=/(webkit|moz|length|cssText|inset)/i,m_=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===xt){e._stOrig=s.cssText,a=Ci(e);for(o in a)!+o&&!m1.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Ue.core.getCache(e).uncache=1,t.appendChild(e)}},xx=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},cc=function(e,t,i){var r={};r[t.p]="+="+i,Ue.set(e,r)},__=function(e,t){var i=xs(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,f){var d=o.tween,h=l.onComplete,g={};c=c||i();var _=xx(i,c,function(){d.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,d&&d.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(c+u*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){st.cache++,o.tween&&Nr()},l.onComplete=function(){o.tween=0,h&&h.call(d)},d=o.tween=Ue.to(e,l),d};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},un(e,"wheel",i.wheelHandler),ot.isTouch&&un(e,"touchmove",i.wheelHandler),s},ot=function(){function n(t,i){Bo||n.register(Ue)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),kd(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Xa){this.update=this.refresh=this.kill=er;return}i=c_(li(i)||qa(i)||i.nodeType?{trigger:i}:i,oc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,d=s.trigger,h=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,T=s.onSnapComplete,E=s.once,v=s.snap,R=s.pinReparent,C=s.pinSpacer,w=s.containerAnimation,I=s.fastScrollEnd,S=s.preventOverlaps,x=i.horizontal||i.containerAnimation&&i.horizontal!==!1?zn:rn,U=!f&&f!==0,N=Wn(i.scroller||rt),z=Ue.core.getCache(N),X=co(N),ee=("pinType"in i?i.pinType:hs(N,"pinType")||X&&"fixed")==="fixed",W=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],Y=U&&i.toggleActions.split(" "),V="markers"in i?i.markers:oc.markers,de=X?0:parseFloat(Ci(N)["border"+x.p2+_a])||0,O=this,Se=i.onRefreshInit&&function(){return i.onRefreshInit(O)},De=s1(N,X,x),Ke=o1(N,X),te=0,_e=0,ye=0,k=xs(N,x),ae,oe,pe,Ie,P,D,M,ie,Z,L,ne,ue,Q,b,y,F,$,q,j,he,fe,xe,Be,me,ve,Oe,ke,Me,Ge,We,ut,B,be,se,ce,Ee,Te,qe,ft;if(O._startClamp=O._endClamp=!1,O._dir=x,m*=45,O.scroller=N,O.scroll=w?w.time.bind(w):k,Ie=k(),O.vars=i,r=r||i.animation,"refreshPriority"in i&&(rx=1,i.refreshPriority===-9999&&(ml=O)),z.tweenScroll=z.tweenScroll||{top:__(N,rn),left:__(N,zn)},O.tweenTo=ae=z.tweenScroll[x.p],O.scrubDuration=function(Ae){be=qa(Ae)&&Ae,be?B?B.duration(Ae):B=Ue.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:be,paused:!0,onComplete:function(){return p&&p(O)}}):(B&&B.progress(1).kill(),B=0)},r&&(r.vars.lazy=!1,r._initted&&!O.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),O.animation=r.pause(),r.scrollTrigger=O,O.scrubDuration(f),We=0,l||(l=r.vars.id)),v&&((!Hs(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in xt.style&&Ue.set(X?[xt,fi]:N,{scrollBehavior:"auto"}),st.forEach(function(Ae){return bn(Ae)&&Ae.target===(X?Pt.scrollingElement||fi:N)&&(Ae.smooth=!1)}),pe=bn(v.snapTo)?v.snapTo:v.snapTo==="labels"?l1(r):v.snapTo==="labelsDirectional"?c1(r):v.directional!==!1?function(Ae,je){return Tp(v.snapTo)(Ae,xn()-_e<500?0:je.direction)}:Ue.utils.snap(v.snapTo),se=v.duration||{min:.1,max:2},se=Hs(se)?ul(se.min,se.max):ul(se,se),ce=Ue.delayedCall(v.delay||be/2||.1,function(){var Ae=k(),je=xn()-_e<500,Fe=ae.tween;if((je||Math.abs(O.getVelocity())<10)&&!Fe&&!Xu&&te!==Ae){var Ye=(Ae-D)/b,Vt=r&&!U?r.totalProgress():Ye,it=je?0:(Vt-ut)/(xn()-Wa)*1e3||0,Rt=Ue.utils.clamp(-Ye,1-Ye,So(it/2)*it/.185),Qt=Ye+(v.inertia===!1?0:Rt),Et,bt,mt=v,ti=mt.onStart,Lt=mt.onInterrupt,Cn=mt.onComplete;if(Et=pe(Qt,O),qa(Et)||(Et=Qt),bt=Math.max(0,Math.round(D+Et*b)),Ae<=M&&Ae>=D&&bt!==Ae){if(Fe&&!Fe._initted&&Fe.data<=So(bt-Ae))return;v.inertia===!1&&(Rt=Et-Ye),ae(bt,{duration:se(So(Math.max(So(Qt-Vt),So(Et-Vt))*.185/it/.05||0)),ease:v.ease||"power3",data:So(bt-Ae),onInterrupt:function(){return ce.restart(!0)&&Lt&&Lt(O)},onComplete:function(){O.update(),te=k(),r&&!U&&(B?B.resetTo("totalProgress",Et,r._tTime/r._tDur):r.progress(Et)),We=ut=r&&!U?r.totalProgress():O.progress,T&&T(O),Cn&&Cn(O)}},Ae,Rt*b,bt-Ae-Rt*b),ti&&ti(O,ae.tween)}}else O.isActive&&te!==Ae&&ce.restart(!0)}).pause()),l&&(Hd[l]=O),d=O.trigger=Wn(d||h!==!0&&h),ft=d&&d._gsap&&d._gsap.stRevert,ft&&(ft=ft(O)),h=h===!0?d:Wn(h),li(a)&&(a={targets:d,className:a}),h&&(g===!1||g===wi||(g=!g&&h.parentNode&&h.parentNode.style&&Ci(h.parentNode).display==="flex"?!1:jt),O.pin=h,oe=Ue.core.getCache(h),oe.spacer?y=oe.pinState:(C&&(C=Wn(C),C&&!C.nodeType&&(C=C.current||C.nativeElement),oe.spacerIsNative=!!C,C&&(oe.spacerState=lc(C))),oe.spacer=q=C||Pt.createElement("div"),q.classList.add("pin-spacer"),l&&q.classList.add("pin-spacer-"+l),oe.pinState=y=lc(h)),i.force3D!==!1&&Ue.set(h,{force3D:!0}),O.spacer=q=oe.spacer,Ge=Ci(h),me=Ge[g+x.os2],he=Ue.getProperty(h),fe=Ue.quickSetter(h,x.a,nn),Tf(h,q,Ge),$=lc(h)),V){ue=Hs(V)?c_(V,u_):u_,L=ac("scroller-start",l,N,x,ue,0),ne=ac("scroller-end",l,N,x,ue,0,L),j=L["offset"+x.op.d2];var Bt=Wn(hs(N,"content")||N);ie=this.markerStart=ac("start",l,Bt,x,ue,j,0,w),Z=this.markerEnd=ac("end",l,Bt,x,ue,j,0,w),w&&(qe=Ue.quickSetter([ie,Z],x.a,nn)),!ee&&!(ur.length&&hs(N,"fixedMarkers")===!0)&&(a1(X?xt:N),Ue.set([L,ne],{force3D:!0}),Oe=Ue.quickSetter(L,x.a,nn),Me=Ue.quickSetter(ne,x.a,nn))}if(w){var Re=w.vars.onUpdate,Ne=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){O.update(0,0,1),Re&&Re.apply(w,Ne||[])})}if(O.previous=function(){return nt[nt.indexOf(O)-1]},O.next=function(){return nt[nt.indexOf(O)+1]},O.revert=function(Ae,je){if(!je)return O.kill(!0);var Fe=Ae!==!1||!O.enabled,Ye=vn;Fe!==O.isReverted&&(Fe&&(Ee=Math.max(k(),O.scroll.rec||0),ye=O.progress,Te=r&&r.progress()),ie&&[ie,Z,L,ne].forEach(function(Vt){return Vt.style.display=Fe?"none":"block"}),Fe&&(vn=O,O.update(Fe)),h&&(!R||!O.isActive)&&(Fe?d1(h,q,y):Tf(h,q,Ci(h),ve)),Fe||O.update(Fe),vn=Ye,O.isReverted=Fe)},O.refresh=function(Ae,je,Fe,Ye){if(!((vn||!O.enabled)&&!je)){if(h&&Ae&&Ui){un(n,"scrollEnd",mx);return}!On&&Se&&Se(O),vn=O,ae.tween&&!Fe&&(ae.tween.kill(),ae.tween=0),B&&B.pause(),_&&r&&r.revert({kill:!1}).invalidate(),O.isReverted||O.revert(!0,!0),O._subPinOffset=!1;var Vt=De(),it=Ke(),Rt=w?w.duration():sr(N,x),Qt=b<=.01,Et=0,bt=Ye||0,mt=Hs(Fe)?Fe.end:i.end,ti=i.endTrigger||d,Lt=Hs(Fe)?Fe.start:i.start||(i.start===0||!d?0:h?"0 0":"0 100%"),Cn=O.pinnedContainer=i.pinnedContainer&&Wn(i.pinnedContainer,O),Si=d&&Math.max(0,nt.indexOf(O))||0,en=Si,tn,A,G,J,K,H,ge,we,Le,Pe,He,$e,ze;for(V&&Hs(Fe)&&($e=Ue.getProperty(L,x.p),ze=Ue.getProperty(ne,x.p));en-- >0;)H=nt[en],H.end||H.refresh(0,1)||(vn=O),ge=H.pin,ge&&(ge===d||ge===h||ge===Cn)&&!H.isReverted&&(Pe||(Pe=[]),Pe.unshift(H),H.revert(!0,!0)),H!==nt[en]&&(Si--,en--);for(bn(Lt)&&(Lt=Lt(O)),Lt=s_(Lt,"start",O),D=p_(Lt,d,Vt,x,k(),ie,L,O,it,de,ee,Rt,w,O._startClamp&&"_startClamp")||(h?-.001:0),bn(mt)&&(mt=mt(O)),li(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(li(Lt)?Lt.split(" ")[0]:"")+mt:(Et=Xc(mt.substr(2),Vt),mt=li(Lt)?Lt:(w?Ue.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,D):D)+Et,ti=d)),mt=s_(mt,"end",O),M=Math.max(D,p_(mt||(ti?"100% 0":Rt),ti,Vt,x,k()+Et,Z,ne,O,it,de,ee,Rt,w,O._endClamp&&"_endClamp"))||-.001,Et=0,en=Si;en--;)H=nt[en],ge=H.pin,ge&&H.start-H._pinPush<=D&&!w&&H.end>0&&(tn=H.end-(O._startClamp?Math.max(0,H.start):H.start),(ge===d&&H.start-H._pinPush<D||ge===Cn)&&isNaN(Lt)&&(Et+=tn*(1-H.progress)),ge===h&&(bt+=tn));if(D+=Et,M+=Et,O._startClamp&&(O._startClamp+=Et),O._endClamp&&!On&&(O._endClamp=M||-.001,M=Math.min(M,sr(N,x))),b=M-D||(D-=.01)&&.001,Qt&&(ye=Ue.utils.clamp(0,1,Ue.utils.normalize(D,M,Ee))),O._pinPush=bt,ie&&Et&&(tn={},tn[x.a]="+="+Et,Cn&&(tn[x.p]="-="+k()),Ue.set([ie,Z],tn)),h&&!(zd&&O.end>=sr(N,x)))tn=Ci(h),J=x===rn,G=k(),xe=parseFloat(he(x.a))+bt,!Rt&&M>1&&(He=(X?Pt.scrollingElement||fi:N).style,He={style:He,value:He["overflow"+x.a.toUpperCase()]},X&&Ci(xt)["overflow"+x.a.toUpperCase()]!=="scroll"&&(He.style["overflow"+x.a.toUpperCase()]="scroll")),Tf(h,q,tn),$=lc(h),A=wr(h,!0),we=ee&&xs(N,J?zn:rn)(),g?(ve=[g+x.os2,b+bt+nn],ve.t=q,en=g===jt?Eu(h,x)+b+bt:0,en&&(ve.push(x.d,en+nn),q.style.flexBasis!=="auto"&&(q.style.flexBasis=en+nn)),na(ve),Cn&&nt.forEach(function(tt){tt.pin===Cn&&tt.vars.pinSpacing!==!1&&(tt._subPinOffset=!0)}),ee&&k(Ee)):(en=Eu(h,x),en&&q.style.flexBasis!=="auto"&&(q.style.flexBasis=en+nn)),ee&&(K={top:A.top+(J?G-D:we)+nn,left:A.left+(J?we:G-D)+nn,boxSizing:"border-box",position:"fixed"},K[no]=K["max"+_a]=Math.ceil(A.width)+nn,K[io]=K["max"+bp]=Math.ceil(A.height)+nn,K[wi]=K[wi+hl]=K[wi+fl]=K[wi+pl]=K[wi+dl]="0",K[jt]=tn[jt],K[jt+hl]=tn[jt+hl],K[jt+fl]=tn[jt+fl],K[jt+pl]=tn[jt+pl],K[jt+dl]=tn[jt+dl],F=p1(y,K,R),On&&k(0)),r?(Le=r._initted,Sf(1),r.render(r.duration(),!0,!0),Be=he(x.a)-xe+b+bt,ke=Math.abs(b-Be)>1,ee&&ke&&F.splice(F.length-2,2),r.render(0,!0,!0),Le||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Sf(0)):Be=b,He&&(He.value?He.style["overflow"+x.a.toUpperCase()]=He.value:He.style.removeProperty("overflow-"+x.a));else if(d&&k()&&!w)for(A=d.parentNode;A&&A!==xt;)A._pinOffset&&(D-=A._pinOffset,M-=A._pinOffset),A=A.parentNode;Pe&&Pe.forEach(function(tt){return tt.revert(!1,!0)}),O.start=D,O.end=M,Ie=P=On?Ee:k(),!w&&!On&&(Ie<Ee&&k(Ee),O.scroll.rec=0),O.revert(!1,!0),_e=xn(),ce&&(te=-1,ce.restart(!0)),vn=0,r&&U&&(r._initted||Te)&&r.progress()!==Te&&r.progress(Te||0,!0).render(r.time(),!0,!0),(Qt||ye!==O.progress||w||_||r&&!r._initted)&&(r&&!U&&r.totalProgress(w&&D<-.001&&!ye?Ue.utils.normalize(D,M,0):ye,!0),O.progress=Qt||(Ie-D)/b===ye?0:ye),h&&g&&(q._pinOffset=Math.round(O.progress*Be)),B&&B.invalidate(),isNaN($e)||($e-=Ue.getProperty(L,x.p),ze-=Ue.getProperty(ne,x.p),cc(L,x,$e),cc(ie,x,$e-(Ye||0)),cc(ne,x,ze),cc(Z,x,ze-(Ye||0))),Qt&&!On&&O.update(),u&&!On&&!Q&&(Q=!0,u(O),Q=!1)}},O.getVelocity=function(){return(k()-P)/(xn()-Wa)*1e3||0},O.endAnimation=function(){Ua(O.callbackAnimation),r&&(B?B.progress(1):r.paused()?U||Ua(r,O.direction<0,1):Ua(r,r.reversed()))},O.labelToScroll=function(Ae){return r&&r.labels&&(D||O.refresh()||D)+r.labels[Ae]/r.duration()*b||0},O.getTrailing=function(Ae){var je=nt.indexOf(O),Fe=O.direction>0?nt.slice(0,je).reverse():nt.slice(je+1);return(li(Ae)?Fe.filter(function(Ye){return Ye.vars.preventOverlaps===Ae}):Fe).filter(function(Ye){return O.direction>0?Ye.end<=D:Ye.start>=M})},O.update=function(Ae,je,Fe){if(!(w&&!Fe&&!Ae)){var Ye=On===!0?Ee:O.scroll(),Vt=Ae?0:(Ye-D)/b,it=Vt<0?0:Vt>1?1:Vt||0,Rt=O.progress,Qt,Et,bt,mt,ti,Lt,Cn,Si;if(je&&(P=Ie,Ie=w?k():Ye,v&&(ut=We,We=r&&!U?r.totalProgress():it)),m&&h&&!vn&&!nc&&Ui&&(!it&&D<Ye+(Ye-P)/(xn()-Wa)*m?it=1e-4:it===1&&M>Ye+(Ye-P)/(xn()-Wa)*m&&(it=.9999)),it!==Rt&&O.enabled){if(Qt=O.isActive=!!it&&it<1,Et=!!Rt&&Rt<1,Lt=Qt!==Et,ti=Lt||!!it!=!!Rt,O.direction=it>Rt?1:-1,O.progress=it,ti&&!vn&&(bt=it&&!Rt?0:it===1?1:Rt===1?2:3,U&&(mt=!Lt&&Y[bt+1]!=="none"&&Y[bt+1]||Y[bt],Si=r&&(mt==="complete"||mt==="reset"||mt in r))),S&&(Lt||Si)&&(Si||f||!r)&&(bn(S)?S(O):O.getTrailing(S).forEach(function(G){return G.endAnimation()})),U||(B&&!vn&&!nc?(B._dp._time-B._start!==B._time&&B.render(B._dp._time-B._start),B.resetTo?B.resetTo("totalProgress",it,r._tTime/r._tDur):(B.vars.totalProgress=it,B.invalidate().restart())):r&&r.totalProgress(it,!!(vn&&(_e||Ae)))),h){if(Ae&&g&&(q.style[g+x.os2]=me),!ee)fe($a(xe+Be*it));else if(ti){if(Cn=!Ae&&it>Rt&&M+1>Ye&&Ye+1>=sr(N,x),R)if(!Ae&&(Qt||Cn)){var en=wr(h,!0),tn=Ye-D;m_(h,xt,en.top+(x===rn?tn:0)+nn,en.left+(x===rn?0:tn)+nn)}else m_(h,q);na(Qt||Cn?F:$),ke&&it<1&&Qt||fe(xe+(it===1&&!Cn?Be:0))}}v&&!ae.tween&&!vn&&!nc&&ce.restart(!0),a&&(Lt||E&&it&&(it<1||!yf))&&Il(a.targets).forEach(function(G){return G.classList[Qt||E?"add":"remove"](a.className)}),o&&!U&&!Ae&&o(O),ti&&!vn?(U&&(Si&&(mt==="complete"?r.pause().totalProgress(1):mt==="reset"?r.restart(!0).pause():mt==="restart"?r.restart(!0):r[mt]()),o&&o(O)),(Lt||!yf)&&(c&&Lt&&Ef(O,c),W[bt]&&Ef(O,W[bt]),E&&(it===1?O.kill(!1,1):W[bt]=0),Lt||(bt=it===1?1:3,W[bt]&&Ef(O,W[bt]))),I&&!Qt&&Math.abs(O.getVelocity())>(qa(I)?I:2500)&&(Ua(O.callbackAnimation),B?B.progress(1):Ua(r,mt==="reverse"?1:!it,1))):U&&o&&!vn&&o(O)}if(Me){var A=w?Ye/w.duration()*(w._caScrollDist||0):Ye;Oe(A+(L._isFlipped?1:0)),Me(A)}qe&&qe(-Ye/w.duration()*(w._caScrollDist||0))}},O.enable=function(Ae,je){O.enabled||(O.enabled=!0,un(N,"resize",Ya),X||un(N,"scroll",yo),Se&&un(n,"refreshInit",Se),Ae!==!1&&(O.progress=ye=0,Ie=P=te=k()),je!==!1&&O.refresh())},O.getTween=function(Ae){return Ae&&ae?ae.tween:B},O.setPositions=function(Ae,je,Fe,Ye){if(w){var Vt=w.scrollTrigger,it=w.duration(),Rt=Vt.end-Vt.start;Ae=Vt.start+Rt*Ae/it,je=Vt.start+Rt*je/it}O.refresh(!1,!1,{start:o_(Ae,Fe&&!!O._startClamp),end:o_(je,Fe&&!!O._endClamp)},Ye),O.update()},O.adjustPinSpacing=function(Ae){if(ve&&Ae){var je=ve.indexOf(x.d)+1;ve[je]=parseFloat(ve[je])+Ae+nn,ve[1]=parseFloat(ve[1])+Ae+nn,na(ve)}},O.disable=function(Ae,je){if(O.enabled&&(Ae!==!1&&O.revert(!0,!0),O.enabled=O.isActive=!1,je||B&&B.pause(),Ee=0,oe&&(oe.uncache=1),Se&&cn(n,"refreshInit",Se),ce&&(ce.pause(),ae.tween&&ae.tween.kill()&&(ae.tween=0)),!X)){for(var Fe=nt.length;Fe--;)if(nt[Fe].scroller===N&&nt[Fe]!==O)return;cn(N,"resize",Ya),X||cn(N,"scroll",yo)}},O.kill=function(Ae,je){O.disable(Ae,je),B&&!je&&B.kill(),l&&delete Hd[l];var Fe=nt.indexOf(O);Fe>=0&&nt.splice(Fe,1),Fe===Nn&&qc>0&&Nn--,Fe=0,nt.forEach(function(Ye){return Ye.scroller===O.scroller&&(Fe=1)}),Fe||On||(O.scroll.rec=0),r&&(r.scrollTrigger=null,Ae&&r.revert({kill:!1}),je||r.kill()),ie&&[ie,Z,L,ne].forEach(function(Ye){return Ye.parentNode&&Ye.parentNode.removeChild(Ye)}),ml===O&&(ml=0),h&&(oe&&(oe.uncache=1),Fe=0,nt.forEach(function(Ye){return Ye.pin===h&&Fe++}),Fe||(oe.spacer=0)),i.onKill&&i.onKill(O)},nt.push(O),O.enable(!1,!1),ft&&ft(O),r&&r.add&&!b){var Je=O.update;O.update=function(){O.update=Je,st.cache++,D||M||O.refresh()},Ue.delayedCall(.01,O.update),b=.01,D=M=0}else O.refresh();h&&f1()},n.register=function(i){return Bo||(Ue=i||cx(),lx()&&window.document&&n.enable(),Bo=Xa),Bo},n.defaults=function(i){if(i)for(var r in i)oc[r]=i[r];return oc},n.disable=function(i,r){Xa=0,nt.forEach(function(o){return o[r?"kill":"disable"](i)}),cn(rt,"wheel",yo),cn(Pt,"scroll",yo),clearInterval(tc),cn(Pt,"touchcancel",er),cn(xt,"touchstart",er),rc(cn,Pt,"pointerdown,touchstart,mousedown",a_),rc(cn,Pt,"pointerup,touchend,mouseup",l_),yu.kill(),ic(cn);for(var s=0;s<st.length;s+=3)sc(cn,st[s],st[s+1]),sc(cn,st[s],st[s+2])},n.enable=function(){if(rt=window,Pt=document,fi=Pt.documentElement,xt=Pt.body,Ue&&(Il=Ue.utils.toArray,ul=Ue.utils.clamp,kd=Ue.core.context||er,Sf=Ue.core.suppressOverwrites||er,Sp=rt.history.scrollRestoration||"auto",Vd=rt.pageYOffset||0,Ue.core.globals("ScrollTrigger",n),xt)){Xa=1,ta=document.createElement("div"),ta.style.height="100vh",ta.style.position="absolute",vx(),r1(),$t.register(Ue),n.isTouch=$t.isTouch,Jr=$t.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Bd=$t.isTouch===1,un(rt,"wheel",yo),xp=[rt,Pt,fi,xt],Ue.matchMedia?(n.matchMedia=function(c){var u=Ue.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},Ue.addEventListener("matchMediaInit",function(){return Ap()}),Ue.addEventListener("matchMediaRevert",function(){return _x()}),Ue.addEventListener("matchMedia",function(){Ys(0,1),fo("matchMedia")}),Ue.matchMedia().add("(orientation: portrait)",function(){return bf(),bf})):console.warn("Requires GSAP 3.11.0 or later"),bf(),un(Pt,"scroll",yo);var i=xt.hasAttribute("style"),r=xt.style,s=r.borderTopStyle,o=Ue.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=wr(xt),rn.m=Math.round(a.top+rn.sc())||0,zn.m=Math.round(a.left+zn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(xt.setAttribute("style",""),xt.removeAttribute("style")),tc=setInterval(f_,250),Ue.delayedCall(.5,function(){return nc=0}),un(Pt,"touchcancel",er),un(xt,"touchstart",er),rc(un,Pt,"pointerdown,touchstart,mousedown",a_),rc(un,Pt,"pointerup,touchend,mouseup",l_),Fd=Ue.utils.checkPrefix("transform"),Yc.push(Fd),Bo=xn(),yu=Ue.delayedCall(.2,Ys).pause(),ko=[Pt,"visibilitychange",function(){var c=rt.innerWidth,u=rt.innerHeight;Pt.hidden?(i_=c,r_=u):(i_!==c||r_!==u)&&Ya()},Pt,"DOMContentLoaded",Ys,rt,"load",Ys,rt,"resize",Ya],ic(un),nt.forEach(function(c){return c.enable(0,1)}),l=0;l<st.length;l+=3)sc(cn,st[l],st[l+1]),sc(cn,st[l],st[l+2])}},n.config=function(i){"limitCallbacks"in i&&(yf=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(tc)||(tc=r)&&setInterval(f_,r),"ignoreMobileResize"in i&&(Bd=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(ic(cn)||ic(un,i.autoRefreshEvents||"none"),sx=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=Wn(i),o=st.indexOf(s),a=co(s);~o&&st.splice(o,a?6:2),r&&(a?ur.unshift(rt,r,xt,r,fi,r):ur.unshift(s,r))},n.clearMatchMedia=function(i){nt.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(li(i)?Wn(i):i).getBoundingClientRect(),a=o[s?no:io]*r||0;return s?o.right-a>0&&o.left+a<rt.innerWidth:o.bottom-a>0&&o.top+a<rt.innerHeight},n.positionInViewport=function(i,r,s){li(i)&&(i=Wn(i));var o=i.getBoundingClientRect(),a=o[s?no:io],l=r==null?a/2:r in bu?bu[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/rt.innerWidth:(o.top+l)/rt.innerHeight},n.killAll=function(i){if(nt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=uo.killAll||[];uo={},r.forEach(function(s){return s()})}},n}();ot.version="3.12.7";ot.saveStyles=function(n){return n?Il(n).forEach(function(e){if(e&&e.style){var t=ai.indexOf(e);t>=0&&ai.splice(t,5),ai.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ue.core.getCache(e),kd())}}):ai};ot.revert=function(n,e){return Ap(!n,e)};ot.create=function(n,e){return new ot(n,e)};ot.refresh=function(n){return n?Ya(!0):(Bo||ot.register())&&Ys(!0)};ot.update=function(n){return++st.cache&&Nr(n===!0?2:0)};ot.clearScrollMemory=gx;ot.maxScroll=function(n,e){return sr(n,e?zn:rn)};ot.getScrollFunc=function(n,e){return xs(Wn(n),e?zn:rn)};ot.getById=function(n){return Hd[n]};ot.getAll=function(){return nt.filter(function(n){return n.vars.id!=="ScrollSmoother"})};ot.isScrolling=function(){return!!Ui};ot.snapDirectional=Tp;ot.addEventListener=function(n,e){var t=uo[n]||(uo[n]=[]);~t.indexOf(e)||t.push(e)};ot.removeEventListener=function(n,e){var t=uo[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};ot.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],d=[],h=Ue.delayedCall(r,function(){u(f,d),f=[],d=[]}).pause();return function(g){f.length||h.restart(!0),f.push(g.trigger),d.push(g),s<=f.length&&h.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&bn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return bn(s)&&(s=s(),un(ot,"refresh",function(){return s=e.batchMax()})),Il(n).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,t.push(ot.create(c))}),t};var g_=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Af=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+($t.isTouch?" pinch-zoom":""):"none",e===fi&&n(xt,t)},uc={auto:1,scroll:1},_1=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ue.core.getCache(s),a=xn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==xt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(uc[(l=Ci(s)).overflowY]||uc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!co(s)&&(uc[(l=Ci(s)).overflowY]||uc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Sx=function(e,t,i,r){return $t.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&_1,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&un(Pt,$t.eventTypes[0],x_,!1,!0)},onDisable:function(){return cn(Pt,$t.eventTypes[0],x_,!0)}})},g1=/(input|label|select|textarea)/i,v_,x_=function(e){var t=g1.test(e.target.tagName);(t||v_)&&(e._gsapAllow=!0,v_=t)},v1=function(e){Hs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Wn(e.target)||fi,u=Ue.core.globals().ScrollSmoother,f=u&&u.get(),d=Jr&&(e.content&&Wn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),h=xs(c,rn),g=xs(c,zn),_=1,m=($t.isTouch&&rt.visualViewport?rt.visualViewport.scale*rt.visualViewport.width:rt.outerWidth)/rt.innerWidth,p=0,T=bn(r)?function(){return r(a)}:function(){return r||2.8},E,v,R=Sx(c,e.type,!0,s),C=function(){return v=!1},w=er,I=er,S=function(){l=sr(c,rn),I=ul(Jr?1:0,l),i&&(w=ul(0,sr(c,zn))),E=ro},x=function(){d._gsap.y=$a(parseFloat(d._gsap.y)+h.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},U=function(){if(v){requestAnimationFrame(C);var V=$a(a.deltaY/2),de=I(h.v-V);if(d&&de!==h.v+h.offset){h.offset=de-h.v;var O=$a((parseFloat(d&&d._gsap.y)||0)-h.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+O+", 0, 1)",d._gsap.y=O+"px",h.cacheID=st.cache,Nr()}return!0}h.offset&&x(),v=!0},N,z,X,ee,W=function(){S(),N.isActive()&&N.vars.scrollY>l&&(h()>l?N.progress(1)&&h(l):N.resetTo("scrollY",l))};return d&&Ue.set(d,{y:"+=0"}),e.ignoreCheck=function(Y){return Jr&&Y.type==="touchmove"&&U()||_>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){v=!1;var Y=_;_=$a((rt.visualViewport&&rt.visualViewport.scale||1)/m),N.pause(),Y!==_&&Af(c,_>1.01?!0:i?!1:"x"),z=g(),X=h(),S(),E=ro},e.onRelease=e.onGestureStart=function(Y,V){if(h.offset&&x(),!V)ee.restart(!0);else{st.cache++;var de=T(),O,Se;i&&(O=g(),Se=O+de*.05*-Y.velocityX/.227,de*=g_(g,O,Se,sr(c,zn)),N.vars.scrollX=w(Se)),O=h(),Se=O+de*.05*-Y.velocityY/.227,de*=g_(h,O,Se,sr(c,rn)),N.vars.scrollY=I(Se),N.invalidate().duration(de).play(.01),(Jr&&N.vars.scrollY>=l||O>=l-1)&&Ue.to({},{onUpdate:W,duration:de})}o&&o(Y)},e.onWheel=function(){N._ts&&N.pause(),xn()-p>1e3&&(E=0,p=xn())},e.onChange=function(Y,V,de,O,Se){if(ro!==E&&S(),V&&i&&g(w(O[2]===V?z+(Y.startX-Y.x):g()+V-O[1])),de){h.offset&&x();var De=Se[2]===de,Ke=De?X+Y.startY-Y.y:h()+de-Se[1],te=I(Ke);De&&Ke!==te&&(X+=te-Ke),h(te)}(de||V)&&Nr()},e.onEnable=function(){Af(c,i?!1:"x"),ot.addEventListener("refresh",W),un(rt,"resize",W),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=g.smooth=!1),R.enable()},e.onDisable=function(){Af(c,!0),cn(rt,"resize",W),ot.removeEventListener("refresh",W),R.kill()},e.lockAxis=e.lockAxis!==!1,a=new $t(e),a.iOS=Jr,Jr&&!h()&&h(1),Jr&&Ue.ticker.add(er),ee=a._dc,N=Ue.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:xx(h,h(),function(){return N.pause()})},onUpdate:Nr,onComplete:ee.vars.onComplete}),a};ot.sort=function(n){if(bn(n))return nt.sort(n);var e=rt.pageYOffset||0;return ot.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+rt.innerHeight}),nt.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};ot.observe=function(n){return new $t(n)};ot.normalizeScroll=function(n){if(typeof n>"u")return Un;if(n===!0&&Un)return Un.enable();if(n===!1){Un&&Un.kill(),Un=n;return}var e=n instanceof $t?n:v1(n);return Un&&Un.target===e.target&&Un.kill(),co(e.target)&&(Un=e),e};ot.core={_getVelocityProp:Od,_inputObserver:Sx,_scrollers:st,_proxies:ur,bridge:{ss:function(){Ui||fo("scrollStart"),Ui=xn()},ref:function(){return vn}}};cx()&&Ue.registerPlugin(ot);const x1="/Canva-Course/assets/amr-DCttfvvK.jpg";Di.registerPlugin(ot);const S1={name:"InstructorSection",setup(){const n=Ii(null);return bs(()=>{Di.from(".instructor-card",{y:60,opacity:0,duration:1,scrollTrigger:{trigger:".instructor-section",start:"top center+=100",toggleActions:"play none none reverse"}}),Di.to(".shape-1",{x:100,y:-100,duration:20,repeat:-1,yoyo:!0,ease:"none"}),Di.to(".shape-2",{x:-150,y:150,duration:25,repeat:-1,yoyo:!0,ease:"none"})}),{instructorSection:n}}},y1={class:"instructor-section",ref:"instructorSection"};function M1(n,e,t,i,r,s){return Nt(),Gt("section",y1,e[0]||(e[0]=[yl('<div class="section-background" data-v-9ccb653e><div class="gradient-overlay" data-v-9ccb653e></div><div class="animated-shape shape-1" data-v-9ccb653e></div><div class="animated-shape shape-2" data-v-9ccb653e></div></div><div class="container" data-v-9ccb653e><div class="section-header" data-aos="fade-up" data-v-9ccb653e><h2 class="section-title" data-v-9ccb653e> تعرف على <span class="gradient-text" data-v-9ccb653e>مدربك</span></h2></div><div class="instructor-profile" data-aos="fade-up" data-aos-delay="200" data-v-9ccb653e><div class="instructor-card" data-v-9ccb653e><div class="instructor-image-wrapper" data-v-9ccb653e><img src="'+x1+'" alt="amr-essam" class="instructor-image" data-v-9ccb653e></div><div class="instructor-content" data-v-9ccb653e><div class="instructor-header" data-v-9ccb653e><h3 data-v-9ccb653e>د. عمرو عصام الدين </h3><p data-v-9ccb653e>طبيب امتياز بمستشفيات الازهر الشريف ، خبرة اكثر من 5 سنوات في مجال تصميم الجرافيك ، 7 سنوات مقدم دروس تعليمية على اليوتيوب ، تدرب علي يده اكثر من 6000 طالب عن كانفا وطرق الربح منه.</p><div class="rating" data-v-9ccb653e><div class="stars" data-v-9ccb653e><i class="fas fa-star" data-v-9ccb653e></i><i class="fas fa-star" data-v-9ccb653e></i><i class="fas fa-star" data-v-9ccb653e></i><i class="fas fa-star" data-v-9ccb653e></i><i class="fas fa-star" data-v-9ccb653e></i></div><span data-v-9ccb653e>4.9</span></div></div><div class="stats-grid" data-v-9ccb653e><div class="stat-item" data-v-9ccb653e><div class="stat-icon" data-v-9ccb653e><i class="fas fa-users" data-v-9ccb653e></i></div><div class="stat-data" data-v-9ccb653e><h4 data-v-9ccb653e>100+</h4><p data-v-9ccb653e>متدرب</p></div></div><div class="stat-item" data-v-9ccb653e><div class="stat-icon" data-v-9ccb653e><i class="fas fa-award" data-v-9ccb653e></i></div><div class="stat-data" data-v-9ccb653e><h4 data-v-9ccb653e>5+</h4><p data-v-9ccb653e>دورة تدريبية</p></div></div></div><div class="expertise-tags" data-v-9ccb653e><span class="tag" data-v-9ccb653e>تصميم الهويات</span><span class="tag" data-v-9ccb653e>التصميم الإعلاني</span><span class="tag" data-v-9ccb653e>تصميم المحتوى</span></div></div></div></div></div>',2)]),512)}const E1=hr(S1,[["render",M1],["__scopeId","data-v-9ccb653e"]]),b1={name:"CTASection",setup(){const n=Ii({days:"00",hours:"00",minutes:"00",seconds:"00"}),e=new Date("2025-02-28").getTime(),t=()=>{const r=new Date().getTime(),s=e-r;n.value={days:Math.floor(s/(1e3*60*60*24)).toString().padStart(2,"0"),hours:Math.floor(s%(1e3*60*60*24)/(1e3*60*60)).toString().padStart(2,"0"),minutes:Math.floor(s%(1e3*60*60)/(1e3*60)).toString().padStart(2,"0"),seconds:Math.floor(s%(1e3*60)/1e3).toString().padStart(2,"0")}};let i;return bs(()=>{t(),i=setInterval(t,1e3)}),kl(()=>{clearInterval(i)}),{timer:n}}},T1={class:"cta"},A1={class:"cta-content"},w1={class:"countdown","data-aos":"fade-up","data-aos-delay":"100"},C1={class:"countdown-item"},R1={class:"time-block"},P1={class:"number"},D1={class:"countdown-item"},L1={class:"time-block"},I1={class:"number"},U1={class:"countdown-item"},N1={class:"time-block"},O1={class:"number"},F1={class:"countdown-item"},B1={class:"time-block"},k1={class:"number"};function z1(n,e,t,i,r,s){const o=ui("router-link");return Nt(),Gt("section",T1,[e[11]||(e[11]=le("div",{class:"cta-background"},[le("div",{class:"glow-effect"}),le("div",{class:"pattern-overlay"})],-1)),le("div",A1,[e[8]||(e[8]=le("div",{class:"offer-badge"},[le("i",{class:"fas fa-percentage"}),Hn(" عرض خاص لفترة محدودة ")],-1)),e[9]||(e[9]=le("h2",{class:"cta-title","data-aos":"fade-up"},[Hn(" سجل الآن واحصل على "),le("span",{class:"highlight"},"خصم 30%")],-1)),le("div",w1,[le("div",C1,[le("div",R1,[le("span",P1,Fn(i.timer.days),1),e[0]||(e[0]=le("span",{class:"label"},"يوم",-1))])]),e[4]||(e[4]=le("div",{class:"countdown-separator"},":",-1)),le("div",D1,[le("div",L1,[le("span",I1,Fn(i.timer.hours),1),e[1]||(e[1]=le("span",{class:"label"},"ساعة",-1))])]),e[5]||(e[5]=le("div",{class:"countdown-separator"},":",-1)),le("div",U1,[le("div",N1,[le("span",O1,Fn(i.timer.minutes),1),e[2]||(e[2]=le("span",{class:"label"},"دقيقة",-1))])]),e[6]||(e[6]=le("div",{class:"countdown-separator"},":",-1)),le("div",F1,[le("div",B1,[le("span",k1,Fn(i.timer.seconds),1),e[3]||(e[3]=le("span",{class:"label"},"ثانية",-1))])])]),e[10]||(e[10]=yl('<div class="features-grid" data-aos="fade-up" data-aos-delay="200" data-v-e2c1c995><div class="feature" data-v-e2c1c995><i class="fas fa-infinity" data-v-e2c1c995></i><span data-v-e2c1c995>وصول مدى الحياة</span></div><div class="feature" data-v-e2c1c995><i class="fas fa-headset" data-v-e2c1c995></i><span data-v-e2c1c995>دعم فني مستمر</span></div><div class="feature" data-v-e2c1c995><i class="fas fa-certificate" data-v-e2c1c995></i><span data-v-e2c1c995>شهادة معتمدة</span></div><div class="feature" data-v-e2c1c995><i class="fas fa-shield-alt" data-v-e2c1c995></i><span data-v-e2c1c995>ضمان استرداد المال</span></div></div>',1)),lt(o,{to:"/register",class:"cta-button","data-aos":"fade-up","data-aos-delay":"300"},{default:pi(()=>e[7]||(e[7]=[le("span",{class:"button-text"},[Hn(" سجل الآن "),le("i",{class:"fas fa-arrow-left"})],-1)])),_:1})])])}const H1=hr(b1,[["render",z1],["__scopeId","data-v-e2c1c995"]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wp="172",V1=0,S_=1,G1=2,yx=1,W1=2,yr=3,Ss=0,Zn=1,Cr=2,ps=0,ia=1,Wd=2,y_=3,M_=4,X1=5,Xs=100,$1=101,q1=102,Y1=103,K1=104,j1=200,Z1=201,J1=202,Q1=203,Xd=204,$d=205,eA=206,tA=207,nA=208,iA=209,rA=210,sA=211,oA=212,aA=213,lA=214,qd=0,Yd=1,Kd=2,ga=3,jd=4,Zd=5,Jd=6,Qd=7,Mx=0,cA=1,uA=2,ms=0,fA=1,dA=2,hA=3,pA=4,mA=5,_A=6,gA=7,Ex=300,va=301,xa=302,eh=303,th=304,$u=306,nh=1e3,Ks=1001,ih=1002,$i=1003,vA=1004,fc=1005,or=1006,wf=1007,js=1008,kr=1009,bx=1010,Tx=1011,Nl=1012,Cp=1013,ho=1014,Pr=1015,Vl=1016,Rp=1017,Pp=1018,Sa=1020,Ax=35902,wx=1021,Cx=1022,Gi=1023,Rx=1024,Px=1025,ra=1026,ya=1027,Dx=1028,Dp=1029,Lx=1030,Lp=1031,Ip=1033,jc=33776,Zc=33777,Jc=33778,Qc=33779,rh=35840,sh=35841,oh=35842,ah=35843,lh=36196,ch=37492,uh=37496,fh=37808,dh=37809,hh=37810,ph=37811,mh=37812,_h=37813,gh=37814,vh=37815,xh=37816,Sh=37817,yh=37818,Mh=37819,Eh=37820,bh=37821,eu=36492,Th=36494,Ah=36495,Ix=36283,wh=36284,Ch=36285,Rh=36286,xA=3200,SA=3201,yA=0,MA=1,rs="",Ai="srgb",Ma="srgb-linear",Tu="linear",Mt="srgb",Mo=7680,E_=519,EA=512,bA=513,TA=514,Ux=515,AA=516,wA=517,CA=518,RA=519,b_=35044,T_="300 es",Dr=2e3,Au=2001;class Ta{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cf=Math.PI/180,Ph=180/Math.PI;function Gl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function at(n,e,t){return Math.max(e,Math.min(t,n))}function PA(n,e){return(n%e+e)%e}function Rf(n,e,t){return(1-t)*n+t*e}function Na(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class wt{constructor(e=0,t=0){wt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,i,r,s,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],_=r[0],m=r[3],p=r[6],T=r[1],E=r[4],v=r[7],R=r[2],C=r[5],w=r[8];return s[0]=o*_+a*T+l*R,s[3]=o*m+a*E+l*C,s[6]=o*p+a*v+l*w,s[1]=c*_+u*T+f*R,s[4]=c*m+u*E+f*C,s[7]=c*p+u*v+f*w,s[2]=d*_+h*T+g*R,s[5]=d*m+h*E+g*C,s[8]=d*p+h*v+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,g=t*f+i*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=h*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Pf.makeScale(e,t)),this}rotate(e){return this.premultiply(Pf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pf=new Qe;function Nx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function wu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function DA(){const n=wu("canvas");return n.style.display="block",n}const A_={};function zo(n){n in A_||(A_[n]=!0,console.warn(n))}function LA(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function IA(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function UA(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const w_=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),C_=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function NA(){const n={enabled:!0,workingColorSpace:Ma,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Mt&&(r.r=Or(r.r),r.g=Or(r.g),r.b=Or(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Mt&&(r.r=sa(r.r),r.g=sa(r.g),r.b=sa(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===rs?Tu:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ma]:{primaries:e,whitePoint:i,transfer:Tu,toXYZ:w_,fromXYZ:C_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ai},outputColorSpaceConfig:{drawingBufferColorSpace:Ai}},[Ai]:{primaries:e,whitePoint:i,transfer:Mt,toXYZ:w_,fromXYZ:C_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ai}}}),n}const pt=NA();function Or(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function sa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Eo;class OA{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Eo===void 0&&(Eo=wu("canvas")),Eo.width=e.width,Eo.height=e.height;const i=Eo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Eo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Or(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Or(t[i]/255)*255):t[i]=Or(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let FA=0;class Ox{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FA++}),this.uuid=Gl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Df(r[o].image)):s.push(Df(r[o]))}else s=Df(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Df(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?OA.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BA=0;class Jn extends Ta{constructor(e=Jn.DEFAULT_IMAGE,t=Jn.DEFAULT_MAPPING,i=Ks,r=Ks,s=or,o=js,a=Gi,l=kr,c=Jn.DEFAULT_ANISOTROPY,u=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BA++}),this.uuid=Gl(),this.name="",this.source=new Ox(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ex)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nh:e.x=e.x-Math.floor(e.x);break;case Ks:e.x=e.x<0?0:1;break;case ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nh:e.y=e.y-Math.floor(e.y);break;case Ks:e.y=e.y<0?0:1;break;case ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=Ex;Jn.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,t=0,i=0,r=1){Xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,v=(h+1)/2,R=(p+1)/2,C=(u+d)/4,w=(f+_)/4,I=(g+m)/4;return E>v&&E>R?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=C/i,s=w/i):v>R?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=C/r,s=I/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=w/s,r=I/s),this.set(i,r,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(f-_)/T,this.z=(d-u)/T,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kA extends Ta{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:or,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Jn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Ox(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class po extends kA{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Fx extends Jn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=$i,this.minFilter=$i,this.wrapR=Ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zA extends Jn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=$i,this.minFilter=$i,this.wrapR=Ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wl{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],h=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||c!==h||u!==g){let m=1-a;const p=l*d+c*h+u*g+f*_,T=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const R=Math.sqrt(E),C=Math.atan2(R,p*T);m=Math.sin(m*C)/R,a=Math.sin(a*C)/R}const v=a*T;if(l=l*m+d*v,c=c*m+h*v,u=u*m+g*v,f=f*m+_*v,m===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*h-c*d,e[t+1]=l*g+u*d+c*f-a*h,e[t+2]=c*g+u*h+a*d-l*f,e[t+3]=u*g-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,t=0,i=0){re.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(R_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(R_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lf.copy(this).projectOnVector(e),this.sub(Lf)}reflect(e){return this.sub(Lf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lf=new re,R_=new Wl;class Xl{constructor(e=new re(1/0,1/0,1/0),t=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fi):Fi.fromBufferAttribute(s,o),Fi.applyMatrix4(e.matrixWorld),this.expandByPoint(Fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),dc.copy(i.boundingBox)),dc.applyMatrix4(e.matrixWorld),this.union(dc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oa),hc.subVectors(this.max,Oa),bo.subVectors(e.a,Oa),To.subVectors(e.b,Oa),Ao.subVectors(e.c,Oa),Xr.subVectors(To,bo),$r.subVectors(Ao,To),Ls.subVectors(bo,Ao);let t=[0,-Xr.z,Xr.y,0,-$r.z,$r.y,0,-Ls.z,Ls.y,Xr.z,0,-Xr.x,$r.z,0,-$r.x,Ls.z,0,-Ls.x,-Xr.y,Xr.x,0,-$r.y,$r.x,0,-Ls.y,Ls.x,0];return!If(t,bo,To,Ao,hc)||(t=[1,0,0,0,1,0,0,0,1],!If(t,bo,To,Ao,hc))?!1:(pc.crossVectors(Xr,$r),t=[pc.x,pc.y,pc.z],If(t,bo,To,Ao,hc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_r[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_r[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_r[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_r[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_r[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_r[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_r[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_r[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_r),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _r=[new re,new re,new re,new re,new re,new re,new re,new re],Fi=new re,dc=new Xl,bo=new re,To=new re,Ao=new re,Xr=new re,$r=new re,Ls=new re,Oa=new re,hc=new re,pc=new re,Is=new re;function If(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Is.fromArray(n,s);const a=r.x*Math.abs(Is.x)+r.y*Math.abs(Is.y)+r.z*Math.abs(Is.z),l=e.dot(Is),c=t.dot(Is),u=i.dot(Is);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const HA=new Xl,Fa=new re,Uf=new re;class qu{constructor(e=new re,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):HA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fa.subVectors(e,this.center);const t=Fa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Fa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fa.copy(e.center).add(Uf)),this.expandByPoint(Fa.copy(e.center).sub(Uf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gr=new re,Nf=new re,mc=new re,qr=new re,Of=new re,_c=new re,Ff=new re;class Bx{constructor(e=new re,t=new re(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gr.copy(this.origin).addScaledVector(this.direction,t),gr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Nf.copy(e).add(t).multiplyScalar(.5),mc.copy(t).sub(e).normalize(),qr.copy(this.origin).sub(Nf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(mc),a=qr.dot(this.direction),l=-qr.dot(mc),c=qr.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Nf).addScaledVector(mc,d),h}intersectSphere(e,t){gr.subVectors(e.center,this.origin);const i=gr.dot(this.direction),r=gr.dot(gr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,gr)!==null}intersectTriangle(e,t,i,r,s){Of.subVectors(t,e),_c.subVectors(i,e),Ff.crossVectors(Of,_c);let o=this.direction.dot(Ff),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qr.subVectors(this.origin,e);const l=a*this.direction.dot(_c.crossVectors(qr,_c));if(l<0)return null;const c=a*this.direction.dot(Of.cross(qr));if(c<0||l+c>o)return null;const u=-a*qr.dot(Ff);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,t,i,r,s,o,a,l,c,u,f,d,h,g,_,m){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,d,h,g,_,m)}set(e,t,i,r,s,o,a,l,c,u,f,d,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/wo.setFromMatrixColumn(e,0).length(),s=1/wo.setFromMatrixColumn(e,1).length(),o=1/wo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+h*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,_=c*f;t[0]=d+_*a,t[4]=g*a-h,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,_=c*f;t[0]=d-_*a,t[4]=-o*f,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-h,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=h*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*f,t[8]=g*f+h,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,h=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+_,t[5]=o*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=a*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(VA,e,GA)}lookAt(e,t,i){const r=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Yr.crossVectors(i,ii),Yr.lengthSq()===0&&(Math.abs(i.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Yr.crossVectors(i,ii)),Yr.normalize(),gc.crossVectors(ii,Yr),r[0]=Yr.x,r[4]=gc.x,r[8]=ii.x,r[1]=Yr.y,r[5]=gc.y,r[9]=ii.y,r[2]=Yr.z,r[6]=gc.z,r[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],_=i[6],m=i[10],p=i[14],T=i[3],E=i[7],v=i[11],R=i[15],C=r[0],w=r[4],I=r[8],S=r[12],x=r[1],U=r[5],N=r[9],z=r[13],X=r[2],ee=r[6],W=r[10],Y=r[14],V=r[3],de=r[7],O=r[11],Se=r[15];return s[0]=o*C+a*x+l*X+c*V,s[4]=o*w+a*U+l*ee+c*de,s[8]=o*I+a*N+l*W+c*O,s[12]=o*S+a*z+l*Y+c*Se,s[1]=u*C+f*x+d*X+h*V,s[5]=u*w+f*U+d*ee+h*de,s[9]=u*I+f*N+d*W+h*O,s[13]=u*S+f*z+d*Y+h*Se,s[2]=g*C+_*x+m*X+p*V,s[6]=g*w+_*U+m*ee+p*de,s[10]=g*I+_*N+m*W+p*O,s[14]=g*S+_*z+m*Y+p*Se,s[3]=T*C+E*x+v*X+R*V,s[7]=T*w+E*U+v*ee+R*de,s[11]=T*I+E*N+v*W+R*O,s[15]=T*S+E*z+v*Y+R*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*h-i*l*h)+_*(+t*l*h-t*c*d+s*o*d-r*o*h+r*c*u-s*l*u)+m*(+t*c*f-t*a*h-s*o*f+i*o*h+s*a*u-i*c*u)+p*(-r*a*u-t*l*f+t*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=f*m*c-_*d*c+_*l*h-a*m*h-f*l*p+a*d*p,E=g*d*c-u*m*c-g*l*h+o*m*h+u*l*p-o*d*p,v=u*_*c-g*f*c+g*a*h-o*_*h-u*a*p+o*f*p,R=g*f*l-u*_*l-g*a*d+o*_*d+u*a*m-o*f*m,C=t*T+i*E+r*v+s*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=T*w,e[1]=(_*d*s-f*m*s-_*r*h+i*m*h+f*r*p-i*d*p)*w,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*p+i*l*p)*w,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*h-i*l*h)*w,e[4]=E*w,e[5]=(u*m*s-g*d*s+g*r*h-t*m*h-u*r*p+t*d*p)*w,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*w,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*h+t*l*h)*w,e[8]=v*w,e[9]=(g*f*s-u*_*s-g*i*h+t*_*h+u*i*p-t*f*p)*w,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*p+t*a*p)*w,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*h-t*a*h)*w,e[12]=R*w,e[13]=(u*_*r-g*f*r+g*i*d-t*_*d-u*i*m+t*f*m)*w,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*w,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*d+t*a*d)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,g=s*f,_=o*u,m=o*f,p=a*f,T=l*c,E=l*u,v=l*f,R=i.x,C=i.y,w=i.z;return r[0]=(1-(_+p))*R,r[1]=(h+v)*R,r[2]=(g-E)*R,r[3]=0,r[4]=(h-v)*C,r[5]=(1-(d+p))*C,r[6]=(m+T)*C,r[7]=0,r[8]=(g+E)*w,r[9]=(m-T)*w,r[10]=(1-(d+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=wo.set(r[0],r[1],r[2]).length();const o=wo.set(r[4],r[5],r[6]).length(),a=wo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bi.copy(this);const c=1/s,u=1/o,f=1/a;return Bi.elements[0]*=c,Bi.elements[1]*=c,Bi.elements[2]*=c,Bi.elements[4]*=u,Bi.elements[5]*=u,Bi.elements[6]*=u,Bi.elements[8]*=f,Bi.elements[9]*=f,Bi.elements[10]*=f,t.setFromRotationMatrix(Bi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Dr){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let h,g;if(a===Dr)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Au)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Dr){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),d=(t+e)*c,h=(i+r)*u;let g,_;if(a===Dr)g=(o+s)*f,_=-2*f;else if(a===Au)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const wo=new re,Bi=new qt,VA=new re(0,0,0),GA=new re(1,1,1),Yr=new re,gc=new re,ii=new re,P_=new qt,D_=new Wl;class zr{constructor(e=0,t=0,i=0,r=zr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return P_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(P_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return D_.setFromEuler(this),this.setFromQuaternion(D_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zr.DEFAULT_ORDER="XYZ";class kx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let WA=0;const L_=new re,Co=new Wl,vr=new qt,vc=new re,Ba=new re,XA=new re,$A=new Wl,I_=new re(1,0,0),U_=new re(0,1,0),N_=new re(0,0,1),O_={type:"added"},qA={type:"removed"},Ro={type:"childadded",child:null},Bf={type:"childremoved",child:null};class Qn extends Ta{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WA++}),this.uuid=Gl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qn.DEFAULT_UP.clone();const e=new re,t=new zr,i=new Wl,r=new re(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qt},normalMatrix:{value:new Qe}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=Qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Co.setFromAxisAngle(e,t),this.quaternion.multiply(Co),this}rotateOnWorldAxis(e,t){return Co.setFromAxisAngle(e,t),this.quaternion.premultiply(Co),this}rotateX(e){return this.rotateOnAxis(I_,e)}rotateY(e){return this.rotateOnAxis(U_,e)}rotateZ(e){return this.rotateOnAxis(N_,e)}translateOnAxis(e,t){return L_.copy(e).applyQuaternion(this.quaternion),this.position.add(L_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(I_,e)}translateY(e){return this.translateOnAxis(U_,e)}translateZ(e){return this.translateOnAxis(N_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vc.copy(e):vc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vr.lookAt(Ba,vc,this.up):vr.lookAt(vc,Ba,this.up),this.quaternion.setFromRotationMatrix(vr),r&&(vr.extractRotation(r.matrixWorld),Co.setFromRotationMatrix(vr),this.quaternion.premultiply(Co.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(O_),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qA),Bf.child=e,this.dispatchEvent(Bf),Bf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vr.multiply(e.parent.matrixWorld)),e.applyMatrix4(vr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(O_),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,e,XA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,$A,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Qn.DEFAULT_UP=new re(0,1,0);Qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ki=new re,xr=new re,kf=new re,Sr=new re,Po=new re,Do=new re,F_=new re,zf=new re,Hf=new re,Vf=new re,Gf=new Xt,Wf=new Xt,Xf=new Xt;class Vi{constructor(e=new re,t=new re,i=new re){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ki.subVectors(e,t),r.cross(ki);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ki.subVectors(r,t),xr.subVectors(i,t),kf.subVectors(e,t);const o=ki.dot(ki),a=ki.dot(xr),l=ki.dot(kf),c=xr.dot(xr),u=xr.dot(kf),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Sr)===null?!1:Sr.x>=0&&Sr.y>=0&&Sr.x+Sr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Sr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Sr.x),l.addScaledVector(o,Sr.y),l.addScaledVector(a,Sr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Gf.setScalar(0),Wf.setScalar(0),Xf.setScalar(0),Gf.fromBufferAttribute(e,t),Wf.fromBufferAttribute(e,i),Xf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Gf,s.x),o.addScaledVector(Wf,s.y),o.addScaledVector(Xf,s.z),o}static isFrontFacing(e,t,i,r){return ki.subVectors(i,t),xr.subVectors(e,t),ki.cross(xr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ki.subVectors(this.c,this.b),xr.subVectors(this.a,this.b),ki.cross(xr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Vi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Po.subVectors(r,i),Do.subVectors(s,i),zf.subVectors(e,i);const l=Po.dot(zf),c=Do.dot(zf);if(l<=0&&c<=0)return t.copy(i);Hf.subVectors(e,r);const u=Po.dot(Hf),f=Do.dot(Hf);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Po,o);Vf.subVectors(e,s);const h=Po.dot(Vf),g=Do.dot(Vf);if(g>=0&&h<=g)return t.copy(s);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Do,a);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return F_.subVectors(s,r),a=(f-u)/(f-u+(h-g)),t.copy(r).addScaledVector(F_,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(i).addScaledVector(Po,o).addScaledVector(Do,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kr={h:0,s:0,l:0},xc={h:0,s:0,l:0};function $f(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class yt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,pt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=pt.workingColorSpace){if(e=PA(e,1),t=at(t,0,1),i=at(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=$f(o,s,e+1/3),this.g=$f(o,s,e),this.b=$f(o,s,e-1/3)}return pt.toWorkingColorSpace(this,r),this}setStyle(e,t=Ai){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ai){const i=zx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Or(e.r),this.g=Or(e.g),this.b=Or(e.b),this}copyLinearToSRGB(e){return this.r=sa(e.r),this.g=sa(e.g),this.b=sa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ai){return pt.fromWorkingColorSpace(gn.copy(this),e),Math.round(at(gn.r*255,0,255))*65536+Math.round(at(gn.g*255,0,255))*256+Math.round(at(gn.b*255,0,255))}getHexString(e=Ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(gn.copy(this),t);const i=gn.r,r=gn.g,s=gn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=Ai){pt.fromWorkingColorSpace(gn.copy(this),e);const t=gn.r,i=gn.g,r=gn.b;return e!==Ai?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Kr),this.setHSL(Kr.h+e,Kr.s+t,Kr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Kr),e.getHSL(xc);const i=Rf(Kr.h,xc.h,t),r=Rf(Kr.s,xc.s,t),s=Rf(Kr.l,xc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new yt;yt.NAMES=zx;let YA=0;class $l extends Ta{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YA++}),this.uuid=Gl(),this.name="",this.type="Material",this.blending=ia,this.side=Ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xd,this.blendDst=$d,this.blendEquation=Xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=E_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mo,this.stencilZFail=Mo,this.stencilZPass=Mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ia&&(i.blending=this.blending),this.side!==Ss&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xd&&(i.blendSrc=this.blendSrc),this.blendDst!==$d&&(i.blendDst=this.blendDst),this.blendEquation!==Xs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ga&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==E_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Mo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Mo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Hx extends $l{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zr,this.combine=Mx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new re,Sc=new wt;class qi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=b_,this.updateRanges=[],this.gpuType=Pr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Sc.fromBufferAttribute(this,t),Sc.applyMatrix3(e),this.setXY(t,Sc.x,Sc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Na(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Na(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Na(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Na(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Na(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),i=Gn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),i=Gn(i,this.array),r=Gn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),i=Gn(i,this.array),r=Gn(r,this.array),s=Gn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==b_&&(e.usage=this.usage),e}}class Vx extends qi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Gx extends qi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class so extends qi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let KA=0;const bi=new qt,qf=new Qn,Lo=new re,ri=new Xl,ka=new Xl,ln=new re;class Vr extends Ta{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KA++}),this.uuid=Gl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nx(e)?Gx:Vx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,t,i){return bi.makeTranslation(e,t,i),this.applyMatrix4(bi),this}scale(e,t,i){return bi.makeScale(e,t,i),this.applyMatrix4(bi),this}lookAt(e){return qf.lookAt(e),qf.updateMatrix(),this.applyMatrix4(qf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lo).negate(),this.translate(Lo.x,Lo.y,Lo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new so(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];ri.setFromBufferAttribute(s),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const i=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ka.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(ri.min,ka.min),ri.expandByPoint(ln),ln.addVectors(ri.max,ka.max),ri.expandByPoint(ln)):(ri.expandByPoint(ka.min),ri.expandByPoint(ka.max))}ri.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ln.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ln));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ln.fromBufferAttribute(a,c),l&&(Lo.fromBufferAttribute(e,c),ln.add(Lo)),r=Math.max(r,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new re,l[I]=new re;const c=new re,u=new re,f=new re,d=new wt,h=new wt,g=new wt,_=new re,m=new re;function p(I,S,x){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,x),d.fromBufferAttribute(s,I),h.fromBufferAttribute(s,S),g.fromBufferAttribute(s,x),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const U=1/(h.x*g.y-g.x*h.y);isFinite(U)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(U),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(U),a[I].add(_),a[S].add(_),a[x].add(_),l[I].add(m),l[S].add(m),l[x].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let I=0,S=T.length;I<S;++I){const x=T[I],U=x.start,N=x.count;for(let z=U,X=U+N;z<X;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const E=new re,v=new re,R=new re,C=new re;function w(I){R.fromBufferAttribute(r,I),C.copy(R);const S=a[I];E.copy(S),E.sub(R.multiplyScalar(R.dot(S))).normalize(),v.crossVectors(C,S);const U=v.dot(l[I])<0?-1:1;o.setXYZW(I,E.x,E.y,E.z,U)}for(let I=0,S=T.length;I<S;++I){const x=T[I],U=x.start,N=x.count;for(let z=U,X=U+N;z<X;z+=3)w(e.getX(z+0)),w(e.getX(z+1)),w(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new re,s=new re,o=new re,a=new re,l=new re,c=new re,u=new re,f=new re;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new qi(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const B_=new qt,Us=new Bx,yc=new qu,k_=new re,Mc=new re,Ec=new re,bc=new re,Yf=new re,Tc=new re,z_=new re,Ac=new re;class Lr extends Qn{constructor(e=new Vr,t=new Hx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Tc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Yf.fromBufferAttribute(f,e),o?Tc.addScaledVector(Yf,u):Tc.addScaledVector(Yf.sub(t),u))}t.add(Tc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yc.copy(i.boundingSphere),yc.applyMatrix4(s),Us.copy(e.ray).recast(e.near),!(yc.containsPoint(Us.origin)===!1&&(Us.intersectSphere(yc,k_)===null||Us.origin.distanceToSquared(k_)>(e.far-e.near)**2))&&(B_.copy(s).invert(),Us.copy(e.ray).applyMatrix4(B_),!(i.boundingBox!==null&&Us.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Us)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],T=Math.max(m.start,h.start),E=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let v=T,R=E;v<R;v+=3){const C=a.getX(v),w=a.getX(v+1),I=a.getX(v+2);r=wc(this,p,e,i,c,u,f,C,w,I),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const T=a.getX(m),E=a.getX(m+1),v=a.getX(m+2);r=wc(this,o,e,i,c,u,f,T,E,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],T=Math.max(m.start,h.start),E=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let v=T,R=E;v<R;v+=3){const C=v,w=v+1,I=v+2;r=wc(this,p,e,i,c,u,f,C,w,I),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const T=m,E=m+1,v=m+2;r=wc(this,o,e,i,c,u,f,T,E,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function jA(n,e,t,i,r,s,o,a){let l;if(e.side===Zn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ss,a),l===null)return null;Ac.copy(a),Ac.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ac);return c<t.near||c>t.far?null:{distance:c,point:Ac.clone(),object:n}}function wc(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Mc),n.getVertexPosition(l,Ec),n.getVertexPosition(c,bc);const u=jA(n,e,t,i,Mc,Ec,bc,z_);if(u){const f=new re;Vi.getBarycoord(z_,Mc,Ec,bc,f),r&&(u.uv=Vi.getInterpolatedAttribute(r,a,l,c,f,new wt)),s&&(u.uv1=Vi.getInterpolatedAttribute(s,a,l,c,f,new wt)),o&&(u.normal=Vi.getInterpolatedAttribute(o,a,l,c,f,new re),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new re,materialIndex:0};Vi.getNormal(Mc,Ec,bc,d.normal),u.face=d,u.barycoord=f}return u}class ql extends Vr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new so(c,3)),this.setAttribute("normal",new so(u,3)),this.setAttribute("uv",new so(f,2));function g(_,m,p,T,E,v,R,C,w,I,S){const x=v/w,U=R/I,N=v/2,z=R/2,X=C/2,ee=w+1,W=I+1;let Y=0,V=0;const de=new re;for(let O=0;O<W;O++){const Se=O*U-z;for(let De=0;De<ee;De++){const Ke=De*x-N;de[_]=Ke*T,de[m]=Se*E,de[p]=X,c.push(de.x,de.y,de.z),de[_]=0,de[m]=0,de[p]=C>0?1:-1,u.push(de.x,de.y,de.z),f.push(De/w),f.push(1-O/I),Y+=1}}for(let O=0;O<I;O++)for(let Se=0;Se<w;Se++){const De=d+Se+ee*O,Ke=d+Se+ee*(O+1),te=d+(Se+1)+ee*(O+1),_e=d+(Se+1)+ee*O;l.push(De,Ke,_e),l.push(Ke,te,_e),V+=6}a.addGroup(h,V,S),h+=V,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ql(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ea(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function In(n){const e={};for(let t=0;t<n.length;t++){const i=Ea(n[t]);for(const r in i)e[r]=i[r]}return e}function ZA(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Wx(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const JA={clone:Ea,merge:In};var QA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ew=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ys extends $l{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=QA,this.fragmentShader=ew,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ea(e.uniforms),this.uniformsGroups=ZA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Xx extends Qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Dr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jr=new re,H_=new wt,V_=new wt;class Ri extends Xx{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ph*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ph*2*Math.atan(Math.tan(Cf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jr.x,jr.y).multiplyScalar(-e/jr.z),jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(jr.x,jr.y).multiplyScalar(-e/jr.z)}getViewSize(e,t){return this.getViewBounds(e,H_,V_),t.subVectors(V_,H_)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cf*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Io=-90,Uo=1;class tw extends Qn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ri(Io,Uo,e,t);r.layers=this.layers,this.add(r);const s=new Ri(Io,Uo,e,t);s.layers=this.layers,this.add(s);const o=new Ri(Io,Uo,e,t);o.layers=this.layers,this.add(o);const a=new Ri(Io,Uo,e,t);a.layers=this.layers,this.add(a);const l=new Ri(Io,Uo,e,t);l.layers=this.layers,this.add(l);const c=new Ri(Io,Uo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Dr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Au)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class $x extends Jn{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:va,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nw extends po{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new $x(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:or}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ql(5,5,5),s=new ys({name:"CubemapFromEquirect",uniforms:Ea(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zn,blending:ps});s.uniforms.tEquirect.value=t;const o=new Lr(r,s),a=t.minFilter;return t.minFilter===js&&(t.minFilter=or),new tw(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class iw extends Qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zr,this.environmentIntensity=1,this.environmentRotation=new zr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Kf=new re,rw=new re,sw=new Qe;class Vs{constructor(e=new re(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Kf.subVectors(i,t).cross(rw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Kf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||sw.getNormalMatrix(e),r=this.coplanarPoint(Kf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ns=new qu,Cc=new re;class qx{constructor(e=new Vs,t=new Vs,i=new Vs,r=new Vs,s=new Vs,o=new Vs){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Dr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],h=r[8],g=r[9],_=r[10],m=r[11],p=r[12],T=r[13],E=r[14],v=r[15];if(i[0].setComponents(l-s,d-c,m-h,v-p).normalize(),i[1].setComponents(l+s,d+c,m+h,v+p).normalize(),i[2].setComponents(l+o,d+u,m+g,v+T).normalize(),i[3].setComponents(l-o,d-u,m-g,v-T).normalize(),i[4].setComponents(l-a,d-f,m-_,v-E).normalize(),t===Dr)i[5].setComponents(l+a,d+f,m+_,v+E).normalize();else if(t===Au)i[5].setComponents(a,f,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(e){return Ns.center.set(0,0,0),Ns.radius=.7071067811865476,Ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Cc.x=r.normal.x>0?e.max.x:e.min.x,Cc.y=r.normal.y>0?e.max.y:e.min.y,Cc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Cc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yx extends $l{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const G_=new qt,Dh=new Bx,Rc=new qu,Pc=new re;class ow extends Qn{constructor(e=new Vr,t=new Yx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rc.copy(i.boundingSphere),Rc.applyMatrix4(r),Rc.radius+=s,e.ray.intersectsSphere(Rc)===!1)return;G_.copy(r).invert(),Dh.copy(e.ray).applyMatrix4(G_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let g=d,_=h;g<_;g++){const m=c.getX(g);Pc.fromBufferAttribute(f,m),W_(Pc,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let g=d,_=h;g<_;g++)Pc.fromBufferAttribute(f,g),W_(Pc,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function W_(n,e,t,i,r,s,o){const a=Dh.distanceSqToPoint(n);if(a<t){const l=new re;Dh.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Dc extends Qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Kx extends Jn{constructor(e,t,i,r,s,o,a,l,c,u=ra){if(u!==ra&&u!==ya)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ra&&(i=ho),i===void 0&&u===ya&&(i=Sa),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:$i,this.minFilter=l!==void 0?l:$i,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Yu extends Vr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const T=p*d-o;for(let E=0;E<c;E++){const v=E*f-s;g.push(v,-T,0),_.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const E=T+c*p,v=T+c*(p+1),R=T+1+c*(p+1),C=T+1+c*p;h.push(E,v,C),h.push(v,R,C)}this.setIndex(h),this.setAttribute("position",new so(g,3)),this.setAttribute("normal",new so(_,3)),this.setAttribute("uv",new so(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yu(e.width,e.height,e.widthSegments,e.heightSegments)}}class aw extends $l{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lw extends $l{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class cw extends Xx{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class uw extends Ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function X_(n,e,t,i){const r=fw(i);switch(t){case wx:return n*e;case Rx:return n*e;case Px:return n*e*2;case Dx:return n*e/r.components*r.byteLength;case Dp:return n*e/r.components*r.byteLength;case Lx:return n*e*2/r.components*r.byteLength;case Lp:return n*e*2/r.components*r.byteLength;case Cx:return n*e*3/r.components*r.byteLength;case Gi:return n*e*4/r.components*r.byteLength;case Ip:return n*e*4/r.components*r.byteLength;case jc:case Zc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Jc:case Qc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sh:case ah:return Math.max(n,16)*Math.max(e,8)/4;case rh:case oh:return Math.max(n,8)*Math.max(e,8)/2;case lh:case ch:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case uh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case hh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ph:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case mh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case _h:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case gh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case vh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case xh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case yh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Mh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Eh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case bh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case eu:case Th:case Ah:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ix:case wh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ch:case Rh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fw(n){switch(n){case kr:case bx:return{byteLength:1,components:1};case Nl:case Tx:case Vl:return{byteLength:2,components:1};case Rp:case Pp:return{byteLength:2,components:4};case ho:case Cp:case Pr:return{byteLength:4,components:1};case Ax:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wp);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jx(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function dw(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],_=f[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const _=f[h];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var hw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_w=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Mw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ew=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Aw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ww=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Rw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Iw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ow=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ww=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$w=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,oC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fC=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mC=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_C=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gC=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vC=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,MC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,RC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,DC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,LC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,OC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,VC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$C=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,KC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ZC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,JC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,oR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_R=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,SR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,MR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ER=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,DR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,IR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,UR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,FR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,HR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,WR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:hw,alphahash_pars_fragment:pw,alphamap_fragment:mw,alphamap_pars_fragment:_w,alphatest_fragment:gw,alphatest_pars_fragment:vw,aomap_fragment:xw,aomap_pars_fragment:Sw,batching_pars_vertex:yw,batching_vertex:Mw,begin_vertex:Ew,beginnormal_vertex:bw,bsdfs:Tw,iridescence_fragment:Aw,bumpmap_pars_fragment:ww,clipping_planes_fragment:Cw,clipping_planes_pars_fragment:Rw,clipping_planes_pars_vertex:Pw,clipping_planes_vertex:Dw,color_fragment:Lw,color_pars_fragment:Iw,color_pars_vertex:Uw,color_vertex:Nw,common:Ow,cube_uv_reflection_fragment:Fw,defaultnormal_vertex:Bw,displacementmap_pars_vertex:kw,displacementmap_vertex:zw,emissivemap_fragment:Hw,emissivemap_pars_fragment:Vw,colorspace_fragment:Gw,colorspace_pars_fragment:Ww,envmap_fragment:Xw,envmap_common_pars_fragment:$w,envmap_pars_fragment:qw,envmap_pars_vertex:Yw,envmap_physical_pars_fragment:sC,envmap_vertex:Kw,fog_vertex:jw,fog_pars_vertex:Zw,fog_fragment:Jw,fog_pars_fragment:Qw,gradientmap_pars_fragment:eC,lightmap_pars_fragment:tC,lights_lambert_fragment:nC,lights_lambert_pars_fragment:iC,lights_pars_begin:rC,lights_toon_fragment:oC,lights_toon_pars_fragment:aC,lights_phong_fragment:lC,lights_phong_pars_fragment:cC,lights_physical_fragment:uC,lights_physical_pars_fragment:fC,lights_fragment_begin:dC,lights_fragment_maps:hC,lights_fragment_end:pC,logdepthbuf_fragment:mC,logdepthbuf_pars_fragment:_C,logdepthbuf_pars_vertex:gC,logdepthbuf_vertex:vC,map_fragment:xC,map_pars_fragment:SC,map_particle_fragment:yC,map_particle_pars_fragment:MC,metalnessmap_fragment:EC,metalnessmap_pars_fragment:bC,morphinstance_vertex:TC,morphcolor_vertex:AC,morphnormal_vertex:wC,morphtarget_pars_vertex:CC,morphtarget_vertex:RC,normal_fragment_begin:PC,normal_fragment_maps:DC,normal_pars_fragment:LC,normal_pars_vertex:IC,normal_vertex:UC,normalmap_pars_fragment:NC,clearcoat_normal_fragment_begin:OC,clearcoat_normal_fragment_maps:FC,clearcoat_pars_fragment:BC,iridescence_pars_fragment:kC,opaque_fragment:zC,packing:HC,premultiplied_alpha_fragment:VC,project_vertex:GC,dithering_fragment:WC,dithering_pars_fragment:XC,roughnessmap_fragment:$C,roughnessmap_pars_fragment:qC,shadowmap_pars_fragment:YC,shadowmap_pars_vertex:KC,shadowmap_vertex:jC,shadowmask_pars_fragment:ZC,skinbase_vertex:JC,skinning_pars_vertex:QC,skinning_vertex:eR,skinnormal_vertex:tR,specularmap_fragment:nR,specularmap_pars_fragment:iR,tonemapping_fragment:rR,tonemapping_pars_fragment:sR,transmission_fragment:oR,transmission_pars_fragment:aR,uv_pars_fragment:lR,uv_pars_vertex:cR,uv_vertex:uR,worldpos_vertex:fR,background_vert:dR,background_frag:hR,backgroundCube_vert:pR,backgroundCube_frag:mR,cube_vert:_R,cube_frag:gR,depth_vert:vR,depth_frag:xR,distanceRGBA_vert:SR,distanceRGBA_frag:yR,equirect_vert:MR,equirect_frag:ER,linedashed_vert:bR,linedashed_frag:TR,meshbasic_vert:AR,meshbasic_frag:wR,meshlambert_vert:CR,meshlambert_frag:RR,meshmatcap_vert:PR,meshmatcap_frag:DR,meshnormal_vert:LR,meshnormal_frag:IR,meshphong_vert:UR,meshphong_frag:NR,meshphysical_vert:OR,meshphysical_frag:FR,meshtoon_vert:BR,meshtoon_frag:kR,points_vert:zR,points_frag:HR,shadow_vert:VR,shadow_frag:GR,sprite_vert:WR,sprite_frag:XR},Ce={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},nr={basic:{uniforms:In([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:In([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new yt(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:In([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:In([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:In([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new yt(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:In([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:In([Ce.points,Ce.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:In([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:In([Ce.common,Ce.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:In([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:In([Ce.sprite,Ce.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:In([Ce.common,Ce.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:In([Ce.lights,Ce.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};nr.physical={uniforms:In([nr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Lc={r:0,b:0,g:0},Os=new zr,$R=new qt;function qR(n,e,t,i,r,s,o){const a=new yt(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function g(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?t:e).get(v)),v}function _(E){let v=!1;const R=g(E);R===null?p(a,l):R&&R.isColor&&(p(R,1),v=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,v){const R=g(v);R&&(R.isCubeTexture||R.mapping===$u)?(u===void 0&&(u=new Lr(new ql(1,1,1),new ys({name:"BackgroundCubeMaterial",uniforms:Ea(nr.backgroundCube.uniforms),vertexShader:nr.backgroundCube.vertexShader,fragmentShader:nr.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Os.copy(v.backgroundRotation),Os.x*=-1,Os.y*=-1,Os.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($R.makeRotationFromEuler(Os)),u.material.toneMapped=pt.getTransfer(R.colorSpace)!==Mt,(f!==R||d!==R.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=R,d=R.version,h=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Lr(new Yu(2,2),new ys({name:"BackgroundMaterial",uniforms:Ea(nr.background.uniforms),vertexShader:nr.background.vertexShader,fragmentShader:nr.background.fragmentShader,side:Ss,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=pt.getTransfer(R.colorSpace)!==Mt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||d!==R.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=R,d=R.version,h=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,v){E.getRGB(Lc,Wx(n)),i.buffers.color.setClear(Lc.r,Lc.g,Lc.b,v,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(E,v=1){a.set(E),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:_,addToRenderList:m,dispose:T}}function YR(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(x,U,N,z,X){let ee=!1;const W=f(z,N,U);s!==W&&(s=W,c(s.object)),ee=h(x,z,N,X),ee&&g(x,z,N,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,v(x,U,N,z),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function f(x,U,N){const z=N.wireframe===!0;let X=i[x.id];X===void 0&&(X={},i[x.id]=X);let ee=X[U.id];ee===void 0&&(ee={},X[U.id]=ee);let W=ee[z];return W===void 0&&(W=d(l()),ee[z]=W),W}function d(x){const U=[],N=[],z=[];for(let X=0;X<t;X++)U[X]=0,N[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:N,attributeDivisors:z,object:x,attributes:{},index:null}}function h(x,U,N,z){const X=s.attributes,ee=U.attributes;let W=0;const Y=N.getAttributes();for(const V in Y)if(Y[V].location>=0){const O=X[V];let Se=ee[V];if(Se===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(Se=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(Se=x.instanceColor)),O===void 0||O.attribute!==Se||Se&&O.data!==Se.data)return!0;W++}return s.attributesNum!==W||s.index!==z}function g(x,U,N,z){const X={},ee=U.attributes;let W=0;const Y=N.getAttributes();for(const V in Y)if(Y[V].location>=0){let O=ee[V];O===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(O=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(O=x.instanceColor));const Se={};Se.attribute=O,O&&O.data&&(Se.data=O.data),X[V]=Se,W++}s.attributes=X,s.attributesNum=W,s.index=z}function _(){const x=s.newAttributes;for(let U=0,N=x.length;U<N;U++)x[U]=0}function m(x){p(x,0)}function p(x,U){const N=s.newAttributes,z=s.enabledAttributes,X=s.attributeDivisors;N[x]=1,z[x]===0&&(n.enableVertexAttribArray(x),z[x]=1),X[x]!==U&&(n.vertexAttribDivisor(x,U),X[x]=U)}function T(){const x=s.newAttributes,U=s.enabledAttributes;for(let N=0,z=U.length;N<z;N++)U[N]!==x[N]&&(n.disableVertexAttribArray(N),U[N]=0)}function E(x,U,N,z,X,ee,W){W===!0?n.vertexAttribIPointer(x,U,N,X,ee):n.vertexAttribPointer(x,U,N,z,X,ee)}function v(x,U,N,z){_();const X=z.attributes,ee=N.getAttributes(),W=U.defaultAttributeValues;for(const Y in ee){const V=ee[Y];if(V.location>=0){let de=X[Y];if(de===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(de=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(de=x.instanceColor)),de!==void 0){const O=de.normalized,Se=de.itemSize,De=e.get(de);if(De===void 0)continue;const Ke=De.buffer,te=De.type,_e=De.bytesPerElement,ye=te===n.INT||te===n.UNSIGNED_INT||de.gpuType===Cp;if(de.isInterleavedBufferAttribute){const k=de.data,ae=k.stride,oe=de.offset;if(k.isInstancedInterleavedBuffer){for(let pe=0;pe<V.locationSize;pe++)p(V.location+pe,k.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let pe=0;pe<V.locationSize;pe++)m(V.location+pe);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let pe=0;pe<V.locationSize;pe++)E(V.location+pe,Se/V.locationSize,te,O,ae*_e,(oe+Se/V.locationSize*pe)*_e,ye)}else{if(de.isInstancedBufferAttribute){for(let k=0;k<V.locationSize;k++)p(V.location+k,de.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let k=0;k<V.locationSize;k++)m(V.location+k);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let k=0;k<V.locationSize;k++)E(V.location+k,Se/V.locationSize,te,O,Se*_e,Se/V.locationSize*k*_e,ye)}}else if(W!==void 0){const O=W[Y];if(O!==void 0)switch(O.length){case 2:n.vertexAttrib2fv(V.location,O);break;case 3:n.vertexAttrib3fv(V.location,O);break;case 4:n.vertexAttrib4fv(V.location,O);break;default:n.vertexAttrib1fv(V.location,O)}}}}T()}function R(){I();for(const x in i){const U=i[x];for(const N in U){const z=U[N];for(const X in z)u(z[X].object),delete z[X];delete U[N]}delete i[x]}}function C(x){if(i[x.id]===void 0)return;const U=i[x.id];for(const N in U){const z=U[N];for(const X in z)u(z[X].object),delete z[X];delete U[N]}delete i[x.id]}function w(x){for(const U in i){const N=i[U];if(N[x.id]===void 0)continue;const z=N[x.id];for(const X in z)u(z[X].object),delete z[X];delete N[x.id]}}function I(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function KR(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];t.update(h,i,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*d[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function jR(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Gi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const I=w===Vl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==kr&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Pr&&!I)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:R,maxSamples:C}}function ZR(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Vs,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const T=s?0:i,E=T*4;let v=p.clippingState||null;l.value=v,v=u(g,d,E,h);for(let R=0;R!==E;++R)v[R]=t[R];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=h+_*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,v=h;E!==_;++E,v+=4)o.copy(f[E]).applyMatrix4(T,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function JR(n){let e=new WeakMap;function t(o,a){return a===eh?o.mapping=va:a===th&&(o.mapping=xa),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===eh||a===th)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new nw(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Wo=4,$_=[.125,.215,.35,.446,.526,.582],$s=20,jf=new cw,q_=new yt;let Zf=null,Jf=0,Qf=0,ed=!1;const Gs=(1+Math.sqrt(5))/2,No=1/Gs,Y_=[new re(-Gs,No,0),new re(Gs,No,0),new re(-No,0,Gs),new re(No,0,Gs),new re(0,Gs,-No),new re(0,Gs,No),new re(-1,1,-1),new re(1,1,-1),new re(-1,1,1),new re(1,1,1)];class K_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Zf=this._renderer.getRenderTarget(),Jf=this._renderer.getActiveCubeFace(),Qf=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=J_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Z_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zf,Jf,Qf),this._renderer.xr.enabled=ed,e.scissorTest=!1,Ic(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===va||e.mapping===xa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zf=this._renderer.getRenderTarget(),Jf=this._renderer.getActiveCubeFace(),Qf=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:or,minFilter:or,generateMipmaps:!1,type:Vl,format:Gi,colorSpace:Ma,depthBuffer:!1},r=j_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=j_(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=QR(s)),this._blurMaterial=eP(s,e,t)}return r}_compileMaterial(e){const t=new Lr(this._lodPlanes[0],e);this._renderer.compile(t,jf)}_sceneToCubeUV(e,t,i,r){const a=new Ri(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(q_),u.toneMapping=ms,u.autoClear=!1;const h=new Hx({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}),g=new Lr(new ql,h);let _=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,_=!0):(h.color.copy(q_),_=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):T===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const E=this._cubeSize;Ic(r,T*E,p>2?E:0,E,E),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===va||e.mapping===xa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=J_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Z_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Lr(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ic(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,jf)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Y_[(r-s-1)%Y_.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Lr(this._lodPlanes[r],c),d=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*$s-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):$s;m>$s&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$s}`);const p=[];let T=0;for(let w=0;w<$s;++w){const I=w/_,S=Math.exp(-I*I/2);p.push(S),w===0?T+=S:w<m&&(T+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-i;const v=this._sizeLods[r],R=3*v*(r>E-Wo?r-E+Wo:0),C=4*(this._cubeSize-v);Ic(t,R,C,3*v,2*v),l.setRenderTarget(t),l.render(f,jf)}}function QR(n){const e=[],t=[],i=[];let r=n;const s=n-Wo+1+$_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Wo?l=$_[o-n+Wo-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*h),E=new Float32Array(m*g*h),v=new Float32Array(p*g*h);for(let C=0;C<h;C++){const w=C%3*2/3-1,I=C>2?0:-1,S=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];T.set(S,_*g*C),E.set(d,m*g*C);const x=[C,C,C,C,C,C];v.set(x,p*g*C)}const R=new Vr;R.setAttribute("position",new qi(T,_)),R.setAttribute("uv",new qi(E,m)),R.setAttribute("faceIndex",new qi(v,p)),e.push(R),r>Wo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function j_(n,e,t){const i=new po(n,e,t);return i.texture.mapping=$u,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ic(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function eP(n,e,t){const i=new Float32Array($s),r=new re(0,1,0);return new ys({name:"SphericalGaussianBlur",defines:{n:$s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ps,depthTest:!1,depthWrite:!1})}function Z_(){return new ys({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ps,depthTest:!1,depthWrite:!1})}function J_(){return new ys({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ps,depthTest:!1,depthWrite:!1})}function Up(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tP(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===eh||l===th,u=l===va||l===xa;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new K_(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new K_(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function nP(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&zo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function iP(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],n.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const T=h.array;_=h.version;for(let E=0,v=T.length;E<v;E+=3){const R=T[E+0],C=T[E+1],w=T[E+2];d.push(R,C,C,w,w,R)}}else if(g!==void 0){const T=g.array;_=g.version;for(let E=0,v=T.length/3-1;E<v;E+=3){const R=E+0,C=E+1,w=E+2;d.push(R,C,C,w,w,R)}}else return;const m=new(Nx(d)?Gx:Vx)(d,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function rP(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,s,d*o),t.update(h,i,1)}function c(d,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,d*o,g),t.update(h,i,g))}function u(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}function f(d,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=h[T]*_[T];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function sP(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function oP(n,e,t){const i=new WeakMap,r=new Xt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let S=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let E=0;h===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let v=a.attributes.position.count*E,R=1;v>e.maxTextureSize&&(R=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const C=new Float32Array(v*R*4*f),w=new Fx(C,v,R,f);w.type=Pr,w.needsUpdate=!0;const I=E*4;for(let x=0;x<f;x++){const U=m[x],N=p[x],z=T[x],X=v*R*4*x;for(let ee=0;ee<U.count;ee++){const W=ee*I;h===!0&&(r.fromBufferAttribute(U,ee),C[X+W+0]=r.x,C[X+W+1]=r.y,C[X+W+2]=r.z,C[X+W+3]=0),g===!0&&(r.fromBufferAttribute(N,ee),C[X+W+4]=r.x,C[X+W+5]=r.y,C[X+W+6]=r.z,C[X+W+7]=0),_===!0&&(r.fromBufferAttribute(z,ee),C[X+W+8]=r.x,C[X+W+9]=r.y,C[X+W+10]=r.z,C[X+W+11]=z.itemSize===4?r.w:1)}}d={count:f,texture:w,size:new wt(v,R)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let h=0;for(let _=0;_<c.length;_++)h+=c[_];const g=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function aP(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Zx=new Jn,Q_=new Kx(1,1),Jx=new Fx,Qx=new zA,eS=new $x,eg=[],tg=[],ng=new Float32Array(16),ig=new Float32Array(9),rg=new Float32Array(4);function Aa(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=eg[r];if(s===void 0&&(s=new Float32Array(r),eg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function on(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function an(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ku(n,e){let t=tg[e];t===void 0&&(t=new Int32Array(e),tg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function lP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function cP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2fv(this.addr,e),an(t,e)}}function uP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;n.uniform3fv(this.addr,e),an(t,e)}}function fP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4fv(this.addr,e),an(t,e)}}function dP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;rg.set(i),n.uniformMatrix2fv(this.addr,!1,rg),an(t,i)}}function hP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;ig.set(i),n.uniformMatrix3fv(this.addr,!1,ig),an(t,i)}}function pP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;ng.set(i),n.uniformMatrix4fv(this.addr,!1,ng),an(t,i)}}function mP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _P(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2iv(this.addr,e),an(t,e)}}function gP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3iv(this.addr,e),an(t,e)}}function vP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4iv(this.addr,e),an(t,e)}}function xP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function SP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2uiv(this.addr,e),an(t,e)}}function yP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3uiv(this.addr,e),an(t,e)}}function MP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4uiv(this.addr,e),an(t,e)}}function EP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Q_.compareFunction=Ux,s=Q_):s=Zx,t.setTexture2D(e||s,r)}function bP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Qx,r)}function TP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||eS,r)}function AP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Jx,r)}function wP(n){switch(n){case 5126:return lP;case 35664:return cP;case 35665:return uP;case 35666:return fP;case 35674:return dP;case 35675:return hP;case 35676:return pP;case 5124:case 35670:return mP;case 35667:case 35671:return _P;case 35668:case 35672:return gP;case 35669:case 35673:return vP;case 5125:return xP;case 36294:return SP;case 36295:return yP;case 36296:return MP;case 35678:case 36198:case 36298:case 36306:case 35682:return EP;case 35679:case 36299:case 36307:return bP;case 35680:case 36300:case 36308:case 36293:return TP;case 36289:case 36303:case 36311:case 36292:return AP}}function CP(n,e){n.uniform1fv(this.addr,e)}function RP(n,e){const t=Aa(e,this.size,2);n.uniform2fv(this.addr,t)}function PP(n,e){const t=Aa(e,this.size,3);n.uniform3fv(this.addr,t)}function DP(n,e){const t=Aa(e,this.size,4);n.uniform4fv(this.addr,t)}function LP(n,e){const t=Aa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function IP(n,e){const t=Aa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function UP(n,e){const t=Aa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function NP(n,e){n.uniform1iv(this.addr,e)}function OP(n,e){n.uniform2iv(this.addr,e)}function FP(n,e){n.uniform3iv(this.addr,e)}function BP(n,e){n.uniform4iv(this.addr,e)}function kP(n,e){n.uniform1uiv(this.addr,e)}function zP(n,e){n.uniform2uiv(this.addr,e)}function HP(n,e){n.uniform3uiv(this.addr,e)}function VP(n,e){n.uniform4uiv(this.addr,e)}function GP(n,e,t){const i=this.cache,r=e.length,s=Ku(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Zx,s[o])}function WP(n,e,t){const i=this.cache,r=e.length,s=Ku(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Qx,s[o])}function XP(n,e,t){const i=this.cache,r=e.length,s=Ku(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||eS,s[o])}function $P(n,e,t){const i=this.cache,r=e.length,s=Ku(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Jx,s[o])}function qP(n){switch(n){case 5126:return CP;case 35664:return RP;case 35665:return PP;case 35666:return DP;case 35674:return LP;case 35675:return IP;case 35676:return UP;case 5124:case 35670:return NP;case 35667:case 35671:return OP;case 35668:case 35672:return FP;case 35669:case 35673:return BP;case 5125:return kP;case 36294:return zP;case 36295:return HP;case 36296:return VP;case 35678:case 36198:case 36298:case 36306:case 35682:return GP;case 35679:case 36299:case 36307:return WP;case 35680:case 36300:case 36308:case 36293:return XP;case 36289:case 36303:case 36311:case 36292:return $P}}class YP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=wP(t.type)}}class KP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qP(t.type)}}class jP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const td=/(\w+)(\])?(\[|\.)?/g;function sg(n,e){n.seq.push(e),n.map[e.id]=e}function ZP(n,e,t){const i=n.name,r=i.length;for(td.lastIndex=0;;){const s=td.exec(i),o=td.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){sg(t,c===void 0?new YP(a,n,e):new KP(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new jP(a),sg(t,f)),t=f}}}class tu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);ZP(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function og(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const JP=37297;let QP=0;function eD(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const ag=new Qe;function tD(n){pt._getMatrix(ag,pt.workingColorSpace,n);const e=`mat3( ${ag.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(n)){case Tu:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function lg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+eD(n.getShaderSource(e),o)}else return r}function nD(n,e){const t=tD(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function iD(n,e){let t;switch(e){case fA:t="Linear";break;case dA:t="Reinhard";break;case hA:t="Cineon";break;case pA:t="ACESFilmic";break;case _A:t="AgX";break;case gA:t="Neutral";break;case mA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Uc=new re;function rD(){pt.getLuminanceCoefficients(Uc);const n=Uc.x.toFixed(4),e=Uc.y.toFixed(4),t=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sD(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ka).join(`
`)}function oD(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function aD(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ka(n){return n!==""}function cg(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ug(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lh(n){return n.replace(lD,uD)}const cD=new Map;function uD(n,e){let t=et[e];if(t===void 0){const i=cD.get(e);if(i!==void 0)t=et[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Lh(t)}const fD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fg(n){return n.replace(fD,dD)}function dD(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function dg(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hD(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===yx?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===W1?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yr&&(e="SHADOWMAP_TYPE_VSM"),e}function pD(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case va:case xa:e="ENVMAP_TYPE_CUBE";break;case $u:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mD(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case xa:e="ENVMAP_MODE_REFRACTION";break}return e}function _D(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Mx:e="ENVMAP_BLENDING_MULTIPLY";break;case cA:e="ENVMAP_BLENDING_MIX";break;case uA:e="ENVMAP_BLENDING_ADD";break}return e}function gD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function vD(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=hD(t),c=pD(t),u=mD(t),f=_D(t),d=gD(t),h=sD(t),g=oD(s),_=r.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ka).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ka).join(`
`),p.length>0&&(p+=`
`)):(m=[dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ka).join(`
`),p=[dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ms?"#define TONE_MAPPING":"",t.toneMapping!==ms?et.tonemapping_pars_fragment:"",t.toneMapping!==ms?iD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,nD("linearToOutputTexel",t.outputColorSpace),rD(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ka).join(`
`)),o=Lh(o),o=cg(o,t),o=ug(o,t),a=Lh(a),a=cg(a,t),a=ug(a,t),o=fg(o),a=fg(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===T_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===T_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=T+m+o,v=T+p+a,R=og(r,r.VERTEX_SHADER,E),C=og(r,r.FRAGMENT_SHADER,v);r.attachShader(_,R),r.attachShader(_,C),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(U){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(_).trim(),z=r.getShaderInfoLog(R).trim(),X=r.getShaderInfoLog(C).trim();let ee=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,R,C);else{const Y=lg(r,R,"vertex"),V=lg(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+N+`
`+Y+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(z===""||X==="")&&(W=!1);W&&(U.diagnostics={runnable:ee,programLog:N,vertexShader:{log:z,prefix:m},fragmentShader:{log:X,prefix:p}})}r.deleteShader(R),r.deleteShader(C),I=new tu(r,_),S=aD(r,_)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(_,JP)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=QP++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=C,this}let xD=0;class SD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new yD(e),t.set(e,i)),i}}class yD{constructor(e){this.id=xD++,this.code=e,this.usedTimes=0}}function MD(n,e,t,i,r,s,o){const a=new kx,l=new SD,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,x,U,N,z){const X=N.fog,ee=z.geometry,W=S.isMeshStandardMaterial?N.environment:null,Y=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),V=Y&&Y.mapping===$u?Y.image.height:null,de=g[S.type];S.precision!==null&&(h=r.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const O=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Se=O!==void 0?O.length:0;let De=0;ee.morphAttributes.position!==void 0&&(De=1),ee.morphAttributes.normal!==void 0&&(De=2),ee.morphAttributes.color!==void 0&&(De=3);let Ke,te,_e,ye;if(de){const Re=nr[de];Ke=Re.vertexShader,te=Re.fragmentShader}else Ke=S.vertexShader,te=S.fragmentShader,l.update(S),_e=l.getVertexShaderID(S),ye=l.getFragmentShaderID(S);const k=n.getRenderTarget(),ae=n.state.buffers.depth.getReversed(),oe=z.isInstancedMesh===!0,pe=z.isBatchedMesh===!0,Ie=!!S.map,P=!!S.matcap,D=!!Y,M=!!S.aoMap,ie=!!S.lightMap,Z=!!S.bumpMap,L=!!S.normalMap,ne=!!S.displacementMap,ue=!!S.emissiveMap,Q=!!S.metalnessMap,b=!!S.roughnessMap,y=S.anisotropy>0,F=S.clearcoat>0,$=S.dispersion>0,q=S.iridescence>0,j=S.sheen>0,he=S.transmission>0,fe=y&&!!S.anisotropyMap,xe=F&&!!S.clearcoatMap,Be=F&&!!S.clearcoatNormalMap,me=F&&!!S.clearcoatRoughnessMap,ve=q&&!!S.iridescenceMap,Oe=q&&!!S.iridescenceThicknessMap,ke=j&&!!S.sheenColorMap,Me=j&&!!S.sheenRoughnessMap,Ge=!!S.specularMap,We=!!S.specularColorMap,ut=!!S.specularIntensityMap,B=he&&!!S.transmissionMap,be=he&&!!S.thicknessMap,se=!!S.gradientMap,ce=!!S.alphaMap,Ee=S.alphaTest>0,Te=!!S.alphaHash,qe=!!S.extensions;let ft=ms;S.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ft=n.toneMapping);const Bt={shaderID:de,shaderType:S.type,shaderName:S.name,vertexShader:Ke,fragmentShader:te,defines:S.defines,customVertexShaderID:_e,customFragmentShaderID:ye,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:pe,batchingColor:pe&&z._colorsTexture!==null,instancing:oe,instancingColor:oe&&z.instanceColor!==null,instancingMorph:oe&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:k===null?n.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ma,alphaToCoverage:!!S.alphaToCoverage,map:Ie,matcap:P,envMap:D,envMapMode:D&&Y.mapping,envMapCubeUVHeight:V,aoMap:M,lightMap:ie,bumpMap:Z,normalMap:L,displacementMap:d&&ne,emissiveMap:ue,normalMapObjectSpace:L&&S.normalMapType===MA,normalMapTangentSpace:L&&S.normalMapType===yA,metalnessMap:Q,roughnessMap:b,anisotropy:y,anisotropyMap:fe,clearcoat:F,clearcoatMap:xe,clearcoatNormalMap:Be,clearcoatRoughnessMap:me,dispersion:$,iridescence:q,iridescenceMap:ve,iridescenceThicknessMap:Oe,sheen:j,sheenColorMap:ke,sheenRoughnessMap:Me,specularMap:Ge,specularColorMap:We,specularIntensityMap:ut,transmission:he,transmissionMap:B,thicknessMap:be,gradientMap:se,opaque:S.transparent===!1&&S.blending===ia&&S.alphaToCoverage===!1,alphaMap:ce,alphaTest:Ee,alphaHash:Te,combine:S.combine,mapUv:Ie&&_(S.map.channel),aoMapUv:M&&_(S.aoMap.channel),lightMapUv:ie&&_(S.lightMap.channel),bumpMapUv:Z&&_(S.bumpMap.channel),normalMapUv:L&&_(S.normalMap.channel),displacementMapUv:ne&&_(S.displacementMap.channel),emissiveMapUv:ue&&_(S.emissiveMap.channel),metalnessMapUv:Q&&_(S.metalnessMap.channel),roughnessMapUv:b&&_(S.roughnessMap.channel),anisotropyMapUv:fe&&_(S.anisotropyMap.channel),clearcoatMapUv:xe&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Be&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Me&&_(S.sheenRoughnessMap.channel),specularMapUv:Ge&&_(S.specularMap.channel),specularColorMapUv:We&&_(S.specularColorMap.channel),specularIntensityMapUv:ut&&_(S.specularIntensityMap.channel),transmissionMapUv:B&&_(S.transmissionMap.channel),thicknessMapUv:be&&_(S.thicknessMap.channel),alphaMapUv:ce&&_(S.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(L||y),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!ee.attributes.uv&&(Ie||ce),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ae,skinning:z.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:De,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:ft,decodeVideoTexture:Ie&&S.map.isVideoTexture===!0&&pt.getTransfer(S.map.colorSpace)===Mt,decodeVideoTextureEmissive:ue&&S.emissiveMap.isVideoTexture===!0&&pt.getTransfer(S.emissiveMap.colorSpace)===Mt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Cr,flipSided:S.side===Zn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:qe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&S.extensions.multiDraw===!0||pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Bt.vertexUv1s=c.has(1),Bt.vertexUv2s=c.has(2),Bt.vertexUv3s=c.has(3),c.clear(),Bt}function p(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const U in S.defines)x.push(U),x.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(T(x,S),E(x,S),x.push(n.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function T(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function E(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const x=g[S.type];let U;if(x){const N=nr[x];U=JA.clone(N.uniforms)}else U=S.uniforms;return U}function R(S,x){let U;for(let N=0,z=u.length;N<z;N++){const X=u[N];if(X.cacheKey===x){U=X,++U.usedTimes;break}}return U===void 0&&(U=new vD(n,x,S,s),u.push(U)),U}function C(S){if(--S.usedTimes===0){const x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function w(S){l.remove(S)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:C,releaseShaderCache:w,programs:u,dispose:I}}function ED(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function bD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function hg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function pg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,h,g,_,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,d,h,g,_,m){const p=o(f,d,h,g,_,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function l(f,d,h,g,_,m){const p=o(f,d,h,g,_,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||bD),i.length>1&&i.sort(d||hg),r.length>1&&r.sort(d||hg)}function u(){for(let f=e,d=n.length;f<d;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function TD(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new pg,n.set(i,[o])):r>=s.length?(o=new pg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function AD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new re,color:new yt};break;case"SpotLight":t={position:new re,direction:new re,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new re,color:new yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new re,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":t={color:new yt,position:new re,halfWidth:new re,halfHeight:new re};break}return n[e.id]=t,t}}}function wD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let CD=0;function RD(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function PD(n){const e=new AD,t=wD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new re);const r=new re,s=new qt,o=new qt;function a(c){let u=0,f=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,T=0,E=0,v=0,R=0,C=0,w=0;c.sort(RD);for(let S=0,x=c.length;S<x;S++){const U=c[S],N=U.color,z=U.intensity,X=U.distance,ee=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=N.r*z,f+=N.g*z,d+=N.b*z;else if(U.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(U.sh.coefficients[W],z);w++}else if(U.isDirectionalLight){const W=e.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const Y=U.shadow,V=t.get(U);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,i.directionalShadow[h]=V,i.directionalShadowMap[h]=ee,i.directionalShadowMatrix[h]=U.shadow.matrix,T++}i.directional[h]=W,h++}else if(U.isSpotLight){const W=e.get(U);W.position.setFromMatrixPosition(U.matrixWorld),W.color.copy(N).multiplyScalar(z),W.distance=X,W.coneCos=Math.cos(U.angle),W.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),W.decay=U.decay,i.spot[_]=W;const Y=U.shadow;if(U.map&&(i.spotLightMap[R]=U.map,R++,Y.updateMatrices(U),U.castShadow&&C++),i.spotLightMatrix[_]=Y.matrix,U.castShadow){const V=t.get(U);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=ee,v++}_++}else if(U.isRectAreaLight){const W=e.get(U);W.color.copy(N).multiplyScalar(z),W.halfWidth.set(U.width*.5,0,0),W.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=W,m++}else if(U.isPointLight){const W=e.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),W.distance=U.distance,W.decay=U.decay,U.castShadow){const Y=U.shadow,V=t.get(U);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,V.shadowCameraNear=Y.camera.near,V.shadowCameraFar=Y.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=ee,i.pointShadowMatrix[g]=U.shadow.matrix,E++}i.point[g]=W,g++}else if(U.isHemisphereLight){const W=e.get(U);W.skyColor.copy(U.color).multiplyScalar(z),W.groundColor.copy(U.groundColor).multiplyScalar(z),i.hemi[p]=W,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==h||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==T||I.numPointShadows!==E||I.numSpotShadows!==v||I.numSpotMaps!==R||I.numLightProbes!==w)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=v+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,I.directionalLength=h,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=T,I.numPointShadows=E,I.numSpotShadows=v,I.numSpotMaps=R,I.numLightProbes=w,i.version=CD++)}function l(c,u){let f=0,d=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const E=c[p];if(E.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(E.isSpotLight){const v=i.spot[h];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),h++}else if(E.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function mg(n){const e=new PD(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function DD(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new mg(n),e.set(r,[a])):s>=o.length?(a=new mg(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const LD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ID=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function UD(n,e,t){let i=new qx;const r=new wt,s=new wt,o=new Xt,a=new aw({depthPacking:SA}),l=new lw,c={},u=t.maxTextureSize,f={[Ss]:Zn,[Zn]:Ss,[Cr]:Cr},d=new ys({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:LD,fragmentShader:ID}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Vr;g.setAttribute("position",new qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Lr(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yx;let p=this.type;this.render=function(C,w,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const S=n.getRenderTarget(),x=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),N=n.state;N.setBlending(ps),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const z=p!==yr&&this.type===yr,X=p===yr&&this.type!==yr;for(let ee=0,W=C.length;ee<W;ee++){const Y=C[ee],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const de=V.getFrameExtents();if(r.multiply(de),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/de.x),r.x=s.x*de.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/de.y),r.y=s.y*de.y,V.mapSize.y=s.y)),V.map===null||z===!0||X===!0){const Se=this.type!==yr?{minFilter:$i,magFilter:$i}:{};V.map!==null&&V.map.dispose(),V.map=new po(r.x,r.y,Se),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const O=V.getViewportCount();for(let Se=0;Se<O;Se++){const De=V.getViewport(Se);o.set(s.x*De.x,s.y*De.y,s.x*De.z,s.y*De.w),N.viewport(o),V.updateMatrices(Y,Se),i=V.getFrustum(),v(w,I,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===yr&&T(V,I),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,x,U)};function T(C,w){const I=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,h.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new po(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(w,null,I,d,_,null),h.uniforms.shadow_pass.value=C.mapPass.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(w,null,I,h,_,null)}function E(C,w,I,S){let x=null;const U=I.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)x=U;else if(x=I.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const N=x.uuid,z=w.uuid;let X=c[N];X===void 0&&(X={},c[N]=X);let ee=X[z];ee===void 0&&(ee=x.clone(),X[z]=ee,w.addEventListener("dispose",R)),x=ee}if(x.visible=w.visible,x.wireframe=w.wireframe,S===yr?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:f[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const N=n.properties.get(x);N.light=I}return x}function v(C,w,I,S,x){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===yr)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,C.matrixWorld);const z=e.update(C),X=C.material;if(Array.isArray(X)){const ee=z.groups;for(let W=0,Y=ee.length;W<Y;W++){const V=ee[W],de=X[V.materialIndex];if(de&&de.visible){const O=E(C,de,S,x);C.onBeforeShadow(n,C,w,I,z,O,V),n.renderBufferDirect(I,null,z,O,C,V),C.onAfterShadow(n,C,w,I,z,O,V)}}}else if(X.visible){const ee=E(C,X,S,x);C.onBeforeShadow(n,C,w,I,z,ee,null),n.renderBufferDirect(I,null,z,ee,C,null),C.onAfterShadow(n,C,w,I,z,ee,null)}}const N=C.children;for(let z=0,X=N.length;z<X;z++)v(N[z],w,I,S,x)}function R(C){C.target.removeEventListener("dispose",R);for(const I in c){const S=c[I],x=C.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const ND={[qd]:Yd,[Kd]:Jd,[jd]:Qd,[ga]:Zd,[Yd]:qd,[Jd]:Kd,[Qd]:jd,[Zd]:ga};function OD(n,e){function t(){let B=!1;const be=new Xt;let se=null;const ce=new Xt(0,0,0,0);return{setMask:function(Ee){se!==Ee&&!B&&(n.colorMask(Ee,Ee,Ee,Ee),se=Ee)},setLocked:function(Ee){B=Ee},setClear:function(Ee,Te,qe,ft,Bt){Bt===!0&&(Ee*=ft,Te*=ft,qe*=ft),be.set(Ee,Te,qe,ft),ce.equals(be)===!1&&(n.clearColor(Ee,Te,qe,ft),ce.copy(be))},reset:function(){B=!1,se=null,ce.set(-1,0,0,0)}}}function i(){let B=!1,be=!1,se=null,ce=null,Ee=null;return{setReversed:function(Te){if(be!==Te){const qe=e.get("EXT_clip_control");be?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT);const ft=Ee;Ee=null,this.setClear(ft)}be=Te},getReversed:function(){return be},setTest:function(Te){Te?k(n.DEPTH_TEST):ae(n.DEPTH_TEST)},setMask:function(Te){se!==Te&&!B&&(n.depthMask(Te),se=Te)},setFunc:function(Te){if(be&&(Te=ND[Te]),ce!==Te){switch(Te){case qd:n.depthFunc(n.NEVER);break;case Yd:n.depthFunc(n.ALWAYS);break;case Kd:n.depthFunc(n.LESS);break;case ga:n.depthFunc(n.LEQUAL);break;case jd:n.depthFunc(n.EQUAL);break;case Zd:n.depthFunc(n.GEQUAL);break;case Jd:n.depthFunc(n.GREATER);break;case Qd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=Te}},setLocked:function(Te){B=Te},setClear:function(Te){Ee!==Te&&(be&&(Te=1-Te),n.clearDepth(Te),Ee=Te)},reset:function(){B=!1,se=null,ce=null,Ee=null,be=!1}}}function r(){let B=!1,be=null,se=null,ce=null,Ee=null,Te=null,qe=null,ft=null,Bt=null;return{setTest:function(Re){B||(Re?k(n.STENCIL_TEST):ae(n.STENCIL_TEST))},setMask:function(Re){be!==Re&&!B&&(n.stencilMask(Re),be=Re)},setFunc:function(Re,Ne,Je){(se!==Re||ce!==Ne||Ee!==Je)&&(n.stencilFunc(Re,Ne,Je),se=Re,ce=Ne,Ee=Je)},setOp:function(Re,Ne,Je){(Te!==Re||qe!==Ne||ft!==Je)&&(n.stencilOp(Re,Ne,Je),Te=Re,qe=Ne,ft=Je)},setLocked:function(Re){B=Re},setClear:function(Re){Bt!==Re&&(n.clearStencil(Re),Bt=Re)},reset:function(){B=!1,be=null,se=null,ce=null,Ee=null,Te=null,qe=null,ft=null,Bt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,T=null,E=null,v=null,R=null,C=null,w=new yt(0,0,0),I=0,S=!1,x=null,U=null,N=null,z=null,X=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Y=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=Y>=2);let de=null,O={};const Se=n.getParameter(n.SCISSOR_BOX),De=n.getParameter(n.VIEWPORT),Ke=new Xt().fromArray(Se),te=new Xt().fromArray(De);function _e(B,be,se,ce){const Ee=new Uint8Array(4),Te=n.createTexture();n.bindTexture(B,Te),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<se;qe++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(be+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return Te}const ye={};ye[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),ye[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ye[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),k(n.DEPTH_TEST),o.setFunc(ga),Z(!1),L(S_),k(n.CULL_FACE),M(ps);function k(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function ae(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function oe(B,be){return f[B]!==be?(n.bindFramebuffer(B,be),f[B]=be,B===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=be),B===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=be),!0):!1}function pe(B,be){let se=h,ce=!1;if(B){se=d.get(be),se===void 0&&(se=[],d.set(be,se));const Ee=B.textures;if(se.length!==Ee.length||se[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,qe=Ee.length;Te<qe;Te++)se[Te]=n.COLOR_ATTACHMENT0+Te;se.length=Ee.length,ce=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,ce=!0);ce&&n.drawBuffers(se)}function Ie(B){return g!==B?(n.useProgram(B),g=B,!0):!1}const P={[Xs]:n.FUNC_ADD,[$1]:n.FUNC_SUBTRACT,[q1]:n.FUNC_REVERSE_SUBTRACT};P[Y1]=n.MIN,P[K1]=n.MAX;const D={[j1]:n.ZERO,[Z1]:n.ONE,[J1]:n.SRC_COLOR,[Xd]:n.SRC_ALPHA,[rA]:n.SRC_ALPHA_SATURATE,[nA]:n.DST_COLOR,[eA]:n.DST_ALPHA,[Q1]:n.ONE_MINUS_SRC_COLOR,[$d]:n.ONE_MINUS_SRC_ALPHA,[iA]:n.ONE_MINUS_DST_COLOR,[tA]:n.ONE_MINUS_DST_ALPHA,[sA]:n.CONSTANT_COLOR,[oA]:n.ONE_MINUS_CONSTANT_COLOR,[aA]:n.CONSTANT_ALPHA,[lA]:n.ONE_MINUS_CONSTANT_ALPHA};function M(B,be,se,ce,Ee,Te,qe,ft,Bt,Re){if(B===ps){_===!0&&(ae(n.BLEND),_=!1);return}if(_===!1&&(k(n.BLEND),_=!0),B!==X1){if(B!==m||Re!==S){if((p!==Xs||v!==Xs)&&(n.blendEquation(n.FUNC_ADD),p=Xs,v=Xs),Re)switch(B){case ia:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wd:n.blendFunc(n.ONE,n.ONE);break;case y_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case M_:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ia:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case y_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case M_:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}T=null,E=null,R=null,C=null,w.set(0,0,0),I=0,m=B,S=Re}return}Ee=Ee||be,Te=Te||se,qe=qe||ce,(be!==p||Ee!==v)&&(n.blendEquationSeparate(P[be],P[Ee]),p=be,v=Ee),(se!==T||ce!==E||Te!==R||qe!==C)&&(n.blendFuncSeparate(D[se],D[ce],D[Te],D[qe]),T=se,E=ce,R=Te,C=qe),(ft.equals(w)===!1||Bt!==I)&&(n.blendColor(ft.r,ft.g,ft.b,Bt),w.copy(ft),I=Bt),m=B,S=!1}function ie(B,be){B.side===Cr?ae(n.CULL_FACE):k(n.CULL_FACE);let se=B.side===Zn;be&&(se=!se),Z(se),B.blending===ia&&B.transparent===!1?M(ps):M(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const ce=B.stencilWrite;a.setTest(ce),ce&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ue(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?k(n.SAMPLE_ALPHA_TO_COVERAGE):ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function Z(B){x!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),x=B)}function L(B){B!==V1?(k(n.CULL_FACE),B!==U&&(B===S_?n.cullFace(n.BACK):B===G1?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ae(n.CULL_FACE),U=B}function ne(B){B!==N&&(W&&n.lineWidth(B),N=B)}function ue(B,be,se){B?(k(n.POLYGON_OFFSET_FILL),(z!==be||X!==se)&&(n.polygonOffset(be,se),z=be,X=se)):ae(n.POLYGON_OFFSET_FILL)}function Q(B){B?k(n.SCISSOR_TEST):ae(n.SCISSOR_TEST)}function b(B){B===void 0&&(B=n.TEXTURE0+ee-1),de!==B&&(n.activeTexture(B),de=B)}function y(B,be,se){se===void 0&&(de===null?se=n.TEXTURE0+ee-1:se=de);let ce=O[se];ce===void 0&&(ce={type:void 0,texture:void 0},O[se]=ce),(ce.type!==B||ce.texture!==be)&&(de!==se&&(n.activeTexture(se),de=se),n.bindTexture(B,be||ye[B]),ce.type=B,ce.texture=be)}function F(){const B=O[de];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Be(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Oe(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ke(B){Ke.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Ke.copy(B))}function Me(B){te.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),te.copy(B))}function Ge(B,be){let se=c.get(be);se===void 0&&(se=new WeakMap,c.set(be,se));let ce=se.get(B);ce===void 0&&(ce=n.getUniformBlockIndex(be,B.name),se.set(B,ce))}function We(B,be){const ce=c.get(be).get(B);l.get(be)!==ce&&(n.uniformBlockBinding(be,ce,B.__bindingPointIndex),l.set(be,ce))}function ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},de=null,O={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,T=null,E=null,v=null,R=null,C=null,w=new yt(0,0,0),I=0,S=!1,x=null,U=null,N=null,z=null,X=null,Ke.set(0,0,n.canvas.width,n.canvas.height),te.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:k,disable:ae,bindFramebuffer:oe,drawBuffers:pe,useProgram:Ie,setBlending:M,setMaterial:ie,setFlipSided:Z,setCullFace:L,setLineWidth:ne,setPolygonOffset:ue,setScissorTest:Q,activeTexture:b,bindTexture:y,unbindTexture:F,compressedTexImage2D:$,compressedTexImage3D:q,texImage2D:ve,texImage3D:Oe,updateUBOMapping:Ge,uniformBlockBinding:We,texStorage2D:Be,texStorage3D:me,texSubImage2D:j,texSubImage3D:he,compressedTexSubImage2D:fe,compressedTexSubImage3D:xe,scissor:ke,viewport:Me,reset:ut}}function FD(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new wt,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,y){return h?new OffscreenCanvas(b,y):wu("canvas")}function _(b,y,F){let $=1;const q=Q(b);if((q.width>F||q.height>F)&&($=F/Math.max(q.width,q.height)),$<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const j=Math.floor($*q.width),he=Math.floor($*q.height);f===void 0&&(f=g(j,he));const fe=y?g(j,he):f;return fe.width=j,fe.height=he,fe.getContext("2d").drawImage(b,0,0,j,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+j+"x"+he+")."),fe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){n.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(b,y,F,$,q=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let j=y;if(y===n.RED&&(F===n.FLOAT&&(j=n.R32F),F===n.HALF_FLOAT&&(j=n.R16F),F===n.UNSIGNED_BYTE&&(j=n.R8)),y===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.R8UI),F===n.UNSIGNED_SHORT&&(j=n.R16UI),F===n.UNSIGNED_INT&&(j=n.R32UI),F===n.BYTE&&(j=n.R8I),F===n.SHORT&&(j=n.R16I),F===n.INT&&(j=n.R32I)),y===n.RG&&(F===n.FLOAT&&(j=n.RG32F),F===n.HALF_FLOAT&&(j=n.RG16F),F===n.UNSIGNED_BYTE&&(j=n.RG8)),y===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RG8UI),F===n.UNSIGNED_SHORT&&(j=n.RG16UI),F===n.UNSIGNED_INT&&(j=n.RG32UI),F===n.BYTE&&(j=n.RG8I),F===n.SHORT&&(j=n.RG16I),F===n.INT&&(j=n.RG32I)),y===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RGB8UI),F===n.UNSIGNED_SHORT&&(j=n.RGB16UI),F===n.UNSIGNED_INT&&(j=n.RGB32UI),F===n.BYTE&&(j=n.RGB8I),F===n.SHORT&&(j=n.RGB16I),F===n.INT&&(j=n.RGB32I)),y===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),F===n.UNSIGNED_INT&&(j=n.RGBA32UI),F===n.BYTE&&(j=n.RGBA8I),F===n.SHORT&&(j=n.RGBA16I),F===n.INT&&(j=n.RGBA32I)),y===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),y===n.RGBA){const he=q?Tu:pt.getTransfer($);F===n.FLOAT&&(j=n.RGBA32F),F===n.HALF_FLOAT&&(j=n.RGBA16F),F===n.UNSIGNED_BYTE&&(j=he===Mt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function v(b,y){let F;return b?y===null||y===ho||y===Sa?F=n.DEPTH24_STENCIL8:y===Pr?F=n.DEPTH32F_STENCIL8:y===Nl&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ho||y===Sa?F=n.DEPTH_COMPONENT24:y===Pr?F=n.DEPTH_COMPONENT32F:y===Nl&&(F=n.DEPTH_COMPONENT16),F}function R(b,y){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==$i&&b.minFilter!==or?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function C(b){const y=b.target;y.removeEventListener("dispose",C),I(y),y.isVideoTexture&&u.delete(y)}function w(b){const y=b.target;y.removeEventListener("dispose",w),x(y)}function I(b){const y=i.get(b);if(y.__webglInit===void 0)return;const F=b.source,$=d.get(F);if($){const q=$[y.__cacheKey];q.usedTimes--,q.usedTimes===0&&S(b),Object.keys($).length===0&&d.delete(F)}i.remove(b)}function S(b){const y=i.get(b);n.deleteTexture(y.__webglTexture);const F=b.source,$=d.get(F);delete $[y.__cacheKey],o.memory.textures--}function x(b){const y=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let q=0;q<y.__webglFramebuffer[$].length;q++)n.deleteFramebuffer(y.__webglFramebuffer[$][q]);else n.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)n.deleteFramebuffer(y.__webglFramebuffer[$]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const F=b.textures;for(let $=0,q=F.length;$<q;$++){const j=i.get(F[$]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(F[$])}i.remove(b)}let U=0;function N(){U=0}function z(){const b=U;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),U+=1,b}function X(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function ee(b,y){const F=i.get(b);if(b.isVideoTexture&&ne(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const $=b.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(F,b,y);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+y)}function W(b,y){const F=i.get(b);if(b.version>0&&F.__version!==b.version){te(F,b,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+y)}function Y(b,y){const F=i.get(b);if(b.version>0&&F.__version!==b.version){te(F,b,y);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+y)}function V(b,y){const F=i.get(b);if(b.version>0&&F.__version!==b.version){_e(F,b,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+y)}const de={[nh]:n.REPEAT,[Ks]:n.CLAMP_TO_EDGE,[ih]:n.MIRRORED_REPEAT},O={[$i]:n.NEAREST,[vA]:n.NEAREST_MIPMAP_NEAREST,[fc]:n.NEAREST_MIPMAP_LINEAR,[or]:n.LINEAR,[wf]:n.LINEAR_MIPMAP_NEAREST,[js]:n.LINEAR_MIPMAP_LINEAR},Se={[EA]:n.NEVER,[RA]:n.ALWAYS,[bA]:n.LESS,[Ux]:n.LEQUAL,[TA]:n.EQUAL,[CA]:n.GEQUAL,[AA]:n.GREATER,[wA]:n.NOTEQUAL};function De(b,y){if(y.type===Pr&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===or||y.magFilter===wf||y.magFilter===fc||y.magFilter===js||y.minFilter===or||y.minFilter===wf||y.minFilter===fc||y.minFilter===js)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,de[y.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,de[y.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,de[y.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,O[y.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,O[y.minFilter]),y.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Se[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===$i||y.minFilter!==fc&&y.minFilter!==js||y.type===Pr&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ke(b,y){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",C));const $=y.source;let q=d.get($);q===void 0&&(q={},d.set($,q));const j=X(y);if(j!==b.__cacheKey){q[j]===void 0&&(q[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),q[j].usedTimes++;const he=q[b.__cacheKey];he!==void 0&&(q[b.__cacheKey].usedTimes--,he.usedTimes===0&&S(y)),b.__cacheKey=j,b.__webglTexture=q[j].texture}return F}function te(b,y,F){let $=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=n.TEXTURE_3D);const q=Ke(b,y),j=y.source;t.bindTexture($,b.__webglTexture,n.TEXTURE0+F);const he=i.get(j);if(j.version!==he.__version||q===!0){t.activeTexture(n.TEXTURE0+F);const fe=pt.getPrimaries(pt.workingColorSpace),xe=y.colorSpace===rs?null:pt.getPrimaries(y.colorSpace),Be=y.colorSpace===rs||fe===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let me=_(y.image,!1,r.maxTextureSize);me=ue(y,me);const ve=s.convert(y.format,y.colorSpace),Oe=s.convert(y.type);let ke=E(y.internalFormat,ve,Oe,y.colorSpace,y.isVideoTexture);De($,y);let Me;const Ge=y.mipmaps,We=y.isVideoTexture!==!0,ut=he.__version===void 0||q===!0,B=j.dataReady,be=R(y,me);if(y.isDepthTexture)ke=v(y.format===ya,y.type),ut&&(We?t.texStorage2D(n.TEXTURE_2D,1,ke,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,ke,me.width,me.height,0,ve,Oe,null));else if(y.isDataTexture)if(Ge.length>0){We&&ut&&t.texStorage2D(n.TEXTURE_2D,be,ke,Ge[0].width,Ge[0].height);for(let se=0,ce=Ge.length;se<ce;se++)Me=Ge[se],We?B&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Me.width,Me.height,ve,Oe,Me.data):t.texImage2D(n.TEXTURE_2D,se,ke,Me.width,Me.height,0,ve,Oe,Me.data);y.generateMipmaps=!1}else We?(ut&&t.texStorage2D(n.TEXTURE_2D,be,ke,me.width,me.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me.width,me.height,ve,Oe,me.data)):t.texImage2D(n.TEXTURE_2D,0,ke,me.width,me.height,0,ve,Oe,me.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){We&&ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,ke,Ge[0].width,Ge[0].height,me.depth);for(let se=0,ce=Ge.length;se<ce;se++)if(Me=Ge[se],y.format!==Gi)if(ve!==null)if(We){if(B)if(y.layerUpdates.size>0){const Ee=X_(Me.width,Me.height,y.format,y.type);for(const Te of y.layerUpdates){const qe=Me.data.subarray(Te*Ee/Me.data.BYTES_PER_ELEMENT,(Te+1)*Ee/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,Te,Me.width,Me.height,1,ve,qe)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Me.width,Me.height,me.depth,ve,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,ke,Me.width,Me.height,me.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,Me.width,Me.height,me.depth,ve,Oe,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,ke,Me.width,Me.height,me.depth,0,ve,Oe,Me.data)}else{We&&ut&&t.texStorage2D(n.TEXTURE_2D,be,ke,Ge[0].width,Ge[0].height);for(let se=0,ce=Ge.length;se<ce;se++)Me=Ge[se],y.format!==Gi?ve!==null?We?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,Me.width,Me.height,ve,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,se,ke,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?B&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Me.width,Me.height,ve,Oe,Me.data):t.texImage2D(n.TEXTURE_2D,se,ke,Me.width,Me.height,0,ve,Oe,Me.data)}else if(y.isDataArrayTexture)if(We){if(ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,ke,me.width,me.height,me.depth),B)if(y.layerUpdates.size>0){const se=X_(me.width,me.height,y.format,y.type);for(const ce of y.layerUpdates){const Ee=me.data.subarray(ce*se/me.data.BYTES_PER_ELEMENT,(ce+1)*se/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,me.width,me.height,1,ve,Oe,Ee)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,ve,Oe,me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ke,me.width,me.height,me.depth,0,ve,Oe,me.data);else if(y.isData3DTexture)We?(ut&&t.texStorage3D(n.TEXTURE_3D,be,ke,me.width,me.height,me.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,ve,Oe,me.data)):t.texImage3D(n.TEXTURE_3D,0,ke,me.width,me.height,me.depth,0,ve,Oe,me.data);else if(y.isFramebufferTexture){if(ut)if(We)t.texStorage2D(n.TEXTURE_2D,be,ke,me.width,me.height);else{let se=me.width,ce=me.height;for(let Ee=0;Ee<be;Ee++)t.texImage2D(n.TEXTURE_2D,Ee,ke,se,ce,0,ve,Oe,null),se>>=1,ce>>=1}}else if(Ge.length>0){if(We&&ut){const se=Q(Ge[0]);t.texStorage2D(n.TEXTURE_2D,be,ke,se.width,se.height)}for(let se=0,ce=Ge.length;se<ce;se++)Me=Ge[se],We?B&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,ve,Oe,Me):t.texImage2D(n.TEXTURE_2D,se,ke,ve,Oe,Me);y.generateMipmaps=!1}else if(We){if(ut){const se=Q(me);t.texStorage2D(n.TEXTURE_2D,be,ke,se.width,se.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Oe,me)}else t.texImage2D(n.TEXTURE_2D,0,ke,ve,Oe,me);m(y)&&p($),he.__version=j.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function _e(b,y,F){if(y.image.length!==6)return;const $=Ke(b,y),q=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+F);const j=i.get(q);if(q.version!==j.__version||$===!0){t.activeTexture(n.TEXTURE0+F);const he=pt.getPrimaries(pt.workingColorSpace),fe=y.colorSpace===rs?null:pt.getPrimaries(y.colorSpace),xe=y.colorSpace===rs||he===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Be=y.isCompressedTexture||y.image[0].isCompressedTexture,me=y.image[0]&&y.image[0].isDataTexture,ve=[];for(let ce=0;ce<6;ce++)!Be&&!me?ve[ce]=_(y.image[ce],!0,r.maxCubemapSize):ve[ce]=me?y.image[ce].image:y.image[ce],ve[ce]=ue(y,ve[ce]);const Oe=ve[0],ke=s.convert(y.format,y.colorSpace),Me=s.convert(y.type),Ge=E(y.internalFormat,ke,Me,y.colorSpace),We=y.isVideoTexture!==!0,ut=j.__version===void 0||$===!0,B=q.dataReady;let be=R(y,Oe);De(n.TEXTURE_CUBE_MAP,y);let se;if(Be){We&&ut&&t.texStorage2D(n.TEXTURE_CUBE_MAP,be,Ge,Oe.width,Oe.height);for(let ce=0;ce<6;ce++){se=ve[ce].mipmaps;for(let Ee=0;Ee<se.length;Ee++){const Te=se[Ee];y.format!==Gi?ke!==null?We?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee,0,0,Te.width,Te.height,ke,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee,Ge,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee,0,0,Te.width,Te.height,ke,Me,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee,Ge,Te.width,Te.height,0,ke,Me,Te.data)}}}else{if(se=y.mipmaps,We&&ut){se.length>0&&be++;const ce=Q(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,be,Ge,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(me){We?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ve[ce].width,ve[ce].height,ke,Me,ve[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ge,ve[ce].width,ve[ce].height,0,ke,Me,ve[ce].data);for(let Ee=0;Ee<se.length;Ee++){const qe=se[Ee].image[ce].image;We?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee+1,0,0,qe.width,qe.height,ke,Me,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee+1,Ge,qe.width,qe.height,0,ke,Me,qe.data)}}else{We?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ke,Me,ve[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ge,ke,Me,ve[ce]);for(let Ee=0;Ee<se.length;Ee++){const Te=se[Ee];We?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee+1,0,0,ke,Me,Te.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ee+1,Ge,ke,Me,Te.image[ce])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),j.__version=q.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function ye(b,y,F,$,q,j){const he=s.convert(F.format,F.colorSpace),fe=s.convert(F.type),xe=E(F.internalFormat,he,fe,F.colorSpace),Be=i.get(y),me=i.get(F);if(me.__renderTarget=y,!Be.__hasExternalTextures){const ve=Math.max(1,y.width>>j),Oe=Math.max(1,y.height>>j);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?t.texImage3D(q,j,xe,ve,Oe,y.depth,0,he,fe,null):t.texImage2D(q,j,xe,ve,Oe,0,he,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),L(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,q,me.__webglTexture,0,Z(y)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,q,me.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function k(b,y,F){if(n.bindRenderbuffer(n.RENDERBUFFER,b),y.depthBuffer){const $=y.depthTexture,q=$&&$.isDepthTexture?$.type:null,j=v(y.stencilBuffer,q),he=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=Z(y);L(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,j,y.width,y.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,j,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,j,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,b)}else{const $=y.textures;for(let q=0;q<$.length;q++){const j=$[q],he=s.convert(j.format,j.colorSpace),fe=s.convert(j.type),xe=E(j.internalFormat,he,fe,j.colorSpace),Be=Z(y);F&&L(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,xe,y.width,y.height):L(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Be,xe,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,xe,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ae(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(y.depthTexture);$.__renderTarget=y,(!$.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ee(y.depthTexture,0);const q=$.__webglTexture,j=Z(y);if(y.depthTexture.format===ra)L(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0);else if(y.depthTexture.format===ya)L(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function oe(b){const y=i.get(b),F=b.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==b.depthTexture){const $=b.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){const q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",q)};$.addEventListener("dispose",q),y.__depthDisposeCallback=q}y.__boundDepthTexture=$}if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ae(y.__webglFramebuffer,b)}else if(F){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=n.createRenderbuffer(),k(y.__webglDepthbuffer[$],b,!1);else{const q=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,j)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),k(y.__webglDepthbuffer,b,!1);else{const $=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,q)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(b,y,F){const $=i.get(b);y!==void 0&&ye($.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&oe(b)}function Ie(b){const y=b.texture,F=i.get(b),$=i.get(y);b.addEventListener("dispose",w);const q=b.textures,j=b.isWebGLCubeRenderTarget===!0,he=q.length>1;if(he||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=y.version,o.memory.textures++),j){F.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[fe]=[];for(let xe=0;xe<y.mipmaps.length;xe++)F.__webglFramebuffer[fe][xe]=n.createFramebuffer()}else F.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let fe=0;fe<y.mipmaps.length;fe++)F.__webglFramebuffer[fe]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(he)for(let fe=0,xe=q.length;fe<xe;fe++){const Be=i.get(q[fe]);Be.__webglTexture===void 0&&(Be.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&L(b)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let fe=0;fe<q.length;fe++){const xe=q[fe];F.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[fe]);const Be=s.convert(xe.format,xe.colorSpace),me=s.convert(xe.type),ve=E(xe.internalFormat,Be,me,xe.colorSpace,b.isXRRenderTarget===!0),Oe=Z(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,ve,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,F.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),k(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),De(n.TEXTURE_CUBE_MAP,y);for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)ye(F.__webglFramebuffer[fe][xe],b,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe);else ye(F.__webglFramebuffer[fe],b,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let fe=0,xe=q.length;fe<xe;fe++){const Be=q[fe],me=i.get(Be);t.bindTexture(n.TEXTURE_2D,me.__webglTexture),De(n.TEXTURE_2D,Be),ye(F.__webglFramebuffer,b,Be,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),m(Be)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(fe=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,$.__webglTexture),De(fe,y),y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)ye(F.__webglFramebuffer[xe],b,y,n.COLOR_ATTACHMENT0,fe,xe);else ye(F.__webglFramebuffer,b,y,n.COLOR_ATTACHMENT0,fe,0);m(y)&&p(fe),t.unbindTexture()}b.depthBuffer&&oe(b)}function P(b){const y=b.textures;for(let F=0,$=y.length;F<$;F++){const q=y[F];if(m(q)){const j=T(b),he=i.get(q).__webglTexture;t.bindTexture(j,he),p(j),t.unbindTexture()}}}const D=[],M=[];function ie(b){if(b.samples>0){if(L(b)===!1){const y=b.textures,F=b.width,$=b.height;let q=n.COLOR_BUFFER_BIT;const j=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(b),fe=y.length>1;if(fe)for(let xe=0;xe<y.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let xe=0;xe<y.length;xe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[xe]);const Be=i.get(y[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Be,0)}n.blitFramebuffer(0,0,F,$,0,0,F,$,q,n.NEAREST),l===!0&&(D.length=0,M.length=0,D.push(n.COLOR_ATTACHMENT0+xe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(D.push(j),M.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,M)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,D))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let xe=0;xe<y.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,he.__webglColorRenderbuffer[xe]);const Be=i.get(y[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,Be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Z(b){return Math.min(r.maxSamples,b.samples)}function L(b){const y=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ne(b){const y=o.render.frame;u.get(b)!==y&&(u.set(b,y),b.update())}function ue(b,y){const F=b.colorSpace,$=b.format,q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==Ma&&F!==rs&&(pt.getTransfer(F)===Mt?($!==Gi||q!==kr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}function Q(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.setTexture2D=ee,this.setTexture2DArray=W,this.setTexture3D=Y,this.setTextureCube=V,this.rebindTextures=pe,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=L}function BD(n,e){function t(i,r=rs){let s;const o=pt.getTransfer(r);if(i===kr)return n.UNSIGNED_BYTE;if(i===Rp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Pp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ax)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bx)return n.BYTE;if(i===Tx)return n.SHORT;if(i===Nl)return n.UNSIGNED_SHORT;if(i===Cp)return n.INT;if(i===ho)return n.UNSIGNED_INT;if(i===Pr)return n.FLOAT;if(i===Vl)return n.HALF_FLOAT;if(i===wx)return n.ALPHA;if(i===Cx)return n.RGB;if(i===Gi)return n.RGBA;if(i===Rx)return n.LUMINANCE;if(i===Px)return n.LUMINANCE_ALPHA;if(i===ra)return n.DEPTH_COMPONENT;if(i===ya)return n.DEPTH_STENCIL;if(i===Dx)return n.RED;if(i===Dp)return n.RED_INTEGER;if(i===Lx)return n.RG;if(i===Lp)return n.RG_INTEGER;if(i===Ip)return n.RGBA_INTEGER;if(i===jc||i===Zc||i===Jc||i===Qc)if(o===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===jc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Jc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===jc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Jc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rh||i===sh||i===oh||i===ah)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===rh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===oh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ah)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lh||i===ch||i===uh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===lh||i===ch)return o===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===uh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fh||i===dh||i===hh||i===ph||i===mh||i===_h||i===gh||i===vh||i===xh||i===Sh||i===yh||i===Mh||i===Eh||i===bh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===fh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ph)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_h)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Mh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Eh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===eu||i===Th||i===Ah)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===eu)return o===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Th)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ah)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ix||i===wh||i===Ch||i===Rh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===eu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===wh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ch)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Sa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const kD={type:"move"};class nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kD)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Dc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const zD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class VD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Jn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ys({vertexShader:zD,fragmentShader:HD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lr(new Yu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GD extends Ta{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const _=new VD,m=t.getContextAttributes();let p=null,T=null;const E=[],v=[],R=new wt;let C=null;const w=new Ri;w.viewport=new Xt;const I=new Ri;I.viewport=new Xt;const S=[w,I],x=new uw;let U=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let _e=E[te];return _e===void 0&&(_e=new nd,E[te]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(te){let _e=E[te];return _e===void 0&&(_e=new nd,E[te]=_e),_e.getGripSpace()},this.getHand=function(te){let _e=E[te];return _e===void 0&&(_e=new nd,E[te]=_e),_e.getHandSpace()};function z(te){const _e=v.indexOf(te.inputSource);if(_e===-1)return;const ye=E[_e];ye!==void 0&&(ye.update(te.inputSource,te.frame,c||o),ye.dispatchEvent({type:te.type,data:te.inputSource}))}function X(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",ee);for(let te=0;te<E.length;te++){const _e=v[te];_e!==null&&(v[te]=null,E[te].disconnect(_e))}U=null,N=null,_.reset(),e.setRenderTarget(p),h=null,d=null,f=null,r=null,T=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",X),r.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let ye=null,k=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=m.stencil?ya:ra,k=m.stencil?Sa:ho);const oe={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(oe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new po(d.textureWidth,d.textureHeight,{format:Gi,type:kr,depthTexture:new Kx(d.textureWidth,d.textureHeight,k,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const ye={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ye),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),T=new po(h.framebufferWidth,h.framebufferHeight,{format:Gi,type:kr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ke.setContext(r),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ee(te){for(let _e=0;_e<te.removed.length;_e++){const ye=te.removed[_e],k=v.indexOf(ye);k>=0&&(v[k]=null,E[k].disconnect(ye))}for(let _e=0;_e<te.added.length;_e++){const ye=te.added[_e];let k=v.indexOf(ye);if(k===-1){for(let oe=0;oe<E.length;oe++)if(oe>=v.length){v.push(ye),k=oe;break}else if(v[oe]===null){v[oe]=ye,k=oe;break}if(k===-1)break}const ae=E[k];ae&&ae.connect(ye)}}const W=new re,Y=new re;function V(te,_e,ye){W.setFromMatrixPosition(_e.matrixWorld),Y.setFromMatrixPosition(ye.matrixWorld);const k=W.distanceTo(Y),ae=_e.projectionMatrix.elements,oe=ye.projectionMatrix.elements,pe=ae[14]/(ae[10]-1),Ie=ae[14]/(ae[10]+1),P=(ae[9]+1)/ae[5],D=(ae[9]-1)/ae[5],M=(ae[8]-1)/ae[0],ie=(oe[8]+1)/oe[0],Z=pe*M,L=pe*ie,ne=k/(-M+ie),ue=ne*-M;if(_e.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ue),te.translateZ(ne),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),ae[10]===-1)te.projectionMatrix.copy(_e.projectionMatrix),te.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const Q=pe+ne,b=Ie+ne,y=Z-ue,F=L+(k-ue),$=P*Ie/b*Q,q=D*Ie/b*Q;te.projectionMatrix.makePerspective(y,F,$,q,Q,b),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function de(te,_e){_e===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(_e.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let _e=te.near,ye=te.far;_.texture!==null&&(_.depthNear>0&&(_e=_.depthNear),_.depthFar>0&&(ye=_.depthFar)),x.near=I.near=w.near=_e,x.far=I.far=w.far=ye,(U!==x.near||N!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),U=x.near,N=x.far),w.layers.mask=te.layers.mask|2,I.layers.mask=te.layers.mask|4,x.layers.mask=w.layers.mask|I.layers.mask;const k=te.parent,ae=x.cameras;de(x,k);for(let oe=0;oe<ae.length;oe++)de(ae[oe],k);ae.length===2?V(x,w,I):x.projectionMatrix.copy(w.projectionMatrix),O(te,x,k)};function O(te,_e,ye){ye===null?te.matrix.copy(_e.matrixWorld):(te.matrix.copy(ye.matrixWorld),te.matrix.invert(),te.matrix.multiply(_e.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(_e.projectionMatrix),te.projectionMatrixInverse.copy(_e.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Ph*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=te)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let Se=null;function De(te,_e){if(u=_e.getViewerPose(c||o),g=_e,u!==null){const ye=u.views;h!==null&&(e.setRenderTargetFramebuffer(T,h.framebuffer),e.setRenderTarget(T));let k=!1;ye.length!==x.cameras.length&&(x.cameras.length=0,k=!0);for(let oe=0;oe<ye.length;oe++){const pe=ye[oe];let Ie=null;if(h!==null)Ie=h.getViewport(pe);else{const D=f.getViewSubImage(d,pe);Ie=D.viewport,oe===0&&(e.setRenderTargetTextures(T,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(T))}let P=S[oe];P===void 0&&(P=new Ri,P.layers.enable(oe),P.viewport=new Xt,S[oe]=P),P.matrix.fromArray(pe.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(pe.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),oe===0&&(x.matrix.copy(P.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),k===!0&&x.cameras.push(P)}const ae=r.enabledFeatures;if(ae&&ae.includes("depth-sensing")){const oe=f.getDepthInformation(ye[0]);oe&&oe.isValid&&oe.texture&&_.init(e,oe,r.renderState)}}for(let ye=0;ye<E.length;ye++){const k=v[ye],ae=E[ye];k!==null&&ae!==void 0&&ae.update(k,_e,c||o)}Se&&Se(te,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),g=null}const Ke=new jx;Ke.setAnimationLoop(De),this.setAnimationLoop=function(te){Se=te},this.dispose=function(){}}}const Fs=new zr,WD=new qt;function XD(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Wx(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,T,E,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Zn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Zn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),E=T.envMap,v=T.envMapRotation;E&&(m.envMap.value=E,Fs.copy(v),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),m.envMapRotation.value.setFromMatrix4(WD.makeRotationFromEuler(Fs)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function $D(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){const v=E.program;i.uniformBlockBinding(T,v)}function c(T,E){let v=r[T.id];v===void 0&&(g(T),v=u(T),r[T.id]=v,T.addEventListener("dispose",m));const R=E.program;i.updateUBOMapping(T,R);const C=e.render.frame;s[T.id]!==C&&(d(T),s[T.id]=C)}function u(T){const E=f();T.__bindingPointIndex=E;const v=n.createBuffer(),R=T.__size,C=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,R,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,v),v}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const E=r[T.id],v=T.uniforms,R=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let C=0,w=v.length;C<w;C++){const I=Array.isArray(v[C])?v[C]:[v[C]];for(let S=0,x=I.length;S<x;S++){const U=I[S];if(h(U,C,S,R)===!0){const N=U.__offset,z=Array.isArray(U.value)?U.value:[U.value];let X=0;for(let ee=0;ee<z.length;ee++){const W=z[ee],Y=_(W);typeof W=="number"||typeof W=="boolean"?(U.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,N+X,U.__data)):W.isMatrix3?(U.__data[0]=W.elements[0],U.__data[1]=W.elements[1],U.__data[2]=W.elements[2],U.__data[3]=0,U.__data[4]=W.elements[3],U.__data[5]=W.elements[4],U.__data[6]=W.elements[5],U.__data[7]=0,U.__data[8]=W.elements[6],U.__data[9]=W.elements[7],U.__data[10]=W.elements[8],U.__data[11]=0):(W.toArray(U.__data,X),X+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(T,E,v,R){const C=T.value,w=E+"_"+v;if(R[w]===void 0)return typeof C=="number"||typeof C=="boolean"?R[w]=C:R[w]=C.clone(),!0;{const I=R[w];if(typeof C=="number"||typeof C=="boolean"){if(I!==C)return R[w]=C,!0}else if(I.equals(C)===!1)return I.copy(C),!0}return!1}function g(T){const E=T.uniforms;let v=0;const R=16;for(let w=0,I=E.length;w<I;w++){const S=Array.isArray(E[w])?E[w]:[E[w]];for(let x=0,U=S.length;x<U;x++){const N=S[x],z=Array.isArray(N.value)?N.value:[N.value];for(let X=0,ee=z.length;X<ee;X++){const W=z[X],Y=_(W),V=v%R,de=V%Y.boundary,O=V+de;v+=de,O!==0&&R-O<Y.storage&&(v+=R-O),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=Y.storage}}}const C=v%R;return C>0&&(v+=R-C),T.__size=v,T.__cache={},this}function _(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){const E=T.target;E.removeEventListener("dispose",m);const v=o.indexOf(E.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(const T in r)n.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class qD{constructor(e={}){const{canvas:t=DA(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ai,this.toneMapping=ms,this.toneMappingExposure=1;const v=this;let R=!1,C=0,w=0,I=null,S=-1,x=null;const U=new Xt,N=new Xt;let z=null;const X=new yt(0);let ee=0,W=t.width,Y=t.height,V=1,de=null,O=null;const Se=new Xt(0,0,W,Y),De=new Xt(0,0,W,Y);let Ke=!1;const te=new qx;let _e=!1,ye=!1;this.transmissionResolutionScale=1;const k=new qt,ae=new qt,oe=new re,pe=new Xt,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let P=!1;function D(){return I===null?V:1}let M=i;function ie(A,G){return t.getContext(A,G)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wp}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",Te,!1),M===null){const G="webgl2";if(M=ie(G,A),M===null)throw ie(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Z,L,ne,ue,Q,b,y,F,$,q,j,he,fe,xe,Be,me,ve,Oe,ke,Me,Ge,We,ut,B;function be(){Z=new nP(M),Z.init(),We=new BD(M,Z),L=new jR(M,Z,e,We),ne=new OD(M,Z),L.reverseDepthBuffer&&d&&ne.buffers.depth.setReversed(!0),ue=new sP(M),Q=new ED,b=new FD(M,Z,ne,Q,L,We,ue),y=new JR(v),F=new tP(v),$=new dw(M),ut=new YR(M,$),q=new iP(M,$,ue,ut),j=new aP(M,q,$,ue),ke=new oP(M,L,b),me=new ZR(Q),he=new MD(v,y,F,Z,L,ut,me),fe=new XD(v,Q),xe=new TD,Be=new DD(Z),Oe=new qR(v,y,F,ne,j,h,l),ve=new UD(v,j,L),B=new $D(M,ue,L,ne),Me=new KR(M,Z,ue),Ge=new rP(M,Z,ue),ue.programs=he.programs,v.capabilities=L,v.extensions=Z,v.properties=Q,v.renderLists=xe,v.shadowMap=ve,v.state=ne,v.info=ue}be();const se=new GD(v,M);this.xr=se,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const A=Z.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Z.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(W,Y,!1))},this.getSize=function(A){return A.set(W,Y)},this.setSize=function(A,G,J=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,Y=G,t.width=Math.floor(A*V),t.height=Math.floor(G*V),J===!0&&(t.style.width=A+"px",t.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(W*V,Y*V).floor()},this.setDrawingBufferSize=function(A,G,J){W=A,Y=G,V=J,t.width=Math.floor(A*J),t.height=Math.floor(G*J),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy(Se)},this.setViewport=function(A,G,J,K){A.isVector4?Se.set(A.x,A.y,A.z,A.w):Se.set(A,G,J,K),ne.viewport(U.copy(Se).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy(De)},this.setScissor=function(A,G,J,K){A.isVector4?De.set(A.x,A.y,A.z,A.w):De.set(A,G,J,K),ne.scissor(N.copy(De).multiplyScalar(V).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(A){ne.setScissorTest(Ke=A)},this.setOpaqueSort=function(A){de=A},this.setTransparentSort=function(A){O=A},this.getClearColor=function(A){return A.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(A=!0,G=!0,J=!0){let K=0;if(A){let H=!1;if(I!==null){const ge=I.texture.format;H=ge===Ip||ge===Lp||ge===Dp}if(H){const ge=I.texture.type,we=ge===kr||ge===ho||ge===Nl||ge===Sa||ge===Rp||ge===Pp,Le=Oe.getClearColor(),Pe=Oe.getClearAlpha(),He=Le.r,$e=Le.g,ze=Le.b;we?(g[0]=He,g[1]=$e,g[2]=ze,g[3]=Pe,M.clearBufferuiv(M.COLOR,0,g)):(_[0]=He,_[1]=$e,_[2]=ze,_[3]=Pe,M.clearBufferiv(M.COLOR,0,_))}else K|=M.COLOR_BUFFER_BIT}G&&(K|=M.DEPTH_BUFFER_BIT),J&&(K|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Oe.dispose(),xe.dispose(),Be.dispose(),Q.dispose(),y.dispose(),F.dispose(),j.dispose(),ut.dispose(),B.dispose(),he.dispose(),se.dispose(),se.removeEventListener("sessionstart",Ae),se.removeEventListener("sessionend",je),Fe.stop()};function ce(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const A=ue.autoReset,G=ve.enabled,J=ve.autoUpdate,K=ve.needsUpdate,H=ve.type;be(),ue.autoReset=A,ve.enabled=G,ve.autoUpdate=J,ve.needsUpdate=K,ve.type=H}function Te(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function qe(A){const G=A.target;G.removeEventListener("dispose",qe),ft(G)}function ft(A){Bt(A),Q.remove(A)}function Bt(A){const G=Q.get(A).programs;G!==void 0&&(G.forEach(function(J){he.releaseProgram(J)}),A.isShaderMaterial&&he.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,J,K,H,ge){G===null&&(G=Ie);const we=H.isMesh&&H.matrixWorld.determinant()<0,Le=ti(A,G,J,K,H);ne.setMaterial(K,we);let Pe=J.index,He=1;if(K.wireframe===!0){if(Pe=q.getWireframeAttribute(J),Pe===void 0)return;He=2}const $e=J.drawRange,ze=J.attributes.position;let tt=$e.start*He,_t=($e.start+$e.count)*He;ge!==null&&(tt=Math.max(tt,ge.start*He),_t=Math.min(_t,(ge.start+ge.count)*He)),Pe!==null?(tt=Math.max(tt,0),_t=Math.min(_t,Pe.count)):ze!=null&&(tt=Math.max(tt,0),_t=Math.min(_t,ze.count));const Yt=_t-tt;if(Yt<0||Yt===1/0)return;ut.setup(H,K,Le,J,Pe);let kt,dt=Me;if(Pe!==null&&(kt=$.get(Pe),dt=Ge,dt.setIndex(kt)),H.isMesh)K.wireframe===!0?(ne.setLineWidth(K.wireframeLinewidth*D()),dt.setMode(M.LINES)):dt.setMode(M.TRIANGLES);else if(H.isLine){let Xe=K.linewidth;Xe===void 0&&(Xe=1),ne.setLineWidth(Xe*D()),H.isLineSegments?dt.setMode(M.LINES):H.isLineLoop?dt.setMode(M.LINE_LOOP):dt.setMode(M.LINE_STRIP)}else H.isPoints?dt.setMode(M.POINTS):H.isSprite&&dt.setMode(M.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)dt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))dt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Xe=H._multiDrawStarts,dn=H._multiDrawCounts,gt=H._multiDrawCount,Oi=Pe?$.get(Pe).bytesPerElement:1,go=Q.get(K).currentProgram.getUniforms();for(let ni=0;ni<gt;ni++)go.setValue(M,"_gl_DrawID",ni),dt.render(Xe[ni]/Oi,dn[ni])}else if(H.isInstancedMesh)dt.renderInstances(tt,Yt,H.count);else if(J.isInstancedBufferGeometry){const Xe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,dn=Math.min(J.instanceCount,Xe);dt.renderInstances(tt,Yt,dn)}else dt.render(tt,Yt)};function Re(A,G,J){A.transparent===!0&&A.side===Cr&&A.forceSinglePass===!1?(A.side=Zn,A.needsUpdate=!0,Et(A,G,J),A.side=Ss,A.needsUpdate=!0,Et(A,G,J),A.side=Cr):Et(A,G,J)}this.compile=function(A,G,J=null){J===null&&(J=A),p=Be.get(J),p.init(G),E.push(p),J.traverseVisible(function(H){H.isLight&&H.layers.test(G.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),A!==J&&A.traverseVisible(function(H){H.isLight&&H.layers.test(G.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const K=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ge=H.material;if(ge)if(Array.isArray(ge))for(let we=0;we<ge.length;we++){const Le=ge[we];Re(Le,J,H),K.add(Le)}else Re(ge,J,H),K.add(ge)}),E.pop(),p=null,K},this.compileAsync=function(A,G,J=null){const K=this.compile(A,G,J);return new Promise(H=>{function ge(){if(K.forEach(function(we){Q.get(we).currentProgram.isReady()&&K.delete(we)}),K.size===0){H(A);return}setTimeout(ge,10)}Z.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Ne=null;function Je(A){Ne&&Ne(A)}function Ae(){Fe.stop()}function je(){Fe.start()}const Fe=new jx;Fe.setAnimationLoop(Je),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(A){Ne=A,se.setAnimationLoop(A),A===null?Fe.stop():Fe.start()},se.addEventListener("sessionstart",Ae),se.addEventListener("sessionend",je),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(G),G=se.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,G,I),p=Be.get(A,E.length),p.init(G),E.push(p),ae.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),te.setFromProjectionMatrix(ae),ye=this.localClippingEnabled,_e=me.init(this.clippingPlanes,ye),m=xe.get(A,T.length),m.init(),T.push(m),se.enabled===!0&&se.isPresenting===!0){const ge=v.xr.getDepthSensingMesh();ge!==null&&Ye(ge,G,-1/0,v.sortObjects)}Ye(A,G,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(de,O),P=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,P&&Oe.addToRenderList(m,A),this.info.render.frame++,_e===!0&&me.beginShadows();const J=p.state.shadowsArray;ve.render(J,A,G),_e===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,H=m.transmissive;if(p.setupLights(),G.isArrayCamera){const ge=G.cameras;if(H.length>0)for(let we=0,Le=ge.length;we<Le;we++){const Pe=ge[we];it(K,H,A,Pe)}P&&Oe.render(A);for(let we=0,Le=ge.length;we<Le;we++){const Pe=ge[we];Vt(m,A,Pe,Pe.viewport)}}else H.length>0&&it(K,H,A,G),P&&Oe.render(A),Vt(m,A,G);I!==null&&w===0&&(b.updateMultisampleRenderTarget(I),b.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(v,A,G),ut.resetDefaultState(),S=-1,x=null,E.pop(),E.length>0?(p=E[E.length-1],_e===!0&&me.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Ye(A,G,J,K){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||te.intersectsSprite(A)){K&&pe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ae);const we=j.update(A),Le=A.material;Le.visible&&m.push(A,we,Le,J,pe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||te.intersectsObject(A))){const we=j.update(A),Le=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),pe.copy(A.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),pe.copy(we.boundingSphere.center)),pe.applyMatrix4(A.matrixWorld).applyMatrix4(ae)),Array.isArray(Le)){const Pe=we.groups;for(let He=0,$e=Pe.length;He<$e;He++){const ze=Pe[He],tt=Le[ze.materialIndex];tt&&tt.visible&&m.push(A,we,tt,J,pe.z,ze)}}else Le.visible&&m.push(A,we,Le,J,pe.z,null)}}const ge=A.children;for(let we=0,Le=ge.length;we<Le;we++)Ye(ge[we],G,J,K)}function Vt(A,G,J,K){const H=A.opaque,ge=A.transmissive,we=A.transparent;p.setupLightsView(J),_e===!0&&me.setGlobalState(v.clippingPlanes,J),K&&ne.viewport(U.copy(K)),H.length>0&&Rt(H,G,J),ge.length>0&&Rt(ge,G,J),we.length>0&&Rt(we,G,J),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function it(A,G,J,K){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new po(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?Vl:kr,minFilter:js,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));const ge=p.state.transmissionRenderTarget[K.id],we=K.viewport||U;ge.setSize(we.z*v.transmissionResolutionScale,we.w*v.transmissionResolutionScale);const Le=v.getRenderTarget();v.setRenderTarget(ge),v.getClearColor(X),ee=v.getClearAlpha(),ee<1&&v.setClearColor(16777215,.5),v.clear(),P&&Oe.render(J);const Pe=v.toneMapping;v.toneMapping=ms;const He=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),_e===!0&&me.setGlobalState(v.clippingPlanes,K),Rt(A,J,K),b.updateMultisampleRenderTarget(ge),b.updateRenderTargetMipmap(ge),Z.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let ze=0,tt=G.length;ze<tt;ze++){const _t=G[ze],Yt=_t.object,kt=_t.geometry,dt=_t.material,Xe=_t.group;if(dt.side===Cr&&Yt.layers.test(K.layers)){const dn=dt.side;dt.side=Zn,dt.needsUpdate=!0,Qt(Yt,J,K,kt,dt,Xe),dt.side=dn,dt.needsUpdate=!0,$e=!0}}$e===!0&&(b.updateMultisampleRenderTarget(ge),b.updateRenderTargetMipmap(ge))}v.setRenderTarget(Le),v.setClearColor(X,ee),He!==void 0&&(K.viewport=He),v.toneMapping=Pe}function Rt(A,G,J){const K=G.isScene===!0?G.overrideMaterial:null;for(let H=0,ge=A.length;H<ge;H++){const we=A[H],Le=we.object,Pe=we.geometry,He=K===null?we.material:K,$e=we.group;Le.layers.test(J.layers)&&Qt(Le,G,J,Pe,He,$e)}}function Qt(A,G,J,K,H,ge){A.onBeforeRender(v,G,J,K,H,ge),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(v,G,J,K,A,ge),H.transparent===!0&&H.side===Cr&&H.forceSinglePass===!1?(H.side=Zn,H.needsUpdate=!0,v.renderBufferDirect(J,G,K,H,A,ge),H.side=Ss,H.needsUpdate=!0,v.renderBufferDirect(J,G,K,H,A,ge),H.side=Cr):v.renderBufferDirect(J,G,K,H,A,ge),A.onAfterRender(v,G,J,K,H,ge)}function Et(A,G,J){G.isScene!==!0&&(G=Ie);const K=Q.get(A),H=p.state.lights,ge=p.state.shadowsArray,we=H.state.version,Le=he.getParameters(A,H.state,ge,G,J),Pe=he.getProgramCacheKey(Le);let He=K.programs;K.environment=A.isMeshStandardMaterial?G.environment:null,K.fog=G.fog,K.envMap=(A.isMeshStandardMaterial?F:y).get(A.envMap||K.environment),K.envMapRotation=K.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,He===void 0&&(A.addEventListener("dispose",qe),He=new Map,K.programs=He);let $e=He.get(Pe);if($e!==void 0){if(K.currentProgram===$e&&K.lightsStateVersion===we)return mt(A,Le),$e}else Le.uniforms=he.getUniforms(A),A.onBeforeCompile(Le,v),$e=he.acquireProgram(Le,Pe),He.set(Pe,$e),K.uniforms=Le.uniforms;const ze=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=me.uniform),mt(A,Le),K.needsLights=Cn(A),K.lightsStateVersion=we,K.needsLights&&(ze.ambientLightColor.value=H.state.ambient,ze.lightProbe.value=H.state.probe,ze.directionalLights.value=H.state.directional,ze.directionalLightShadows.value=H.state.directionalShadow,ze.spotLights.value=H.state.spot,ze.spotLightShadows.value=H.state.spotShadow,ze.rectAreaLights.value=H.state.rectArea,ze.ltc_1.value=H.state.rectAreaLTC1,ze.ltc_2.value=H.state.rectAreaLTC2,ze.pointLights.value=H.state.point,ze.pointLightShadows.value=H.state.pointShadow,ze.hemisphereLights.value=H.state.hemi,ze.directionalShadowMap.value=H.state.directionalShadowMap,ze.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ze.spotShadowMap.value=H.state.spotShadowMap,ze.spotLightMatrix.value=H.state.spotLightMatrix,ze.spotLightMap.value=H.state.spotLightMap,ze.pointShadowMap.value=H.state.pointShadowMap,ze.pointShadowMatrix.value=H.state.pointShadowMatrix),K.currentProgram=$e,K.uniformsList=null,$e}function bt(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=tu.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function mt(A,G){const J=Q.get(A);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.batchingColor=G.batchingColor,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.instancingMorph=G.instancingMorph,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function ti(A,G,J,K,H){G.isScene!==!0&&(G=Ie),b.resetTextureUnits();const ge=G.fog,we=K.isMeshStandardMaterial?G.environment:null,Le=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ma,Pe=(K.isMeshStandardMaterial?F:y).get(K.envMap||we),He=K.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,$e=!!J.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),ze=!!J.morphAttributes.position,tt=!!J.morphAttributes.normal,_t=!!J.morphAttributes.color;let Yt=ms;K.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Yt=v.toneMapping);const kt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,dt=kt!==void 0?kt.length:0,Xe=Q.get(K),dn=p.state.lights;if(_e===!0&&(ye===!0||A!==x)){const Rn=A===x&&K.id===S;me.setState(K,A,Rn)}let gt=!1;K.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==dn.state.version||Xe.outputColorSpace!==Le||H.isBatchedMesh&&Xe.batching===!1||!H.isBatchedMesh&&Xe.batching===!0||H.isBatchedMesh&&Xe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Xe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Xe.instancing===!1||!H.isInstancedMesh&&Xe.instancing===!0||H.isSkinnedMesh&&Xe.skinning===!1||!H.isSkinnedMesh&&Xe.skinning===!0||H.isInstancedMesh&&Xe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Xe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Xe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Xe.instancingMorph===!1&&H.morphTexture!==null||Xe.envMap!==Pe||K.fog===!0&&Xe.fog!==ge||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==me.numPlanes||Xe.numIntersection!==me.numIntersection)||Xe.vertexAlphas!==He||Xe.vertexTangents!==$e||Xe.morphTargets!==ze||Xe.morphNormals!==tt||Xe.morphColors!==_t||Xe.toneMapping!==Yt||Xe.morphTargetsCount!==dt)&&(gt=!0):(gt=!0,Xe.__version=K.version);let Oi=Xe.currentProgram;gt===!0&&(Oi=Et(K,G,H));let go=!1,ni=!1,wa=!1;const It=Oi.getUniforms(),yi=Xe.uniforms;if(ne.useProgram(Oi.program)&&(go=!0,ni=!0,wa=!0),K.id!==S&&(S=K.id,ni=!0),go||x!==A){ne.buffers.depth.getReversed()?(k.copy(A.projectionMatrix),IA(k),UA(k),It.setValue(M,"projectionMatrix",k)):It.setValue(M,"projectionMatrix",A.projectionMatrix),It.setValue(M,"viewMatrix",A.matrixWorldInverse);const Vn=It.map.cameraPosition;Vn!==void 0&&Vn.setValue(M,oe.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&It.setValue(M,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&It.setValue(M,"isOrthographic",A.isOrthographicCamera===!0),x!==A&&(x=A,ni=!0,wa=!0)}if(H.isSkinnedMesh){It.setOptional(M,H,"bindMatrix"),It.setOptional(M,H,"bindMatrixInverse");const Rn=H.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),It.setValue(M,"boneTexture",Rn.boneTexture,b))}H.isBatchedMesh&&(It.setOptional(M,H,"batchingTexture"),It.setValue(M,"batchingTexture",H._matricesTexture,b),It.setOptional(M,H,"batchingIdTexture"),It.setValue(M,"batchingIdTexture",H._indirectTexture,b),It.setOptional(M,H,"batchingColorTexture"),H._colorsTexture!==null&&It.setValue(M,"batchingColorTexture",H._colorsTexture,b));const Mi=J.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0)&&ke.update(H,J,Oi),(ni||Xe.receiveShadow!==H.receiveShadow)&&(Xe.receiveShadow=H.receiveShadow,It.setValue(M,"receiveShadow",H.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(yi.envMap.value=Pe,yi.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&G.environment!==null&&(yi.envMapIntensity.value=G.environmentIntensity),ni&&(It.setValue(M,"toneMappingExposure",v.toneMappingExposure),Xe.needsLights&&Lt(yi,wa),ge&&K.fog===!0&&fe.refreshFogUniforms(yi,ge),fe.refreshMaterialUniforms(yi,K,V,Y,p.state.transmissionRenderTarget[A.id]),tu.upload(M,bt(Xe),yi,b)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(tu.upload(M,bt(Xe),yi,b),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&It.setValue(M,"center",H.center),It.setValue(M,"modelViewMatrix",H.modelViewMatrix),It.setValue(M,"normalMatrix",H.normalMatrix),It.setValue(M,"modelMatrix",H.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Rn=K.uniformsGroups;for(let Vn=0,ju=Rn.length;Vn<ju;Vn++){const As=Rn[Vn];B.update(As,Oi),B.bind(As,Oi)}}return Oi}function Lt(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function Cn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,G,J){Q.get(A.texture).__webglTexture=G,Q.get(A.depthTexture).__webglTexture=J;const K=Q.get(A);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=J===void 0,K.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,G){const J=Q.get(A);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0};const Si=M.createFramebuffer();this.setRenderTarget=function(A,G=0,J=0){I=A,C=G,w=J;let K=!0,H=null,ge=!1,we=!1;if(A){const Pe=Q.get(A);if(Pe.__useDefaultFramebuffer!==void 0)ne.bindFramebuffer(M.FRAMEBUFFER,null),K=!1;else if(Pe.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(Pe.__hasExternalTextures)b.rebindTextures(A,Q.get(A.texture).__webglTexture,Q.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ze=A.depthTexture;if(Pe.__boundDepthTexture!==ze){if(ze!==null&&Q.has(ze)&&(A.width!==ze.image.width||A.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const He=A.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(we=!0);const $e=Q.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($e[G])?H=$e[G][J]:H=$e[G],ge=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?H=Q.get(A).__webglMultisampledFramebuffer:Array.isArray($e)?H=$e[J]:H=$e,U.copy(A.viewport),N.copy(A.scissor),z=A.scissorTest}else U.copy(Se).multiplyScalar(V).floor(),N.copy(De).multiplyScalar(V).floor(),z=Ke;if(J!==0&&(H=Si),ne.bindFramebuffer(M.FRAMEBUFFER,H)&&K&&ne.drawBuffers(A,H),ne.viewport(U),ne.scissor(N),ne.setScissorTest(z),ge){const Pe=Q.get(A.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+G,Pe.__webglTexture,J)}else if(we){const Pe=Q.get(A.texture),He=G;M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,Pe.__webglTexture,J,He)}else if(A!==null&&J!==0){const Pe=Q.get(A.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Pe.__webglTexture,J)}S=-1},this.readRenderTargetPixels=function(A,G,J,K,H,ge,we){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le){ne.bindFramebuffer(M.FRAMEBUFFER,Le);try{const Pe=A.texture,He=Pe.format,$e=Pe.type;if(!L.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!L.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-K&&J>=0&&J<=A.height-H&&M.readPixels(G,J,K,H,We.convert(He),We.convert($e),ge)}finally{const Pe=I!==null?Q.get(I).__webglFramebuffer:null;ne.bindFramebuffer(M.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(A,G,J,K,H,ge,we){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le){const Pe=A.texture,He=Pe.format,$e=Pe.type;if(!L.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=A.width-K&&J>=0&&J<=A.height-H){ne.bindFramebuffer(M.FRAMEBUFFER,Le);const ze=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,ze),M.bufferData(M.PIXEL_PACK_BUFFER,ge.byteLength,M.STREAM_READ),M.readPixels(G,J,K,H,We.convert(He),We.convert($e),0);const tt=I!==null?Q.get(I).__webglFramebuffer:null;ne.bindFramebuffer(M.FRAMEBUFFER,tt);const _t=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await LA(M,_t,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,ze),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,ge),M.deleteBuffer(ze),M.deleteSync(_t),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,G=null,J=0){A.isTexture!==!0&&(zo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,A=arguments[1]);const K=Math.pow(2,-J),H=Math.floor(A.image.width*K),ge=Math.floor(A.image.height*K),we=G!==null?G.x:0,Le=G!==null?G.y:0;b.setTexture2D(A,0),M.copyTexSubImage2D(M.TEXTURE_2D,J,0,0,we,Le,H,ge),ne.unbindTexture()};const en=M.createFramebuffer(),tn=M.createFramebuffer();this.copyTextureToTexture=function(A,G,J=null,K=null,H=0,ge=null){A.isTexture!==!0&&(zo("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,A=arguments[1],G=arguments[2],ge=arguments[3]||0,J=null),ge===null&&(H!==0?(zo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=H,H=0):ge=0);let we,Le,Pe,He,$e,ze,tt,_t,Yt;const kt=A.isCompressedTexture?A.mipmaps[ge]:A.image;if(J!==null)we=J.max.x-J.min.x,Le=J.max.y-J.min.y,Pe=J.isBox3?J.max.z-J.min.z:1,He=J.min.x,$e=J.min.y,ze=J.isBox3?J.min.z:0;else{const Mi=Math.pow(2,-H);we=Math.floor(kt.width*Mi),Le=Math.floor(kt.height*Mi),A.isDataArrayTexture?Pe=kt.depth:A.isData3DTexture?Pe=Math.floor(kt.depth*Mi):Pe=1,He=0,$e=0,ze=0}K!==null?(tt=K.x,_t=K.y,Yt=K.z):(tt=0,_t=0,Yt=0);const dt=We.convert(G.format),Xe=We.convert(G.type);let dn;G.isData3DTexture?(b.setTexture3D(G,0),dn=M.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(b.setTexture2DArray(G,0),dn=M.TEXTURE_2D_ARRAY):(b.setTexture2D(G,0),dn=M.TEXTURE_2D),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,G.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,G.unpackAlignment);const gt=M.getParameter(M.UNPACK_ROW_LENGTH),Oi=M.getParameter(M.UNPACK_IMAGE_HEIGHT),go=M.getParameter(M.UNPACK_SKIP_PIXELS),ni=M.getParameter(M.UNPACK_SKIP_ROWS),wa=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,kt.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,kt.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,He),M.pixelStorei(M.UNPACK_SKIP_ROWS,$e),M.pixelStorei(M.UNPACK_SKIP_IMAGES,ze);const It=A.isDataArrayTexture||A.isData3DTexture,yi=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){const Mi=Q.get(A),Rn=Q.get(G),Vn=Q.get(Mi.__renderTarget),ju=Q.get(Rn.__renderTarget);ne.bindFramebuffer(M.READ_FRAMEBUFFER,Vn.__webglFramebuffer),ne.bindFramebuffer(M.DRAW_FRAMEBUFFER,ju.__webglFramebuffer);for(let As=0;As<Pe;As++)It&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Q.get(A).__webglTexture,H,ze+As),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Q.get(G).__webglTexture,ge,Yt+As)),M.blitFramebuffer(He,$e,we,Le,tt,_t,we,Le,M.DEPTH_BUFFER_BIT,M.NEAREST);ne.bindFramebuffer(M.READ_FRAMEBUFFER,null),ne.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(H!==0||A.isRenderTargetTexture||Q.has(A)){const Mi=Q.get(A),Rn=Q.get(G);ne.bindFramebuffer(M.READ_FRAMEBUFFER,en),ne.bindFramebuffer(M.DRAW_FRAMEBUFFER,tn);for(let Vn=0;Vn<Pe;Vn++)It?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Mi.__webglTexture,H,ze+Vn):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Mi.__webglTexture,H),yi?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Rn.__webglTexture,ge,Yt+Vn):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Rn.__webglTexture,ge),H!==0?M.blitFramebuffer(He,$e,we,Le,tt,_t,we,Le,M.COLOR_BUFFER_BIT,M.NEAREST):yi?M.copyTexSubImage3D(dn,ge,tt,_t,Yt+Vn,He,$e,we,Le):M.copyTexSubImage2D(dn,ge,tt,_t,He,$e,we,Le);ne.bindFramebuffer(M.READ_FRAMEBUFFER,null),ne.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else yi?A.isDataTexture||A.isData3DTexture?M.texSubImage3D(dn,ge,tt,_t,Yt,we,Le,Pe,dt,Xe,kt.data):G.isCompressedArrayTexture?M.compressedTexSubImage3D(dn,ge,tt,_t,Yt,we,Le,Pe,dt,kt.data):M.texSubImage3D(dn,ge,tt,_t,Yt,we,Le,Pe,dt,Xe,kt):A.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,ge,tt,_t,we,Le,dt,Xe,kt.data):A.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,ge,tt,_t,kt.width,kt.height,dt,kt.data):M.texSubImage2D(M.TEXTURE_2D,ge,tt,_t,we,Le,dt,Xe,kt);M.pixelStorei(M.UNPACK_ROW_LENGTH,gt),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Oi),M.pixelStorei(M.UNPACK_SKIP_PIXELS,go),M.pixelStorei(M.UNPACK_SKIP_ROWS,ni),M.pixelStorei(M.UNPACK_SKIP_IMAGES,wa),ge===0&&G.generateMipmaps&&M.generateMipmap(dn),ne.unbindTexture()},this.copyTextureToTexture3D=function(A,G,J=null,K=null,H=0){return A.isTexture!==!0&&(zo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,K=arguments[1]||null,A=arguments[2],G=arguments[3],H=arguments[4]||0),zo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,G,J,K,H)},this.initRenderTarget=function(A){Q.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),ne.unbindTexture()},this.resetState=function(){C=0,w=0,I=null,ne.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}}const YD={name:"ThreeBackground",setup(){const n=Ii(null);let e,t,i,r;const s=()=>{e=new iw,t=new Ri(75,window.innerWidth/window.innerHeight,.1,1e3),t.position.z=5,i=new qD({alpha:!0,antialias:!0}),i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(window.devicePixelRatio),n.value.appendChild(i.domElement);const c=new Vr,u=2e3,f=new Float32Array(u*3);for(let h=0;h<u*3;h++)f[h]=(Math.random()-.5)*10;c.setAttribute("position",new qi(f,3));const d=new Yx({size:.005,color:"#6C63FF",transparent:!0,opacity:.8,blending:Wd});r=new ow(c,d),e.add(r),o()},o=()=>{requestAnimationFrame(o),r.rotation.x+=1e-4,r.rotation.y+=1e-4,window.mouseX&&(r.rotation.x+=window.mouseX*1e-5,r.rotation.y+=window.mouseY*1e-5),i.render(e,t)},a=()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)},l=c=>{window.mouseX=c.clientX-window.innerWidth/2,window.mouseY=c.clientY-window.innerHeight/2};return bs(()=>{s(),window.addEventListener("resize",a),window.addEventListener("mousemove",l)}),kl(()=>{window.removeEventListener("resize",a),window.removeEventListener("mousemove",l),n.value&&n.value.removeChild(i.domElement),i.dispose()}),{container:n}}},KD={class:"three-background",ref:"container"};function jD(n,e,t,i,r,s){return Nt(),Gt("div",KD,null,512)}const ZD=hr(YD,[["render",jD],["__scopeId","data-v-74bc47bd"]]),JD={name:"HomeView",components:{HeroSection:MT,FeaturesSection:CT,CoursePathSection:e1,InstructorSection:E1,CTASection:H1,ThreeBackground:ZD}},QD={class:"home"};function eL(n,e,t,i,r,s){const o=ui("HeroSection"),a=ui("FeaturesSection"),l=ui("CoursePathSection"),c=ui("InstructorSection"),u=ui("CTASection"),f=ui("ThreeBackground");return Nt(),Gt("main",QD,[lt(o),lt(a),lt(l),lt(c),lt(u),lt(f)])}const tL=hr(JD,[["render",eL],["__scopeId","data-v-b86b567e"]]),nL=[{path:"/",name:"home",component:tL},{path:"/course",name:"course",component:()=>ym(()=>import("./CourseView-Cw9jzT7R.js"),__vite__mapDeps([0,1]))},{path:"/register",name:"register",component:()=>ym(()=>import("./RegisterView-Dfk0f-3k.js"),__vite__mapDeps([2,3]))}],iL=tb({history:PE("/Canva-Course/"),routes:nL,scrollBehavior(n,e,t){return t||{top:0}}});function nu(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?nu=function(e){return typeof e}:nu=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},nu(n)}function rL(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function sL(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function oL(n,e,t){return sL(n.prototype,e),n}function _g(n){return aL(n)||lL(n)||cL()}function aL(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}function lL(n){if(Symbol.iterator in Object(n)||Object.prototype.toString.call(n)==="[object Arguments]")return Array.from(n)}function cL(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function uL(n){var e;return typeof n=="function"?e={callback:n}:e=n,e}function fL(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,r,s,o=function(l){for(var c=arguments.length,u=new Array(c>1?c-1:0),f=1;f<c;f++)u[f-1]=arguments[f];if(s=u,!(i&&l===r)){var d=t.leading;typeof d=="function"&&(d=d(l,r)),(!i||l!==r)&&d&&n.apply(void 0,[l].concat(_g(s))),r=l,clearTimeout(i),i=setTimeout(function(){n.apply(void 0,[l].concat(_g(s))),i=0},e)}};return o._clear=function(){clearTimeout(i),i=null},o}function tS(n,e){if(n===e)return!0;if(nu(n)==="object"){for(var t in n)if(!tS(n[t],e[t]))return!1;return!0}return!1}var dL=function(){function n(e,t,i){rL(this,n),this.el=e,this.observer=null,this.frozen=!1,this.createObserver(t,i)}return oL(n,[{key:"createObserver",value:function(t,i){var r=this;if(this.observer&&this.destroyObserver(),!this.frozen){if(this.options=uL(t),this.callback=function(a,l){r.options.callback(a,l),a&&r.options.once&&(r.frozen=!0,r.destroyObserver())},this.callback&&this.options.throttle){var s=this.options.throttleOptions||{},o=s.leading;this.callback=fL(this.callback,this.options.throttle,{leading:function(l){return o==="both"||o==="visible"&&l||o==="hidden"&&!l}})}this.oldResult=void 0,this.observer=new IntersectionObserver(function(a){var l=a[0];if(a.length>1){var c=a.find(function(f){return f.isIntersecting});c&&(l=c)}if(r.callback){var u=l.isIntersecting&&l.intersectionRatio>=r.threshold;if(u===r.oldResult)return;r.oldResult=u,r.callback(u,l)}},this.options.intersection),i.context.$nextTick(function(){r.observer&&r.observer.observe(r.el)})}}},{key:"destroyObserver",value:function(){this.observer&&(this.observer.disconnect(),this.observer=null),this.callback&&this.callback._clear&&(this.callback._clear(),this.callback=null)}},{key:"threshold",get:function(){return this.options.intersection&&typeof this.options.intersection.threshold=="number"?this.options.intersection.threshold:0}}]),n}();function nS(n,e,t){var i=e.value;if(i)if(typeof IntersectionObserver>"u")console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");else{var r=new dL(n,i,t);n._vue_visibilityState=r}}function hL(n,e,t){var i=e.value,r=e.oldValue;if(!tS(i,r)){var s=n._vue_visibilityState;if(!i){iS(n);return}s?s.createObserver(i,t):nS(n,{value:i},t)}}function iS(n){var e=n._vue_visibilityState;e&&(e.destroyObserver(),delete n._vue_visibilityState)}var rS={bind:nS,update:hL,unbind:iS};function pL(n){n.directive("observe-visibility",rS)}var mL={version:"1.0.0",install:pL},Cu=null;typeof window<"u"?Cu=window.Vue:typeof global<"u"&&(Cu=global.Vue);Cu&&Cu.use(mL);Di.registerPlugin(ot);const Np=DM(ZM);Np.use(iL);Np.directive("observe-visibility",rS);Np.mount("#app");export{Mn as F,hr as _,Gt as a,le as b,Hi as c,yl as d,Hn as e,za as f,lt as g,ui as h,ld as i,SL as j,gL as k,xL as l,_L as m,Wi as n,Nt as o,vL as p,Ii as r,Fn as t,sM as v,pi as w};
