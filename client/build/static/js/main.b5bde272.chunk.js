(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{116:function(e,t,r){"use strict";r.r(t);var s=r(0),c=r(26),n=r.n(c),a=(r(68),r(17)),i=r(15),o=r(3),l=r(14),u=r(11),j=r(1),d=["component"],b=function(e){var t=e.component,r=Object(l.a)(e,d),s=(Object(i.g)(),Object(u.c)((function(e){return e.userAuth.user})));return Object(j.jsx)(i.b,Object(o.a)(Object(o.a)({},r),{},{render:function(e){return 0!==Object.keys(s).length?Object(j.jsx)(t,Object(o.a)({},e)):Object(j.jsx)(i.a,{to:"/login"})}}))},p=r(4),h=r(7),O=r(6),m=r(12),f=r.n(m),x=(r(31),r(29)),v={user:{},isLoading:!1,isSuccess:!1,errMsg:""},_=Object(x.b)({name:"user",initialState:v,reducers:{getAuthFetch:function(e,t){e.isLoading=!0},getAuthSuccess:function(e){e.isLoading=!1,e.isSuccess=!0},setUserDetails:function(e,t){e.user=t.payload},getAuthFailure:function(e,t){e.isLoading=!1,e.errMsg=null===t||void 0===t?void 0:t.payload},flushAuthData:function(e){return localStorage.clear(),v}}}),g=_.actions,w=g.setUserDetails,N=g.flushAuthData,y=g.getAuthFetch,k=g.getAuthSuccess,S=_.reducer;var q=function(){var e=Object(i.f)();return Object(j.jsx)("div",{className:"left_side_bar",children:Object(j.jsxs)("div",{className:"left_side_menu",children:[Object(j.jsx)("div",{className:"left_side_menu_comp",onClick:function(){return e.push("/")},children:Object(j.jsx)("h6",{children:"Dashboard"})}),Object(j.jsx)("div",{className:"left_side_menu_comp",onClick:function(){return e.push("/add-post")},children:Object(j.jsx)("h6",{children:"Add Article"})}),Object(j.jsx)("div",{className:"left_side_menu_comp",onClick:function(){return e.push("/add-slide")},children:Object(j.jsx)("h6",{children:"Add Slide"})}),Object(j.jsx)("div",{className:"left_side_menu_comp",onClick:function(){return e.push("/articles")},children:Object(j.jsx)("h6",{children:"Articles"})}),Object(j.jsx)("div",{className:"left_side_menu_comp",children:Object(j.jsx)("h6",{children:"Slider"})}),Object(j.jsx)("div",{className:"left_side_menu_comp",children:Object(j.jsx)("h6",{children:"Others"})})]})})};var C=function(){var e,t=Object(i.f)(),r=Object(u.b)(),s=Object(u.c)((function(e){return e.userAuth.user}));return Object(j.jsxs)("div",{className:"dashboard_header",children:[Object(j.jsx)("h2",{children:"Dashboard"}),Object(j.jsxs)("div",{className:"right_header",children:[Object(j.jsx)("h3",{children:null===s||void 0===s||null===(e=s.user)||void 0===e?void 0:e.email}),Object(j.jsx)("button",{onClick:function(){return r(N()),void t.push("/login")},children:" Logout"})]})]})},A=r(60),T=r.n(A),D="https://toprathi-admin.onrender.com/api/",P={newsGet:function(){var e=Object(h.a)(Object(p.a)().mark((function e(t,r){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.a.request({method:"get",url:"".concat(D,"private/news-admin/").concat(t,"/").concat(r)}).then((function(e){return e.data})).catch((function(e){return e.response})));case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),newsGetById:function(){var e=Object(h.a)(Object(p.a)().mark((function e(t){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.a.request({method:"get",url:"".concat(D,"private/news/").concat(t)}).then((function(e){return e.data})).catch((function(e){return e.response})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),remNewsGetById:function(){var e=Object(h.a)(Object(p.a)().mark((function e(t){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.a.request({method:"delete",url:"".concat(D,"private/news/").concat(t)}).then((function(e){return e.data})).catch((function(e){return e.response})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),newsAdd:function(){var e=Object(h.a)(Object(p.a)().mark((function e(t){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.a.request({method:"post",url:"".concat(D,"private/news"),data:t}).then((function(e){return e.data})).catch((function(e){return e.response})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),newsEdit:function(){var e=Object(h.a)(Object(p.a)().mark((function e(t,r){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.a.request({method:"put",url:"".concat(D,"private/news/").concat(r),data:t}).then((function(e){return e.data})).catch((function(e){return e.response})));case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()};var I=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:"Loading..."})})};var F=function(){var e=Object(i.f)(),t=P.newsGet,r=P.remNewsGetById,c=Object(s.useState)([]),n=Object(O.a)(c,2),a=n[0],o=n[1],l=Object(s.useState)(!0),u=Object(O.a)(l,2),d=u[0],b=u[1],m=Object(s.useState)(0),f=Object(O.a)(m,2),x=f[0],v=f[1],_=Object(s.useState)(1),g=Object(O.a)(_,2),w=g[0],N=g[1];Object(s.useEffect)((function(){t(w,5).then((function(e){o(e.data),v(e.count),console.log(e),b(!1)}))}),[d,w]);var y=function(){var e=Object(h.a)(Object(p.a)().mark((function e(t){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you to delete this news")){e.next=7;break}return b(!0),e.next=4,r(t);case 4:e.sent,alert("Post Deleted..."),b(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return d?Object(j.jsx)(I,{}):Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"dashboard_comp_header",children:[Object(j.jsx)("h2",{children:"Top Articles"}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("button",{onClick:function(){w>1&&N(w-1)},children:"Prev"}),w," / ",Math.ceil(x/5)," ",Object(j.jsx)("button",{onClick:function(){Math.ceil(x/5)>w&&N(w+1)},children:"Next"})]})," "]})]}),Object(j.jsx)("div",{className:"dashboard_articles",children:a.map((function(t){var r,s,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(j.jsxs)("div",{className:"dashboard_articles_comp",children:[Object(j.jsxs)("div",{className:"articles_comp_first",children:[Object(j.jsx)("div",{className:"dashboard_articles_comp_left articles_comp",children:Object(j.jsxs)("p",{children:[c+1+5*(w-1)," "]})}),Object(j.jsx)("div",{className:"dashboard_articles_comp_center articles_comp",children:Object(j.jsx)("img",{src:t.image})}),Object(j.jsxs)("div",{className:"articles_content articles_comp",children:[Object(j.jsx)("h5",{children:(null===t||void 0===t?void 0:t.title.length)>50?null===t||void 0===t||null===(r=t.title)||void 0===r?void 0:r.substring(0,50):null===t||void 0===t?void 0:t.title}),Object(j.jsx)("h5",{children:(null===t||void 0===t?void 0:t.content.length)>50?null===t||void 0===t||null===(s=t.content)||void 0===s?void 0:s.substring(0,50):null===t||void 0===t?void 0:t.content}),Object(j.jsx)("p",{children:T()(t.timestamp).fromNow()})]})]}),Object(j.jsxs)("div",{className:"articles_action",children:[Object(j.jsx)("p",{onClick:function(){return e.push("/edit-post/"+t._id)},children:"Edit"}),Object(j.jsx)("p",{onClick:function(){return y(t._id)},children:"Delete"})]})]},c)}))})]})},L=function(e){e.history;var t=Object(s.useState)(""),r=Object(O.a)(t,2),c=r[0],n=(r[1],Object(s.useState)("")),a=Object(O.a)(n,2);a[0],a[1],Object(u.b)(),Object(u.c)((function(e){return e.userAuth.user}));return c?Object(j.jsx)("span",{className:"error-message",children:c}):Object(j.jsxs)("div",{className:"dashboard_page",children:[Object(j.jsx)(C,{}),Object(j.jsxs)("div",{className:"dashboard_flex_row",children:[Object(j.jsx)(q,{}),Object(j.jsx)("div",{className:"dashboard_comp",children:Object(j.jsx)(F,{})})]})]})},E=(r(97),function(e){var t=e.history,r=Object(s.useState)(""),c=Object(O.a)(r,2),n=c[0],i=c[1],o=Object(s.useState)(""),l=Object(O.a)(o,2),d=l[0],b=l[1],m=Object(s.useState)(""),f=Object(O.a)(m,2),x=f[0],v=f[1],_=Object(u.b)(),g=function(){var e=Object(h.a)(Object(p.a)().mark((function e(r){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.preventDefault();try{_(y({email:n,password:d})),setTimeout((function(){v("")}),5e3),t.push("/")}catch(x){v(x.response.data.error),setTimeout((function(){v("")}),5e3)}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"login-screen",children:Object(j.jsxs)("form",{onSubmit:g,className:"login-screen__form",children:[Object(j.jsx)("h3",{className:"login-screen__title",children:"Login"}),x&&Object(j.jsx)("span",{className:"error-message",children:x}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(j.jsx)("input",{type:"email",required:!0,id:"email",placeholder:"Email address",onChange:function(e){return i(e.target.value)},value:n,tabIndex:1})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsxs)("label",{htmlFor:"password",children:["Password:"," ",Object(j.jsx)(a.b,{to:"/forgotpassword",className:"login-screen__forgotpassword",children:"Forgot Password?"})]}),Object(j.jsx)("input",{type:"password",required:!0,id:"password",autoComplete:"true",placeholder:"Enter password",onChange:function(e){return b(e.target.value)},value:d,tabIndex:2})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"}),Object(j.jsxs)("span",{className:"login-screen__subtext",children:["Don't have an account? ",Object(j.jsx)(a.b,{to:"/register",children:"Register"})]})]})})}),R=(r(98),function(e){var t=e.history,r=Object(s.useState)(""),c=Object(O.a)(r,2),n=c[0],i=c[1],o=Object(s.useState)(""),l=Object(O.a)(o,2),d=l[0],b=l[1],m=Object(s.useState)(""),x=Object(O.a)(m,2),v=x[0],_=x[1],g=Object(s.useState)(""),N=Object(O.a)(g,2),y=N[0],k=N[1],S=Object(s.useState)(""),q=Object(O.a)(S,2),C=q[0],A=q[1],T=(Object(u.c)((function(e){return e.userAuth.user})),Object(u.b)()),D=function(){var e=Object(h.a)(Object(p.a)().mark((function e(r){var s,c,a;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),s={header:{"Content-Type":"application/json"}},v===y){e.next=7;break}return _(""),k(""),setTimeout((function(){A("")}),5e3),e.abrupt("return",A("Passwords do not match"));case 7:return e.prev=7,e.next=10,f.a.post("/api/auth/register",{username:n,email:d,password:v},s);case 10:c=e.sent,a=c.data,T(w(a.data)),localStorage.setItem("authToken",a.token),t.push("/"),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(7),A(e.t0.response.data.error),setTimeout((function(){A("")}),5e3);case 21:case"end":return e.stop()}}),e,null,[[7,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"register-screen",children:Object(j.jsxs)("form",{onSubmit:D,className:"register-screen__form",children:[Object(j.jsx)("h3",{className:"register-screen__title",children:"Register"}),C&&Object(j.jsx)("span",{className:"error-message",children:C}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"name",children:"Username:"}),Object(j.jsx)("input",{type:"text",required:!0,id:"name",placeholder:"Enter username",value:n,onChange:function(e){return i(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(j.jsx)("input",{type:"email",required:!0,id:"email",placeholder:"Email address",value:d,onChange:function(e){return b(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(j.jsx)("input",{type:"password",required:!0,id:"password",autoComplete:"true",placeholder:"Enter password",value:v,onChange:function(e){return _(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"confirmpassword",children:"Confirm Password:"}),Object(j.jsx)("input",{type:"password",required:!0,id:"confirmpassword",autoComplete:"true",placeholder:"Confirm password",value:y,onChange:function(e){return k(e.target.value)}})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Register"}),Object(j.jsxs)("span",{className:"register-screen__subtext",children:["Already have an account? ",Object(j.jsx)(a.b,{to:"/login",children:"Login"})]})]})})}),V=(r(99),{userLoginApi:function(){var e=Object(h.a)(Object(p.a)().mark((function e(t){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.a.request({method:"post",url:"".concat(D,"auth/login"),data:t}).then((function(e){return e.data})).catch((function(e){return e.response})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),userForgotPassword:function(){var e=Object(h.a)(Object(p.a)().mark((function e(t){var r;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=JSON.stringify({email:t}),e.abrupt("return",f.a.request({method:"post",url:"".concat(D,"auth/forgotpassword"),data:r,headers:{"Content-Type":"application/json"}}).then((function(e){return console.log(e),e.data})).catch((function(e){return e.response})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),userFetch:function(){var e=Object(h.a)(Object(p.a)().mark((function e(t){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.a.request({method:"get",url:"".concat(D,"private/user/").concat(t)}).then((function(e){return console.log(e),e.data})).catch((function(e){return e.response})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),userResetPassword:function(){var e=Object(h.a)(Object(p.a)().mark((function e(t){var r;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=JSON.stringify({password:t.password}),e.abrupt("return",f.a.request({method:"put",url:"".concat(D,"auth/passwordreset/").concat(t.resetToken),data:r,headers:{"Content-Type":"application/json"}}).then((function(e){return console.log(e),e.data})).catch((function(e){return e.response})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),userEmailVerify:function(){var e=Object(h.a)(Object(p.a)().mark((function e(t){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f.a.request({method:"put",url:"".concat(D,"auth/email-verify/").concat(t),headers:{"Content-Type":"application/json",Accept:"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization","Access-Control-Request-Method":"PUT"}}).then((function(e){return console.log(e),e.data})).catch((function(e){return e.response})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),M=function(){var e=Object(s.useState)(""),t=Object(O.a)(e,2),r=t[0],c=t[1],n=Object(s.useState)(""),a=Object(O.a)(n,2),i=a[0],o=a[1],l=Object(s.useState)(""),u=Object(O.a)(l,2),d=u[0],b=u[1],m=V.userForgotPassword,f=function(){var e=Object(h.a)(Object(p.a)().mark((function e(t){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{m(r).then((function(e){console.log(e),b(e.data)}))}catch(i){o(i.response.data.error),c(""),setTimeout((function(){o("")}),5e3)}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"forgotpassword-screen",children:Object(j.jsxs)("form",{onSubmit:f,className:"forgotpassword-screen__form",children:[Object(j.jsx)("h3",{className:"forgotpassword-screen__title",children:"Forgot Password"}),i&&Object(j.jsx)("span",{className:"error-message",children:i}),d&&Object(j.jsx)("span",{className:"success-message",children:d}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("p",{className:"forgotpassword-screen__subtext",children:"Please enter the email address you register your account with. We will send you reset password confirmation to this email"}),Object(j.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(j.jsx)("input",{type:"email",required:!0,id:"email",placeholder:"Email address",value:r,onChange:function(e){return c(e.target.value)}})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Send Email"})]})})},B=(r(55),function(e){e.history,e.match;var t=Object(s.useState)(""),r=Object(O.a)(t,2),c=r[0],n=r[1],o=Object(s.useState)(""),l=Object(O.a)(o,2),d=l[0],b=l[1],m=Object(s.useState)(""),f=Object(O.a)(m,2),x=f[0],v=f[1],_=Object(s.useState)(""),g=Object(O.a)(_,2),w=g[0],N=g[1],y=V.userResetPassword,k=(Object(u.c)((function(e){return e.userAuth})),Object(s.useState)({})),S=Object(O.a)(k,2),q=(S[0],S[1],Object(i.h)().resetToken),C=function(){var e=Object(h.a)(Object(p.a)().mark((function e(t){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),c===d){e.next=6;break}return n(""),b(""),setTimeout((function(){v("")}),5e3),e.abrupt("return",v("Passwords don't match"));case 6:try{y({resetToken:q,password:c}).then((function(e){e.success&&N(e.data)}))}catch(x){v(x.response.data.error),setTimeout((function(){v("")}),5e3)}case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"resetpassword-screen",children:Object(j.jsxs)("form",{onSubmit:C,className:"resetpassword-screen__form",children:[Object(j.jsx)("h3",{className:"resetpassword-screen__title",children:"Forgot Password"}),x&&Object(j.jsxs)("span",{className:"error-message",children:[x," "]}),w&&Object(j.jsxs)("span",{className:"success-message",children:[w," ",Object(j.jsx)(a.b,{to:"/login",children:"Login"})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"password",children:"New Password:"}),Object(j.jsx)("input",{type:"password",required:!0,id:"password",placeholder:"Enter new password",autoComplete:"true",value:c,onChange:function(e){return n(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"confirmpassword",children:"Confirm New Password:"}),Object(j.jsx)("input",{type:"password",required:!0,id:"confirmpassword",placeholder:"Confirm new password",autoComplete:"true",value:d,onChange:function(e){return b(e.target.value)}})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Reset Password"})]})})}),G=r(25),z=r(37);var H=function(){var e=Object(i.f)(),t=P.newsAdd,r=Object(s.useState)(""),c=Object(O.a)(r,2),n=(c[0],c[1],Object(s.useState)([])),a=Object(O.a)(n,2),l=a[0],u=a[1],d=Object(s.useState)({}),b=Object(O.a)(d,2),m=(b[0],b[1],Object(G.b)()),f=m.control,x=m.register,v=m.handleSubmit,_=m.reset,g=(m.getValues,m.setValue,m.watch),w=m.formState.errors,N=Object(s.useState)(""),y=Object(O.a)(N,2),k=y[0],S=y[1],q=Object(G.a)({control:f,name:"insight_arr"}),C=q.fields,A=q.append,T=q.remove,D=function(){var e=Object(h.a)(Object(p.a)().mark((function e(r){var s;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(r);case 2:s=e.sent,console.log(s,"RES");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){var e=g((function(e,t){var r=t.name,s=t.type;return console.log(e,r,s)}));return function(){return e.unsubscribe()}}),[g]);var I=g();return Object(j.jsxs)("div",{className:"add_post_form",children:[Object(j.jsx)("div",{className:"add_post_form_head",children:Object(j.jsx)("h2",{children:"Add Post"})}),Object(j.jsx)("div",{className:"add_post_form",children:Object(j.jsxs)("form",{onSubmit:v((function(t){var r={title:t.title,content:t.content,form_link:t.form_link,read_more_link:t.read_more_link,timestamp:Date.now(),author:"shivam",image:null!==t&&void 0!==t&&t.image?null===t||void 0===t?void 0:t.image:"https://yaffa-cdn.s3.amazonaws.com/yaffadsp/images/dmImage/SourceImage/news-corp-359.jpg",views:1,tags:l,addAt:Date.now(),updatedAt:Date.now(),poll_user_responses:[],poll_title:t.poll_title,news_type:t.news_type,insight_arr:C};D(r),_(),e.push("/")})),children:[Object(j.jsxs)("div",{className:"post_form_comp",children:[Object(j.jsx)("label",{children:"Title"}),Object(j.jsx)("input",Object(o.a)({},x("title",{required:!0}))),w.title&&Object(j.jsx)("span",{className:"error",children:"Title is required"})]}),Object(j.jsxs)("div",{className:"post_form_comp",children:[Object(j.jsx)("label",{children:"Description"}),Object(j.jsx)("input",Object(o.a)({},x("content",{required:!0}))),w.content&&Object(j.jsx)("span",{className:"error",children:"Description field is required"})]}),Object(j.jsxs)("div",{className:"post_form_comp",children:[Object(j.jsx)("label",{children:"Form Link (optional)"}),Object(j.jsx)("input",Object(o.a)({},x("form_link",{required:!1})))]}),Object(j.jsxs)("div",{className:"post_form_comp",children:[Object(j.jsx)("label",{children:"Read More Link "}),Object(j.jsx)("input",Object(o.a)({},x("read_more_link",{required:!1}))),w.read_more_link&&Object(j.jsx)("span",{className:"error",children:"Read More Link field is required"})]}),Object(j.jsxs)("div",{className:"post_form_comp",children:[Object(j.jsx)("label",{children:"News Type "}),Object(j.jsxs)("select",Object(o.a)(Object(o.a)({},x("news_type",{required:!1})),{},{children:[Object(j.jsx)("option",{value:"feed",children:"feed"}),Object(j.jsx)("option",{value:"slide",children:"slide"}),Object(j.jsx)("option",{value:"insight",children:"insight"})]})),w.news_type&&Object(j.jsx)("span",{className:"error",children:"News Type field is required"})]}),"insight"===I.news_type&&Object(j.jsxs)("div",{className:"post_form_comp",children:[Object(j.jsx)("label",{children:"Insight Images Link "}),Object(j.jsx)("input",{type:"text",onChange:function(e){return S(e.target.value)},value:k,placeholder:"Image Link"}),Object(j.jsxs)("ul",{children:[C.map((function(e,t){return Object(j.jsxs)("li",{className:"post_form_comp flex_row",children:[Object(j.jsxs)("p",{children:[t+1,"  "]}),Object(j.jsx)("img",{src:C[t].image,style:{width:100,height:100,marginBottom:5}}),Object(j.jsx)("button",{className:"dynamic_button",type:"button",onClick:function(){return T(t)},children:"Delete"})]},e.id)})),Object(j.jsx)("button",{className:"dynamic_button",type:"button",onClick:function(){A({_id:Date.now()+"image",image:k}),S("")},children:"Add"})]}),w.news_type&&Object(j.jsx)("span",{className:"error",children:"News Type field is required"})]}),Object(j.jsxs)("div",{className:"post_form_comp",children:[Object(j.jsx)("label",{children:"Poll Title ( IF THIS IS FOR POLL)"}),Object(j.jsx)("input",Object(o.a)({},x("poll_title",{required:!1}))),w.poll_title&&Object(j.jsx)("span",{className:"error",children:"Poll Title field is required"})]}),Object(j.jsxs)("div",{className:"post_form_comp",children:[Object(j.jsx)("label",{children:"Image"}),Object(j.jsx)("input",Object(o.a)({},x("image",{required:!1}))),w.image&&Object(j.jsx)("span",{className:"error",children:"image Link field is required"})]}),Object(j.jsxs)("div",{className:"post_form_comp",children:[Object(j.jsx)("label",{children:"Tags"}),Object(j.jsx)(z.a,{defaultValue:l,onChange:u,options:[{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"vanilla",label:"Vanilla"}],isMulti:!0,isSearchable:!0})]}),Object(j.jsx)("input",{type:"submit",className:"button"})]})})]})},J=function(e){e.history;var t=Object(s.useState)(""),r=Object(O.a)(t,2),c=r[0],n=(r[1],Object(s.useState)("")),a=Object(O.a)(n,2);a[0],a[1],Object(u.b)(),Object(u.c)((function(e){return e.userAuth.user}));return c?Object(j.jsx)("span",{className:"error-message",children:c}):Object(j.jsxs)("div",{className:"dashboard_page",children:[Object(j.jsx)(C,{}),Object(j.jsxs)("div",{className:"dashboard_flex_row",children:[Object(j.jsx)(q,{}),Object(j.jsx)("div",{className:"dashboard_comp",children:Object(j.jsx)(H,{})})]})]})};var U=function(){var e=Object(G.b)(),t=e.register,r=e.handleSubmit,s=e.reset,c=(e.watch,e.formState.errors);return Object(j.jsxs)("div",{className:"add_post_form",children:[Object(j.jsx)("div",{className:"add_post_form_head",children:Object(j.jsx)("h2",{children:"Add Slide"})}),Object(j.jsx)("div",{className:"add_post_form",children:Object(j.jsxs)("form",{onSubmit:r((function(e){console.log(e),s()})),children:[Object(j.jsxs)("div",{className:"post_form_comp",children:[Object(j.jsx)("label",{children:"Title"}),Object(j.jsx)("input",Object(o.a)({},t("title",{required:!0}))),c.title&&Object(j.jsx)("span",{className:"error",children:"Title is required"})]}),Object(j.jsxs)("div",{className:"post_form_comp",children:[Object(j.jsx)("label",{children:"Description"}),Object(j.jsx)("input",Object(o.a)({},t("content",{required:!0}))),c.content&&Object(j.jsx)("span",{className:"error",children:"Description field is required"})]}),Object(j.jsxs)("div",{className:"post_form_comp",children:[Object(j.jsx)("label",{children:"Description"}),Object(j.jsx)("input",Object(o.a)({type:"file"},t("image",{required:!0}))),c.image&&Object(j.jsx)("span",{className:"error",children:"Image field is required"})]}),Object(j.jsx)("input",{type:"submit",className:"button"})]})})]})},W=function(e){e.history;var t=Object(s.useState)(""),r=Object(O.a)(t,2),c=r[0],n=(r[1],Object(s.useState)("")),a=Object(O.a)(n,2);a[0],a[1],Object(u.b)(),Object(u.c)((function(e){return e.userAuth.user}));return c?Object(j.jsx)("span",{className:"error-message",children:c}):Object(j.jsxs)("div",{className:"dashboard_page",children:[Object(j.jsx)(C,{}),Object(j.jsxs)("div",{className:"dashboard_flex_row",children:[Object(j.jsx)(q,{}),Object(j.jsx)("div",{className:"dashboard_comp",children:Object(j.jsx)(U,{})})]})]})};var X=function(){var e=Object(i.f)(),t=P.newsEdit,r=P.newsGetById,c=Object(i.h)().newsId,n=Object(s.useState)(""),a=Object(O.a)(n,2),l=(a[0],a[1]),u=Object(s.useState)(""),d=Object(O.a)(u,2),b=d[0],m=d[1],f=Object(s.useState)([{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"vanilla",label:"Vanilla"}]),x=Object(O.a)(f,2),v=x[0],_=(x[1],Object(s.useState)([])),g=Object(O.a)(_,2),w=g[0],N=g[1],y=Object(s.useState)({}),k=Object(O.a)(y,2),S=k[0],q=k[1];Object(s.useEffect)((function(){r(c).then((function(e){q(e.data),N(e.data.tags),l(e.data.image)}))}),[c]);var C=Object(G.b)({defaultValues:S,insight_arr:null===S||void 0===S?void 0:S.insight_arr}),A=C.control,T=C.register,D=C.handleSubmit,I=C.reset,F=(C.getValues,C.setValue,C.watch),L=C.formState.errors,E=Object(G.a)({control:A,name:"insight_arr"}),R=E.fields,V=E.append,M=E.remove;Object(s.useEffect)((function(){I({insight_arr:null===S||void 0===S?void 0:S.insight_arr})}),[S]),Object(s.useEffect)((function(){I(S)}),[S]);var B=function(){var r=Object(h.a)(Object(p.a)().mark((function r(s){var n;return Object(p.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t(s,c);case 2:n=r.sent,console.log(n,"RES"),e.push("/");case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();Object(s.useEffect)((function(){var e=F((function(e,t){var r=t.name,s=t.type;return console.log(e,r,s)}));return function(){return e.unsubscribe()}}),[F]);var H=F();return Object(j.jsxs)("div",{className:"add_post_form",children:[Object(j.jsx)("div",{className:"add_post_form_head",children:Object(j.jsx)("h2",{children:"Edit Post"})}),Object(j.jsx)("div",{className:"add_post_form",children:Object(j.jsxs)("form",{onSubmit:D((function(e){console.log(e,"------");var t={title:e.title,content:e.content,form_link:e.form_link,read_more_link:e.read_more_link,timestamp:Date.now(),author:"shivam",image:null!==e&&void 0!==e&&e.image?null===e||void 0===e?void 0:e.image:"https://yaffa-cdn.s3.amazonaws.com/yaffadsp/images/dmImage/SourceImage/news-corp-359.jpg",views:1,tags:w,addAt:Date.now(),updatedAt:Date.now(),poll_user_responses:[],poll_title:e.poll_title,news_type:e.news_type,insight_arr:R};B(t),I()})),children:[Object(j.jsxs)("div",{className:"post_form_comp",children:[Object(j.jsx)("label",{children:"Title"}),Object(j.jsx)("input",Object(o.a)({},T("title",{required:!0}))),L.title&&Object(j.jsx)("span",{className:"error",children:"Title is required"})]}),Object(j.jsxs)("div",{className:"post_form_comp",children:[Object(j.jsx)("label",{children:"Description"}),Object(j.jsx)("input",Object(o.a)({},T("content",{required:!0}))),L.content&&Object(j.jsx)("span",{className:"error",children:"Description field is required"})]}),Object(j.jsxs)("div",{className:"post_form_comp",children:[Object(j.jsx)("label",{children:"Form Link (optional)"}),Object(j.jsx)("input",Object(o.a)({},T("form_link",{required:!1})))]}),Object(j.jsxs)("div",{className:"post_form_comp",children:[Object(j.jsx)("label",{children:"Read More Link "}),Object(j.jsx)("input",Object(o.a)({},T("read_more_link",{required:!1}))),L.read_more_link&&Object(j.jsx)("span",{className:"error",children:"Read More Link field is required"})]}),Object(j.jsxs)("div",{className:"post_form_comp",children:[Object(j.jsx)("label",{children:"News Type "}),Object(j.jsxs)("select",Object(o.a)(Object(o.a)({},T("news_type",{required:!1})),{},{children:[Object(j.jsx)("option",{value:"feed",children:"feed"}),Object(j.jsx)("option",{value:"slide",children:"slide"}),Object(j.jsx)("option",{value:"insight",children:"insight"})]})),L.news_type&&Object(j.jsx)("span",{className:"error",children:"News Type field is required"})]}),"insight"===H.news_type&&Object(j.jsxs)("div",{className:"post_form_comp",children:[Object(j.jsx)("label",{children:"Insight Images Link "}),Object(j.jsx)("input",{type:"text",onChange:function(e){return m(e.target.value)},value:b,placeholder:"Image Link"}),Object(j.jsxs)("ul",{children:[R.map((function(e,t){return Object(j.jsxs)("li",{className:"post_form_comp flex_row",children:[Object(j.jsxs)("p",{children:[t+1,"  "]}),Object(j.jsx)("img",{src:R[t].image,style:{width:100,height:100,marginBottom:5}}),Object(j.jsx)("button",{className:"dynamic_button",type:"button",onClick:function(){return M(t)},children:"Delete"})]},e.id)})),Object(j.jsx)("button",{className:"dynamic_button",type:"button",onClick:function(){V({image:b}),m("")},children:"Add"})]}),L.news_type&&Object(j.jsx)("span",{className:"error",children:"News Type field is required"})]}),Object(j.jsxs)("div",{className:"post_form_comp",children:[Object(j.jsx)("label",{children:"Poll Title ( IF THIS IS FOR POLL)"}),Object(j.jsx)("input",Object(o.a)({},T("poll_title",{required:!1}))),L.poll_title&&Object(j.jsx)("span",{className:"error",children:"Poll Title field is required"})]}),Object(j.jsxs)("div",{className:"post_form_comp",children:[Object(j.jsx)("label",{children:"Image"}),Object(j.jsx)("input",Object(o.a)({},T("image",{required:!1}))),L.image&&Object(j.jsx)("span",{className:"error",children:"image Link field is required"})]}),Object(j.jsxs)("div",{className:"post_form_comp",children:[Object(j.jsx)("label",{children:"Tags"}),Object(j.jsx)(z.a,{defaultValue:w,onChange:N,options:v,isMulti:!0,value:w,isSearchable:!0})]}),Object(j.jsx)("input",{type:"submit",className:"button"})]})})]})},K=function(e){e.history;var t=Object(s.useState)(""),r=Object(O.a)(t,2),c=r[0],n=(r[1],Object(s.useState)("")),a=Object(O.a)(n,2);a[0],a[1],Object(u.b)(),Object(u.c)((function(e){return e.userAuth.user}));return c?Object(j.jsx)("span",{className:"error-message",children:c}):Object(j.jsxs)("div",{className:"dashboard_page",children:[Object(j.jsx)(C,{}),Object(j.jsxs)("div",{className:"dashboard_flex_row",children:[Object(j.jsx)(q,{}),Object(j.jsx)("div",{className:"dashboard_comp",children:Object(j.jsx)(X,{})})]})]})},Q=function(e){e.history,e.match;var t=Object(i.h)().emailToken,r=V.userEmailVerify,c=Object(s.useState)(""),n=Object(O.a)(c,2),a=n[0],o=n[1],l=Object(s.useState)(""),u=Object(O.a)(l,2),d=u[0],b=u[1];Object(s.useEffect)((function(){}),[]);var m=function(){var e=Object(h.a)(Object(p.a)().mark((function e(s){var c,n,a;return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.prev=1,e.next=4,r(t);case 4:(c=e.sent).success?(o(c.data),window.alert(c.data)):b(c.data.error),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),b(null===(n=e.t0.response)||void 0===n||null===(a=n.data)||void 0===a?void 0:a.error),setTimeout((function(){b("")}),5e3);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"resetpassword-screen",children:Object(j.jsxs)("div",{className:"resetpassword-screen__form",children:[Object(j.jsx)("h3",{className:"resetpassword-screen__title",children:"Email Verification"}),a&&Object(j.jsx)("p",{className:"success-message",children:a}),d&&!a&&Object(j.jsxs)("p",{className:"error-message",children:[" ",d," "]}),(!d||!a)&&Object(j.jsx)("button",{type:"submit",onClick:m,className:"btn btn-primary",children:"Click Here to verify"})]})})},Y=function(){var e=Object(u.c)((function(e){return e.userAuth.user}));return f.a.interceptors.request.use((function(t){return e&&(t.headers.Authorization="Bearer ".concat(e.token)),t}),(function(e){return Promise.reject(e)})),f.a.interceptors.response.use((function(t){return e&&(t.headers.Authorization="Bearer ".concat(e.token)),t}),(function(e){return Promise.reject(e)})),Object(j.jsx)(a.a,{children:Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(b,{exact:!0,path:"/add-post",component:J}),Object(j.jsx)(b,{exact:!0,path:"/edit-post/:newsId",component:K}),Object(j.jsx)(b,{exact:!0,path:"/add-slide",component:W}),Object(j.jsx)(b,{exact:!0,path:"/",component:L}),Object(j.jsx)(i.b,{exact:!0,path:"/login",component:E}),Object(j.jsx)(i.b,{exact:!0,path:"/register",component:R}),Object(j.jsx)(i.b,{exact:!0,path:"/forgotpassword",component:M}),Object(j.jsx)(i.b,{exact:!0,path:"/passwordreset/:resetToken",component:B}),Object(j.jsx)(i.b,{exact:!0,path:"/email-verify/:emailToken",component:Q})]})})},Z=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,117)).then((function(t){var r=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,a=t.getTTFB;r(e),s(e),c(e),n(e),a(e)}))},$=r(63),ee=r(38),te=r(61),re=r(18),se=r(62),ce=r.n(se),ne=Object(re.b)({userAuth:S}),ae={key:"root",storage:ce.a,version:1,whitelist:["userAuth"]},ie=Object(ee.a)(ae,ne),oe=r(27),le=Object(p.a)().mark(de),ue=Object(p.a)().mark(be);function je(e){return f.a.request({method:"post",url:"".concat(D,"auth/login"),data:e})}function de(e){var t;return Object(p.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(oe.a)(je,e.payload);case 2:return t=r.sent,r.next=5,Object(oe.b)(w(t.data.data));case 5:return r.next=7,Object(oe.b)(k());case 7:case"end":return r.stop()}}),le)}function be(){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(oe.d)("user/getAuthFetch",de);case 2:case"end":return e.stop()}}),ue)}var pe=be,he=Object(p.a)().mark(Oe);function Oe(){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(oe.c)(pe);case 2:case"end":return e.stop()}}),he)}var me=Object($.a)(),fe=Object(x.a)({reducer:ie,devTools:!0,middleware:[me]});me.run(Oe),n.a.render(Object(j.jsx)(u.a,{store:fe,children:Object(j.jsx)(te.a,{loading:null,persistor:Object(ee.b)(fe),children:Object(j.jsx)(Y,{})})}),document.getElementById("root")),Z()},31:function(e,t,r){},55:function(e,t,r){},68:function(e,t,r){},97:function(e,t,r){},98:function(e,t,r){},99:function(e,t,r){}},[[116,1,2]]]);
//# sourceMappingURL=main.b5bde272.chunk.js.map