﻿
(function(){var GDTH={posid:'',posw:300,posh:250,needMask:false,adType:'',bannerbox:{},posborder:4,onClose:function(){},onFail:function(){},posDomain:'',postNum:'',bindEvnt:function(event,handler){if(window.addEventListener){window.addEventListener(event,handler,false);}else{window.attachEvent('on'+event,handler);}},pingHot:function(tag,opts){opts=opts||{};purl=['http://pinghot.qq.com/pingd','?dm=gdt.qq.com.hot','&url=',escape(location.pathname),'&tt=-','&hottag=h5_inter.'+tag,'&hotx='+(opts.x||9999),'&hoty='+(opts.y||9999),'&rand=',Math.random()].join('');var i=new Image();i.src=purl;},extendIframe:function(h,w){var _f=document.getElementById('gdt_ifr');_f.width=w;_f.height=h;_f.style.width=w;_f.style.height=h;},init:function(){if(!window.TencentGDT){return;}
GDTH.cfgs=window.TencentGDT;var cfg=GDTH.cfgs[0];GDTH.adType=cfg.type;GDTH.filltype=cfg.filltype;GDTH.posDomain=encodeURIComponent(document.location.protocol+'//'+
document.location.host+(document.location.port?(':'+document.location.port):''));GDTH.postNum=Math.random();GDTH.posid=cfg.posid;if(cfg.type=='banner'){GDTH.initBanner();}else{var supportPostMsg=!!(window.postMessage);GDTH.zIndex=cfg.zIndex||9999;GDTH.getWidthHeight();GDTH.needMask=!!cfg.showmask;var loadWhenInit=cfg.load;GDTH.onClose=cfg.onClose;GDTH.onFail=cfg.onFail;loadWhenInit&&this.renderWindow(GDTH.posw,GDTH.posh,GDTH.zIndex);window.setTimeout(function(){var _w=window.screen.width||10000;var _f=4;if(_w<100){_f=1;}else if(_w<300){_f=2;}else if(_w<600){_f=3;}
var _d=''+window.devicePixelRatio;if(_d){_d=_d.replace(/\./g,'_');}
GDTH.pingHot('screen'+_f+'.dpi'+_d);var ourl='ns';if(window.URL&&URL.createObjectURL){ourl='ss';}
GDTH.pingHot(ourl+'.'+GDTH.getOs());},500);}},initBanner:function(d){var _s=GDTH;if(window.QZAppExternal&&QZAppExternal.getPlatform){var platform=QZAppExternal.getPlatform();if(platform==3){GDTH.isHybrid=false;}else{GDTH.isHybrid=true;}}else{GDTH.isHybrid=false;}
var bwidth=[640,480,320,240];var bheight=[100,75,50,38];var w=480;var h=75;var os=GDTH.getOs();if(window.screen){w=window.screen.width;h=window.screen.height;if(os=='ios'){w*=window.devicePixelRatio;h*=window.devicePixelRatio;}}else if(document.body){var pixdevice=window.devicePixelRatio||1;w=document.body.clientWidth*pixdevice;h=document.body.clientHeight*pixdevice;}
if(w<h){var swap=h;h=w;w=swap;}
if(w>bwidth[0]){_s.bannerbox.posw=bwidth[0];_s.bannerbox.posh=bheight[0];}else if(w>bwidth[1]){_s.bannerbox.posw=bwidth[1];_s.bannerbox.posh=bheight[1];}else if(w>bwidth[2]){_s.bannerbox.posw=bwidth[2];_s.bannerbox.posh=bheight[2];}else{_s.bannerbox.posw=bwidth[3];_s.bannerbox.posh=bheight[3];}
_s.posw=_s.bannerbox.posw;_s.posh=_s.bannerbox.posh;_s.renderBannerWindow();},getOs:function(){var ua=navigator.userAgent||'';ua=ua.toLowerCase();if(/android|adr/.test(ua)){return'android';}else if(/ios|iphone|ipad|itouch/.test(ua)){return'ios';}
return'uncondi';},loadGDT:function(){GDTH.renderWindow(GDTH.posw,GDTH.posh,GDTH.zIndex);},getWidthHeight:function(){var _dw=document.body.clientWidth;var _dh=document.body.clientHeight;if(_dw>_dh){var swap=_dw;_dw=_dh;_dh=swap;}
var _s=GDTH;if(_s.posw*2<_dw){_s.posw*=2;_s.posh*=2;}},renderBannerWindow:function(){GDTH.posborder=0;GDTH.renderWindow(0,0,1,'http://qzonestyle.gtimg.cn/qzone/biz/res/tmpl/banner.html');},checkParam:function(val){var valid=new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&mdash;—|{}【】‘；：”“'。，、？]");return!valid.test(val);},getUid:function(){var sid=GDTH.getParameter('sid');var openid=GDTH.getParameter('openid');var openkey=GDTH.getParameter('openkey');var re='';if(sid&&GDTH.checkParam(sid)){re+='&sid='+sid;}
if(openid&&GDTH.checkParam(openid)){re+='&openid='+openid;}
if(openkey&&GDTH.checkParam(openkey)){re+='&openkey='+openkey;}
return re;},renderWindow:function(width,height,zIndex,htmlurl){var wTmpl='<div class="gdth_popup_wrap" style="margin:0 auto;position:relative;{OTHER}">\
                    {CLOSEDIV}\
                    <iframe id="gdt_ifr" style="position:static !important;display:block !important;margin:0 !important;padding:0 !important;visibility:visible !important;float:none !important;border-width:0 !important;width:{W};height:{H};"\
                     scrolling=no frameBorder=0 marginHeight=0 marginWidth=0 allowTransparency=true \
                     src="{HTMLURL}#{PARAM}"></iframe>\
                            </div>';var _s=GDTH;if(!htmlurl){htmlurl='http://qzonestyle.gtimg.cn/qzone/biz/res/tmpl/interstitial.html';}
_s.zIndex=zIndex;var appid=GDTH.cfgs[0].appid;var params='posid='+_s.posid+'&posh='+_s.posh+'&posw='+_s.posw+'&posdomain='+_s.posDomain+'&postnum='+_s.postNum+'&adtype='+_s.adType+'&ishybrid='+GDTH.isHybrid;if(appid&&appid!='undefined'){params+='&appid='+appid;}
wTmpl=wTmpl.replace(/{HTMLURL}/,htmlurl).replace(/{PARAM}/,params+_s.getUid());var wrap=document.createElement('div');wrap.setAttribute('style','display:none');wrap.id='gdt_inter_popup_wrap';if(_s.adType=='banner'){wrap.innerHTML=wTmpl.replace(/{OTHER}/,'max-width:640px;').replace(/{W}/,'100%').replace(/{H}/,'').replace(/{CLOSEDIV}/,'');var cid=GDTH.cfgs[0].containerid;var fixed=(GDTH.cfgs[0].position=='fixed')?'position:fixed':'';if(cid&&document.getElementById(cid)){fixed='';document.getElementById(cid).appendChild(wrap);}else{var dom=document.getElementById('gdt-'+_s.posid);dom.parentNode.insertBefore(wrap,dom);}
wrap.setAttribute('style',fixed+';left:0px;bottom:0;width:100%;display:none');}else{wTmpl=wTmpl.replace(/{OTHER}/,'display: inline-block;').replace(/{W}/,_s.posw).replace(/{H}/,_s.posh).replace(/{CLOSEDIV}/,'<a href="javascript:" style="width:30px;height: 30px;position: absolute;right:2px;top:2px;text-indent: -9999px;overflow: hidden;z-index: 100;" onclick="GDT.closeWindow(this)" class="icon_close">关闭</a>');wrap.innerHTML=wTmpl;document.body.appendChild(wrap);}
if(window.postMessage){GDTH.bindEvnt('message',function(evt){if(!evt.origin||evt.origin!='http://qzonestyle.gtimg.cn')return;if(!evt||!evt.data)return;var ext=JSON.parse(evt.data);var re=ext.result;if(re=='fail'){GDTH.closeWindow();GDTH.onFail();}else if(re=='succees'){GDTH.showWindow();}else if(ext.op){if(ext.op=='mqzoneclick'){QZAppExternal.callSchema(function(data){},{url:"mqzone://arouse/webview?source=push&url="+ext.url+'&safari=0&version=1'});}}});}else{GDTH.showWindow();}},getParameter:function(name,cancelBubble){var r=new RegExp("(\\?|#|&)"+name+"=([^&#]*)(&|#|$)");var m=location.href.match(r);if((!m||m=="")&&!cancelBubble)m=window.location.href.match(r);return(!m?"":m[2]);},showWindow:function(){GDTH.needMask&&GDTH.showMask(GDTH.zIndex-1);if(GDTH.adType=='interstitial'){document.getElementById('gdt_inter_popup_wrap').setAttribute('style','text-align:center;position:relative;overflow: hidden;z-index:'+GDTH.zIndex);}else if(GDTH.adType=='banner'){var wrap=document.getElementById('gdt_inter_popup_wrap');document.getElementById('gdt_inter_popup_wrap').style.display='';var width=window.getComputedStyle(wrap).width;width&&(width=width.replace(/px/,''));if(width>640)width=640;document.getElementById('gdt_ifr').style.height=width*5/32+'px';}},closeWindow:function(_s){var dom=document.getElementById('gdt_inter_popup_wrap');dom&&dom.parentNode.removeChild(dom);GDTH.pingHot('close_inters');GDTH.hideMask();GDTH.onClose();},showMask:function(zIndex){var dom=document.createElement('div');dom.id='gdt_mask';dom.setAttribute('style','display:block;position:absolute;left:0px;top:0px;width:100%;height:100%;background-color:black;opacity:.70;-moz-opacity:0.7;filter:alpha(opacity=70);z-index:'+zIndex);document.body.appendChild(dom);},hideMask:function(){var dom=document.getElementById('gdt_mask');dom&&dom.parentNode.removeChild(dom);}};GDTH.init();window.GDT={loadGDT:GDTH.loadGDT,closeWindow:GDTH.closeWindow}})();