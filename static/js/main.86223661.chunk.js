(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),s=n.n(o),c=(n(13),n(4)),i=n(5),l=n(1),u=n(7),h=n(6),d=(n(14),n(15),n(16),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.user.id)}),r.a.createElement("h1",null,e.user.name))}),m=function(e){return r.a.createElement("div",{className:"card-list"},e.users.filter((function(t){return t.name.toLowerCase().includes(e.str)})).map((function(e){return r.a.createElement(d,{key:e.id,user:e})})))},f=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),p=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={users:[],search_field:""},e.handleChange=e.handleChange.bind(Object(l.a)(e)),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({users:t})}))}},{key:"handleChange",value:function(e){this.setState({search_field:e.target.value.toLowerCase()})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monsters rolodex"),r.a.createElement(f,{placeholder:this.state.search_field,handleChange:this.handleChange}),r.a.createElement(m,{users:this.state.users,str:this.state.search_field}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.86223661.chunk.js.map