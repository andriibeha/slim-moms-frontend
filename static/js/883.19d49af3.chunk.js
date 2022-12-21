"use strict";(self.webpackChunkslim_moms_frontend=self.webpackChunkslim_moms_frontend||[]).push([[883],{4883:function(n,e,a){a.r(e),a.d(e,{default:function(){return V}});var r,t,i,o,s,d,l,c,p,x,m,f,h=a(885),u=a(2791),g=a(5705),b=a(7103),w=a(168),j=a(6088),Z=a(1087),k=j.Z.div(r||(r=(0,w.Z)(["\n  color: red;\n  width: 300px;\n  text-align: justify;\n"]))),y=j.Z.div(t||(t=(0,w.Z)(["\n  padding: 40px 20px;\n  @media screen and (min-width: 768px) {\n    padding-top: 160px;\n    padding-left: 32px;\n  }\n"]))),v=j.Z.h1(i||(i=(0,w.Z)(["\n  font-size: 14px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #fc842d;\n  margin-bottom: 60px;\n  @media screen and (min-width: 768px) {\n    text-align: start;\n  }\n"]))),_=(0,j.Z)(g.l0)(o||(o=(0,w.Z)(["\n \n"]))),q=j.Z.ul(s||(s=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n   margin-bottom: 60px;\n  @media screen and (min-width: 768px) {\n    margin-bottom: 80px;\n  }\n"]))),F=j.Z.li(d||(d=(0,w.Z)(["\n  position: relative;\n"]))),N=j.Z.label(l||(l=(0,w.Z)(["\n  display: flex;\n  height: 16px;\n  color: #9b9faa;\n  letter-spacing: 0.04em;\n  font-weight: 700;\n"]))),P=(0,j.Z)(g.gN)(c||(c=(0,w.Z)(["\n  height: 20px;\n  width: 100%;\n  outline: none;\n  border: none;\n  border-bottom: 1px solid #e0e0e0;\n  @media screen and (min-width: 768px) {\n    max-width: 240px;\n  }\n"]))),C=j.Z.div(p||(p=(0,w.Z)(["\n  display: flex;\n  gap: 32px;\n  @media screen and (max-width: 767px) {\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n  }\n"]))),S=j.Z.button(x||(x=(0,w.Z)(["\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  width: 100%;\n  padding: 13px 25px;\n  background-color: #fc842d;\n  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);\n  border-radius: 30px;\n  border: 2px solid #fc842d;\n  color: #ffffff;\n  cursor: pointer;\n  transition: background-color 250ms, color 250ms;\n  &:hover,\n  &:focus {\n    color: #fc842d;\n    background: transparent;\n  }\n  &:disabled {\n    background: #9b9faa;\n    box-shadow: 0px 4px 10px #9b9faa;\n  }\n  max-width: 180px;\n"]))),R=(0,j.Z)(Z.rU)(m||(m=(0,w.Z)(["\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  width: 100%;\n  padding: 13px 25px;\n  background-color: transparent;\n  border-radius: 30px;\n  border: 2px solid #fc842d;\n  color: #fc842d;\n  cursor: pointer;\n  transition: background-color 250ms, color 250ms;\n  &:hover,\n  &:focus {\n    color: #ffffff;\n    box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);\n    background: #fc842d;\n  }\n  &:disabled {\n    background: #9b9faa;\n    box-shadow: 0px 4px 10px #9b9faa;\n  }\n  max-width: 180px;\n"]))),z=j.Z.button(f||(f=(0,w.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  border: none;\n  background: transparent;\n  padding: 0;\n  color: #9b9faa;\n"]))),E=a(3329),B=function(n){var e=n.name;return(0,E.jsx)(g.Bc,{name:e,render:function(n){return(0,E.jsx)(k,{children:n})}})},J=b.Ry().shape({name:b.Z_().min(3,"Name must be at least 3 characters").max(15,"Name must be at most 8 characters").required("Name is a required field"),email:b.Z_().email("Please enter a valid email").required("Email is a required field"),password:b.Z_().min(3,"Password must be at least 3 characters").max(8,"Password must be at most 8 characters").required("Password is a required field")}),L={name:"",email:"",password:""},U=function(){var n=(0,u.useState)(!1),e=(0,h.Z)(n,2),a=e[0],r=e[1];return(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(g.J9,{initialValues:L,onSubmit:function(n,e){var a=n.name,r=n.email,t=n.password,i=e.resetForm;console.log({name:a,email:r,password:t}),i()},validationSchema:J,children:(0,E.jsxs)(y,{children:[(0,E.jsx)(v,{children:"Register"}),(0,E.jsxs)(_,{autoComplete:"off",children:[(0,E.jsxs)(q,{children:[(0,E.jsxs)(F,{children:[(0,E.jsx)(N,{htmlFor:"name",children:"Name *"}),(0,E.jsx)(P,{id:"name",name:"name",type:"text"}),(0,E.jsx)(B,{name:"name",component:"p"})]}),(0,E.jsxs)(F,{children:[(0,E.jsx)(N,{htmlFor:"email",children:"Email  *"}),(0,E.jsx)(P,{id:"email",name:"email",type:"text"}),(0,E.jsx)(B,{name:"email",component:"p"})]}),(0,E.jsxs)(F,{children:[(0,E.jsx)(N,{htmlFor:"password",children:"Password *"}),(0,E.jsx)(P,{id:"password",name:"password",type:a?"text":"password"}),(0,E.jsx)(B,{name:"password",component:"p"}),(0,E.jsx)(z,{type:"button",onClick:function(){return r(!a)},show:a,children:"Show password?"})]})]}),(0,E.jsxs)(C,{bg:"green",height:"108px",children:[(0,E.jsx)(S,{type:"submit",children:"Register"}),(0,E.jsx)(R,{to:"/login",children:"Log in"})]})]})]})})})},V=function(){return(0,E.jsx)(U,{})}}}]);
//# sourceMappingURL=883.19d49af3.chunk.js.map