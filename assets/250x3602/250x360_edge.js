
(function(compId){var _=null,y=true,n=false,x15='pictogram_byggonline',x2='5.0.0',x4='rgba(0,0,0,0)',e12='${text_4}',g='image',x23='pictogram_byggonlineCopy4',x20='0',e34='${pictogram_byggonlineCopy7}',x25='pictogram_byggonlineCopy5',m='rect',x16='0px',i='none',x3='6.0.0.400',x24='rect(0px 102.60009765625px 86px 74px)',e13='${text_1}',o='opacity',lf='left',e35='${pictogram_byggonlineCopy5}',x18='86px',e31='${pictogram_byggonlineCopy6}',e32='${pictogram_byggonlineCopy4}',x17='273px',x26='rect(0px 155.80029296875px 86px 104.39990234375px)',x19='auto',e33='${pictogram_byggonline}',x30='rect(0px 273.00048828125px 86px 192px)',x29='pictogram_byggonlineCopy7',x28='rect(0px 187.400390625px 86px 158.39990234375px)',x27='pictogram_byggonlineCopy6',x10='rgba(237,211,209,1.00)',e14='${Movehome_logo1-RGB2}',x1='6.0.0',e11='${Movehome_logo1-RGB}',xc='rgba(0,0,0,1)',x9='rgba(192,192,192,0.00)',x21='rect(0px 73px 86px 0px)';var g5='text-01.svg',g22='pictogram_byggonline.svg',g6='text-03.svg',g8='Movehome_logo1-RGB.svg',g7='text-04.svg';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'text_1',t:g,r:['0px','0px','250px','360px','auto','auto'],o:'0',f:[x4,im+g5,'0px','0px']},{id:'text_3',t:g,r:['0px','0px','250px','360px','auto','auto'],o:'1',f:[x4,im+g6,'0px','0px']},{id:'text_4',t:g,r:['0px','0px','250px','360px','auto','auto'],o:'0',f:[x4,im+g7,'0px','0px']},{id:'Movehome_logo1-RGB2',t:g,r:['155px','0px','95px','86px','auto','auto'],o:'1',f:[x4,im+g8,'0px','0px']},{id:'Movehome_logo1-RGB',t:g,r:['268px','73px','193px','175px','auto','auto'],o:'0',f:[x4,im+g8,'0px','0px']},{id:'Rectangle',t:m,r:['0px','0px','250px','360px','auto','auto'],cu:'pointer',f:[x9],s:[0,xc,i]}],style:{'${Stage}':{isStage:true,r:['null','null','250px','360px','auto','auto'],overflow:'hidden',f:[x10]}}},tt:{d:15000,a:y,data:[["eid24",o,9589,500,"linear",e11,'0','1'],["eid371",o,5000,500,"linear",e12,'0.000000','1'],["eid31",o,8750,500,"linear",e12,'1','0.000000'],["eid25",lf,9589,500,"linear",e11,'-204px','28px'],["eid302",o,500,500,"linear",e13,'0','1'],["eid304",o,4500,500,"linear",e13,'1','0'],["eid16",lf,9339,250,"linear",e14,'155px','250px'],["eid14",o,9339,250,"linear",e14,'1','0']]}},"pictogram":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{cl:_,t:g,r:_,id:x15,t:g,f:_,r:[x16,x16,x17,x18,x19,x19],o:x20,o:_,cl:x21,f:[x4,im+g22,x16,x16]},{cl:_,t:g,r:_,id:x23,t:g,f:_,r:[x16,x16,x17,x18,x19,x19],o:x20,o:_,cl:x24,f:[x4,im+g22,x16,x16]},{cl:_,t:g,r:_,id:x25,t:g,f:_,r:[x16,x16,x17,x18,x19,x19],o:x20,o:_,cl:x26,f:[x4,im+g22,x16,x16]},{cl:_,t:g,r:_,id:x27,t:g,f:_,r:[x16,x16,x17,x18,x19,x19],o:x20,o:_,cl:x28,f:[x4,im+g22,x16,x16]},{cl:_,t:g,r:_,id:x29,t:g,f:_,r:[x16,x16,x17,x18,x19,x19],o:x20,o:_,cl:x30,f:[x4,im+g22,x16,x16]}],style:{'${symbolSelector}':{r:[_,_,x17,x18]}}},tt:{d:4500,a:n,data:[["eid443",o,1193,398,"linear",e31,'0','1'],["eid470",o,4000,500,"linear",e31,'1','0'],["eid435",o,398,398,"linear",e32,'0','1'],["eid468",o,4000,500,"linear",e32,'1','0'],["eid434",o,0,398,"linear",e33,'0','1'],["eid467",o,4000,500,"linear",e33,'1','0'],["eid447",o,1591,398,"linear",e34,'0','1'],["eid471",o,4000,500,"linear",e34,'1','0'],["eid439",o,795,398,"linear",e35,'0','1'],["eid469",o,4000,500,"linear",e35,'1','0']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-15478102");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",15000,function(sym,e){var numLoopsHolder=sym.getVariable("numLoops");numLoopsHolder=numLoopsHolder+1;sym.setVariable("numLoops",numLoopsHolder);if(numLoopsHolder<=1){sym.play(0);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.setVariable("numLoops",0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Stage}","click",function(sym,e){window.open(clickTag,"_blank");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"EDGE-15478102");