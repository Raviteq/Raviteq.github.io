
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x3='6.0.0.400',x2='5.0.0',x4='rgba(0,0,0,0)',lf='left',x10='rgba(255,85,62,1.00)',g='image',e14='${text-01}',e12='${text-01Copy}',tp='top',m='rect',e13='${Banner_4_-_Gartner}',x9='rgba(192,192,192,0.00)',e11='${text-02}',i='none';var g6='text-01.svg',g7='text-02.svg',g8='Banner%204%20-%20Gartner.png',g5='Episerver%20logo.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=["https://s1.adform.net/banners/scripts/rmb/Adform.DHTML.js"],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'Episerver_logo',t:g,r:['246px','213px','66px','28px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'text-01',t:g,r:['11px','0px','300px','250px','auto','auto'],f:[x4,im+g6,'0px','0px']},{id:'text-01Copy',t:g,r:['11px','500px','300px','250px','auto','auto'],f:[x4,im+g6,'0px','0px']},{id:'text-02',t:g,r:['11px','250px','300px','250px','auto','auto'],f:[x4,im+g7,'0px','0px']},{id:'Banner_4_-_Gartner',t:g,r:['96px','279px','107px','106px','auto','auto'],f:[x4,im+g8,'0px','0px']},{id:'Rectangle',t:m,r:['0px','0px','300px','250px','auto','auto'],cu:'pointer',f:[x9],s:[0,"rgba(0,0,0,0.00)",i]}],style:{'${Stage}':{isStage:true,r:['null','null','320px','250px','auto','auto'],overflow:'hidden',f:[x10]}}},tt:{d:15000,a:y,data:[["eid142",tp,4000,1000,"easeInOutElastic",e11,'250px','0px'],["eid166",tp,11000,1000,"easeInOutElastic",e11,'0px','-250px'],["eid180",lf,1500,0,"easeInOutBack",e11,'11px','11px'],["eid140",tp,4000,1000,"easeInOutElastic",e12,'500px','250px'],["eid164",tp,11000,1000,"easeInOutElastic",e12,'250px','0px'],["eid176",tp,4000,1000,"easeInOutElastic",e13,'279px','19px'],["eid179",tp,11000,1000,"easeInOutElastic",e13,'19px','-226px'],["eid144",tp,4000,1000,"easeInOutElastic",e14,'0px','-250px'],["eid168",tp,11000,1000,"easeInOutElastic",e14,'-250px','-500px']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-15478102");
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