(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{3187:function(e,n,r){"use strict";var a=r(5893),s=r(1664),t=r(7625),i=r(9398);n.Z=function(e){var n=e.tags;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("ul",{className:"post_tag_list",children:n&&n.length>0&&n.map((function(e,n){return(0,a.jsxs)("li",{children:[(0,a.jsx)(t.G,{icon:i.LEN}),"\xa0",(0,a.jsx)(s.default,{href:"/tags/".concat(e),children:(0,a.jsx)("a",{className:"post_tag_list__link",children:e})})]},n)}))})})}},2181:function(e,n,r){"use strict";r.d(n,{p:function(){return l}});var a=r(5893),s=r(3855),t=r(4790),i=r(7625),c=r(6024),l=function(e){var n=e.dateString,r=(0,s.Z)(n);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.G,{icon:c.IV}),"\xa0",(0,a.jsx)("time",{dateTime:n,children:(0,t.Z)(r,"LLLL d, yyyy")})]})}},4088:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return E},default:function(){return S}});var a=r(5893),s=r(9008),t=(r(7294),r(1163)),i=r(5759),c=r(8390),l=r(2041),o=r(6929),d=r(2422),u=r(6993),h=r(7893),g=r(2521),m=r(7129),x=r(3611),j=r(7032),p=r(9865);c.Z.registerLanguage("js",l.Z),c.Z.registerLanguage("jsx",o.Z),c.Z.registerLanguage("css",d.Z),c.Z.registerLanguage("html",u.Z),c.Z.registerLanguage("tsx",h.Z),c.Z.registerLanguage("ts",g.Z),c.Z.registerLanguage("yml",m.Z);var _=function(e){var n=e.inline,r=e.className,s=e.children,t=(0,p.T)().isDark;if(n)return(0,a.jsx)("code",{className:"inline_code",children:s});var i=/language-(\w+)(:.+)/.exec(r||""),l=i&&i[1]?i[1]:"",o=i&&i[2]?i[2].slice(1):"";return(0,a.jsxs)("div",{className:"code_block",children:[(0,a.jsx)("div",{className:"code_block__title",children:o}),(0,a.jsx)("div",{className:"code_block__content",children:(0,a.jsx)(c.Z,{style:t?x.Z:j.Z,language:l,children:String(s).replace(/\n$/,"")})})]})},f=function(e){var n=e.level,r=e.children;return 1===n?(0,a.jsx)("h2",{className:"heading2 u-margin-bottom-small u-margin-top-small",children:r}):2===n?(0,a.jsx)("h3",{className:"heading3 u-margin-bottom-small u-margin-top-small",children:r}):(0,a.jsx)("h4",{className:"heading4 u-margin-bottom-small u-margin-top-small",children:r})},N=function(e){e.depth,e.ordered;var n=e.children;return(0,a.jsx)("ul",{className:"ul",children:n})},v=function(e){e.checked,e.index,e.ordered;var n=e.children;return(0,a.jsx)("li",{className:"li",children:n})},Z=function(e){e.depth,e.ordered;var n=e.children;return(0,a.jsx)("ol",{className:"ol",children:n})},k=function(e){var n=e.node,r=e.children,s=n.children[0];return"element"===s.type&&"img"===s.tagName?(0,a.jsx)("div",{children:(0,a.jsx)("img",{className:"post_paragraph_img",src:"/images/posts/".concat(s.properties.src),alt:s.properties.alt})}):(0,a.jsx)("p",{children:r})},b=function(e){var n=e.node,r=e.children;return(0,a.jsx)("a",{target:"_blank",href:n.properties.href,rel:"noopener noreferrer",children:r})},L=r(2181),w=r(3187),y=function(e){var n=e.post,r=(0,t.useRouter)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{className:"heading2 u-margin-bottom-small",children:n.data.title}),(0,a.jsx)("p",{className:"paragraph",children:(0,a.jsx)(L.p,{dateString:n.data.date})}),(0,a.jsx)("div",{className:"u-margin-bottom-small",children:(0,a.jsx)(w.Z,{tags:n.data.tags})}),(0,a.jsx)(i.Z,{className:"post_content",components:{h1:f,h2:f,h3:f,ol:Z,li:v,ul:N,code:_,p:k,a:b},children:n.content}),(0,a.jsx)("div",{className:"backToHome",children:(0,a.jsx)("a",{onClick:function(){return r.back()},children:"\u2190\xa0Back"})})]})},E=!0,S=function(e){var n=e.postData;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.default,{children:(0,a.jsx)("title",{children:n.data.title})}),(0,a.jsx)("section",{className:"section_post",children:(0,a.jsx)("article",{children:(0,a.jsx)(y,{post:n})})})]})}},9035:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return r(4088)}])}},function(e){e.O(0,[24,522,489,774,888,179],(function(){return n=9035,e(e.s=n);var n}));var n=e.O();_N_E=n}]);