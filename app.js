
var ul = document.getElementById('ul');

var input = document.getElementById('input');

var todos =  JSON.parse(localStorage.getItem('todos')) || [];


function todo() {
    if(input.value.trim() === '') return
 
    // console.log('input.value' , input.value);

    var obj = {
        id: Date.now(),
        text: input.value,
        completed: false,

    }

    todos.push(obj);

    localStorage.setItem('todos' , JSON.stringify(todos));

    renderTodo()    
    
}

function renderTodo(){
    ul.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
        let id = todos[i].id;
        // console.log(id);
        
        var li = document.createElement('li');
        li.innerText = todos[i].text;
        ul.appendChild(li);
        



        // delete btn
        var dlt = document.createElement('button');
        dlt.innerHTML = 'Delete';
        li.appendChild(dlt);
        dlt.addEventListener('click' , function () {
            deleteTodos(id);
        })



        // edit btn

        var edit = document.createElement('button');
        edit.innerHTML = 'Edit';
        li.appendChild(edit);
        edit.addEventListener('click' , function () {
            editTodos(id);
        })

        // status btn
        var status = document.createElement('button');
        if (todos[i].completed === true) {
            status.innerHTML = 'Completed';
        }
        else{
            status.innerHTML = 'Pending';
        }
        li.appendChild(status);

        status.addEventListener('click' , function () {
            changeStatus(id);
        })
    }

}

function deleteTodos(id) {
   var newTodos = [];
   for(let i = 0; i < todos.length; i++){
    if(todos[i].id !== id){
       newTodos.push(todos[i])     
    }
   }
   todos = newTodos;
   localStorage.setItem('todos', JSON.stringify(todos));
   
   renderTodo();
   
}

function editTodos(id) {
    for(let i = 0; i < todos.length; i++){
        if(todos[i].id === id){
            let update = prompt('Edit', todos[i].text);
            todos[i].text = update;
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }
    renderTodo()
}

function changeStatus(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
            if (todos[i].completed === false) {
                todos[i].completed = true
            }
            else{
                todos[i].completed = false;
            }
        }
        
    }
      localStorage.setItem('todos', JSON.stringify(todos));
     renderTodo()
    
}


renderTodo();



