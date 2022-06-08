import React, { useState, useEffect } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { useAtom } from "jotai";
import { userIdAtom } from "../State/State";
import { postIdAtom } from "../State/State";


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
      <div key={comment.id}>
      
      {comment.content}
      <NavLink to={"/profile/"+comment.user.id }children ={comment.user.userName} />
      </div>))

      

    return(
        <>
        {commentItems}
        <form onSubmit={handleSubmit}>
          <input required={true} type= "text" name ="content"/>
          <button type="submit">Comment</button>
        </form>
        {/* <Navigate to = "/post"> </Navigate>
        <form onSubmit={handleSubmit}>
        <div className="box">
            <p className="title">{postSelected.title}</p>
            <p>{postSelected.text}</p>
            <p>by {postSelected.user.userName}</p>
            <div className="comment-container">
              <input type="text" name="content" required />
            </div>

        </div>
        </form> */}
        </>
        
    )



}

export default CommentBox;