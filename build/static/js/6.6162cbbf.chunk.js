(this.webpackJsonpwclone=this.webpackJsonpwclone||[]).push([[6],{128:function(e,n,t){"use strict";t.r(n);var i,r=t(1),c=t(36),a=t(20),o=t(53),s=t(30),l=t(95),b=t(93),d=t(37),j=t(32),h=t(29);var u=h.b.label(i||(i=Object(j.a)(["\n  font-size: 2.1rem;\n  font-weight: 400;\n  font-family: 'Open Sans Condensed';\n  margin: 1.5rem 0;\n  color: #25d366;\n  cursor: pointer;\n  text-decoration: underline;\n"]))),m=t(96),g=t(97),O=t(46),f=t(39);var p=(e,n,t,i,r,c)=>{const a=e=>{Object(f.b)(e,c),i()};return[n=>{Object(O.a)(n,e)||alert("Please select jpeg/.png file")},()=>{n&&Object(O.d)(n,t)},()=>{Object(f.f)(r,i,c,a)}]},x=t(13);var v=()=>{const e=Object(m.a)(),n=Object(d.a)(e,10),t=n[0],i=n[1],r=n[2],c=n[3],a=n[4],o=n[5],s=n[6],l=n[7],b=n[8],j=n[9],h=p(r,a,o,b,j,c),O=Object(d.a)(h,3),f=O[0],v=O[1],w=O[2];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(u,{htmlFor:"send",children:"Change Profile Image"}),Object(x.jsx)("input",{id:"send",type:"file",accept:"image/*",onChange:f}),Object(x.jsx)(g.a,{visible:t,closeModal:c,image:i,content:"SEND",editorRef:a,handleCrop:v,loading:s,croppedImage:l,sendImage:w})]})},w=t(86),y=t(14);var k,C,S=(e,n)=>{const t=Object(r.useRef)(null);return[t,()=>{var i,r,c;if(n===(null===t||void 0===t||null===(i=t.current)||void 0===i?void 0:i.value))return alert("Updated successfully"),!1;if(!(null===t||void 0===t||null===(r=t.current)||void 0===r?void 0:r.value))return alert("Name should not be empty"),!1;return Object(y.e)("users").child(e).update({displayName:null===t||void 0===t||null===(c=t.current)||void 0===c?void 0:c.value}).then((()=>alert("Successfully updated"))).catch((()=>{alert("Something went wrong!Please try again")})),!0}]},I=t(90);const z=h.b.label(k||(k=Object(j.a)(["\n  font-family: 'Open Sans Condensed';\n  font-size: 2.1rem;\n  color: ",";\n  margin-bottom: 1.4rem;\n"])),(e=>e.theme.color)),P=Object(h.b)(I.a)(C||(C=Object(j.a)(["\n  border: none;\n  outline: none;\n  width: 20rem;\n  padding: 0.9rem;\n"]))),N=Object(a.b)({username:o.e,currentUserId:o.d});var F=Object(c.b)(N)((({username:e,currentUserId:n})=>{const t=S(n,e),i=Object(d.a)(t,2),r=i[0],c=i[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(z,{children:"Name"}),Object(x.jsx)(P,{placeholder:"Username",autoComplete:"off",name:"username",defaultValue:e,ref:r}),Object(x.jsx)(w.a,{onClick:c,content:"UPDATE"})]})})),R=t(34),L=t(58);var T,U,E,M,V=[{id:"theme-light",name:"Light"},{id:"theme-dark",name:"Dark"}];const D=h.b.div(T||(T=Object(j.a)(["\n  display: flex;\n"]))),J=h.b.label(U||(U=Object(j.a)(["\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  margin-right: 1rem;\n"]))),_=h.b.div(E||(E=Object(j.a)(["\n  width: 1.7rem;\n  height: 1.7rem;\n  border: ",";\n  border-radius: 50%;\n  margin-right: 1rem;\n  box-sizing: border-box;\n  padding: 0.3rem;\n  &::after {\n    content: '';\n    width: 100%;\n    height: 100%;\n    display: block;\n    background: #009879;\n    border-radius: 50%;\n    transform: scale(0);\n\n    transition: all 500ms linear;\n  }\n"])),(e=>e.theme.mode?"2px solid #d8e4e2":"2px solid #212529")),A=h.b.input(M||(M=Object(j.a)(["\n  &:checked + ","::after {\n    transform: scale(1);\n  }\n"])),_);var G=(e,n)=>[t=>{t.target.id.includes("dark")?e():n()}];const q=Object(a.b)({theme:L.a});var B=Object(c.b)(q,(e=>({setThemeStart:()=>e(Object(R.f)()),setThemeLightStart:()=>e(Object(R.e)())})))((({setThemeStart:e,setThemeLightStart:n,theme:t})=>{const i=G(e,n),r=Object(d.a)(i,1)[0];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(z,{children:"Theme"}),Object(x.jsx)(D,{children:V.map((e=>Object(x.jsxs)(J,{htmlFor:e.id,children:[Object(x.jsx)(A,{type:"radio",id:e.id,name:"radio",onChange:r,checked:t===e.name.toLowerCase()}),Object(x.jsx)(_,{}),Object(x.jsx)(z,{style:{margin:0,fontSize:"1.8rem"},children:e.name})]},e.name)))})]})}));var H,K,Q=(e,n)=>{Object(r.useEffect)((()=>{const t=Object(y.e)("users").child(n),i=t.on("child_changed",(n=>{const t=n.val();if(t){const n=t.includes("http")?"photoURL":"displayName";e({name:n,value:t})}}));return()=>{t.off("child_changed",i)}}),[n,e])};const W=h.b.main(H||(H=Object(j.a)(["\n  min-height: 100vh;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: ",";\n  position: relative;\n"])),(e=>e.theme.chatContainer)),X=h.b.div(K||(K=Object(j.a)(["\n  position: absolute;\n  top:5%;\n  left: 5%;\n"])));var Y,Z,$=t(21);const ee=Object(h.b)(w.a)(Y||(Y=Object(j.a)(["\n  margin: 0rem;\n"]))),ne=h.b.div(Z||(Z=Object(j.a)(["\n  position: absolute;\n  top: 5%;\n  right: 5%;\n"])));var te=Object(c.b)(null,(e=>({signOutStart:()=>e(Object(s.i)()),unsubscribeNotification:()=>e(Object($.t)())})))((({signOutStart:e,unsubscribeNotification:n})=>Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(ne,{children:Object(x.jsx)(ee,{danger:!0,content:"LOGOUT",onClick:e,style:{margin:0}})})}))),ie=t(88);const re=Object(a.b)({userId:o.d});n.default=Object(c.b)(re,(e=>({changeProfileStart:n=>e(Object(s.a)(n))})))((({changeProfileStart:e,userId:n})=>(Q(e,n),Object(x.jsxs)(W,{children:[Object(x.jsx)(ie.b,{children:Object(x.jsx)(b.a,{height:8})}),Object(x.jsx)(v,{}),Object(x.jsx)(F,{}),Object(x.jsx)(X,{children:Object(x.jsx)(l.a,{navigateTo:"/",iconName:"fas fa-arrow-left"})}),Object(x.jsx)(B,{}),Object(x.jsx)(te,{})]}))))},86:function(e,n,t){"use strict";t(1);var i,r=t(32);var c=t(29).b.button(i||(i=Object(r.a)(["\n  padding: 0.7rem;\n  background: ",";\n  color: #fff;\n  font-family: 'Open Sans Condensed';\n  font-size: 1.6rem;\n  font-weight: 600;\n  transition: all 500ms linear;\n  margin: 1.5rem 1.5rem;\n  outline: none;\n  border: none;\n  width: 10rem;\n  cursor: pointer;\n  border-radius: 8px;\n  &:hover {\n    font-weight: 600;\n    background: black;\n    color: white;\n  }\n"])),(e=>e.danger?"#CC0000":"#00C851")),a=t(13);const o=({content:e,danger:n,onClick:t,style:i})=>Object(a.jsx)(c,{danger:n,onClick:t,style:i,children:e});o.defaultProps={danger:!1,style:null};n.a=o},87:function(e,n,t){"use strict";t(1);var i,r=t(32);var c=t(29).b.i(i||(i=Object(r.a)(["\n  color: ",";\n  font-size: ","rem;\n  margin-right: ","rem;\n  cursor: pointer;\n  -webkit-text-stroke: 0px ",";\n\n  &:hover {\n    color: ",";\n  }\n"])),(e=>e.color&&e.theme.mode?"#707477":e.theme.Icon),(e=>e.fontSize),(e=>e.marginRight),(e=>e.color||e.theme.Icon),(e=>e.theme.mode?"rgba(255,255,255,.8)":"#212529")),a=t(13);const o=({fontSize:e,marginRight:n,className:t})=>Object(a.jsx)(c,{fontSize:e,marginRight:n,className:t});o.defaultProps={fontSize:2.3,marginRight:2.8};n.a=o},88:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var i=t(37),r=t(1),c=t(13);const a=Object(r.createContext)({visible:!1,setModalVisible:()=>{}});n.b=({children:e})=>{const n=Object(r.useState)(!1),t=Object(i.a)(n,2),o=t[0],s=t[1];return Object(c.jsx)(a.Provider,{value:{visible:o,setModalVisible:()=>{s((e=>!e))}},children:e})}},89:function(e,n,t){"use strict";t(1);var i,r=t(129),c=t(32);var a=t(29).b.div(i||(i=Object(c.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  background: rgba(0, 0, 0, 0.7);\n  box-shadow: 0.5px 0.5px 0.5px rgb(49, 46, 46);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000000;\n"]))),o=t(13);n.a=({visible:e,children:n})=>Object(o.jsx)(r.a,{in:e,timeout:500,classNames:"fade",unmountOnExit:!0,children:Object(o.jsx)(a,{children:n})})},90:function(e,n,t){"use strict";var i=t(5),r=t(1),c=t.n(r),a=t(91),o=t(13);const s=(e,n)=>Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(a.b,Object(i.a)(Object(i.a)({},e),{},{ref:n})),e.icon&&Object(o.jsx)(a.a,{className:"fas fa-search"})]});n.a=c.a.forwardRef(s)},91:function(e,n,t){"use strict";t.d(n,"c",(function(){return s})),t.d(n,"b",(function(){return l})),t.d(n,"a",(function(){return b}));var i,r,c,a=t(32),o=t(29);const s=o.b.div(i||(i=Object(a.a)(["\n  padding: 1rem;\n  display: flex;\n  position: relative;\n  border-bottom: 0.5px solid ",";\n  /* margin-top: 6.7rem; */\n"])),(e=>e.theme.border)),l=o.b.input(r||(r=Object(a.a)(["\n  width: ","%;\n  padding: ","rem;\n  position: relative;\n  border-radius: 25px;\n  background: ",";\n  outline: none;\n  border: none;\n  padding-left: ","rem;\n  color: ",";\n\n  &::placeholder {\n    color: ",";\n    // padding-left: 8rem;\n    font-family: sans-serif;\n    font-weight: 300;\n    font-size: 1.4rem;\n  }\n"])),(e=>e.width||100),(e=>e.icon?1:1.5),(e=>e.theme.search),(e=>e.icon?6.5:2),(e=>e.theme.textLight),(e=>e.theme.textLight)),b=o.b.i(c||(c=Object(a.a)(["\n  color: ",";\n  font-size: 1.8rem;\n  position: absolute;\n  left: 6%;\n  top: 33%;\n"])),(e=>e.theme.Icon))},93:function(e,n,t){"use strict";var i=t(1),r=t.n(i),c=t(36),a=t(20),o=t(89),s=t(94),l=t(86),b=t(13);const d=({src:e,action:n})=>Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(s.a,{width:25,height:25,src:e}),Object(b.jsx)(l.a,{danger:!0,content:"CLOSE",onClick:n})]});var j,h,u=r.a.memo(d),m=t(88),g=t(53),O=t(32),f=t(29);const p=f.b.img(j||(j=Object(O.a)(["\n  width: ","rem;\n  height: ","rem;\n  border-radius: calc(","rem / 2);\n"])),(e=>e.height),(e=>e.height),(e=>e.height)),x=f.b.button(h||(h=Object(O.a)(["\n  background: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n"]))),v=({profilePic:e,chatProfile:n=null,height:t=4})=>{const r=Object(i.useContext)(m.a),c=r.visible,a=r.setModalVisible;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(x,{onClick:a,children:Object(b.jsx)(p,{src:n||e,alt:"user-photo",loading:"lazy",height:t})}),Object(b.jsx)(o.a,{visible:c,children:Object(b.jsx)(u,{action:a,src:n||e})})]})};v.defaultProps={chatProfile:null,height:4};const w=Object(a.b)({profilePic:g.c});n.a=Object(c.b)(w)(v)},94:function(e,n,t){"use strict";var i,r=t(1),c=t.n(r),a=t(32);var o=t(29).b.img(i||(i=Object(a.a)(["\n  height: ","rem;\n  width: ","rem;\n  margin-bottom: 1rem;\n"])),(e=>e.height),(e=>e.width)),s=t(13);const l=({height:e=20,width:n=20,src:t})=>Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(o,{height:e,width:n,src:t})});l.defaultProps={height:20,width:20};n.a=c.a.memo(l)},95:function(e,n,t){"use strict";t(1);var i=t(40),r=t(87),c=t(13);n.a=({navigateTo:e,iconName:n})=>Object(c.jsx)(i.b,{to:e,children:Object(c.jsx)(r.a,{className:n})})},96:function(e,n,t){"use strict";var i=t(5),r=t(37),c=t(1);n.a=()=>{const e=Object(c.useState)({visible:!1,file:null,croppedImage:null,loading:!1,blob:null}),n=Object(r.a)(e,2),t=n[0],a=n[1],o=Object(c.useRef)();return[t.visible,t.file,(e,n)=>{a(Object(i.a)(Object(i.a)({},t),{},{visible:e,file:n}))},()=>{a(Object(i.a)(Object(i.a)({},t),{},{visible:!1,file:null,croppedImage:null,loading:!1}))},o,(e,n)=>{a(Object(i.a)(Object(i.a)({},t),{},{croppedImage:e,blob:n}))},t.loading,t.croppedImage,()=>{a(Object(i.a)(Object(i.a)({},t),{},{loading:!1}))},t.blob]}},97:function(e,n,t){"use strict";t(1);var i,r,c,a,o,s=t(99),l=t.n(s),b=t(32),d=t(29);d.b.div(i||(i=Object(b.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  background: rgba(0, 0, 0, 0.7);\n  box-shadow: 0.5px 0.5px 0.5px rgb(49, 46, 46);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000000;\n"])));const j=d.b.div(r||(r=Object(b.a)(["\n  display: flex;\n"]))),h=d.b.div(c||(c=Object(b.a)(["\n  width: 50%;\n  border-radius: 8px;\n  z-index: 100000;\n  box-shadow: 0.5px 0.5px 0.5px rgb(0, 0, 0);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n"]))),u=d.b.button(a||(a=Object(b.a)(["\n  position: absolute;\n  top: 5%;\n  right: 5%;\n  outline: none;\n  border: none;\n  background: #121212;\n  cursor: pointer;\n"]))),m=d.b.span(o||(o=Object(b.a)(["\n  font-size: 1.8rem;\n  font-weight: 500;\n  color: #bb86fc;\n"])));var g=t(86),O=t(54),f=t(89),p=t(13);const x=({visible:e,closeModal:n,image:t,content:i,editorRef:r,handleCrop:c,loading:a,croppedImage:o,sendImage:s})=>Object(p.jsx)(f.a,{visible:e,children:Object(p.jsx)(h,{children:a?Object(p.jsx)(O.a,{}):Object(p.jsxs)(p.Fragment,{children:[o?Object(p.jsx)("img",{src:o,width:"200",height:"200",alt:"croppedImage"}):Object(p.jsx)(l.a,{ref:r,image:t,width:200,height:200,border:50,scale:1.5}),Object(p.jsxs)(j,{children:[Object(p.jsx)(g.a,{danger:!0,content:"CLOSE",onClick:n}),o?Object(p.jsx)(g.a,{content:i,onClick:s}):Object(p.jsx)(g.a,{content:"CROP",onClick:c})]}),Object(p.jsx)(u,{onClick:n,children:Object(p.jsx)(m,{children:"\u2716"})})]})})});x.defaultProps={image:null,croppedImage:null};n.a=x}}]);
//# sourceMappingURL=6.6162cbbf.chunk.js.map