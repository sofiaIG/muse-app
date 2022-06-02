import React from "react";

const UserItem = ({user})=>{
    return(
        <>
        <h1>{user.firstName} {user.lastName}</h1>
        <h2>{user.bio}</h2>
        </>
    )
}

export default UserItem;