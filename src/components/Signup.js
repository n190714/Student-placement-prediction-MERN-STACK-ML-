import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"; // Import the CSS file where your styles are defined

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/signup", {
        email,
        password,
      })
      .then((res) => {
        if (res.data === "exist") {
          alert("User already exists");
        } else if (res.data === "notexist") {
          history("/home", { state: { id: email } });
        }
      })
      .catch((e) => {
        alert("Wrong details");
        console.log(e);
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="login-box">

      <h1>Signup</h1>

      <form onSubmit={submit}>
        <div className="user-box">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <label>Password</label>
        </div>
        <input type="submit" value="Submit" />
      </form>

      <br />
      <p>OR</p>
      <br />

      <Link to="/">Login Page</Link>
    </div>
  );
}

export default Login;
