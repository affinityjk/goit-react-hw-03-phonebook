(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{21:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),i=n(11),c=n.n(i),o=(n(21),n(16)),s=n(6),l=n(7),d=n(9),u=n(8),b=n(3);var p=Object(b.a)("div",{target:"eacsz310"})({name:"14f0vxh",styles:"display:flex;flex-direction:column;margin:0 auto;padding:30px;background-color:#ffffff;border-radius:5px;border:5px solid lightsteelblue;width:600px"}),m=n(1),h=function(e){var t=e.children;return Object(m.jsx)(p,{children:t})},f=n(13),j=n(5),x=n.n(j),g=n(4);var O=Object(b.a)("form",{target:"e146hzy93"})({name:"1fttcpj",styles:"display:flex;flex-direction:column"}),v=Object(b.a)("input",{target:"e146hzy92"})(""),y=Object(b.a)("label",{target:"e146hzy91"})({name:"pr10xp",styles:"margin-bottom:10px"}),C=Object(b.a)("button",{target:"e146hzy90"})({name:"dmq2v8",styles:"display:inline-flex;justify-content:center;align-items:center;min-width:100px;padding:10px 12px;margin-top:15px;font-size:14px;font-weight:700;color:#fff;background-color:steelblue;border:1px solid transparent;border-radius:5px;cursor:pointer;text-transform:capitalize;&:hover,&:focus{box-shadow:0 0 10px 0 rgba(0, 0, 0, 0.5);}"}),w=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(f.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number;e.props.onSubmit({id:Object(g.a)(3),name:a,number:r}),e.resetForm()},e.resetForm=function(){e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=Object(g.a)(3),r=Object(g.a)(3);return Object(m.jsxs)(O,{onSubmit:this.handleSubmit,children:[Object(m.jsx)(y,{htmlFor:"id-".concat(a),children:"Name"}),Object(m.jsx)(v,{id:"id-".concat(a),type:"text",name:"name",placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:t,onChange:this.handleChange,required:!0}),Object(m.jsx)(y,{htmlFor:"id-".concat(r),children:"Number"}),Object(m.jsx)(v,{id:"id-".concat(r),type:"tel",name:"number",placeholder:"+38 (XXX) XXX-XX-XX",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:n,onChange:this.handleChange,required:!0}),Object(m.jsx)(C,{type:"submit",children:"Add contact"})]})}}]),n}(a.Component);v.propTypes={id:x.a.string.isRequired,value:x.a.string.isRequired,onChange:x.a.func.isRequired};var z=Object(b.a)("ul",{target:"e8x8d562"})({name:"iqoq9n",styles:"margin-top:20px"}),S=Object(b.a)("li",{target:"e8x8d561"})({name:"38s8o",styles:"display:flex;justify-content:space-between;align-items:center;width:100%;padding:10px;border:1px solid silver;overflow:hidden;border-radius:5px;&:not(:last-child){margin-bottom:10px;}& span{display:inline-flex;align-items:center;margin-left:10px;margin-right:40px;}& svg{margin-right:5px;}"}),k=Object(b.a)("button",{target:"e8x8d560"})({name:"dpz7yb",styles:"display:inline-flex;justify-content:center;align-items:center;min-width:100px;padding:10px;margin-left:10px;margin-right:10px;font-size:14px;font-weight:700;color:#fff;background-color:steelblue;border:1px solid transparent;border-radius:5px;cursor:pointer;text-transform:capitalize;&:hover,&:focus{box-shadow:0 0 10px 0 rgba(0, 0, 0, 0.5);}"}),X=n(14),q=n(15),A=function(e){var t=e.contacts,n=e.onDeleteClick;return Object(m.jsx)(z,{children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(m.jsxs)(S,{children:[Object(m.jsxs)("span",{children:[Object(m.jsx)(X.a,{size:14,color:"steelblue"}),a,":"]}),Object(m.jsxs)("span",{children:[Object(m.jsx)(q.a,{size:14,color:"steelblue"}),r]}),Object(m.jsx)(k,{type:"button",onClick:function(){return n(t)},children:"Delete"})]},t)}))})};k.propTypes={onClick:x.a.func.isRequired};var F=Object(b.a)("section",{target:"ersiafj1"})({name:"1i3s0wb",styles:"display:flex;justify-content:center;flex-direction:column;align-items:center;padding-top:30px;padding-bottom:30px"}),D=Object(b.a)("h2",{target:"ersiafj0"})({name:"nlv6rg",styles:"display:flex;justify-content:center;align-items:center;margin-left:auto;margin-right:auto;margin-bottom:20px;text-transform:uppercase;font-size:28px;font-weight:700;color:steelblue"}),J=function(e){var t=e.title,n=e.children;return Object(m.jsxs)(F,{children:[Object(m.jsx)(D,{children:t}),n]})};var N=Object(b.a)("label",{target:"e16t0fpd1"})({name:"gvjivb",styles:"margin-bottom:10px;font-size:18px;font-weight:500"}),R=Object(b.a)("input",{target:"e16t0fpd0"})(""),I=function(e){var t=e.filter,n=e.onChange;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(N,{htmlFor:"id-".concat(Object(g.a)(3)),children:"Find contacts by name"}),Object(m.jsx)(R,{id:"id-".concat(Object(g.a)(3)),type:"text",name:"name",value:t,onChange:n,placeholder:"Search"})]})},M=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addContact=function(t){e.state.contacts.some((function(e){return e.name===t.name}))?alert("Contact ".concat(t.name," already exists")):e.setState((function(e){var n=e.contacts;return{contacts:[t].concat(Object(o.a)(n))}}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.handleFilterChange=function(t){e.setState({filter:t.target.value})},e.filteredContacts=function(){var t=e.state,n=t.contacts,a=t.filter.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(a)||e.number.includes(a)}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts"),t=JSON.parse(e);t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(e,t){var n=t.contacts,a=this.state.contacts;a!==n&&localStorage.setItem("contacts",JSON.stringify(a))}},{key:"render",value:function(){var e=this.filteredContacts();return Object(m.jsxs)(h,{children:[Object(m.jsx)(J,{title:"Phonebook",children:Object(m.jsx)(w,{onSubmit:this.addContact})}),Object(m.jsxs)(J,{title:"Contacts",children:[Object(m.jsx)(I,{value:this.state.filter,onChange:this.handleFilterChange}),Object(m.jsx)(A,{contacts:e,onDeleteClick:this.deleteContact})]})]})}}]),n}(a.Component);c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(M,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.9cc9a13c.chunk.js.map