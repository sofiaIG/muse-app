import React from "react";
import Post from "./Post";

const PostItems=({post})=>{
    
    return(
        <ul>
            <li>{post.title}</li>
            <li>{post.text}</li>
        </ul>
    )
}

export default PostItems;