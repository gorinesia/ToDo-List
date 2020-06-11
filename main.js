`use strict`

{
///// ToDoリストのの作成  1.タスク追加機能 /////


  // 入力したTodoタスクの一覧を保持する配列を定義する
  const todos = [];

  // idを保持するための変数を定義する
  let nextId = 1;


  // HTMLのID値を使って以下のDOM要素を取得する //

  // 入力ボックスの要素を取得
  const inputBox = document.getElementById('input-todo-box');
  // 追加ボタンの要素を取得
  const addButton = document.getElementById('add-button');
  // Todoリストを一覧表示するtable要素を取得
  const tableBody = document.getElementById('todo-body');



  // 「追加」ボタンがクリックされたときの処理を実装する //

  //「追加」ボタンがクリックされたとき
  addButton.addEventListener('click', (event) => {
    // 「ID」「コメント」「状態」「動作」プロパティを持つオブジェクトを定義
    const todo = { id: nextId, comment: inputBox.value, status: '作業中', action: '削除' }
    // idの番号に１ずつ足していく
    nextId++;
    // 入力ボックスの中身を空にする
    inputBox.value = '';
    // 再度入力しやすくするためにフォーカス
    inputBox.focus();

    // todoオブジェクトになにもなかった場合のことを避けるための処理も用意する //

    // もしtodoオブジェクトがtrueであれば、以下の処理
    if (todo) {
      // 配列todosの末尾にtodoオブジェクトを追加
      todos.push(todo);
      // 新しい要素が追加されたら、それを反映して表示するために関数を実行
      showTodos();
    }
  });


  // 「todos」の中身を一覧表示するための関数を用意する //

  // 関数式を定義
  const showTodos = () => {
    // 最初の子要素がある限り以下の処理を実行
    while (tableBody.firstChild) {
      //tableBodyに入っている子要素を一旦全部削除
      tableBody.removeChild(tableBody.firstChild);
    }

    // 値を１つずつ取り出し、繰り返し処理を実行
    todos.forEach((todo) => {

      // tbody要素に追加するためのtr要素を作成する //

      // tr要素を作成
      const tableRecord = document.createElement('tr');
      // tableBodyの子要素としてtrを追加
      tableBody.appendChild(tableRecord);


      // tr要素に追加するためのtd要素をそれぞれ作成する //

      // 「ID」を表示するためのtd要素を作成
      const tableId = document.createElement('td');
      // 「コメント」を表示するためのtd要素を作成
      const tableComment = document.createElement('td');
      // 「状態」を表示するためのtd要素を作成
      const tableStatus = document.createElement('td');
      // 「アクション」を表示するためのtd要素を作成
      const tableAction = document.createElement('td');

      // 状態を扱うための２つのボタンを作成する //

      // 「作業中」を表示するためのボタン要素を作成
      const statusButton = document.createElement('button');
      // 「削除」を表示するためのボタン要素を作成
      const deleteButton = document.createElement('button');


      // 要素の中身のテキストを表示するため、オブジェクトの要素から取得する //

      // 「ID要素」の中身をオブジェクトのidプロパティから取得
      tableId.textContent = todo.id;
      // 「コメント要素」の中身をオブジェクトのcommentプロパティから取得
      tableComment.textContent = todo.comment;
      // 「状態要素」の中身をオブジェクトのstatusプロパティから取得
      statusButton.textContent = todo.status;
      // 「動作要素」の中身をオブジェクトのstatusプロパティから取得
      deleteButton.textContent = todo.action;


      // td要素をtr要素の子要素として追加する //

      // 「ID」の要素を追加
      tableRecord.appendChild(tableId);
      // 「コメント」の要素を追加
      tableRecord.appendChild(tableComment);
      // 「状態」の要素を追加
      tableRecord.appendChild(tableStatus);
      // 「アクション」の要素を追加
      tableRecord.appendChild(tableAction);

      // td要素の子要素としてボタン要素を追加する //
    
      // 「作業中」のボタンを追加
      tableStatus.appendChild(statusButton);
      // 「削除」のボタンを追加
      tableAction.appendChild(deleteButton);
    });
  };
}