import React from 'react';
import Article from './Article';
import * as FooBar from './components/FooBar';
import Hoge from './components/Hoge';

const Blog = () => {

//     componentDidMount() {
//         // ボタンがクリックされたらいいねをカウントアップする
//         document.getElementById('counter').addEventListener('click', this.countUp)
//     }

//     componentDidUpdate() {
//         // いいね数が１０に達したらカウントをリセット
//         if (this.state.count >=10) {
//             this.setState({count: 0})
//         }
//     }

//     componentWillUnmount() {
//         // サーバーの負荷がかかりにくくなる
//         document.getElementById('counter').removeEventListener('click', this.countUp)
//     }

// 公開状態を反転させる関数

// countUp = () => {
//     this.setState({ count: this.state.count + 1})
// }

    return (
        <>
            <Article 
            title={"Reactの使い方"} 
            // count={this.state.count}
            />
            <FooBar.Foo />
            <FooBar.Bar />
            <Hoge />
        </>
    )
}

export default Blog