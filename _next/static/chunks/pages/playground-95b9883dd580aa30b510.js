(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[311],{78645:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return S}});var r=t(85893),a=t(9008),i=t(87757),o=t.n(i),s=t(92137),c=t(67294),u=t(96156),l=t(1706),d=function(){return{width:window.innerWidth,height:window.innerHeight}};function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,u.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f,m=function(e){var n,t=e.direction,a=e.children,i=function(){var e=(0,c.useState)({width:0,height:0}),n=e[0],t=e[1];return(0,c.useEffect)((function(){t(d());var e=function(){t(d())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),{windowWidth:n.width,windowHeight:n.height}}(),o=i.windowWidth,s=i.windowHeight,u=(0,c.useState)(s),p=u[0],f=u[1],m=(0,c.useState)(o),w=m[0],v=m[1],x=(0,c.useState)(.7*o),g=x[0],j=x[1];return(0,c.useEffect)((function(){var e;0!==o&&0!==s&&(e&&clearTimeout(e),e=setTimeout((function(){f(s),v(o),j(.7*o<g||0===g?.7*o:g)}),500))}),[o,s]),n="horizontal"===t?{className:"resize-horizontal",height:1/0,width:g,resizeHandles:["e"],maxConstraints:[.7*w,1/0],minConstraints:[.2*w,1/0],onResizeStop:function(e,n){j(n.size.width)}}:{height:300,width:1/0,resizeHandles:["s"],maxConstraints:[1/0,.9*p],minConstraints:[1/0,24]},(0,r.jsx)(l.ResizableBox,h(h({},n),{},{children:a}))},w=t(24981),v=t(9669),x=t.n(v),g=t(69483),j=t.n(g)().createInstance({name:"filecache"}),b=function(e){return{name:"fetch-plugin",setup:function(n){n.onLoad({filter:/(^index\.js$)/},(function(){return{loader:"jsx",contents:e}})),n.onLoad({filter:/.*/},function(){var e=(0,s.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.getItem(n.path);case 2:if(!(t=e.sent)){e.next=5;break}return e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),n.onLoad({filter:/.css$/},function(){var e=(0,s.Z)(o().mark((function e(n){var t,r,a,i,s,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x().get(n.path);case 2:return t=e.sent,r=t.data,a=t.request,i=r.replace(/\n/g,"").replace(/"/g,'\\"').replace(/'/g,"\\'"),s="\n          const style = document.createElement('style');\n          style.innerText = '".concat(i,"';\n          document.head.appendChild(style);\n        "),c={loader:"jsx",contents:s,resolveDir:new URL("./",a.responseURL).pathname},e.next=10,j.setItem(n.path,c);case 10:return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),n.onLoad({filter:/.*/},function(){var e=(0,s.Z)(o().mark((function e(n){var t,r,a,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x().get(n.path);case 2:return t=e.sent,r=t.data,a=t.request,i={loader:"jsx",contents:r,resolveDir:new URL("./",a.responseURL).pathname},e.next=8,j.setItem(n.path,i);case 8:return e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}}},y=function(){var e=(0,s.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f){e.next=9;break}return e.prev=1,e.next=4,w.initialize({worker:!0,wasmURL:"https://unpkg.com/esbuild-wasm@0.12.17/esbuild.wasm"}).then((function(){return f=!0}));case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(1),new Error("esbuild.initialize");case 9:return e.prev=9,e.next=12,w.build({entryPoints:["index.js"],bundle:!0,write:!1,plugins:[{name:"unpkg-path-plugin",setup:function(e){e.onResolve({filter:/(^index\.js$)/},(function(){return{path:"index.js",namespace:"a"}})),e.onResolve({filter:/^\.+\//},(function(e){return{namespace:"a",path:new URL(e.path,"https://unpkg.com"+e.resolveDir+"/").href}})),e.onResolve({filter:/.*/},function(){var e=(0,s.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("."!==n.path){e.next=2;break}return e.abrupt("return",{namespace:"a",path:new URL("index.js","https://unpkg.com"+n.resolveDir+"/").href});case 2:return e.abrupt("return",{namespace:"a",path:"https://unpkg.com/".concat(n.path)});case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}},b(n)],define:{"process.env.NODE_ENV":'"production"',global:"window"},jsxFactory:"React.createElement",jsxFragment:"React.Fragment"});case 12:return t=e.sent,e.abrupt("return",{code:t.outputFiles[0].text,err:""});case 16:return e.prev=16,e.t1=e.catch(9),e.abrupt("return",{code:"",err:e.t1.message});case 19:case"end":return e.stop()}}),e,null,[[1,6],[9,16]])})));return function(n){return e.apply(this,arguments)}}(),k=t(94972),O=t(73834),R=t(49838),E=t(79426),L=t(59865),C=function(e){var n=e.onChange,t=e.initialValue,a=(0,c.useRef)(),i=(0,L.T)().isDark;return(0,r.jsx)("div",{className:"editor_wrapper",children:(0,r.jsx)(k.ZP,{height:"100%",onChange:n,onMount:function(e,n){a.current=e;var t=new E.ZP(n,(function(e){return(0,O.parse)(e,{sourceType:"module",plugins:["jsx"]})}),R.default,e);t.highLightOnDidChangeModelContent(100),t.addJSXCommentCommand()},value:t,theme:i?"vs-dark":"light",language:"javascript",options:{wordWrap:"on",minimap:{enabled:!1},showUnused:!1,folding:!1,lineNumbersMinChars:3,fontSize:16,scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2}})})},_="\n<html>\n  <head>\n    <style>html { background-color: white; }</style>\n  </head>\n  <body>\n    <div id=\"root\"></div>\n    <script>\n      const handleError = (err) => {\n        const root = document.querySelector('#root');\n        root.innerHTML = '<div style=\"color: red;\"><h4>Runtime Error</h4>' + err + '</div>';\n        console.error(err);\n      };\n      window.addEventListener('error', (event) => {\n        event.preventDefault();\n        handleError(event.error);\n      });\n      window.addEventListener('message', (event) => {\n        try {\n          eval(event.data);\n        } catch (err) {\n          handleError(err);\n        }\n      }, false);\n    <\/script>\n  </body>\n</html>\n",D=function(e){var n=e.code,t=e.err,a=(0,c.useRef)();(0,c.useEffect)((function(){a.current.srcdoc=_}),[n]);return(0,r.jsxs)("div",{className:"preview_wrapper",children:[(0,r.jsx)("iframe",{title:"preview",ref:a,sandbox:"allow-scripts",srcDoc:_,onLoad:function(){a.current.contentWindow.postMessage(n,"*")}}),t&&(0,r.jsx)("div",{className:"preview_error",children:t})]})},N=function(e){var n=e.initialCode,t=(0,c.useState)(n),a=t[0],i=t[1],u=(0,c.useState)(""),l=u[0],d=u[1],p=(0,c.useState)(),h=p[0],f=p[1],w=(0,c.useState)(!1),v=w[0],x=w[1];return(0,r.jsxs)("div",{className:"cell",children:[(0,r.jsx)("div",{children:(0,r.jsx)("button",{className:"btn",onClick:function(){d(""),f(null),x(!0),function(){var e=(0,s.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(n);case 2:t=e.sent,d(t.code),t.err&&f(t.err),x(!1);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()(a)},children:"Run"})}),(0,r.jsx)(m,{direction:"vertical",children:(0,r.jsxs)("div",{className:"cell__editor",children:[(0,r.jsx)(m,{direction:"horizontal",children:(0,r.jsx)(C,{initialValue:n,onChange:function(e){return i(e)}})}),v?(0,r.jsx)("div",{className:"preview_wrapper preview_wrapper--loading",children:(0,r.jsx)("p",{className:"paragraph",children:"Loading..."})}):(0,r.jsx)(D,{code:l,err:h})]})})]})},S=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.default,{children:(0,r.jsx)("title",{children:"Playground"})}),(0,r.jsx)("section",{className:"section_playground",children:(0,r.jsxs)("article",{children:[(0,r.jsx)("h2",{className:"heading2 u-margin-bottom-small",children:"Playground"}),(0,r.jsx)(N,{initialCode:"// React Sample\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nconst App = () => <h1>hi there</h1>;\nReactDOM.render(\n  <App />,\n  document.querySelector('#root')\n);\n"}),(0,r.jsx)(N,{initialCode:"// Mermaid Sample\nimport React from \"react\"\nimport ReactDOM from 'react-dom';\nimport Mermaid from 'react-mermaid2';\n\nconst App = () => {\n  return (\n    <Mermaid chart={`\n        graph TD;\n        A--\x3eB;\n        A--\x3eC;\n        B--\x3eD;\n        C--\x3eD;\n        `}/>\n  )\n};\n\nReactDOM.render(\n  <App />,\n  document.querySelector('#root')\n);\n"})]})})]})}},46020:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/playground",function(){return t(78645)}])}},function(e){e.O(0,[797,637,774,888,179],(function(){return n=46020,e(e.s=n);var n}));var n=e.O();_N_E=n}]);