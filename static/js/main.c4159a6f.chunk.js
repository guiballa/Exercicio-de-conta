(this["webpackJsonpexercicio-de-conta"]=this["webpackJsonpexercicio-de-conta"]||[]).push([[0],{33:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return k}));var o=a(4),r=a(5),n=a(7),s=a(6),c=(a(21),a(22),a(23),a(24),a(1)),i=a(8),l=a.n(i),u=a(17),d=a(2),h=function(t){Object(n.a)(a,t);var e=Object(s.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(d.jsx)(u.a,{title:this.props.titulo,style:p.card,children:Object(d.jsx)("div",{className:"".concat(p.inner," ").concat(this.props.className),children:this.props.children})})}}]),a}(c.Component),p={card:{backgroundColor:"var(--blue-100)"},inner:"border-round bg-orange-50 w-8 p-2 m-auto",className:""};h.defaultProps={titulo:"Resolva a conta se puder!"};var b=a(9),j=function(t){Object(n.a)(a,t);var e=Object(s.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"".concat(this.props.className," ").concat(m.botoes),children:Object(d.jsxs)("div",{className:"flex justify-content-evenly",children:[Object(d.jsx)(b.a,{label:"Iniciar Jogo",className:"p-button-raised p-button-outlined",icon:"pi pi-check",onClick:this.props.fIniciar}),Object(d.jsx)(b.a,{label:"Encerrar Jogo",className:"p-button-raised p-button-outlined p-button-danger",icon:"pi pi-times",onClick:this.props.fEncerrar}),Object(d.jsx)(b.a,{label:"Zerar pontua\xe7\xe3o",className:"p-button-raised p-button-outlined p-button-warning",icon:"pi pi-times",onClick:this.props.fZerar})]})})}}]),a}(c.Component),m={botoes:""},f=a(19),v=function(t){Object(n.a)(a,t);var e=Object(s.a)(a);function a(t){var r;return Object(o.a)(this,a),(r=e.call(this,t)).valorInicial=1,r.valorFinal=20,r.timerGeral=null,r.timerSegundoASegundo=null,r.operacoes=[{simbolo:"+",operacao:function(t,e){return t+e}},{simbolo:"-",operacao:function(t,e){return t-e}},{simbolo:"*",operacao:function(t,e){return t*e}}],r.gerarConta=function(){var t=Math.floor(Math.random()*r.valorFinal)+r.valorInicial,e=Math.floor(Math.random()*r.valorFinal)+r.valorInicial,a=Math.floor(Math.random()*r.operacoes.length);return{n1:t,n2:e,simbolo:r.operacoes[a].simbolo,resultado:r.operacoes[a].operacao(t,e)}},r.gerarAlternativas=function(t){for(var e=[t];e.length<5;){var a=Math.floor(Math.random()*r.valorFinal+r.valorInicial);e.includes(a)||e.push(a)}return f.a.shuffle(e)},r.gerarJogo=function(){var t=r.gerarConta(),e=t.n1,a=t.n2,o=t.simbolo,n=t.resultado,s=r.gerarAlternativas(n);r.setState({n1:e,n2:a,resultado:n,simbolo:o,alternativas:s,tempoRestante:5})},r.encerrarJogo=function(){clearInterval(r.timerGeral),clearInterval(r.timerSegundoASegundo)},r.iniciarRodada=function(){clearInterval(r.timerGeral),clearInterval(r.timerSegundoASegundo);var t,e;r.timerGeral=(t=r.gerarJogo,e=r.state.intervaloDeAtualizacao,t(),r.timerSegundoASegundo=setInterval((function(){r.setState({tempoRestante:r.state.tempoRestante-1})}),1e3),setInterval(t,e))},r.state={alternativas:Array(5).fill(void 0),intervaloDeAtualizacao:5e3,tempoRestante:5},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){"on"===this.props.status&&this.iniciarRodada()}},{key:"componentWillUnmount",value:function(){this.encerrarJogo()}},{key:"render",value:function(){var t=this,e=Object(d.jsx)("div",{className:O.conta,children:[this.state.n1,this.state.simbolo,this.state.n2,"=","..."].map((function(t,e){return Object(d.jsx)("div",{className:O.valor,children:t},e.toString())}))}),a=Object(d.jsx)("div",{className:O.alternativas,children:this.state.alternativas.map((function(e,a){return Object(d.jsx)(b.a,{label:null===e||void 0===e?void 0:e.toString(),className:"".concat(O.valor," ").concat(O.alternativa),onClick:function(){t.iniciarRodada(),t.props.fAtualizarPontuacao(t.state.resultado===e)}},a.toString())}))}),o=Object(d.jsx)("div",{className:O.tempoRestante,children:this.state.tempoRestante});return Object(d.jsxs)("div",{children:[e,a,o]})}}]),a}(c.Component),O={conta:"flex justify-content-center align-items-center border-round bg-orange-200 shadow-2 h-4rem",valor:"flex justify-content-center align-items-center border-round border-1 border-400 h-3rem w-3rem",alternativas:"flex justify-content-evenly align-items-center border-round shadow-2 h-4rem mt-2",alternativa:"p-button-outlined",tempoRestante:"flex justify-content-center align-items-center h-4rem text-3x1"},g=function(t){Object(n.a)(a,t);var e=Object(s.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"".concat(x.texto," ").concat(this.props.className),children:this.props.texto})}}]),a}(c.Component),x={texto:"flex justify-content-center align-items-center border-round bg-red-100 shadow-2 h-4rem"},y=a(11),N=a(18),S=function(t){Object(n.a)(a,t);var e=Object(s.a)(a);function a(t){var r;return Object(o.a)(this,a),(r=e.call(this,t)).colecoes={acertos:{titulo:"Acertos",dados:[],cor:"#2196F3"},erros:{titulo:"Erros",dados:[],cor:"#F44336"}},r.contador=[],r.atualizarDados=function(){r.colecoes={acertos:{titulo:"Acertos",dados:r.props.zerar?[]:[].concat(Object(y.a)(r.colecoes.acertos.dados),[r.props.acertos]),cor:"#2196F3"},erros:{titulo:"Erros",dados:r.props.zerar?[]:[].concat(Object(y.a)(r.colecoes.erros.dados),[r.props.erros]),cor:"#44336"}},r.contador=r.props.zerar?[]:[].concat(Object(y.a)(r.contador),[r.props.contador])},r.state={tension:.4,fill:!1},r}return Object(r.a)(a,[{key:"render",value:function(){return this.atualizarDados(),Object(d.jsx)(N.a,{options:{animation:{duration:0},scales:{y:{ticks:{stepsize:1}}}},type:"line",data:{labels:this.contador,datasets:[{label:this.colecoes.acertos.titulo,data:this.colecoes.acertos.dados,fill:this.state.fill,borderColor:this.colecoes.acertos.cor,tension:this.state.tension},{label:this.colecoes.erros.titulo,data:this.colecoes.erros.dados,fill:this.state.fill,borderColor:this.colecoes.erros.cor,tension:this.state.tension}]}})}}]),a}(c.PureComponent),k=function(t){Object(n.a)(a,t);var e=Object(s.a)(a);function a(){var t;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={status:"off",acertos:0,erros:0,contador:0},t.alterarStatus=function(e){t.setState({status:e})},t.atualizarPontuacao=function(e){t.setState(e?{acertos:t.state.acertos+1}:{erros:t.state.erros+1}),t.setState({contador:t.state.contador+1})},t.zerarPontuacao=function(){t.setState({acertos:0,erros:0,contador:0})},t}return Object(r.a)(a,[{key:"render",value:function(){var t=this;return Object(d.jsxs)("div",{className:"grid justify-content-center",children:[Object(d.jsx)("div",{className:"col-12 lg:col-6 ",children:Object(d.jsxs)(h,{className:"h-18rem",children:[Object(d.jsx)("div",{className:"h-12rem",children:"on"===this.state.status?Object(d.jsx)(v,{status:this.state.status,fAtualizarPontuacao:this.atualizarPontuacao}):Object(d.jsx)("div",{className:"flex justify-content-center align-items-center h-full",children:Object(d.jsx)(g,{texto:"Clique para iniciar",className:"md:w-8 w-10"})})}),Object(d.jsx)(j,{fIniciar:function(){return t.alterarStatus("on")},fEncerrar:function(){return t.alterarStatus("off")},fZerar:function(){return t.zerarPontuacao()},className:"mt-5"})]})}),Object(d.jsx)("div",{className:"col-12 lg:col-6",children:Object(d.jsx)(h,{titulo:"Sua pontua\xe7\xe3o",className:"h-18rem",children:Object(d.jsx)(S,{acertos:this.state.acertos,erros:this.state.erros,contador:this.state.contador,zerar:0===this.state.acertos&&0===this.state.erros})})})]})}}]),a}(c.Component);l.a.render(Object(d.jsx)(k,{}),document.querySelector("#root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.c4159a6f.chunk.js.map