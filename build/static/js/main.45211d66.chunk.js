(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,n){},16:function(e,a,n){},17:function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),r=n(2),s=n.n(r),o=(n(14),n(3)),c=n(4),l=n(6),h=n(5),u=n(7),d=function(e){var a=e.name,n=e.userid,t=e.id,r=e.insta;return i.a.createElement("div",{className:"tc bg-pink dib br3 ma2 pa3 grow bw2 shadow-5"},i.a.createElement("a",{href:r,rel:"noopener noreferrer",target:"_blank"},i.a.createElement("img",{alt:"kittens",src:"https://robohash.org/".concat(t+2,".png?set=set4&size=200x200")}),i.a.createElement("div",null,i.a.createElement("h2",null,a),i.a.createElement("p",null,n))))},m=function(e){var a=e.kittens,n=a.map(function(e,n){return i.a.createElement(d,{key:n,id:a[n].id,name:a[n].name,userid:a[n].userid,insta:a[n].insta})});return i.a.createElement("div",null,n)},w=function(e){e.searchfield;var a=e.ChangeSearch;return i.a.createElement("div",{className:"pa2"},i.a.createElement("input",{className:"pa3 bg-washed-red b--purple ba",type:"search",placeholder:"Search Kittens",onChange:a}))},g=[{id:1,name:"Ananya Srivastava",userid:"@ananyavsrivastava",insta:"https://www.instagram.com/ananyavsrivastava/?hl=en"},{id:2,name:"Anushka Sharma",userid:"@anushkasharma0804",insta:"https://www.instagram.com/anushkasharma0804/?hl=en"},{id:3,name:"Akanksha Singh",userid:"@akanksha5598",insta:"https://www.instagram.com/akanksha5598/?hl=en"},{id:4,name:"Prachi Rawat",userid:"@prachi7101",insta:"#"},{id:5,name:"Manasvi Sharma",userid:"@annabelledoll05",insta:"https://www.instagram.com/annabelledoll05/?hl=en"},{id:6,name:"Niharika Mallick",userid:"@niharika.mallick.1",insta:"https://www.instagram.com/niharika.mallick.1/?hl=en"},{id:7,name:"Spriha Sharma",userid:"@spriha234",insta:"https://www.instagram.com/spriha234/?hl=en"},{id:8,name:"Ritika Jain",userid:"@ritika__.jain__",insta:"https://www.instagram.com/ritika__.jain__/?hl=en"},{id:9,name:"Shilpi Tyagi",userid:"@_shilpi_797",insta:"https://www.instagram.com/_shilpi_797/?hl=en"},{id:10,name:"Bhanuja Aggarwal",userid:"@bhanujaaggarwal",insta:"https://www.instagram.com/bhanujaaggarwal/?hl=en"}],p=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(l.a)(this,Object(h.a)(a).call(this))).ChangeOnSearch=function(a){e.setState({searchfield:a.target.value})},e.state={kittens:g,searchfield:""},e}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.state.kittens.filter(function(a){return a.name.toLowerCase().includes(e.state.searchfield.toLowerCase())});return 0===this.state.kittens?i.a.createElement("h1",null,"LOADING..."):i.a.createElement("div",{className:"tc"},i.a.createElement("h1",{className:"f1"},"Kitty Hostelers"),i.a.createElement(w,{ChangeSearch:this.ChangeOnSearch}),i.a.createElement(m,{kittens:a}))}}]),a}(t.Component),f=(n(15),n(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function v(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(i.a.createElement(p,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("","/service-worker.js");f?(function(e,a){fetch(e).then(function(n){var t=n.headers.get("content-type");404===n.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):v(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):v(a,e)})}}()},8:function(e,a,n){e.exports=n(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.45211d66.chunk.js.map