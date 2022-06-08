import React, {useState, useEffect} from "react";
import PostItems from "./PostItems";

const Post =()=>{

    const [posts, setPosts] = useState([])
    useEffect(()=>{
        getPosts()
}, [])
    
      const getPosts = function(){
        fetch("http://localhost:8080/posts")
        .then(res =>res.json())
        .then(posts =>setPosts(posts))
      }

    
    const postItems = (posts || []).map((post, key)=>{
        return <PostItems post = {post} key = {key} posts = {posts}/>
    })

    return(

        
    <div>
        <ul>
            {postItems}
        </ul>
    </div>
    )

}

export default Post;