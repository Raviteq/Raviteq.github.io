
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x3='6.0.0.400',x2='5.0.0',x4='rgba(0,0,0,0)',lf='left',e16='${text-01}',g='image',x13='rgba(40,40,40,1.00)',e14='${text-03}',xc='rgba(0,0,0,1)',m='rect',x12='rgba(192,192,192,0.00)',e15='${text-02}',i='none';var g6='text-01.svg',g11='Asset%201a.svg',g9='text-03.svg',g7='text-02.svg',g10='powel-logo_hvit_RGB_04-2019.svg',g8='Layer%201.jpg',g5='image.svg';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=["https://s1.adform.net/banners/scripts/rmb/Adform.DHTML.js"],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'image',t:g,r:['-481px','-1px','1160px','355px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'text-01',t:g,r:['0px','0px','300px','600px','auto','auto'],f:[x4,im+g6,'0px','0px']},{id:'text-02',t:g,r:['300px','0px','300px','600px','auto','auto'],f:[x4,im+g7,'0px','0px']},{id:'Layer_1',t:g,r:['-4px','332px','304px','456px','auto','auto'],cl:'rect(23px 304px 456px 0px)',f:[x4,im+g8,'0px','0px']},{id:'text-03',t:g,r:['300px','0px','300px','600px','auto','auto'],f:[x4,im+g9,'0px','0px']},{id:'powel-logo_hvit_RGB_04-2019',t:g,r:['41px','17px','220px','58px','auto','auto'],f:[x4,im+g10,'0px','0px']},{id:'Asset_1a',t:g,r:['76px','332px','147px','18px','auto','auto'],f:[x4,im+g11,'0px','0px']},{id:'Rectangle',t:m,r:['0px','0px','160px','600px','auto','auto'],cu:'pointer',f:[x12],s:[0,xc,i]}],style:{'${Stage}':{isStage:true,r:['null','null','300px','600px','auto','auto'],overflow:'hidden',f:[x13]}}},tt:{d:15000,a:y,data:[["eid540",lf,9500,1000,"easeInOutCubic",e14,'300px','0px'],["eid534",lf,4500,1000,"easeInOutCubic",e15,'300px','0px'],["eid541",lf,9500,1000,"easeInOutCubic",e15,'0px','-300px'],["eid535",lf,4500,1000,"easeInOutCubic",e16,'0px','-300px']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-15478102");
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