//traditional DOM EVENT HANDLER 

function checkUsername(){


var elMsg = document.getElementById('feedback');
if (this.value.length<5){

    elMsg.textContent = 'Username must be 5 characters or more ';

}

else {
    elMsg.textContent = '';
}

var elUsername = document.getElementById('username');
elUsername.onblue = checkUsername;
}

//event name is proceeded by word on 

// onsubmit 
// onchange
//onfoucs
//onblur
//onmouseover
//onmouseout