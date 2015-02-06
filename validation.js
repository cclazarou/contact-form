

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
    var email = document.form["contact_form"][inputName].value;
    
    if (email.test(x)) {
        alert("is a valid email");
        return true;
    } 
    else {   
        alert("is not valid email");
        return false;
    }
}
