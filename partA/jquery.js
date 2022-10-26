function Validate()
{
   // alert("Please fill in the details.");

    var un = $("#name").val();
    var pass = $("#password").val();
    var em = $("#email").val();
   
    // Validation for Username
    if(un == "") {
        $(".nameErr").html("Enter Username");
    } else if(un.length < 10){
        $(".nameErr").html("Please note: The username must contain 10 letters.");
    }
    else if(un){
        $(".nameErr").html("");
    }

    // Validation for Password
    if(pass == "") {
        $(".passwordErr").html("Enter Password");
    } else if(pass.length <= 8){
        $(".passwordErr").html("Please note: The password must contain 8 or more letters.");
    }
    else if(pass){
        $(".passwordErr").html("");
    }

    // Validation for email
    if(em == "") {
        $(".emailErr").html("Enter Email");
    } else if(em == /^([\w\.\+]{1,})([^\W])(@)([\northeastern]{1,})(\.[\w]{1,})+$/){
        $(".emailErr").html("Please note: Enter xyz@northeastern.edu email only.");
    }
    else if(pass){
        $(".emailErr").html("");
    }
}







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








