import React from 'react'
import Article from './Article'

class Blog extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const authorName = "Torahack"
        return (
            <div>
                <Article title={"Reactの使い方"} />
                <Article title={"JSXの使い方"} />
                <Article title={"環境構築をしてみよう"} />
            </div>
        )
    }
}

export default Blog