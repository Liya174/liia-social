(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[5],{306:function(e,s,r){e.exports={userPage:"Users_userPage__2KRVQ",subtitle:"Users_subtitle__1NcQK",button:"Users_button__GVR79"}},307:function(e,s,r){e.exports={button:"User_button__1nikb",user:"User_user__avlCy",userAvatar:"User_userAvatar__3FOHm",avatar:"User_avatar__2zNet",userInfo:"User_userInfo__1CpHB",general:"User_general__DQeWU",living:"User_living__3jGhu",name:"User_name__1WIJC",status:"User_status__sammY"}},308:function(e,s,r){e.exports={pages:"Paginator_pages__16sEE",pageNumber:"Paginator_pageNumber__2XY6F",selected:"Paginator_selected__2Uprh",arrowButtons:"Paginator_arrowButtons__2qzas"}},311:function(e,s,r){"use strict";r.r(s);var t=r(52),n=r(53),a=r(63),o=r(62),c=r(1),i=r(16),l=r(0),u=r.n(l),g=r(136),d=r(102),b=r(306),f=r.n(b),j=r(98),h=r(30),p=r(307),_=r.n(p),m=function(e){var s=e.user,r=e.followingInProgress,t=e.followUser,n=e.unfollowUser;return Object(c.jsxs)("div",{className:_.a.user,children:[Object(c.jsxs)("div",{className:_.a.userAvatar,children:[Object(c.jsx)(h.b,{to:"/profile/".concat(s.id),children:Object(c.jsx)("img",{src:s.photos.small||j.a,alt:"avatar",className:_.a.avatar})}),Object(c.jsx)("button",{disabled:r.some((function(e){return e===s.id})),onClick:function(){s.followed?n(s.id):t(s.id)},className:_.a.button,children:s.followed?"Unfollow":"Follow"})]}),Object(c.jsxs)("div",{className:_.a.userInfo,children:[Object(c.jsxs)("div",{className:_.a.general,children:[Object(c.jsx)("div",{className:_.a.name,children:s.name}),Object(c.jsx)("div",{className:_.a.status,children:s.status||"There is no status"})]}),Object(c.jsxs)("div",{className:_.a.living,children:[Object(c.jsx)("div",{children:"here would be country"}),Object(c.jsx)("div",{children:"here would be city"})]})]})]},s.id)},v=r(101),P=r(308),U=r.n(P),w=r.p+"static/media/arrowLeft.842e761b.svg",O=r.p+"static/media/arrowRight.e1da7cbe.svg",x=function(e){for(var s=e.totalItemsCount,r=e.pageSize,t=e.currentPage,n=e.onPageChanged,a=e.portionSize,o=void 0===a?10:a,i=Math.ceil(s/r),u=[],g=1;g<=i;g++)u.push(g);var d=Math.ceil(i/o),b=Object(l.useState)(1),f=Object(v.a)(b,2),j=f[0],h=f[1],p=(j-1)*o+1,_=j*o,m=u.filter((function(e){return e>=p&&e<=_})).map((function(e){return Object(c.jsx)("button",{className:"".concat(U.a.pageNumber," ").concat(e===t&&U.a.selected),onClick:function(){return n(e)},children:e},e)}));return Object(c.jsxs)("div",{className:U.a.pages,children:[j>1&&Object(c.jsx)("button",{className:U.a.arrowButtons,onClick:function(){h(j-1),n(p-o)},children:Object(c.jsx)("img",{src:w,alt:"left"})}),m,j<d&&Object(c.jsx)("button",{className:U.a.arrowButtons,onClick:function(){h(j+1),n(p+o)},children:Object(c.jsx)("img",{src:O,alt:"right"})})]})},C=function(e){var s=e.totalUsersCount,r=e.pageSize,t=e.currentPage,n=e.onPageChanged,a=e.users,o=e.followingInProgress,i=e.followUser,l=e.unfollowUser;Object(d.a)(e,["totalUsersCount","pageSize","currentPage","onPageChanged","users","followingInProgress","followUser","unfollowUser"]);return Object(c.jsxs)("div",{className:f.a.userPage,children:[Object(c.jsx)("h2",{className:f.a.subtitle,children:"Users"}),Object(c.jsx)(x,{totalItemsCount:s,pageSize:r,currentPage:t,onPageChanged:n}),Object(c.jsx)("div",{children:a.map((function(e){return Object(c.jsx)(m,{user:e,followingInProgress:o,followUser:i,unfollowUser:l},e.id)}))})]})},N=r(91),z=r(10),I=function(e){return e.usersPage.users},S=function(e){return e.usersPage.pageSize},k=function(e){return e.usersPage.totalUsersCount},F=function(e){return e.usersPage.currentPage},y=function(e){return e.usersPage.isFetching},B=function(e){return e.usersPage.followingInProgress},q=function(e){Object(a.a)(r,e);var s=Object(o.a)(r);function r(){var e;Object(t.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=s.call.apply(s,[this].concat(a))).onPageChanged=function(s){var r=e.props.pageSize;e.props.requestUsers(r,s)},e}return Object(n.a)(r,[{key:"componentDidMount",value:function(){var e=this.props,s=e.pageSize,r=e.currentPage;this.props.requestUsers(s,r)}},{key:"render",value:function(){var e=this.props,s=e.users,r=e.totalUsersCount,t=e.pageSize,n=e.followUser,a=e.unfollowUser,o=e.currentPage,i=e.followingInProgress;return Object(c.jsxs)(c.Fragment,{children:[this.props.isFetching?Object(c.jsx)(N.a,{}):null,Object(c.jsx)(C,{users:s,totalUsersCount:r,pageSize:t,followingInProgress:i,currentPage:o,onPageChanged:this.onPageChanged,followUser:n,unfollowUser:a})]})}}]),r}(u.a.Component),A={setCurrentPage:g.d,toggleFollowingProgress:g.e,requestUsers:g.c,unfollowUser:g.f,followUser:g.b};s.default=Object(z.d)(Object(i.b)((function(e){return{users:I(e),pageSize:S(e),totalUsersCount:k(e),currentPage:F(e),isFetching:y(e),followingInProgress:B(e)}}),A))(q)}}]);
//# sourceMappingURL=5.640bde32.chunk.js.map