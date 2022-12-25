"use strict";(self.webpackChunkslim_moms_frontend=self.webpackChunkslim_moms_frontend||[]).push([[767],{4015:function(n,e,t){t.r(e),t.d(e,{Diary:function(){return An},default:function(){return Fn}});var i,o,r,d,l,a,s,c,x,p,h,f,m,u,g,b,w,Z,j,v,y,k,_,C,D,z,S,Y,V=t(6090),M=t(885),W=t(2791),A=t(9434),F=(t(1778),t(2426)),I=t.n(F),N=(t(3025),t(168)),B=t(6088),E=t(1799),L=t.n(E),P=t(9468),G=B.Z.div(i||(i=(0,N.Z)(["\n  display: flex;\n  gap: 21px;\n  align-items: baseline;\n  font-family: 'Verdana';\n  font-weight: ",";\n  font-size: ",";\n  color: ",";\n  line-height: 17px;\n  @media screen and (min-width: 768px) {\n    margin-bottom: 49px;\n  }\n"])),P.r.fontWeights.bold,P.r.fontSizes.s,P.r.colors.textSecond),O=(0,B.Z)(L())(o||(o=(0,N.Z)(["\n  .form-control {\n    border: none;\n    margin-bottom: 32px;\n    width: 116px;\n    color: ",";\n    font-weight: ",";\n    font-size: 18px;\n    padding: 0;\n    background: transparent;\n\n    @media screen and (min-width: 768px) {\n      font-size: 34px;\n      width: 219px;\n    }\n  }\n  .rdtPicker td.rdtToday:before {\n    border-bottom-color: ",";\n  }\n  .rdtPicker td.rdtActive {\n    background-color: ",";\n  }\n"])),P.r.colors.textSecond,P.r.fontWeights.bold,P.r.colors.accent,P.r.colors.accent),T=B.Z.svg(r||(r=(0,N.Z)(["\n  width: 20px;\n  height: 18px;\n  & :hover {\n    cursor: pointer;\n  }\n"]))),U=t(3439),q=t(3550),H=t(3329),J=function(){var n=(0,A.I0)(),e=(0,W.useState)(I()(new Date)),t=(0,M.Z)(e,2),i=t[0],o=t[1],r=(0,W.useState)(!1),d=(0,M.Z)(r,2),l=d[0],a=d[1],s=I()(new Date("November 15, 2022")),c=I()(new Date);(0,W.useEffect)((function(){n((0,q.G)("".concat(i.format("YYYY.MM.DD"),"Z")))}),[i,n]),console.log(s);return(0,H.jsxs)(G,{children:[(0,H.jsx)(O,{locale:"en-au",closeOnSelect:!0,dateFormat:"DD.MM.YYYY",timeFormat:!1,open:l,value:i,onChange:function(n){if(a(!1),n>c||n<s)return alert("Selected date is not valid"),void o(c);o(n)}}),(0,H.jsx)("button",{onClick:function(){a(!l)},children:(0,H.jsx)(T,{children:(0,H.jsx)("use",{href:U.Z+"#icon-calendar_18x20"})})})]})},K=t(7120),Q=B.Z.div(d||(d=(0,N.Z)(["\n  position: relative;\n  text-align: left;\n  color: ","; //#212121\n  &::after {\n    content: '';\n    bottom: -8px;\n    left: 0;\n    width: 100%;\n    position: absolute;\n    border-bottom: 2px solid #e0e0e0;\n\n    @media screen and (min-width: 768px) {\n      bottom: -20px;\n    }\n  }\n"])),(function(n){return n.theme.colors.textSecond})),R=B.Z.div(l||(l=(0,N.Z)(["\n  position: relative;\n  text-align: left;\n  color: ","; //#212121\n  &::after {\n    content: '';\n    bottom: -8px;\n    left: 0;\n    width: 100%;\n    position: absolute;\n    border-bottom: 2px solid #e0e0e0;\n\n    @media screen and (min-width: 768px) {\n      bottom: -20px;\n    }\n  }\n  @media screen and (min-width: 768px) {\n    text-align: right;\n  }\n"])),(function(n){return n.theme.colors.textSecond})),X=B.Z.button(a||(a=(0,N.Z)(["\n  background: none;\n"]))),$=B.Z.span(s||(s=(0,N.Z)(["\n  font-size: 10px;\n"]))),nn=function(n){var e=n.product,t=(0,A.I0)();return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(Q,{children:null===e||void 0===e?void 0:e.product}),(0,H.jsxs)(R,{children:[null===e||void 0===e?void 0:e.weight,(0,H.jsx)("span",{children:" g"})]}),(0,H.jsxs)(R,{children:[null===e||void 0===e?void 0:e.calories,(0,H.jsx)($,{children:" kcal"})]}),(0,H.jsx)(X,{type:"button",onClick:function(){console.log("delete",e.id),t((0,K.kh)(e._id))},children:(0,H.jsx)("svg",{width:"12px",height:"12px",children:(0,H.jsx)("use",{href:U.Z+"#icon-cross_delete_12x12"})})})]})},en=t(3027),tn=B.Z.ul(c||(c=(0,N.Z)(["\n  font-family: 'Verdana';\n  font-size: ",";\n  font-weight: ",";\n"])),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeights.normal})),on=B.Z.li(x||(x=(0,N.Z)(["\n  display: grid;\n  grid-template-columns: 130px 49px 58px 10px;\n  gap: 8px;\n  align-items: baseline;\n  margin-bottom: 28px;\n\n  @media screen and (min-width: 768px) {\n    grid-template-columns: 240px 106px 106px 12px;\n  }\n"]))),rn=B.Z.div(p||(p=(0,N.Z)(["\n  position: relative;\n  width: 314px;\n  padding-left: 20px;\n  padding-right: 20px;\n  height: 252px;\n  margin-left: auto;\n  margin-right: auto;\n  overflow-y: auto;\n\n  &::-webkit-scrollbar {\n    position: absolute;\n    right: 0;\n    width: 6px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background: #f0f1f3;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 610px;\n    height: 244px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 633px;\n    margin-left: 0;\n    padding-left: 16px;\n    height: 271px;\n  }\n"])),(function(n){return n.theme.colors.blue})),dn=function(){var n=(0,A.v9)(en.D.selectDate),e=(0,A.I0)(),t=(0,A.v9)(en.D.selectProductByDate),i=(0,A.v9)(en.D.selectIsLoading);return(0,W.useEffect)((function(){e((0,K.AW)(n))}),[n,e]),(0,H.jsxs)(rn,{children:[i&&(0,H.jsx)("p",{children:"Loading..."}),(0,H.jsx)(tn,{children:null!==t&&void 0!==t&&t.length?t.map((function(n){return(0,H.jsx)(on,{children:(0,H.jsx)(nn,{product:n})},n._id)})):(0,H.jsx)("p",{children:"No products found for this date"})})]})},ln=B.Z.div(h||(h=(0,N.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 40px 20px 12px 20px;\n  background-color: #f0f1f3;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    padding: 80px 32px 40px 32px;\n  }\n  @media screen and (min-width: 1280px) {\n    flex-direction: column;\n    padding: 149px 94px 116px 94px;\n  }\n"]))),an=B.Z.div(f||(f=(0,N.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin-bottom: 40px;\n  @media screen and (min-width: 768px) {\n    margin-right: 97px;\n  }\n"]))),sn=B.Z.p(m||(m=(0,N.Z)(["\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  color: #212121;\n  text-align: start;\n  margin-bottom: 20px;\n"]))),cn=(0,B.Z)("ul")(u||(u=(0,N.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  list-style-position: inside;\n  margin: 0;\n  padding: 0;\n"]))),xn=B.Z.li(g||(g=(0,N.Z)(["\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  color: #9b9faa;\n  margin-bottom: 20px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]))),pn=B.Z.tr(b||(b=(0,N.Z)(["\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  color: #9b9faa;\n  margin-bottom: 20px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]))),hn=B.Z.p(w||(w=(0,N.Z)(["\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  color: #9b9faa;\n"]))),fn=B.Z.td(Z||(Z=(0,N.Z)(["\n  width: 180px;\n  @media screen and (min-width: 768px) {\n    width: 182px;\n  }\n"]))),mn={products:[{_id:"5d51694802b2373622ff5569",categories:["\u0437\u0435\u0440\u043d\u043e\u0432\u044b\u0435"],weight:100,title:{ru:"\u0413\u0440\u0435\u0447\u043d\u0435\u0432\u044b\u0435 \u0445\u043b\u043e\u043f\u044c\u044f \u041f\u0430\u0441\u0441\u0438\u043c",ua:"\u0413\u0440\u0435\u0447\u0430\u043d\u0456 \u043f\u043b\u0430\u0441\u0442\u0456\u0432\u0446\u0456 \u041f\u0430\u0441\u0441\u0438\u043c"},calories:322,groupBloodNotAllowed:[null,!0,!1,!0,!0],__v:0},{_id:"5d51694802b2373622ff555a",categories:["\u0437\u0435\u0440\u043d\u043e\u0432\u044b\u0435"],weight:100,title:{ru:"\u0413\u0440\u0435\u0447\u043d\u0435\u0432\u0430\u044f \u043a\u0440\u0443\u043f\u0430 (\u043f\u0440\u043e\u0434\u0435\u043b)",ua:"\u0413\u0440\u0435\u0447\u0430\u043d\u0430 \u043a\u0440\u0443\u043f\u0430 (\u043f\u0440\u043e\u0434\u0456\u043b)"},calories:306,groupBloodNotAllowed:[null,!0,!1,!0,!0],__v:0}],dailyCalorie:0,consumedCalories:0,currentDate:"22.12.2022"},un=function(){var n=mn.dailyCalorie-mn.consumedCalories,e=n/mn.dailyCalorie*100;return(0,H.jsxs)(ln,{children:[(0,H.jsxs)(an,{children:[(0,H.jsxs)(sn,{children:["Summary for ",mn.currentDate]}),(0,H.jsxs)(cn,{as:"table",children:[(0,H.jsxs)(pn,{children:[(0,H.jsx)(fn,{children:"Left"}),(0,H.jsxs)("td",{children:[n>0?n:0," kcal"]})]}),(0,H.jsxs)(pn,{children:[(0,H.jsx)(fn,{children:"Consumed"}),(0,H.jsxs)("td",{children:[mn.consumedCalories>0?mn.consumedCalories:0," ","kcal"]})]}),(0,H.jsxs)(pn,{children:[(0,H.jsx)(fn,{children:"Daily rate "}),(0,H.jsxs)("td",{children:[mn.dailyCalorie>0?mn.dailyCalorie:0," kcal"]})]}),(0,H.jsxs)(pn,{children:[(0,H.jsx)(fn,{children:"% of normal"}),(0,H.jsxs)("td",{children:[e>0?Math.round(e):0," %"]})]})]})]}),(0,H.jsxs)(an,{children:[(0,H.jsx)(sn,{children:"Food not recommended"}),mn.dailyCalorie>0?(0,H.jsx)(cn,{as:"ol",children:mn.products.map((function(n){return(0,H.jsx)(xn,{children:n.title.ua},n._id)}))}):(0,H.jsx)(hn,{children:" Your diet will be displayed here "})]})]})},gn=t(1087),bn=(0,B.Z)("div")(j||(j=(0,N.Z)(["\n  display: flex;\n  flex-direction: column;\n  @media screen and (min-width: 1280px) {\nflex-direction: row;\n  }\n"]))),wn=(0,B.Z)("div")(v||(v=(0,N.Z)(["\n  padding-top: 40px;\n  padding-left: 20px;\n  padding-right: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  @media screen and (min-width: 768px) {\n    padding-top: 100px;\n    padding-left: 32px;\n    align-items: start;\n  }\n"]))),Zn=(0,B.Z)("div")(y||(y=(0,N.Z)(["\n  @media screen and (min-width: 768px) {\n    padding-top: 60px;\n  }\n"]))),jn=(0,B.Z)("div")(k||(k=(0,N.Z)(["\n  padding-bottom: 60px;\n"]))),vn=(0,B.Z)("div")(_||(_=(0,N.Z)(["\n  margin-right: 120px;\n"]))),yn=(0,B.Z)("div")(C||(C=(0,N.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),kn=(0,B.Z)(gn.rU)(D||(D=(0,N.Z)(["\n  margin-top: 60px;\n  color: ",";\n  font-weight: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: ",";\n  width: 50px;\n  height: 50px;\n  font-size: ",";\n  background: ",";\n  box-shadow: 0px 4px 10px 0px #fc842d80;\n"])),P.r.colors.white,P.r.fontWeights.bold,P.r.radii.round,P.r.fontSizes.l,P.r.colors.accent),_n=t(3229),Cn=B.Z.div(z||(z=(0,N.Z)(["\n  width: 100%;\n  height: 100%;\n"]))),Dn=B.Z.img(S||(S=(0,N.Z)(["\nposition: absolute;\n    right: -235px;\n    top: 35px;\n    z-index: 1;\n    display: none;\n    @media screen and (min-width: 1280px) {\n    display: block;\n  }\n"]))),zn=B.Z.img(Y||(Y=(0,N.Z)(["\nposition: absolute;\n    left: 399px;\n    top: 662px;\n    z-index: 1;\n    display: none;\n    @media screen and (min-width: 768px) and  (max-width: 1279px){\n    display: block;\n  }\n"]))),Sn=t(1736),Yn=t(115),Vn=t(4668),Mn=t(8785),Wn=function(n){var e=n.children;return(0,H.jsxs)(Cn,{children:[(0,H.jsx)(Dn,{alt:"im",src:Sn,srcSet:"".concat(Yn," 2x")}),(0,H.jsx)(zn,{alt:"im",src:Vn,srcSet:"".concat(Mn," 2x")}),e]})},An=function(){var n=(0,_n.w)().width;return(0,H.jsx)(Wn,{children:(0,H.jsxs)(bn,{children:[(0,H.jsxs)(wn,{children:[(0,H.jsx)(vn,{children:(0,H.jsx)(J,{})}),n>767?(0,H.jsxs)(Zn,{children:[(0,H.jsx)(jn,{children:(0,H.jsx)(V.E,{})}),(0,H.jsx)(dn,{})]}):(0,H.jsxs)(yn,{children:[(0,H.jsx)(dn,{}),(0,H.jsx)(kn,{to:"/add",children:"+"})]})]}),(0,H.jsx)(un,{})]})})},Fn=An},1736:function(n,e,t){n.exports=t.p+"static/media/leaves_desktop-calculator_1x.4e8ca6b57986b5fcaf15.webp"},115:function(n,e,t){n.exports=t.p+"static/media/leaves_desktop-calculator_2x.44b85339baa208051396.webp"},4668:function(n,e,t){n.exports=t.p+"static/media/leaves_tablet-calculator1_1x.5c9b2f258568cf498853.webp"},8785:function(n,e,t){n.exports=t.p+"static/media/leaves_tablet-calculator1_2x.83beea73137bdc7c5709.webp"}}]);
//# sourceMappingURL=767.5fe756e4.chunk.js.map