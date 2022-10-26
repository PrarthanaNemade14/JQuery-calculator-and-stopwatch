function Validate()
{
   // alert("Please fill in the details.");

    var un = $("#name").val();
    var pass = $("#password").val();
   
    // Validation for Username
    if(un == "") {
        $(".nameErr").html("Enter Username");
    } else if(un.length < 10){
        $(".nameErr").html("Please note: The username must contain 10 letters.");
    }
    else if(un){
        $(".nameErr").html("");
    }
}

//new password
$(document).ready(function() {
    function updatePasswordsMatchLabel() {
        if ($('#password').val() == $('#confirm-password').val()) {
            $('#password-match-label').text('Superb! Your passwords match');
        } else {
            $('#password-match-label').text('Your passwords do not match');
        }
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
}

/*    // Validation for Email
    if(em == "") {
        $(".emailErr").html("Enter Email");
    } else if(em = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.(edu)$/){
        $(".emailErr").html("Please note: Enter xyz@northeastern.edu email only.");
    }
    else if(pass){
        $(".emailErr").html("");
    }
}*/

$(function(){

    //var regExp = /^\w*(\.\w*)?@\w*\.[a-z]+(\.[a-z]+)?$/;
    var regExp = /^([\w\.\+]{1,})([^\W])(@)([\northeastern]{1,})(\.[\w]{1,})+$/;
    
    $('[type="email"]').on('keyup', function() {
      $('.message').hide();
      regExp.test( $(this).val() ) ? $('.message.success').show() : $('.message.error').show();
    });
    
});









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






