import React from 'react';
import "./Posts.css"

const Posts = ({username, text}) =>{
    return(
        <div className="post">
            <div className="post__body" style={{display:"flex", flexDirection:"column"}}>
                <h3>{username}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Posts
