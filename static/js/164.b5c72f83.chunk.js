"use strict";(self.webpackChunkslim_moms_frontend=self.webpackChunkslim_moms_frontend||[]).push([[164],{3690:function(n,e,t){t.d(e,{m:function(){return y}});t(2791);var i,o,r,d,l,a,s,c,x=t(168),p=t(6088),h=p.Z.div(i||(i=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 40px 20px 12px 20px;\n  background-color: #f0f1f3;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    padding: 80px 32px 40px 32px;\n  }\n  @media screen and (min-width: 1280px) {\n    flex-direction: column;\n    padding: 149px 94px 116px 94px;\n  }\n"]))),f=p.Z.div(o||(o=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  margin-bottom: 40px;\n  @media screen and (min-width: 768px) {\n    margin-right: 97px;\n  }\n"]))),m=p.Z.p(r||(r=(0,x.Z)(["\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  color: #212121;\n  text-align: start;\n  margin-bottom: 20px;\n"]))),u=(0,p.Z)("ul")(d||(d=(0,x.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  list-style-position: inside;\n  margin: 0;\n  padding: 0;\n"]))),g=p.Z.li(l||(l=(0,x.Z)(["\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  color: #9b9faa;\n  margin-bottom: 20px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]))),b=p.Z.tr(a||(a=(0,x.Z)(["\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  color: #9b9faa;\n  margin-bottom: 20px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]))),w=p.Z.p(s||(s=(0,x.Z)(["\n  font-family: 'Verdana';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 0.04em;\n  color: #9b9faa;\n"]))),Z=p.Z.td(c||(c=(0,x.Z)(["\n  width: 180px;\n  @media screen and (min-width: 768px) {\n    width: 182px;\n  }\n"]))),j=t(3329),v={products:[{_id:"5d51694802b2373622ff5569",categories:["\u0437\u0435\u0440\u043d\u043e\u0432\u044b\u0435"],weight:100,title:{ru:"\u0413\u0440\u0435\u0447\u043d\u0435\u0432\u044b\u0435 \u0445\u043b\u043e\u043f\u044c\u044f \u041f\u0430\u0441\u0441\u0438\u043c",ua:"\u0413\u0440\u0435\u0447\u0430\u043d\u0456 \u043f\u043b\u0430\u0441\u0442\u0456\u0432\u0446\u0456 \u041f\u0430\u0441\u0441\u0438\u043c"},calories:322,groupBloodNotAllowed:[null,!0,!1,!0,!0],__v:0},{_id:"5d51694802b2373622ff555a",categories:["\u0437\u0435\u0440\u043d\u043e\u0432\u044b\u0435"],weight:100,title:{ru:"\u0413\u0440\u0435\u0447\u043d\u0435\u0432\u0430\u044f \u043a\u0440\u0443\u043f\u0430 (\u043f\u0440\u043e\u0434\u0435\u043b)",ua:"\u0413\u0440\u0435\u0447\u0430\u043d\u0430 \u043a\u0440\u0443\u043f\u0430 (\u043f\u0440\u043e\u0434\u0456\u043b)"},calories:306,groupBloodNotAllowed:[null,!0,!1,!0,!0],__v:0}],dailyCalorie:0,consumedCalories:0,currentDate:"22.12.2022"},y=function(){var n=v.dailyCalorie-v.consumedCalories,e=n/v.dailyCalorie*100;return(0,j.jsxs)(h,{children:[(0,j.jsxs)(f,{children:[(0,j.jsxs)(m,{children:["Summary for ",v.currentDate]}),(0,j.jsxs)(u,{as:"table",children:[(0,j.jsxs)(b,{children:[(0,j.jsx)(Z,{children:"Left"}),(0,j.jsxs)("td",{children:[n>0?n:0," kcal"]})]}),(0,j.jsxs)(b,{children:[(0,j.jsx)(Z,{children:"Consumed"}),(0,j.jsxs)("td",{children:[v.consumedCalories>0?v.consumedCalories:0," ","kcal"]})]}),(0,j.jsxs)(b,{children:[(0,j.jsx)(Z,{children:"Daily rate "}),(0,j.jsxs)("td",{children:[v.dailyCalorie>0?v.dailyCalorie:0," kcal"]})]}),(0,j.jsxs)(b,{children:[(0,j.jsx)(Z,{children:"% of normal"}),(0,j.jsxs)("td",{children:[e>0?Math.round(e):0," %"]})]})]})]}),(0,j.jsxs)(f,{children:[(0,j.jsx)(m,{children:"Food not recommended"}),v.dailyCalorie>0?(0,j.jsx)(u,{as:"ol",children:v.products.map((function(n){return(0,j.jsx)(g,{children:n.title.ua},n._id)}))}):(0,j.jsx)(w,{children:" Your diet will be displayed here "})]})]})}},5294:function(n,e,t){t.r(e),t.d(e,{Diary:function(){return gn},default:function(){return bn}});var i,o,r,d,l,a,s,c,x,p,h,f,m,u,g,b,w,Z,j,v,y=t(6090),k=t(885),_=t(2791),C=t(9434),D=(t(1778),t(2426)),z=t.n(D),S=(t(3025),t(168)),Y=t(6088),V=t(1799),M=t.n(V),W=t(9468),A=Y.Z.div(i||(i=(0,S.Z)(["\n  display: flex;\n  gap: 21px;\n  align-items: baseline;\n  font-family: 'Verdana';\n  font-weight: ",";\n  font-size: ",";\n  color: ",";\n  line-height: 17px;\n  @media screen and (min-width: 768px) {\n    margin-bottom: 49px;\n  }\n"])),W.r.fontWeights.bold,W.r.fontSizes.s,W.r.colors.textSecond),E=(0,Y.Z)(M())(o||(o=(0,S.Z)(["\n  .form-control {\n    border: none;\n    margin-bottom: 32px;\n    width: 116px;\n    color: ",";\n    font-weight: ",";\n    font-size: 18px;\n    padding: 0;\n    background: transparent;\n\n    @media screen and (min-width: 768px) {\n      font-size: 34px;\n      width: 219px;\n    }\n  }\n  .rdtPicker td.rdtToday:before {\n    border-bottom-color: ",";\n  }\n  .rdtPicker td.rdtActive {\n    background-color: ",";\n  }\n"])),W.r.colors.textSecond,W.r.fontWeights.bold,W.r.colors.accent,W.r.colors.accent),F=Y.Z.svg(r||(r=(0,S.Z)(["\n  width: 20px;\n  height: 18px;\n  & :hover {\n    cursor: pointer;\n  }\n"]))),I=t(3439),N=t(3550),B=t(3329),L=function(){var n=(0,C.I0)(),e=(0,_.useState)(z()(new Date)),t=(0,k.Z)(e,2),i=t[0],o=t[1],r=(0,_.useState)(!1),d=(0,k.Z)(r,2),l=d[0],a=d[1],s=z()(new Date("November 15, 2022")),c=z()(new Date);(0,_.useEffect)((function(){n((0,N.G)("".concat(i.format("YYYY.MM.DD"),"Z")))}),[i,n]),console.log(s);return(0,B.jsxs)(A,{children:[(0,B.jsx)(E,{locale:"en-au",closeOnSelect:!0,dateFormat:"DD.MM.YYYY",timeFormat:!1,open:l,value:i,onChange:function(n){if(a(!1),n>c||n<s)return alert("Selected date is not valid"),void o(c);o(n)}}),(0,B.jsx)("button",{onClick:function(){a(!l)},children:(0,B.jsx)(F,{children:(0,B.jsx)("use",{href:I.Z+"#icon-calendar_18x20"})})})]})},P=t(7120),G=Y.Z.div(d||(d=(0,S.Z)(["\n  position: relative;\n  text-align: left;\n  color: ","; //#212121\n  &::after {\n    content: '';\n    bottom: -8px;\n    left: 0;\n    width: 100%;\n    position: absolute;\n    border-bottom: 2px solid #e0e0e0;\n\n    @media screen and (min-width: 768px) {\n      bottom: -20px;\n    }\n  }\n"])),(function(n){return n.theme.colors.textSecond})),O=Y.Z.div(l||(l=(0,S.Z)(["\n  position: relative;\n  text-align: left;\n  color: ","; //#212121\n  &::after {\n    content: '';\n    bottom: -8px;\n    left: 0;\n    width: 100%;\n    position: absolute;\n    border-bottom: 2px solid #e0e0e0;\n\n    @media screen and (min-width: 768px) {\n      bottom: -20px;\n    }\n  }\n  @media screen and (min-width: 768px) {\n    text-align: right;\n  }\n"])),(function(n){return n.theme.colors.textSecond})),T=Y.Z.button(a||(a=(0,S.Z)(["\n  background: none;\n"]))),U=Y.Z.span(s||(s=(0,S.Z)(["\n  font-size: 10px;\n"]))),q=t(3229),H=function(n){var e=n.product,t=(0,C.I0)(),i=function(n){var e=(0,_.useState)(""),t=(0,k.Z)(e,2),i=t[0],o=t[1],r=(0,q.w)().width;return(0,_.useEffect)((function(){if(n)return o(r>767?n.length>33?n.slice(0,30)+"...":n:n.length>18?n.slice(0,15)+"...":n)}),[n,r]),i}(e.product);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(G,{children:i}),(0,B.jsxs)(O,{children:[null===e||void 0===e?void 0:e.weight,(0,B.jsx)("span",{children:" g"})]}),(0,B.jsxs)(O,{children:[null===e||void 0===e?void 0:e.calories,(0,B.jsx)(U,{children:" kcal"})]}),(0,B.jsx)(T,{type:"button",onClick:function(){t((0,P.kh)(e._id))},children:(0,B.jsx)("svg",{width:"12px",height:"12px",children:(0,B.jsx)("use",{href:I.Z+"#icon-cross_delete_12x12"})})})]})},J=t(3027),K=Y.Z.ul(c||(c=(0,S.Z)(["\n  font-family: 'Verdana';\n  font-size: ",";\n  font-weight: ",";\n"])),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeights.normal})),Q=Y.Z.li(x||(x=(0,S.Z)(["\n  display: grid;\n  grid-template-columns: 130px 49px 58px 10px;\n  gap: 8px;\n  align-items: stretch;\n  margin-bottom: 30px;\n\n  @media screen and (min-width: 768px) {\n    gap: 30px;\n    grid-template-columns: 240px 107px 106px 12px;\n  }\n"]))),R=Y.Z.div(p||(p=(0,S.Z)(["\n  position: relative;\n  width: 314px;\n  /* padding-left: 20px;\n  padding-right: 20px; */\n  height: 252px;\n  /* margin-left: auto;\n  margin-right: auto; */\n  overflow-y: auto;\n\n  &::-webkit-scrollbar {\n    position: absolute;\n    right: 0;\n    width: 6px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background: #f0f1f3;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 610px;\n    height: 244px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 633px;\n    /* margin-left: 0;\n    padding-left: 16px; */\n    height: 271px;\n  }\n"])),(function(n){return n.theme.colors.blue})),X=function(){var n=(0,C.v9)(J.D.selectDate),e=(0,C.I0)(),t=(0,C.v9)(J.D.selectProductByDate),i=(0,C.v9)(J.D.selectIsLoading);return(0,_.useEffect)((function(){e((0,P.AW)(n))}),[n,e]),(0,B.jsxs)(R,{children:[i&&(0,B.jsx)("p",{children:"Loading..."}),(0,B.jsx)(K,{children:null!==t&&void 0!==t&&t.length?t.map((function(n){return(0,B.jsx)(Q,{children:(0,B.jsx)(H,{product:n})},n._id)})):(0,B.jsx)("p",{children:"No products found for this date"})})]})},$=t(3690),nn=t(1087),en=(0,Y.Z)("div")(h||(h=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  @media screen and (min-width: 1280px) {\nflex-direction: row;\n  }\n"]))),tn=(0,Y.Z)("div")(f||(f=(0,S.Z)(["\n  padding-top: 40px;\n  padding-left: 20px;\n  padding-right: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  @media screen and (min-width: 768px) {\n    padding-top: 100px;\n    padding-left: 32px;\n    align-items: start;\n  }\n"]))),on=(0,Y.Z)("div")(m||(m=(0,S.Z)(["\n  @media screen and (min-width: 768px) {\n    padding-top: 60px;\n  }\n"]))),rn=(0,Y.Z)("div")(u||(u=(0,S.Z)(["\n  padding-bottom: 60px;\n"]))),dn=(0,Y.Z)("div")(g||(g=(0,S.Z)(["\n  margin-right: 120px;\n"]))),ln=(0,Y.Z)("div")(b||(b=(0,S.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),an=(0,Y.Z)(nn.rU)(w||(w=(0,S.Z)(["\n  margin-top: 60px;\n  color: ",";\n  font-weight: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: ",";\n  width: 50px;\n  height: 50px;\n  font-size: ",";\n  background: ",";\n  box-shadow: 0px 4px 10px 0px #fc842d80;\n"])),W.r.colors.white,W.r.fontWeights.bold,W.r.radii.round,W.r.fontSizes.l,W.r.colors.accent),sn=Y.Z.div(Z||(Z=(0,S.Z)(["\n  width: 100%;\n  height: 100%;\n"]))),cn=Y.Z.img(j||(j=(0,S.Z)(["\nposition: absolute;\n    right: -235px;\n    top: 35px;\n    z-index: 1;\n    display: none;\n    pointer-events: none;\n    @media screen and (min-width: 1280px) {\n    display: block;\n  }\n"]))),xn=Y.Z.img(v||(v=(0,S.Z)(["\nposition: absolute;\n    left: 399px;\n    top: 662px;\n    z-index: 1;\n    display: none;\n    pointer-events: none;\n    @media screen and (min-width: 768px) and  (max-width: 1279px){\n    display: block;\n  }\n"]))),pn=t(1736),hn=t(115),fn=t(4668),mn=t(8785),un=function(n){var e=n.children;return(0,B.jsxs)(sn,{children:[(0,B.jsx)(cn,{alt:"im",src:pn,srcSet:"".concat(hn," 2x")}),(0,B.jsx)(xn,{alt:"im",src:fn,srcSet:"".concat(mn," 2x")}),e]})},gn=function(){var n=(0,q.w)().width;return(0,B.jsx)(un,{children:(0,B.jsxs)(en,{children:[(0,B.jsxs)(tn,{children:[(0,B.jsx)(dn,{children:(0,B.jsx)(L,{})}),n>767?(0,B.jsxs)(on,{children:[(0,B.jsx)(rn,{children:(0,B.jsx)(y.E,{})}),(0,B.jsx)(X,{})]}):(0,B.jsxs)(ln,{children:[(0,B.jsx)(X,{}),(0,B.jsx)(an,{to:"/add",children:"+"})]})]}),(0,B.jsx)($.m,{})]})})},bn=gn},1736:function(n,e,t){n.exports=t.p+"static/media/leaves_desktop-calculator_1x.4e8ca6b57986b5fcaf15.webp"},115:function(n,e,t){n.exports=t.p+"static/media/leaves_desktop-calculator_2x.44b85339baa208051396.webp"},4668:function(n,e,t){n.exports=t.p+"static/media/leaves_tablet-calculator1_1x.5c9b2f258568cf498853.webp"},8785:function(n,e,t){n.exports=t.p+"static/media/leaves_tablet-calculator1_2x.83beea73137bdc7c5709.webp"}}]);
//# sourceMappingURL=164.b5c72f83.chunk.js.map