let toDos = [];
let id = 0;
let currentId = 0;
// take common td function
let renderTodoTable = () =>{
    todoList.innerHTML = toDos.map((items) =>{
        return `<tr>
                <td>${items.id}</td>
                <td>${items.InputValue}</td>
                <td>${items.InputDate}</td>
                <td><i class="fa fa-edit" style="font-size:24px;color:green" onclick="editToDo(${items.id})">       
                <i class="fa fa-trash" style="font-size:24px;color:red" onclick="deleteToDo(${items.id})"></td>
                </tr>`
    }).join('');

    // Add event listeners after rendering HTML
    todoList.querySelectorAll('.fa-edit').forEach((btn, index) => {
        btn.onclick = () => editToDo(toDos[index].id);
    });
    todoList.querySelectorAll('.fa-trash').forEach((btn, index) => {
        btn.onclick = () => deleteToDo(toDos[index].id);
    });
}
// add to button
const addToDo = (btn)=>{
    let btnAction = btn.getAttribute(`data-action`);
    if(btnAction === 'add'){
        id++ ;
    let todoInput = {
        // take serial wise id number
        id: id,
        // take random id number
        //id : Math.trunc(Math.random() * 100),
        InputValue : todoValue.value,
        InputDate : todoDate.value,
    };
    toDos.push(todoInput);
    }

    if(btnAction === 'edit'){
        let editBtn = toDos.find((editId) => editId.id === currentId);
        editBtn.InputValue = todoValue.value;
        editBtn.InputDate = todoDate.value;
        addBtn.setAttribute(`data-action`,`add`);
    }
    renderTodoTable();
}
// edit todo
const editToDo = (id) => {
    let modifyToDo = toDos.find((modifyId) => modifyId.id === id);
    if (!modifyToDo) {
        console.error("Todo item not found!");
        return;
    }
    todoValue.value = modifyToDo.InputValue;
    todoDate.value = modifyToDo.InputDate;
    addBtn.setAttribute(`data-action`,`edit`);
    currentId = modifyToDo.id;
};

// delete todo list
const deleteToDo = (id) => {
    let removeTodo = toDos.filter((removeId) => removeId.id !== id);
    toDos = removeTodo;
    renderTodoTable();
};
