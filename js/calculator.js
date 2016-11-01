//java script for calculator

function modify_hr(val) {
    var hr = document.getElementById('hr').value;
    var new_hr = parseInt(hr,10) + val;
    
    if (new_hr < 0) {
        new_hr = 0;
    }
    
    document.getElementById('hr').value = new_hr;
    return new_hr;
}

function modify_dy(val) {
    var dy = document.getElementById('dy').value;
    var new_dy = parseInt(dy,10) + val;
    
    if (new_dy < 0) {
        new_dy = 0;
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
    
    if (new_ra < 0) {
        new_ra = 0;
    }
    
    document.getElementById('ra').value = new_ra;
    return new_ra;
}


