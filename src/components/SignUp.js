import "./LogIn.css";
import React, { useState } from "react";
import { useAtom } from "jotai";
import { userIdAtom } from "../State/State";

const SignUp = () => {
    const [status, setStatus] = useState("initial");
    const [_, setUserId]= useAtom(userIdAtom)
  const handleSubmit = (e) => {
      setStatus("submitting");
      e.preventDefault();
      const signUpBody = {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        username:e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value
    }
      fetch("http://localhost:8080/register",{
          method: "POST",
          body: JSON.stringify(signUpBody),
          headers: {"content-type": "application/json"}
          
      })
      .then(res =>res.json())
      .then(result => {
          setUserId(result)

      })

      console.log(signUpBody);
  };

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Muse</div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Fist Name </label>
              <input type="text" name="firstName" required />
            </div>

            <div className="input-container">
              <label>Last Name</label>
              <input type="text" name="lastName" required />
            </div>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="username" required />
            </div>
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

export default SignUp;
