import React from "react";
import './register.css'
import NotionLogo from "../../img/NotionLogo.png"
import { Link } from "react-router-dom";

export default function register() {
  return (
    <div>
      <div className="form_card">
        <div className="title">
          <img className="logo" src={NotionLogo} alt="" />
        </div>

        <form action="">
        <h5>Enter your Name</h5>
          <input type="text" placeholder="enter your name"  name="email" />
            <h5>Enter your Email</h5>
          <input type="text" placeholder="enter your email"  name="email" />
          <h5>Set password</h5>
          <input type="text" placeholder="enter your password"  name="password" />
          <h5>Repeat password</h5>
          <input type="text" placeholder="enter your password"  name="email-input" />
          <button>Register</button>

          <h3>Don't have account? Go to <Link className="linkList" to='/login'>Login</Link></h3>

          
        </form>
      </div>
    </div>
  );
}
