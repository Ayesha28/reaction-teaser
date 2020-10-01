function randomcolor(){
	var letters='0123456789ABCDEF'.split('');
	var color="#";
	for(var i=0;i<6;i++){
	color+=letters[Math.floor(Math.random()*16)];
	}
	return color;}
	var start=new Date().getTime();
	function makeshape(){
	var width=(Math.random()*400)+100;
	var x=Math.random();
	if( x > 0.5){
	document.getElementById("shape").style.borderRadius= "50%";
	}
	else{
	document.getElementById("shape").style.borderRadius= "0";
	}
	document.getElementById("shape").style.backgroundColor= randomcolor();
	document.getElementById("shape").style.top= Math.random()*400+"px";
    document.getElementById("shape").style.left= Math.random()*400+"px";
	document.getElementById("shape").style.width= width +"px";
	document.getElementById("shape").style.height=width +"px";
	 document.getElementById("shape").style.display = "block";
	 start=new Date().getTime();
	}
	function appear(){
	setTimeout(makeshape,Math.random()*2000);}
	appear();
	document.getElementById("shape").onclick=function(){
	document.getElementById("shape").style.display = "none";
		var end=new Date().getTime();
		TimeTaken=(end-start)/1000;
		document.getElementById("time").innerHTML=TimeTaken;
       appear();
	}