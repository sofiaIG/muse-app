import React, {useEffect, useState} from "react";
import UserItem from "./UserItem";
import { NavLink } from "react-router-dom";
import { userIdAtom } from "../State/State";
import { useAtom } from "jotai";


const Profile=()=>{
    const [userId] = useAtom(userIdAtom);
    const [user, setUser] = useState(null)
    useEffect(()=>{
        getUser(userId)
}, [])
    
      const getUser = function(userId){
        fetch(`http://localhost:8080/users/${userId}`)
        .then(res =>res.json())
        .then(result =>setUser(result))
      }


    return(
    <div>
        <NavLink to="createPost" children ="createPost"/>
        <ul>
            {user&&<UserItem user = {user}/>}
        </ul>
    </div>
    )
}

export default Profile;