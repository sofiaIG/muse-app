import React from "react";

const Profile=({user})=>{

    const postItems = posts.map((post, key)=>{
        return <PostItems post = {post} key = {key}/>
    })

    const constUserItems = user.map((element, key)=>{
         return <UserItem Item user = {element} key = {key}/>
    })

  

    return(
        <>
        
        </>
    )
}

export default Profile;