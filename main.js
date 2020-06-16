`use strict`

{
///// ToDoリストのの作成  1.タスク追加機能 /////


  // 入力したTodoタスクの一覧を保持する配列を定義する
  const todos = [];

  // idを保持するための変数を定義する
  let nextId = 1;


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
    // idの番号に１ずつ足していく
    nextId++;
    // 入力ボックスの中身を空にする
    inputBox.value = '';
    // 再度入力しやすくするためにフォーカス
    inputBox.focus();

    // もしtodoオブジェクトがtrueであれば、以下の処理
    if (todo) {
      todos.push(todo);
      showTodos();
    }
  });


  // 「todos」の中身を一覧表示するための関数を用意する //
  const showTodos = () => {
    // 最初の子要素がある限り、tableBodyに入っている子要素を一旦全部削除
    while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.firstChild);
    }

    // 値を１つずつ取り出し、繰り返し処理を実行
    todos.forEach((todo, index) => {

      // tr要素を作成し、tableBodyの子要素として追加する //
      const tableRecord = document.createElement('tr');
      tableBody.appendChild(tableRecord);


      // tr要素に追加するためのtd要素をそれぞれ作成する //
      const tableId = document.createElement('td');
      const tableComment = document.createElement('td');
      const tableStatus = document.createElement('td');
      const tableAction = document.createElement('td');

      // 要素の中身のテキストを表示するため、オブジェクトの要素から取得する //
      tableId.textContent = index;
      tableComment.textContent = todo.comment;


      // td要素をtr要素の子要素として追加する //
      tableRecord.appendChild(tableId);
      tableRecord.appendChild(tableComment);
      tableRecord.appendChild(tableStatus);
      tableRecord.appendChild(tableAction);

      //「状態」ボタンを作成する関数を実行し、returnで値を返す
      const createStatusButton = () => {
        const statusButton = document.createElement('button');
        statusButton.textContent = '作業中';
        tableStatus.appendChild(statusButton);
        return statusButton;
      };
      
      //関数を実行する
      createStatusButton();
      
      //「削除」ボタンを作成する関数を実行し、returnで値を返す
      const createDeleteButton = () => {
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '削除';
        tableAction.appendChild(deleteButton);
        return deleteButton;
      };
      
      //関数を実行する
      createDeleteButton();
    });
  };
}