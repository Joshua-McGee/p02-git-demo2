//java script for calculator

//the function reads ids to calculate equations

function modify_hr(val) {
    var hr = document.getElementById('hr').value;
    var new_hr = parseInt(hr,10) + val;
    
    if (new_hr < 0) {
        new_hr = 0;
        //looks for the id hr creates a variable
        //for it and updates it based on user input
    }
    
    document.getElementById('hr').value = new_hr;
    return new_hr;
}

function modify_dy(val) {
    var dy = document.getElementById('dy').value;
    var new_dy = parseInt(dy,10) + val;
    
    if (new_dy < 0) {
        new_dy = 0;
        //looks for the id dy creates a variable
        //for it and updates it based on user input
    }
    
    document.getElementById('dy').value = new_dy;
    return new_dy;
}


function modify_ra() {
	var rate = 19.95;
	var hr = document.getElementById('hr').value;
	var dy = document.getElementById('dy').value;
    var ra = document.getElementById('ra').value;
    var new_ra = (hr*dy)*rate;
    //based on the hr and dy variable this function
    //calculates the weekly rate and returns it to the ra id element
    if (new_ra < 0) {
        new_ra = 0;
    }
    
    document.getElementById('ra').value = new_ra;
    return new_ra;
}


