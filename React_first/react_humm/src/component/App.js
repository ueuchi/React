import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          {/* labelとidの名前を一緒にしないとタイトルをクリックした時にinputタグにフォーカスが当たらない */}
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle"/>
        </div>
        <div className="form-group">
          <label htmlFor="formEventTitle">ボディー</label>
          <textarea className="form-control" id="formEventTitle"/>
        </div>
        <button className="btn btn-primary">イベントを作成する</button>
        <button className="btn btn-danger">全てのイベントを削除する</button>
        <h4>イベント一覧</h4>
        <table className="table table-hover">
          <thead>
              <tr>
                <th>ID</th>
                <th>タイトル</th>
                <th>ボディー</th>
                <th>削除</th>
              </tr>
          </thead>
          <tbody>
          </tbody>

        </table>
      </form>
    </div>
  );
}

export default App;
