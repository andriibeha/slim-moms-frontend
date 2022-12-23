"use strict";(self.webpackChunkslim_moms_frontend=self.webpackChunkslim_moms_frontend||[]).push([[952],{3690:function(n,e,t){t.d(e,{m:function(){return v}});t(2791);var i,r,o,l,a,d,s,c,h=t(168),p=t(6088),x=t(4668),u=p.Z.div(i||(i=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 40px 20px 12px 20px;\n  background-color: #f0f1f3;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    padding: 80px 32px 40px 32px;\n    background-image: url(",");\n  }\n  @media screen and (min-width: 1280px) {\n    flex-direction: column;\n    padding: 149px 94px 116px 94px;\n    background-image:  url(","); \n  }\n"])),x,t(1736)),m=p.Z.div(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin-bottom: 40px;\n  @media screen and (min-width: 768px) {\n    margin-right: 97px;\n  }\n"]))),f=p.Z.p(o||(o=(0,h.Z)(["\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  color: #212121;\n  text-align: start;\n  margin-bottom: 20px;\n  }\n"]))),g=(0,p.Z)("ul")(l||(l=(0,h.Z)(["\nlist-style: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  list-style-position: inside;\n  margin: 0;\n  padding: 0;\n  }\n"]))),b=p.Z.li(a||(a=(0,h.Z)(["\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  color: #9b9faa;\n  margin-bottom: 20px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]))),w=p.Z.tr(d||(d=(0,h.Z)(["\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  color: #9b9faa;\n  margin-bottom: 20px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]))),j=p.Z.p(s||(s=(0,h.Z)(["\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  color: #9b9faa;\n"]))),y=p.Z.td(c||(c=(0,h.Z)(["\n  width: 180px;\n  @media screen and (min-width: 768px) {\n    width: 182px;\n  }\n"]))),k=t(3329),Z={products:[{_id:"5d51694802b2373622ff5569",categories:["\u0437\u0435\u0440\u043d\u043e\u0432\u044b\u0435"],weight:100,title:{ru:"\u0413\u0440\u0435\u0447\u043d\u0435\u0432\u044b\u0435 \u0445\u043b\u043e\u043f\u044c\u044f \u041f\u0430\u0441\u0441\u0438\u043c",ua:"\u0413\u0440\u0435\u0447\u0430\u043d\u0456 \u043f\u043b\u0430\u0441\u0442\u0456\u0432\u0446\u0456 \u041f\u0430\u0441\u0441\u0438\u043c"},calories:322,groupBloodNotAllowed:[null,!0,!1,!0,!0],__v:0},{_id:"5d51694802b2373622ff555a",categories:["\u0437\u0435\u0440\u043d\u043e\u0432\u044b\u0435"],weight:100,title:{ru:"\u0413\u0440\u0435\u0447\u043d\u0435\u0432\u0430\u044f \u043a\u0440\u0443\u043f\u0430 (\u043f\u0440\u043e\u0434\u0435\u043b)",ua:"\u0413\u0440\u0435\u0447\u0430\u043d\u0430 \u043a\u0440\u0443\u043f\u0430 (\u043f\u0440\u043e\u0434\u0456\u043b)"},calories:306,groupBloodNotAllowed:[null,!0,!1,!0,!0],__v:0}],dailyCalorie:0,consumedCalories:0,currentDate:"22.12.2022"},v=function(){var n=Z.dailyCalorie-Z.consumedCalories,e=n/Z.dailyCalorie*100;return(0,k.jsxs)(u,{children:[(0,k.jsxs)(m,{children:[(0,k.jsxs)(f,{children:["Summary for ",Z.currentDate]}),(0,k.jsxs)(g,{as:"table",children:[(0,k.jsxs)(w,{children:[(0,k.jsx)(y,{children:"Left"}),(0,k.jsxs)("td",{children:[n>0?n:0," kcal"]})]}),(0,k.jsxs)(w,{children:[(0,k.jsx)(y,{children:"Consumed"}),(0,k.jsxs)("td",{children:[Z.consumedCalories>0?Z.consumedCalories:0," ","kcal"]})]}),(0,k.jsxs)(w,{children:[(0,k.jsx)(y,{children:"Daily rate "}),(0,k.jsxs)("td",{children:[Z.dailyCalorie>0?Z.dailyCalorie:0," kcal"]})]}),(0,k.jsxs)(w,{children:[(0,k.jsx)(y,{children:"% of normal"}),(0,k.jsxs)("td",{children:[e>0?Math.round(e):0," %"]})]})]})]}),(0,k.jsxs)(m,{children:[(0,k.jsx)(f,{children:"Food not recommended"}),Z.dailyCalorie>0?(0,k.jsx)(g,{as:"ol",children:Z.products.map((function(n){return(0,k.jsx)(b,{children:n.title.ua},n._id)}))}):(0,k.jsx)(j,{children:" Your diet will be displayed here "})]})]})}},3952:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var i,r,o,l,a,d,s,c,h,p,x,u=t(5861),m=t(885),f=t(4687),g=t.n(f),b=t(3802),w=t(168),j=t(6088),y=j.Z.div(i||(i=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 610px;\n  padding: 32px 20px 0;\n\n  @media screen and (min-width: 768px) {\n    padding: 100px 32px 0;\n  }\n  @media screen and (min-width: 1280px) {\n    padding: 144px 16px 0;\n  }\n"]))),k=j.Z.h1(r||(r=(0,w.Z)(["\n  color: #212121;\n  font-size: 18px;\n  line-height: 140%;\n  margin-bottom: 34px;\n\n  @media (min-width: 768px) {\n    font-size: 34px;\n    line-height: 1.4;\n    margin-bottom: 68px;\n  }\n"]))),Z=j.Z.form(o||(o=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n"]))),v=j.Z.div(l||(l=(0,w.Z)(["\n  display: flex;\n  flex-flow: column;\n  width: 100%;\n  @media screen and (min-width: 768px) {\n    width: 240px;\n    &:first-of-type {\n      margin-right: 32px;\n      margin-bottom: 60px;\n    }\n  }\n"]))),C=j.Z.label(a||(a=(0,w.Z)(["\n  position: relative;\n  width: 100%;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  color: #9b9faa;\n  margin-bottom: 32px;\n  @media (min-width: 768px) {\n    margin-bottom: 40px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n"]))),_=j.Z.input(d||(d=(0,w.Z)(["\n  display: block;\n  border: none;\n  width: 100%;\n  border-bottom: 1px solid rgb(224, 224, 224);\n  &:focus,\n  &:hover {\n    outline: none;\n  }\n  &:focus,\n  :hover {\n    border-bottom: 1px solid #fc842d;\n  }\n\n  &::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n"]))),W=(j.Z.p(s||(s=(0,w.Z)(["\n  margin-bottom: 8px;\n  border-bottom: 1px solid rgb(224, 224, 224);\n  padding-bottom: 20px;\n"]))),j.Z.ul(c||(c=(0,w.Z)(["\n  display: inline-flex;\n  width: 100%;\n  flex-flow: row no-wrap;\n"])))),F=j.Z.li(h||(h=(0,w.Z)(["\n  margin-left: 24px;\n  &:first-of-type {\n    margin-left: 0;\n  }\n"]))),S=j.Z.input(p||(p=(0,w.Z)(["\n  &:checked,\n  &:not(:checked) {\n    position: absolute;\n    left: -9999px;\n  }\n  &:checked + label,\n  &:not(:checked) + label {\n    position: relative;\n    padding-left: 28px;\n    cursor: pointer;\n    line-height: 17px;\n    display: inline-block;\n    color: #9b9faa;\n  }\n  &:checked + label:before,\n  &:not(:checked) + label:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 20px;\n    height: 20px;\n    border: 1px solid #e0e0e0;\n    border-radius: 100%;\n    background: #ffffff;\n  }\n  &:checked + label:after,\n  &:not(:checked) + label:after {\n    content: '';\n    width: 10px;\n    height: 10px;\n    background: #fc842d;\n    position: absolute;\n    top: 5px;\n    left: 5px;\n    border-radius: 100%;\n    -webkit-transition: all 0.25s ease;\n    transition: all 0.25s ease;\n  }\n  &:checked + label {\n    color: #fc842d;\n  }\n  &:not(:checked) + label:after {\n    opacity: 0;\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  &:checked + label:after {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n"]))),z=j.Z.div(x||(x=(0,w.Z)(["\n  align-self: center;\n  @media screen and (min-width: 768px) {\n    align-self: flex-start;\n  }\n  @media screen and (min-width: 1280px) {\n    margin-left: auto;\n  }\n"]))),D=t(2791),V=t(8687),N=t(6373),q=t(1678),T=t(1275),B=t(3329),A=function(){var n=(0,D.useState)(""),e=(0,m.Z)(n,2),t=e[0],i=e[1],r=(0,D.useState)(""),o=(0,m.Z)(r,2),l=o[0],a=o[1],d=(0,D.useState)(""),s=(0,m.Z)(d,2),c=s[0],h=s[1],p=(0,D.useState)(""),x=(0,m.Z)(p,2),f=x[0],w=x[1],j=(0,D.useState)(null),A=(0,m.Z)(j,2),E=A[0],H=A[1],L=(0,V.useDispatch)(),M=(0,V.useSelector)((function(n){return n.user.userDate})),Y=(0,V.useSelector)((function(n){return n.login.token})),$=function(n){var e=n.currentTarget,t=e.name,r=e.value;switch(t){case"height":i(r);break;case"age":a(r);break;case"currentWeight":h(r);break;case"desiredWeight":w(r);break;default:return}},G=function(n){H(n.target.value)},I=function(){var n=(0,u.Z)(g().mark((function n(e){return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),L((0,N.q)({height:t,age:l,cWeight:c,dWeight:f,blood:E})),n.prev=2,n.next=5,L((0,T.getDiet)({height:Number(t),age:Number(l),cWeight:Number(c),dWeight:Number(f),blood:Number(E)}));case 5:L((0,q.$)(!0)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(2),console.log(Error);case 11:i(""),a(""),h(""),w(""),H("");case 12:case"end":return n.stop()}}),n,null,[[2,8]])})));return function(e){return n.apply(this,arguments)}}();return(0,B.jsxs)(y,{children:[(0,B.jsx)(k,{children:"Calculate your daily calorie intake right now"}),(0,B.jsxs)(Z,{onSubmit:I,children:[(0,B.jsxs)(v,{children:[(0,B.jsxs)(C,{htmlFor:"height",children:["Height *",(0,B.jsx)(_,{pattern:"[0-9]",required:!0,id:"height",type:"number",name:"height",defaultValue:Y?M.height:"",onChange:$})]}),(0,B.jsxs)(C,{htmlFor:"age",children:["Age *",(0,B.jsx)(_,{pattern:"[0-9]",id:"age",required:!0,type:"number",name:"age",defaultValue:Y?M.age:"",onChange:$})]}),(0,B.jsxs)(C,{htmlFor:"currentWeight",children:["Current weight *",(0,B.jsx)(_,{pattern:"[0-9]",required:!0,id:"currentWeight",type:"number",name:"currentWeight",defaultValue:Y?M.cWeight:"",onChange:$})]})]}),(0,B.jsxs)(v,{children:[(0,B.jsxs)(C,{htmlFor:"desiredWeight",children:["Desired weight *",(0,B.jsx)(_,{pattern:"[0-9]",id:"desiredWeight",required:!0,name:"desiredWeight",type:"number",defaultValue:Y?M.dWeight:"",onChange:$})]}),(0,B.jsxs)(C,{htmlFor:"bloodType",required:!0,children:[(0,B.jsx)("p",{style:{marginBottom:"8px"},children:"Blood type *"}),(0,B.jsxs)(W,{children:[(0,B.jsxs)(F,{children:[(0,B.jsx)(S,{type:"radio",name:"bloodType",id:"blood-inp-1",value:1,defaultChecked:!(!Y||"1"!==M.blood),onChange:G}),(0,B.jsx)("label",{htmlFor:"blood-inp-1",children:"1"})]}),(0,B.jsxs)(F,{children:[(0,B.jsx)(S,{type:"radio",name:"bloodType",id:"blood-inp-2",value:2,defaultChecked:!(!Y||"2"!==M.blood),onChange:G}),(0,B.jsx)("label",{htmlFor:"blood-inp-2",children:"2"})]}),(0,B.jsxs)(F,{children:[(0,B.jsx)(S,{type:"radio",name:"bloodType",id:"blood-inp-3",value:3,defaultChecked:!(!Y||"3"!==M.blood),onChange:G}),(0,B.jsx)("label",{htmlFor:"blood-inp-3",children:"3"})]}),(0,B.jsxs)(F,{children:[(0,B.jsx)(S,{type:"radio",name:"bloodType",id:"blood-inp-4",value:4,defaultChecked:!(!Y||"4"!==M.blood),onChange:G}),(0,B.jsx)("label",{htmlFor:"blood-inp-4",children:"4"})]})]})]})]}),(0,B.jsx)(z,{children:(0,B.jsx)(b.zx,{type:"submit",text:"Start losing weight"})})]})]})},E=t(3690),H=function(){return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(A,{}),(0,B.jsx)(E.m,{}),";"]})}},1736:function(n,e,t){n.exports=t.p+"static/media/leaves_desktop-calculator_1x.e728806270974b2e62f8.webp"},4668:function(n,e,t){n.exports=t.p+"static/media/leaves_tablet-calculator1_1x.0447b3c72db97023bd3d.webp"}}]);
//# sourceMappingURL=952.39b7c589.chunk.js.map