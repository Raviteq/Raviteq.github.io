
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x3='6.0.0.400',x2='5.0.0',x4='rgba(0,0,0,0)',x11='rgba(0,142,170,1.00)',x8='rgba(192,192,192,0.00)',e14='${text-01}',e13='${text-03}',tp='top',m='rect',g='image',e12='${text-02}',i='none';var g5='text-01.svg',g10='powel-logo_hvit_RGB_04-2019_2.png',g7='text-03.svg',g9='Layer%201.jpg',g6='text-02.svg';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=["https://s1.adform.net/banners/scripts/rmb/Adform.DHTML.js"],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'text-01',t:g,r:['0px','24px','300px','250px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'text-02',t:g,r:['0px','23px','300px','250px','auto','auto'],f:[x4,im+g6,'0px','0px']},{id:'text-03',t:g,r:['0px','-250px','300px','250px','auto','auto'],f:[x4,im+g7,'0px','0px']},{id:'Rectangle',t:m,r:['0px','0px','300px','250px','auto','auto'],cu:'pointer',f:[x8],s:[0,"rgba(0,0,0,0.00)",i]},{id:'Layer_1',t:g,r:['-71px','0px','200px','300px','auto','auto'],cl:'rect(0px 143px 300px 0px)',f:[x4,im+g9,'0px','0px']},{id:'powel-logo_hvit_RGB_04-2019_2',t:g,r:['177px','4px','118px','29px','auto','auto'],f:[x4,im+g10,'0px','0px']}],style:{'${Stage}':{isStage:true,r:['null','null','300px','300px','auto','auto'],overflow:'hidden',f:[x11]}}},tt:{d:16000,a:y,data:[["eid35",tp,4500,1000,"easeInOutCubic",e12,'-250px','23px'],["eid65",tp,9500,1000,"easeInOutCubic",e12,'23px','300px'],["eid66",tp,9500,1000,"easeInOutCubic",e13,'-250px','32px'],["eid34",tp,4500,1000,"easeInOutCubic",e14,'24px','300px']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-15478102");
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