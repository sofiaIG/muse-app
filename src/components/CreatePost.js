import { useAtom } from "jotai";
import React from "react";
import { userIdAtom } from '../state/State';

const CreatePost = ()=>{

    const [userId, setUserId] = useAtom(userIdAtom);


    const handleSubmit = (e) => {
        e.preventDefault();
        const createPost = {
          title: e.target.title.value,
          text: e.target.text.value,
          userId: userId
          
      }
        fetch("http://localhost:8080/post-create",{
            method: "POST",
            body: JSON.stringify(createPost),
            headers: {"content-type": "application/json"}
            
        })
        .then(res =>res.json())
        .then(result => {
  
        })}
    return (
        <div className="app">
          <div className="login-form">
            <div className="title">Create Post</div>
            <div className="form">
              <form onSubmit = {handleSubmit}>
                <div className="input-container">
                  <label>Title </label>
                  <input type="text" name="title" required />
                </div>
                <div className="input-container">
                  <label>Text</label>
                  <input type="text" name="text" required />
                </div>
                <div className="button-container">
                  <input type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      );
}

export default CreatePost;