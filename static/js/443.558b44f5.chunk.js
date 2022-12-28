"use strict";(self.webpackChunkslim_moms_frontend=self.webpackChunkslim_moms_frontend||[]).push([[443],{2470:function(e,n,t){t.d(n,{p:function(){return L}});var i,a,o,r,d,s,l,p,c,h,x,m,b,u=t(5861),g=t(885),f=t(4687),w=t.n(f),y=t(3802),Z=t(168),k=t(6088),v=k.Z.div(i||(i=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 610px;\n  padding-top: 32px;\n  @media screen and (min-width: 768px) {\n    padding-top: 100px;\n  }\n  @media screen and (min-width: 1280px) {\n    padding-top: 140px;\n  }\n"]))),j=k.Z.h1(a||(a=(0,Z.Z)(["\n  color: #212121;\n  font-size: 18px;\n  line-height: 140%;\n  margin-bottom: 34px;\n\n  @media (min-width: 768px) {\n    font-size: 34px;\n    line-height: 1.4;\n    margin-bottom: 68px;\n  }\n"]))),_=k.Z.form(o||(o=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n"]))),W=k.Z.div(r||(r=(0,Z.Z)(["\n  display: flex;\n  flex-flow: column;\n  width: 100%;\n  @media screen and (min-width: 768px) {\n    width: 240px;\n    &:first-of-type {\n      margin-right: 32px;\n      margin-bottom: 60px;\n    }\n  }\n"]))),S=k.Z.label(d||(d=(0,Z.Z)(["\n  position: relative;\n  width: 100%;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  color: #9b9faa;\n  margin-bottom: 32px;\n  @media (min-width: 768px) {\n    margin-bottom: 40px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n"]))),F=(k.Z.label(s||(s=(0,Z.Z)(["\n  position: relative;\n  width: 100%;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  color: #9b9faa;\n  margin-bottom:40px ;\n"]))),k.Z.p(l||(l=(0,Z.Z)(["\nmargin-bottom: 8px;\n@media (min-width: 768px) {\n    height: 36px;\n    border-bottom: 1px solid #e0e0e0;\n\n    }"]))),k.Z.input(p||(p=(0,Z.Z)(["\n  display: block;\n  border: none;\n  width: 100%;\n  border-bottom: 1px solid #e0e0e0;\n  &:focus,\n  &:hover {\n    outline: none;\n  }\n  &:focus,\n  :hover {\n    border-bottom: 1px solid #fc842d;\n  }\n\n  &::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n"])))),z=(k.Z.p(c||(c=(0,Z.Z)(["\n  margin-bottom: 8px;\n  border-bottom: 1px solid #e0e0e0;\n  padding-bottom: 20px;\n"]))),k.Z.ul(h||(h=(0,Z.Z)(["\n  display: inline-flex;\n  width: 100%;\n  flex-flow: row no-wrap;\n"])))),C=k.Z.li(x||(x=(0,Z.Z)(["\n  margin-left: 24px;\n  &:first-of-type {\n    margin-left: 0;\n  }\n"]))),T=k.Z.input(m||(m=(0,Z.Z)(["\n  &:checked,\n  &:not(:checked) {\n    position: absolute;\n    left: -9999px;\n  }\n  &:checked + label,\n  &:not(:checked) + label {\n    position: relative;\n    padding-left: 28px;\n    cursor: pointer;\n    line-height: 17px;\n    display: inline-block;\n    color: #9b9faa;\n  }\n  &:checked + label:before,\n  &:not(:checked) + label:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 20px;\n    height: 20px;\n    border: 1px solid #e0e0e0;\n    border-radius: 100%;\n    background: #ffffff;\n  }\n  &:checked + label:after,\n  &:not(:checked) + label:after {\n    content: '';\n    width: 10px;\n    height: 10px;\n    background: #fc842d;\n    position: absolute;\n    top: 5px;\n    left: 5px;\n    border-radius: 100%;\n    -webkit-transition: all 0.25s ease;\n    transition: all 0.25s ease;\n  }\n  &:checked + label {\n    color: #fc842d;\n  }\n  &:not(:checked) + label:after {\n    opacity: 0;\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  &:checked + label:after {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n"]))),q=k.Z.div(b||(b=(0,Z.Z)(["\n  align-self: center;\n  @media screen and (min-width: 768px) {\n    align-self: flex-start;\n  }\n  @media screen and (min-width: 1280px) {\n    margin-left: auto;\n  }\n"]))),N=t(2791),E=t(9434),A=t(6373),D=t(1678),R=t(1275),V=t(7689),B=function(e){return e.user.userDate},I=t(9869),H=t(7103),J=H.Ry().shape({height:H.Rx().min(100,"Very little...").typeError("Height must be a number!").positive().integer("Put your height in a number").max(250,"A lot...").required("Fill all the fields!"),age:H.Rx().min(18,"Very little...").typeError("Age must be a number!").positive().integer().max(100,"A lot...").required("Fill all the fields!"),curWeight:H.Rx().min(20,"Very little...").typeError("Weight must be a number!").positive().integer().max(500,"A lot...").required("Fill all the fields!"),desWeight:H.Rx().min(20,"Very little...").typeError("Desired weight must be a number!").positive().integer().max(500,"A lot...").required("Fill all the fields!"),bloodType:H.Z_().required("Choose your blood type!")}),$=t(3329),L=function(){var e=(0,N.useState)(!1),n=(0,g.Z)(e,2),t=n[0],i=n[1],a=(0,N.useState)(""),o=(0,g.Z)(a,2),r=o[0],d=o[1],s=(0,N.useState)(""),l=(0,g.Z)(s,2),p=l[0],c=l[1],h=(0,N.useState)(""),x=(0,g.Z)(h,2),m=x[0],b=x[1],f=(0,N.useState)(""),Z=(0,g.Z)(f,2),k=Z[0],H=Z[1],L=(0,N.useState)("1"),M=(0,g.Z)(L,2),O=M[0],P=M[1],Q=(0,E.I0)(),U=(0,E.v9)(B),G=(0,E.v9)(I.Qb),K=window.matchMedia("(min-width: 768px)");(0,N.useEffect)((function(){G&&(d(U.height),c(U.age),b(U.curWeight),H(U.desWeight),P(U.bloodType))}),[G,U]);var X=function(e){var n=e.currentTarget,t=n.name,i=n.value;switch(t){case"height":d(i);break;case"age":c(i);break;case"currentWeight":b(i);break;case"desiredWeight":H(i);break;default:return}},Y=function(e){P(e.target.value),localStorage.setItem("bloodType",JSON.stringify(e.target.value))},ee=function(){var e=(0,u.Z)(w().mark((function e(n){return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!G){e.next=13;break}return e.prev=2,e.next=5,Q((0,R.getDietUser)({height:Number(r),age:Number(p),curWeight:Number(m),desWeight:Number(k),bloodType:Number(O)}));case 5:K.matches?Q((0,D.$)(!0)):i(!0),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(2),new Error;case 11:e.next=23;break;case 13:return e.prev=13,e.next=16,Q((0,R.getDiet)({height:Number(r),age:Number(p),curWeight:Number(m),desWeight:Number(k),bloodType:Number(O)}));case 16:Q((0,A.q)({height:r,age:p,curWeight:m,desWeight:k,bloodType:O})),K.matches?Q((0,D.$)(!0)):i(!0),e.next=23;break;case 20:throw e.prev=20,e.t1=e.catch(13),new Error;case 23:d(""),c(""),b(""),H(""),P("1");case 24:case"end":return e.stop()}}),e,null,[[2,8],[13,20]])})));return function(n){return e.apply(this,arguments)}}();return t?(0,$.jsx)(V.Fg,{to:"/modal"}):(0,$.jsxs)(v,{children:[(0,$.jsx)(j,{children:"Calculate your daily calorie intake right now"}),(0,$.jsxs)(_,{validationSchema:J,onSubmit:ee,children:[(0,$.jsxs)(W,{children:[(0,$.jsxs)(S,{htmlFor:"height",children:["Height *",(0,$.jsx)(F,{pattern:"[0-9]",required:!0,id:"height",type:"number",name:"height",value:r,onChange:X})]}),(0,$.jsxs)(S,{htmlFor:"age",children:["Age *",(0,$.jsx)(F,{pattern:"[0-9]",id:"age",required:!0,type:"number",name:"age",value:p,onChange:X})]}),(0,$.jsxs)(S,{htmlFor:"currentWeight",children:["Current weight *",(0,$.jsx)(F,{pattern:"[0-9]",required:!0,id:"currentWeight",type:"number",name:"currentWeight",value:m,onChange:X})]})]}),(0,$.jsxs)(W,{children:[(0,$.jsxs)(S,{htmlFor:"desiredWeight",children:["Desired weight *",(0,$.jsx)(F,{pattern:"[0-9]",id:"desiredWeight",required:!0,name:"desiredWeight",type:"number",value:k,onChange:X})]}),(0,$.jsxs)(S,{htmlFor:"bloodType",required:!0,children:[(0,$.jsx)("p",{style:{marginBottom:"8px"},children:"Blood type *"}),(0,$.jsxs)(z,{children:[(0,$.jsxs)(C,{children:[(0,$.jsx)(T,{type:"radio",name:"bloodType",id:"blood-inp-1",value:1,checked:"1"===O,onChange:Y}),(0,$.jsx)("label",{htmlFor:"blood-inp-1",children:"1"})]}),(0,$.jsxs)(C,{children:[(0,$.jsx)(T,{type:"radio",name:"bloodType",id:"blood-inp-2",value:2,checked:"2"===O,onChange:Y}),(0,$.jsx)("label",{htmlFor:"blood-inp-2",children:"2"})]}),(0,$.jsxs)(C,{children:[(0,$.jsx)(T,{type:"radio",name:"bloodType",id:"blood-inp-3",value:3,checked:"3"===O,onChange:Y}),(0,$.jsx)("label",{htmlFor:"blood-inp-3",children:"3"})]}),(0,$.jsxs)(C,{children:[(0,$.jsx)(T,{type:"radio",name:"bloodType",id:"blood-inp-4",value:4,checked:"4"===O,onChange:Y}),(0,$.jsx)("label",{htmlFor:"blood-inp-4",children:"4"})]})]})]})]}),(0,$.jsx)(q,{children:(0,$.jsx)(y.zx,{type:"submit",text:"Start losing weight"})})]})]})}},2443:function(e,n,t){t.r(n),t.d(n,{default:function(){return $}});var i,a,o,r,d,s,l,p,c,h=t(9434),x=t(629),m=t(2470),b=t(168),u=t(6088),g=u.Z.div(i||(i=(0,b.Z)(["\n  width: 100%;\n    overflow: hidden;\n    height: 100vh;\n    position: absolute;\n    top: 0;\n    left: 0;\n    pointer-events: none;\n"]))),f=u.Z.img(a||(a=(0,b.Z)(["\n    position: absolute;\n    right: -275px;\n    top: -102px;\n    z-index: -3;\n    display: none;\n    @media screen and (min-width: 1280px) {\n    display: block;\n  }\n"]))),w=u.Z.img(o||(o=(0,b.Z)(["\n       position: absolute;\n    right: 36px;\n    top: 506px;\n    z-index: -2;\n    display: none;\n    filter: drop-shadow(10px 20px 50px rgba(0, 0, 0, 0.3));\n    @media screen and (min-width: 1280px) {\n    display: block;\n  }\n"]))),y=u.Z.img(r||(r=(0,b.Z)(["\n       position: absolute;\n    right: 195px;\n    top: -26px;\n    z-index: -1;\n    display: none;\n    @media screen and (min-width: 1280px) {\n    display: block;\n  }\n"]))),Z=u.Z.img(d||(d=(0,b.Z)(["\nposition: absolute;\n    right: 0px;\n    bottom: 0;\n    /* top: 34px; */\n    z-index: -4;\n    display: none;\n    @media screen and (min-width: 1280px) {\n    display: block;\n  }\n"]))),k=u.Z.img(s||(s=(0,b.Z)(["\n    position: absolute;\n    right: -249px;\n    top: 593px;\n    z-index: -1;\n    display: none;\n    @media screen and (min-width: 768px) and  (max-width: 1279px) {\n    display: block;\n  }\n"]))),v=u.Z.img(l||(l=(0,b.Z)(["\n       position: absolute;\n       height: 203px;\n    right: 96px;\n    top: 583px;\n    z-index: -2;\n    display: none;\n    filter: drop-shadow(10px 20px 50px rgba(0, 0, 0, 0.3));\n     @media screen and (min-width: 768px) and  (max-width: 1279px) {\n    display: block;\n  }\n"]))),j=u.Z.img(p||(p=(0,b.Z)(["\n       position: absolute;\n    left: 0;\n    top: 493px;\n    z-index: -3;\n    display: none;\n     @media screen and (min-width: 768px) and  (max-width: 1279px) {\n    display: block;\n  }\n"]))),_=u.Z.img(c||(c=(0,b.Z)(["\nposition: absolute;\n    right: -32px;\n    top: 461px;\n    z-index: -4;\n    display: none;\n    @media screen and (min-width: 768px) and  (max-width: 1279px){\n    display: block;\n  }\n"]))),W=t(546),S=t(3792),F=t(7209),z=t(9513),C=t(429),T=t(7006),q=t(2037),N=t(4230),E=t(7477),A=t(452),D=t(9483),R=t(3076),V=t(5973),B=t(5452),I=t(3329),H=function(e){var n=e.children;return(0,I.jsxs)(g,{children:[(0,I.jsx)(f,{alt:"im",src:W,srcSet:"".concat(S," 2x"),media:"(min-width: 1280px)"}),(0,I.jsx)(y,{alt:"im",src:F,srcSet:"".concat(z," 2x"),media:"(min-width: 1280px)"}),(0,I.jsx)(w,{height:279,width:286,alt:"im",src:C,srcSet:"".concat(T," 2x"),media:"(min-width: 1280px)"}),(0,I.jsx)(Z,{alt:"im",src:q,media:"(min-width: 1280px)"}),(0,I.jsx)(k,{alt:"im",media:"(min-width: 768px)",src:N,srcSet:"".concat(E," 2x")}),(0,I.jsx)(j,{alt:"im",media:"(min-width: 768px)",src:A,srcSet:"".concat(D," 2x")}),(0,I.jsx)(v,{alt:"im",media:"(min-width: 768px)",src:R,srcSet:"".concat(V," 2x")}),(0,I.jsx)(_,{alt:"im",media:"(min-width: 768px)",src:B}),n]})},J=t(6792),$=function(){var e=(0,h.v9)(J.J.selectBloodIsLoading);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(H,{}),(0,I.jsx)(m.p,{}),e&&(0,I.jsx)(x.Z,{})]})}},546:function(e,n,t){e.exports=t.p+"static/media/banana_desktop_1x.2c06f9c48507310982a0.webp"},3792:function(e,n,t){e.exports=t.p+"static/media/banana_desktop_2x.f174cdfe7e3bf8c81e30.webp"},4230:function(e,n,t){e.exports=t.p+"static/media/banana_tablet_1x.9454e67df1516e81d7e1.webp"},7477:function(e,n,t){e.exports=t.p+"static/media/banana_tablet_2x.8f7989e9a0d1ada301d5.webp"},7209:function(e,n,t){e.exports=t.p+"static/media/leaves_desktop-home_1x.0ddd861ae70da887ce88.webp"},9513:function(e,n,t){e.exports=t.p+"static/media/leaves_desktop-home_2x.5d44c0690418da56ddaf.webp"},452:function(e,n,t){e.exports=t.p+"static/media/leaves_tablet-home1_1x.b4486877726c268608d1.webp"},9483:function(e,n,t){e.exports=t.p+"static/media/leaves_tablet-home1_2x.a90e4dcb48bce61b0f69.webp"},2037:function(e,n,t){e.exports=t.p+"static/media/shadow_desktop.b915d13dbc73690ed43f.webp"},5452:function(e,n,t){e.exports=t.p+"static/media/shadow_tablet.d053f80ec7277dc8dfe9.webp"},429:function(e,n,t){e.exports=t.p+"static/media/strawberry_home_1x.9777ed984c8e5ad08a67.webp"},7006:function(e,n,t){e.exports=t.p+"static/media/strawberry_home_2x.4712d645cc71f7d1ca13.webp"},3076:function(e,n,t){e.exports=t.p+"static/media/strawberry_tablet1_1x.1c69174e5710820dbe8d.webp"},5973:function(e,n,t){e.exports=t.p+"static/media/strawberry_tablet1_2x.10b558dc26dc7f0e35e9.webp"}}]);
//# sourceMappingURL=443.558b44f5.chunk.js.map