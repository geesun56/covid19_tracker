(this.webpackJsonpcovid_19_tracker=this.webpackJsonpcovid_19_tracker||[]).push([[0],{118:function(t,e,a){t.exports={container:"App_container__1MQN3"}},125:function(t,e,a){t.exports={container:"Chart_container__1PIOn"}},139:function(t,e,a){},26:function(t,e,a){t.exports={container:"Cards_container__RT-k2",card:"Cards_card__ALe_T",infected:"Cards_infected__1pby2",recovered:"Cards_recovered__Vtokv",deaths:"Cards_deaths__LJqnx"}},281:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(12),o=a.n(c),i=(a(139),a(15)),s=a(118),l=a.n(s),d=a(319),u=a(322),j=a(334),b=a(326),f=a(325),p=a(324),h=a(124),x=a.n(h),m=a(2),O=Object(d.a)((function(t){return{root:{flexGrow:1,backgroundColor:t.palette.background.paper,width:"100vw"},spacer:{width:"inherit",height:"48px","@media (max-width: 770px)":{height:"100px"}},title:{flexGrow:1,"@media (max-width: 770px)":{width:"100%",padding:"15px 0 5px 20px"}},tabs:{"@media (max-width: 770px)":{alignSelf:"flexEnd"}},toolbar:{minHeight:"48px","@media (max-width: 770px)":{alignSelf:"flexEnd",display:"block",paddingLeft:0}}}}));function v(t){var e=O(),a=t.menu,n=t.setMenu;return Object(m.jsxs)("div",{className:e.root,children:[Object(m.jsx)(u.a,{color:"primary",position:"fixed",children:Object(m.jsxs)(p.a,{className:e.toolbar,children:[Object(m.jsx)(f.a,{variant:"h6",className:e.title,children:"COVID-19 Tracker"}),Object(m.jsxs)(j.a,{className:e.tabs,value:a,onChange:function(t,e){n(e),console.log(e)},"aria-label":"menu",children:[Object(m.jsx)(b.a,{value:"covid",label:"COVID-19"}),Object(m.jsx)(b.a,{value:"vaccine",label:"Vaccination"}),Object(m.jsx)(b.a,{value:"heart",label:"",icon:Object(m.jsx)(x.a,{color:"secondary"})})]})]})}),Object(m.jsx)("div",{className:e.spacer})]})}var g=a(13),y=a.n(g),w=a(18),_=a(26),C=a.n(_),D=a(327),N=a(328),S=a(329),k=a(36),I=a.n(k),B=a(31),E=a.n(B),F=function(t){var e=t.data;return null!=e?Object(m.jsx)("div",{className:C.a.container,children:Object(m.jsxs)(D.a,{container:!0,spacing:3,justify:"center",children:[Object(m.jsx)(D.a,{item:!0,component:N.a,xs:12,md:4,className:E()(C.a.card,C.a.infected),children:Object(m.jsxs)(S.a,{children:[Object(m.jsx)(f.a,{color:"secondary",gutterBottom:!0,children:"Infected"}),Object(m.jsx)(f.a,{variant:"h5",children:Object(m.jsx)(I.a,{start:0,end:e.confirmed.value,duration:2,separator:","})}),Object(m.jsx)(f.a,{color:"primary",children:new Date(e.lastUpdate).toDateString()}),Object(m.jsx)(f.a,{variant:"body2",children:"Number of active cases of COVID-19"})]})}),Object(m.jsx)(D.a,{item:!0,component:N.a,xs:12,md:4,className:E()(C.a.card,C.a.recovered),children:Object(m.jsxs)(S.a,{children:[Object(m.jsx)(f.a,{color:"secondary",gutterBottom:!0,children:"Recovered"}),Object(m.jsx)(f.a,{variant:"h5",children:Object(m.jsx)(I.a,{start:0,end:e.recovered.value,duration:2,separator:","})}),Object(m.jsx)(f.a,{color:"primary",children:new Date(e.lastUpdate).toDateString()}),Object(m.jsx)(f.a,{variant:"body2",children:"Number of recoveries from COVID-19"})]})}),Object(m.jsx)(D.a,{item:!0,component:N.a,xs:12,md:4,className:E()(C.a.card,C.a.deaths),children:Object(m.jsxs)(S.a,{children:[Object(m.jsx)(f.a,{color:"secondary",gutterBottom:!0,children:"Deaths"}),Object(m.jsx)(f.a,{variant:"h5",children:Object(m.jsx)(I.a,{start:0,end:e.deaths.value,duration:2,separator:","})}),Object(m.jsx)(f.a,{color:"primary",children:new Date(e.lastUpdate).toDateString()}),Object(m.jsx)(f.a,{variant:"body2",children:"Number of deaths caused by COVID-19"})]})})]})}):null},V=a(51),T=a.n(V),L=(a(97),"https://covid19.mathdro.id/api"),G=function(){var t=Object(w.a)(y.a.mark((function t(e){var a,n,r,c,o,i,s;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=L,e&&(a="".concat(L,"/countries/").concat(e)),t.prev=2,t.next=5,T.a.get(a);case 5:return n=t.sent,r=n.data,c=r.confirmed,o=r.recovered,i=r.deaths,s=r.lastUpdate,t.abrupt("return",{confirmed:c,recovered:o,deaths:i,lastUpdate:s});case 14:t.prev=14,t.t0=t.catch(2);case 16:case"end":return t.stop()}}),t,null,[[2,14]])})));return function(e){return t.apply(this,arguments)}}(),U=function(){var t=Object(w.a)(y.a.mark((function t(){var e,a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.get("".concat(L,"/daily"));case 3:return e=t.sent,a=e.data,t.abrupt("return",a);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),P=function(){var t=Object(w.a)(y.a.mark((function t(){var e,a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.get("".concat(L,"/countries"));case 3:return e=t.sent,a=e.data.countries,t.abrupt("return",a.map((function(t){return t.name})));case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),R=function(){var t=Object(w.a)(y.a.mark((function t(e){var n,r,c,o,i,s;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("country"!=e){t.next=14;break}return n=a(97),r=n("string"),c=a(186),t.t0=c(),t.next=7,r("https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/locations.csv");case 7:return t.t1=t.sent,t.next=10,t.t0.fromString.call(t.t0,t.t1).then((function(t){return t}));case 10:return o=t.sent,t.abrupt("return",o);case 14:if("vaccination"!=e){t.next=22;break}return t.next=17,T.a.get("https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json");case 17:return i=t.sent,s=i.data,t.abrupt("return",s);case 22:console.log("Invalid Access!");case 23:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),A=a(41),J=a(125),M=a.n(J),W=function(t){var e=Object(n.useState)({}),a=Object(i.a)(e,2),r=a[0],c=a[1],o=t.country,s=t.data,l=s.confirmed,d=s.deaths,u=s.recovered;Object(n.useEffect)((function(){!function(){f.apply(this,arguments)}(),console.log(o),console.log(l)}),[]);var j=r[0]?Object(m.jsx)(A.Line,{data:{labels:r.map((function(t){return t.reportDate})),datasets:[{data:r.map((function(t){return t.confirmed.total})),label:"Confirmed",borderColor:"#3333ff",fill:!0},{data:r.map((function(t){return t.deaths.total})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]},options:{title:{display:!0,text:"Global COVID-19 Status"}}}):null,b=l?Object(m.jsx)(A.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"people",backgroundColor:["rgba(0,0,255, 0.5)","rgba(0,255,0, 0.5)","rgba(255,0,0, 0.5)"],data:[l.value,u.value,d.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(o)}}}):null;return Object(m.jsx)("div",{className:M.a.container,children:o?b:j});function f(){return(f=Object(w.a)(y.a.mark((function t(){var e;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U();case 2:e=t.sent,console.log(e),c(e);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},K=a(82),q=a(330),H=a(332),Q=a(81),X=a.n(Q),z=a(333),Y=function(t){var e=t.handleCountryChange,a=t.countries;return Object(n.useEffect)((function(){}),[]),Object(m.jsx)("div",{children:Object(m.jsx)(q.a,{className:X.a.formControl,children:Object(m.jsx)(z.a,{id:"combo-box-demo",options:a,getOptionLabel:function(t){return t+""},className:X.a.searchBar,renderInput:function(t){return Object(m.jsx)(H.a,Object(K.a)(Object(K.a)({},t),{},{label:"Select a country",variant:"outlined"}))},onChange:function(t,a){e(a)}})})})},Z=a.p+"static/media/covid_image.43554543.jpg",$=Object(d.a)((function(t){return{container:{display:"flex",alignItems:"center",justifyItems:"center",flexDirection:"column",width:"100%",marginTop:"40px"},image:{width:"25%","@media (max-width: 770px)":{width:"90%"}}}}));function tt(t){var e=$(),a=Object(n.useState)(),r=Object(i.a)(a,2),c=r[0],o=r[1],s=Object(n.useState)(),l=Object(i.a)(s,2),d=l[0],u=l[1],j=Object(n.useState)(),b=Object(i.a)(j,2),f=b[0],p=b[1];Object(n.useEffect)((function(){!function(){O.apply(this,arguments)}(),x()}),[]);var h=function(){var t=Object(w.a)(y.a.mark((function t(e){var a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),u(e),t.next=4,G(e);case 4:a=t.sent,o(a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(w.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P().then((function(t){console.log(t),p(t)}));case 2:t.sent;case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return null==c&&null==f?Object(m.jsx)("p",{children:"Loading..."}):Object(m.jsxs)("div",{className:e.container,children:[Object(m.jsx)("img",{className:e.image,alt:"COVID-19",src:Z}),Object(m.jsx)(F,{data:c}),Object(m.jsx)(Y,{countries:f,handleCountryChange:h}),Object(m.jsx)(W,{data:c,country:d})]});function O(){return(O=Object(w.a)(y.a.mark((function t(){var e;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G();case 2:e=t.sent,o(e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}var et=Object(d.a)((function(){return{container:{margin:"50px 0"},card:{margin:"0 0%",width:"auto","@media(max-width: 770px)":{margin:"2% 0 !important"}},total_count:{borderBottom:"10px solid rgba(0,0,255,0.5)"},total_rate:{borderBottom:"10px solid rgba(0,255,0,0.5)"},full_vaccine:{borderBottom:"10px solid rgba(255,0,0,0.5)"}}}));function at(t){var e=et(),a=(t.countryData,t.vaccineData,t.worldData);return Object(n.useEffect)((function(){console.log(t)}),[t]),Object(m.jsx)("div",{className:e.container,children:Object(m.jsxs)(D.a,{container:!0,spacing:3,justify:"center",children:[Object(m.jsx)(D.a,{item:!0,component:N.a,xs:12,md:4,className:E()(e.card,e.total_count),children:Object(m.jsxs)(S.a,{children:[Object(m.jsx)(f.a,{color:"secondary",gutterBottom:!0,children:"Global Vaccination"}),Object(m.jsx)(f.a,{variant:"h5",children:Object(m.jsx)(I.a,{start:0,end:a[a.length-1].total_vaccinations,duration:2,separator:","})}),Object(m.jsx)(f.a,{color:"primary",children:new Date(a[a.length-1].date).toDateString()}),Object(m.jsx)(f.a,{variant:"body2",children:"Number of global COVID-19 vaccination"})]})}),Object(m.jsx)(D.a,{item:!0,component:N.a,xs:12,md:4,className:E()(e.card,e.total_rate),children:Object(m.jsxs)(S.a,{children:[Object(m.jsx)(f.a,{color:"secondary",gutterBottom:!0,children:"Global Full Vaccination (2 shots) "}),Object(m.jsx)(f.a,{variant:"h5",children:Object(m.jsx)(I.a,{start:0,end:a[a.length-1].people_fully_vaccinated,duration:2,separator:","})}),Object(m.jsx)(f.a,{color:"primary",children:new Date(a[a.length-1].date).toDateString()}),Object(m.jsx)(f.a,{variant:"body2",children:"Number of global full vaccination (people who have taken 2 shots)  "})]})}),Object(m.jsx)(D.a,{item:!0,component:N.a,xs:12,md:4,className:E()(e.card,e.full_vaccine),children:Object(m.jsxs)(S.a,{children:[Object(m.jsx)(f.a,{color:"secondary",gutterBottom:!0,children:"Global Vaccination Rate"}),Object(m.jsxs)(f.a,{variant:"h5",children:[a[a.length-1].people_fully_vaccinated_per_hundred,"%"]}),Object(m.jsx)(f.a,{color:"primary",children:new Date(a[a.length-1].date).toDateString()}),Object(m.jsx)(f.a,{variant:"body2",children:"Global vaccination rate for those who have taken two shots"})]})})]})})}var nt=a.p+"static/media/vaccine_image.52e01c88.jpg",rt=a(127),ct=Object(d.a)((function(){return{container:{display:"flex",justifySelf:"center",marginBottom:"80px",width:"85%","@media(max-width: 770px)":{width:"100%"}},lineChart:{width:"100%","@media(max-width: 770px)":{}}}})),ot=["Israel","United States","China","United Kingdom","France","Germany","Russia","South Korea","Japan","United Arab Emirates","World"],it=["#00A5E3","#8DD7BF","#FF96C5","#FF5768","#FFBF65","#F2D4CC","#E77577","#6C88C4","#C05780","#FC6238"];function st(t){var e=t.data,a=t.country,r=Object(n.useState)(),c=Object(i.a)(r,2),o=c[0],s=c[1],l=ct(),d=Object(n.useState)(),u=Object(i.a)(d,2),j=u[0],b=u[1],f=Object(n.useState)(),p=Object(i.a)(f,2),h=p[0],x=p[1];Object(n.useEffect)((function(){!function(t){if(null!=e)if(null==t){var a=[];ot.forEach((function(t){var n=e.find((function(e){return e.country==t}));a[n.country]=n}));var n=function(t,e){var a=t;"Global"==e&&(a.World.data.forEach((function(t){ot.forEach((function(e){null==a[e].data.find((function(e){return e.date==t.date}))&&a[e].data.push({date:t.date,total_vaccinations_per_hundred:null})}))})),ot.forEach((function(t){a[t].data.sort((function(t,e){return new Date(t.date).getTime()-new Date(e.date).getTime()}))})));return a}(a,"Global");s(n),function(t){var e=ot.map((function(e,a){return{data:t[e].data.map((function(t){return t.total_vaccinations_per_hundred})),label:e,borderColor:it[a],fill:!1}}));console.log("dataset",e),b(e)}(n)}else{var r=e.find((function(e){return e.country==t}));x(r),console.log("single: ",t,r)}}(a)}),[t]);var O=o&&j?Object(m.jsx)("div",{className:l.lineChart,children:Object(m.jsx)(A.Line,{data:{labels:o.World.data.map((function(t){return t.date})),datasets:Object(rt.a)(j)},options:{title:{display:!0,text:"Full Vaccination Rate by country"}}})}):null,v=h?Object(m.jsx)("div",{className:l.lineChart,children:Object(m.jsx)(A.Line,{data:{labels:h.data.map((function(t){return t.date})),datasets:[{data:h.data.map((function(t){return t.total_vaccinations})),label:"Total vaccinations",borderColor:it[0],fill:!1},{data:h.data.map((function(t){return t.total_vaccinations_per_hundred})),label:"Total vaccination rate",borderColor:it[1],fill:!1},{data:h.data.map((function(t){return t.daily_vaccinations})),label:"Daily vaccinations",borderColor:it[2],fill:!1}]},options:{title:{display:!0,text:"Vaccination Status in ".concat(a)}}})}):Object(m.jsx)("p",{children:"Do not have the data"});return Object(m.jsx)("div",{className:l.container,children:a?v:O})}var lt=Object(d.a)((function(){return{container:{display:"flex",alignItems:"center",justifyItems:"center",flexDirection:"column",width:"100%",marginTop:"40px"},image:{width:"30%","@media (max-width: 770px)":{width:"90%"}}}}));function dt(){var t=lt(),e=Object(n.useState)(),a=Object(i.a)(e,2),r=a[0],c=a[1],o=Object(n.useState)(),s=Object(i.a)(o,2),l=s[0],d=s[1],u=Object(n.useState)(),j=Object(i.a)(u,2),b=j[0],f=j[1],p=Object(n.useState)(),h=Object(i.a)(p,2),x=h[0],O=h[1],v=Object(n.useState)(),g=Object(i.a)(v,2);g[0],g[1];Object(n.useEffect)((function(){!function(){_.apply(this,arguments)}()}),[]);return b&&l&&r?Object(m.jsxs)("div",{className:t.container,children:[Object(m.jsx)("img",{className:t.image,alt:"COVID-19",src:nt}),Object(m.jsx)(at,{worldData:b,countryData:r,vaccineData:l}),Object(m.jsx)(Y,{countries:l.map((function(t){return t.country})),handleCountryChange:function(t){O(t),console.log("selected Country: ",t)}}),Object(m.jsx)(st,{data:l,country:x})]}):Object(m.jsx)("p",{children:"Loading..."});function _(){return(_=Object(w.a)(y.a.mark((function t(){var e,a,n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R("country");case 2:return e=t.sent,t.next=5,R("vaccination");case 5:a=t.sent,n=a.find((function(t){return"World"==t.country})),d(a),f(n.data),c(e);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}var ut=Object(d.a)((function(){return{container:{display:"flex",alignItems:"center",justifyItems:"center",flexDirection:"column",width:"100%",marginTop:"40px"},image:{width:"30%","@media (max-width: 770px)":{width:"90%"}}}}));function jt(){var t=ut();return Object(n.useEffect)((function(){}),[]),Object(m.jsx)("div",{className:t.container,children:Object(m.jsx)("img",{className:t.image,alt:"COVID-19",src:"https://img.huffingtonpost.com/asset/603de8323f0000d608a3f5b7.jpg?ops=scalefit_630_noupscale"})})}var bt=function(){var t=Object(n.useState)("covid"),e=Object(i.a)(t,2),a=e[0],r=e[1];return Object(m.jsxs)("div",{className:l.a.container,children:[Object(m.jsx)(v,{menu:a,setMenu:r}),"covid"==a?Object(m.jsx)(tt,{}):"vaccine"==a?Object(m.jsx)(dt,{}):"heart"==a?Object(m.jsx)(jt,{}):null]})},ft=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,335)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;a(t),n(t),r(t),c(t),o(t)}))};o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(bt,{})}),document.getElementById("root")),ft()},81:function(t,e,a){t.exports={formControl:"CountryPicker_formControl__2p8f9",searchBar:"CountryPicker_searchBar__1PX6a"}}},[[281,1,2]]]);
//# sourceMappingURL=main.1cf8c0bc.chunk.js.map