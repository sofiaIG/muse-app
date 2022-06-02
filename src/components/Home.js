import React, {useState, useEffect} from 'react';
import { BrowserRouter, HashRouter, NavLink, Route, Routes } from 'react-router-dom';
import Post from './Post';
import Profile from './Profile';

const Home = ({posts, user})=> {

    console.log("home    "+user);
    console.log("posts  " + posts);


  return (
    <div>
      <BrowserRouter>
      <header>
        <ul>
          <li><NavLink to="posts" children = "posts"/></li>
          <li><NavLink to= "profile" children = "profile"/></li>
        </ul>
      </header>
      <Routes>
        <Route path = "posts" element={<Post posts = {posts}/>}/>
        <Route path = "profile" element= {<Profile user = {user}/>}/>
      </Routes>
      </BrowserRouter>

    
    </div>
  );
}

export default Home;