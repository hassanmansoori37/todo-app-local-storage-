
var ul = document.getElementById('ul');

var input = document.getElementById('input');

var todos =  JSON.parse(localStorage.getItem('todos')) || [];


function todo() {
    // if(inp.value.trim() !== '') return
 
    console.log('input.value' , input.value);

    var obj = {
        id: Date.now(),
        text: input.value,
        status: false,

    }

    todos.push(obj);

    localStorage.setItem('todos' , JSON.stringify(todos));

    rendetTodo()    
    
}

function rendetTodo(){
    // ul.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
        var li = document.createElement('li');
        li.innerText = todos[i].text;
        ul.appendChild(li);
        
    }

}



