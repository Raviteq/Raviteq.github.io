
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x3='6.0.0.400',x2='5.0.0',x4='rgba(0,0,0,0)',lf='left',zy='scaleY',zx='scaleX',e18='${RoundRect}',e17='${buttonbbb}',bg='background-color',e16='${text-01}',o='opacity',xc='rgba(0,0,0,1)',x13='rgba(250,250,250,1.00)',e14='${text-03}',x10='rgba(1,1,33,1.00)',m='rect',x12='rgba(192,192,192,0.00)',e15='${text-02}',g='image',i='none';var g5='text-01.svg',g7='text-03.svg',g6='text-02.svg',g9='imghand.jpg',g8='Capra-logo_black.svg',g11='buttonbbb.svg';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=["https://s1.adform.net/banners/scripts/rmb/Adform.DHTML.js"],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'text-01',t:g,r:['-12px','0px','160px','600px','auto','auto'],o:'1',f:[x4,im+g5,'0px','0px']},{id:'text-02',t:g,r:['-12px','0px','160px','600px','auto','auto'],o:'0',f:[x4,im+g6,'0px','0px']},{id:'text-03',t:g,r:['-11px','0px','160px','600px','auto','auto'],o:'0',f:[x4,im+g7,'0px','0px']},{id:'Capra-logo_black',t:g,r:['27px','11px','110px','56px','auto','auto'],f:[x4,im+g8,'0px','0px']},{id:'imghand',t:g,r:['-6px','364px','160px','240px','auto','auto'],cl:'rect(0px 160px 240px 9px)',f:[x4,im+g9,'0px','0px'],tf:[[],[],[],['1.06623','1.06623']]},{id:'RoundRect',t:m,r:['12px','305px','137px','39px','auto','auto'],br:["10px","10px","10px","10px"],f:[x10],s:[0,xc,i]},{id:'buttonbbb',t:g,r:['43px','316px','74px','16px','auto','auto'],f:[x4,im+g11,'0px','0px']},{id:'Rectangle',t:m,r:['0px','0px','160px','600px','auto','auto'],cu:'pointer',f:[x12],s:[0,xc,i]}],style:{'${Stage}':{isStage:true,r:['null','null','160px','600px','auto','auto'],overflow:'hidden',f:[x13]}}},tt:{d:15000,a:y,data:[["eid553",lf,9500,500,"easeInOutBack",e14,'-11px','0px'],["eid545",lf,4500,500,"easeInOutBack",e15,'-12px','0px'],["eid549",lf,9500,500,"easeInOutBack",e15,'0px','10px'],["eid572",o,0,0,"easeInOutBack",e16,'1','1'],["eid540",o,4500,500,"easeInOutBack",e16,'1','0'],["eid590",zx,2000,116,"easeInOutBack",e17,'1','1.05'],["eid594",zx,2116,102,"easeInOutBack",e17,'1.05','1'],["eid596",zx,7000,116,"easeInOutBack",e17,'1','1.05'],["eid597",zx,7116,102,"easeInOutBack",e17,'1.05','1'],["eid604",zx,12000,116,"easeInOutBack",e17,'1','1.05'],["eid605",zx,12116,102,"easeInOutBack",e17,'1.05','1'],["eid588",zx,2000,116,"easeInOutBack",e18,'1','1.05'],["eid592",zx,2116,102,"easeInOutBack",e18,'1.05','1'],["eid600",zx,7000,116,"easeInOutBack",e18,'1','1.05'],["eid601",zx,7116,102,"easeInOutBack",e18,'1.05','1'],["eid608",zx,12000,116,"easeInOutBack",e18,'1','1.05'],["eid609",zx,12116,102,"easeInOutBack",e18,'1.05','1'],["eid615",bg,0,0,"linear",e18,'rgba(1,1,33,1.00)','rgba(1,1,33,1.00)'],["eid541",lf,4500,500,"easeInOutBack",e16,'0px','12px'],["eid554",o,9500,500,"easeInOutBack",e14,'0','1'],["eid544",o,4500,500,"easeInOutBack",e15,'0','1'],["eid548",o,9500,500,"easeInOutBack",e15,'1','0'],["eid589",zy,2000,116,"easeInOutBack",e18,'1','1.05'],["eid593",zy,2116,102,"easeInOutBack",e18,'1.05','1'],["eid602",zy,7000,116,"easeInOutBack",e18,'1','1.05'],["eid603",zy,7116,102,"easeInOutBack",e18,'1.05','1'],["eid610",zy,12000,116,"easeInOutBack",e18,'1','1.05'],["eid611",zy,12116,102,"easeInOutBack",e18,'1.05','1'],["eid591",zy,2000,116,"easeInOutBack",e17,'1','1.05'],["eid595",zy,2116,102,"easeInOutBack",e17,'1.05','1'],["eid598",zy,7000,116,"easeInOutBack",e17,'1','1.05'],["eid599",zy,7116,102,"easeInOutBack",e17,'1.05','1'],["eid606",zy,12000,116,"easeInOutBack",e17,'1','1.05'],["eid607",zy,12116,102,"easeInOutBack",e17,'1.05','1']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-15478102");
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