import{d as G,t as u,a as d,s as S}from"../chunks/DgVu6Vm6.js";import{h as I,M as R,N as V,O as H,P as U,Q as D,R as P,S as K,T as h,V as c,W as w,X as n,m}from"../chunks/D9Uhv0wJ.js";import{i as Q}from"../chunks/CRIKSRoc.js";import{e as N,u as i,i as O}from"../chunks/B4Sm2wG_.js";import{b as W}from"../chunks/2vTdEViD.js";const X=Symbol("is custom element"),Y=Symbol("is html");function B(t,s,e,p){var l=q(t);I&&(l[s]=t.getAttribute(s),s==="src"||s==="srcset"||s==="href"&&t.nodeName==="LINK")||l[s]!==(l[s]=e)&&(s==="loading"&&(t[R]=e),e==null?t.removeAttribute(s):typeof e!="string"&&F(t).includes(s)?t[s]=e:t.setAttribute(s,e))}function q(t){return t.__attributes??(t.__attributes={[X]:t.nodeName.includes("-"),[Y]:t.namespaceURI===V})}var C=new Map;function F(t){var s=C.get(t.nodeName);if(s)return s;C.set(t.nodeName,s=[]);for(var e,p=t,l=Element.prototype;l!==p;){e=U(p);for(var f in e)e[f].set&&s.push(f);p=H(p)}return s}function J(){let t=["/assets/backdrop-number.png","/assets/change-effect.png","/assets/change-layer.png","/assets/change-size.png","/assets/change-x.png","/assets/change-y.png","/assets/clear-looks-effects.png","/assets/costume-number.png","/assets/direction.png","/assets/edge-bounce.png","/assets/glide-to-position.png","/assets/glide-to-sprite.png","/assets/go-to-position.png","/assets/go-to-sprite.png","/assets/hide.png","/assets/move-steps.png","/assets/next-backdrop.png","/assets/next-costume.png","/assets/point-in-direction.png","/assets/point-towards-sprite.png","/assets/say-for-duration.png","/assets/say.png","/assets/set-backdrop.png","/assets/set-costume.png","/assets/set-effect.png","/assets/set-layer.png","/assets/set-rotation-style.png","/assets/set-size.png","/assets/set-x.png","/assets/set-y.png","/assets/show.png","/assets/size.png","/assets/think-for-duration.png","/assets/think.png","/assets/turn-left.png","/assets/turn-right.png","/assets/x-position.png","/assets/y-position.png"],s={};for(const e of Object.values(t))s[e.match(/([^/.]+)(?:\.?[^/.])*$/)[1]]=e.replaceAll("\\\\","/");return s}function Z({params:t}){return{assetPaths:J(),groups:{Motion:{"State Blocks":["x-position","y-position","direction"],"Set Blocks":["go-to-sprite","go-to-position","glide-to-sprite","glide-to-position","point-in-direction","point-towards-sprite","set-x","set-y"],"Change Blocks":["move-steps","turn-right","turn-left"],"Special Blocks":["edge-bounce","set-rotation-style"]},Looks:{"State Blocks":["show","hide","clear-looks-effects","costume-number","backdrop-number","size"],"Speech Blocks":["say-for-duration","say","think-for-duration","think"],"Switch Blocks":["set-costume","next-costume","set-backdrop","next-backdrop","set-layer","change-layer"],"Graphics Blocks":["change-size","set-size","change-effect","set-effect"]},Sound:{},Events:{},Control:{},Sensing:{},Operators:{},Variables:{},"My Blocks":{}},programs:{Motion:"https://scratch.mit.edu/projects/1153447292/embed",Looks:"https://scratch.mit.edu/projects/1154266906/embed",Sound:"https://scratch.mit.edu/projects/1154735337/embed",Events:"",Control:"",Sensing:"",Operators:"",Variables:"","My Blocks":""},blockText:{"x-position":`A number representing the horizontal position of the sprite. Changing this number will move the sprite left or right.            

Positive numbers mean the sprite is towards the right.            
Negtaive numbers mean the sprite is towards the left.`,"x-position-easy":`⟷ position
+ moves ⟶
- moves ⟵`,"y-position":`A number representing the vertical position of the sprite. Changing this number will move the sprite up or down.            

Positive numbers mean the sprite is towards the top.            
Negative numbers mean the sprite is towards the bottom.`,direction:`A number representing the direction that a sprite is pointing in.            

[0 or 360] indicates pointing to the top.            
[90 or -270] indicates pointing to the right.            
[180 or -180] indicates pointing to the bottom.            
[270 or -90]  indicates pointing to the left.`}}}const us=Object.freeze(Object.defineProperty({__proto__:null,load:Z},Symbol.toStringTag,{value:"Module"}));var $=(t,s,e)=>s(m(e)),ss=u('<button class="svelte-18y79rp"> </button>'),ts=(t,s,e)=>s(m(e)),es=u('<button class="svelte-18y79rp"><img class="svelte-18y79rp"></button>'),os=u('<p class="svelte-18y79rp"> </p>'),rs=u('<p class="svelte-18y79rp"> </p>'),as=u('<div id="block-container" class="svelte-18y79rp"><div id="block-groups" class="svelte-18y79rp"></div> <div id="block-info" class="svelte-18y79rp"><div id="block-items" class="svelte-18y79rp"></div> <div id="block-text" class="svelte-18y79rp"><!></div></div></div>'),ns=u('<iframe title="" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen="" class="svelte-18y79rp"></iframe>'),is=u('<main class="svelte-18y79rp"><!> <!></main>');function vs(t,s){D(s,!0);const e=(g,_=P)=>{var v=as(),y=c(v);N(y,21,()=>Object.keys(s.data.groups[_()]),O,(a,o)=>{var r=ss();r.__click=[$,l,o];var b=c(r,!0);n(r),h(()=>S(b,m(o))),d(a,r)}),n(y);var A=w(y,2),x=c(A);N(x,21,()=>s.data.groups[_()][i.currentGroup],O,(a,o)=>{var r=es();r.__click=[ts,f,o];var b=c(r);n(r),h(()=>{B(b,"src",`${W}/${s.data.assetPaths[m(o)]}`),B(b,"alt",m(o))}),d(a,r)}),n(x);var T=w(x,2),E=c(T);{var L=a=>{var o=os(),r=c(o,!0);n(o),h(()=>S(r,s.data.blockText[`${i.currentBlock}-easy`]||s.data.blockText[i.currentBlock]||"")),d(a,o)},j=a=>{var o=rs(),r=c(o,!0);n(o),h(()=>S(r,s.data.blockText[i.currentBlock]||"")),d(a,o)};Q(E,a=>{i.easyTextMode?a(L):a(j,!1)})}n(T),n(A),n(v),d(g,v)},p=(g,_=P)=>{var v=ns();h(()=>B(v,"src",s.data.programs[_()])),d(g,v)},l=g=>{i.currentGroup=g,i.currentBlock=""},f=g=>{i.currentBlock=g};var k=is(),M=c(k);e(M,()=>i.currentTab);var z=w(M,2);p(z,()=>i.currentTab),n(k),d(t,k),K()}G(["click"]);export{vs as component,us as universal};
