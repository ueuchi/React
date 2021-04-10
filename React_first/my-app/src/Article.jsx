import React, {useState} from 'react';
import LikeButton from "./LikeButton"

const Article = (props) => {
    const [isPublished, togglePublished] = useState(true)

    return (
        <div>
            <h2>{props.title}</h2>
            <label htmlFor="check">公開状態：</label>
            <input type="checkbox" chacked={isPublished} id="check" onClick={() => togglePublished(!isPublished)}/>
            <LikeButton />
        </div>
    )
}

export default Article