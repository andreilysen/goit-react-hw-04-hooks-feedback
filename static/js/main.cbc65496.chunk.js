(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(5),s=n.n(r),i=(n(11),n(3)),o=n(0),b=function(e){var t=e.title,n=e.children;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:t}),n]})},j=n(6),l=n.n(j),u=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(o.jsx)(o.Fragment,{children:Object.keys(t).map((function(e){return Object(o.jsx)("button",{type:"button",name:e,className:l.a.button,onClick:n,children:e},e)}))})},d=n(2),h=n.n(d),O=function(e){var t=e.total,n=e.goodPercentage,c=e.good,a=e.neutral,r=e.bad;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{className:h.a.item,children:["good : ",c]}),Object(o.jsxs)("li",{className:h.a.item,children:["neutral : ",a]}),Object(o.jsxs)("li",{className:h.a.item,children:["bad : ",r]}),Object(o.jsxs)("li",{className:h.a.item,children:["Total : ",t]}),Object(o.jsxs)("li",{className:h.a.item,children:["Positive feedback : ",n," %"]})]})})},m=function(e){var t=e.message;return Object(o.jsx)("p",{children:t})},x=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(0),s=Object(i.a)(r,2),j=s[0],l=s[1],d=Object(c.useState)(0),h=Object(i.a)(d,2),x=h[0],f=h[1],g=function(){return n+j+x};return Object(o.jsxs)("div",{children:[Object(o.jsx)(b,{title:"Please leave feedback",children:Object(o.jsx)(u,{options:{good:n,neutral:j,bad:x},onLeaveFeedback:function(e){switch(e.target.name){case"good":a((function(e){return e+1}));break;case"neutral":l((function(e){return e+1}));break;case"bad":f((function(e){return e+1}));break;default:return}}})}),Object(o.jsx)(b,{title:"Statistics",children:g()?Object(o.jsx)(O,{total:g(),goodPercentage:Math.round(n/g()*100),good:n,neutral:j,bad:x}):Object(o.jsx)(m,{message:"No feedback given"})})]})};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root"))},2:function(e,t,n){e.exports={item:"Statistic_item__32dii"}},6:function(e,t,n){e.exports={button:"Button_button__3KHlY"}}},[[13,1,2]]]);
//# sourceMappingURL=main.cbc65496.chunk.js.map