(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,function(e,t,n){},,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"help",(function(){return y})),n.d(r,"projects",(function(){return b})),n.d(r,"personalInfo",(function(){return k})),n.d(r,"education",(function(){return w})),n.d(r,"socialMediaHandles",(function(){return P}));var a=n(0),i=n.n(a),o=n(8),s=n.n(o),c=(n(14),n(2)),u=n(3),l=n(1),d=n(5),h=n(4),p=(n(15),n(16),function(e){var t={backgroundColor:e.color};return i.a.createElement("span",{className:"cursor",style:t},"\xa0\xa0")}),f=(n(17),n(7),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={value:""},r.inputKeyPressed=r.inputKeyPressed.bind(Object(l.a)(r)),r}return Object(u.a)(n,[{key:"inputKeyPressed",value:function(e){var t,n=/^[a-z0-9!"#$%&'()*+,.\/:;<=>?@\[\]^_`{|}~-]$/i.test(e.key),r=this.state.value;n?(t=r+e.key,this.setState({value:t})):" "===e.key?(e.preventDefault(),t=r+" ",this.setState({value:t})):"Backspace"===e.key?(t=r.substring(0,r.length-1),this.setState({value:t})):"Enter"===e.key&&(this.props.onEnterPressed(this.state.value),this.setState({value:""}))}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.inputKeyPressed,!1)}},{key:"componentWillMount",value:function(){document.removeEventListener("keydown",this.inputKeyPressed,!1)}},{key:"render",value:function(){return i.a.createElement("div",{className:"command-input shadow"},i.a.createElement("span",null,">\xa0"),this.state.value.length>0&&i.a.createElement("input",{type:"text",className:"inputBox",value:this.state.value,size:this.state.value.length,readOnly:!0}),i.a.createElement(p,{color:"green"}))}}]),n}(i.a.Component));function m(e){this.value=e,this.parent=null,this.children=[],this.setParentNode=function(e){this.parent=e},this.getParentNode=function(){return this.parent},this.addChild=function(e){e.setParentNode(this),this.children[this.children.length]=e},this.getChildren=function(){return this.children}}var v=function(e,t,n){"/"===n[n.length-1]&&(n=n.substring(0,n.length-1));var r=n.split("/"),a=0,i="",o=r.length;for("root.dir"===r[0]&&(e=t,a=1);a<o;)if("."!==r[a]){if(".."===r[a]){if(null===(e=e.getParentNode())){i="Invalid path.";break}}else{var s=e.getChildren(),c=void 0;for(c=0;c<s.length;c++)if(s[c].value===r[a]){e=s[c];break}if(c===s.length){i="Invalid path.";break}}a++}else a++;return{current:e,err:i}},g=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={innerHTML:""},r.timeoutHandler=void 0,r.timeoutHandler1=void 0,r.update=r.update.bind(Object(l.a)(r)),r.printText=r.printText.bind(Object(l.a)(r)),r}return Object(u.a)(n,[{key:"printText",value:function(e,t,n){var r=this;if(!(t>=this.length)){var a=this.state.innerHTML;a+=e[t],this.setState({innerHTML:a}),this.timeoutHandler=setTimeout((function(){r.printText(e,t+1,n)}),n),this.removeTimeouts=this.removeTimeouts.bind(this)}}},{key:"update",value:function(){this.length=this.props.stringToBePrinted.length,this.printText(this.props.stringToBePrinted,0,this.props.timestep)}},{key:"componentDidMount",value:function(){this.update()}},{key:"removeTimeouts",value:function(){this.timeoutHandler&&clearTimeout(this.timeoutHandler),this.timeoutHandler1&&clearTimeout(this.timeoutHandler1)}},{key:"componentWillUnmount",value:function(){this.removeTimeouts()}},{key:"componentDidUpdate",value:function(e){var t=this;e.stringToBePrinted!==this.props.stringToBePrinted&&(this.setState({innerHTML:""}),this.removeTimeouts(),this.timeoutHandler1=setTimeout((function(){return t.update()}),200))}},{key:"render",value:function(){return i.a.createElement("div",{className:this.props.className,dangerouslySetInnerHTML:{__html:this.state.innerHTML}})}}]),n}(i.a.Component),y="<pre>Only following commands are accepted : \n    pwd : for knowing the present working directory\n    ls [path]: for listing files and directories\n    cd path: for changing directory\n    cat filename : for display the file\n    help : for details for accepted commands</pre>",b='<pre>You can view all my projects <a href="https://github.com/guptdivy?tab=repositories">here</a><pre>',k="<pre>My name is Divyansh Gupta.\nMy hometown is Agra.\nCurrently, I am pursueing B.Tech. in computer science\nfrom National Institute of Technology, Patna<pre>",w='<pre>Currently pursueing B.tech. in CS from NIT Patna.\nI will be graduating in mid 2022.\nI did my 10<sup>th</sup> and 12<sup>th</sup> from <a href="https://standrewsschoolagra.com">St Andrews School</a>,\nAgra with 10 C.G.P.A. and 98.2% respectively.</pre>',P='<pre>Linkedin : <a href="https://www.linkedin.com/in/divyansh-gupta-248621195/">Divyansh Gupta</a>\nInstagram : <a href="https://www.instagram.com/divyanshg10/">divyanshg10</a>\nSorry, not on facebook.</pre>',T=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).topre=function(e){return"<pre>"+e+"</pre>"},e.pwd=function(t){""!==t?e.changeState("Invalid command, no argument required."):e.changeState(function(e){for(var t=[];null!==e;)t.push(e),e=e.getParentNode();var n=t[t.length-1].value;for(t.pop();0!==t.length;)n+="/"+t[t.length-1].value,t.pop();return n}(e.current))},e.ls=function(t){var n=function(e,t,n){var r="",a="";if(""===n)e.getChildren().forEach((function(e){r+=e.value+"\n"}));else{var i=v(e,t,n);""!==i.err?a=i.err:i.current.value.includes(".file")?a="Not a directory.":i.current.getChildren().forEach((function(e){r+=e.value+"\n"}))}return{err:a,str:r}}(e.current,e.root,t);""===n.err?e.changeState(e.topre(n.str)):e.changeState(n.err)},e.cat=function(t){if(""===t)e.changeState("Invalid command, argument required.");else{var n=function(e,t,n){var r=v(e,t,n);return""===r.err&&r.current.value.includes("dir")&&(r.err="Not a file."),r}(e.current,e.root,t);if(""!==n.err)e.changeState(n.err);else{var a=n.current.value;e.changeState(r[a.substring(0,a.length-5)])}}},e.cd=function(t){if(""===t)e.changeState("Invalid command, argument required.");else{var n=function(e,t,n){var r=v(e,t,n);return""===r.err&&r.current.value.includes("file")&&(r.err="Not a directory."),r}(e.current,e.root,t);""!==n.err?e.changeState(n.err):(e.current=n.current,e.changeState("Present working directory changed."))}},e.help=function(t){e.changeState(y)},e.state={output:i.a.createElement("div",null)},e.enterPressed=e.enterPressed.bind(Object(l.a)(e)),e.changeState=e.changeState.bind(Object(l.a)(e)),e.pwd=e.pwd.bind(Object(l.a)(e)),e.cd=e.cd.bind(Object(l.a)(e)),e.ls=e.ls.bind(Object(l.a)(e)),e.cat=e.cat.bind(Object(l.a)(e)),e.help=e.help.bind(Object(l.a)(e)),e.root=function(){var e=new m("root.dir"),t=new m("about.dir"),n=new m("projects.file"),r=new m("personalInfo.file"),a=new m("education.file"),i=new m("socialMediaHandles.file");return i.setParentNode(t),a.setParentNode(t),r.setParentNode(t),n.setParentNode(e),t.setParentNode(e),t.addChild(r),t.addChild(a),t.addChild(i),e.addChild(t),e.addChild(n),e}(),e.current=e.root,e}return Object(u.a)(n,[{key:"execute",value:function(e,t){switch(e){case"pwd":this.pwd(t);break;case"ls":this.ls(t);break;case"cat":this.cat(t);break;case"cd":this.cd(t);break;case"help":this.help(t)}}},{key:"enterPressed",value:function(e){e=e.trim();var t,n="",r="";for(t=0;t<e.length&&" "!==e[t];t++)n+=e[t];for(;t<e.length&&" "===e[t];t++);for(;t<e.length&&" "!==e[t];t++)r+=e[t];this.execute(n,r)}},{key:"changeState",value:function(e){this.setState({output:e})}},{key:"componentDidMount",value:function(){this.changeState(y)}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(f,{onEnterPressed:this.enterPressed}),i.a.createElement("div",{className:"command-output shadow"},i.a.createElement(g,{className:"outputText",stringToBePrinted:this.state.output,timestep:10})))}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.64add8b0.chunk.js.map