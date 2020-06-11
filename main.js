`use strict`

  const todos = [];

  let newId = 1;
  
  const inputBox = document.getElementById('input-todo-box');
  const addButton = document.getElementById('add-button');
  const tablebody = document.getElementById('todo-body');
  
  addButton.addEventListener('click', (event) => {
    
    const todo = {id: newId, comment: inputBox.value, status: '作業中', action: '削除'}
    newId++;
    inputBox.value = '';
    inputBox.focus();
    
    if (todo) {
      todos.push(todo);
      showTodos();
    }
  });

  const showTodos = () => {
    while(tablebody.firstChild) {
      tablebody.removeChild(tablebody.firstChild);
    }
    todos.forEach((todo) => {
      const tableRecord = document.createElement('tr');
      tablebody.appendChild(tableRecord);

      const tableId = document.createElement('td');
      const tablecomment = document.createElement('td');
      const tableStatus = document.createElement('td');
      const tableAction = document.createElement('td');

      const statusButton = document.createElement('button');
      const deleterButton = document.createElement('button');

      
      tableId.textContent = todo.id;
      tablecomment.textContent = todo.comment;      
      statusButton.textContent = todo.status;
      deleterButton.textContent = todo.action;
      
      tableRecord.appendChild(tableId);      
      tableRecord.appendChild(tablecomment);      
      tableRecord.appendChild(tableStatus);      
      tableRecord.appendChild(tableAction);      
      
      tableStatus.appendChild(statusButton);
      tableAction.appendChild(deleterButton);
    });
  };
