(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{31902:function(t,e,s){"use strict";var n=s(85893),r=(s(67294),s(41664)),a=s(42181),i=s(3187);e.Z=function(t){var e=t.posts;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("ul",{className:"post_list",children:e&&e.length>0&&e.map((function(t){var e=t.slug,s=t.data;return(0,n.jsxs)("li",{className:"post_list__list",children:[(0,n.jsx)("div",{className:"post_list__list__left",children:(0,n.jsxs)("div",{className:"post_list__list__left__story",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(r.default,{href:"/posts/".concat(e),children:(0,n.jsx)("a",{className:"post_list__list__link",children:s.title})}),(0,n.jsx)("p",{className:"paragraph post_list__list__excerpt",children:s.excerpt})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"paragraph",children:(0,n.jsx)(a.p,{dateString:s.date})}),(0,n.jsx)(i.Z,{tags:s.tags})]})]})}),(0,n.jsx)("div",{className:"post_list__list__right",children:s.image?(0,n.jsx)("img",{className:"post_list__list__image",src:"/images/posts/".concat(s.image),alt:s.image}):(0,n.jsx)("div",{})})]},e)}))})})}},3187:function(t,e,s){"use strict";var n=s(85893),r=(s(67294),s(41664)),a=s(17625),i=s(51436);e.Z=function(t){var e=t.tags;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("ul",{className:"post_tag_list",children:e&&e.length>0&&e.map((function(t,e){return(0,n.jsxs)("li",{children:[(0,n.jsx)(a.G,{icon:i.LEN}),"\xa0",(0,n.jsx)(r.default,{href:"/tags/".concat(t),children:(0,n.jsx)("a",{className:"post_tag_list__link",children:t})})]},e)}))})})}},10179:function(t,e,s){"use strict";s.d(e,{Z:function(){return c}});var n=s(85893);var r=s(40181);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var s=[],n=!0,r=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(s.push(i.value),!e||s.length!==e);n=!0);}catch(l){r=!0,a=l}finally{try{n||null==c.return||c.return()}finally{if(r)throw a}}return s}}(t,e)||(0,r.Z)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}s(67294);var i=s(41664),c=function(t){var e=t.tags;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("ul",{className:"tag_list",children:e&&Object.entries(e).map((function(t){var e=a(t,2),s=e[0],r=e[1];return(0,n.jsx)("li",{children:(0,n.jsx)(i.default,{href:"/tags/".concat(s),children:(0,n.jsxs)("a",{className:"tag_list__link",children:[s,"(",r,")"]})})},s)}))})})}},42181:function(t,e,s){"use strict";s.d(e,{p:function(){return l}});var n=s(85893),r=s(23855),a=s(84790),i=s(17625),c=s(56024),l=function(t){var e=t.dateString,s=(0,r.Z)(e);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.G,{icon:c.IV}),"\xa0",(0,n.jsx)("time",{dateTime:e,children:(0,a.Z)(s,"LLLL d, yyyy")})]})}},12562:function(t,e,s){"use strict";s.r(e),s.d(e,{__N_SSG:function(){return l}});var n=s(85893),r=(s(67294),s(9008)),a=s(31902),i=s(10179),c="Personal tech blog about web and mobile app development - especially frontend frameworks like React.",l=!0;e.default=function(t){var e=t.recentPosts,s=t.allTags;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.default,{children:[(0,n.jsx)("title",{children:"<hgshdt\xa0/>"}),(0,n.jsx)("meta",{name:"description",content:c})]}),(0,n.jsx)("div",{className:"description",children:(0,n.jsx)("p",{className:"paragraph",children:c})}),(0,n.jsxs)("section",{className:"section_features",children:[(0,n.jsxs)("article",{className:"section_features__posts",children:[(0,n.jsx)("h2",{className:"heading2",children:"Recent Posts"}),(0,n.jsx)(a.Z,{posts:e})]}),(0,n.jsxs)("article",{className:"section_features__tags",children:[(0,n.jsx)("h2",{className:"heading2",children:"All Tags"}),(0,n.jsx)(i.Z,{tags:s})]})]})]})}},45301:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(12562)}])},30907:function(t,e,s){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,n=new Array(e);s<e;s++)n[s]=t[s];return n}s.d(e,{Z:function(){return n}})},40181:function(t,e,s){"use strict";s.d(e,{Z:function(){return r}});var n=s(30907);function r(t,e){if(t){if("string"===typeof t)return(0,n.Z)(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);return"Object"===s&&t.constructor&&(s=t.constructor.name),"Map"===s||"Set"===s?Array.from(t):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?(0,n.Z)(t,e):void 0}}}},function(t){t.O(0,[844,774,888,179],(function(){return e=45301,t(t.s=e);var e}));var e=t.O();_N_E=e}]);