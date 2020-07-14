`use strict`

{
  // 入力したTodoタスクの一覧を保持する配列を定義する
  const todos = [];

  /* 
  HTMLのID値を使って以下のDOM要素を取得する
  ・入力ボックス
  ・追加ボタン
  ・Todoリストを一覧表示するtable要素
  ・ラジオボタン
  */
  const inputBox = document.getElementById('input-todo-box');
  const addButton = document.getElementById('add-button');
  const tableBody = document.getElementById('todo-body');
  const radioButton = document.getElementsByName('radio1');

  // 「追加」ボタンがクリックされたときの処理を実装する
  addButton.addEventListener('click', () => {
    const todo = { id: todos.length, comment: inputBox.value, status: '作業中' }
    inputBox.focus();

    // 空文字が入力されたときの処理
    if (inputBox.value === '') {
      alert('タスクを入力してください');
      return;
    }
    // todoオブジェクトがtrueの場合の処理
    if (todo) {
      todos.push(todo);
      inputBox.value = '';
      showTodos(todos);
      filterTodos();
    }
  });

  // 「todos」の中身を一覧表示するための関数を用意する
  const showTodos = (todos) => {
    tableBody.textContent = '';

    // 値を１つずつ取り出し、繰り返し処理を実行
    todos.forEach((todo) => {

      // tr要素を作成し、tableBodyの子要素として追加
      const tableRecord = document.createElement('tr');
      tableBody.appendChild(tableRecord);

      // tr要素に追加するためのtd要素をそれぞれ作成
      const tableId = document.createElement('td');
      const tableComment = document.createElement('td');
      const tableStatus = document.createElement('td');
      const tableAction = document.createElement('td');

      // 要素の中身のテキストを表示するため、オブジェクトの要素から取得
      tableId.textContent = todo.id;
      tableComment.textContent = todo.comment;

      // td要素をtr要素の子要素として追加
      tableRecord.appendChild(tableId);
      tableRecord.appendChild(tableComment);
      tableRecord.appendChild(tableStatus);
      tableRecord.appendChild(tableAction);

      //td要素の子要素として関数を呼び出す
      tableStatus.appendChild(createStatusButton(todo));
      tableAction.appendChild(createDeleteButton(todo.id));
    });
  };

  //「状態」ボタンを作成する関数
  const createStatusButton = (todo) => {
    const statusButton = document.createElement('button');
    statusButton.textContent = todo.status;
    statusButton.addEventListener('click', () => {
      if (todo.status === '作業中') {
        todo.status = '完了';
        filterTodos();
      } else {
        todo.status = '作業中';
        filterTodos();
      }
    });
    return statusButton;
  };

  //「削除」ボタンを作成する関数
  const createDeleteButton = (id) => {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    deleteButton.addEventListener('click', () => {
      const targetIndex = todos.findIndex(todo => {
        return todo.id === id;
      });
      todos.splice(targetIndex, 1);
      todos.forEach((value, index) => {
        todos[index].id = index;
      });
      filterTodos();
    });
    return deleteButton;
  };

  //ラジオボタン押下時の「表示・非表示」の機能を管理する関数
  const filterTodos = () => {
    const radioForm = document.getElementById('radio-form');
    let changeOfStatus = radioForm.radio1.value;
    switch (changeOfStatus) {
      case 'all':
        showTodos(todos);
        break;
      case 'working':
        const workingTodos = todos.filter(todo => { return todo.status === '作業中' });
        showTodos(workingTodos);
        break;
      case 'done':
        const doneTodos = todos.filter(todo => { return todo.status === '完了' });
        showTodos(doneTodos);
        break;
    }
  };

  //ラジオボタンを押した際の挙動
  radioButton.forEach((status, number) => {
    radioButton[number].addEventListener('change', () => {
      filterTodos();
    });
  });  
}