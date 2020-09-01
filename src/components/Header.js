import React from "react";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();

  return (
    <div className="navbar_container">
      <div className="nav_item" onClick={() => history.push("/")}>
        Learner details
      </div>
    </div>
  );
}

export default Header;
