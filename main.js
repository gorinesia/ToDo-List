(() => {

  const todos = [];
  
  const inputBox = document.getElementById('input-todo-box');
  const addButton = document.getElementById('add-button');
  const listContainer = document.getElementById('todo-list');
  
  addButton.addEventListener('click', (event) => {
    
    const todo = inputBox.value;
    inputBox.value = '';
    
    console.log(todo);
    if (todo) {
      todos.push(todo);
      showTodos();
    }
  });

  const showTodos = () => {
    while(listContainer.firstChild) {
      listContainer.removeChild(listContainer.firstChild);
    }
    todos.forEach((todo, index) => {
      const todoItem = document.createElement('tr');
      const taskNumber = index + 1;

      todoItem.textContent = `${taskNumber} : ${todo}`;
      listContainer.appendChild(todoItem);

      const conditionButton = document.createElement('button');
      conditionButton.textContent = '作業中';
      todoItem.appendChild(conditionButton);

      const deleteButton = document.createElement('button');
      deleteButton.textContent = '削除';
      todoItem.appendChild(deleteButton);
    });
  };

  
})();
