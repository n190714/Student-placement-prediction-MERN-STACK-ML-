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
      await axios.post("http://localhost:8000/", {
        email,
        password,
      })
      .then((res) => {
        if (res.data === "exist") {
          history("/home", { state: { id: email } });
        } else if (res.data === "notexist") {
          alert("User have not signed up");
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

      <h1>Login</h1>

      <form onSubmit={submit}>
        <div className="user-box">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Password</label>
        </div>
        <input type="submit" value="Submit"className="sign-button"  />
      </form>

      <br />
      <p>OR</p>
      <br />

      <Link to="/signup">Signup Page</Link>
    </div>
  );
}

export default Login;
