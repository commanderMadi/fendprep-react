(window["webpackJsonptest-react"]=window["webpackJsonptest-react"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(2),o=a.n(s),l=a(3),m=a(4),c=a(6),i=a(5),u=a(7),d=(a(13),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).onChangeFullName=function(e){var t=e.target.value;a.setState(function(){return{fullName:t}})},a.onChangeEmail=function(e){var t=e.target.value;a.setState(function(){return{email:t}})},a.onChangeUserName=function(e){var t=e.target.value;a.setState(function(){return{userName:t}})},a.onChangePassword=function(e){var t=e.target.value;a.setState(function(){return{password:t}})},a.onFormSubmit=function(e){if(e.preventDefault(),a.setState(function(){return{errors:[]}}),a.validateInputs(),a.state.email&&a.state.userName&&a.state.password.length>=8){fetch("https://private-7e7394-udacityfrontendtest.apiary-mock.com/signup",{method:"POST",body:JSON.stringify({username:a.state.userName,password:a.state.password}),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return a.setState(function(){return{resolved:e}})}).catch(function(e){return new Error("Something wrong happend"+e)}),a.setState(function(){return{errors:[]}})}},a.state={fullName:"",email:"",userName:"",password:"",errors:[],resolved:""},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"validateInputs",value:function(){if(!this.state.email){this.setState(function(e){return{errors:e.errors.concat({id:"email-empty",msg:"Email cannot be left blank."})}})}if(!this.state.userName){this.setState(function(e){return{errors:e.errors.concat({id:"username-empty",msg:"Username cannot be left blank."})}})}if(!this.state.password){this.setState(function(e){return{errors:e.errors.concat({id:"password-empty",msg:"Password cannot be left blank."})}})}if(this.state.password&&this.state.password.length<8){this.setState(function(e){return{errors:e.errors.concat({id:"password-short",msg:"Your password must be 8 characters at least."})}})}return!1}},{key:"render",value:function(){return n.a.createElement("section",{className:"container"},n.a.createElement("section",{className:"row"},n.a.createElement("h2",{className:"signup-title mt-1 ml-2"},"Create an Account")),this.state.errors.length>0&&n.a.createElement("section",{className:"mt-4 mb-4 row alert alert-danger"}," ",n.a.createElement("p",{className:"col-md-12"},"The following errors have occurred:"),this.state.errors.map(function(e){return e&&n.a.createElement("p",{className:"col-md-12",key:e.id},e.msg)})),n.a.createElement("form",{className:"mt-3",onSubmit:this.onFormSubmit,"aria-label":"Sign Up",id:"signup-form"},n.a.createElement("section",{className:"form-group"},n.a.createElement("label",{htmlFor:"fullname"},"Full Name (Optional)"),n.a.createElement("input",{onChange:this.onChangeFullName,type:"text",id:"fullname",className:"form-control form-control-lg",tabIndex:"1"})),n.a.createElement("section",{className:"form-group"},n.a.createElement("label",{className:"mandatory",htmlFor:"email"},"Email"),n.a.createElement("input",{onChange:this.onChangeEmail,className:"form-control form-control-lg","aria-required":"true",type:"email",id:"email","data-err-message":"Email cannot be left blank","data-err-field":"email-empty-error",tabIndex:"2"}),n.a.createElement("label",{id:"email-empty-error"})),n.a.createElement("section",{className:"form-group"},n.a.createElement("label",{className:"mandatory",htmlFor:"username"},"Username"),n.a.createElement("input",{onChange:this.onChangeUserName,className:"form-control form-control-lg","aria-required":"true",type:"text",id:"username","data-err-message":"Username cannot be left blank","data-err-field":"username-empty-error",tabIndex:"3"}),n.a.createElement("label",{id:"username-empty-error"})),n.a.createElement("section",{className:"form-group"},n.a.createElement("label",{className:"mandatory",htmlFor:"password"},"Password"),n.a.createElement("input",{onChange:this.onChangePassword,className:"form-control form-control-lg","aria-required":"true",type:"password",id:"password","data-err-message":"Password cannot be left blank","data-err-field":"password-empty-error",tabIndex:"4"}),n.a.createElement("label",{id:"password-empty-error"})),n.a.createElement("input",{type:"submit",className:"btn btn-primary",value:"Sign Up",tabIndex:"5"})),n.a.createElement("section",{className:"row"},n.a.createElement("p",{className:"note text-muted mt-2 col-12"},"Fields that are marked with * are mandatory fields.")),0===this.state.errors.length&&this.state.resolved.message&&n.a.createElement("section",{className:"mt-4 row alert alert-danger"},n.a.createElement("p",{className:"text-center user-creation"},this.state.resolved.message)))}}]),t}(n.a.Component)),p=function(){return n.a.createElement(d,null)};o.a.render(n.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.0c12c2ce.chunk.js.map