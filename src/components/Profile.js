import React from "react";
import UserItem from "./UserItem";

const Profile=({user})=>{

    const userItems = user.map((element, key)=>{
         return <UserItem Item user = {element} key = {key}/>
    })

  

    return(
        <>
        <ul>
            {userItems}
        </ul>
        
        </>
    )
}

export default Profile;