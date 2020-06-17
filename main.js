`use strict`

{
  ///// ToDoリストのの作成  1.タスク追加機能 /////

  // 入力したTodoタスクの一覧を保持する配列を定義する
  const todos = [];

  // HTMLのID値を使って以下のDOM要素を取得する //
  // 入力ボックス
  // 追加ボタン
  // Todoリストを一覧表示するtable要素
  const inputBox = document.getElementById('input-todo-box');
  const addButton = document.getElementById('add-button');
  const tableBody = document.getElementById('todo-body');

  // 「追加」ボタンがクリックされたときの処理を実装する //
  addButton.addEventListener('click', (event) => {
    const todo = { comment: inputBox.value, status: '作業中' }
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
      showTodos();
    }
  });

  // 「todos」の中身を一覧表示するための関数を用意する //
  const showTodos = () => {
    tableBody.textContent = '';

    // 値を１つずつ取り出し、繰り返し処理を実行
    todos.forEach((todo, number) => {

      // tr要素を作成し、tableBodyの子要素として追加
      const tableRecord = document.createElement('tr');
      tableBody.appendChild(tableRecord);

      // tr要素に追加するためのtd要素をそれぞれ作成
      const tableId = document.createElement('td');
      const tableComment = document.createElement('td');
      const tableStatus = document.createElement('td');
      const tableAction = document.createElement('td');

      // 要素の中身のテキストを表示するため、オブジェクトの要素から取得
      tableId.textContent = number;
      tableComment.textContent = todo.comment;

      // td要素をtr要素の子要素として追加
      tableRecord.appendChild(tableId);
      tableRecord.appendChild(tableComment);
      tableRecord.appendChild(tableStatus);
      tableRecord.appendChild(tableAction);

      //td要素の子要素として関数を呼び出す
      tableStatus.appendChild(createStatusButton());
      tableAction.appendChild(createDeleteButton());
    });
  };

  //「状態」「削除」ボタンを作成する関数を実行し、returnで値を返す //
  const createStatusButton = () => {
    const statusButton = document.createElement('button');
    statusButton.textContent = '作業中';
    return statusButton;
  };

  const createDeleteButton = () => {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    return deleteButton;
  };
}