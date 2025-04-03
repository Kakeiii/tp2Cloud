import "react";
import '../css/Dashboard.css';
import { useState, useEffect } from "react";
import axios from "axios"
import { useParams, } from "react-router-dom";
import Navbar from "../navbar/Navbar";


function UserProfile() {

   const {id} = useParams();

 const [user, setUser] = useState({
  username: "",
  nom: "",
  prenom: "",
  courriel: "",
  mdp: ""
 });

 useEffect(() => {
  loadUser();
 },[]);

 const loadUser = async () => {
  const result = await axios.get(`http://localhost:8888/user/viewUser/1`)
  setUser(result.data)
 }


  return (
    <div>
      <Navbar />
      <h2 className="mt-5">My account</h2>

      <div className="card">
  <div className="card-header">
    User name
  </div>
  <div className="card-body centering">
  <th scope="row"><input readOnly type="username" style={{fontWeight: 'bold'}} className="form-control" aria-label="username" placeholder="username" value={user.username}/></th>
  <button>Change username</button>
  </div>
  <div className="card-header">
    First name
  </div>
  <div className="card-body centering">
  <th scope="row"><input readOnly type="firstname" style={{fontWeight: 'bold'}} className="form-control" aria-label="firstname" placeholder="firstname" value={user.prenom}/></th>
  <button>Change firstname</button>
  </div>
  <div className="card-header">
    Last name
  </div>
  <div className="card-body centering">
  <th scope="row">
    <input type="lastname" readOnly style={{fontWeight: 'bold'}} className="form-control" aria-label="lastname" placeholder="lastname" value={user.nom}/></th>
  <button>Change lastname</button>
  </div>
  <div className="card-header">
    Email
  </div>
  <div className="card-body centering">
  <th scope="row"><input readOnly type="email" style={{fontWeight: 'bold'}} className="form-control" aria-label="email" placeholder="email" value={user.courriel}/></th>
  <button>Change email</button>
  </div>
  <div className="card-header">
    Password
  </div>
  <div className="card-body centering">
  <th scope="row"><input type="password" style={{fontWeight: 'bold'}} className="form-control" aria-label="password" placeholder="password" value={user.mdp}/></th>
  <button>Change password</button>
  </div>
</div>

    </div>
  );
}

export default UserProfile;
