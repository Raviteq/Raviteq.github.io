
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x3='6.0.0.400',x2='5.0.0',x4='rgba(0,0,0,0)',lf='left',x10='rgba(255,85,62,1.00)',g='image',e14='${text-01}',e13='${text-01Copy}',xc='rgba(0,0,0,1)',m='rect',e11='${Banner_4_-_Gartner}',x9='rgba(192,192,192,0.00)',e12='${text-02}',i='none';var g5='text-01.svg',g7='text-02.svg',g8='Banner%204%20-%20Gartner.png',g6='Episerver%20logo.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=["https://s1.adform.net/banners/scripts/rmb/Adform.DHTML.js"],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'text-01',t:g,r:['0px','0px','160px','600px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'Episerver_logoCopy',t:g,r:['19px','540px','121px','50px','auto','auto'],f:[x4,im+g6,'0px','0px']},{id:'text-01Copy',t:g,r:['-321px','0px','160px','600px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'text-02',t:g,r:['-160px','0px','160px','600px','auto','auto'],f:[x4,im+g7,'0px','0px']},{id:'Banner_4_-_Gartner',t:g,r:['-149px','82px','137px','137px','auto','auto'],f:[x4,im+g8,'0px','0px']},{id:'Rectangle',t:m,r:['0px','0px','160px','600px','auto','auto'],cu:'pointer',f:[x9],s:[0,xc,i]}],style:{'${Stage}':{isStage:true,r:['null','null','160px','600px','auto','auto'],overflow:'hidden',f:[x10]}}},tt:{d:15000,a:y,data:[["eid618",lf,4000,1000,"easeInOutElastic",e11,'-149px','12px'],["eid621",lf,11000,1000,"easeInOutElastic",e11,'12px','172px'],["eid578",lf,4000,1000,"easeInOutElastic",e12,'-160px','1px'],["eid602",lf,11000,1000,"easeInOutElastic",e12,'1px','161px'],["eid581",lf,4000,1000,"easeInOutElastic",e13,'-321px','-160px'],["eid605",lf,11000,1000,"easeInOutElastic",e13,'-160px','0px'],["eid579",lf,4000,1000,"easeInOutElastic",e14,'0px','161px'],["eid603",lf,11000,1000,"easeInOutElastic",e14,'161px','321px']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-15478102");
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