import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ app }) => {
  const navigate = useNavigate();
  
  // reroute vers login si utilisateur essaie de rentrer dans le web :
  //https://developer.mozilla.org/en-US/docs/Web/API/Location#location_anatomy
  useEffect(() => {
    if ("/Login" != window.location.pathname) {
      navigate("/Login");
    }
  }, [])
  

  const handleChange = async (e) => {
    app.setUser({ ...app.user, [e.target.name]: e.target.value });
  };

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       `http://localhost:8888/user/signin/${app.user.username}/${app.user.mdp}`
  //     );
  //     console.log(response);
  //     if (response.data) {
  //       app.setAuth(true);
  //       app.setUser({
  //           username: response.data.username,
  //           nom: response.data.nom,
  //           prenom: response.data.prenom,
  //           courriel: response.data.courriel,
  //           mdp: response.data.mdp,
  //       });
  //        app.setId(response.data.id);
  //       navigate("/Dashboard");
  //     } else {
  //       setError(true);
  //     }
  //   } catch (err) {
  //     console.error("Login failed", err);
  //     setError(true);
  //   }
  // };

  return (
    <div className="mt-5">
      <h2>Login</h2>
      <div className="box items">
        <form onSubmit={handleLogin}>
        <label htmlFor="username">
          <b>Username</b>
        </label>
        <input
        className="input"
          type="text"
          placeholder="Entrer Username"
          name="username"
          onChange={handleChange}
          
        ></input>
        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
        className="input"
          type="text"
          placeholder="Entrer Password"
          name="mdp"
          onChange={handleChange}
        ></input>
        <button id="login-button" type="submit">Login</button>
        </form>
        {app.error && <p style={{ color: "red" }}>Invalid credentials</p>}
      </div>
      <div className="container">
        <p>
          Don't have an account? <Link to="/Inscription">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
