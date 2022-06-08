import React from "react";

const UserItem = ({user})=>{
    return(
        <>
        <h1>{user.firstName} {user.lastName}</h1>
        <h2>{user.bio}</h2>
        <p>Artists I am currently listening to: {user.currentlyListeningTo}</p>
        <p>Favorite Artists: {user.favouriteArtists}</p>

        </>
    )
}

export default UserItem;