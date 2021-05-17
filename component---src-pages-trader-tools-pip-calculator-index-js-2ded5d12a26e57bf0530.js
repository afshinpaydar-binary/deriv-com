(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{qiUY:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("87im"),c=a("KYPV"),o=a("Wbzz"),i=a("nNOZ"),m=a("jyLw"),u=a("O4Du"),s=a("RQdb"),p=a("DaBS"),b=a("g2Kc"),E=a("Z/CU"),g=function(){var e=Object(o.useStaticQuery)("1809609020"),t=Object(l.useState)("Synthetic"),a=t[0],g=t[1],d=function(e){g(e)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(r.a,null,n.a.createElement(b.e,{jc:"flex-start",ai:"center"},n.a.createElement(u.o,{to:"/trader-tools",color:"grey-5"},Object(E.g)("Traders' tools")),n.a.createElement("img",{src:p.a,alt:Object(E.g)("right arrow"),height:"16",width:"16",style:{margin:"0 8px"}}),n.a.createElement(u.x,null,Object(E.g)("Pip calculator")))),n.a.createElement(r.v,{direction:"column"},n.a.createElement(r.s,{as:"h3",type:"sub-section-title",align:"center",weight:"normal"},Object(E.g)("Our pip calculator helps you to estimate the pip value in your trades so that you can better manage your risk.")),n.a.createElement(r.l,{mt:"8rem",mb:"4rem"},n.a.createElement(r.m,null,n.a.createElement(c.c,{enableReinitialize:!0,initialValues:{accountType:"Synthetic",margin:0,marginSymbol:"USD",symbol:"",volume:"",pointValue:"",optionList:m.d,contractSize:""},validate:i.l,onSubmit:function(e,t){var a=t.setFieldValue;a("margin",Object(i.d)(e)),a("volume",Object(i.g)(e.volume)),a("pointValue",Object(i.g)(e.pointValue))}},(function(e){var t=e.values,l=e.setFieldValue,o=e.setFieldError,p=e.setFieldTouched,g=e.handleBlur,h=e.errors,f=e.touched,y=e.setErrors,j=e.resetForm,O=e.isValid,v=e.dirty;return n.a.createElement(r.e,null,n.a.createElement(r.f,null,n.a.createElement(r.g,{htmlFor:"message"},Object(E.g)("Pip value")),n.a.createElement(r.h,null,n.a.createElement(r.i,null,Object(i.i)(t.margin)),n.a.createElement(r.j,null,t.marginSymbol))),n.a.createElement(r.c,null,n.a.createElement(r.g,null,Object(E.g)("Account type")),n.a.createElement(b.e,{mb:"3rem",mt:"1rem",jc:"space-between",tablet:{height:"unset"}},n.a.createElement(r.k,{active:"Synthetic"===a,onClick:function(){d("Synthetic"),y({}),j({})}},n.a.createElement(u.x,{align:"center"},Object(E.g)("Synthetic"))),n.a.createElement(r.k,{active:"Financial"===a,disabled:"Financial"===a,onClick:function(){d("Financial"),y({}),j({}),l("accountType","Financial"),l("optionList",m.a)}},n.a.createElement(u.x,{align:"center"},Object(E.g)("Financial")))),n.a.createElement(r.d,{option_list:t.optionList,label:Object(E.g)("Symbol"),default_option:m.c,selected_option:t.symbol,id:"symbol",onChange:function(e){l("marginSymbol",Object(i.b)(e)),l("contractSize",Object(i.a)(e)),l("symbol",e)},error:f.symbol&&h.symbol,onBlur:g,autocomplete:"off",contractSize:t.contractSize}),n.a.createElement(r.p,null,n.a.createElement(c.a,{name:"volume",value:t.volume,onChange:function(e){l("volume",e)}},(function(e){var t=e.field;return n.a.createElement(s.a,Object.assign({},t,{id:"volume",type:"text",label:Object(E.g)("Volume"),autoComplete:"off",error:f.volume&&h.volume,onBlur:g,handleError:function(e){l("volume","",!1),o("volume",""),p("volume",!1,!1),e.focus()},maxLength:"8",background:"white"}))}))),n.a.createElement(r.p,null,n.a.createElement(c.a,{name:"pointValue",value:t.pointValue,onChange:function(e){l("pointValue",e)}},(function(e){var t=e.field;return n.a.createElement(s.a,Object.assign({},t,{id:"pointValue",type:"text",label:Object(E.g)("Point Value"),autoComplete:"off",error:f.pointValue&&h.pointValue,onBlur:g,handleError:function(e){l("pointValue","",!1),o("pointValue",""),p("pointValue",!1,!1),e.focus()},maxLength:"15",background:"white"}))}))),n.a.createElement(b.e,{mt:"3rem"},n.a.createElement(r.b,{secondary:!0,type:"submit",disabled:!O||!v},Object(E.g)("Calculate")))))}))),n.a.createElement(r.r,null,n.a.createElement(u.l,{as:"h3",type:"section-title",mb:"0.8rem"},Object(E.g)("How to calculate pip value")),n.a.createElement(u.x,null,Object(E.g)("The pip value for a contract on DMT5 is calculated based on this formula:")),n.a.createElement(u.x,{mb:"1.6rem"},n.a.createElement(E.c,{translate_text:"<0>Pip value = point value × volume × contract size</0>",components:[n.a.createElement("strong",{key:0})]})),n.a.createElement(u.x,{mb:"1.6rem"},Object(E.g)("For synthetic accounts, the pip value is calculated in USD.")),n.a.createElement(u.x,{mb:"40px"},Object(E.g)("For financial accounts, the pip value is in the quote currency for forex pairs.")),n.a.createElement(u.l,{as:"h3",type:"section-title",mb:"0.8rem"},Object(E.g)("Example calculation")),n.a.createElement(u.a,{has_single_state:!0},n.a.createElement(u.b,{header:Object(E.g)("Pip value for synthetic indices"),header_style:r.y,style:r.z,plus:!0},n.a.createElement(u.x,{mb:"16px"},Object(E.g)("Let’s say you want to trade 1 lot of Volatility 75 Index.")),n.a.createElement(b.j.Desktop,null,n.a.createElement(u.s,{data:e.pip_value_formula,alt:Object(E.g)("Margin formula")}),n.a.createElement(u.s,{data:e.pip_info,alt:Object(E.g)("Pip Info")})),n.a.createElement(b.j.Mobile,null,n.a.createElement(u.s,{data:e.pip_value_formula_mobile,alt:Object(E.g)("Margin formula mobile")}),n.a.createElement(u.s,{data:e.pip_info_mobile,alt:Object(E.g)("Pip Info")})),n.a.createElement(r.n,null,n.a.createElement(r.u,null,n.a.createElement("li",null,n.a.createElement("span",null,Object(E.g)("The point value is derived from the current digits of the assets. In the example, the digit is 2, so the point value is 0.01."))),n.a.createElement("li",null,n.a.createElement("span",null,Object(E.g)("The contract size is one standard lot of Volatility 75 index = 1"))))),n.a.createElement(u.x,{mb:"1.6rem",mt:"1.6rem"},n.a.createElement(E.c,{translate_text:"So your pip value is <0>0.01 USD</0>.",components:[n.a.createElement("strong",{key:0})]}))),n.a.createElement(u.b,{header:Object(E.g)("Pip value for forex"),header_style:r.y,style:r.z,plus:!0},n.a.createElement(u.x,{mb:"16px"},Object(E.g)("Let’s say you want to trade 2 lots of EUR/USD.")),n.a.createElement(b.j.Desktop,null,n.a.createElement(u.s,{data:e.pip_value_forex_formula,alt:Object(E.g)("Pip Forex formula")})),n.a.createElement(b.j.Mobile,null,n.a.createElement(u.s,{data:e.pip_value_forex_formula_mobile,alt:Object(E.g)("Pip Forex formula")})),n.a.createElement(r.n,null,n.a.createElement(r.u,null,n.a.createElement("li",null,n.a.createElement("span",null,Object(E.g)("The point value is derived from the current digits of the assets. In the example, the digit is 5, so the point value is 0.00001."))),n.a.createElement("li",null,n.a.createElement("span",null,Object(E.g)("One standard lot of forex = 100,000 units"))))),n.a.createElement(u.x,{mb:"1.6rem",mt:"1.6rem"},n.a.createElement(E.c,{translate_text:"So your pip value is <0>2 USD</0>.",components:[n.a.createElement("strong",{key:0})]})))),n.a.createElement(r.q,null,n.a.createElement(r.t,{secondary:"true",is_deriv_app_link:!0,to:"/mt5",external:"true",target:"_blank",rel:"noopener noreferrer"},Object(E.g)("Go to DMT5 dashboard")))))))},d=a("8k0H");t.default=Object(E.e)()((function(){return n.a.createElement(d.b,null,n.a.createElement(b.h,{title:Object(E.g)("Pip Calculator"),description:Object(E.g)("Pip Calculator")}),n.a.createElement(r.o,{jc:"center",ai:"center"},n.a.createElement(b.b,null,n.a.createElement(u.l,{as:"h1",type:"display-title",color:"white",align:"center"},Object(E.g)("Pip Calculator")))),n.a.createElement(g,null))}))}}]);
//# sourceMappingURL=component---src-pages-trader-tools-pip-calculator-index-js-2ded5d12a26e57bf0530.js.map