
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x3='6.0.0.400',x2='5.0.0',x4='rgba(0,0,0,0)',lf='left',x10='rgba(255,85,62,1.00)',g='image',e12='${text-01}',xc='rgba(0,0,0,1)',e11='${Banner_3_-_innovasjon}',m='rect',o='opacity',x9='rgba(192,192,192,0.00)',e13='${text-02}',i='none';var g7='text-01.svg',g8='text-02.svg',g6='Banner%203%20-%20innovasjon.png',g5='Episerver%20logo.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=["https://s1.adform.net/banners/scripts/rmb/Adform.DHTML.js"],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'Episerver_logo',t:g,r:['839px','237px','123px','50px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'Banner_3_-_innovasjon',t:g,r:['345px','22px','290px','255px','auto','auto'],o:'0',f:[x4,im+g6,'0px','0px']},{id:'text-01',t:g,r:['0px','0px','980px','300px','auto','auto'],o:'0',f:[x4,im+g7,'0px','0px']},{id:'text-02',t:g,r:['0px','0px','980px','300px','auto','auto'],o:'0',f:[x4,im+g8,'0px','0px']},{id:'Rectangle',t:m,r:['0px','0px','980px','300px','auto','auto'],cu:'pointer',f:[x9],s:[0,xc,i]}],style:{'${Stage}':{isStage:true,r:['null','null','980px','300px','auto','auto'],overflow:'hidden',f:[x10]}}},tt:{d:15000,a:y,data:[["eid716",o,0,500,"easeInOutCirc",e11,'0','1'],["eid719",lf,2000,500,"easeInOutCirc",e11,'345px','23px'],["eid721",o,2500,500,"easeInOutBack",e12,'0','1'],["eid725",o,6000,500,"easeInOutBack",e12,'1','0'],["eid724",o,6500,500,"easeInOutBack",e13,'0.000000','1']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-15478102");
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