
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x3='6.0.0.400',x2='5.0.0',x4='rgba(0,0,0,0)',x11='rgba(0,142,170,1.00)',x7='rgba(192,192,192,0.00)',e14='${text-01}',e13='${text-03}',tp='top',m='rect',lf='left',g='image',e12='${text-02}',i='none';var g5='text-01.svg',g8='powel-logo_hvit_RGB_04-2019_2.png',g10='text-03.svg',g9='Layer%201.jpg',g6='text-02.svg';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=["https://s1.adform.net/banners/scripts/rmb/Adform.DHTML.js"],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'text-01',t:g,r:['10px','0px','300px','250px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'text-02',t:g,r:['9px','-250px','300px','250px','auto','auto'],f:[x4,im+g6,'0px','0px']},{id:'Rectangle',t:m,r:['0px','0px','300px','250px','auto','auto'],cu:'pointer',f:[x7],s:[0,"rgba(0,0,0,0.00)",i]},{id:'powel-logo_hvit_RGB_04-2019_2',t:g,r:['213px','5px','101px','27px','auto','auto'],f:[x4,im+g8,'0px','0px']},{id:'Layer_1',t:g,r:['-52px','0px','167px','250px','auto','auto'],cl:'rect(0px 127px 250px 0px)',f:[x4,im+g9,'0px','0px']},{id:'text-03',t:g,r:['10px','-250px','300px','250px','auto','auto'],f:[x4,im+g10,'0px','0px']}],style:{'${Stage}':{isStage:true,r:['null','null','320px','250px','auto','auto'],overflow:'hidden',f:[x11]}}},tt:{d:16000,a:y,data:[["eid35",tp,4500,1000,"easeInOutCubic",e12,'-250px','0px'],["eid46",tp,9500,1000,"easeInOutCubic",e12,'0px','320px'],["eid44",tp,9500,1000,"easeInOutCubic",e13,'-250px','0px'],["eid41",lf,4500,0,"easeInOutCubic",e14,'10px','10px'],["eid34",tp,4500,1000,"easeInOutCubic",e14,'0px','250px'],["eid42",lf,4500,0,"easeInOutCubic",e12,'9px','9px']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-15478102");
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