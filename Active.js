// (c) 2000-2014 ricocheting.com
dg = new Array();
dg[0]=new Image();dg[0].src="/Clock/dg0.gif";
dg[1]=new Image();dg[1].src="/Clock/dg1.gif";
dg[2]=new Image();dg[2].src="/Clock/dg2.gif";
dg[3]=new Image();dg[3].src="/Clock/dg3.gif";
dg[4]=new Image();dg[4].src="/Clock/dg4.gif";
dg[5]=new Image();dg[5].src="/Clock/dg5.gif";
dg[6]=new Image();dg[6].src="/Clock/dg6.gif";
dg[7]=new Image();dg[7].src="/Clock/dg7.gif";
dg[8]=new Image();dg[8].src="/Clock/dg8.gif";
dg[9]=new Image();dg[9].src="/Clock/dg9.gif";

var hr = 00;
var mn = 01;
var se = 03;

function dotime(){ 
	//var d=new Date();
	//var hr=d.getHours(),mn=d.getMinutes(),se=d.getSeconds();
    
    if (se != 00){
    se = se - 1;
    }else if (mn !=00 && se==00){
     mn = mn - 1;
     se = 59;    
    }else if (hr !=0 && mn ==00 && se==00){
     hr = hr - 1;    
     mn = 59;
     se = 59;    
    }else if (hr ==00 && mn ==00 && se ==00){
     clearInterval(t);
    }
    
	document.hr1.src = getSrc(hr,10);
	document.hr2.src = getSrc(hr,1);
	document.mn1.src = getSrc(mn,10);
	document.mn2.src = getSrc(mn,1);
	document.se1.src = getSrc(se,10);
	document.se2.src = getSrc(se,1);
}

function getSrc(digit,index){
	return dg[(Math.floor(digit/index)%10)].src;
}

function start(){
	t = setInterval(dotime,1000);
}

function stop(){
    clearInterval(t);
}

window.onload=function(){
	dotime();
}