

function isEmpty() {
    "use strict";
	var x = document.forms["contact_form"]["user_name"].value;
	if ((x === null) || (x === "")) {
		alert("empty field");
		return false;
	}
}



function isWorking(){
    alert ("this works");
}