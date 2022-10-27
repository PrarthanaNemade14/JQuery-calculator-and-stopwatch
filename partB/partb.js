

hoursCount = 0, minutesCount = 0, secondsCount = 0;

hours = document.getElementById("hours");
minutes = document.getElementById("minutes");
seconds = document.getElementById("seconds");


function strt(){
    $(#stopCount).removeAttr('disabled');
    $(#resetCount).removeAttr('disabled');
    $(#startCount).attr({'disabled' : 'disabled'});

    setInterval(function(){
        hoursCount += 1;
        hours.innerHTML = hoursCount;
    },60000);

    setInterval(function(){
        minutesCount += 1
        
        minutes.innerHTML = minutesCount
    },1000);

    setInterval(function(){
        secondsCount += 1
        if(secondsCount > 59){
            secondsCount = 1
        }
        seconds.innerHTML = secondsCount
    },10);

    
}

function stp(){
    $(#startCount).removeAttr('disabled');
    //$(#resetcount).removeAttr('disabled');
    $(#stopCount).attr({'disabled' : 'disabled'});

}

function rst(){
    $(#startCount).removeAttr('disabled');
    $(#resetCount).attr({'disabled' : 'disabled'});
    $(#stopCount).attr({'disabled' : 'disabled'});


}