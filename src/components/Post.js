import React from "react";
import PostItems from "./PostItems";

const Post =({posts})=>{

    console.log(posts)
    
    const postItems = posts.map((post)=>{
        return <PostItems post = {post}/>
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