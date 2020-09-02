import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function LogIn() {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [match, setMatch] = useState(false)
  const [routeId, setRouteId] = useState('')

  const history = useHistory();
  
  useEffect(() => {
    let id = localStorage.getItem('routeId')
    setRouteId(id)
  },[])

  const handleLogIn = (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users"));
    if (
      users && users.find((user) => user.userName === userName && user.pass === pass)
    ) {
      localStorage.setItem("token", true);
      history.push(`${routeId}/profile`)
      setMatch(false)
    } else {
      setMatch(true)
      console.log("Inncorrect credentials");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Log In</h2>
      <form onSubmit={handleLogIn} className="signup">
        <div className="input-filed">
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="sign-child"
          />
        </div>
        <div className="input-filed">
          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="sign-child"
          />{" "}
        </div>
        <div className="input-filed btn-class">
          {userName && pass ? (
            <button type="submit" className="input-filed submit-btn">
              LogIn
            </button>
          ) : (
            <button disabled className="input-filed submit-btn">
              LogIn
            </button>
          )}
          <br/>
          <h4>Don't have account?</h4>
           <button onClick={() => history.push("/signup")} className="input-filed submit-btn">
              SignUp
            </button>
          {match && <h4>Incorrect password</h4>}
        </div>
      </form>
    </div>
  );
}

export default LogIn;