    // Model Section

    let todos;
    const savedTodos = JSON.parse(localStorage.getItem('todos'));

    if (Array.isArray(saveTodos)) {
        todos = saveTodos;
    } else {
        todos = [{
            title: 'Wash Car',
            dueDate: '19-07-2022',
            id: 'id1' },
            {
            title: 'Sell Car',
            dueDate: '22-07-2022',
            id: 'id2' }
        ];
    }


    render();

    // Creates a todo

    function createTodo(title, dueDate) {
        const id = '' + new Date().getTime();
        todos.push({
           title: title,
           dueDate: dueDate,
           id: id 
        });

        saveTodos();
    }

    // deletes a todo

    function removeTodo(idToDelete) {
        todos = todos.filter(function (todo) {
            if (todo.id === idToDelete) {
               return false; 
            } else {
                return true;
            }
        });

        saveTodos();
    }

    function saveTodos() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    // Controller section

    function addTodo() {
        const textbox = document.getElementById('todo-title');
        const title = textbox.value;
        const datePicker = document.getElementById('date-picker');
        const dueDate = datePicker.value;

        createTodo(title, dueDate);

        render();
    };

    function deleteTodo(event) {
        const deleteButton = event.target;
        const idToDelete =deleteButton.id;

        removeTodo(idToDelete);

        render(); 
    }

    // View Section

    function render() {

        // rest our list
        document.getElementById('todo-list').innerHTML ='';

        todos.forEach (function  (todo) {
        const element = document.createElement('div');
        element.innerText = todo.title + ' ' + todo.dueDate;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.style = 'margin-left: 12px;';
        deleteButton.onclick = deleteTodo;
        deleteButton.id = todo.id;
        element.appendChild(deleteButton);

        const todoList = document.getElementById('todo-list');
        todoList.appendChild(element);
    });
    };