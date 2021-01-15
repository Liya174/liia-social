/*! For license information please see 3.f42a03a4.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[3],{298:function(t,e,a){t.exports={profileInfo:"ProfileInfo_profileInfo__3laMU",informationBlock:"ProfileInfo_informationBlock__2FJWo",userInfo:"ProfileInfo_userInfo__3ragr",avatar:"ProfileInfo_avatar__3NPfm",avatarImage:"ProfileInfo_avatarImage__2p6iw",avatarChange:"ProfileInfo_avatarChange__3Raq_",avatarInputHidden:"ProfileInfo_avatarInputHidden__2qRQi",nameBlock:"ProfileInfo_nameBlock__2yFvY",name:"ProfileInfo_name__XbNsr",editButton:"ProfileInfo_editButton__10Ks4",editImage:"ProfileInfo_editImage__19Gcv",jobStatus:"ProfileInfo_jobStatus__2XdjV",aboutMe:"ProfileInfo_aboutMe__35K7P",userContacts:"ProfileInfo_userContacts__1AnA7",question:"ProfileInfo_question__2TvgL",jobStatusImage:"ProfileInfo_jobStatusImage__keZaj",contact:"ProfileInfo_contact__rb3FY",statusBlock:"ProfileInfo_statusBlock__3YymL",statusText:"ProfileInfo_statusText__2ic7o",statusInput:"ProfileInfo_statusInput__3r77-",editStatus:"ProfileInfo_editStatus__140yW",input:"ProfileInfo_input__2ayyQ",nameInput:"ProfileInfo_nameInput__mvpnp",checkboxLine:"ProfileInfo_checkboxLine__1Ny76",checkbox:"ProfileInfo_checkbox__3t-4h",textarea:"ProfileInfo_textarea__1xJL3",errorField:"ProfileInfo_errorField__2rjB5",active:"ProfileInfo_active__2tdU7",userContactsEdit:"ProfileInfo_userContactsEdit__1xhHF",userContactEdit:"ProfileInfo_userContactEdit__2Jaov"}},299:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var s=a(103);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var a=[],s=!0,o=!1,n=void 0;try{for(var r,c=t[Symbol.iterator]();!(s=(r=c.next()).done)&&(a.push(r.value),!e||a.length!==e);s=!0);}catch(i){o=!0,n=i}finally{try{s||null==c.return||c.return()}finally{if(o)throw n}}return a}}(t,e)||Object(s.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},300:function(t,e,a){var s;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var s=arguments[e];if(s){var n=typeof s;if("string"===n||"number"===n)t.push(s);else if(Array.isArray(s)&&s.length){var r=o.apply(null,s);r&&t.push(r)}else if("object"===n)for(var c in s)a.call(s,c)&&s[c]&&t.push(c)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(s=function(){return o}.apply(e,[]))||(t.exports=s)}()},301:function(t,e,a){t.exports={myPosts:"MyPosts_myPosts__3HdBM",posts:"MyPosts_posts__KHChe",subtitle:"MyPosts_subtitle__xGorV",newPost:"MyPosts_newPost__28B6O",textarea:"MyPosts_textarea__1e2j5",addButton:"MyPosts_addButton__2ysiz"}},302:function(t,e,a){},303:function(t,e,a){t.exports={postBlock:"Post_postBlock__1ivsN",post:"Post_post__2b-da",avatar:"Post_avatar__33r0Y",text:"Post_text__APccQ",likes:"Post_likes__EYPXV",button:"Post_button__3Ar6O"}},311:function(t,e,a){"use strict";a.r(e);var s=a(3),o=a(53),n=a(54),r=a(66),c=a(65),i=a(1),l=a(0),u=a.n(l),d=a(17),f=a(11),j=(a(302),a(301)),b=a.n(j),m=a(303),p=a.n(m),h=function(t){var e=t.postInfo,a=t.userAvatar,s=e.message,o=e.likeCount;return Object(i.jsxs)("div",{className:p.a.postBlock,children:[Object(i.jsxs)("div",{className:p.a.post,children:[Object(i.jsx)("img",{className:p.a.avatar,src:a,alt:"avatar"}),Object(i.jsx)("p",{className:p.a.text,children:s})]}),Object(i.jsxs)("div",{className:p.a.likes,children:[Object(i.jsx)("button",{className:p.a.button}),o]})]})},_=a(133),v=a(134),O=a(63),x=a(101),P=Object(O.a)(200),g=Object(x.a)("textarea"),I=Object(v.a)({form:"newPost"})((function(t){return Object(i.jsxs)("form",{className:b.a.newPost,onSubmit:t.handleSubmit,children:[Object(i.jsx)(_.a,{component:g,name:"textarea",className:b.a.textarea,placeholder:"Write new post here",validate:[O.b,P]}),Object(i.jsx)("button",{className:b.a.addButton,children:"Add new post"})]})})),N=a(100),y=function(t){var e=t.postsInfo,a=t.userProfile,s=t.addPost,o=e.map((function(t){return Object(i.jsx)(h,{postInfo:t,userAvatar:a?a.photos.small:N.a},t.id)}));return Object(i.jsxs)("div",{className:b.a.myPosts,children:[Object(i.jsx)("h2",{className:b.a.subtitle,children:"My posts"}),Object(i.jsx)(I,{onSubmit:function(t){s(t.textarea)}}),Object(i.jsx)("div",{className:b.a.posts,children:o})]})},k=a(102),S={addPost:k.a},w=Object(d.b)((function(t){var e=t.profilePage;return{postsInfo:e.postsInfo,newPostText:e.newPostText,userProfile:e.userProfile}}),S)(y),B=a(299),C=a(93),M=a(298),A=a.n(M),F=a(52),U=function(t){var e=t.userStatus,a=t.updateStatus,s=(Object(F.a)(t,["userStatus","updateStatus"]),Object(l.useState)(!1)),o=Object(B.a)(s,2),n=o[0],r=o[1],c=Object(l.useState)(e),u=Object(B.a)(c,2),d=u[0],f=u[1],j=function(){r(!1),a(d)};return Object(i.jsxs)("div",{className:A.a.statusBlock,children:[!n&&Object(i.jsx)("div",{className:A.a.statusText,children:Object(i.jsx)("span",{onDoubleClick:function(){r(!0)},children:e||"No status"})}),n&&Object(i.jsx)("div",{className:A.a.editStatus,children:Object(i.jsx)("input",{className:A.a.statusInput,autoFocus:!0,onBlur:j,onChange:function(t){f(t.target.value)},onKeyDown:function(t){"Enter"===t.code&&j()},value:d})})]})},E=a.p+"static/media/thumbDown.6c6922b4.svg",q=a.p+"static/media/thumbUp.2d0dd251.svg",L=a.p+"static/media/youtube.cb1a5678.svg",J=a.p+"static/media/instagram.6ed2cb52.svg",T=a.p+"static/media/twitter.5ae9f4cf.svg",D=a.p+"static/media/facebook.98aa7037.svg",H=a.p+"static/media/website.5ef68a8a.svg",K=a.p+"static/media/github.04be58c1.svg",Y=a.p+"static/media/mainLink.73cb4430.svg",z={facebook:D,website:H,vk:a.p+"static/media/vk.5489041b.svg",twitter:T,instagram:J,youtube:L,github:K,mainLink:Y},V=function(t){var e=t.contactKey,a=t.contacts;return Object(i.jsx)("a",{className:A.a.contact,href:a[e].includes("https://")?a[e]:"https://".concat(a[e]),target:"_blank",rel:"noopener noreferrer",children:Object(i.jsx)("img",{src:z[e],alt:e})})},Q=a.p+"static/media/edit.836f7dde.svg",W=function(t){var e=t.profile,a=t.isOwner,s=t.goToEditMode,o=e.aboutMe,n=e.contacts,r=e.lookingForAJob,c=e.lookingForAJobDescription,l=e.fullName;return Object(i.jsxs)("div",{className:A.a.userInfo,children:[Object(i.jsxs)("div",{className:A.a.nameBlock,children:[Object(i.jsx)("h3",{className:A.a.name,children:l}),a&&Object(i.jsx)("button",{className:A.a.editButton,onClick:s,children:Object(i.jsx)("img",{className:A.a.editImage,src:Q,alt:"edit"})})]}),Object(i.jsxs)("div",{className:A.a.jobStatus,children:[Object(i.jsx)("p",{className:A.a.question,children:"Looking for a job:"}),Object(i.jsx)("img",{className:A.a.jobStatusImage,src:r?q:E,alt:"hm"}),Object(i.jsx)("p",{children:c})]}),Object(i.jsxs)("div",{className:A.a.aboutMe,children:[Object(i.jsx)("p",{className:A.a.question,children:"About me:"}),Object(i.jsx)("p",{children:o})]}),Object(i.jsxs)("div",{className:A.a.userContacts,children:[Object(i.jsx)("p",{className:A.a.question,children:"Contacts:"}),Object.keys(n).map((function(t){return n[t]&&Object(i.jsx)(V,{contactKey:t,contacts:n},t)}))]})]})},X=a(55),G=a(300),R=a.n(G),Z=a.p+"static/media/save.1d2830c7.svg",$=Object(x.a)("input"),tt=Object(x.a)("textarea"),et=Object(O.a)(150),at=Object(v.a)({form:"profileInfo"})((function(t){var e=t.contacts,a=t.handleSubmit,s=t.error;return Object(i.jsxs)("form",{className:A.a.userInfo,onSubmit:a,children:[Object(i.jsxs)("div",{className:A.a.nameBlock,children:[Object(i.jsx)("h3",{className:A.a.name,children:"Full name: "}),Object(i.jsx)(_.a,{component:$,name:"fullName",className:"".concat(A.a.nameInput," ").concat(A.a.input)}),Object(i.jsx)("button",{className:A.a.editButton,children:Object(i.jsx)("img",{className:A.a.editImage,src:Z,alt:"save"})})]}),Object(i.jsxs)("div",{className:A.a.jobStatus,children:[Object(i.jsx)("p",{className:A.a.question,children:"Looking for a job:"}),Object(i.jsxs)("div",{className:A.a.checkboxLine,children:[Object(i.jsx)(_.a,{component:$,type:"checkbox",name:"lookingForAJob",className:A.a.checkbox,validate:et}),Object(i.jsx)("label",{children:"Yes/No"})]})]}),Object(i.jsx)(_.a,{component:tt,placeholder:"My professional skills",className:A.a.textarea,name:"lookingForAJobDescription",validate:et}),Object(i.jsx)("div",{className:A.a.aboutMe,children:Object(i.jsx)("p",{className:A.a.question,children:"About me:"})}),Object(i.jsx)(_.a,{component:tt,placeholder:"About me",className:A.a.textarea,name:"aboutMe"}),Object(i.jsx)("p",{className:A.a.question,children:"Contacts:"}),Object(i.jsx)("div",{className:"".concat(A.a.userContacts," ").concat(A.a.userContactsEdit),children:Object.keys(e).map((function(t){return Object(i.jsxs)("div",{className:A.a.userContactEdit,children:[Object(i.jsxs)("span",{children:[t,":"]}),Object(i.jsx)(_.a,{component:$,placeholder:t,name:"contacts."+t,className:A.a.input})]},t)}))}),Object(i.jsx)("div",{className:R()(A.a.errorField,Object(X.a)({},A.a.active,s)),children:s})]})})),st=function(t){var e=t.isOwner,a=t.userProfile,s=t.userStatus,o=t.updateStatus,n=t.saveUploadedPhoto,r=t.saveProfile,c=Object(l.useState)(!1),u=Object(B.a)(c,2),d=u[0],f=u[1];if(!a)return Object(i.jsx)(C.a,{});return Object(i.jsxs)("div",{className:A.a.profileInfo,children:[Object(i.jsxs)("div",{className:A.a.informationBlock,children:[Object(i.jsxs)("div",{className:A.a.avatar,children:[Object(i.jsx)("img",{className:A.a.avatarImage,src:a.photos.large||N.a,alt:"avatar"}),e&&Object(i.jsxs)("label",{className:A.a.avatarChange,children:["Change the avatar",Object(i.jsx)("input",{className:A.a.avatarInputHidden,type:"file",onChange:function(t){t.target.files.length&&n(t.target.files[0])}})]})]}),d?Object(i.jsx)(at,{initialValues:a,contacts:a.contacts,quitEditMode:function(){return f(!1)},onSubmit:function(t){r(t).then((function(){return f(!1)}))}}):Object(i.jsx)(W,{profile:a,isOwner:e,goToEditMode:function(){return f(!0)}})]}),Object(i.jsx)(U,{userStatus:s,updateStatus:o})]})},ot=function(t){var e=t.isOwner,a=t.userProfile,s=t.userStatus,o=t.updateStatus,n=t.saveUploadedPhoto,r=t.saveProfile;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(st,{isOwner:e,userProfile:a,userStatus:s,updateStatus:o,saveUploadedPhoto:n,saveProfile:r}),Object(i.jsx)(w,{})]})},nt=a(10),rt=function(t){Object(r.a)(a,t);var e=Object(c.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(n.a)(a,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||(t=this.props.history.push("/login")),this.props.getUserProfile(t),this.props.getUserStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(i.jsx)(ot,Object(s.a)(Object(s.a)({},this.props),{},{isOwner:!this.props.match.params.userId}))}}]),a}(u.a.Component);e.default=Object(nt.d)(Object(d.b)((function(t){return{userProfile:t.profilePage.userProfile,userStatus:t.profilePage.userStatus,authorizedUserId:t.auth.id,isAuth:t.auth.id}}),{getUserProfile:k.c,getUserStatus:k.d,updateStatus:k.g,saveUploadedPhoto:k.f,saveProfile:k.e}),f.g)(rt)}}]);
//# sourceMappingURL=3.f42a03a4.chunk.js.map