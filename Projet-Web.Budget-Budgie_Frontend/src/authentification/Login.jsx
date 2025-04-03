import { useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuth }) => {
  const [user, setUser] = useState({
    username: "",
    mdp: ""
  });

  const [error, setError] = useState(false);

  const navigate = useNavigate()

  const handleChange = async (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8888/user/signin/${user.username}/${user.mdp}`
      );
      if (response.data) {
        setAuth(true);
        navigate("/Dashboard");
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Login failed", err);
      setError(true);
    }
  };

  return (
    <div className="mt-5">
      <h2>Login</h2>
      <div className="box items">
        <form onSubmit={handleLogin}>
        <label htmlFor="username">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Entrer Username"
          name="username"
          onChange={handleChange}
          
        ></input>
        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          type="text"
          placeholder="Entrer Password"
          name="mdp"
          onChange={handleChange}
        ></input>
        <button id="login-button" type="submit">Login</button>
        </form>
        {error && <p style={{color: "red"}}>Invalid credentials</p>}
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
