minutesCount = 0,secondCount = 0,centiSecondCount = 0;
minutes = document.getElementById('minutes');
second = document.getElementById('second');
centiSecond = document.getElementById('centiSecond');

function startSW(){
	$("#pauseCount").removeAttr("disabled");
	$("#resetCount").removeAttr("disabled");
	$("#startCount").attr({"disabled":"disabled"});
	minutesSetInterval = setInterval(function(){
		minutesCount += 1;
		minutes.innerHTML = minutesCount;
	},60000);
	secondSetInterval = setInterval(function(){
		secondCount += 1;
		if(secondCount > 59){
			secondCount = 1;
		}
		second.innerHTML = secondCount;
	},1000);
	centiSecondSetInterval = setInterval(function(){
		centiSecondCount += 1;
		if(centiSecondCount > 99){
			centiSecondCount = 1;
		}
		centiSecond.innerHTML = centiSecondCount;
	},10);
}

function pauseSW(){
	$("#startCount").removeAttr("disabled");
	$("#pauseCount").attr({"disabled":"disabled"});
	clearInterval(minutesSetInterval);
	clearInterval(secondSetInterval);
	clearInterval(centiSecondSetInterval);
}

function restartSW(){
	$("#pauseCount").attr({"disabled":"disabled"});
	$("#resetCount").attr({"disabled":"disabled"});
	$("#startCount").removeAttr("disabled");

	clearInterval(minutesSetInterval);
	clearInterval(secondSetInterval);
	clearInterval(centiSecondSetInterval);
	minutesCount = 0,secondCount = 0,centiSecondCount = 0;
	minutes.innerHTML = minutesCount;
	second.innerHTML = secondCount;
	centiSecond.innerHTML = centiSecondCount;
}


