
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x3='6.0.0.400',x2='5.0.0',x4='rgba(0,0,0,0)',x10='rgba(255,85,62,1.00)',g='image',e14='${text-02Copy}',e13='${text-01}',e12='${text-01Copy}',tp='top',m='rect',xc='rgba(0,0,0,1)',x9='rgba(192,192,192,0.00)',e11='${text-02}',i='none';var g7='text-01.svg',g8='text-02.svg',g6='Banner%204%20-%20Gartner.png',g5='Episerver%20logo.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=["https://s1.adform.net/banners/scripts/rmb/Adform.DHTML.js"],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'Episerver_logo',t:g,r:['720px','116px','188px','76px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'Banner_4_-_Gartner',t:g,r:['362px','8px','283px','283px','auto','auto'],f:[x4,im+g6,'0px','0px']},{id:'text-01',t:g,r:['0px','-600px','980px','300px','auto','auto'],f:[x4,im+g7,'0px','0px']},{id:'text-01Copy',t:g,r:['0px','0px','980px','300px','auto','auto'],f:[x4,im+g7,'0px','0px']},{id:'text-02',t:g,r:['0px','-300px','980px','300px','auto','auto'],f:[x4,im+g8,'0px','0px']},{id:'text-02Copy',t:g,r:['0px','300px','980px','300px','auto','auto'],f:[x4,im+g8,'0px','0px']},{id:'Rectangle',t:m,r:['0px','0px','980px','300px','auto','auto'],cu:'pointer',f:[x9],s:[0,xc,i]}],style:{'${Stage}':{isStage:true,r:['null','null','980px','300px','auto','auto'],overflow:'hidden',f:[x10]}}},tt:{d:15000,a:y,data:[["eid713",tp,3000,1000,"easeInOutElastic",e11,'300px','0px'],["eid723",tp,8000,1000,"easeInOutElastic",e11,'0px','-300px'],["eid731",tp,13000,1000,"easeInOutElastic",e11,'-300px','-600px'],["eid716",tp,3000,1000,"easeInOutElastic",e12,'600px','300px'],["eid724",tp,8000,1000,"easeInOutElastic",e12,'300px','0px'],["eid732",tp,13000,1000,"easeInOutElastic",e12,'0px','-300px'],["eid712",tp,3000,1000,"easeInOutElastic",e13,'0px','-300px'],["eid722",tp,8000,1000,"easeInOutElastic",e13,'-300px','-600px'],["eid730",tp,13000,1000,"easeInOutElastic",e13,'-600px','-900px'],["eid717",tp,3000,1000,"easeInOutElastic",e14,'900px','600px'],["eid725",tp,8000,1000,"easeInOutElastic",e14,'600px','300px'],["eid733",tp,13000,1000,"easeInOutElastic",e14,'300px','0px']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-15478102");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.setVariable("numLoops",0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Stage}","click",function(sym,e){window.open(dhtml.getVar('clickTAG','http://www.adform.com'),dhtml.getVar('landingPageTarget','_blank'));});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",15000,function(sym,e){var numLoopsHolder=sym.getVariable("numLoops");numLoopsHolder=numLoopsHolder+1;sym.setVariable("numLoops",numLoopsHolder);if(numLoopsHolder<=1){sym.play(0);}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"EDGE-15478102");