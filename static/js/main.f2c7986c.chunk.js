(this["webpackJsonpgoit-react-hw-template"]=this["webpackJsonpgoit-react-hw-template"]||[]).push([[0],{10:function(t,e,n){t.exports={form:"Form_form__1YgZB",button:"Form_button__1KD-X"}},12:function(t,e,n){t.exports={Container:"Container_Container__2bAxH"}},14:function(t,e,n){t.exports={text:"Filter_text__2S88W"}},3:function(t,e,n){t.exports={list:"Contacts_list__WPy1N",item:"Contacts_item__AaSmh",text:"Contacts_text__3Pj-5",button:"Contacts_button__CMkws"}},30:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),s=n.n(r),o=n(15),i=n(5),l=n(6),u=n(8),b=n(7),h=n(12),m=n.n(h),d=n(0),j=function(t){var e=t.children;return Object(d.jsx)("div",{className:m.a.Container,children:e})},f=n(2),p=n.n(f),x=n(13),O=n(10),C=n.n(O),v=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(x.a)({},a,c))},t.handelSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("form",{onSubmit:this.handelSubmit,className:C.a.form,children:[Object(d.jsxs)("label",{children:[Object(d.jsx)("span",{children:"Name"}),Object(d.jsx)("input",{id:p.a.generate(),type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:this.handleChange,required:!0})]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("span",{children:"Number"}),Object(d.jsx)("input",{id:p.a.generate(),type:"tel",name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",onChange:this.handleChange,required:!0})]}),Object(d.jsx)("button",{className:C.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),g=n(3),_=n.n(g),S=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(d.jsx)("ul",{className:_.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(d.jsxs)("li",{className:_.a.item,children:[Object(d.jsxs)("p",{className:_.a.text,children:[a,":"]}),Object(d.jsx)("span",{children:c}),Object(d.jsx)("button",{className:_.a.button,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},y=n(14),N=n.n(y),A=function(t){var e=t.value,n=t.onChange;return Object(d.jsxs)("label",{children:[Object(d.jsx)("p",{className:N.a.text,children:"Find contacts by name"}),Object(d.jsx)("input",{type:"text",value:e,onChange:n})]})},k=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.formSubmitHandler=function(e){var n=e.name,a=e.number;if(t.state.contacts.some((function(t){return t.name===n})))alert("".concat(n.split(" ").map((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})).join(" ")," is already in contacts. Change contact's name or delete old."));else{var c={id:p.a.generate(),name:n,number:a};t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(o.a)(e))}}))}},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContact=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&(console.log("update"),localStorage.setItem("contacts",JSON.stringify(this.state.contacts)))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContact();return Object(d.jsxs)(j,{children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(v,{onSubmit:this.formSubmitHandler}),Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)(A,{value:t,onChange:this.changeFilter}),Object(d.jsx)(S,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);n(29),n(30);s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.f2c7986c.chunk.js.map