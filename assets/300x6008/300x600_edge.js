
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x3='6.0.0.400',x2='5.0.0',x4='rgba(0,0,0,0)',lf='left',g='image',x10='rgba(192,192,192,0.00)',e14='${Innofactorlogo_RGB_0_67_168_transparent_small_whiteCopy}',e15='${Ta-vr-test-long-2}',e13='${Innofactorlogo_RGB_0_67_168_transparent_small_white}',e11='${text-01}',x8='rgba(0,67,168,1.00)',m='rect',e16='${RoundRect2}',xc='rgba(0,0,0,1)',e12='${text-02}',i='none';var g6='Innofactorlogo_RGB_0_67_168_transparent_small_white.png',g7='text-01.svg',g5='Ta-v%C3%A5r-test-long-2.jpg',g9='text-02.svg';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=["https://s1.adform.net/banners/scripts/rmb/Adform.DHTML.js"],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'Ta-vr-test-long-2',t:g,r:['300px','0px','300px','600px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'Innofactorlogo_RGB_0_67_168_transparent_small_white',t:g,r:['5px','0px','149px','34px','auto','auto'],f:[x4,im+g6,'0px','0px']},{id:'Innofactorlogo_RGB_0_67_168_transparent_small_whiteCopy',t:g,r:['300px','0px','149px','34px','auto','auto'],f:[x4,im+g6,'0px','0px']},{id:'text-01',t:g,r:['0px','0px','300px','600px','auto','auto'],f:[x4,im+g7,'0px','0px']},{id:'RoundRect2',t:m,r:['375px','491px','139px','88px','auto','auto'],br:["19px","19px","19px","19px 19px"],f:[x8],s:[0,"rgb(0, 0, 0)",i]},{id:'text-02',t:g,r:['300px','0px','300px','600px','auto','auto'],f:[x4,im+g9,'0px','0px']},{id:'Rectangle',t:m,r:['0px','0px','160px','600px','auto','auto'],cu:'pointer',f:[x10],s:[0,xc,i]}],style:{'${Stage}':{isStage:true,r:['null','null','300px','600px','auto','auto'],overflow:'hidden',f:[x8]}}},tt:{d:15000,a:y,data:[["eid535",lf,4500,1000,"easeInOutCubic",e11,'0px','-300px'],["eid534",lf,4500,1000,"easeInOutCubic",e12,'300px','0px'],["eid532",lf,4500,1000,"easeInOutCubic",e13,'5px','-295px'],["eid533",lf,4500,1000,"easeInOutCubic",e14,'300px','0px'],["eid536",lf,4500,1000,"easeInOutCubic",e15,'300px','0px'],["eid537",lf,4500,1000,"easeInOutCubic",e16,'375px','75px']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-15478102");
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