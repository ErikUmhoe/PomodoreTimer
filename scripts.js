document.getElementById("time").innerHTML = "25:00";
var seconds = 0;
var minutes = 25;
var timer;
document.getElementById("start").onclick = function() {
	
	timer = setInterval(changeTime, 1000);
  
}

document.getElementById("reset").onclick = function()
{
	seconds = 0;
  minutes = 25;
  clearInterval(timer);
  timer = setInterval(changeTime, 1000);
}

document.getElementById("stop").onclick = function()
{
	clearInterval(timer);
}

function breakTime() {
	
}

 function changeTime() {

	
	if(seconds <= 0)
  {
  	seconds = 59;
    minutes--;
    document.getElementById("time").innerHTML = minutes + ":" + seconds;
  }
  else if(seconds <= 10)
  {
  	seconds--;
  	document.getElementById("time").innerHTML = minutes + ":0" + seconds;
  }
  /* else if(minutes < 0)
  {
    document.getElementById("time").innerHTML = "Break Time! Starting 5 minute break counter....";
    sleep(5);
    seconds=0;
    minutes=5;
  } */
  else {
  	seconds--;
    document.getElementById("time").innerHTML = minutes + ":" + seconds;
  }
  
 
 	

}
