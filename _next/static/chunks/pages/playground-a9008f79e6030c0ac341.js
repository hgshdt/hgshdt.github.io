(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[311],{15373:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return te}});var r,a=t(85893),c=t(4942),s=t(67294),i=t(9008),o=t(96962),l=t(17625),u=t(56024),d=t(87757),p=t.n(d),h=t(15861),m=t(5152),f=t(117),g=t(51436),b=t(24981),v=t(9669),x=t.n(v),_=t(69483),j=t.n(_)().createInstance({name:"filecache"}),w=function(e){return{name:"fetch-plugin",setup:function(n){n.onLoad({filter:/(^index\.js$)/},(function(){return{loader:"jsx",contents:e}})),n.onLoad({filter:/.*/},function(){var e=(0,h.Z)(p().mark((function e(n){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.getItem(n.path);case 2:if(!(t=e.sent)){e.next=5;break}return e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),n.onLoad({filter:/.css$/},function(){var e=(0,h.Z)(p().mark((function e(n){var t,r,a,c,s,i;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x().get(n.path);case 2:return t=e.sent,r=t.data,a=t.request,c=r.replace(/\n/g,"").replace(/"/g,'\\"').replace(/'/g,"\\'"),s="\n          const style = document.createElement('style');\n          style.innerText = '".concat(c,"';\n          document.head.appendChild(style);\n        "),i={loader:"jsx",contents:s,resolveDir:new URL("./",a.responseURL).pathname},e.next=10,j.setItem(n.path,i);case 10:return e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),n.onLoad({filter:/.*/},function(){var e=(0,h.Z)(p().mark((function e(n){var t,r,a,c;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://unpkg.com/dom-helpers/addClass"===n.path&&(n.path="https://unpkg.com/dom-helpers/cjs/addClass.js"),"https://unpkg.com/dom-helpers/removeClass"===n.path&&(n.path="https://unpkg.com/dom-helpers/cjs/removeClass.js"),e.next=4,x().get(n.path);case 4:return t=e.sent,r=t.data,a=t.request,c={loader:"jsx",contents:r,resolveDir:new URL("./",a.responseURL).pathname},e.next=10,j.setItem(n.path,c);case 10:return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}}},N=function(){var e=(0,h.Z)(p().mark((function e(n){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=9;break}return e.prev=1,e.next=4,b.initialize({worker:!0,wasmURL:"https://unpkg.com/esbuild-wasm@0.12.19/esbuild.wasm"}).then((function(){return r=!0}));case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(1),new Error("esbuild.initialize");case 9:return e.prev=9,e.next=12,b.build({entryPoints:["index.js"],bundle:!0,write:!1,plugins:[{name:"unpkg-path-plugin",setup:function(e){e.onResolve({filter:/(^index\.js$)/},(function(){return{path:"index.js",namespace:"a"}})),e.onResolve({filter:/^\.+\//},(function(e){return{namespace:"a",path:new URL(e.path,"https://unpkg.com"+e.resolveDir+"/").href}})),e.onResolve({filter:/.*/},function(){var e=(0,h.Z)(p().mark((function e(n){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("."!==n.path){e.next=2;break}return e.abrupt("return",{namespace:"a",path:new URL("index.js","https://unpkg.com"+n.resolveDir+"/").href});case 2:return e.abrupt("return",{namespace:"a",path:"https://unpkg.com/".concat(n.path)});case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}},w(n)],define:{"process.env.NODE_ENV":'"production"',global:"window"},jsxFactory:"React.createElement",jsxFragment:"React.Fragment"});case 12:return t=e.sent,e.abrupt("return",{code:t.outputFiles[0].text,err:""});case 16:return e.prev=16,e.t1=e.catch(9),e.abrupt("return",{code:"",err:e.t1.message});case 19:case"end":return e.stop()}}),e,null,[[1,6],[9,16]])})));return function(n){return e.apply(this,arguments)}}(),k=t(94972),y=t(73834),C=t(49838),S=t(79426),O=t(73945),P=t.n(O),L=t(28182),E=t.n(L),R=t(59865),D=(0,s.forwardRef)((function(e,n){var t=e.onChange,r=e.initialValue,c=(0,s.useRef)(),i=(0,R.T)().isDark,o=(0,s.useState)(16),l=o[0],u=o[1];(0,s.useImperativeHandle)(n,(function(){return{format:function(){return d()},fontIncrease:function(){return u((function(e){return e+1}))},fontDecrease:function(){return u((function(e){return e-1}))}}}));var d=function(){var e=c.current.getValue(),n=P().format(e,{parser:"babel",plugins:[E()],useTabs:!1,semi:!0,singleQuote:!0}).replace(/\n$/,"");c.current.setValue(n)};return(0,a.jsx)("div",{className:"editor_wrapper",children:(0,a.jsx)(k.ZP,{height:"100%",onChange:t,onMount:function(e,n){c.current=e;var t=new S.ZP(n,(function(e){return(0,y.parse)(e,{sourceType:"module",plugins:["jsx"]})}),C.default,e);t.highLightOnDidChangeModelContent(100),t.addJSXCommentCommand()},value:r,theme:i?"vs-dark":"light",language:"javascript",options:{wordWrap:"on",minimap:{enabled:!1},showUnused:!1,folding:!1,lineNumbersMinChars:3,fontSize:l,scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2}})})})),M=t(30168);function T(){var e=(0,M.Z)(['\n<html>\n  <head>\n    <style>html { background-color: white; }</style>\n  </head>\n  <body>\n    <div id="root"></div>\n    <script>\n      const handleError = (err) => {\n        const root = document.querySelector(\'#root\');\n        root.innerHTML = \'<div style="color: red;"><h4>Runtime Error</h4>\' + err + \'</div>\';\n        console.error(err);\n      };\n\n      const savePNG = (fileName) => {\n        //const svg = document.querySelector("div.mermaid svg");\n        const svg = document.querySelector("div svg");\n        const serializer = new XMLSerializer();\n        const svgData = serializer.serializeToString(svg);\n\n        let canvas = document.createElement("canvas");\n        canvas.width = svg.width.baseVal.value;\n        canvas.height = svg.height.baseVal.value;\n\n        let ctx = canvas.getContext("2d");\n        let image = new Image();\n\n        image.onload = function () {\n          ctx.drawImage(image, 0, 0);\n          let a = document.createElement("a");\n          a.href = canvas.toDataURL("image/png");\n          a.setAttribute("download", fileName); //"image.png"\n          a.dispatchEvent(new MouseEvent("click"));\n        }\n\n        image.src = "data:image/svg+xml;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(svgData))); \n      };\n\n      window.addEventListener(\'error\', (event) => {\n        event.preventDefault();\n        handleError(event.error);\n      });\n\n      window.addEventListener(\'message\', (event) => {\n        switch(event.data.action) {\n          case \'code\':\n            try {\n              eval(event.data.message);\n            } catch (err) {\n              handleError(err);\n            }\n            break;\n          case \'save\':\n            savePNG(event.data.message);\n            break;\n        }\n      }, false);\n\n    <\/script>\n  </body>\n</html>\n']);return T=function(){return e},e}var z=String.raw(T()),A=(0,s.forwardRef)((function(e,n){var t=e.code,r=e.err,c=(0,s.useRef)();(0,s.useEffect)((function(){c.current.srcdoc=z}),[t]),(0,s.useImperativeHandle)(n,(function(){return{savePNG:function(e){c.current.contentWindow.postMessage({action:"save",message:e},"*")}}}));return(0,a.jsxs)("div",{className:"preview_wrapper",children:[(0,a.jsx)("iframe",{title:"preview",ref:c,sandbox:"allow-scripts allow-downloads",srcDoc:z,onLoad:function(){c.current.contentWindow.postMessage({action:"code",message:t},"*")}}),r&&(0,a.jsx)("div",{className:"preview_error",children:r})]})})),G=t(1706),F=function(){return{width:window.innerWidth,height:window.innerHeight}};function B(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?B(Object(t),!0).forEach((function(n){(0,c.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var I=function(e){var n,t=e.direction,r=e.children,c=function(){var e=(0,s.useState)({width:0,height:0}),n=e[0],t=e[1];return(0,s.useEffect)((function(){t(F());var e=function(){t(F())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),{windowWidth:n.width,windowHeight:n.height}}(),i=c.windowWidth,o=c.windowHeight,l=(0,s.useState)(o),u=l[0],d=l[1],p=(0,s.useState)(i),h=p[0],m=p[1],f=(0,s.useState)(.7*i),g=f[0],b=f[1],v=(0,s.useState)(.7*o),x=v[0],_=v[1];return(0,s.useEffect)((function(){var e;e&&clearTimeout(e),e=setTimeout((function(){d(o),m(i),b(.7*i<g||0===g?.7*i:g),_(.7*o<x||0===x?.7*o:x)}),500)}),[i,o]),n="horizontal"===t?{className:"resize-horizontal",height:1/0,width:g,resizeHandles:["e"],maxConstraints:[.7*h,1/0],minConstraints:[.2*h,1/0],onResizeStop:function(e,n){b(n.size.width)}}:{height:x,width:1/0,resizeHandles:["s"],maxConstraints:[1/0,.9*u],minConstraints:[1/0,24]},(0,a.jsx)(G.ResizableBox,Z(Z({},n),{},{children:r}))},U=(0,m.default)((function(){return Promise.resolve().then(t.bind(t,117)).then((function(e){return e.Tabs}))}),{ssr:!1,loadableGenerated:{webpack:function(){return[117]},modules:["../components/playground/cell-tabs.tsx -> react-tabs"]}}),q=function(e){var n=e.initialCode,t=e.onChange,r=(0,s.useState)(n),c=r[0],i=r[1],o=(0,s.useState)(""),u=o[0],d=o[1],m=(0,s.useState)(),b=m[0],v=m[1],x=(0,s.useState)(!1),_=x[0],j=x[1],w=(0,s.useState)(0),k=w[0],y=w[1],C=(0,s.useRef)(),S=(0,s.useRef)();return(0,s.useEffect)((function(){i(n)}),[n]),(0,a.jsxs)(U,{selectedIndex:k,onSelect:function(e){return y(e)},children:[(0,a.jsxs)(f.TabList,{children:[(0,a.jsx)(f.Tab,{children:(0,a.jsx)("p",{className:"paragraph",children:"JSX"})}),(0,a.jsx)(f.Tab,{children:(0,a.jsx)("p",{className:"paragraph",children:"Result"})})]}),(0,a.jsxs)(f.TabPanel,{children:[(0,a.jsxs)("div",{className:"cell_tabs__icon_container",children:[(0,a.jsx)("div",{className:"cell_tabs__icon_group",children:(0,a.jsx)("div",{className:"cell_tabs__icon",children:(0,a.jsx)("button",{className:"btn",disabled:_,onClick:function(){_||(d(""),v(null),j(!0),function(){var e=(0,h.Z)(p().mark((function e(n){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(n);case 2:t=e.sent,d(t.code),t.err&&v(t.err),j(!1),y(1);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()(c))},children:_?(0,a.jsx)(l.G,{className:"cell_tabs__icon__spin",icon:g.LM3}):(0,a.jsx)(l.G,{icon:g.zc})})})}),(0,a.jsxs)("div",{className:"cell_tabs__icon_group",children:[(0,a.jsx)("div",{className:"cell_tabs__icon",children:(0,a.jsx)("button",{className:"btn_secondary",onClick:function(){return C.current.fontIncrease()},children:(0,a.jsx)(l.G,{icon:g.r8p})})}),(0,a.jsx)("div",{className:"cell_tabs__icon",children:(0,a.jsx)("button",{className:"btn_secondary",onClick:function(){return C.current.fontDecrease()},children:(0,a.jsx)(l.G,{icon:g.Kl4})})}),(0,a.jsx)("div",{className:"cell_tabs__icon",children:(0,a.jsx)("button",{className:"btn_secondary",onClick:function(){return C.current.format()},children:(0,a.jsx)(l.G,{icon:g.elf})})})]})]}),(0,a.jsx)(I,{direction:"vertical",children:(0,a.jsx)(D,{ref:C,initialValue:n,onChange:function(e){i(e),t(e)}})})]}),(0,a.jsxs)(f.TabPanel,{children:[(0,a.jsxs)("div",{className:"cell_tabs__icon_container",children:[(0,a.jsx)("div",{}),(0,a.jsx)("div",{className:"cell_tabs__icon",children:(0,a.jsx)("button",{className:"btn",disabled:_,onClick:function(){return S.current.savePNG("Image.png")},children:_?(0,a.jsx)(l.G,{className:"cell_tabs__icon__spin",icon:g.LM3}):(0,a.jsx)(l.G,{icon:g.q7m})})})]}),(0,a.jsx)(I,{direction:"vertical",children:_?(0,a.jsx)("div",{className:"preview_wrapper preview_wrapper--loading",children:(0,a.jsx)("p",{className:"paragraph",children:"Loading..."})}):(0,a.jsx)(A,{code:u,err:b,ref:S})})]})]})},H=t(65764),X=t(44431),V=function(){var e=(0,s.useState)(["0","0","0","0"]),n=e[0],t=e[1],r=(0,s.useState)(!1),c=r[0],i=r[1],o=(0,s.useState)(!1),l=o[0],u=o[1],d=function(e){var r=(0,H.Z)(n),a=function(e,n,t){switch(n){case"+":return new X.BigNumber(e).plus(t).toString();case"-":return new X.BigNumber(e).minus(t).toString();case"*":return new X.BigNumber(e).times(t).toString();case"/":return new X.BigNumber(e).div(t).toString();default:return"*"}}(r[1],e,r[0]),c=(0,H.Z)(n);c.shift(),c.push(r[3]),c.shift(),c.push(r[3]),c.unshift(a),c.pop(),t(c)},p=function(){var e=(0,H.Z)(n);e.unshift(e[0]),e.pop(),t(e)},h=function(e){var r=e.currentTarget.getAttribute("value"),a=e.currentTarget.classList;a.contains("calculator__operator")?(d(r),i(!1),u(!0)):a.contains("calculator__enter")?(p(),i(!0),u(!1)):a.contains("calculator__abs")?function(){var e=(0,H.Z)(n);e[0]=new X.BigNumber(e[0]).negated().toString(),t(e)}():a.contains("calculator__backspace")?n[0].length>1&&!l&&!c?t((function(e){return[e[0].slice(0,-1),e[1],e[2],e[3]]})):t((function(e){return["0",e[1],e[2],e[3]]})):a.contains("calculator__clear")?(t(["0","0","0","0"]),i(!1),u(!1)):a.contains("calculator__decimal")?n[0].includes(".")||t((function(e){return[e[0]+r,e[1],e[2],e[3]]})):(l?(p(),t((function(e){return[r,e[1],e[2],e[3]]}))):t((function(e){return["0"===e[0]||c?r:e[0]+r,e[1],e[2],e[3]]})),i(!1),u(!1))};return(0,a.jsxs)("div",{className:"calculator",children:[(0,a.jsxs)("div",{className:"calculator__stack_container",children:[(0,a.jsxs)("div",{className:"calculator__stack",children:[(0,a.jsx)("p",{className:"paragraph",children:"T:"}),(0,a.jsx)("p",{className:"paragraph",children:n[3]})]}),(0,a.jsxs)("div",{className:"calculator__stack",children:[(0,a.jsx)("p",{className:"paragraph",children:"Z:"}),(0,a.jsx)("p",{className:"paragraph",children:n[2]})]}),(0,a.jsxs)("div",{className:"calculator__stack",children:[(0,a.jsx)("p",{className:"paragraph",children:"Y:"}),(0,a.jsx)("p",{className:"paragraph",children:n[1]})]}),(0,a.jsxs)("div",{className:"calculator__stack",children:[(0,a.jsx)("p",{className:"paragraph",children:"X:"}),(0,a.jsx)("p",{className:"paragraph",children:n[0]})]})]}),(0,a.jsxs)("div",{className:"calculator__buttons",children:[(0,a.jsx)("button",{className:"btn_calc btn_calc--operator calculator__enter",onClick:h,value:"=",children:"ENTER"}),(0,a.jsx)("button",{className:"btn_calc btn_calc--operator calculator__abs",onClick:h,value:"*",children:"+/-"}),(0,a.jsx)("button",{className:"btn_calc btn_calc--clear calculator__clear",onClick:h,value:"C",children:"C"}),(0,a.jsx)("button",{className:"btn_calc btn_calc--operator calculator__backspace",onClick:h,value:"C",children:"\u2190"}),(0,a.jsx)("button",{className:"btn_calc",onClick:h,value:"7",children:"7"}),(0,a.jsx)("button",{className:"btn_calc",onClick:h,value:"8",children:"8"}),(0,a.jsx)("button",{className:"btn_calc",onClick:h,value:"9",children:"9"}),(0,a.jsx)("button",{className:"btn_calc btn_calc--operator calculator__operator",onClick:h,value:"/",children:"\xf7"}),(0,a.jsx)("button",{className:"btn_calc",onClick:h,value:"4",children:"4"}),(0,a.jsx)("button",{className:"btn_calc",onClick:h,value:"5",children:"5"}),(0,a.jsx)("button",{className:"btn_calc",onClick:h,value:"6",children:"6"}),(0,a.jsx)("button",{className:"btn_calc btn_calc--operator calculator__operator",onClick:h,value:"*",children:"\xd7"}),(0,a.jsx)("button",{className:"btn_calc",onClick:h,value:"1",children:"1"}),(0,a.jsx)("button",{className:"btn_calc",onClick:h,value:"2",children:"2"}),(0,a.jsx)("button",{className:"btn_calc",onClick:h,value:"3",children:"3"}),(0,a.jsx)("button",{className:"btn_calc btn_calc--operator calculator__operator",onClick:h,value:"-",children:"-"}),(0,a.jsx)("button",{className:"btn_calc calculator__wide2",onClick:h,value:"0",children:"0"}),(0,a.jsx)("button",{className:"btn_calc calculator__decimal",onClick:h,value:".",children:"."}),(0,a.jsx)("button",{className:"btn_calc btn_calc--operator calculator__operator",onClick:h,value:"+",children:"+"})]})]})},W=function(e){var n=e.items;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("ul",{className:"tool_list",children:n&&n.length>0&&n.map((function(e,n){return(0,a.jsxs)("li",{children:[(0,a.jsx)(l.G,{icon:g.neB}),"\xa0",(0,a.jsx)("a",{target:"_blank",href:e.href,rel:"noopener noreferrer",children:e.name})]},n)}))})})},Y="// React Sample\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nconst App = () => <h1>hi there</h1>;\nReactDOM.render(\n  <App />,\n  document.querySelector('#root')\n);\n";function J(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function $(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?J(Object(t),!0).forEach((function(n){(0,c.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):J(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var K=[{value:"simple",label:"Simple"},{value:"mermaid",label:"Mermaid"},{value:"recharts",label:"Rechars"}],Q={option:function(e,n){return $($({},e),{},{borderBottom:"1px dotted black",color:"black",fontWeight:n.isSelected?"bold":"normal",backgroundColor:"white",fontSize:"1.6rem",padding:10})},singleValue:function(e,n){return $($({},e),{},{fontSize:"1.6rem"})}},ee=[{name:"bignumber.js",href:"https://github.com/MikeMcl/bignumber.js/"}],ne=[{name:"react-select",href:"https://github.com/JedWatson/react-select"},{name:"react-resizable",href:"https://github.com/react-grid-layout/react-resizable"},{name:"monaco-react",href:"https://github.com/suren-atoyan/monaco-react"},{name:"react-tabs",href:"https://github.com/reactjs/react-tabs"},{name:"esbuild-wasm",href:"https://github.com/evanw/esbuild"},{name:"axios",href:"https://github.com/axios/axios"},{name:"localForage",href:"https://github.com/localForage/localForage"},{name:"monaco-jsx-highlighter",href:"https://github.com/luminaxster/syntax-highlighter"},{name:"babel",href:"https://github.com/babel/babel"},{name:"prettier",href:"https://github.com/prettier/prettier"}],te=function(){var e=(0,s.useState)(Y),n=e[0],t=e[1],r=(0,s.useState)(K[0]),c=r[0];r[1];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.default,{children:(0,a.jsx)("title",{children:"Playground"})}),(0,a.jsx)("section",{className:"section_playground",children:(0,a.jsxs)("article",{children:[(0,a.jsx)("h2",{className:"heading2 u-margin-bottom-small",children:"Playground"}),(0,a.jsxs)("div",{className:"section_playground__modules",children:[(0,a.jsxs)("div",{className:"section_playground__calculator",children:[(0,a.jsx)("h3",{className:"heading3",children:"RPN Calculator"}),(0,a.jsx)(W,{items:ee}),(0,a.jsx)(V,{})]}),(0,a.jsxs)("div",{className:"section_playground__jsx",children:[(0,a.jsx)("h3",{className:"heading3",children:"JSX Previewer"}),(0,a.jsx)(W,{items:ne}),(0,a.jsxs)("p",{className:"paragraph",children:[(0,a.jsx)(l.G,{icon:u.ww}),"\xa0 Based on",(0,a.jsx)("a",{target:"_blank",href:"https://www.udemy.com/course/react-and-typescript-build-a-portfolio-project/",rel:"noopener noreferrer",children:'"React and Typescript: Build a Portfolio Project"'})]}),(0,a.jsxs)("div",{className:"section_playground__templates",children:[(0,a.jsx)("div",{children:(0,a.jsx)("p",{className:"paragraph",children:"Templates: "})}),(0,a.jsx)("div",{className:"section_playground__templates__selector",children:(0,a.jsx)(o.ZP,{instanceId:"jsx_template_selector",defaultValue:c,onChange:function(e,n){var r;t("simple"===(r=e.value)?Y:"mermaid"===r?'// Mermaid Sample\nimport React, {useEffect} from "react"\nimport ReactDOM from \'react-dom\';\nimport mermaid from \'mermaid\';\n\nconst DEFAULT_CONFIG = {\n  startOnLoad: true,\n  theme: "forest",\n  logLevel: "fatal",\n  securityLevel: "strict",\n  arrowMarkerAbsolute: false,\n  flowchart: {\n    htmlLabels: true,\n    curve: "linear",\n  },\n  sequence: {\n    diagramMarginX: 50,\n    diagramMarginY: 10,\n    actorMargin: 50,\n    width: 150,\n    height: 65,\n    boxMargin: 10,\n    boxTextMargin: 5,\n    noteMargin: 10,\n    messageMargin: 35,\n    mirrorActors: true,\n    bottomMarginAdj: 1,\n    useMaxWidth: true,\n    rightAngles: false,\n    showSequenceNumbers: false,\n  },\n  gantt: {\n    titleTopMargin: 25,\n    barHeight: 20,\n    barGap: 4,\n    topPadding: 50,\n    leftPadding: 75,\n    gridLineStartPadding: 35,\n    fontSize: 11,\n    fontFamily: \'"Open-Sans", "sans-serif"\',\n    numberSectionStyles: 4,\n    axisFormat: "%Y-%m-%d",\n  },\n}\n\nconst Mermaid = ({ chart, config }) => {\n  mermaid.initialize({...DEFAULT_CONFIG, ...config})\n\n  useEffect(() => {\n    mermaid.contentLoaded()\n  }, [config])\n\n  if (!chart) return null\n  return (\n    <div className="mermaid">\n      {chart}\n    </div>\n  )  \n}\n\nconst App = () => {\n  return (\n    <Mermaid chart={`\nsequenceDiagram\n    Alice->>Bob: Hello Bob, how are you?\n    alt is sick\n        Bob->>Alice: Not so good :(\n    else is well\n        Bob->>Alice: Feeling fresh like a daisy\n    end\n    opt Extra response\n        Bob->>Alice: Thanks for asking\n    end\n        `}/>\n  )\n};\n\nReactDOM.render(\n  <App />,\n  document.querySelector(\'#root\')\n);\n':"recharts"===r?"// Recharts Sample\nimport React from \"react\"\nimport ReactDOM from 'react-dom';\nimport { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';\n\nconst data = [\n  {\n    name: 'Page A',\n    uv: 4000,\n    pv: 2400,\n    amt: 2400,\n  },\n  {\n    name: 'Page B',\n    uv: 3000,\n    pv: 1398,\n    amt: 2210,\n  },\n  {\n    name: 'Page C',\n    uv: 2000,\n    pv: 9800,\n    amt: 2290,\n  },\n  {\n    name: 'Page D',\n    uv: 2780,\n    pv: 3908,\n    amt: 2000,\n  },\n  {\n    name: 'Page E',\n    uv: 1890,\n    pv: 4800,\n    amt: 2181,\n  },\n  {\n    name: 'Page F',\n    uv: 2390,\n    pv: 3800,\n    amt: 2500,\n  },\n  {\n    name: 'Page G',\n    uv: 3490,\n    pv: 4300,\n    amt: 2100,\n  },\n];\n\nconst App = () => {\n  return (\n    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>\n      <Line type=\"monotone\" dataKey=\"uv\" stroke=\"#8884d8\" />\n      <CartesianGrid stroke=\"#ccc\" strokeDasharray=\"5 5\" />\n      <XAxis dataKey=\"name\" />\n      <YAxis />\n      <Tooltip />\n    </LineChart>\n  );\n};\n\nReactDOM.render(\n    <App />,\n    document.querySelector('#root')\n  );\n":"*")},options:K,styles:Q})})]}),(0,a.jsx)(q,{initialCode:n,onChange:function(e){t(e)}})]})]})]})})]})}},46020:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/playground",function(){return t(15373)}])},26291:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=26291,e.exports=n}},function(e){e.O(0,[774,54,791,234,73,990,702,616,958,993,797,24,695,888,179],(function(){return n=46020,e(e.s=n);var n}));var n=e.O();_N_E=n}]);