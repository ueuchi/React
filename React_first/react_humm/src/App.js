import React, {useState, useEffect} from 'react';

const App = (props) => {
  const [state, setState] =useState(props)
  //name,priceをstateに置き換えることでstate.nameのような記述を省略できる。
  const {name, price} = state

  // 毎回renderされる
  useEffect(() => {
    console.log('this is like componentDidMount or componentDidUpdata')
  })

  //最後に記述した配列内の要素が変わるまでrenderされない。
  useEffect(() => {
    console.log('This callback is for name only.')
  }, [name])
  
  return (
    <>
      <p>現在の{name}は、{price}円です。</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => {setState(props)}}>Reset</button>
      <input value={name} onChange={e => setState({...state, name: e.target.value})}/>
    </>
  );
}
App.defaultProps = {
  name: '',
  price: 1000
}

export default App;