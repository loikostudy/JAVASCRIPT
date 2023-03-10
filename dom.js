// find element 

var element = document.getElementById('one');

//update elements class name 
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

//UPDATE TEXT AND MARKUP 

// store first list item
var firstItem = document.getElementById('one');
//get content of first item
var itemContent = firstItem.innerHTML;
//update content 
firstItem.innerHTML = '<a href=\"http://example.org\">' + itemContent + '</a>';


//ADDING USING DOM MANIPULATION 

createElement()
createTextNode()
appendChild()
// create new element
var newElement = document.createElement('li');
//create text node
var newText = document.createTextNode('quinoa');
//attach text node
newElement.appendChild(nextText);

//store location of element
var position = document.getElementByTagName('ul')[0];

//insert new element 
position.appendChild(newElement);

//REMOVING USING DOM MANIPULATION 
removeChild()

//removing an element
var removeElement = document.getElementByTagName('li')[3];
var containerElement = removeElement.parentNode;

containerElement.removeChild(removeElement);


//COMPARING TECHNIQUES FOR UPDATING HTML CONTENT

document.write()
// quick and easy way to show beginners how to add content to a page
element.innerHTML
//lets you update entire content of an element faster than DOM Manipulation

//DOM MANIPULATION does not affect event handlers


// FINDING ATTRIVUTE AND RETRIEVING VALUES 

var firstitem = document.getElementById('one');

if (firstItem.hasAttribute('class')){

    var attr = firstItem.getAttribute('class');
    var element = document.getElementById('scriptResult');

    element.innerHTML = '<p> The first item has a class name : ' +attr + '</p<';

}

//creating attributes and changing values 

var firstItem = document.getElementById('one');
firstItem.className = 'complete';

//ADDING ATTRIBUTE to element 
var fourthItem = document.getElementByTagName('li').item(3);
fourthItem.setAttribute('class','cool');

//REMOVING ATTRIBUTES

var firstItem = document.getElementById('one');

if(firstItem.hasAttribute('class')){
    firstItem.removeAttribute('class');
}

//ADDING ITEMS TP START AND END OF A LIST 

var list = document.getElementByTagName('ul')[0];
//parent.insertBefore(newItem,target)

//ADD NEW ITEM TO END OF LIST 

var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('cream');

newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);


//ALL LI ELEMENTS
var listItems = document.querySelectorAll('li');

var i; 
for (i = 0; i <listItems.length;i++){
    listItems[i].className = 'cool';
}

//ADD N ITEMS IN LIST to HEADING 
var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + '<span>' + totalItems + '</span>';
heading.innerHTML = newHeading;