
function timeout(){alert("Times Up");}
setTimeout(timeout,'10000');

var time;
var fdrOpacity = 1;
var fdr1Obj = document.getElementById("fdr1");

function setOpacity  ()
	{
		fdr1Obj.style.opacity = fdrOpacity;
		
		
	}
	
function cycleOpacity ()
	{
		if (fdrOpacity <=1)
		{
			fdrOpacity -= .10;
			setOpacity();
		}
		else
		{
			clearInterval(time);	
		}		
	}
	
function StartCO()
	{
	time = setInterval(cycleOpacity, "100");
	}

	
var btnAccept = document.getElementById("btnAccept");

btnAccept.addEventListener('click', StartCO);