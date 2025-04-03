import "react";
import "./Auth.css";
import { Link } from "react-router-dom";
function Inscription() {
  return (
    <div className="mt-5">
      <h2>Inscription</h2>
      <div className="box items">
        <label for="username">
          <b>Username</b>
        </label>
        <input type="text" placeholder="Entrer Username" required></input>
        <label htmlFor="firstname">
          <b>Firstname</b>
        </label>
        <input type="text" placeholder="Entrer Firstname" required></input>
        <label htmlFor="lastname">
          <b>Lastname</b>
        </label>
        <input type="text" placeholder="Entrer Firstname" required></input>
        <label htmlFor="lastname">
          <b>Password</b>
        </label>
        <input type="text" placeholder="Entrer Lastname" required></input>
        <div className="pad">
        <button type="submit" class="registerbtn">
          Register
        </button>
        </div>
      </div>
      <div className="container">
        <p>
          Already have an account? <Link to="/Login">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default Inscription;
