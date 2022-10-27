
/*
hoursCount = 0, minutesCount = 0, secondsCount = 0;

hours = document.getElementById('hours')
minutes = document.getElementById('minutes')
seconds = document.getElementById('seconds')


function strt(){
    $("#stopCount").removeAttr('disabled')
    $("#resetCount").removeAttr('disabled')
    $("#startCount").attr({'disabled' : 'disabled'})

    hoursSetInterval = setInterval(function(){
        hoursCount += 1
        hours.innerHTML = hoursCount
    },60000);

    minutesSetInterval = setInterval(function(){
        minutesCount += 1
        minutes.innerHTML = minutesCount
        minutes.innerHTML = minutesCount
    },1000);

    secondsSetInterval =setInterval(function(){
        secondsCount += 1
        if(secondsCount > 59){
            secondsCount = 1
        }
        seconds.innerHTML = secondsCount
    },10);

    
}

function stp(){
    $("#startCount").removeAttr('disabled');
    //$(#resetcount).removeAttr('disabled');
    $("#stopCount").attr({'disabled' : 'disabled'});

    clearInterval(hoursSetInterval)
	clearInterval(minutesSetInterval)
	clearInterval(secondsSetInterval)

}

function rst(){
    $("#startCount").removeAttr('disabled');
    $("#resetCount").attr({'disabled' : 'disabled'});
    $("#stopCount").attr({'disabled' : 'disabled'});

    clearInterval(hoursSetInterval)
    clearInterval(minutesSetInterval)
	clearInterval(secondSetInterval)
	hoursCount = 0, minutesCount = 0,secondCount = 0
    hours.innerHTML = hoursCount
	minutes.innerHTML = minutesCount
	seconds.innerHTML = secondsCount
}
}
*/

minutesCount = 0,secondCount = 0,centiSecondCount = 0
minutes = document.getElementById('minutes')
second = document.getElementById('second')
centiSecond = document.getElementById('centiSecond')
console.log(hi);
function startSW(){
	$("#pauseCount").removeAttr("disabled")
	$("#resetCount").removeAttr("disabled")
	$("#startCount").attr({"disabled":"disabled"})
	minutesSetInterval = setInterval(function(){
		minutesCount += 1
		minutes.innerHTML = minutesCount
	},60000);
	secondSetInterval = setInterval(function(){
		secondCount += 1
		if(secondCount > 59){
			secondCount = 1
		}
		second.innerHTML = secondCount
	},1000);
	centiSecondSetInterval = setInterval(function(){
		centiSecondCount += 1
		if(centiSecondCount > 99){
			centiSecondCount = 1
		}
		centiSecond.innerHTML = centiSecondCount
	},10);
}

function pauseSW(){
	$("#startCount").removeAttr("disabled")
	$("#pauseCount").attr({"disabled":"disabled"})
	clearInterval(minutesSetInterval)
	clearInterval(secondSetInterval)
	clearInterval(centiSecondSetInterval)
}

function restartSW(){
	$("#pauseCount").attr({"disabled":"disabled"})
	$("#resetCount").attr({"disabled":"disabled"})
	$("#startCount").removeAttr("disabled")

	clearInterval(minutesSetInterval)
	clearInterval(secondSetInterval)
	clearInterval(centiSecondSetInterval)
	minutesCount = 0,secondCount = 0,centiSecondCount = 0
	minutes.innerHTML = minutesCount
	second.innerHTML = secondCount
	centiSecond.innerHTML = centiSecondCount
}


