
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x3='6.0.0.400',x2='5.0.0',x4='rgba(0,0,0,0)',x10='rgba(255,85,62,1.00)',g='image',e12='${text-01}',x9='rgba(192,192,192,0.00)',tp='top',m='rect',o='opacity',e11='${Banner_3_-_innovasjon}',e13='${text-02}',i='none';var g8='text-01.svg',g7='text-02.svg',g6='Banner%203%20-%20innovasjon.png',g5='Episerver%20logo.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=["https://s1.adform.net/banners/scripts/rmb/Adform.DHTML.js"],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'Episerver_logo',t:g,r:['224px','264px','66px','28px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'Banner_3_-_innovasjon',t:g,r:['64px','70px','172px','150px','auto','auto'],o:'0',f:[x4,im+g6,'0px','0px']},{id:'text-02',t:g,r:['0px','44px','300px','250px','auto','auto'],o:'0',f:[x4,im+g7,'0px','0px']},{id:'text-01',t:g,r:['0px','44px','300px','250px','auto','auto'],o:'0',f:[x4,im+g8,'0px','0px']},{id:'Rectangle',t:m,r:['0px','0px','300px','250px','auto','auto'],cu:'pointer',f:[x9],s:[0,"rgba(0,0,0,0.00)",i]}],style:{'${Stage}':{isStage:true,r:['null','null','300px','300px','auto','auto'],overflow:'hidden',f:[x10]}}},tt:{d:15000,a:y,data:[["eid204",tp,2000,500,"easeInOutCirc",e11,'70px','17px'],["eid193",o,2500,500,"easeInOutBack",e12,'0.000000','1'],["eid195",o,6000,500,"easeInOutBack",e12,'1','0'],["eid197",o,6500,500,"easeInOutBack",e13,'0.000000','1'],["eid176",o,0,500,"easeInOutBack",e11,'0.000000','1']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-15478102");
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