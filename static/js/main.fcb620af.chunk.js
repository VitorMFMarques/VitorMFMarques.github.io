(this["webpackJsonpjoker-tracker"]=this["webpackJsonpjoker-tracker"]||[]).push([[0],{55:function(e,a,t){},56:function(e,a,t){},63:function(e,a,t){"use strict";t.r(a);var s=t(2),c=t(0),n=t.n(c),i=t(7),l=t.n(i),r=(t(55),t(10)),o=(t(56),t(91)),j=t(99),d=t(38),m=t.n(d),b=t(65),u=t(94),O=t(41),x=t.n(O),N=t(42),h=t.n(N),v=t(43),p=t.n(v),f=t(98),B=t(97),k=t(96),C=t(95),I=t(45),T=t.n(I),g=t.p+"static/media/universe.419e0fc7.jpg",R=t(29),J=t.p+"static/media/tick.a830ac2f.mp3",y=t.p+"static/media/end.7d7dc550.mp3",S=t.p+"static/media/joker.60f7268a.wav",w=t.p+"static/media/correct.a673b70c.wav",A=t(44),z=t.n(A),E=void 0,L=!1,P=30,K=30,M=void 0,q=60,D=0,F=!1;var G=function(){var e=Object(c.useState)(!1),a=Object(r.a)(e,2),t=a[0],n=a[1],i=Object(c.useState)(1),l=Object(r.a)(i,2),d=l[0],O=l[1],N=Object(c.useState)(30),v=Object(r.a)(N,2),I=v[0],A=v[1],G=Object(c.useState)(100),H=Object(r.a)(G,2),Q=H[0],U=H[1],V=Object(c.useState)("scale(1)"),W=Object(r.a)(V,2),X=W[0],Y=W[1],Z=Object(c.useState)(100),$=Object(r.a)(Z,2),_=$[0],ee=$[1],ae=Object(c.useState)(0),te=Object(r.a)(ae,2),se=te[0],ce=te[1],ne=Object(c.useState)(0),ie=Object(r.a)(ne,2),le=ie[0],re=ie[1],oe=Object(c.useState)(60),je=Object(r.a)(oe,2),de=je[0],me=je[1],be=Object(c.useState)(!1),ue=Object(r.a)(be,2),Oe=ue[0],xe=ue[1],Ne=Object(c.useState)("scale(1)"),he=Object(r.a)(Ne,2),ve=he[0],pe=he[1],fe=Object(R.a)(J),Be=Object(r.a)(fe,1)[0],ke=Object(R.a)(y),Ce=Object(r.a)(ke,1)[0],Ie=Object(R.a)(w),Te=Object(r.a)(Ie,1)[0],ge=Object(R.a)(S),Re=Object(r.a)(ge,1)[0],Je=function(e){P=30,e>4&&(P=40),e>8&&(P=50),K=P,A(P),U(100)};return Object(s.jsxs)("div",{className:"App",style:{backgroundImage:"url("+g+")",backgroundSize:"cover",height:"100vh",color:"#f5f5f5"},children:[Object(s.jsxs)(o.a,{container:!0,spacing:3,children:[Object(s.jsx)(o.a,{item:!0,xs:12,children:Object(s.jsxs)(o.a,{container:!0,spacing:3,className:"RoundContainer",children:[Object(s.jsx)(o.a,{item:!0,xs:3,sm:3,md:4,lg:5,className:"PrevRoundContainer",children:Object(s.jsx)(j.a,{className:"RoundButton","aria-label":"delete",size:"small",onClick:function(){!L&&d>1&&(O(d-1),Je(d-1))},disabled:t,children:Object(s.jsx)(x.a,{className:"ButtonIcon"})})}),Object(s.jsx)(o.a,{item:!0,xs:6,sm:6,md:4,lg:2,children:Object(s.jsxs)(b.a,{className:"RoundLabel",variant:"h4",component:"h4",children:["Ronda ",d]})}),Object(s.jsx)(o.a,{item:!0,xs:3,sm:3,md:4,lg:5,className:"NextRoundContainer",children:Object(s.jsx)(j.a,{className:"RoundButton","aria-label":"delete",size:"small",onClick:function(){!L&&d<12&&(O(d+1),Je(d+1))},disabled:t,children:Object(s.jsx)(h.a,{className:"ButtonIcon"})})})]})}),Object(s.jsxs)(o.a,{item:!0,xs:12,className:"TimerContainer",children:[Object(s.jsx)(u.a,{variant:"determinate",value:Q,className:"TimerProgress"}),Object(s.jsx)(b.a,{className:"TimerLabel",variant:"h3",component:"h3",gutterBottom:!0,style:{transform:X},children:I})]}),Object(s.jsxs)(o.a,{item:!0,xs:12,className:"TimerActionsContainer",children:[Object(s.jsx)(j.a,{"aria-label":"delete",size:"small",className:"TimeButton",onClick:function(){"undefined"!==typeof E&&clearInterval(E),E=setInterval((function(){K-1>=0?((K-=1)<11&&Be(),A(K),U(parseInt(K/P*100)),Y("scale(1.5)"),setTimeout((function(){return Y("scale(1)")}),500)):(Ce(),Y("scale(1)"),clearInterval(E),n(L=!1),Je(d))}),1e3),n(L=!0)},children:Object(s.jsx)(m.a,{className:"ButtonIcon"})}),Object(s.jsx)(j.a,{"aria-label":"delete",size:"small",className:"TimeButton",onClick:function(){"undefined"!==typeof E&&clearInterval(E),n(L=!1),Je(d)},children:Object(s.jsx)(p.a,{className:"ButtonIcon"})})]}),Object(s.jsx)(o.a,{item:!0,xs:12,className:"TimerActionsContainer",children:Object(s.jsxs)(j.a,{variant:"extended",className:"JokerButton",onClick:function(){"undefined"!==typeof E&&clearInterval(E),n(L=!1),P+=15,A(K+=15),U(parseInt(K/P*100))},children:[Object(s.jsx)("div",{className:"JokerTop"}),"JOKER",Object(s.jsx)("div",{className:"JokerBottom"})]})}),Object(s.jsx)(o.a,{item:!0,xs:12,className:"BonusRoundContainer",children:Object(s.jsx)(j.a,{variant:"extended",className:"BonusRoundButton",onClick:function(){M=void 0,ce(0),re(0),D=0,me(q=60),ee(100),xe(!0)},disabled:t,children:"Ronda B\xf3nus"})})]}),Object(s.jsxs)(f.a,{disableBackdropClick:!0,open:Oe,onClose:function(){return xe(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",className:"BonusRoundContainer",children:[Object(s.jsx)(j.a,{"aria-label":"delete",size:"small",className:"CloseBonusPopup",onClick:function(){xe(!1),F=!1,clearInterval(M),M=void 0},children:Object(s.jsx)(z.a,{className:"ButtonIcon"})}),Object(s.jsx)(C.a,{id:"alert-dialog-title",className:"BonusRoundTitle",children:"Ronda B\xf3nus"}),Object(s.jsx)(k.a,{className:"BonusRoundContent",children:Object(s.jsxs)(o.a,{container:!0,spacing:3,children:[Object(s.jsxs)(o.a,{item:!0,xs:12,className:"BonusRoundLabels",children:[Object(s.jsx)("div",{className:"JokerAwardedContainer",children:Object(s.jsxs)(j.a,{variant:"extended",className:"JokerAwarded",disabled:!0,children:[Object(s.jsx)("div",{className:"JokerTop"}),"JOKER",Object(s.jsx)("div",{className:"JokerBottom"}),Object(s.jsx)("div",{className:"JokerAwardedOverflow",style:{left:le+"%"}})]})}),Object(s.jsx)("div",{className:"JokerAwardedContainer",style:{marginTop:20},children:Object(s.jsxs)(j.a,{variant:"extended",className:"JokerAwarded",disabled:!0,children:[Object(s.jsx)("div",{className:"JokerTop"}),"JOKER",Object(s.jsx)("div",{className:"JokerBottom"}),Object(s.jsx)("div",{className:"JokerAwardedOverflow",style:{left:se+"%"}})]})})]}),Object(s.jsxs)(o.a,{item:!0,xs:12,className:"BonusTimerContainer",children:[Object(s.jsx)(u.a,{variant:"determinate",value:_,className:"BonusRoundTimerProgress"}),Object(s.jsx)(b.a,{className:"BonusRoundTimerLabel",variant:"h3",component:"h3",gutterBottom:!0,style:{transform:ve},children:de})]}),Object(s.jsx)(o.a,{item:!0,xs:12,className:"TimerActionsContainer",children:Object(s.jsx)(j.a,{"aria-label":"delete",size:"small",className:"TimeButton",onClick:function(){"undefined"===typeof M&&D<12&&(M=setInterval((function(){q-1>=0?(me(q-=1),ee(parseInt(q/60*100)),q<10&&Be(),pe("scale(1.3)"),setTimeout((function(){return pe("scale(1)")}),500)):(Ce(),pe("scale(1)"),F=!1,clearInterval(M),me(q=60),ee(parseInt(q/60*100)))}),1e3),F=!0)},children:Object(s.jsx)(m.a,{className:"ButtonIcon"})})}),Object(s.jsx)(o.a,{item:!0,xs:12,className:"BonusTimerActionsContainer",children:Object(s.jsxs)(j.a,{variant:"extended",className:"BonusTimerCorrectButton",onClick:function(){F&&D<11&&(5!==(D+=1)&&10!==D&&Te(),D<6?ce(parseInt(D/5*100)):re(parseInt((D-5)/5*100)),5===D&&Re(),10===D&&(Re(),F=!1,clearInterval(M)))},children:[Object(s.jsx)(T.a,{className:"BonusTimerCorrectButtonIcon"}),"Correto"]})})]})}),Object(s.jsx)(B.a,{})]})]})};l.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(G,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.fcb620af.chunk.js.map