"use strict";(self.webpackChunkslim_moms_frontend=self.webpackChunkslim_moms_frontend||[]).push([[952],{3952:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var i,r,a,o,l,d,s,h,c,p,u,m=t(5861),x=t(885),g=t(4687),b=t.n(g),f=t(3802),w=t(168),j=t(6088),k=j.Z.div(i||(i=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 610px;\n  padding: 32px 20px 0;\n\n  @media screen and (min-width: 768px) {\n    padding: 100px 32px 0;\n  }\n  @media screen and (min-width: 1280px) {\n    padding: 144px 16px 0;\n  }\n"]))),y=j.Z.h1(r||(r=(0,w.Z)(["\n  color: #212121;\n  font-size: 18px;\n  line-height: 140%;\n  margin-bottom: 34px;\n\n  @media (min-width: 768px) {\n    font-size: 34px;\n    line-height: 1.4;\n    margin-bottom: 68px;\n  }\n"]))),Z=j.Z.form(a||(a=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n"]))),v=j.Z.div(o||(o=(0,w.Z)(["\n  display: flex;\n  flex-flow: column;\n  width: 100%;\n  @media screen and (min-width: 768px) {\n    width: 240px;\n    &:first-of-type {\n      margin-right: 32px;\n      margin-bottom: 60px;\n    }\n  }\n"]))),W=j.Z.label(l||(l=(0,w.Z)(["\n  position: relative;\n  width: 100%;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  color: #9b9faa;\n  margin-bottom: 32px;\n  @media (min-width: 768px) {\n    margin-bottom: 40px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n"]))),C=j.Z.input(d||(d=(0,w.Z)(["\n  display: block;\n  border: none;\n  width: 100%;\n  border-bottom: 1px solid rgb(224, 224, 224);\n  &:focus,\n  &:hover {\n    outline: none;\n  }\n  &:focus,\n  :hover {\n    border-bottom: 1px solid #fc842d;\n  }\n\n  &::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n"]))),q=(j.Z.p(s||(s=(0,w.Z)(["\n  margin-bottom: 8px;\n  border-bottom: 1px solid rgb(224, 224, 224);\n  padding-bottom: 20px;\n"]))),j.Z.ul(h||(h=(0,w.Z)(["\n  display: inline-flex;\n  width: 100%;\n  flex-flow: row no-wrap;\n"])))),F=j.Z.li(c||(c=(0,w.Z)(["\n  margin-left: 24px;\n  &:first-of-type {\n    margin-left: 0;\n  }\n"]))),S=j.Z.input(p||(p=(0,w.Z)(["\n  &:checked,\n  &:not(:checked) {\n    position: absolute;\n    left: -9999px;\n  }\n  &:checked + label,\n  &:not(:checked) + label {\n    position: relative;\n    padding-left: 28px;\n    cursor: pointer;\n    line-height: 17px;\n    display: inline-block;\n    color: #9b9faa;\n  }\n  &:checked + label:before,\n  &:not(:checked) + label:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 20px;\n    height: 20px;\n    border: 1px solid #e0e0e0;\n    border-radius: 100%;\n    background: #ffffff;\n  }\n  &:checked + label:after,\n  &:not(:checked) + label:after {\n    content: '';\n    width: 10px;\n    height: 10px;\n    background: #fc842d;\n    position: absolute;\n    top: 5px;\n    left: 5px;\n    border-radius: 100%;\n    -webkit-transition: all 0.25s ease;\n    transition: all 0.25s ease;\n  }\n  &:checked + label {\n    color: #fc842d;\n  }\n  &:not(:checked) + label:after {\n    opacity: 0;\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  &:checked + label:after {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n"]))),V=j.Z.div(u||(u=(0,w.Z)(["\n  align-self: center;\n  @media screen and (min-width: 768px) {\n    align-self: flex-start;\n  }\n  @media screen and (min-width: 1280px) {\n    margin-left: auto;\n  }\n"]))),T=t(2791),D=t(8687),N=t(6373),z=t(1678),_=t(1275),B=t(3329),A=function(){var e=(0,T.useState)(""),n=(0,x.Z)(e,2),t=n[0],i=n[1],r=(0,T.useState)(""),a=(0,x.Z)(r,2),o=a[0],l=a[1],d=(0,T.useState)(""),s=(0,x.Z)(d,2),h=s[0],c=s[1],p=(0,T.useState)(""),u=(0,x.Z)(p,2),g=u[0],w=u[1],j=(0,T.useState)(null),A=(0,x.Z)(j,2),E=A[0],H=A[1],$=(0,D.useDispatch)(),G=(0,D.useSelector)((function(e){return e.user.userDate})),I=(0,D.useSelector)((function(e){return e.login.token})),J=function(e){var n=e.currentTarget,t=n.name,r=n.value;switch(t){case"height":i(r);break;case"age":l(r);break;case"currentWeight":c(r);break;case"desiredWeight":w(r);break;default:return}},K=function(e){H(e.target.value)},L=function(){var e=(0,m.Z)(b().mark((function e(n){return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),$((0,N.q)({height:t,age:o,cWeight:h,dWeight:g,blood:E})),e.prev=2,e.next=5,$((0,_.getDiet)({height:Number(t),age:Number(o),cWeight:Number(h),dWeight:Number(g),blood:Number(E)}));case 5:$((0,z.$)(!0)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(Error);case 11:i(""),l(""),c(""),w(""),H("");case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(n){return e.apply(this,arguments)}}();return(0,B.jsxs)(k,{children:[(0,B.jsx)(y,{children:"Calculate your daily calorie intake right now"}),(0,B.jsxs)(Z,{onSubmit:L,children:[(0,B.jsxs)(v,{children:[(0,B.jsxs)(W,{htmlFor:"height",children:["Height *",I?(0,B.jsx)(C,{pattern:"[0-9]",required:!0,id:"height",type:"number",name:"height",defaultValue:G.height,onChange:J}):(0,B.jsx)(C,{pattern:"[0-9]",required:!0,id:"height",type:"number",name:"height",defaultValue:"",onChange:J})]}),(0,B.jsxs)(W,{htmlFor:"age",children:["Age *",I?(0,B.jsx)(C,{pattern:"[0-9]",id:"age",required:!0,type:"number",name:"age",defaultValue:G.age,onChange:J}):(0,B.jsx)(C,{pattern:"[0-9]",id:"age",required:!0,type:"number",name:"age",defaultValue:"",onChange:J})]}),(0,B.jsxs)(W,{htmlFor:"currentWeight",children:["Current weight *",I?(0,B.jsx)(C,{pattern:"[0-9]",required:!0,id:"currentWeight",type:"number",name:"currentWeight",defaultValue:G.cWeight,onChange:J}):(0,B.jsx)(C,{pattern:"[0-9]",required:!0,id:"currentWeight",type:"number",name:"currentWeight",defaultValue:"",onChange:J})]})]}),(0,B.jsxs)(v,{children:[(0,B.jsxs)(W,{htmlFor:"desiredWeight",children:["Desired weight *",I?(0,B.jsx)(C,{pattern:"[0-9]",id:"desiredWeight",required:!0,name:"desiredWeight",type:"number",defaultValue:G.dWeight,onChange:J}):(0,B.jsx)(C,{pattern:"[0-9]",id:"desiredWeight",required:!0,name:"desiredWeight",type:"number",defaultValue:"",onChange:J})]}),(0,B.jsxs)(W,{htmlFor:"bloodType",required:!0,children:[(0,B.jsx)("p",{style:{marginBottom:"8px"},children:"Blood type *"}),(0,B.jsxs)(q,{children:[(0,B.jsxs)(F,{children:[(0,B.jsx)(S,{type:"radio",name:"bloodType",id:"blood-inp-1",value:1,onChange:K}),(0,B.jsx)("label",{htmlFor:"blood-inp-1",children:"1"})]}),(0,B.jsxs)(F,{children:[(0,B.jsx)(S,{type:"radio",name:"bloodType",id:"blood-inp-2",value:2,onChange:K}),(0,B.jsx)("label",{htmlFor:"blood-inp-2",children:"2"})]}),(0,B.jsxs)(F,{children:[(0,B.jsx)(S,{type:"radio",name:"bloodType",id:"blood-inp-3",value:3,onChange:K}),(0,B.jsx)("label",{htmlFor:"blood-inp-3",children:"3"})]}),(0,B.jsxs)(F,{children:[(0,B.jsx)(S,{type:"radio",name:"bloodType",id:"blood-inp-4",value:4,onChange:K}),(0,B.jsx)("label",{htmlFor:"blood-inp-4",children:"4"})]})]})]})]}),(0,B.jsx)(V,{children:(0,B.jsx)(f.z,{type:"submit",text:"Start losing weight"})})]})]})},E=function(){return(0,B.jsx)(B.Fragment,{children:(0,B.jsx)(A,{})})}}}]);
//# sourceMappingURL=952.2ae20ed2.chunk.js.map