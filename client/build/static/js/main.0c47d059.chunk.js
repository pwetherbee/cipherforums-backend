(this.webpackJsonpcipherforums=this.webpackJsonpcipherforums||[]).push([[0],{148:function(e,t,a){},162:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),i=a.n(r),s=(a(148),a(32)),o=a.n(s),l=a(45),j=a(13),d=a(11),b=a(12),h=a(126),u=a(232),m=a(227),x=a(212),p=a(228),O=a(72),g=a(204),f=a(206),v=a(164),y=a(209),w=a(208),N=function e(t){function a(e,t){return e>>>t|e<<32-t}for(var n,c,r=Math.pow,i=r(2,32),s="",o=[],l=8*t.length,j=e.h=e.h||[],d=e.k=e.k||[],b=d.length,h={},u=2;b<64;u++)if(!h[u]){for(n=0;n<313;n+=u)h[n]=u;j[b]=r(u,.5)*i|0,d[b++]=r(u,1/3)*i|0}for(t+="\x80";t.length%64-56;)t+="\0";for(n=0;n<t.length;n++){if((c=t.charCodeAt(n))>>8)return;o[n>>2]|=c<<(3-n)%4*8}for(o[o.length]=l/i|0,o[o.length]=l,c=0;c<o.length;){var m=o.slice(c,c+=16),x=j;for(j=j.slice(0,8),n=0;n<64;n++){var p=m[n-15],O=m[n-2],g=j[0],f=j[4],v=j[7]+(a(f,6)^a(f,11)^a(f,25))+(f&j[5]^~f&j[6])+d[n]+(m[n]=n<16?m[n]:m[n-16]+(a(p,7)^a(p,18)^p>>>3)+m[n-7]+(a(O,17)^a(O,19)^O>>>10)|0);(j=[v+((a(g,2)^a(g,13)^a(g,22))+(g&j[1]^g&j[2]^j[1]&j[2]))|0].concat(j))[4]=j[4]+v|0}for(n=0;n<8;n++)j[n]=j[n]+x[n]|0}for(n=0;n<8;n++)for(c=3;c+1;c--){var y=j[n]>>8*c&255;s+=(y<16?0:"")+y.toString(16)}return s};function S(e){for(var t=[],a=0,n=e.length;a<n;a++){var c=Number(e.charCodeAt(a)).toString(16);t.push(c)}return t.join("")}function k(e){var t="0x"+String(e);return BigInt(t).toString(10)}function C(e){var t=BigInt(e).toString(16);return t.length%2&&(t="0"+t),t}function T(e){return k(S(N(e)))}function W(e,t){var a=function(e){for(var t=e.toString(),a="",n=0;n<t.length;n+=2)a+=String.fromCharCode(parseInt(t.substr(n,2),16));return a}(C(BigInt(k(e))^BigInt(t)));return a.includes("|")&&(a=a.split("|")[1]),a}function B(e,t){var a=function(e){for(var t="",a=0;a<64-e.length-2;a++)t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(62*Math.random());return"".concat(t,"|").concat(e,"|")}(e);return C(BigInt(k(S(a)))^BigInt(T(t)))}var I=function(e,t){return function(e,t){try{return W(e,T(t))}catch(a){return a}}(e,t)},z=a(210),P=a(1),E=Object(g.a)((function(e){return{root:Object(O.a)({width:"100%",backgroundColor:e.palette.background.paper,position:"relative",overflow:"auto"},"overflow","hidden"),listSection:{backgroundColor:"inherit"},ul:{backgroundColor:"inherit",padding:0},ListItemText:{multiline:!0}}}));function F(e){var t=e.comments,a=e.secret,n=E();return Object(P.jsx)(f.a,{dense:!0,className:n.root,subheader:Object(P.jsx)("li",{}),children:[0].map((function(e){return Object(P.jsx)("li",{className:n.listSection,children:Object(P.jsxs)("ul",{className:n.ul,children:[Object(P.jsx)(w.a,{children:"Comments"}),t.map((function(t,n){return Object(P.jsxs)("div",{children:[Object(P.jsx)(v.a,{children:Object(P.jsx)(y.a,{primary:"".concat(t.author||""),secondary:"".concat(I(t.text||t.commentText,a||"default_key"))})},"item-".concat(e,"-").concat(t.author||t.username)),Object(P.jsx)(z.a,{})]},"".concat(n,"-").concat(e,"-").concat(t.author||t.username))}))]})},"section-".concat(e))}))})}var A=a(40),H=a(131),L=a(238),D=a(214),G=a(81),M=a(233),q=Object(g.a)((function(e){return{root:{"& .MuiTextField-root":{margin:"auto",marginBottom:50,width:"25ch",marginLeft:0}}}}));function U(e){var t=e.updateSecret,a=q(),n=c.a.useState("Controlled"),r=Object(j.a)(n,2),i=r[0],s=r[1];return Object(P.jsx)("form",{className:a.root,noValidate:!0,autoComplete:"off",children:Object(P.jsx)("div",{children:Object(P.jsx)(M.a,{inputProps:{spellCheck:"false"},id:"outlined-textarea",label:"Secret Key",placeholder:"Secret Key",multiline:!0,variant:"outlined",onChange:function(e){s(e.target.value),console.log(i),t(e.target.value)}})})})}var X=a(213);function _(e){var t=e.height;return Object(P.jsx)(x.a,{container:!0,style:{height:t},justifyContent:"center",alignContent:"center",children:Object(P.jsx)(X.a,{})})}var R=Object(g.a)((function(e){return{root:{flexGrow:1,overflow:"hidden",padding:e.spacing(0,3)},paper:{maxWidth:1200,margin:"".concat(e.spacing(1),"px auto"),padding:e.spacing(2)},reply:{fontSize:10,padding:0},titleHolder:{maxWidth:1500,marginTop:25,padding:20,marginBottom:50},titleElements:{padding:5},avatar:{backgroundColor:G.a[500]}}})),J=function(e){var t=e.comment,a=e.secret,n=R();return Object(P.jsx)(H.a,{className:n.paper,children:Object(P.jsxs)(x.a,{container:!0,wrap:"nowrap",spacing:2,children:[Object(P.jsx)(x.a,{item:!0,children:Object(P.jsx)(L.a,{className:n.avatar,variant:"rounded",color:"green",children:(t.author||t.username).slice(0,1)})}),Object(P.jsxs)(x.a,{item:!0,xs:!0,children:[Object(P.jsxs)(x.a,{children:[Object(P.jsxs)(A.a,{variant:"caption",children:["@",t.author||t.username," "]}),Object(P.jsxs)(A.a,{variant:"caption",children:[t.time," "]}),Object(P.jsx)(D.a,{variant:"outlined",className:n.reply,children:"Reply"})]}),Object(P.jsx)(A.a,{variant:"body2",children:I(t.text||t.commentText,a||"default_key")})]})]})})},V=function(e){var t=e.comments,a=e.secret;return Object(P.jsx)(x.a,{children:null===t||void 0===t?void 0:t.map((function(e){return Object(P.jsx)(J,{comment:e,secret:a})}))})},K=a(235),Q=a(230),Z=a(216),Y=a(217),$=a(218),ee=a(105),te=a.n(ee),ae=(a(237),a(215));var ne=a(219),ce=a(127),re=Object(g.a)((function(e){return{root:{flexGrow:1,backgroundColor:"#121212",marginBottom:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function ie(e){var t=e.auth,a=re(),n=c.a.useState(null),r=Object(j.a)(n,2),i=r[0],s=r[1],o=Boolean(i),l="outlined";return Object(P.jsx)("div",{className:a.root,children:Object(P.jsx)(Z.a,{position:"static",children:Object(P.jsxs)(Y.a,{className:a.root,children:[Object(P.jsx)($.a,{edge:"start",className:a.menuButton,color:"primary","aria-label":"menu"}),Object(P.jsx)(A.a,{variant:"h6",className:a.title,children:Object(P.jsx)(D.a,{variant:"contained",color:"primary",component:d.b,to:"/",children:"Home"})}),Object(P.jsx)(A.a,{variant:"h6",className:a.title,children:Object(P.jsx)(D.a,{variant:l,color:"primary",component:d.b,to:"/public",children:"Public Topics"})}),Object(P.jsx)(A.a,{variant:"h6",className:a.title,children:Object(P.jsx)(D.a,{variant:l,color:"primary",component:d.b,to:"/help",children:"Help"})}),t.ok&&Object(P.jsxs)("div",{children:[Object(P.jsx)($.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},color:"inherit",children:Object(P.jsx)(te.a,{color:"primary"})}),Object(P.jsxs)(ce.a,{id:"menu-appbar",anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:o,onClose:function(){s(null)},children:[Object(P.jsx)(ne.a,{children:Object(P.jsx)(D.a,{variant:l,color:"primary",component:d.b,to:"/user/".concat(t.username),children:"Profile"})},1),Object(P.jsx)(ne.a,{children:Object(P.jsx)(D.a,{variant:l,color:"primary",component:d.b,to:"/settings",children:"My account"})},2),Object(P.jsx)(ne.a,{children:Object(P.jsx)(D.a,{variant:l,color:"primary",component:ae.a,href:"/logout",children:"Logout"})},3)]})]}),t.ok||Object(P.jsx)(A.a,{variant:"h6",className:a.title,children:Object(P.jsx)(D.a,{variant:l,color:"primary",component:d.b,to:"/login",children:"Login / Signup"})})]})})})}var se=a(221),oe=a(220),le=Object(g.a)((function(e){return{root:{flexGrow:1,maxWidth:1800,marginTop:30,minWidth:400,padding:5,display:"block"},paper:{padding:e.spacing(2),margin:"auto",maxWidth:500},image:{width:128,height:128},img:{margin:"auto",display:"inline-flex",maxWidth:100,maxHeight:100},avi:{display:"inline-flex",justifyContent:"space-between",marginRight:20},desc:{display:"inline-flex",justifyContent:"space-between",padding:10}}}));function je(e){var t=e.profile,a=(e.currUser,e.canFollow),n=le();return Object(P.jsx)(c.a.Fragment,{children:Object(P.jsx)(H.a,{className:n.root,children:(null===t||void 0===t?void 0:t.username)?Object(P.jsxs)("div",{children:[Object(P.jsxs)(oe.a,{className:n.desc,children:[Object(P.jsx)(se.a,{className:n.avi,children:Object(P.jsx)("img",{className:n.img,alt:"complex",src:"https://i.imgur.com/AD3MbBi.jpeg"})}),Object(P.jsx)(se.a,{className:n.avi,children:Object(P.jsxs)(A.a,{gutterBottom:!0,variant:"h5",component:"h2",children:["@",(null===t||void 0===t?void 0:t.username)||"user not found",a?Object(P.jsx)(D.a,{size:"small",color:"primary",children:"Follow"}):"",(null===t||void 0===t?void 0:t.loggedIn)?Object(P.jsx)(D.a,{size:"small",color:"primary",children:"edit"}):""]})})]}),Object(P.jsx)(oe.a,{children:Object(P.jsx)(A.a,{variant:"body2",color:"textSecondary",component:"p",children:(null===t||void 0===t?void 0:t.bio)||"this user has no bio"})})]}):Object(P.jsx)(_,{height:"10rem"})})})}var de=a(4),be=a(223),he=a(224),ue=a(225),me=a(222),xe=a(226),pe=a(106),Oe=a.n(pe),ge=a(107),fe=a.n(ge),ve=a(108),ye=a.n(ve),we=Object(g.a)((function(e){return{root:{maxWidth:1200,marginBottom:"3%"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:G.a[500]}}}));function Ne(e){var t=e.data,a=e.secret,n=we(),r=c.a.useState(!1),i=Object(j.a)(r,2),s=i[0],o=i[1],l=c.a.useState(),b=Object(j.a)(l,2),h=b[0],u=b[1];return Object(P.jsxs)(se.a,{className:n.root,children:[Object(P.jsxs)(me.a,{component:d.b,to:"/user/".concat(t.username,"/post/").concat(t.url),children:[Object(P.jsx)(be.a,{avatar:Object(P.jsx)(L.a,{color:n.red,"aria-label":"recipe",variant:"rounded",className:n.avatar,children:t.username.slice(0,1)}),title:t.url,to:"/",subheader:t.creationDate}),Object(P.jsx)(he.a,{children:t.img?Object(P.jsx)(he.a,{className:n.media,image:t.img,title:"Paella dish"}):Object(P.jsx)(oe.a,{children:Object(P.jsx)(A.a,{variant:"body2",color:"textSecondary",component:"p",children:t.subtitle})})})]}),Object(P.jsxs)(ue.a,{disableSpacing:!0,children:[Object(P.jsx)($.a,{color:"primary","aria-label":"add to favorites",children:Object(P.jsx)(Oe.a,{})}),Object(P.jsx)($.a,{color:"primary","aria-label":"share",children:Object(P.jsx)(fe.a,{})}),Object(P.jsx)($.a,{color:"primary",className:Object(de.a)(n.expand,Object(O.a)({},n.expandOpen,s)),onClick:function(){h||fetch("/api/threads/".concat(t.url)).then((function(e){return e.json()})).then((function(e){u(e)})),o(!s)},"aria-expanded":s,"aria-label":"show more",children:Object(P.jsx)(ye.a,{})})]}),Object(P.jsx)(xe.a,{in:s,timeout:"auto",unmountOnExit:!0,children:(null===h||void 0===h?void 0:h.comments)?Object(P.jsx)(F,{secret:a,comments:(null===h||void 0===h?void 0:h.comments)||[]}):Object(P.jsx)(_,{height:"10rem"})})]})}var Se=Object(g.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),margin:"auto",maxWidth:500},image:{width:128,height:128},img:{margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"}}}));function ke(e){var t=e.posts,a=e.secret,n=Se();return Object(P.jsx)("div",{className:n.root,children:Object(P.jsx)(x.a,{children:t?t.map((function(e,t){return Object(P.jsx)(Ne,{secret:a,data:e},t)})):"No Posts for this user"})})}var Ce=a(128),Te=Object(g.a)((function(e){return{root:{flexGrow:1,overflow:"hidden",padding:e.spacing(0,3)},paper:{maxWidth:1200,margin:"".concat(e.spacing(1),"px auto"),padding:e.spacing(2)},reply:{fontSize:10,padding:0},titleHolder:{maxWidth:1500,marginTop:25,padding:20,marginBottom:50},titleElements:{padding:5},comment:{marginTop:30,marginBottom:10}}}));function We(){Object(b.h)();var e=Object(b.g)().postname,t=Te(),a=Object(n.useState)(),c=Object(j.a)(a,2),r=c[0],i=c[1],s=Object(n.useState)(),d=Object(j.a)(s,2),h=d[0],u=d[1],x=Object(n.useState)(),O=Object(j.a)(x,2),g=O[0],f=O[1],v=Object(n.useState)(!1),y=Object(j.a)(v,2),w=y[0],N=y[1],S=Object(n.useState)(""),k=Object(j.a)(S,2),C=k[0],T=k[1],W=Object(n.useState)(""),I=Object(j.a)(W,2),z=I[0],E=I[1];Object(n.useEffect)((function(){console.log("refreshing"),fetch("/api/threads/".concat(e)).then((function(e){return e.json()})).then((function(e){console.log(e.comments),u(e.comments),i(e)}))}),[e]);var F=function(){var t=Object(l.a)(o.a.mark((function t(a){var n,c,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(g){t.next=4;break}return N(!0),T("You must type a secret key above"),t.abrupt("return");case 4:if(console.log(z.length),!(!(null===z||void 0===z?void 0:z.length)<64)){t.next=10;break}return console.log(z.length<64),N(!0),T("Comment must be shorter than 64 characters"),t.abrupt("return");case 10:return console.log(r),n=B(z,g),t.next=14,fetch("/api/threads/".concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({text:n,forumID:r.id})});case 14:if(!(c=t.sent).ok){t.next=25;break}return N(!1),T(""),t.next=20,c.json();case 20:i=t.sent,u([].concat(Object(Ce.a)(h),[i])),E(""),t.next=27;break;case 25:N(!0),T("error posting comment");case 27:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(P.jsx)(m.a,{children:r?Object(P.jsxs)(p.a,{children:[Object(P.jsxs)(H.a,{className:t.titleHolder,children:[Object(P.jsxs)(A.a,{variant:"subtitle1",className:t.titleElements,children:["@",null===r||void 0===r?void 0:r.author]}),Object(P.jsx)(A.a,{variant:"h6",className:t.titleElements,children:null===r||void 0===r?void 0:r.title}),Object(P.jsx)(A.a,{variant:"body2",className:t.titleElements,children:null===r||void 0===r?void 0:r.subtitle})]}),Object(P.jsx)(U,{updateSecret:function(e){console.log(e),f(e)}}),null===h||void 0===h?void 0:h.map((function(e){return Object(P.jsx)(J,{comment:e,secret:g})})),Object(P.jsx)(M.a,{error:w,helperText:C,className:t.comment,id:"outlined-textarea",label:"Reply",value:z,onInput:function(e){N(!1),T(""),E(e.target.value)},placeholder:"Placeholder",multiline:!0,fullWidth:!0,variant:"outlined"}),Object(P.jsx)(D.a,{variant:"contained",color:"primary",onClick:F,children:"Submit Comment"})]}):Object(P.jsx)(_,{height:"30rem"})})}var Be=a(229),Ie=Object(g.a)((function(e){return{root:{width:"100%",maxWidth:"36ch",backgroundColor:e.palette.background.paper},inline:{display:"inline"}}}));function ze(e){var t=e.following,a=Ie();Object(b.f)();return Object(P.jsx)(f.a,{className:a.root,children:t.map((function(e,t){return Object(P.jsxs)("div",{children:[Object(P.jsxs)(v.a,{button:!0,component:d.b,to:"/user/".concat(e.username),alignItems:"flex-start",children:[Object(P.jsx)(Be.a,{children:Object(P.jsx)(L.a,{alt:e.username,src:"/static/images/avatar/1.jpg"})}),Object(P.jsx)(y.a,{primary:e.username,secondary:Object(P.jsx)(c.a.Fragment,{children:Object(P.jsx)(A.a,{component:"span",variant:"body2",className:a.inline,color:"textPrimary",children:e.bio})})})]}),Object(P.jsx)(z.a,{variant:"inset",component:"li"})]},"".concat(e,"_").concat(t))}))})}function Pe(e){var t=e.children,a=e.value,n=e.index;return Object(P.jsx)("div",{hidden:a!==n,children:t})}function Ee(){var e=Object(b.h)(),t=Object(b.g)().username,a=Object(n.useState)([]),r=Object(j.a)(a,2),i=r[0],s=r[1],d=Object(n.useState)(),h=Object(j.a)(d,2),u=h[0],O=h[1],g=Object(n.useState)({}),f=Object(j.a)(g,2),v=f[0],y=f[1],w=Object(n.useState)([]),N=Object(j.a)(w,2),S=N[0],k=N[1],C=Object(n.useState)([]),T=Object(j.a)(C,2),W=T[0],B=T[1],I=Object(n.useState)({}),z=Object(j.a)(I,2),E=(z[0],z[1]),F=Object(n.useState)(0),A=Object(j.a)(F,2),H=A[0],L=A[1],G=Object(n.useState)(null),M=Object(j.a)(G,2);M[0],M[1];Object(n.useEffect)(Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:L(0),O(null),fetch("/api/user/".concat(t,"/info")).then((function(e){return e.json()})).then((function(e){s(e.createdPosts),O(e)})),fetch("/api/".concat(t,"/comments")).then((function(e){return e.json()})).then((function(e){k(e.comments)})).catch((function(e){return console.log("Error: Could not fetch comments")})),fetch("/api/user/".concat(t,"/following/list/").concat(t)).then((function(e){return e.json()})).then((function(e){B(e.following),E(e)}));case 5:case"end":return e.stop()}}),e)}))),[t]);return Object(P.jsxs)(c.a.Fragment,{children:[Object(P.jsx)(m.a,{}),Object(P.jsxs)(b.c,{children:[Object(P.jsx)(b.a,{path:"".concat(e.path,"/post/:postname"),children:Object(P.jsx)(We,{})}),Object(P.jsx)(p.a,{children:Object(P.jsxs)(x.a,{container:!0,spacing:12,children:[Object(P.jsx)(x.a,{item:!0,xs:6,children:Object(P.jsx)(je,{profile:u,canFollow:(null===u||void 0===u?void 0:u.loggedIn)&&!(null===u||void 0===u?void 0:u.isFollowing)})}),Object(P.jsx)("div",{style:{padding:30},children:Object(P.jsxs)(x.a,{item:!0,xs:12,children:[(null===u||void 0===u?void 0:u.loggedIn)&&(null===u||void 0===u?void 0:u.currUser)?Object(P.jsx)(D.a,{type:"submit",variant:"contained",color:"primary",href:"/create",children:"Create Forum"}):"",Object(P.jsx)("div",{style:{paddingTop:30},children:Object(P.jsx)(U,{updateSecret:function(e){console.log(e),console.log(t),y(e)}})})]})}),Object(P.jsx)(x.a,{item:!0,xs:12,children:Object(P.jsxs)(K.a,{value:H,onChange:function(e,t){L(t)},indicatorColor:"primary",textColor:"primary",centered:!0,children:[Object(P.jsx)(Q.a,{label:"Created Posts"}),Object(P.jsx)(Q.a,{label:"User Comments"}),Object(P.jsx)(Q.a,{label:"Following"})]})}),Object(P.jsxs)(x.a,{item:!0,xs:12,children:[Object(P.jsx)(Pe,{value:H,index:0,children:u?i.length?Object(P.jsx)(ke,{secret:v,posts:i}):"This user hasn't made any posts yet":Object(P.jsx)(_,{height:"30rem"})}),Object(P.jsx)(Pe,{value:H,index:1,children:S.length?Object(P.jsx)(V,{comments:S,secret:v}):"This user hasn't made any comments yet"}),Object(P.jsx)(Pe,{value:H,index:2,children:Object(P.jsx)(p.a,{children:W.length?Object(P.jsx)(ze,{following:W,secret:v}):"This user isn't following anyone"})})]})]})})]})]})}var Fe=a(211),Ae=a(109),He=a.n(Ae),Le=Object(g.a)((function(e){return{settingsContainer:{marginTop:30},settingsItem:{marginTop:30,wordBreak:"break-all"}}}));function De(){var e=Le();return Object(P.jsx)(m.a,{children:Object(P.jsxs)(p.a,{maxWidth:"sm",className:e.settingsContainer,children:[Object(P.jsx)(A.a,{variant:"body2",gutterBottom:!0,children:"Enter a bio"}),Object(P.jsx)(Fe.a,{fullWidth:!0,children:Object(P.jsx)(M.a,{id:"outlined-basic",label:"bio",variant:"outlined",className:e.settingsItem,multiline:!0})}),Object(P.jsx)(A.a,{variant:"body2",gutterBottom:!0,className:e.settingsItem,children:"Enter a profile image link"}),Object(P.jsx)(Fe.a,{fullWidth:!0,children:Object(P.jsx)(M.a,{id:"outlined-basic",label:"Outlined",variant:"outlined",className:e.settingsItem})}),Object(P.jsx)(D.a,{className:e.settingsItem,variant:"contained",color:"primary",size:"large",startIcon:Object(P.jsx)(He.a,{}),children:"Save"})]})})}var Ge=a(231),Me=a(236),qe=a(234),Ue=a(79),Xe=a.n(Ue),_e=Object(g.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.primary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function Re(){var e=_e();return Object(P.jsxs)(p.a,{component:"main",maxWidth:"xs",children:[Object(P.jsx)(m.a,{}),Object(P.jsxs)("div",{className:e.paper,children:[Object(P.jsx)(L.a,{className:e.avatar,children:Object(P.jsx)(Xe.a,{})}),Object(P.jsx)(A.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(P.jsx)("form",{className:e.form,noValidate:!0,children:Object(P.jsxs)(x.a,{container:!0,spacing:2,children:[Object(P.jsx)(x.a,{item:!0,xs:12,sm:12,children:Object(P.jsx)(M.a,{autoComplete:"fname",name:"username",variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"Username",autoFocus:!0})}),Object(P.jsx)(x.a,{item:!0,xs:12,children:Object(P.jsx)(M.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),Object(P.jsx)(x.a,{item:!0,xs:12,children:Object(P.jsx)(M.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"})}),Object(P.jsxs)(x.a,{item:!0,xs:12,children:[Object(P.jsx)(M.a,{variant:"outlined",required:!0,fullWidth:!0,name:"confirmPassword",label:"Confirm Password",type:"password",id:"confirmPassword",autoComplete:"current-password"}),Object(P.jsx)(x.a,{item:!0,xs:12,children:Object(P.jsx)(Ge.a,{control:Object(P.jsx)(Me.a,{value:"allowExtraEmails",color:"primary"}),label:"Stay logged in"})})]}),Object(P.jsx)(D.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign Up"}),Object(P.jsx)(x.a,{container:!0,justifyContent:"flex-end",children:Object(P.jsx)(x.a,{item:!0,children:Object(P.jsx)(ae.a,{href:"login",variant:"body2",children:"Already have an account? Login"})})})]})})]}),Object(P.jsx)(qe.a,{mt:5})]})}var Je=Object(g.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.primary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function Ve(e){var t=e.handleLogin,a=Object(b.f)(),c=Je(),r=Object(n.useState)(""),i=Object(j.a)(r,2),s=i[0],d=i[1],h=Object(n.useState)(""),u=Object(j.a)(h,2),O=u[0],g=u[1],f=function(){var e=Object(l.a)(o.a.mark((function e(n){var c,r,i,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),console.log("you submitted this form"),e.next=4,fetch("/api/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:s,password:O})});case 4:if((c=e.sent)&&200===c.status){e.next=8;break}throw"error logging in";case 8:return e.next=10,c.json();case 10:return r=e.sent,console.log(r),r.valid&&(t(r.user),a.push(r.redirect)),e.next=15,fetch("/api/login/status",{credentials:"include"});case 15:if((i=e.sent)&&200==i.status){e.next=20;break}return console.log(i),console.log("error"),e.abrupt("return");case 20:return e.next=22,i.json();case 22:l=e.sent,console.log(l);case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(P.jsxs)(p.a,{component:"main",maxWidth:"xs",children:[Object(P.jsx)(m.a,{}),Object(P.jsxs)("div",{className:c.paper,children:[Object(P.jsx)(L.a,{className:c.avatar,children:Object(P.jsx)(Xe.a,{})}),Object(P.jsx)(A.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(P.jsxs)("form",{className:c.form,onSubmit:f,noValidate:!0,children:[Object(P.jsx)(M.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,onChange:function(e){return d(e.target.value)}}),Object(P.jsx)(M.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return g(e.target.value)}}),Object(P.jsx)(Ge.a,{control:Object(P.jsx)(Me.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(P.jsx)(D.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:c.submit,children:"Login"}),Object(P.jsxs)(x.a,{container:!0,children:[Object(P.jsx)(x.a,{item:!0,xs:!0,children:Object(P.jsx)(ae.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(P.jsx)(x.a,{item:!0,children:Object(P.jsx)(ae.a,{href:"signup",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]}),Object(P.jsx)(qe.a,{mt:8})]})}var Ke=a(80),Qe=a.n(Ke),Ze=Object(g.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.primary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function Ye(){var e=Ze();return Object(P.jsxs)(p.a,{component:"main",maxWidth:"xs",children:[Object(P.jsx)(m.a,{}),Object(P.jsxs)("div",{className:e.paper,children:[Object(P.jsx)(L.a,{className:e.avatar,children:Object(P.jsx)(Qe.a,{})}),Object(P.jsx)(A.a,{component:"h1",variant:"h5",children:"Create forum post"}),Object(P.jsx)("form",{className:e.form,noValidate:!0,children:Object(P.jsxs)(x.a,{container:!0,spacing:2,children:[Object(P.jsx)(x.a,{item:!0,xs:12,sm:12,children:Object(P.jsx)(M.a,{fullWidth:!0,id:"outlined-textarea",label:"Title",placeholder:"",multiline:!0,variant:"outlined"})}),Object(P.jsx)(x.a,{item:!0,xs:12,children:Object(P.jsx)(M.a,{fullWidth:!0,id:"outlined-textarea",label:"Subtitle",placeholder:"",multiline:!0,variant:"outlined"})}),Object(P.jsx)(x.a,{item:!0,xs:12,children:Object(P.jsx)(M.a,{fullWidth:!0,id:"outlined-textarea",label:"Image",placeholder:"",variant:"outlined"})}),Object(P.jsxs)(x.a,{item:!0,xs:12,children:[Object(P.jsx)(M.a,{fullWidth:!0,id:"outlined-textarea",label:"Key",placeholder:"",multiline:!0,variant:"outlined"}),Object(P.jsx)(x.a,{item:!0,xs:12,children:Object(P.jsx)(Ge.a,{control:Object(P.jsx)(Me.a,{value:"key",color:"primary",checked:"checked"}),label:"Generate forum with a key"})}),Object(P.jsx)(x.a,{item:!0,xs:12,children:Object(P.jsx)(Ge.a,{control:Object(P.jsx)(Me.a,{value:"key",color:"primary",checked:"checked"}),label:"Encrypt title and subtitle with your key"})}),Object(P.jsx)(x.a,{item:!0,xs:12,children:Object(P.jsx)(Ge.a,{control:Object(P.jsx)(Me.a,{value:"key",color:"primary",checked:"checked"}),label:"Store key in your keychain"})}),Object(P.jsx)(x.a,{item:!0,xs:12,children:Object(P.jsx)(Ge.a,{control:Object(P.jsx)(Me.a,{value:"key",color:"primary",checked:"checked"}),label:"Allow key to be stored in other users keychain"})})]}),Object(P.jsx)(D.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Create"}),Object(P.jsx)(x.a,{container:!0,justifyContent:"flex-end"})]})})]}),Object(P.jsx)(qe.a,{mt:5})]})}var $e=a(119),et=a.n($e),tt=a(110),at=a.n(tt),nt=a(111),ct=a.n(nt),rt=a(112),it=a.n(rt),st=a(121),ot=a.n(st),lt=a(113),jt=a.n(lt),dt=a(120),bt=a.n(dt),ht=a(122),ut=a.n(ht),mt=a(123),xt=a.n(mt),pt=a(118),Ot=a.n(pt),gt=a(115),ft=a.n(gt),vt=a(116),yt=a.n(vt),wt=a(114),Nt=a.n(wt),St=a(117),kt=a.n(St),Ct=Object(g.a)((function(e){return{root:{flexGrow:1,padding:100},paper:{padding:e.spacing(0),textAlign:"center",color:e.palette.text.secondary,borderTopWidth:3,borderColor:e.palette.text.secondary,borderStyle:"solid"}}}));function Tt(){var e=Ct();return Object(P.jsx)("div",{className:e.root,children:Object(P.jsxs)(x.a,{container:!0,spacing:4,children:[Object(P.jsx)(x.a,{item:!0,xs:12,sm:3,children:Object(P.jsx)(d.b,{to:"/pubforum",children:Object(P.jsxs)(H.a,{className:e.paper,children:[Object(P.jsx)(at.a,{style:{fontSize:"13vw"}}),Object(P.jsx)(A.a,{children:"Business"})]})})}),Object(P.jsx)(x.a,{item:!0,xs:12,sm:3,children:Object(P.jsx)(d.b,{to:"/pubilc/images",children:Object(P.jsxs)(H.a,{className:e.paper,children:[Object(P.jsx)(ct.a,{style:{fontSize:"13vw"}}),Object(P.jsx)(A.a,{children:"Images"})]})})}),Object(P.jsx)(x.a,{item:!0,xs:12,sm:3,children:Object(P.jsx)(d.b,{to:"/pubilc/Politics",children:Object(P.jsxs)(H.a,{className:e.paper,children:[Object(P.jsx)(it.a,{style:{fontSize:"13vw"}}),Object(P.jsx)(A.a,{children:"Politics"})]})})}),Object(P.jsx)(x.a,{item:!0,xs:12,sm:3,children:Object(P.jsx)(d.b,{to:"/pubilc/Technology",children:Object(P.jsxs)(H.a,{className:e.paper,children:[Object(P.jsx)(jt.a,{style:{fontSize:"13vw"}}),Object(P.jsx)(A.a,{children:"Technology"})]})})}),Object(P.jsx)(x.a,{item:!0,xs:12,sm:3,children:Object(P.jsx)(d.b,{to:"/public/News",children:Object(P.jsxs)(H.a,{className:e.paper,children:[Object(P.jsx)(Nt.a,{style:{fontSize:"13vw"}}),Object(P.jsx)(A.a,{children:"News"})]})})}),Object(P.jsx)(x.a,{item:!0,xs:12,sm:3,children:Object(P.jsx)(d.b,{to:"/public/Gaming",children:Object(P.jsxs)(H.a,{className:e.paper,children:[Object(P.jsx)(ft.a,{style:{fontSize:"13vw"}}),Object(P.jsx)(A.a,{children:"Gaming"})]})})}),Object(P.jsx)(x.a,{item:!0,xs:12,sm:3,children:Object(P.jsx)(d.b,{to:"/public/Music",children:Object(P.jsxs)(H.a,{className:e.paper,children:[Object(P.jsx)(yt.a,{style:{fontSize:"13vw"}}),Object(P.jsx)(A.a,{children:"Music"})]})})}),Object(P.jsx)(x.a,{item:!0,xs:12,sm:3,children:Object(P.jsx)(d.b,{to:"/public/Science",children:Object(P.jsxs)(H.a,{className:e.paper,children:[Object(P.jsx)(kt.a,{style:{fontSize:"13vw"}}),Object(P.jsx)(A.a,{children:"Science"})]})})}),Object(P.jsx)(x.a,{item:!0,xs:12,sm:3,children:Object(P.jsx)(d.b,{to:"/public/Questions",children:Object(P.jsxs)(H.a,{className:e.paper,children:[Object(P.jsx)(Ot.a,{style:{fontSize:"13vw"}}),Object(P.jsx)(A.a,{children:"Questions"})]})})}),Object(P.jsx)(x.a,{item:!0,xs:12,sm:3,children:Object(P.jsx)(d.b,{to:"/public/Outdoors",children:Object(P.jsxs)(H.a,{className:e.paper,children:[Object(P.jsx)(et.a,{style:{fontSize:"13vw"}}),Object(P.jsx)(A.a,{children:"Outdoors"})]})})}),Object(P.jsx)(x.a,{item:!0,xs:12,sm:3,children:Object(P.jsx)(d.b,{to:"/public/Puzzles",children:Object(P.jsxs)(H.a,{className:e.paper,children:[Object(P.jsx)(bt.a,{style:{fontSize:"13vw"}}),Object(P.jsx)(A.a,{children:"Puzzles"})]})})}),Object(P.jsx)(x.a,{item:!0,xs:12,sm:3,children:Object(P.jsx)(d.b,{to:"/public/Writing",children:Object(P.jsxs)(H.a,{className:e.paper,children:[Object(P.jsx)(Qe.a,{style:{fontSize:"13vw"}}),Object(P.jsx)(A.a,{children:"Writing"})]})})}),Object(P.jsx)(x.a,{item:!0,xs:12,sm:3,children:Object(P.jsx)(d.b,{to:"/public/",children:Object(P.jsxs)(H.a,{className:e.paper,children:[Object(P.jsx)(ot.a,{style:{fontSize:"13vw"}}),Object(P.jsx)(A.a,{children:"Travel"})]})})}),Object(P.jsx)(x.a,{item:!0,xs:12,sm:3,children:Object(P.jsx)(d.b,{to:"/public/Sports",children:Object(P.jsxs)(H.a,{className:e.paper,children:[Object(P.jsx)(ut.a,{style:{fontSize:"13vw"}}),Object(P.jsx)(A.a,{children:"Sports"})]})})}),Object(P.jsx)(x.a,{item:!0,xs:12,sm:3,children:Object(P.jsx)(d.b,{to:"/public/Comedy",children:Object(P.jsxs)(H.a,{className:e.paper,children:[Object(P.jsx)(xt.a,{style:{fontSize:"13vw"}}),Object(P.jsx)(A.a,{children:"Comedy"})]})})})]})})}var Wt=Object(g.a)((function(e){return{root:{flexGrow:1,marginTop:-50,padding:150},paper:{padding:e.spacing(2),textAlign:"left",color:e.palette.text.secondary}}}));function Bt(){var e=Wt();return Object(P.jsx)("div",{className:e.root,children:Object(P.jsxs)(x.a,{container:!0,spacing:3,children:[Object(P.jsx)(x.a,{item:!0,xs:12,children:Object(P.jsxs)(H.a,{className:e.paper,children:[Object(P.jsx)(A.a,{variant:"h4",gutterBottom:!0,children:"What is this website?"}),Object(P.jsx)(A.a,{children:"This website uses the Exclusive Or logic gate (Xor) to encrypt comments or posts generated by users, using any 256 bit key of their choice."})]})}),Object(P.jsx)(x.a,{item:!0,xs:12,children:Object(P.jsxs)(H.a,{className:e.paper,children:[Object(P.jsx)(A.a,{variant:"h4",gutterBottom:!0,children:"How does Xor work?"}),Object(P.jsx)(A.a,{children:"Xor is a simple logic gate that creates a binary output from two binary inputs. The two input strings are compared character by character - If the two input strings have the same value, a 0 is generated. If the two inputs have a different value, a 1 is generated. Below is a descriptive graphic by geeksforgeeks.org/ demonstrating this logic gate."})]})}),Object(P.jsx)(x.a,{item:!0,xs:12,children:Object(P.jsxs)(H.a,{className:e.paper,children:[Object(P.jsx)(A.a,{variant:"h4",gutterBottom:!0,children:"How does this website use Xor to encrypt content?"}),Object(P.jsx)(A.a,{children:"Both messages and keys are contained in 256 bits, or 64 characters. Keys utilize the SHA256 hash function to get consistent cryptographically secure outputs regaurdless of what the user types in. Messages are padded with random letters to make sure that their length always equals 64 characters, and are Xored with the 64 character SHA256 hash of the chosen key. This website styles these inputs in the browser, but the content that is used looks like the example below.These text values are converted into numbers, and then Xored together to produce cipher text. Doing this enables cipher text to be public, and only by Xoring it with the key it was generated with will produce the origional message."})]})}),Object(P.jsx)(x.a,{item:!0,xs:12,children:Object(P.jsxs)(H.a,{className:e.paper,children:[Object(P.jsx)(A.a,{children:"User message:"}),Object(P.jsxs)(A.a,{children:["Hello, here is an example message.",Object(P.jsx)(A.a,{}),"-------",Object(P.jsx)(A.a,{}),"User key:",Object(P.jsx)(A.a,{}),"Here is an example key",Object(P.jsx)(A.a,{}),"-------",Object(P.jsx)(A.a,{}),"64 character message with padding letters:",Object(P.jsx)(A.a,{}),"QPrJSuIcrZRZqzfOIwwZnWwgqOoI|Hello, here is an example message.|",Object(P.jsx)(A.a,{}),"-------",Object(P.jsx)(A.a,{}),"64 character SHA256 hash of key:",Object(P.jsx)(A.a,{}),"51cc40047e7d5476fcab371037b385a86ce5e64cbe7ebc2a11bb271d8db08558"]})]})}),Object(P.jsx)(x.a,{item:!0,xs:12,children:Object(P.jsxs)(H.a,{className:e.paper,children:[Object(P.jsx)(A.a,{variant:"h4",gutterBottom:!0,children:"Who is this website for?"}),Object(P.jsx)(A.a,{children:"This website is for people interested in ciphers, secrets, and encryption. Users should be aware that the encryption methods used by this site are designed to protect information from all common individuals, but there are far more secure methods and services for people who desire high levels of information security. For individuals whose top priority is security, and not the interactivity or avaliability of content on this site, it is recommended individuals use AES Encryption, which was developed by the NSA and is military grade."})]})}),Object(P.jsx)(x.a,{item:!0,xs:12,children:Object(P.jsxs)(H.a,{className:e.paper,children:[Object(P.jsx)(A.a,{variant:"h4",gutterBottom:!0,children:"* Disclaimer *"}),Object(P.jsx)(A.a,{children:"This website is not to be used for criminal activity. This website should not be used to store password data, financial data, or any sensitive records. While Xor encryption is strong in a vacuum, government authorities or advanced cyber security professionals could make use of keyloggers, surveillance, inference, endpoint breaches, etc. to obtain sensitive information. While these methods do require quite a bit of effort, they are not impossible."})]})})]})})}var It=a(124),zt=a.n(It),Pt=a(125),Et=a.n(Pt),Ft=Object(g.a)((function(e){return{root:{flexGrow:1,padding:100},paper:{padding:e.spacing(2),paddingTop:150,paddingBottom:150,textAlign:"center",color:e.palette.text.secondary,borderTopWidth:3,borderColor:e.palette.text.secondary,borderStyle:"solid"}}}));function At(){var e=Ft();return Object(P.jsx)("div",{className:e.root,children:Object(P.jsxs)(x.a,{container:!0,spacing:4,children:[Object(P.jsx)(x.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(ae.a,{href:"/public",children:Object(P.jsxs)(H.a,{className:e.paper,children:[Object(P.jsx)(zt.a,{style:{fontSize:200}}),Object(P.jsx)(A.a,{children:"Visit the public forums"})]})})}),Object(P.jsx)(x.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(ae.a,{href:"/signup",children:Object(P.jsxs)(H.a,{className:e.paper,children:[Object(P.jsx)(Et.a,{style:{fontSize:200}}),Object(P.jsx)(A.a,{children:"Signup"})]})})})]})})}var Ht=Object(g.a)((function(e){return{root:{flexGrow:1,padding:50},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function Lt(){var e=Ht();return Object(P.jsx)("div",{className:e.root,children:Object(P.jsx)(x.a,{container:!0,spacing:3,children:Object(P.jsxs)(x.a,{item:!0,xs:12,children:[Object(P.jsx)(A.a,{variant:"h2",children:"Search"}),Object(P.jsxs)(H.a,{className:e.paper,children:[" ",Object(P.jsx)(M.a,{autoComplete:"fname",name:"Search",variant:"outlined",fullWidth:!0,id:"Search",label:"...",autoFocus:!0})]})]})})})}var Dt=a(37),Gt=Object(g.a)((function(e){return{root:{display:"flex",marginTop:10,marginRight:20,marginLeft:20},title:{marginLeft:20},details:{display:"inline-flex",flexDirection:"row"},content:{overflowWrap:"break-word",color:"#ffffff",padding:14},cover:{width:151},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},playIcon:{height:38,width:38},img:{maxHeight:150,maxWidth:180,minHeight:50,padding:0},card__actions:{display:"flex",alignContent:"flex-end",justifyContent:"flex-end",marginTop:10},create:{marginTop:10,marginLeft:10}}}));function Mt(){var e=Gt();Object(Dt.a)();return Object(P.jsxs)(x.a,{container:!0,spacing:1,children:[Object(P.jsx)(x.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(A.a,{className:e.root,variant:"h3",children:"Business"})}),Object(P.jsx)(x.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(D.a,{className:e.create,variant:"contained",color:"primary",children:"Create public forum"})}),Object(P.jsx)(x.a,{item:!0,xs:12,sm:6,children:Object(P.jsx)(se.a,{className:e.root,children:Object(P.jsxs)("div",{className:e.details,children:[Object(P.jsx)("img",{className:e.img,alt:"complex",src:"https://i.imgur.com/AD3MbBi.jpeg"}),Object(P.jsxs)(oe.a,{className:e.content,children:[Object(P.jsx)(A.a,{variant:"caption",children:"@username"}),Object(P.jsx)(A.a,{variant:"body2",children:"1500s, when an unknown 1500s, when an unknown pp"}),Object(P.jsx)("div",{className:e.card__actions,children:Object(P.jsx)(A.a,{className:e.card__actions,variant:"caption",children:"100 comments"})})]})]})})})]})}a(161);var qt=Object(h.a)({palette:{type:"dark",primary:{main:"#00e019",contrastText:"#121212"},secondary:{main:"#008bec",contrastText:"#ffffff"},background:{default:"#121212",paper:"#1c1c1c"},text:{primary:"#0aff00",secondary:"#00ff1b",disabled:"#00ff1b",hint:"#00ff1b"},divider:"rgba(0,0,0,0.12)"},typography:{fontFamily:"IBM Plex Mono, Monospace"}});function Ut(){console.log("this is the home page");var e=Object(n.useState)({ok:0,username:null}),t=Object(j.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),i=Object(j.a)(r,2),s=(i[0],i[1]);Object(n.useEffect)(Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/login/status/",{credentials:"include"});case 2:if((t=e.sent)&&200==t.status){e.next=7;break}return console.log(t),console.log("error"),e.abrupt("return");case 7:return e.next=9,t.json();case 9:a=e.sent,c(a),console.log(a);case 12:case"end":return e.stop()}}),e)}))),[]);return Object(P.jsxs)(u.a,{theme:qt,children:[Object(P.jsx)(m.a,{}),Object(P.jsxs)(d.a,{children:[Object(P.jsx)(ie,{auth:a}),Object(P.jsxs)(b.c,{children:[Object(P.jsx)(b.a,{path:"/user/:username",children:Object(P.jsx)(Ee,{})}),Object(P.jsx)(b.a,{path:"/post/:title",children:Object(P.jsx)(We,{})}),Object(P.jsx)(b.a,{path:"/settings",children:Object(P.jsx)(De,{})}),Object(P.jsx)(b.a,{path:"/signup",children:Object(P.jsx)(Re,{})}),Object(P.jsx)(b.a,{path:"/login",children:Object(P.jsx)(Ve,{handleLogin:function(e){c({ok:1,username:e}),s(null)}})}),Object(P.jsx)(b.a,{path:"/create",children:Object(P.jsx)(Ye,{})}),Object(P.jsx)(b.a,{path:"/Public",children:Object(P.jsx)(Tt,{})}),Object(P.jsx)(b.a,{path:"/Help",children:Object(P.jsx)(Bt,{})}),Object(P.jsx)(b.a,{path:"/Home",children:Object(P.jsx)(At,{})}),Object(P.jsx)(b.a,{path:"/Search",children:Object(P.jsx)(Lt,{})}),Object(P.jsx)(b.a,{path:"/PubForum",children:Object(P.jsx)(Mt,{})}),Object(P.jsx)(b.a,{path:"/",children:Object(P.jsx)(At,{})})]})]})]})}var Xt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,240)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(P.jsx)(Ut,{}),document.getElementById("root")),Xt()}},[[162,1,2]]]);
//# sourceMappingURL=main.0c47d059.chunk.js.map