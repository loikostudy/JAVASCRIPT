var element = document.getElementById('one');
element.className = 'cool';


// selecting an element from a nodeList 

var element2 = document.getElementsByClassName('hot');
if (element2.length >=1){


    var firstItem = element2.item(0);
}

// selecting elements using class attributes  and Updating Class Name 

var element3 = document.getElementsByClassName('hot');

if (element3.length>2){

    var element = elements[2];
    element.className = 'cool';
}

//selecting elements by tag name and updating Class Name

var element4 = document.getElementsByTagName('li');
if (element4.length>0){

    var element = element4[0];
    elements.className = 'cool';
}

// selecting elements using CSS SELECTORS 

var element = document.querySelector('li.hot');
element.className = 'cool';

var elements = document.querySelectorAll('li.hot');
elements[1].className = 'cool';


// repeating actions for an entire Nodelist

var hotItems = document.querySelectorAll('li.hot');
for (var i = 0;i<hotItems.length; i++){

    hotItems[i].className = 'cool';
}

// Previous and next sibling 
// selct starting point  and find its siblings
//change values of siblings class attributes

var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

prevItem.className = 'complete';
nextItem.className = 'cool';


// first and last child 
// select starting point and find its children
//change values of the childrens class attributes
var startItem = document.getElementsByTagName('ul')[0];
var firstItem = startItem.firstChild;
var lastItem = startItem.lastChild;

firstItem.setAttribute('class','complete');
lastItem.setAttribute('class','cool');

//accessing and updating  text node 
document.getElementById('one').firstChild.nextSibling.nodeValue;

//accessing and changing text node using nodeValue
var itemTwo = document.getElementById('two');
var elText = itemTwo.firstChild.nodeValue;

elText = elText.replace('pine nuts','kale');
itemTwo.firstChild.nodeValue = elText;

//access and update text with text Content
document.getElementById('one').textContent;

//accessing text only 

//find first list item
//get value of textContent
//get value of innerText
// show content of these two properties at the end of the list
//update the first list item 

var firstItem = docunment.getElementById('one');
var showTextContent = firstItem.textContent;
var showInnerText = firstItem.innerText;

var msg = '<p> textContent: ' + showTextContent + '</p>';
msg +='<p>innerText: ' + showInnerText + '</p>';
var el = document.getElementById('scriptResults');
el.innerHTML = msg;
firstItem.textContent = 'sourdough bread';

