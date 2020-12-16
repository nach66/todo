(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{25:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n(2),c=n(19),i=n.n(c),o=(n(25),n(4)),s=n(5),u=n(7),l=n(6),d=(n(26),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.item,n=t.handleChange,a=t.handleSubmit,c=t.editItem;return Object(r.jsx)("div",{className:"card card-body my-3",children:Object(r.jsxs)("form",{onSubmit:a,children:[Object(r.jsx)("div",{className:"input-group",children:Object(r.jsx)("input",{type:"text",className:"form-control text-capitalize",placeholder:"add todo item",value:e,onChange:n})}),Object(r.jsx)("button",{type:"submit",disabled:!e,className:c?"btn btn-block btn-success mt-3":"btn btn-block btn-primary mt-3 text-uppercase",children:c?"edit item":"add item"})]})})}}]),n}(a.Component)),h=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.title,n=t.done,a=t.handleDelete,c=t.handleEdit,i=t.handleDone;return Object(r.jsx)("div",{className:n?"done":"",children:Object(r.jsxs)("li",{className:"list-group-item text-capitalize d-flex justify-content-between",children:[Object(r.jsx)("h6",{className:"pointer",onClick:i,children:e}),Object(r.jsxs)("div",{className:"todo-icon",children:[Object(r.jsx)("span",{className:"mx-2 text-success",onClick:c,children:Object(r.jsx)("i",{className:"fas fa-pen btn-pointer"})}),Object(r.jsx)("span",{className:"mx-2 text-danger",onClick:a,children:Object(r.jsx)("i",{className:"fas fa-trash btn-pointer"})})]})]})})}}]),n}(a.Component),p=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props,e=t.items,n=t.clearList,a=t.handleDelete,c=t.handleEdit,i=t.handleDone;return Object(r.jsxs)("ul",{className:"list-group my-5",children:[Object(r.jsx)("h3",{className:"text-capitalize text-center",children:"todo list"}),e.map((function(t){return Object(r.jsx)(h,{title:t.title,done:t.done,handleDelete:function(){return a(t._id)},handleEdit:function(){return c(t._id)},handleDone:function(){return i(t._id)}},t._id)})),Object(r.jsx)("button",{type:"button",className:"btn btn-danger btn-block text-uppercase mt-5",onClick:n,children:"clear list"})]})}}]),n}(a.Component),f=n(3),m=n.n(f),b=n(8),j=n(9),v=n.n(j),x="http://localhost:5000",O=function(){var t=Object(b.a)(m.a.mark((function t(){var e;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.get(x+"/items");case 3:return e=t.sent,t.abrupt("return",e);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=Object(b.a)(m.a.mark((function t(e){var n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={title:e.title,done:e.done},t.next=4,v.a.post(x+"/add-item",n);case 4:return r=t.sent,t.abrupt("return",r);case 8:throw t.prev=8,t.t0=t.catch(0),new Error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(b.a)(m.a.mark((function t(e){var n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={title:e.title,done:e.done},t.next=4,v.a.put("".concat(x,"/edit-item/").concat(e._id),n);case 4:return r=t.sent,t.abrupt("return",r);case 8:throw t.prev=8,t.t0=t.catch(0),new Error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=Object(b.a)(m.a.mark((function t(e){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.delete("".concat(x,"/delete-item/").concat(e));case 3:return n=t.sent,t.abrupt("return",n);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),E=function(){var t=Object(b.a)(m.a.mark((function t(){var e;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.delete("".concat(x,"/delete-all/"));case 3:return e=t.sent,t.abrupt("return",e);case 7:throw t.prev=7,t.t0=t.catch(0),new Error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),k=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={items:[],_id:"",title:"",done:!1,editItem:!1},t.fetch=function(){O().then((function(e){var n=e.status,r=e.data;if(200!==n)throw new Error("Error! items not found");t.setState({items:r.items,editItem:!1,done:!1,title:"",_id:""})})).catch((function(t){return console.log(t)}))},t.handleChange=function(e){t.setState({title:e.target.value})},t.handleDone=function(e){var n=t.state.items.find((function(t){return t._id===e}));n.done=!n.done,t.update(n)},t.handleEdit=function(e){var n=t.state.items.find((function(t){return t._id===e}));t.setState({title:n.title,done:n.done,_id:n._id,editItem:!0})},t.handleSubmit=function(e){e.preventDefault();var n={title:t.state.title,done:t.state.done,_id:t.state._id};t.state.editItem?t.update(n):t.add(n)},t.add=function(e){w(e).then((function(e){if(200!==e.status)throw new Error("Error! item not saved");t.fetch()})).catch((function(t){return console.log(t)}))},t.update=function(e){y(e).then((function(e){if(200!==e.status)throw new Error("Error! item not updated");t.fetch()})).catch((function(t){return console.log(t)}))},t.handleDelete=function(e){g(e).then((function(e){var n=e.status;e.data;if(200!==n)throw new Error("Error! item not deleted");t.fetch()})).catch((function(t){return console.log(t)}))},t.clearList=function(){E().then((function(e){if(200!==e.status)throw new Error("Error! all items not deleted");t.fetch()})).catch((function(t){return console.log(t)}))},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.fetch()}},{key:"render",value:function(){return Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-10 mx-auto col-md-8 mt-5",children:[Object(r.jsx)("h3",{className:"text-capitalize text-center",children:"todo input"}),Object(r.jsx)(d,{item:this.state.title,handleChange:this.handleChange,handleSubmit:this.handleSubmit,editItem:this.state.editItem}),Object(r.jsx)(p,{items:this.state.items,clearList:this.clearList,handleDelete:this.handleDelete,handleEdit:this.handleEdit,handleDone:this.handleDone})]})})})}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(r.jsx)(k,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.852eb8c1.chunk.js.map