
function checkUsername (){



    var elMsg = document.getElementById('feedback');
    if (this.value.length<5){
        elMsg.textContent = 'Username must be 5 characters or more';

    } else {
        elMsg.textContent = '';
    }
}

var elUsername = document.getElementById('userName');
elUsername.addEventListener('blur',checkUsername,false);

//takes three properties 
//event 
//code you want to run 
//not supported by INTERNET EXPLORER 8 but it does support attachEvent()

// to remove use removeEventListener()



//using parameters with event listeners

elUsername.addEventListener('blur',function(){
    checkUsername(5);
},
false );

//  FALLBACK FOR USING EVENT LISTENRS 

var elUsername = document.getElementById('username');
var elMsg = document.getElementByOD('feedback');

function checkUsername(minLength){

if (elUsername.value.length < minLength) {
//set message 

elMsg.innerHTML = 'Username must be ' + minLength + 'characters or more';
} else{
    elMsg.innerHTML = '';
}

}

if (elUsername.addEventListener){

    elUsername.addEventListener ('blur',function(){
        checkUsername(5);
    }, false);
}  else {
        elUsername.attachEvent('onblur',function(){
            checkUsername(5);
        });
    }


    //event object 

    function checkUsername(e,minLength){
    var target = e.target;
    }
var el = document.getElementById('username');
el.addEventListener('blur',function(e){
   
    checkUsername(e,5);
},false);

//in INTERNET E 8 

function checkUsername(e){
    if (!e){
        e = window.event;
    }
}


//getting properties

var target ;
target = e.target || e.srcElement;

//start target of an event 
function getEventTarget(e){
    if(!e){
        e = window.event;
    }
    return e.target || e.srcElement;
}


// USING EVENT LISTENERS WITH EVENT OBJECT 
function checkLength(e,minLength){
    var el,elMsg;
    if (!e){
        e = window.Event;
    }
    el = e.target || e.srcElement;
    elMsg = el.nextSibling;
    if (el.value.length < minLength){
        elMsg.innerHTML `Username must be ${minLength} characters or more `;
    } else {
        elMsg.innerHTML ='';
    }
}

var elUsername = document.getElementById('username');
if (elUsername.addEventListerner){
    elUsername.addEventListener('blur',function(e){
        checkLength(e,5);
    }, false);
}
else {
    elUsername.attachEvent('onblur',function(e){
        checkLength(e,5);
    });
}