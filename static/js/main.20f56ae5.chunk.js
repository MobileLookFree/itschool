(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(41)},20:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},38:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(11),l=a.n(r),i=(a(20),a(4)),o=a(5),m=a(7),s=a(6),u=a(8),d=a(44),E=a(43),h=a(10),b=Object(h.a)();a(22);var p=function(e){return c.a.createElement("div",{className:"header-back"},e.children)},v=a(42);a(24);window.onload=function(){var e=document.getElementById("mobile"),t=document.getElementById("openNavButton");window.addEventListener("click",function(a){a.target==t&&"dropdown-menu"==e.className?e.className+=" mobile":e.className="dropdown-menu",a.target!=t&&"dropdown-menu mobile"==e.className&&(e.className="dropdown-menu")})};var f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).state={chatVisible:!1,techBack:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({chatVisible:!0})}},{key:"render",value:function(){return c.a.createElement("nav",null,c.a.createElement("div",{className:"home-button",title:"\u041d\u0430 \u0413\u043b\u0430\u0432\u043d\u0443\u044e"},c.a.createElement(v.a,{to:"/"},c.a.createElement("i",{className:"material-icons"},"brightness_1"))),c.a.createElement("a",{href:"javascript:void(0);",className:"header-menu-button",id:"openNavButton"},"\u041c\u0435\u043d\u044e"),c.a.createElement("div",{className:"header-menu"},c.a.createElement(v.a,{to:"/news"},"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"),c.a.createElement(v.a,{to:"/news"},"\u041a\u0443\u0440\u0441\u044b"),c.a.createElement(v.a,{to:"/news"},"\u0428\u043a\u043e\u043b\u044b"),c.a.createElement(v.a,{to:"/news"},"\u0420\u0435\u0441\u0443\u0440\u0441\u044b"),this.state.chatVisible&&c.a.createElement("a",{href:""},"\u0427\u0430\u0442"),c.a.createElement(v.a,{to:"/news"},"\u041e \u043d\u0430\u0441")),c.a.createElement("div",{className:"authorization",title:"\u0412\u043e\u0439\u0442\u0438"},c.a.createElement(v.a,{to:"/login"},c.a.createElement("i",{className:"material-icons"},"person"))),c.a.createElement("div",{className:"dropdown-menu",id:"mobile"},c.a.createElement(v.a,{to:"/news"},"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"),c.a.createElement(v.a,{to:"/news"},"\u041a\u0443\u0440\u0441\u044b"),c.a.createElement(v.a,{to:"/news"},"\u0428\u043a\u043e\u043b\u044b"),c.a.createElement(v.a,{to:"/news"},"\u0420\u0435\u0441\u0443\u0440\u0441\u044b"),this.state.chatVisible&&c.a.createElement("a",{href:""},"\u0427\u0430\u0442"),c.a.createElement(v.a,{to:"/news"},"\u041e \u043d\u0430\u0441")))}}]),t}(n.Component);a(29);var w=function(e){return c.a.createElement("div",{className:"container"},e.children)};a(31);var j=function(e){return c.a.createElement("div",{className:"footer-back"},e.children)};a(33);var O=function(e){return c.a.createElement("div",null,c.a.createElement("h1",null,e.title),c.a.createElement("h2",null,e.subtitle))};var N=function(e){return c.a.createElement("div",null,c.a.createElement(O,{title:"\u0422\u0435\u043a\u0441\u0442 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u043e\u0439"}))},g=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(O,{title:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438 \u0448\u043a\u043e\u043b\u044b",subtitle:"\u0417\u0430 \u043d\u0435\u0434\u0435\u043b\u044e"}))}}]),t}(n.Component),y=(a(35),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"login-card"},c.a.createElement("h1",{className:"login"},"\u0412\u043e\u0439\u0434\u0438\u0442\u0435"),c.a.createElement("div",{className:"user-avatar"}),c.a.createElement("input",{type:"text",placeholder:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430"}),c.a.createElement("input",{type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),c.a.createElement("button",{className:"enter-login"},"\u0412\u043e\u0439\u0442\u0438"),c.a.createElement("a",{href:"",className:"registration"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"))}}]),t}(n.Component)),k=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(d.a,{history:b},c.a.createElement("div",null,c.a.createElement(p,null,c.a.createElement(w,null,c.a.createElement(f,null))),c.a.createElement(w,null,c.a.createElement(E.a,{exact:!0,path:"/",component:N}),c.a.createElement(E.a,{exact:!0,path:"/news",component:g}),c.a.createElement(E.a,{exact:!0,path:"/login",component:y})),c.a.createElement(j,null)))}}]),t}(n.Component),B=(a(38),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h2",{className:"min-width-message"},"\u042d\u043a\u0440\u0430\u043d \u0432\u0430\u0448\u0435\u0433\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u0438\u043c\u0435\u0435\u0442 \u043e\u0447\u0435\u043d\u044c \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u043e\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435.",c.a.createElement("br",null),"\u041f\u043e\u0432\u0435\u0440\u043d\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u043e, \u0447\u0442\u043e\u0431\u044b \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441\u0430\u0439\u0442\u043e\u043c:)"),c.a.createElement("div",{className:"rotate-image"},c.a.createElement("i",{className:"material-icons"},"rotate_right")))}}]),t}(n.Component));window.innerWidth<"310"?(l.a.render(c.a.createElement("div",null,c.a.createElement(B,null)),document.getElementById("root")),window.addEventListener("orientationchange",function(){l.a.render(c.a.createElement("div",null,c.a.createElement(k,null)),document.getElementById("root"))})):l.a.render(c.a.createElement("div",null,c.a.createElement(k,null)),document.getElementById("root"))}},[[15,2,1]]]);
//# sourceMappingURL=main.20f56ae5.chunk.js.map