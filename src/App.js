import './components/LogIn.css';
import React, {useState, useEffect} from 'react';
import Home from './components/Home';


function App() {
  const [posts, setPosts] = useState("")
  const [user, setUser] = useState("")
  const[userAuth, setUserAuth] = useState("")
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(()=>{
    getPosts();
    getUserAuth();
    getUser()
  }, [])

  const getPosts = function(){
    fetch("http://localhost:8080/posts")
    .then(res =>res.json())
    .then(posts =>setPosts(posts))
  }

  const getUserAuth =function(){
    fetch("http://localhost:8080/userAuth")
    .then(res =>res.json())
    .then(userAu =>setUserAuth(userAu))
  }

  const getUser = function(){
    fetch("http://localhost:8080/users")
    .then(res =>res.json())
    .then(user => setUser(user))
  }

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
     <div className="error">{errorMessages.message}</div>
  );

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
  
    var { uname, pass } = document.forms[0];


  
    // Find user login info
    const username = userAuth[0].email;
    const password = userAuth[0].password;
  
    console.log(username);
    console.log("DB PASSWORD   " + password);
    console.log(pass.value);
    console.log(userAuth);
    console.log(user)

  
    // Compare user info
    if (username && password) {
      if (password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };



  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );




  return (
 
    <div className="app">
      <div className="login-form">
        <div className="title">Muse</div>
        {isSubmitted ? <Home posts = {posts} user = {user} /> : renderForm}
      </div>
    </div>
  
  );
}

export default App;