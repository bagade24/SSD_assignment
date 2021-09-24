


/*function content_changer(x){
	
	  //alert(x.innerHTML);
	  var newpara = document.createElement("P");  
		str = x.innerHTML;
		var textNode = document.createTextNode(str); 
		newpara.appendChild(textNode);
      document.getElementById("content").appendChild(newpara);

}*/
var i = 0;
var txt = " I am VAISHNAVI BAGADE...";
let globalstr="HOME";

 function getLocaltime(){
   return new Date().toLocaleTimeString();
 }

function display_c(){
var refresh=1000; // Refresh rate in milli seconds
mytime=setTimeout('display_ct()',refresh)

typewriter2=setTimeout("typeWriter2()",3000)
typewriter1=setTimeout("typeWriter()",3750)
}

function display_ct() {
var x = new Date();
document.getElementById("time").innerHTML =x;
document.getElementById("time").style.color="white";
document.getElementById("time").style.background="black";
document.getElementById("time").style.position="sticky";
document.getElementById("time").style.position="-webkit-sticky";
display_c();
 }

function choice(y){
	str = y.innerHTML;
	//alert(globalstr);
	if(globalstr==str)
	{
		divdisplayon(str);
		globalstr=str;
	}
	else{
		divdisplayoff(globalstr);
		divdisplayon(str);
		globalstr=str;
	}
}


function content_changer(s) {
	
	//alert(str);
  var x = document.getElementById(s);
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
//flex property
function divdisplayon(s)
{
 var x = document.getElementById(s);
	 x.style.display = "block";	
	 x.style.visiblity="visible";
	 if(s=="HOME")
	 {
	 	x.style.display="flex";
	 }
}
function divdisplayoff(s)
{
 var x = document.getElementById(s);
	 x.style.display = "none";	
	 x.style.visiblity="invisible";
}


var speed = 50;


let txt2=" Hello World !"
var j=txt2.length
function typeWriter2() {
  if (j >= 1) {
  	
    document.getElementById("titlename").innerHTML = txt2.substring(0, j);
    j--;
    setTimeout(typeWriter2, speed);
  }
  //document.getElementById("titlename").innerHTML=" ";
}

function typeWriter() {
  if (i < txt.length) {
  	
    document.getElementById("titlename").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  //document.getElementById("titlename").innerHTML=" ";
}

