import React, { useState, useEffect } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { useAtom } from "jotai";
import { userIdAtom } from "../state/State";
import "./CommentBox.css";


const CommentBox =({postId})=>{
    const[comments, setComments]= useState([]);
    const [userId] = useAtom(userIdAtom) 


      useEffect(()=>{
        getComments()
}, [])
    
      const getComments = function(){
        fetch(`http://localhost:8080/comments/${postId}`)
        .then(res =>res.json())
        .then(result =>setComments(result))
      }


    const handleSubmit = (e) => {
        e.preventDefault();
        const commentBody = {
          content: e.target.content.value,
          post_id: postId,
          user_id: userId
        };
        fetch("http://localhost:8080/comment", {
          method: "POST",
          body: JSON.stringify(commentBody),
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then(() => getComments())
      };

    const commentItems = comments.map((comment=>
      <div className="box" key={comment.id}>
        <NavLink to={"/profile/"+comment.user.id }children ={comment.user.userName} />
        <br></br>
        {comment.content}
      </div>))

      

    return(
        <>
        {commentItems}
        <form onSubmit={handleSubmit}>
          <input required={true}  id = "1" type= "text" name ="content"/>
          <button className = "comment" type="submit">Comment</button>
        </form>
        </>
        
    )



}

export default CommentBox;