


//display logged in username
$(document).ready(function(){
    $('.error').hide();
    $("#submit").click(function(){
        var emailid = $("email").val();
        var username = $("name").val();
        var passwrd = $("password").val();

        var data = $("#form").serializeArray();
        for(i in data){
            console.log(data[i]);
        }

        if(emailid.length<1){
            $("#emailid").next().show();
            return false;
        }

        if(username.length<1){
            $("#username").next().show();
            return false;
        }

        if(IsEmail(emailid) == false){
            $('#invalidemail').show();
            return false;
        }

        if(passswrd.length<1){
            $("#passwrd").next().show();
            return false;
        }

        if(IsPassword(passwrd) == false){
            $('#invalidpassword').show();
            return false;
        }

        else{
           
            document.location.href = 'c.html?username=' + username;
            alert("success");
            return true;
        }

    })
})





// Calculator function

function Operation(operand) { 
				
    var firstValue = parseInt(document.getElementById('number1').value);
    var secondValue = parseInt(document.getElementById('number2').value);
    var thirdValue = parseInt(document.getElementById('number3').value);				
    var result = 0;

    switch(operand){

        case '+' : 	result = ( (x, y, z) => {	return x + y + z; } )( firstValue, secondValue, thirdValue );
                    break;

        case '-' : 	result = ( (x, y, z) => {	return x - y - z; } )( firstValue, secondValue, thirdValue );
                    break;
        case '*' : 	result = ( (x, y, z) => {	return x * y * z; } )( firstValue, secondValue, thirdValue );
                    break;
        case '/' : 	result = ( (x, y, z) => {	return x / y / z; } )( firstValue, secondValue, thirdValue );
                    break;
    }



    document.getElementsByName('display')[0].value= result;
    //console.log(('display')[0].valueOf= this.result);
    //$("#displayValue").val(result);
    //alert(result);
    $(document).ready(function () {
        $("#display").click(function () {
            $("input:number").val(result);
        });
    });
}








