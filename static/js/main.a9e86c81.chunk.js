(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{190:function(e,t,n){e.exports=n(458)},231:function(e,t){},233:function(e,t){},259:function(e,t){},302:function(e,t){},303:function(e,t){},350:function(e,t){},458:function(e,t,n){"use strict";n.r(t);var r=n(9),a=n.n(r),o=n(188),c=n.n(o),i=n(48),u=n(32),l=n(64),s=n(63),p=n(65),w=n(33),f=n(17),b=n.n(f),h=n(34),m=n(66),d=n.n(m),v=n(67),k=n.n(v),y=n(189),O=n.n(y);function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var E=function(){function e(t){if(Object(i.a)(this,e),!t)throw new Error("Missing provider");this.web3=new O.a(t)}return Object(u.a)(e,null,[{key:"initialize",value:function(){var t=Object(h.a)(b.a.mark(function t(){var n;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getWeb3();case 2:return n=t.sent,t.abrupt("return",new e(n.currentProvider));case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()},{key:"getWeb3",value:function(){var e=Object(h.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=7;break}return window.web3=new window.Web3(window.ethereum),e.next=4,window.ethereum.enable();case 4:return e.abrupt("return",window.web3);case 7:if(!window.web3){e.next=12;break}return window.web3=new window.Web3(window.web3.currentProvider),e.abrupt("return",window.web3);case 12:throw new Error("Web3 not initialized");case 13:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}]),Object(u.a)(e,[{key:"getWeb3",value:function(){var e=Object(h.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.web3);case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getAccounts",value:function(){var e=Object(h.a)(b.a.mark(function e(){var t=this;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,n){t.web3.eth.getAccounts(function(t,r){null!==t?n(t):0===r.length?n(new Error("MetaMask is locked")):e(r)})}));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}]),e}();var x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=d.a.createContext(e);t.displayName="MetaMaskContext";var n=function(e){function n(){var e,t;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return t=Object(l.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(a))),g(Object(w.a)(t),"state",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){g(e,t,n[t])})}return e}({web3:null,accounts:[],error:null},t.props.value)),g(Object(w.a)(t),"timeout",null),g(Object(w.a)(t),"handleWatch",Object(h.a)(b.a.mark(function e(){var n,r,a,o;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.timeout&&clearTimeout(t.timeout),t.setState({awaiting:!0}),n=null,r=null,a=[],e.prev=5,e.next=8,E.initialize();case 8:return o=e.sent,e.next=11,o.getWeb3();case 11:return r=e.sent,e.next=14,o.getAccounts();case 14:a=e.sent,e.next=20;break;case 17:e.prev=17,e.t0=e.catch(5),n=e.t0;case 20:t.setState({web3:r,accounts:a,error:n,awaiting:!1}),t.timeout=setTimeout(t.handleWatch,t.props.delay);case 22:case"end":return e.stop()}},e,null,[[5,17]])}))),t}return Object(p.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.immediate&&this.handleWatch()}},{key:"componentWillUnmount",value:function(){this.timeout&&clearTimeout(this.timeout)}},{key:"render",value:function(){var e={web3:this.state.web3,accounts:this.state.accounts,awaiting:this.state.awaiting,error:this.state.error,openMetaMask:this.handleWatch};return d.a.createElement(t.Provider,j({},this.props,{value:e}))}}]),n}(d.a.Component);return g(n,"propTypes",{value:k.a.any,delay:k.a.number,immediate:k.a.bool}),g(n,"defaultProps",{value:null,delay:3e3,immediate:!1}),{Provider:n,Consumer:t.Consumer}}(),M=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).handleButtonClick=function(e,t){alert("Web3 (".concat(e.version,") is enabled"))},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement("h3",null,"Hello d-app user"),a.a.createElement(x.Provider,{immediate:!0},a.a.createElement(x.Consumer,null,function(t){var n=t.web3,r=t.accounts,o=t.error,c=t.awaiting,i=t.openMetaMask;return a.a.createElement("div",null,!o&&n&&r.length&&a.a.createElement("button",{onClick:function(){return e.handleButtonClick(n,r[0])}},a.a.createElement("code",null,r[0].slice(0,16))," \ud83e\udd8a"),!o&&n&&0===r.length&&a.a.createElement("span",null,"No Wallet \ud83e\udd8a"),!o&&!n&&!c&&a.a.createElement("a",{href:"#",onClick:i},"MetaMask loading..."),!o&&!n&&!c&&a.a.createElement("a",{href:"#",onClick:i},"Please open and allow MetaMask"),o&&o.notInstalled&&a.a.createElement("a",{href:"https://metamask.io/",target:"_blank",rel:"noopener noreferrer"},"Install MetaMask"),o&&!o.notInstalled&&a.a.createElement("a",{href:"#",onClick:i},o.message))})))}}]),t}(r.Component);c.a.render(a.a.createElement(M,null),document.getElementById("root"))}},[[190,1,2]]]);
//# sourceMappingURL=main.a9e86c81.chunk.js.map