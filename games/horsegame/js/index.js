﻿<!DOCTYPE HTML>
<html>
<head>
    <title>DNF爱的守护者 跳圈圈</title>
    <meta name="viewport" content="width=device-width,user-scalable=no"/>
    <meta charset="utf-8"/>
    <meta name="author" content="tg"/>
</head>
<style>

    html, body { background-color:#80D4FF;margin:0; padding:0;width:100%;height:100%; text-align: center}
    #loadicon{margin-top: 250px; }

    #orient{margin-top:50px;}
    p{color:#FFFFFF; font-size: 24}
</style>
<script src="js/Base64Images.js"></script>
<body  onload="complete();">

<div class="orient" id="orient" style="display:none"><p>请在竖屏情况下使用</p></div>
<div id="loadicon"><img id="img1"/><br/><img id="img2"/><br/><img id="img3"/></div>
<canvas id="gameCanvas" width="640" height="1008"></canvas>
<!--<div id="cou" style="width:320px;margin: 0 auto;"></div>3C2F3C" #191919  -->

<script src="http://pingjs.qq.com/ping_tcss_ied.js"></script>

<script>
if(typeof(pgvMain) == 'function') pgvMain();
    //横屏提示

    function orientationChange(){
        if(window.orientation==90||window.orientation==-90){
            document.getElementById("gameCanvas").style.display="none"
            document.getElementById("orient").style.display="block"
        }else{
             document.getElementById("gameCanvas").style.display="block"
            document.getElementById("orient").style.display="none"
        }
    }
    orientationChange();
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", orientationChange, false);

    function trace(v){
      console.log(v)
    }
 var ccConfig={
        "debugMode" : 0,
        "showFPS" : false,
        "frameRate" : 40,
        "id" : "gameCanvas",
        "renderMode" : 1,
        "engineDir":"./../",
        "modules" : ["cocos2d"],
        "jsList" : [
        ]
    }
document["ccConfig"]=ccConfig;
//document.getElementById("img1").src=cc._loaderImage;
document.getElementById("img2").src=cc._loadingImage;
document.getElementById("img3").src=cc.tgideasLogo;
var GD={}
GD.GETNUM=0;
GD.SCORE=0;
GD.SOUND=true
GD.MAXHITUM=0;
GD.MAXTIME=60;
GD.USETIME=0;
function complete(){
    orientationChange();
 document.getElementById("loadicon").style.display="none";
 cc.game.run();
}
 function onBridgeReady() {
     //转发朋友圈
     WeixinJSBridge.on("menu:share:timeline", function(e) {
         var url = 'http://dnf.qq.com/act/a20140925horsegame/index.html';
         var data = {
             img_url: "http://dnf.qq.com/act/a20140925horsegame/logo.png",
             img_width: "315",
             img_height: "315",
             link: url,
             //desc这个属性要加上，虽然不会显示，但是不加暂时会导致无法转发至朋友圈，
             title:"剑与盾，DNF爱的守护者降临，仰天啸，跳圈圈，怒跳火圈"+GD.NUM+"个,还有奖励领！",
             desc: "DNF爱的守护者 跳圈圈 "
         };
         WeixinJSBridge.invoke("shareTimeline", data, function(res) {

             if(pgvSendClick&&typeof(pgvSendClick) == 'function') pgvSendClick({hottag:'h5game.horsegame.shareTimeline'});
            // pgvSendClick({hottag:'act.a20140721hds.shareTimeline'});
             WeixinJSBridge.log(res.err_msg);
         });
     });
     //同步到微博
     WeixinJSBridge.on("menu:share:weibo", function() {
         var url = 'http://dnf.qq.com/act/a20140925horsegame/index.html';
         WeixinJSBridge.invoke("shareWeibo", {
             "content":"剑与盾，DNF爱的守护者降临，仰天啸，跳圈圈，怒跳"+GD.NUM+"火圈,还有奖励领！",
             "url": url
         }, function(res) {
             if(pgvSendClick&&typeof(pgvSendClick) == 'function') pgvSendClick({hottag:'h5game.horsegame.shareweibo'});
             WeixinJSBridge.log(res.err_msg);
         });
     });
     //分享给朋友
     WeixinJSBridge.on('menu:share:appmessage', function(argv) {
         var url = 'http://dnf.qq.com/act/a20140925horsegame/index.html';
         WeixinJSBridge.invoke("sendAppMessage", {
             img_url: "http://dnf.qq.com/act/a20140925horsegame/logo.png",
             img_width: "315",
             img_height: "315",
             link: url,
             title:"DNF爱的守护者 跳圈圈",
             desc: "剑与盾，DNF爱的守护者降临，仰天啸跳圈圈，怒跳"+GD.NUM+"火圈，还有奖励领！"
         }, function(res) {

             if(pgvSendClick&&typeof(pgvSendClick) == 'function') pgvSendClick({hottag:'h5game.horsegame.sharemessage'});
           //  pgvSendClick({hottag:'act.a20140721hds.sharemessage'});
             WeixinJSBridge.log(res.err_msg)
         });
     });
 };
 try{
     document.addEventListener('WeixinJSBridgeReady', function() {
         onBridgeReady();
     });
 }catch(e){}
</script>


<!--<script src="http://tgideas.qq.com/flash/h5/fight/co/lib/cocos2dtgme.js"></script>-->

<script src="js/resource.js"></script>
<script src="js/cocos2dtgme.js"></script>
<script src="js/app2.js"></script>


</body>
</html><!--[if !IE]>|xGv00|623d9e983d91e99d6d5b202a0b0dd9fb<![endif]-->
