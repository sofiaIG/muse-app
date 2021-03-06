import React, { useEffect } from "react";
import './PostItems.css';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import CommentBox from "./CommentBox";
import { useAtom } from "jotai";
import {userIdAtom } from "../state/State";
import "./CommentBox.css"


const PostItems=({post})=>{
    const [userId] = useAtom(userIdAtom) 
    const [isViewingComments, setIsViewingComments] = useState(false);


    const handleClick=(e)=>{
        e.preventDefault();
        setIsViewingComments(!isViewingComments);
    }
 

    return(
        <div className="box">
            <p>{post.title}</p>
            <p>{post.text}</p>
            <p><NavLink to={`/profile/${post.user.id}`}>{post.user.userName}</NavLink></p>
            <button className="button" onClick={handleClick}>Comments</button>

        {isViewingComments && <CommentBox postId={post.id} />}
        </div>
        
    )


}

export default PostItems;