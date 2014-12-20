/**
 * MultiBackground v1.1.3
 *  - http://multibackground.tonybogdanov.com
 *  - https://github.com/TonyBogdanov/MultiBackground
 *
 * Contributors:
 *  - http://www.tonybogdanov.com
 *
 * You may use this plugin in personal or commercial projects.
 * You can modify and redistribute it freely.
 * You can include it in any packages or projects being sold, but you cannot charge for the plugin or sell it separately.
 * Attribution is appreciated, but not required :)
 */
function onYouTubePlayerAPIReady(){mb_YouTubeAPIReady=true}function onGoogleMapsAPIReady(){mb_GoogleMapsAPIReady=true}var mb_YouTubeAPIReady=false,mb_GoogleMapsAPIReady=false;(function(e){"use strict";function n(e){n.prototype.element=e}function r(e){r.prototype.player=e}function i(e){this.element=e}function s(e){if("string"!==typeof e){throw'Color value must be of type "string"'}e=e.toLowerCase();var t=new RegExp("^#([a-f0-9]{3,4})$");if(t.test(e)){var n=t.exec(e);if(null!==n&&"string"===typeof n[1]){this.red=parseInt(n[1].substring(0,1)+n[1].substring(0,1),16);this.green=parseInt(n[1].substring(1,2)+n[1].substring(1,2),16);this.blue=parseInt(n[1].substring(2,3)+n[1].substring(2,3),16);if(4===n[1].length){this.alpha=parseInt(n[1].substring(3,4)+n[1].substring(3,4),16)}return this}}var t=new RegExp("^#([a-f0-9]{6,8})$");if(t.test(e)){var n=t.exec(e);if(null!==n&&"string"===typeof n[1]){this.red=parseInt(n[1].substring(0,2),16);this.green=parseInt(n[1].substring(2,4),16);this.blue=parseInt(n[1].substring(4,6),16);if(8===n[1].length){this.alpha=parseInt(n[1].substring(6,8),16)}return this}}var t=new RegExp("^\\s*rgb\\((\\d+),\\s*(\\d+),\\s*(\\d+)\\)\\s*$");if(t.test(e)){var n=t.exec(e);if(null!==n&&"string"===typeof n[1]&&"string"===typeof n[2]&&"string"===typeof n[3]){this.red=parseInt(n[1],10);this.green=parseInt(n[2],10);this.blue=parseInt(n[3],10);return this}}var t=new RegExp("^\\s*rgba\\((\\d+),\\s*(\\d+),\\s*(\\d+)\\,\\s*([0-9\\.]+)\\)\\s*$");if(t.test(e)){var n=t.exec(e);if(null!==n&&"string"===typeof n[1]&&"string"===typeof n[2]&&"string"===typeof n[3]&&"string"===typeof n[4]){this.red=parseInt(n[1],10);this.green=parseInt(n[2],10);this.blue=parseInt(n[3],10);this.alpha=Math.round(parseFloat(n[4])*255);return this}}throw"Color value could not be parsed, supported formats are: #09f, #09ff, #0099ff, #0099ffff, rgb(0, 128, 255), rgba(0, 128, 255, 0.5)"}e.fn.multiBackground=function(n,r){try{return e(this).each(function(){var i=e(this);switch(true){case"object"===typeof n&&"[object Array]"===Object.prototype.toString.call(n):if(0===n.length){throw"First argument cannot be an empty array"}for(var s in n){i.multiBackground(n[s],r)}return i;case"object"===typeof n:break;default:throw'Unsupported type of first argument: "'+typeof n+'"'}n=e.extend(true,{},e.fn.multiBackground._defaultOptions,n);if("string"!==typeof n["action"]){throw'Plugin options must specify a "action" param with a value of type "string"'}switch(n["action"]){case"prepend":if(true!==i.data("mb-prepared")){i.data("mb-prepared",true);i.data("mb-original-position",i.css("position"));i.css("position","relative")}var o=e.fn.multiBackground._createLayer(n);var u=i.find("> [data-multibackground-layer]");if(0===u.length){i.wrapInner('<div data-multibackground-content style="position: relative;"/>')}o.attr("data-multibackground-layer",0);i.prepend(o);if(0<u.length){u.each(function(t){e(this).attr("data-multibackground-layer",t+1)})}if("undefined"!==typeof n["slideshow"]){if("undefined"===typeof i.data("mb-slideshow")){i.data("mb-slideshow",new t(i))}i.data("mb-slideshow").prepend(o,n)}e.fn.multiBackground._loader(i);break;case"append":if(true!==i.data("mb-prepared")){i.data("mb-prepared",true);i.data("mb-original-position",i.css("position"));i.css("position","relative")}var o=e.fn.multiBackground._createLayer(n);var u=i.find("> [data-multibackground-layer]");if(0===u.length){i.wrapInner('<div data-multibackground-content style="position: relative;"/>');o.attr("data-multibackground-layer",0);i.prepend(o)}else{o.attr("data-multibackground-layer",u.length);u.last().after(o)}if("undefined"!==typeof n["slideshow"]){if("undefined"===typeof i.data("mb-slideshow")){i.data("mb-slideshow",new t(i))}i.data("mb-slideshow").append(o,n)}e.fn.multiBackground._loader(i);break;case"remove":var a=parseInt(n["index"]);if(isNaN(a)){throw'Plugin options must specify a "index" param with a value of type "integer"'}var f=i.find('> [data-multibackground-layer="'+a+'"]');if(0===f.length){throw"There is no MultiBackground layer for index: "+a}if("function"===typeof f.data("mb-refresh")){e.fn.multiBackground._refreshEvents.remove(f.data("mb-refresh"))}if("undefined"!==typeof i.data("mb-slideshow")){i.data("mb-slideshow").remove(f)}f.remove();i.find("> [data-multibackground-layer]").each(function(t){e(this).attr("data-multibackground-layer",t)});break;case"destroy":i.find("> [data-multibackground-layer]").each(function(){if("function"===typeof e(this).data("mb-refresh")){e.fn.multiBackground._refreshEvents.remove(e(this).data("mb-refresh"))}e(this).remove()});if("undefined"!==typeof i.data("mb-slideshow")){i.data("mb-slideshow").destroy()}i.find(".mb-s").remove();var l=i.find("> [data-multibackground-content]");if(0<l.contents().length){l.contents().unwrap()}else{l.remove()}i.css("position",i.data("mb-original-position"));i.removeAttr("data-multibackground-content");i.removeData("mb-prepared");break;case"playVideo":var a=parseInt(n["index"]);if(isNaN(a)){throw'Plugin options must specify a "index" param with a value of type "integer"'}var f=i.find('> [data-multibackground-layer="'+a+'"]');f.data("mb-video-player").play();break;case"pauseVideo":var a=parseInt(n["index"]);if(isNaN(a)){throw'Plugin options must specify a "index" param with a value of type "integer"'}var f=i.find('> [data-multibackground-layer="'+a+'"]');f.data("mb-video-player").pause();break;case"stopVideo":var a=parseInt(n["index"]);if(isNaN(a)){throw'Plugin options must specify a "index" param with a value of type "integer"'}var f=i.find('> [data-multibackground-layer="'+a+'"]');f.data("mb-video-player").stop();break;case"muteVideo":var a=parseInt(n["index"]);if(isNaN(a)){throw'Plugin options must specify a "index" param with a value of type "integer"'}var f=i.find('> [data-multibackground-layer="'+a+'"]');f.data("mb-video-player").mute();break;case"unMuteVideo":var a=parseInt(n["index"]);if(isNaN(a)){throw'Plugin options must specify a "index" param with a value of type "integer"'}var f=i.find('> [data-multibackground-layer="'+a+'"]');f.data("mb-video-player").unMute();break;case"playSlideshow":if("undefined"!==typeof i.data("mb-slideshow")){i.data("mb-slideshow").play()}break;case"pauseSlideshow":if("undefined"!==typeof i.data("mb-slideshow")){i.data("mb-slideshow").pause()}break;case"stopSlideshow":if("undefined"!==typeof i.data("mb-slideshow")){i.data("mb-slideshow").stop()}break;case"destroySlideshow":if("undefined"!==typeof i.data("mb-slideshow")){i.data("mb-slideshow").destroy(i)}break;default:throw'Unsupported action: "'+n["action"]+'"'}})}catch(i){if(false===r){alert("MBERROR: "+i)}console.log("MBERROR: "+i);console.trace()}};e.fn.multiBackgroundFromAttributes=function(){return e(this).each(function(){var t=e(this);var n="debug"===t.attr("data-multibackground");try{var r=e.fn.multiBackground._extractOptions(t);t.multiBackground(r,!n)}catch(i){if(n){alert("MBERROR: "+i)}console.log("MBERROR: "+i);console.trace()}})};e.fn.multiBackgroundFromIntegrator=function(){return e(this).each(function(){var t=e(this);var n="debug"===t.attr("data-multibackground-integrator");try{var r=t.attr("data-multibackground-integrator-selector");var i=e.parseJSON(t.attr("data-multibackground-integrator-options"));e(r).multiBackground(i,!n)}catch(s){if(n){alert("MBERROR: "+s)}console.log("MBERROR: "+s);console.trace()}})};e.fn.multiBackground._createLayer=function(t){if("string"!==typeof t["type"]){throw'Plugin options must specify a "type" param with a value of type "string"'}var n;switch(t["type"].toLowerCase()){case"solid":n=e.fn.multiBackground._createSolid(t);break;case"gradient":n=e.fn.multiBackground._createGradient(t);break;case"image":n=e.fn.multiBackground._createMovable(t,e.fn.multiBackground._createImage);break;case"pattern":n=e.fn.multiBackground._createMovable(t,e.fn.multiBackground._createPattern);break;case"video":n=e.fn.multiBackground._createMovable(t,e.fn.multiBackground._createVideo);break;case"youtube":n=e.fn.multiBackground._createMovable(t,e.fn.multiBackground._createYouTube);break;case"vimeo":n=e.fn.multiBackground._createMovable(t,e.fn.multiBackground._createVimeo);break;case"iframe":n=e.fn.multiBackground._createIFrame(t);break;case"gmap":n=e.fn.multiBackground._createGMap(t);break;default:throw'Unsupported background type: "'+t["type"]+'"'}n.css({position:"absolute",top:0,left:0});return n};e.fn.multiBackground._createSolid=function(t){if("string"!==typeof t["color"]){throw'Plugin options must specify a "color" param with a value of type "string"'}var n=new s(t["color"]);var r=e("<div/>");r.css({width:"100%",height:"100%","min-width":0,"max-width":"none","min-height":0,"max-height":"none",opacity:0,background:n.getRGBA()});if(n.isTranslucent()){r.attr("data-multibackground-translucent","")}if("undefined"===typeof t["slideshow"]){e.fn.multiBackground._transite(t["transitionloaded"],r,1)}return r};e.fn.multiBackground._createGradient=function(t){if("string"!==typeof t["direction"]){throw'Plugin options must specify a "direction" param with a value of type "string"'}var n,r,i,o,u,a,f,l;switch(t["direction"]){case"horizontal":n="linear";r="left";i="left top, right top";o="left";u="left";a="left";f="to right";l="1";break;case"vertical":n="linear";r="top";i="left top, left bottom";o="top";u="top";a="top";f="to bottom";l="0";break;case"diagonalUp":n="linear";r="45deg";i="left bottom, right bottom";o="45deg";u="45deg";a="45deg";f="45deg";l="1";break;case"diagonalDown":n="linear";r="-45deg";i="left top, right bottom";o="-45deg";u="-45deg";a="-45deg";f="135deg";l="1";break;case"radial":n="radial";r="center, ellipse cover";i="radial, center center, 0px, center center, 100%";o="center, ellipse cover";u="center, ellipse cover";a="center, ellipse cover";f="ellipse at center";l="1";break;default:throw'Unsupported gradient direction: "'+t["direction"]+'"'}if("object"!==typeof t["points"]||"[object Array]"!==Object.prototype.toString.call(t["points"])){throw'Plugin options must specify a "points" param with a value of type "array"'}if(0===t["points"].length){throw'Plugin options param "points" cannot be an empty array'}var c=[],h=[],p=[],d=false;for(var v in t["points"]){var m=parseFloat(t["points"][v]["position"])*100;if(isNaN(m)){throw'Each gradient point must specify a param "position" with a value of type "float"'}if("string"!==typeof t["points"][v]["color"]){throw'Each gradient point must specify a param "color" with a value of type "string"'}var g=new s(t["points"][v]["color"]);if(g.isTranslucent()){d=true}c.push(g);h.push(g.getRGBA()+" "+m+"%");p.push("color-stop("+m+"%, "+g.getRGBA()+")")}var y=e("<div/>");y.attr("style","width:100%;height:100%;min-width:0;max-width:none;min-height:0;max-height:none;opacity:0;background:"+c[0].getRGB()+";background:-moz-"+n+"-gradient("+r+","+h.join(",")+");background:-webkit-gradient("+i+","+p.join(",")+");background:-webkit-"+n+"-gradient("+o+","+h.join(",")+");background:-o-"+n+"-gradient("+u+","+h.join(",")+");background:-ms-"+n+"-gradient("+a+","+h.join(",")+");background:"+n+"-gradient("+f+","+h.join(",")+");background:progid:DXImageTransform.Microsoft.gradient(startColorstr='"+c[0].getHEX()+"',endColorstr='"+c[c.length-1].getHEX()+"',GradientType="+l+")"+";");if(d){y.attr("data-multibackground-translucent","")}if("undefined"===typeof t["slideshow"]){e.fn.multiBackground._transite(t["transitionloaded"],y,1)}return y};e.fn.multiBackground._createMovable=function(t,n){if("string"!==typeof t["attachment"]){throw'Plugin options must specify an "attachment" param with a value of type "string"'}var r=e("<div/>");var i=e(window);r.css({width:"100%",height:"100%",overflow:"hidden","min-width":0,"max-width":"none","min-height":0,"max-height":"none"});switch(t["attachment"]){case"fixed":var s=function(t){e.fn.multiBackground._refreshAttachment(r,true,false,false,0,t);return true};r.data("mb-refresh",s);r.bind("mb-refresh",s);e.fn.multiBackground._refreshEvents.add(s);break;case"static":var s=function(t){e.fn.multiBackground._refreshAttachment(r,false,true,false,0,t);return true};r.data("mb-refresh",s);r.bind("mb-refresh",s);e.fn.multiBackground._refreshEvents.add(s);break;case"parallax":var o=parseFloat(t["parallaxspeed"]);if(isNaN(o)){o=1}var s=function(t){e.fn.multiBackground._refreshAttachment(r,false,false,true,o,t);return true};r.data("mb-refresh",s);r.bind("mb-refresh",s);e.fn.multiBackground._refreshEvents.add(s);break;default:throw'Unsupported attachment: "'+t["attachment"]+'"'}return n(r,t)};e.fn.multiBackground._createImage=function(t,n){if("string"!==typeof n["url"]){throw'Plugin options must specify an "url" param with a value of type "string"'}var r=new Image;e(r).bind("load error",function(i){e(this).unbind("load error");if("load"!==i.type){return e(this)}var s=e('<img src="'+n["url"]+'" alt="" data-multibackground-inner/>');s.css({position:"absolute",left:0,top:0,opacity:0,"min-width":0,"max-width":"none","min-height":0,"max-height":"none"});t.data("mb-ready",true);t.data("mb-width",r.width);t.data("mb-height",r.height);t.append(s);t.triggerHandler("mb-refresh");if("undefined"===typeof n["slideshow"]){e.fn.multiBackground._transite(n["transitionloaded"],s,1)}else{s.css("opacity",1)}});r.src=n["url"];if(null!==n["url"].match(/\.png$/i)){t.attr("data-multibackground-translucent","")}return t};e.fn.multiBackground._createPattern=function(t,n){if("string"!==typeof n["url"]){throw'Plugin options must specify an "url" param with a value of type "string"'}var r=new Image;e(r).bind("load error",function(i){e(this).unbind("load error");if("load"!==i.type){return e(this)}var s=e('<div style="background:url('+n["url"]+')" data-multibackground-inner/>');s.css({position:"absolute",left:0,top:0,opacity:0,"min-width":0,"max-width":"none","min-height":0,"max-height":"none"});t.data("mb-ready",true);t.data("mb-width",r.width);t.data("mb-height",r.height);t.append(s);t.triggerHandler("mb-refresh");if("undefined"===typeof n["slideshow"]){e.fn.multiBackground._transite(n["transitionloaded"],s,1)}else{s.css("opacity",1)}});r.src=n["url"];if(null!==n["url"].match(/\.png$/i)){t.attr("data-multibackground-translucent","")}return t};e.fn.multiBackground._createVideo=function(t,r){if("object"!==typeof r["url"]){throw'Plugin options must specify an "url" param with a value of type "object"'}if("string"!==typeof r["url"]["mp4"]&&"string"!==typeof r["url"]["ogg"]&&"string"!==typeof r["url"]["webm"]){throw'Plugin options must specify an "url" param (of type "object") with a value of type "string" for at least one of the following keys: "mp4", "ogg" or "webm", preferable for all'}var i=e.fn.multiBackground._isTrue(r["video"]["autoplay"]);var s=e.fn.multiBackground._isTrue(r["video"]["loop"]);var o=e.fn.multiBackground._isTrue(r["video"]["muted"]);var u=e('<video preload="metadata"'+(i?' autoplay="autoplay"':"")+(s?' loop="loop"':"")+(o?' muted="muted"':"")+" data-multibackground-inner>"+("string"===typeof r["url"]["mp4"]?'<source src="'+r["url"]["mp4"]+'" type="video/mp4">':"")+("string"===typeof r["url"]["webm"]?'<source src="'+r["url"]["webm"]+'" type="video/webm">':"")+("string"===typeof r["url"]["ogg"]?'<source src="'+r["url"]["ogg"]+'" type="video/ogg">':"")+"</video>");if(i){u.prop("autoplay",true)}if(s){u.prop("loop",true)}if(o){u.prop("muted",true)}u.bind("loadedmetadata canplay",function(){u.unbind("loadedmetadata canplay");t.data("mb-ready",true);t.data("mb-width",this.videoWidth);t.data("mb-height",this.videoHeight);t.triggerHandler("mb-refresh");if("undefined"===typeof r["slideshow"]){e.fn.multiBackground._transite(r["transitionloaded"],u,1)}else{u.css("opacity",1)}if(s){u.get(0).loop=true}if(o){u.get(0).muted=true}if(i){u.get(0).play()}});u.attr("style","position:absolute;left:0;top:0;opacity:0;min-width:0;max-width:none;min-height:0;max-height:none");u.append(r["video"]["nohtml5support"]);t.data("mb-video-player",new n(u.get(0)));t.append(u);return t};e.fn.multiBackground._createYouTube=function(t,n){if("string"!==typeof n["id"]){throw'Plugin options must specify an "id" param with a value of type "string"'}var i="mbswf"+(new Date).getTime();var s=e('<div id="'+i+'"/>');if(0===e("#youtube-api").length){var o=e('<script src="http://www.youtube.com/player_api" id="youtube-api"/>');e("script").first().before(o)}var u=function(){t.data("mb-video-player",new r(new YT.Player(i,{width:n["video"]["width"],height:n["video"]["height"],videoId:n["id"],playerVars:{showinfo:0,controls:0},events:{onReady:function(r){var s=e("#"+i);s.attr("data-multibackground-inner","");t.data("mb-ready",true);t.data("mb-width",n["video"]["width"]);t.data("mb-height",n["video"]["height"]);if(e.fn.multiBackground._isTrue(n["video"]["autoplay"])){r.target.playVideo()}else{r.target.stop()}if(n["video"]["muted"]){r.target.mute()}else{r.target.unMute()}t.triggerHandler("mb-refresh");if("undefined"===typeof n["slideshow"]){e.fn.multiBackground._transite(n["transitionloaded"],s,1)}else{s.css("opacity",1)}},onStateChange:function(t){if(t.data===YT.PlayerState.ENDED&&e.fn.multiBackground._isTrue(n["video"]["loop"])){t.target.playVideo()}}}})))};if(mb_YouTubeAPIReady){u()}else{var a=setInterval(function(){if(mb_YouTubeAPIReady){clearInterval(a);u()}},100)}s.attr("style","position:absolute;left:0;top:0;opacity:0;min-width:0;max-width:none;min-height:0;max-height:none");t.append(s);return t};e.fn.multiBackground._createVimeo=function(t,n){if("string"!==typeof n["id"]){throw'Plugin options must specify an "id" param with a value of type "string"'}var r=e('<iframe src="http://player.vimeo.com/video/'+n["id"]+"?api=1&badge=0&byline=0&title=0&autoplay="+(e.fn.multiBackground._isTrue(n["video"]["autoplay"])?1:0)+"&loop="+(e.fn.multiBackground._isTrue(n["video"]["loop"])?1:0)+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen data-multibackground-inner/>');var s=function(i){var s=JSON.parse(i.data);if("ready"===s.event&&true!==t.data("mb-ready")){r.get(0).contentWindow.postMessage({method:"setVolume",value:e.fn.multiBackground._isTrue(n["video"]["muted"])?0:1},"*");t.data("mb-ready",true);t.data("mb-width",n["video"]["width"]);t.data("mb-height",n["video"]["height"]);t.triggerHandler("mb-refresh");if("undefined"===typeof n["slideshow"]){e.fn.multiBackground._transite(n["transitionloaded"],r,1)}else{r.css("opacity",1)}}};if(window.addEventListener){window.addEventListener("message",s,false)}else{window.attachEvent("onmessage",s,false)}r.attr("style","position:absolute;left:0;top:0;opacity:0;min-width:0;max-width:none;min-height:0;max-height:none");t.append(r);t.data("mb-video-player",new i(r.get(0)));return t};e.fn.multiBackground._createIFrame=function(t){if("string"!==typeof t["url"]){throw'Plugin options must specify an "url" param with a value of type "string"'}var n=e('<iframe src="'+t["url"]+'" scrolling="no" style="width:100%;height:100%;border:0;opacity:0;min-width:0;max-width:none;min-height:0;max-height:none;overflow:hidden"/>');n.bind("load",function(){n.unbind("load");if("undefined"===typeof t["slideshow"]){e.fn.multiBackground._transite(t["transitionloaded"],n,1)}});return n};e.fn.multiBackground._createGMap=function(t){if("string"!==typeof t["apikey"]){throw'Plugin options must specify an "apikey" param with a value of type "string"'}if(isNaN(parseFloat(t["latitude"]))){throw'Plugin options must specify an "latitude" param with a value of type "float"'}if(isNaN(parseFloat(t["longitude"]))){throw'Plugin options must specify an "longitude" param with a value of type "float"'}if(0===e("#gmaps-api").length){var n=e('<script src="https://maps.googleapis.com/maps/api/js?v=3&language='+t["gmap"]["language"]+"&key="+t["apikey"]+'&callback=onGoogleMapsAPIReady" id="gmaps-api"/>');e("script").first().before(n)}var r=function(){var n={center:new google.maps.LatLng(parseFloat(t["latitude"]),parseFloat(t["longitude"])),zoom:parseInt(t["gmap"]["zoom"])};var r=new google.maps.Map(s.get(0),n);if("object"===typeof t["gmap"]["marker"]){var i={map:r,position:"object"===typeof t["gmap"]["marker"]["position"]?t["gmap"]["marker"]["position"]:n["center"]};if("string"===typeof t["gmap"]["marker"]["icon"]){i["icon"]=t["gmap"]["marker"]["icon"]}var o=new google.maps.Marker(i)}if("undefined"===typeof t["slideshow"]){e.fn.multiBackground._transite(t["transitionloaded"],s,1)}};if(mb_GoogleMapsAPIReady){r()}else{var i=setInterval(function(){if(mb_GoogleMapsAPIReady){clearInterval(i);r()}},100)}var s=e("<div/>");s.attr("style","width:100%;height:100%;opacity:0;min-width:0;max-width:none;min-height:0;max-height:none");return s};e.fn.multiBackground._loader=function(t){if(0<t.children(".mb-s").length){return t}var n=function(e){var t="";var n=["-webkit-","-moz-","-ms-","-o-",""];for(var r=0;r<n.length;r++){t+=e.replace(/%v/g,n[r])}return t};var r=e('<div class="mb-s"/>');var i=e('<div class="mb-d1"/>');var s=e('<div class="mb-d2"/>');var o=e('<div class="mb-d3"/>');r.append(i);r.append(s);r.append(o);t.prepend(r);if(0===e("#mb-s").length){e("head").append('<style id="mb-s" type="text/css">.mb-s{width:20px;height:20px;position:absolute;top:50%;left:50%;margin:-10px 0 0 -10px;'+n("%vanimation:mb-r 1s infinite linear;")+"}"+n("@%vkeyframes mb-r{100%{"+n("%vtransform:rotate(360deg);")+"}}")+n("@%vkeyframes mb-s{0%,100%{"+n("%vtransform:scale(0.0);")+"}50%{"+n("%vtransform:scale(1.0);")+"}}")+".mb-d1,.mb-d2,.mb-d3{width:90%;height:90%;display:block;position:absolute;border-radius:100%;background:#d15600;"+n("%vanimation:mb-s 1.5s infinite ease-in-out;")+"}.mb-d1{top:-25%;left:25%;"+n("%vanimation-delay:-0.5s;")+"}.mb-d2{top:50%;left:-18.3%;"+n("%vanimation-delay:-1.0s;")+"}.mb-d3{top:50%;left:68.3%;"+n("%vanimation-delay:-1.5s;")+"}</style>")}return t};e.fn.multiBackground._refreshAttachment=function(t,n,r,i,s,o){if(true!==o&&(true!==t.data("mb-ready")||!e.fn.multiBackground._isVisible(t,true))){return this}var u=e(window),a=u.width(),f=u.height(),l=t.width(),c=t.height(),h=t.data("mb-width")/t.data("mb-height"),p=l,d=Math.round(p/h);if(i){if(d<c){d=c;p=d*h}d=Math.round(Math.max(d,c*(1+Math.abs(s))));p=Math.round(d*h)}else{if(d<f){d=f;p=Math.round(d*h)}}var v=Math.round((l-p)/2),m=0;if(i){var g=t.offset().top,y=g-u.height(),b=g+c,w=Math.min(1,Math.max(0,(u.scrollTop()-y)/(b-y)));m=Math.round((c-d)*(0>s?w:1-w))}else if(r){m=Math.round((f-d)/2)-t.offset().top+u.scrollTop()}else{m=Math.round((c-d)/2)}t.find("> [data-multibackground-inner]").css({width:p+"px",height:d+"px",left:v+"px",top:m+"px"});return this};e.fn.multiBackground._layersReady=function(t){for(var n=0;n<t.length;n++){if(true!==e(t[n]).data("mb-ready")){return false}}return true};e.fn.multiBackground._isVisible=function(t,n){var r=function(e,t,n){var r=0,i=0,s=0,o=0,u=0,a=0,f=0,l=0;if("undefined"!==typeof e.offset()){r=e.offset().left;s=e.offset().top}if(t.get(0)===window){u=t.scrollLeft();f=t.scrollTop()}else if("undefined"!==typeof t.offset()){u=t.offset().left;f=t.offset().top}i=r+e.width();o=s+e.height();a=u+t.width();l=f+t.height();if(true===n){return r>=u&&i<=a&&s>=f&&l<=l}else{return!(r>=a||i<=u||s>=l||o<=f)}};var i=function(t,n){while(0!==t.length&&t.get(0)!==document){if(n(e.fn.multiBackground._opacity(t))){return true}t=t.parent()}return false};var s=function(t,n){if("none"===t.css("display")){return false}if(true===n){if(i(t,function(e){return 1>e})){return false}}else{if(i(t,function(e){return 0===e})){return false}}var s=[e(window)];var o=t.parent();while(0!==o.length&&o.get(0)!==document){if("hidden"===o.css("overflow")){s.push(o)}o=o.parent()}for(var u=0;u<s.length;u++){if(!r(t,s[u],false)){return false}}return true};var o=function(e){while(0!==e.length&&e.get(0)!==document){if(e.is("[data-multibackground-content], [data-multibackground-translucent]")){return true}e=e.parent()}return false};if(!s(t)){return false}if(true===n){var u,a=t.parent().find("*");for(var f=a.index(t)+t.find("*").length+1;f<a.length;f++){u=a.eq(f);if(!o(u)&&s(u,true)&&r(t,u,true)){console.log(u.get(0));return false}}}return true};e.fn.multiBackground._parseMap=function(t){var n={};for(var r in t){var i=r.split("-");var s=t[r];for(var o=i.length-1;o>=0;o--){var u=s;s={};s[i[o]]=u}n=e.extend(true,{},n,s)}return e.fn.multiBackground._parseObjectIntoArray(n)};e.fn.multiBackground._extractOptions=function(t){var n=new RegExp("^data\\-multibackground\\-layer\\-(.*)$");var r={};for(var i,s=0,o=t.get(0).attributes,u=o.length;s<u;s++){i=o[s];if(!n.test(i.nodeName)){continue}r[n.exec(i.nodeName)[1]]=i.value}r=e.fn.multiBackground._parseMap(r);if("object"!==typeof r||"[object Array]"!==Object.prototype.toString.call(r)){console.log("MBDEBUG: Parsed options map:",r);throw"Could not initialize MultiBackground from HTML attributes, could not parse proper options map (see console log)"}return r};e.fn.multiBackground._parseObjectIntoArray=function(t){if("object"!==typeof t){return t}var n=[];var r=true;var i=0;for(var s in t){if(i!==parseInt(s)){t[s]=e.fn.multiBackground._parseObjectIntoArray(t[s]);r=false}else{n.push(e.fn.multiBackground._parseObjectIntoArray(t[s]))}i++}return r?n:t};e.fn.multiBackground._opacity=function(e){return Math.round(parseFloat(e.css("opacity"))*1e3)/1e3};e.fn.multiBackground._transite=function(t,n,r){var i=function(){if("undefined"===typeof e.fn.multiBackground._useGPU){e.fn.multiBackground._useGPU=false;var t=["-webkit-transition","-moz-transition","-o-transition","-ms-transition","transition"];for(var r in t){if("undefined"!==typeof n.css(t[r])){e.fn.multiBackground._useGPU=t[r];break}}}return e.fn.multiBackground._useGPU};switch(typeof t){case"function":return t(n,r);case"string":if("function"===typeof window[t]){return window[t](n)}var s,o,t=t.split(",");if(2!=t.length||"string"!==typeof (s=t[0])||isNaN(o=parseInt(t[1]))){break}if(50>o&&0<o){o=50}var u=i();if(false===u){if("undefined"===typeof e.easing[s]){throw"Easing: "+s+" is not defined"}n.stop().animate({opacity:r},{duration:o,easing:s})}else{n.data("mb-transite-original",n.css(u));n.css(u,"opacity "+o/1e3+"s"+" "+s+" 0s");setTimeout(function(){n.css("opacity",r)},1);n.data("mb-transite-clear-callback",function(){n.css(u,n.data("mb-transite-original"));n.removeData("mb-transite-original")});n.data("mb-transite-clear-timeout",setTimeout(n.data("mb-transite-clear-callback"),o+1))}return{easing:s,duration:o};default:throw'Unsupported transition animator type: "'+typeof t+'"'}};e.fn.multiBackground._transiteStop=function(e){e.stop();if("undefined"!==typeof e.data("mb-transite-clear-timeout")){clearTimeout(e.data("mb-transite-clear-timeout"));e.data("mb-transite-clear-callback")();e.removeData("mb-transite-clear-callback").removeData("mb-transite-clear-timeout")}};e.fn.multiBackground._isTrue=function(e){return true===e||"true"===e||1===parseInt(e)};var t=function(){this.run(0)};t.prototype.TYPE_FORWARD=0;t.prototype.TYPE_BACKWARD=1;t.prototype.TYPE_RANDOM=2;t.prototype.runner=null;t.prototype.layers={0:[],1:[],2:[]};t.prototype.currentLayer={0:null,1:null,2:null};t.prototype.playbacks={0:{callback:null,timeout:null},1:{callback:null,timeout:null},2:{callback:null,timeout:null}};t.prototype.loops={0:function(e){var t={};if(null===e.currentLayer[e.TYPE_FORWARD]){e.currentLayer[e.TYPE_FORWARD]=-1;t.prev=null}else{t.prev=e.currentLayer[e.TYPE_FORWARD]}e.currentLayer[e.TYPE_FORWARD]++;if(e.currentLayer[e.TYPE_FORWARD]>=e.layers[e.TYPE_FORWARD].length){e.currentLayer[e.TYPE_FORWARD]=0}t.next=e.currentLayer[e.TYPE_FORWARD];return t},1:function(e){var t={};if(null===e.currentLayer[e.TYPE_BACKWARD]){e.currentLayer[e.TYPE_BACKWARD]=e.layers[e.TYPE_BACKWARD].length;t.prev=null}else{t.prev=e.currentLayer[e.TYPE_BACKWARD]}e.currentLayer[e.TYPE_BACKWARD]--;if(e.currentLayer[e.TYPE_BACKWARD]<0){e.currentLayer[e.TYPE_BACKWARD]=e.layers[e.TYPE_BACKWARD].length-1}t.next=e.currentLayer[e.TYPE_BACKWARD];return t},2:function(e){var t={};var n=[];for(var r=0;r<e.layers[e.TYPE_RANDOM].length;r++){n.push(r)}if(null===e.currentLayer[e.TYPE_RANDOM]){t.prev=null}else{t.prev=e.currentLayer[e.TYPE_RANDOM];n.splice(t.prev,1)}if(0===n.length){t.next=t.prev}else{t.next=n[Math.round(Math.random()*(n.length-1))];e.currentLayer[e.TYPE_RANDOM]=t.next}return t}};t.prototype.append=function(e,t){if("undefined"===typeof t["slideshow"]["loop"]){throw'The "slideshow" key must be an object, and must specify a "loop" with a value of type "string".'}switch(t["slideshow"]["loop"]){case"forward":this.layers[this.TYPE_FORWARD].push(e);break;case"backward":this.layers[this.TYPE_BACKWARD].push(e);break;case"random":this.layers[this.TYPE_RANDOM].push(e);break;default:throw'Unsupported ["slideshow"]["loop"] value.'}e.css("opacity",0);e.data("mb-slideshow",{transition:"undefined"===typeof t["slideshow"]["transition"]?"linear,500":t["slideshow"]["transition"],delay:"undefined"===typeof t["slideshow"]["delay"]?2e3:parseInt(t["slideshow"]["delay"])});return this};t.prototype.prepend=function(e,t){if("undefined"===typeof t["slideshow"]["loop"]){throw'The "slideshow" key must be an object, and must specify a "loop" with a value of type "string".'}switch(t["slideshow"]["loop"]){case"forward":this.layers[this.TYPE_FORWARD].unshift(e);break;case"backward":this.layers[this.TYPE_BACKWARD].unshift(e);break;case"random":this.layers[this.TYPE_RANDOM].unshift(e);break;default:throw'Unsupported ["slideshow"]["loop"] value.'}e.css("opacity",0);e.data("mb-slideshow",{transition:"undefined"===typeof t["slideshow"]["transition"]?"linear,500":t["slideshow"]["transition"],delay:"undefined"===typeof t["slideshow"]["delay"]?2e3:parseInt(t["slideshow"]["delay"])});return this};t.prototype.remove=function(e){var t;if(0<this.layers[this.TYPE_FORWARD].length){if(0<=(t=this.layers[this.TYPE_FORWARD].indexOf(e))){e.removeData("mb-slideshow");this.layers[this.TYPE_FORWARD].splice(t,1);return this}}if(0<this.layers[this.TYPE_BACKWARD].length){if(0<=(t=this.layers[this.TYPE_BACKWARD].indexOf(e))){e.removeData("mb-slideshow");this.layers[this.TYPE_BACKWARD].splice(t,1);return this}}if(0<this.layers[this.TYPE_RANDOM].length){if(0<=(t=this.layers[this.TYPE_RANDOM].indexOf(e))){e.removeData("mb-slideshow");this.layers[this.TYPE_RANDOM].splice(t,1);return this}}return this};t.prototype.run=function(t){var n=this;if(null!==n.runner){clearTimeout(n.runner)}var r=function(t,r){if(null!==r.prev&&r.prev===r.next){return 6e4}if(null!==r.prev){n.layers[t][r.prev].after(n.layers[t][r.next])}if("undefined"!==typeof n.layers[t][r.next].data("mb-refresh")){n.layers[t][r.next].data("mb-refresh")(true)}var i=e.fn.multiBackground._transite(n.layers[t][r.next].data("mb-slideshow").transition,n.layers[t][r.next],1);if(null!==r.prev){n.layers[t][r.prev].data("mb-slideshow-hide",setTimeout(function(){n.layers[t][r.prev].css("opacity",0)},i.duration+50))}return i.duration+n.layers[t][r.next].data("mb-slideshow").delay};var i=function(t){if(null===n.playbacks[t].timeout&&0<n.layers[t].length){if(e.fn.multiBackground._layersReady(n.layers[t])){n.playbacks[t].callback=function(){n.playbacks[t].timeout=setTimeout(n.playbacks[t].callback,r(t,n.loops[t](n)))};n.playbacks[t].callback()}else{setTimeout(function(){i(t)},100)}}};i(n.TYPE_FORWARD);i(n.TYPE_BACKWARD);i(n.TYPE_RANDOM);if(100>t&&(0===n.layers[n.TYPE_FORWARD].length||0===n.layers[n.TYPE_BACKWARD].length||0===n.layers[n.TYPE_RANDOM].length)){n.runner=setTimeout(function(){n.run(t+1)},100)}};t.prototype.play=function(){for(var e in this.playbacks){this.playbacks[e].timeout=null}this.run(100);return this};t.prototype.pause=function(){for(var e in this.playbacks){if(null!==this.playbacks[e].timeout){clearTimeout(this.playbacks[e].timeout)}}return this};t.prototype.stop=function(){if(null!==this.runner){clearTimeout(this.runner)}for(var e in this.playbacks){if(null!==this.playbacks[e].timeout){clearTimeout(this.playbacks[e].timeout)}this.currentLayer[e]=null}return this};t.prototype.destroy=function(t){var n=t.find("> [data-multibackground-layer]");this.stop();t.removeData("mb-slideshow");e.fn.multiBackground._transiteStop(n);n.removeData("mb-slideshow").each(function(){var t=e(this);if("undefined"!==typeof t.data("mb-slideshow-hide")){clearTimeout(t.data("mb-slideshow-hide"));t.removeData("mb-slideshow-hide")}}).sort(function(e,t){var n=parseInt(e.getAttribute("data-multibackground-layer")),r=parseInt(t.getAttribute("data-multibackground-layer"));if(n>r){return 1}if(n<r){return-1}return 0}).css("opacity",1).detach().prependTo(t);return this};n.prototype.element=null;n.prototype.play=function(){this.element.play()};n.prototype.pause=function(){this.element.pause()};n.prototype.stop=function(){this.element.pause();this.element.currentTime=0};n.prototype.mute=function(){this.element.volume=0;this.element.muted=true};n.prototype.unMute=function(){this.element.volume=1;this.element.muted=false};r.prototype.player=null;r.prototype.play=function(){this.player.playVideo()};r.prototype.pause=function(){this.player.pauseVideo()};r.prototype.stop=function(){this.player.stopVideo()};r.prototype.mute=function(){this.player.mute();this.player.setVolume(0)};r.prototype.unMute=function(){this.player.unMute();this.player.setVolume(100)};i.prototype.element=null;i.prototype.play=function(){this.element.contentWindow.postMessage({method:"play"},"*")};i.prototype.pause=function(){this.element.contentWindow.postMessage({method:"pause"},"*")};i.prototype.stop=function(){this.element.contentWindow.postMessage({method:"pause"},"*")};i.prototype.mute=function(){this.element.contentWindow.postMessage({method:"setVolume"},0)};i.prototype.unMute=function(){this.element.contentWindow.postMessage({method:"setVolume"},1)};s.prototype.red=255;s.prototype.green=255;s.prototype.blue=255;s.prototype.alpha=255;s.prototype.getHEX=function(){return"#"+(this.red<16?"0":"")+this.red.toString(16)+(this.green<16?"0":"")+this.green.toString(16)+(this.blue<16?"0":"")+this.blue.toString(16)};s.prototype.getHEXA=function(){return"#"+(this.red<16?"0":"")+this.red.toString(16)+(this.green<16?"0":"")+this.green.toString(16)+(this.blue<16?"0":"")+this.blue.toString(16)+this.alpha.toString(16)+(this.alpha<16?"0":"")+this.alpha.toString(16)};s.prototype.getRGB=function(){return"rgb("+this.red+", "+this.green+", "+this.blue+")"};s.prototype.getRGBA=function(){return"rgba("+this.red+", "+this.green+", "+this.blue+", "+this.alpha/255+")"};s.prototype.isTranslucent=function(){return this.alpha<255};e.fn.multiBackground._defaultOptions={action:"append",video:{width:16,height:9,autoplay:true,loop:true,muted:true,nohtml5support:"Your browser does not support HTML5 video"},gmap:{zoom:15,language:"en"},transitionloaded:"linear,500"};e.fn.multiBackground._refreshEvents={events:[],add:function(e){this.events.push(e);return this},remove:function(e){var t=this.events.indexOf(e);if(0<=t){this.events.splice(t,1)}return this},call:function(){for(var e in this.events){this.events[e]()}return this}};e(window).bind("resize scroll",function(){e.fn.multiBackground._refreshEvents.call()});e(function(){if(!e("body").is("[data-multibackground-disablemousewheeloverride]")&&!e("body").hasClass("multibackground-disablemousewheeloverride")){e(window).bind("DOMMouseScroll mousewheel wheel",function(t){t.preventDefault();var n=e(window).scrollTop();var r=parseInt(e("body").attr("data-multibackground-mousewheeloverridespeed"));if(isNaN(r)){r=100}if(t.originalEvent.detail<0||t.originalEvent.wheelDelta>0||t.originalEvent.deltaY<0){window.scrollTo(0,n-r)}else{window.scrollTo(0,n+r)}})}});e(function(){e("[data-multibackground]").multiBackgroundFromAttributes();e("[data-multibackground-integrator]").multiBackgroundFromIntegrator()})})(jQuery)