"use strict";(self.webpackChunkslim_moms_frontend=self.webpackChunkslim_moms_frontend||[]).push([[566],{7566:function(e,n,r){r.r(n),r.d(n,{default:function(){return _}});var s=r(9457),a=r(8402),i=r(3329);function t(){return(0,i.jsx)(s.x,{display:"flex",justifyContent:"center",children:(0,i.jsx)(a.ko,{height:"80",width:"80",ariaLabel:"progress-bar-loading",wrapperStyle:{},wrapperClass:"progress-bar-wrapper",borderColor:"#3d3d3d",barColor:"#777777"})})}var o,l,d,u,p=r(8687),c=r(5705),m=r(7103),x=r(168),h=r(8789),f=(0,h.ZP)(c.l0)(o||(o=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),j=h.ZP.label(l||(l=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 5px;\n"]))),g=(0,h.ZP)(c.gN)(d||(d=(0,x.Z)(["\n  border: none;\n  border-bottom: 1px solid #e0e0e0;\n  outline-color: blue;\n  width: 280px;\n  hieght: 38px;\n  padding: 5px;\n"]))),w=h.ZP.p(u||(u=(0,x.Z)(["\n  color: red;\n  width: 300px;\n  text-align: justify;\n"]))),b=r(4098),y=function(e){var n=e.name;return(0,i.jsx)(c.Bc,{name:n,render:function(e){return(0,i.jsx)(w,{children:e})}})},Z=m.Ry().shape({email:m.Z_().email("Please enter a valid email").required("Email is a required field"),password:m.Z_().min(3,"Password must be at least 3 characters").max(8,"Password must be at most 8 characters").required("Password is a required field")}),P={email:"",password:""},v=function(){var e=(0,p.useDispatch)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(c.J9,{initialValues:P,onSubmit:function(n,r){var s=n.email,a=n.password,i=r.resetForm;e((0,b.I)({email:s,password:a})),i()},validationSchema:Z,children:(0,i.jsxs)(f,{autoComplete:"off",children:[(0,i.jsxs)(j,{htmlFor:"email",children:[(0,i.jsx)(g,{type:"email",name:"email",placeholder:"Email *"}),(0,i.jsx)(y,{name:"email",component:"p"})]}),(0,i.jsxs)(j,{htmlFor:"password",children:[(0,i.jsx)(g,{type:"password",name:"password",placeholder:"Password *"}),(0,i.jsx)(y,{name:"password",component:"p"})]}),(0,i.jsx)("button",{type:"submit",children:"Log in"}),(0,i.jsx)("button",{type:"button",children:"Register"})]})})})},C=function(e){return e.login.isLoading},L=function(e){return e.login.user},_=function(){var e={user:(0,p.useSelector)(L),isLoading:(0,p.useSelector)(C)}.isLoading;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:"LOG IN"}),(0,i.jsx)(v,{}),e&&(0,i.jsx)(t,{})]})}}}]);
//# sourceMappingURL=566.712c0a88.chunk.js.map