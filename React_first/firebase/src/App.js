import React, {useState} from 'react';
import {firebase} from './firebase.js'

function App() {

  const [input, setInput] = useState('')
  const [data, setData] = useState([])

  const add = () => {
    //追加
    //addはdocを自動生成
    firebase.firestore().collection('collectionA').add({
      title: 'タイトル',
      content: input,
    })
    //setはidを自分で決めれる
    // firebase.firestore().collection('collectionA').doc('iddddd').set({
      // title: 'ボタン押した',
      // text: input 
    // })
  }

  const remove = () => {
    //削除
    //idを指定して削除
    firebase.firestore().collection('collectionA').doc('idddddddd').delete()
  }

  const update = () => {
    //更新
    //その場所だけ書き換える
    firebase.firestore().collection('collectionA').doc('idddddddd').update({
      text: '書き換えたよ'
    })
  }

  const getData = async() => {
    // //setData
    // //thenでdoc.data()を指定することで初めてデータが取れる
    //   firebase.firestore().collection('collectionA').doc().get().then(
    //     (doc) => {console,log(doc.data())}
    //   ).catch()
    //   firebase.firestore().collection('collectionA').doc().get().then(
    //     (snapshot) => {
    //       //mapメソッドが使えない場合もある
    //       snapshot.docs.forEach(doc =>
    //         console.log(doc.data()))
            // setData([...data, doc.data()]
            // )
    //     }
    //   ).catch((error) => {console.log(error)})
    // const fechData = await firebase.firestore().collection('collectionA').get()
    // console.log(fechData)
    // fechData.docs.forEach(doc =>
    //   console.log(doc.data()))
    //   setData([...data, doc.data()]
    // )
    //snapshotでデータを取得
    const snapshot = await firebase.firestore().collection('collectionA').get()
    //取得したデータを配列にし、map関数でデータを持ってくる
    const datas = sanpshot.docs.map(doc => doc.data())
    setData(datas)
  }

  //データの監視
  const observe = async () => {
    firebase.firestore().collection('collectionA').onSnapshot(
      //この場合mapは使えない(docsが配列になってない)
      // (docs) => {
      //   docs.forEach(doc =>{
      //     console.log(doc.data())
      //     setData([...data, doc.data()])
      //   })
      // }
      //こうするとdocsが配列になる
      (snapshot) => {
        console.log(snapshot)
        console.log(snapshot.docs)
        const datas = snapshot.docs.map(doc =>{ doc.data()
          setData(datas)
        })
      }
    )
  }
  console.log(data)

  const firestore = () => {
    //データをとる
    return data
  }

  return (
    <div>
      <hi>firebase lesson</hi>
      <input tyoe="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={add}>追加</button>
      <button onClick={remove}>削除</button>
      <button onClick={update}>更新</button>
      <button onClick={getData}>取得</button>
      <button onClick={observe}>監視</button>
      {/* <p>{data[0]?.title}</p> */}
      {data.map(message=><p>{message.title}]{message.content}</p>)}
    </div>
  );
}

export default App;

//async awaitでデータを取得すると簡単
//snapshotでデータを取得
//取得したデータを配列にし、map関数でデータを持ってくる
//ネストされたオブジェクトのフィールドを更新する
//監視をやめるとリアルタイム更新がしなくなる
//サブコレクションで特定のデータをとってくる