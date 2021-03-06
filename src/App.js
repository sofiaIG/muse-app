import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useAtom } from "jotai";
import { userIdAtom } from "./state/State";
import Header from "./components/Header";

import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Post from "./components/Post";
import Profile from "./components/Profile";
import CreatePost from "./components/CreatePost";
import "./components/HeaderLinks.css"
import CommentBox from "./components/CommentBox";

const App = () => {
  const [userId] = useAtom(userIdAtom);
  const isLoggedIn = userId !== null;

  return (
    <BrowserRouter>
      <Header />
      {isLoggedIn ? (
        <Routes>
            <Route path="/posts" element={<Post />} />
            <Route path="/profile/:userId" element={<Profile />} />
            <Route path="/createPost" element={<CreatePost />} />
            <Route path="/post" element={<CommentBox />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="signUp" element={<SignUp />} />
          <Route path="logIn" element={<LogIn />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
