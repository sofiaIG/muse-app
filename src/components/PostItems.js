import React from "react";
import './PostItems.css';

const PostItems=({post})=>{

    return(
        <div className="box">
            <p className="title">{post.title}</p>
            <p>{post.text}</p>
            <p>by {post.user.userName}</p>
            <br></br>

        </div>
    )

}

export default PostItems;