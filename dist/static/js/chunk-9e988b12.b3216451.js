(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9e988b12"],{"0043":function(t,e,a){},"26cb":function(t,e,a){},"6d14":function(t,e,a){"use strict";var s=a("26cb"),r=a.n(s);r.a},"80c1":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("common-layout",[s("div",{staticClass:"top"},[s("div",{staticClass:"header"},[s("img",{staticClass:"logo",attrs:{alt:"logo",src:a("4ffd")}}),s("span",{staticClass:"title"},[t._v(t._s(t.systemName))])]),s("div",{staticClass:"desc"},[t._v("Ant Design 是西湖区最具影响力的 Web 设计规范")])]),s("div",{staticClass:"login"},[s("a-form",{attrs:{form:t.form},on:{submit:t.onSubmit}},[s("a-tabs",{staticStyle:{padding:"0 2px"},attrs:{size:"large",tabBarStyle:{textAlign:"center"}}},[s("a-tab-pane",{key:"1",attrs:{tab:"账户密码登录"}},[s("a-alert",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}],staticStyle:{"margin-bottom":"24px"},attrs:{type:"error",closable:!0,message:t.error,showIcon:""}}),s("a-form-item",[s("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入账户名",whitespace:!0}]}],expression:"['name', {rules: [{ required: true, message: '请输入账户名', whitespace: true}]}]"}],attrs:{autocomplete:"autocomplete",size:"large",placeholder:"admin"}},[s("a-icon",{attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),s("a-form-item",[s("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"请输入密码",whitespace:!0}]}],expression:"['password', {rules: [{ required: true, message: '请输入密码', whitespace: true}]}]"}],attrs:{size:"large",placeholder:"888888",autocomplete:"autocomplete",type:"password"}},[s("a-icon",{attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1)],1),s("a-tab-pane",{key:"2",attrs:{tab:"手机号登录"}},[s("a-form-item",[s("a-input",{attrs:{size:"large",placeholder:"mobile number"}},[s("a-icon",{attrs:{slot:"prefix",type:"mobile"},slot:"prefix"})],1)],1),s("a-form-item",[s("a-row",{staticStyle:{margin:"0 -4px"},attrs:{gutter:8}},[s("a-col",{attrs:{span:16}},[s("a-input",{attrs:{size:"large",placeholder:"captcha"}},[s("a-icon",{attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1),s("a-col",{staticStyle:{"padding-left":"4px"},attrs:{span:8}},[s("a-button",{staticClass:"captcha-button",staticStyle:{width:"100%"},attrs:{size:"large"}},[t._v("获取验证码")])],1)],1)],1)],1)],1),s("div",[s("a-checkbox",{attrs:{checked:!0}},[t._v("自动登录")]),s("a",{staticStyle:{float:"right"}},[t._v("忘记密码")])],1),s("a-form-item",[s("a-button",{staticStyle:{width:"100%","margin-top":"24px"},attrs:{loading:t.logging,size:"large",htmlType:"submit",type:"primary"}},[t._v("登录")])],1),s("div",[t._v(" 其他登录方式 "),s("a-icon",{staticClass:"icon",attrs:{type:"alipay-circle"}}),s("a-icon",{staticClass:"icon",attrs:{type:"taobao-circle"}}),s("a-icon",{staticClass:"icon",attrs:{type:"weibo-circle"}}),s("router-link",{staticStyle:{float:"right"},attrs:{to:"/dashboard/workplace"}},[t._v("注册账户")])],1)],1)],1)])},r=[],o=a("5530"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"common-layout"},[a("div",{staticClass:"content"},[t._t("default")],2),a("page-footer",{attrs:{"link-list":t.footerLinks,copyright:t.copyright}})],1)},c=[],n=a("613e"),l=a("5880"),m={name:"CommonLayout",components:{PageFooter:n["a"]},computed:Object(o["a"])({},Object(l["mapState"])("setting",["footerLinks","copyright"]))},p=m,u=(a("6d14"),a("0c7c")),d=Object(u["a"])(p,i,c,!1,null,"1c265f57",null),g=d.exports,f=a("93d6"),h=a("b775"),b=a("89a5"),v={name:"Login",components:{CommonLayout:g},data:function(){return{logging:!1,error:"",form:this.$form.createForm(this)}},computed:{systemName:function(){return this.$store.state.setting.systemName}},methods:Object(o["a"])(Object(o["a"])({},Object(l["mapMutations"])("account",["setUser","setPermissions","setRoles"])),{},{onSubmit:function(t){var e=this;t.preventDefault(),this.form.validateFields((function(t){if(!t){e.logging=!0;var a=e.form.getFieldValue("name"),s=e.form.getFieldValue("password");Object(f["b"])(a,s).then(e.afterLogin)}}))},afterLogin:function(t){var e=this;this.logging=!1;var a=t.data;if(a.code>=0){var s=a.data,r=s.user,o=s.permissions,i=s.roles;this.setUser(r),this.setPermissions(o),this.setRoles(i),Object(h["g"])({token:a.data.token,expireAt:new Date(a.data.expireAt)}),Object(f["a"])().then((function(t){var s=t.data.data;Object(b["d"])(s),e.$router.push("/dashboard/workplace"),e.$message.success(a.message,3)}))}else this.error=a.message}})},y=v,w=(a("bfd2"),Object(u["a"])(y,s,r,!1,null,"d06481ac",null)),x=w.exports;e["default"]=x},bfd2:function(t,e,a){"use strict";var s=a("0043"),r=a.n(s);r.a}}]);