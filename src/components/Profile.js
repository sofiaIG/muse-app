import React, {useEffect, useState} from "react";
import UserItem from "./UserItem";
import { useParams } from "react-router-dom";


const Profile=()=>{
    const [user, setUser] = useState(null)
    const params = useParams();
    useEffect(()=>{
        getUser(params.userId)
}, [params.userId])
    
      const getUser = function(userId){
        fetch(`http://localhost:8080/users/${userId}`)
        .then(res =>res.json())
        .then(result =>setUser(result))
      }


    return(
    <div>
        <ul>
            {user&&<UserItem user = {user}/>}
        </ul>
    </div>
    )
}

export default Profile;