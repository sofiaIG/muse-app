import React from "react";
import { useAtom } from "jotai";
import { NavLink } from "react-router-dom";
import { userIdAtom } from "../state/State";
import "./HeaderLinks.css"

const HeaderLinks=()=>{

    const [userId, setUserId] = useAtom(userIdAtom);
    const isLoggedIn = userId !== null;

  const handleClick=(e)=>{
    e.preventDefault()
    setUserId(null)
  }
    return(
        isLoggedIn ?
    <ul className="links">
          <li><NavLink className={"link"} to="posts" children = "Posts"/></li>
          <li><NavLink className={"link"} to= {`profile/${userId}`} children = "Profile"/></li>
          <li><NavLink className={"link"} to = "createPost" children = "Create Post"/></li>
          <button className={"logout"} onClick={handleClick}>Log out</button>
        </ul>
        :       <ul className="links">
        <li>
          <NavLink className={"link"} to="logIn" children="Login" />
        </li>
        <li>
          <NavLink className = {"link"} to="signUp" children="Sign Up" />
        </li>
      </ul>
    )
}

export default HeaderLinks;