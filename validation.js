/* isEmpty checks if the field is empty, and if so tells the user to type something in that field*/
function isEmpty(inputName) {
    "use strict";
    
    
	var x = document.forms["contact_form"][inputName].value;
    
	if ((x === null) || (x === "")) { 
        /*
        var inputNameString = inputName.toString(); */
        document.getElementsByClassName(inputName)[0].innerHTML="Please type something!";
        return true;
	}
    else{  
        document.getElementsByClassName(inputName)[0].innerHTML="You typed something!";
        return false;
    }
}

/* isEmail invokes isEmpty, then checks if user typed something typically recognizeable as an email address, and let's the user know to retry if not. */
function isEmail(inputName) {
    "use strict";
    
    var x = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/;
    var email = document.forms["contact_form"][inputName].value;
    
    if(isEmpty(inputName) != true){
        if (x.test(email)) {
        document.getElementById("isEmailAlert").innerHTML="This is a valid email!";
        } 
        else {   
        document.getElementById("isEmailAlert").innerHTML="Oops, please double-check your email address!";
        }
    }    
}

/* cleanPhoneNumber removes all non-digits from user's phone number entry*/
function cleanPhoneNumber(inputName) {
    "use strict";
    
    var number = document.forms["contact_form"][inputName].value;
    var phoneNumberRegex = number.replace(/\D+/g, ""); /* regex finds all non-digits*/
    
    return(phoneNumberRegex);
}

/* isCommentVal checks if user's comment is greater than 160 characters, if so, tells user they need to type less */
function isCommentVal(inputName) {
    "use strict";

    var comment = document.forms["contact_form"][inputName].value;

    if (comment.length > 160) {
        document.getElementById("isCommentValAlert").innerHTML="Comments cannot exceed 160 characters";
    } else {
        document.getElementById("isCommentValAlert").innerHTML="Comment length ok!";
    }
}
