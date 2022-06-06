import React from "react";
import { useAtom } from "jotai";
import { NavLink } from "react-router-dom";
import { userIdAtom } from "../State/State";
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
          <li><NavLink className={"link"} to="posts" children = "posts"/></li>
          <li><NavLink className={"link"} to= "profile" children = "profile"/></li>
          <li><NavLink className={"link"} to = "createPost" children = "createPost"/></li>
          <button className={"logout"} onClick={handleClick}>Log out</button>
        </ul>
        :       <ul>
        <li>
          <NavLink to="logIn" children="logIn" />
        </li>
        <li>
          <NavLink to="signUp" children="signUp" />
        </li>
      </ul>
    )
}

export default HeaderLinks;