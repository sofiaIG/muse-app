import { paste } from "@testing-library/user-event/dist/paste";
import React from "react";
import Post from "./Post";
import './PostItems.css';

const PostItems=({post})=>{

    return(
        <div className="container">
            <p className="title">{post.title}</p>
            <p>{post.text}</p>
            <p>by {post.user.userName}</p>
            <br></br>

        </div>
    )

}

export default PostItems;