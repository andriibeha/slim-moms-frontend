"use strict";(self.webpackChunkslim_moms_frontend=self.webpackChunkslim_moms_frontend||[]).push([[883],{4883:function(n,e,a){a.r(e),a.d(e,{default:function(){return A}});var r,t,i,o,s,d,l,c,p,x,m,f,h=a(885),u=a(2791),g=a(8687),b=a(5705),w=a(8724),j=a(7103),Z=a(168),k=a(6088),y=a(1087),v=k.Z.div(r||(r=(0,Z.Z)(["\n  color: red;\n  width: 300px;\n  text-align: justify;\n"]))),_=k.Z.div(t||(t=(0,Z.Z)(["\n  padding: 40px 20px;\n  @media screen and (min-width: 768px) {\n    padding-top: 160px;\n    padding-left: 32px;\n  }\n"]))),q=k.Z.h1(i||(i=(0,Z.Z)(["\n  font-size: 14px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #fc842d;\n  margin-bottom: 60px;\n  @media screen and (min-width: 768px) {\n    text-align: start;\n  }\n"]))),F=(0,k.Z)(b.l0)(o||(o=(0,Z.Z)(["\n \n"]))),N=k.Z.ul(s||(s=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n   margin-bottom: 60px;\n  @media screen and (min-width: 768px) {\n    margin-bottom: 80px;\n  }\n"]))),P=k.Z.li(d||(d=(0,Z.Z)(["\n  position: relative;\n"]))),C=k.Z.label(l||(l=(0,Z.Z)(["\n  display: flex;\n  height: 16px;\n  color: #9b9faa;\n  letter-spacing: 0.04em;\n  font-weight: 700;\n"]))),S=(0,k.Z)(b.gN)(c||(c=(0,Z.Z)(["\n  height: 20px;\n  width: 100%;\n  outline: none;\n  border: none;\n  border-bottom: 1px solid #e0e0e0;\n  @media screen and (min-width: 768px) {\n    max-width: 240px;\n  }\n"]))),z=k.Z.div(p||(p=(0,Z.Z)(["\n  display: flex;\n  gap: 32px;\n  @media screen and (max-width: 767px) {\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n  }\n"]))),R=k.Z.button(x||(x=(0,Z.Z)(["\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  width: 100%;\n  padding: 13px 25px;\n  background-color: #fc842d;\n  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);\n  border-radius: 30px;\n  border: 2px solid #fc842d;\n  color: #ffffff;\n  cursor: pointer;\n  transition: background-color 250ms, color 250ms;\n  &:hover,\n  &:focus {\n    color: #fc842d;\n    background: transparent;\n  }\n  &:disabled {\n    background: #9b9faa;\n    box-shadow: 0px 4px 10px #9b9faa;\n  }\n  max-width: 180px;\n"]))),E=(0,k.Z)(y.rU)(m||(m=(0,Z.Z)(["\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  width: 100%;\n  padding: 13px 25px;\n  background-color: transparent;\n  border-radius: 30px;\n  border: 2px solid #fc842d;\n  color: #fc842d;\n  cursor: pointer;\n  transition: background-color 250ms, color 250ms;\n  &:hover,\n  &:focus {\n    color: #ffffff;\n    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);\n    background: #fc842d;\n  }\n  &:disabled {\n    background: #9b9faa;\n    box-shadow: 0px 4px 10px #9b9faa;\n  }\n  max-width: 180px;\n"]))),B=k.Z.button(f||(f=(0,Z.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  border: none;\n  background: transparent;\n  padding: 0;\n  color: #9b9faa;\n"]))),D=a(3329),J=function(n){var e=n.name;return(0,D.jsx)(b.Bc,{name:e,render:function(n){return(0,D.jsx)(v,{children:n})}})},L=j.Ry().shape({name:j.Z_().min(3,"Name must be at least 3 characters").max(15,"Name must be at most 8 characters").required("Name is a required field"),email:j.Z_().email("Please enter a valid email").required("Email is a required field"),password:j.Z_().min(3,"Password must be at least 3 characters").max(8,"Password must be at most 8 characters").required("Password is a required field")}),U={name:"",email:"",password:""},V=function(){var n=(0,u.useState)(!1),e=(0,h.Z)(n,2),a=e[0],r=e[1],t=(0,g.useDispatch)();return(0,D.jsx)(D.Fragment,{children:(0,D.jsx)(b.J9,{initialValues:U,onSubmit:function(n,e){var a=n.name,r=n.email,i=n.password,o=e.resetForm;t((0,w.z2)({name:a,email:r,password:i})),console.log({name:a,email:r,password:i}),o()},validationSchema:L,children:(0,D.jsxs)(_,{children:[(0,D.jsx)(q,{children:"Register"}),(0,D.jsxs)(F,{autoComplete:"off",children:[(0,D.jsxs)(N,{children:[(0,D.jsxs)(P,{children:[(0,D.jsx)(C,{htmlFor:"name",children:"Name *"}),(0,D.jsx)(S,{id:"name",name:"name",type:"text"}),(0,D.jsx)(J,{name:"name",component:"p"})]}),(0,D.jsxs)(P,{children:[(0,D.jsx)(C,{htmlFor:"email",children:"Email  *"}),(0,D.jsx)(S,{id:"email",name:"email",type:"text"}),(0,D.jsx)(J,{name:"email",component:"p"})]}),(0,D.jsxs)(P,{children:[(0,D.jsx)(C,{htmlFor:"password",children:"Password *"}),(0,D.jsx)(S,{id:"password",name:"password",type:a?"text":"password"}),(0,D.jsx)(J,{name:"password",component:"p"}),(0,D.jsx)(B,{type:"button",onClick:function(){return r(!a)},show:a,children:"Show password?"})]})]}),(0,D.jsxs)(z,{bg:"green",height:"108px",children:[(0,D.jsx)(R,{type:"submit",children:"Register"}),(0,D.jsx)(E,{to:"/login",children:"Log in"})]})]})]})})})},A=function(){return(0,D.jsx)(V,{})}}}]);
//# sourceMappingURL=883.e76f7d03.chunk.js.map