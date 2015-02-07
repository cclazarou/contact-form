

function isEmpty(inputName) {
    "use strict";
	var x = document.forms["contact_form"][inputName].value;
	if ((x === null) || (x === "")) {
		alert("empty field");
		return false;
	}
}

function isEmail(inputName) {
    "use strict";
    
    var x = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/;
    var email = document.forms["contact_form"][inputName].value;
    
    
    if (x.test(email)) {
        alert("is a valid email");
        return true;
    } 
    else {   
        alert("is not valid email");
        return false;
    }
    
}

function isPhoneNumber(number) {
    "use strict";

    /* var phoneNumberRegex = only allow numbers, - and + */
    if (phoneNumberRegex.test(number)) {
        alert("is a valid phone number");
        return true;
    } else {
        alert("is not a valid phone number");
        return false;
    }
}

function commentVal(inputComment) {
    "use strict";

    /* var commentTest = regex that doesnt allow /\><[]^=+' */
    var comment = document.forms["contact_form"][inputComment].value;

    if (comment.length > 160) {
        alert("Comments cannot exceed 160 characters.");
        return false;
    } else {
        alert("comment length ok");
        return true;
    }
}