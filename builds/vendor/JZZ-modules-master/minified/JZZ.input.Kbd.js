!function(){function a(a){return a?a:"Kbd"}function b(a){var b={};for(var c in a)b[c]=a[c];return b}function c(){return!1}function d(a,b){for(var c in b)a.style[c]=b[c]}function e(a){if("string"!=typeof a)return void 0;var b={C:0,D:1,E:2,F:3,G:4,A:5,B:6}[a.substr(0,1).toUpperCase()];if(void 0===b)return void 0;var c=a.substr(1);if(parseInt(c)!=c)return void 0;var d=7*c+b;return d>=0&&74>=d?d:void 0}function f(a){return 12*Math.floor(a/7)+{0:0,1:2,2:4,3:5,4:7,5:9,6:11}[a%7]}function g(a,b){return function(c){1&c.buttons&&!a.playing[b]&&(a.mouseDown=!0,a.playing[b]="M",a.press(b))}}function h(a,b){return function(c){a.mouseDown&&!a.playing[b]&&(a.playing[b]="M",a.press(b))}}function i(a,b){return function(c){a.mouseDown&&"M"==a.playing[b]&&(a.playing[b]=void 0,a.release(b))}}function j(a,b){return function(c){1&c.buttons||!a.mouseDown||"M"==a.playing[b]&&(a.playing[b]=void 0,a.release(b))}}function k(a){return function(b){1&b.buttons||(a.mouseDown=!1)}}function l(a){return function(b){b.preventDefault();var c={};for(var d in b.touches)a.findKey(b.touches[d].clientX,b.touches[d].clientY,c);var e={};for(var f in c)f in a.touches?e[f]=!0:void 0===a.playing[f]&&(a.playing[f]="T",a.press(f),e[f]=!0);for(var f in a.touches)f in c||(a.playing[f]=void 0,a.release(f));a.touches=e}}function m(a){var c=this;this.bins=[],this.params={0:{}};var d={from:"C4",to:"E6",ww:42,bw:24,wl:150,bl:100,pos:"N"};void 0===a&&(a={}),this.channel=q[a.channel],void 0===this.channel&&(this.channel=0);var f;for(f in a)if(f==parseInt(f))this.params[f]=b(a[f]);else{if("channel"==f)continue;if(("from"==f||"to"==f)&&void 0===e(a[f]))continue;d[f]=a[f]}for(f in this.params){this.bins.push(f);for(var g in d)"from"!=g&&"to"!=g||void 0!==e(this.params[f][g])||(this.params[f][g]=d[g]),g in this.params[f]||(this.params[f][g]=d[g]);var h=this.params[f].from,i=this.params[f].to;e(h)>e(i)&&(this.params[f].from=i,this.params[f].to=h)}this.bins.sort(function(a,b){return a-b}),this._close=function(){for(var a in c.playing)("M"==c.playing[a]||"T"==c.playing[a])&&c.noteOff(a);c.parent&&(c.parent.innerHTML=""),window.removeEventListener("mouseup",c.mouseUpHandler)}}function n(a){this.piano=a,this.keys=[]}function o(){}if(JZZ){JZZ.input||(JZZ.input={});for(var p="0.4",q={a:10,b:11,c:12,d:13,e:14,f:15,A:10,B:11,C:12,D:13,E:14,F:15},r=0;16>r;r++)q[r]=r;m.prototype.press=function(a){d(this.keys[a],this.stl1[a]),d(this.keys[a],this.locs[a]),this.noteOn(a)},m.prototype.release=function(a){d(this.keys[a],this.stl0[a]),d(this.keys[a],this.locs[a]),this.noteOff(a)},m.prototype.external=function(a){var b=a[1];a.getChannel()==this.channel&&(a.isNoteOn()?(this.playing[b]="E",d(this.keys[b],this.stl1[b]),d(this.keys[b],this.locs[b])):a.isNoteOff()&&(this.playing[b]=void 0,d(this.keys[b],this.stl0[b]),d(this.keys[b],this.locs[b]))),this.forward(a)},m.prototype.findKey=function(a,b,c){var d;for(var e in this.keys){var f=this.keys[e].getBoundingClientRect();if(a>f.left&&a<f.right&&b>f.top&&b<f.bottom){d=e;var g=e%12;if(1==g||3==g||6==g||8==g||10==g)break}}void 0!==d&&(c[d]=!0)},m.prototype.create=function(){for(var a=0,b=0;b<this.bins.length&&this.bins[b]<=window.innerWidth;b++)a=this.bins[b];this.current=this.params[a],this.createCurrent()},m.prototype.createCurrent=function(){this.parent&&(this.parent.innerHTML=""),"string"==typeof this.current.parent&&(this.current.parent=document.getElementById(this.current.parent));try{this.createAt(this.current.parent)}catch(a){this.bottom||(this.bottom=document.createElement("div"),document.body.appendChild(this.bottom)),this.createAt(this.bottom)}},m.prototype.createAt=function(a){a.innerHTML="",this.keys={},this.locs={},this.stl0={},this.stl1={},this.playing={},this.touches={};var b,m,n,o=this.current.pos.toUpperCase(),p=e(this.current.from),q=e(this.current.to),r=q-p+1,s=r*this.current.ww+1,t=this.current.wl+1,u=this.current.ww-1,v=this.current.wl-1,w=this.current.bw-1,x=this.current.bl-1,y="N"!=o^!this.current.rev,z="E"!=o^!this.current.rev,A=document.createElement("span");A.style.display="inline-block",A.style.position="relative",A.style.margin="0px",A.style.padding="0px",A.style.borderStyle="none",A.style.userSelect="none",A.style.MozUserSelect="none",A.style.WebkitUserSelect="none",A.style.MsUserSelect="none",A.style.KhtmlUserSelect="none","E"==o||"W"==o?(A.style.width=t+"px",A.style.height=s+"px"):(A.style.width=s+"px",A.style.height=t+"px");for(var B=0;r>B;B++)b=f(B+p),m=document.createElement("span"),this.keys[b]=m,n={display:"inline-block",position:"absolute",margin:"0px",padding:"0px",borderStyle:"solid",borderWidth:"1px"},this.locs[b]=n,"E"==o||"W"==o?(n.width=v+"px",n.height=u+"px",n.left="0px",n[z?"top":"bottom"]=this.current.ww*B+"px"):(n.width=u+"px",n.height=v+"px",n.top="0px",n[y?"left":"right"]=this.current.ww*B+"px",n.verticalAlign="top"),this.stl0[b]={backgroundColor:"#fff",borderColor:"#000"},this.stl1[b]={backgroundColor:"#aaa",borderColor:"#000"},d(m,this.stl0[b]),d(m,n),A.appendChild(m);var C=Math.ceil(this.current.ww-3*this.current.bw/4);(C+this.current.ww)%2&&C--;var D=f(p)+1,E=f(q);for(b=D;E>b;b++){var F,G=b%12,H=Math.floor(b/12);if(1==G)F=Math.floor(this.current.ww*(7*H+1.5-p))-C/2-this.current.bw;else if(3==G)F=Math.floor(this.current.ww*(7*H+1.5-p)+C/2);else if(6==G)F=this.current.ww*(7*H+5-p)-Math.floor(this.current.bw/2)-C-this.current.bw;else if(8==G)F=this.current.ww*(7*H+5-p)-Math.floor(this.current.bw/2);else{if(10!=G)continue;F=this.current.ww*(7*H+5-p)-Math.floor(this.current.bw/2)+C+this.current.bw}m=document.createElement("span"),this.keys[b]=m,n={display:"inline-block",position:"absolute",margin:"0px",padding:"0px",borderStyle:"solid",borderWidth:"1px"},this.locs[b]=n,"E"==o||"W"==o?(n.width=x+"px",n.height=w+"px",n["E"==o?"right":"left"]="0px",n[z?"top":"bottom"]=F+"px"):(n.width=w+"px",n.height=x+"px",n["N"==o?"top":"bottom"]="0px",n[y?"left":"right"]=F+"px"),this.stl0[b]={backgroundColor:"#000",borderColor:"#000"},this.stl1[b]={backgroundColor:"#888",borderColor:"#000"},d(m,this.stl0[b]),d(m,n),A.appendChild(m)}this.current.onCreate&&this.current.onCreate.apply(this),a.appendChild(A);var I=void 0===this.current.active||this.current.active;for(b in this.keys)I&&(this.keys[b].addEventListener("mousedown",g(this,b)),this.keys[b].addEventListener("mouseenter",h(this,b)),this.keys[b].addEventListener("mouseleave",i(this,b)),this.keys[b].addEventListener("mouseup",j(this,b))),this.keys[b].ondragstart=c,this.keys[b].onselectstart=c;if(I){this.mouseUpHandler=k(this),window.addEventListener("mouseup",this.mouseUpHandler);var J=l(this);A.addEventListener("touchstart",J),A.addEventListener("touchmove",J),A.addEventListener("touchend",J)}if(!this.parent&&this.bins.length>1){var K=this;this.resize=function(){K.onResize()},window.addEventListener("resize",this.resize)}this.current.parent=a,this.parent=a},m.prototype.onResize=function(){for(var a=0,b=0;b<this.bins.length&&this.bins[b]<=window.innerWidth;b++)a=this.bins[b];this.current!=this.params[a]&&(this.current=this.params[a],this.createCurrent())},m.prototype.getKey=function(a){var b=new n(this),c=JZZ.MIDI.noteValue(a);return void 0!==this.keys[c]&&b.keys.push(c),b},m.prototype.getKeys=function(a,b){var c=new n(this),d=void 0===a?void 0:JZZ.MIDI.noteValue(a),e=void 0===b?void 0:JZZ.MIDI.noteValue(b);if(void 0!==d&&void 0!==e&&d>e){var f=d;d=e,e=f}for(var g in this.keys)void 0!==d&&d>g||void 0!==e&&g>e||c.keys.push(g);return c},m.prototype.getWhiteKeys=function(a,b){var c=new n(this),d=void 0===a?void 0:JZZ.MIDI.noteValue(a),e=void 0===b?void 0:JZZ.MIDI.noteValue(b);if(void 0!==d&&void 0!==e&&d>e){var f=d;d=e,e=f}for(var g in this.keys)if(!(void 0!==d&&d>g||void 0!==e&&g>e)){var h=g%12;1!=h&&3!=h&&6!=h&&8!=h&&10!=h&&c.keys.push(g)}return c},m.prototype.getBlackKeys=function(a,b){var c=new n(this),d=void 0===a?void 0:JZZ.MIDI.noteValue(a),e=void 0===b?void 0:JZZ.MIDI.noteValue(b);if(void 0!==d&&void 0!==e&&d>e){var f=d;d=e,e=f}for(var g in this.keys)if(!(void 0!==d&&d>g||void 0!==e&&g>e)){var h=g%12;(1==h||3==h||6==h||8==h||10==h)&&c.keys.push(g)}return c},n.prototype.setInnerHTML=function(a){for(var b in this.keys)this.piano.keys[this.keys[b]].innerHTML=a;return this},n.prototype.setStyle=function(a,b){void 0===b&&(b=a);for(var c in this.keys){var e=this.keys[c];for(var f in a)this.piano.stl0[e][f]=a[f];for(var f in b)this.piano.stl1[e][f]=b[f];d(this.piano.keys[e],this.piano.playing[e]?this.piano.stl1[e]:this.piano.stl0[e]),d(this.piano.keys[e],this.piano.locs[e])}return this},o.prototype._info=function(b){return{type:"html/javascript",name:a(b),manufacturer:"virtual",version:p}},o.prototype._openIn=function(a,b){var c=new m(this._arg);c.create(),c.noteOn=function(b){JZZ.util.iosSound(),a._event(JZZ.MIDI(144,b,127))},c.noteOff=function(b){a._event(JZZ.MIDI(128,b,127))},c.forward=function(b){a._event(b)},a._send=function(a){c.external(a)},a._close=function(){c._close()},a.getKey=function(a){return c.getKey(a)},a.getKeys=function(a,b){return c.getKeys(a,b)},a.getWhiteKeys=function(a,b){return c.getWhiteKeys(a,b)},a.getBlackKeys=function(a,b){return c.getBlackKeys(a,b)},a._resume()},JZZ.input.Kbd=function(){var a,b;1==arguments.length?"string"==typeof arguments[0]?a=arguments[0]:b=arguments[0]:(a=arguments[0],b=arguments[1]);var c=new o;return c._arg=b,JZZ.lib.openMidiIn(a,c)},JZZ.input.Kbd.register=function(){var a,b;1==arguments.length?"string"==typeof arguments[0]?a=arguments[0]:b=arguments[0]:(a=arguments[0],b=arguments[1]);var c=new o;return c._arg=b,JZZ.lib.registerMidiIn(a,c)}}}();