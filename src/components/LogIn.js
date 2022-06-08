import "./LogIn.css";
import React, { useState } from "react";
import { useAtom } from "jotai";
import { userIdAtom } from "../state/State";

const LogIn = () => {
  const [status, setStatus] = useState("initial");
  const [_, setUserId] = useAtom(userIdAtom);


const handleSubmit = (e) => {
  setStatus("submitting");
  e.preventDefault();
  const logInBody = {
    email: e.target.email.value,
    password: e.target.password.value,
  };
  fetch("http://localhost:8080/login", {
    method: "POST",
    body: JSON.stringify(logInBody),
    headers: { "content-type": "application/json" },
  })
    .then((res) => res.json())
    .then((result) => {setUserId(result)
    });
  }

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">LogIn</div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Email </label>
              <input type="text" name="email" required />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="password" required />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
