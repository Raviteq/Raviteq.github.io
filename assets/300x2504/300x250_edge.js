
(function(compId){var _=null,y=true,n=false,x21='pictogram_byggonline',x2='5.0.0',x4='rgba(0,0,0,0)',e15='${text_4}',g='image',x25='pictogram_byggonlineCopy4',x22='0',e36='${pictogram_byggonlineCopy7}',x27='pictogram_byggonlineCopy5',m='rect',x17='0px',i='none',x3='6.0.0.400',x26='rect(0px 102.60009765625px 86px 74px)',e14='${text_1}',o='opacity',lf='left',e37='${pictogram_byggonlineCopy5}',e33='${pictogram_byggonlineCopy6}',x19='86px',e34='${pictogram_byggonlineCopy4}',e16='${text_3}',x31='pictogram_byggonlineCopy7',x18='273px',x28='rect(0px 155.80029296875px 86px 104.39990234375px)',x20='auto',e35='${pictogram_byggonline}',x32='rect(0px 273.00048828125px 86px 192px)',x30='rect(0px 187.400390625px 86px 158.39990234375px)',x29='pictogram_byggonlineCopy6',x12='rgba(237,211,209,1.00)',e13='${Movehome_logo1-RGB2}',x1='6.0.0',xc='rgba(0,0,0,1)',x10='rgba(192,192,192,0.00)',x23='rect(0px 73px 86px 0px)';var g6='text-01.svg',g24='pictogram_byggonline.svg',g9='Asset%201logo.svg',g7='text-03.svg',g5='bg.jpg',g11='Asset%201svanen.svg',g8='text-04.svg';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'bg',t:g,r:['0px','0px','300px','250px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'text_1',t:g,r:['0px','0px','300px','250px','auto','auto'],o:'0',f:[x4,im+g6,'0px','0px']},{id:'text_3',t:g,r:['0px','0px','300px','250px','auto','auto'],o:'0',f:[x4,im+g7,'0px','0px']},{id:'text_4',t:g,r:['0px','0px','300px','250px','auto','auto'],o:'0',f:[x4,im+g8,'0px','0px']},{id:'Movehome_logo1-RGB2',t:g,r:['102px','0px','95px','86px','auto','auto'],o:'1',f:[x4,im+g9,'0px','0px']},{id:'Rectangle',t:m,r:['0px','0px','300px','250px','auto','auto'],cu:'pointer',f:[x10],s:[0,xc,i]},{id:'Asset_1svanen',t:g,r:['127px','196px','45px','46px','auto','auto'],f:[x4,im+g11,'0px','0px']}],style:{'${Stage}':{isStage:true,r:['null','null','300px','250px','auto','auto'],overflow:'hidden',f:[x12]}}},tt:{d:17000,a:y,data:[["eid36",lf,7500,0,"linear",e13,'102px','102px'],["eid302",o,500,500,"linear",e14,'0','1'],["eid304",o,4500,500,"linear",e14,'1','0'],["eid371",o,10000,500,"linear",e15,'0.000000','1'],["eid31",o,13500,500,"linear",e15,'1','0.000000'],["eid37",o,0,0,"linear",e16,'0','0'],["eid33",o,4500,500,"linear",e16,'0','1'],["eid35",o,10000,500,"linear",e16,'1','0'],["eid442",o,0,0,"linear",e13,'1','1']]}},"pictogram":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{r:[x17,x17,x18,x19,x20,x20],t:g,id:x21,o:x22,cl:x23,f:[x4,im+g24,x17,x17]},{r:[x17,x17,x18,x19,x20,x20],t:g,id:x25,o:x22,cl:x26,f:[x4,im+g24,x17,x17]},{r:[x17,x17,x18,x19,x20,x20],t:g,id:x27,o:x22,cl:x28,f:[x4,im+g24,x17,x17]},{r:[x17,x17,x18,x19,x20,x20],t:g,id:x29,o:x22,cl:x30,f:[x4,im+g24,x17,x17]},{r:[x17,x17,x18,x19,x20,x20],t:g,id:x31,o:x22,cl:x32,f:[x4,im+g24,x17,x17]}],style:{'${symbolSelector}':{r:[_,_,x18,x19]}}},tt:{d:4500,a:n,data:[["eid443",o,1193,398,"linear",e33,'0','1'],["eid470",o,4000,500,"linear",e33,'1','0'],["eid435",o,398,398,"linear",e34,'0','1'],["eid468",o,4000,500,"linear",e34,'1','0'],["eid434",o,0,398,"linear",e35,'0','1'],["eid467",o,4000,500,"linear",e35,'1','0'],["eid447",o,1591,398,"linear",e36,'0','1'],["eid471",o,4000,500,"linear",e36,'1','0'],["eid439",o,795,398,"linear",e37,'0','1'],["eid469",o,4000,500,"linear",e37,'1','0']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-15478102");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",17000,function(sym,e){var numLoopsHolder=sym.getVariable("numLoops");numLoopsHolder=numLoopsHolder+1;sym.setVariable("numLoops",numLoopsHolder);if(numLoopsHolder<=1){sym.play(0);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.setVariable("numLoops",0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Stage}","click",function(sym,e){window.open(clickTag,"_blank");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"EDGE-15478102");