(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{3187:function(e,n,r){"use strict";var t=r(5893),s=(r(7294),r(1664)),a=r(7625),i=r(1436);n.Z=function(e){var n=e.tags;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("ul",{className:"post_tag_list",children:n&&n.length>0&&n.map((function(e,n){return(0,t.jsxs)("li",{children:[(0,t.jsx)(a.G,{icon:i.LEN}),"\xa0",(0,t.jsx)(s.default,{href:"/tags/".concat(e),children:(0,t.jsx)("a",{className:"post_tag_list__link",children:e})})]},n)}))})})}},2181:function(e,n,r){"use strict";r.d(n,{p:function(){return l}});var t=r(5893),s=r(3855),a=r(4790),i=r(7625),c=r(6024),l=function(e){var n=e.dateString,r=(0,s.Z)(n);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.G,{icon:c.IV}),"\xa0",(0,t.jsx)("time",{dateTime:n,children:(0,a.Z)(r,"LLLL d, yyyy")})]})}},4088:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return X},default:function(){return B}});var t=r(5893),s=r(9008),a=(r(7294),r(1163)),i=r(8456),c=r.n(i),l=r(35),o=r.n(l),d=r(2042),u=r(2041),h=r(6929),g=r(2422),m=r(6993),_=r(7893),p=r(2521),x=r(7129),j=r(3611),f=r(7032),N=r(9420),v=r.n(N),Z=r(7116);d.Z.registerLanguage("js",u.Z),d.Z.registerLanguage("jsx",h.Z),d.Z.registerLanguage("css",g.Z),d.Z.registerLanguage("html",m.Z),d.Z.registerLanguage("tsx",_.Z),d.Z.registerLanguage("ts",p.Z),d.Z.registerLanguage("yml",x.Z);var k=function(e){var n=e.inline,r=e.className,s=e.children,a=(0,Z.T)().isDark;if(n)return(0,t.jsx)("code",{className:v().inline_code,children:s});var i=/language-(\w+)(:.+)/.exec(r||""),c=i&&i[1]?i[1]:"",l=i&&i[2]?i[2].slice(1):"";return(0,t.jsxs)("div",{className:v().code,children:[(0,t.jsx)("div",{className:v().code__title,children:l}),(0,t.jsx)("div",{className:v().code__content,children:(0,t.jsx)(d.Z,{style:a?j.Z:f.Z,language:c,children:String(s).replace(/\n$/,"")})})]})},b=function(e){var n=e.level,r=e.children;return 1===n?(0,t.jsx)("h2",{className:"heading2 u-margin-bottom-small u-margin-top-small",children:r}):2===n?(0,t.jsx)("h3",{className:"heading3 u-margin-bottom-small u-margin-top-small",children:r}):(0,t.jsx)("h4",{className:"heading4 u-margin-bottom-small u-margin-top-small",children:r})},L=function(e){e.depth,e.ordered;var n=e.children;return(0,t.jsx)("ul",{className:"ul",children:n})},y=function(e){e.checked,e.index,e.ordered;var n=e.children;return(0,t.jsx)("li",{className:"li",children:n})},w=function(e){e.depth,e.ordered;var n=e.children;return(0,t.jsx)("ol",{className:"ol",children:n})},E=r(8452),S=r.n(E),T=function(e){var n=e.node,r=e.children,s=n.children[0];return"element"===s.type&&"img"===s.tagName?(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:S().p_img,src:"/images/posts/".concat(s.properties.src),alt:s.properties.alt})}):(0,t.jsx)("p",{children:r})},F=function(e){var n=e.node,r=e.children;return(0,t.jsx)("a",{target:"_blank",href:n.properties.href,rel:"noopener noreferrer",children:r})},G=r(2181),C=r(3187),O=function(e){var n=e.post,r=(0,a.useRouter)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h2",{className:"heading2 u-margin-bottom-small",children:n.data.title}),(0,t.jsx)("p",{className:"paragraph",children:(0,t.jsx)(G.p,{dateString:n.data.date})}),(0,t.jsx)("div",{className:"u-margin-bottom-small",children:(0,t.jsx)(C.Z,{tags:n.data.tags})}),(0,t.jsx)(c(),{className:o().post_content,children:n.content,components:{h1:b,h2:b,h3:b,ol:w,li:y,ul:L,code:k,p:T,a:F}}),(0,t.jsx)("div",{className:"backToHome",children:(0,t.jsx)("a",{onClick:function(){return r.back()},children:"\u2190\xa0Back"})})]})},X=!0,B=function(e){var n=e.postData;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.default,{children:(0,t.jsx)("title",{children:n.data.title})}),(0,t.jsx)("section",{className:"section_post",children:(0,t.jsx)("article",{children:(0,t.jsx)(O,{post:n})})})]})}},9035:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return r(4088)}])},9420:function(e){e.exports={code:"code-block_code__3OIGf",code__title:"code-block_code__title__3oN3v",inline_code:"code-block_inline_code__3SBzR"}},8452:function(e){e.exports={p_img:"paragraph_p_img__3hVuv"}},35:function(e){e.exports={post_content:"post-content_post_content__3q4Xy"}}},function(e){e.O(0,[844,258,774,888,179],(function(){return n=9035,e(e.s=n);var n}));var n=e.O();_N_E=n}]);