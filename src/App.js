import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter, HashRouter, NavLink, Route, Routes } from 'react-router-dom';
import Post from './components/Post';
import Profile from './components/Profile';

function App() {
  const [posts, setPosts] = useState("")

  useEffect(()=>{
    getPosts();
    console.log(posts)
  }, [])

  const getPosts = function(){
    fetch("http://localhost:8080/posts")
    .then(res =>res.json())
    .then(posts =>setPosts(posts))
  }



  // const printPosts = posts.map((post) =>{
  //   return post;
  // })
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
        <Route path = "profile" element= {<Profile/>}/>
      </Routes>
      </BrowserRouter>

    
    </div>
  );
}

export default App;
