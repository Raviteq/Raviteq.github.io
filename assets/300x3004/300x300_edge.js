
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x3='6.0.0.400',x2='5.0.0',x4='rgba(0,0,0,0)',lf='left',x8='rgba(192,192,192,0.00)',cl='clip',o='opacity',e15='${Asset_1aaa}',e17='${Asset_1a}',x16='rect(@@0@@px @@1@@px @@2@@px @@3@@px)',e18='${text-03}',g='image',m='rect',e13='${text-01}',x12='rgba(214,240,239,1.00)',e14='${text-02}',i='none';var g5='text-01.svg',g11='Asset%201a.svg',g7='text-03.svg',g10='Asset%201aaa.svg',g9='Capra-logo_black.svg',g6='text-02.svg';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=["https://s1.adform.net/banners/scripts/rmb/Adform.DHTML.js"],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'text-01',t:g,r:['-10px','24px','300px','250px','auto','auto'],o:'0',f:[x4,im+g5,'0px','0px']},{id:'text-02',t:g,r:['-10px','24px','300px','250px','auto','auto'],o:'0',f:[x4,im+g6,'0px','0px']},{id:'text-03',t:g,r:['-17px','24px','300px','250px','auto','auto'],o:'0',f:[x4,im+g7,'0px','0px']},{id:'Rectangle',t:m,r:['0px','0px','300px','250px','auto','auto'],cu:'pointer',f:[x8],s:[0,"rgba(0,0,0,0.00)",i]},{id:'Capra-logo_black',t:g,r:['87px','10px','126px','64px','auto','auto'],f:[x4,im+g9,'0px','0px']},{id:'Asset_1aaa',t:g,r:['10px','235px','87px','50px','auto','auto'],cl:'rect(0px 6px 50.15673828125px 0px)',f:[x4,im+g10,'0px','0px']},{id:'Asset_1a',t:g,r:['214px','86px','72px','22px','auto','auto'],cl:'rect(0px 4px 21.681463241577px 0px)',f:[x4,im+g11,'0px','0px']}],style:{'${Stage}':{isStage:true,r:['null','null','300px','300px','auto','auto'],overflow:'hidden',f:[x12]}}},tt:{d:16000,a:y,data:[["eid70",lf,0,500,"easeInOutBack",e13,'-10px','0px'],["eid74",lf,4500,500,"easeInOutBack",e13,'0px','12px'],["eid78",lf,4500,500,"easeInOutBack",e14,'-10px','0px'],["eid82",lf,9500,500,"easeInOutBack",e14,'0px','9px'],["eid69",o,0,500,"easeInOutBack",e13,'0','1'],["eid73",o,4500,500,"easeInOutBack",e13,'1','0'],["eid88",cl,0,1000,"easeInOutCubic",e15,[0,6,50.15673828125,0],[0,87.34190368652344,50.15673828125,0],{vt:x16}],["eid77",o,4500,500,"easeInOutBack",e14,'0','1'],["eid81",o,9500,500,"easeInOutBack",e14,'1','0'],["eid90",cl,0,1000,"easeInOutCubic",e17,[0,4,21.681463241577,0],[0,71.548828125,21.68146324157715,0],{vt:x16}],["eid86",lf,9500,500,"easeInOutBack",e18,'-17px','0px'],["eid85",o,9500,500,"easeInOutBack",e18,'0','1']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-15478102");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",16000,function(sym,e){var numLoopsHolder=sym.getVariable("numLoops");numLoopsHolder=numLoopsHolder+1;sym.setVariable("numLoops",numLoopsHolder);if(numLoopsHolder<=1){sym.play(0);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.setVariable("numLoops",0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Stage}","click",function(sym,e){window.open(dhtml.getVar('clickTAG','http://www.adform.com'),dhtml.getVar('landingPageTarget','_blank'));});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"EDGE-15478102");