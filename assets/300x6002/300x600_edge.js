
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x3='6.0.0.400',x2='5.0.0',x4='rgba(0,0,0,0)',lf='left',x11='rgba(192,192,192,0.00)',cl='clip',g='image',e17='${Asset_1a}',e15='${Asset_1aaa}',o='opacity',x16='rect(@@0@@px @@1@@px @@2@@px @@3@@px)',e18='${text-03}',e13='${text-01}',m='rect',x12='rgba(250,250,250,1.00)',xc='rgba(0,0,0,1)',e14='${text-02}',i='none';var g5='text-01.svg',g10='Asset%201a.svg',g7='text-03.svg',g9='Asset%201aaa.svg',g8='Capra-logo_black.svg',g6='text-02.svg';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=["https://s1.adform.net/banners/scripts/rmb/Adform.DHTML.js"],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'text-01',t:g,r:['-9px','0px','300px','600px','auto','auto'],o:'0',f:[x4,im+g5,'0px','0px']},{id:'text-02',t:g,r:['-9px','0px','300px','600px','auto','auto'],o:'0',f:[x4,im+g6,'0px','0px']},{id:'text-03',t:g,r:['-10px','0px','300px','600px','auto','auto'],o:'0',f:[x4,im+g7,'0px','0px']},{id:'Capra-logo_black',t:g,r:['99px','523px','117px','59px','auto','auto'],f:[x4,im+g8,'0px','0px']},{id:'Asset_1aaa',t:g,r:['10px','435px','115px','66px','auto','auto'],cl:'rect(0px 97px 66px 0px)',f:[x4,im+g9,'0px','0px']},{id:'Asset_1a',t:g,r:['173px','16px','115px','39px','auto','auto'],cl:'rect(0px 2px 39px 0px)',f:[x4,im+g10,'0px','0px']},{id:'Rectangle',t:m,r:['0px','0px','160px','600px','auto','auto'],cu:'pointer',f:[x11],s:[0,xc,i]}],style:{'${Stage}':{isStage:true,r:['null','null','300px','600px','auto','auto'],overflow:'hidden',f:[x12]}}},tt:{d:15000,a:y,data:[["eid545",lf,0,500,"easeInOutBack",e13,'-9px','0px'],["eid549",lf,4500,500,"easeInOutBack",e13,'0px','10px'],["eid553",lf,4500,500,"easeInOutBack",e14,'-9px','0px'],["eid557",lf,9500,500,"easeInOutBack",e14,'0px','8px'],["eid563",cl,0,1000,"easeInOutCubic",e15,[0,9,66,0],[0,97,66,0],{vt:x16}],["eid544",o,0,500,"easeInOutBack",e13,'0','1'],["eid548",o,4500,500,"easeInOutBack",e13,'1','0'],["eid552",o,4500,500,"easeInOutBack",e14,'0','1'],["eid556",o,9500,500,"easeInOutBack",e14,'1','0'],["eid565",cl,0,1000,"easeInOutCubic",e17,[0,2,39,0],[0,115,39,0],{vt:x16}],["eid560",o,9500,500,"easeInOutBack",e18,'0','1'],["eid561",lf,9500,500,"easeInOutBack",e18,'-10px','0px']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-15478102");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",15000,function(sym,e){var numLoopsHolder=sym.getVariable("numLoops");numLoopsHolder=numLoopsHolder+1;sym.setVariable("numLoops",numLoopsHolder);if(numLoopsHolder<=1){sym.play(0);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.setVariable("numLoops",0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Stage}","click",function(sym,e){window.open(dhtml.getVar('clickTAG','http://www.adform.com'),dhtml.getVar('landingPageTarget','_blank'));});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"EDGE-15478102");