
(function(compId){var _=null,y=true,n=false,or='-webkit-transform-origin',x3='6.0.0.400',x2='5.0.0',x4='rgba(0,0,0,0)',lf='left',e15='${Banner_1_-_Hydro}',x10='rgba(255,85,62,1.00)',g='image',zy='scaleY',zx='scaleX',e14='${text-01}',o='opacity',e13='${Episerver_logo}',x1='6.0.0',x12='@@0@@% @@1@@%',on='msTransformOrigin',om='-ms-transform-origin',oo='-o-transform-origin',oz='-moz-transform-origin',ot='transform-origin',tp='top',m='rect',x9='rgba(192,192,192,0.00)',xc='rgba(0,0,0,1)',e11='${text-02}',i='none';var g7='text-01.svg',g8='text-02.svg',g6='Banner%201%20-%20Hydro.png',g5='Episerver%20logo.png';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=["https://s1.adform.net/banners/scripts/rmb/Adform.DHTML.js"],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'Episerver_logo',t:g,r:['835px','312px','123px','50px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'Banner_1_-_Hydro',t:g,r:['-201px','69px','201px','161px','auto','auto'],f:[x4,im+g6,'0px','0px']},{id:'text-01',t:g,r:['0px','0px','980px','300px','auto','auto'],o:'0',f:[x4,im+g7,'0px','0px']},{id:'text-02',t:g,r:['0px','0px','980px','300px','auto','auto'],o:'0',f:[x4,im+g8,'0px','0px']},{id:'Rectangle',t:m,r:['0px','0px','980px','300px','auto','auto'],cu:'pointer',f:[x9],s:[0,xc,i]}],style:{'${Stage}':{isStage:true,r:['null','null','980px','300px','auto','auto'],overflow:'hidden',f:[x10]}}},tt:{d:15000,a:y,data:[["eid703",or,12000,0,"easeInOutBack",e11,[49.39,69],[49.39,69],{vt:x12}],["eid720",oz,12000,0,"easeInOutBack",e11,[49.39,69],[49.39,69],{vt:x12}],["eid721",om,12000,0,"easeInOutBack",e11,[49.39,69],[49.39,69],{vt:x12}],["eid722",on,12000,0,"easeInOutBack",e11,[49.39,69],[49.39,69],{vt:x12}],["eid723",oo,12000,0,"easeInOutBack",e11,[49.39,69],[49.39,69],{vt:x12}],["eid724",ot,12000,0,"easeInOutBack",e11,[49.39,69],[49.39,69],{vt:x12}],["eid678",tp,0,750,"easeInOutBack",e13,'312px','236px'],["eid683",o,1000,500,"easeInOutBack",e14,'0.000000','1'],["eid692",zx,6000,250,"easeInOutElastic",e13,'1','1.1'],["eid694",zx,6250,500,"easeInOutElastic",e13,'1.1','1'],["eid693",zy,6000,250,"easeInOutElastic",e13,'1','1.1'],["eid695",zy,6250,500,"easeInOutElastic",e13,'1.1','1'],["eid706",zx,12000,250,"easeInOutElastic",e11,'1','1.05'],["eid708",zx,12250,500,"easeInOutElastic",e11,'1.05','1'],["eid687",zy,3000,250,"easeInOutElastic",e15,'1','1.1'],["eid689",zy,3250,500,"easeInOutElastic",e15,'1.1','1'],["eid686",zx,3000,250,"easeInOutElastic",e15,'1','1.1'],["eid688",zx,3250,500,"easeInOutElastic",e15,'1.1','1'],["eid707",zy,12000,250,"easeInOutElastic",e11,'1','1.05'],["eid709",zy,12250,500,"easeInOutElastic",e11,'1.05','1'],["eid682",o,1000,500,"easeInOutBack",e11,'0.000000','1'],["eid679",lf,0,750,"easeInOutBack",e15,'-201px','0px'],["eid699",zx,9000,250,"easeInOutElastic",e14,'1','1.03'],["eid701",zx,9250,500,"easeInOutElastic",e14,'1.03','1'],["eid700",zy,9000,250,"easeInOutElastic",e14,'1','1.03'],["eid702",zy,9250,500,"easeInOutElastic",e14,'1.03','1']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-15478102");
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