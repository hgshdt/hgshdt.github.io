(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{1902:function(s,t,e){"use strict";e(7294);var i=e(1664),n=e(2181),a=e(3187),l=e(5893);t.Z=function(s){var t=s.posts;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("ul",{className:"post_list",children:t&&t.length>0&&t.map((function(s){var t=s.slug,e=s.data;return(0,l.jsxs)("li",{className:"post_list__list",children:[(0,l.jsx)("div",{className:"post_list__list__left",children:(0,l.jsxs)("div",{className:"post_list__list__left__story",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(i.default,{href:"/posts/".concat(t),children:(0,l.jsx)("a",{className:"post_list__list__link",children:e.title})}),(0,l.jsx)("p",{className:"paragraph post_list__list__excerpt",children:e.excerpt})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"small",children:(0,l.jsx)(n.p,{dateString:e.date})}),(0,l.jsx)(a.Z,{tags:e.tags})]})]})}),(0,l.jsx)("div",{className:"post_list__list__right",children:e.image?(0,l.jsx)("img",{className:"post_list__list__image",src:"/images/posts/".concat(e.image),alt:e.image}):(0,l.jsx)("div",{})})]},t)}))})})}},3187:function(s,t,e){"use strict";var i=e(1664),n=e(7625),a=e(9398),l=e(5893);t.Z=function(s){var t=s.tags;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("ul",{className:"post_tag_list",children:t&&t.length>0&&t.map((function(s,t){return(0,l.jsx)("li",{children:(0,l.jsxs)("p",{className:"small",children:[(0,l.jsx)(n.G,{icon:a.LEN}),"\xa0",(0,l.jsx)(i.default,{href:"/tags/".concat(s),children:(0,l.jsx)("a",{className:"post_tag_list__link",children:s})})]})},t)}))})})}},2181:function(s,t,e){"use strict";e.d(t,{p:function(){return c}});var i=e(3855),n=e(4790),a=e(7625),l=e(6024),r=e(5893),c=function(s){var t=s.dateString,e=(0,i.Z)(t);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.G,{icon:l.IV}),"\xa0",(0,r.jsx)("time",{dateTime:t,children:(0,n.Z)(e,"LLLL d, yyyy")})]})}},7205:function(s,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return l}});var i=e(9008),n=e(1902),a=e(5893),l=!0;t.default=function(s){var t=s.tagPosts,e=s.tag;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.default,{children:[(0,a.jsxs)("title",{children:["All ",e," Posts"]}),(0,a.jsx)("meta",{name:"description",content:""})]}),(0,a.jsx)("section",{className:"section_features",children:(0,a.jsxs)("article",{className:"section_features__posts--wide",children:[(0,a.jsxs)("h2",{className:"heading2",children:["All ",e," posts"]}),(0,a.jsx)(n.Z,{posts:t})]})})]})}},4414:function(s,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags/[tag]",function(){return e(7205)}])}},function(s){s.O(0,[24,522,774,888,179],(function(){return t=4414,s(s.s=t);var t}));var t=s.O();_N_E=t}]);