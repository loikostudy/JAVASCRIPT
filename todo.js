
//DECLARE FORM AND INPUT  
var form = document.querySelector('yodi');
var input = document.querySelector("todo" );
var todoList = document.getElementById('todos');

var existingTodo = JSON .parse(localStorage.getItem('todos'));

var todoData = existingTodo ||  [];
todoData.forEach(todo => {
    add(todo);
});
function add()
{
    todoData.push(input);
    var liItem = document.createElement('li');
    liItem.innerHTML = input;
    todoList.appendChild(liItem);
    localStorage.setItem('todos',JSON.stringify(todoData));


};

form.onsubmit = (event ) => 
{
    event.preventDefault();
    add(input.value);
};


//DOESNT WORK IMMA TRY TO ACCEPT MY BAD CODE AND GET CODING PRACTICE 