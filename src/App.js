import './App.css';
import React, {useState, useEffect} from 'react';


function App() {
  const [posts, setPosts] = useState("")

  useEffect(()=>{
    getPosts();
  })

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
      {console.log(posts)}
      {/* {console.log(printPosts())} */}

    
    </div>
  );
}

export default App;
