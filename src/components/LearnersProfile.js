import React, { useState } from "react";
import { data } from "../data/Data";
import BarGraph from "./BarGraph";
import ProfileCard from "./ProfileCard";

function LearnerProfile(props) {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token"))
      ? JSON.parse(localStorage.getItem("token"))
      : false
  );

  let learner = data.find((ele) => ele.id === props.match.params.id);

  const onclickHandler = () => {
        setToken(false)
        localStorage.setItem("token", false)
    }

  let graphData = [
    { name: "First Month", commit: learner.commits.first_month },
    { name: "Second Month", commit: learner.commits.second_month },
    { name: "Third Month", commit: learner.commits.third_month },
  ];

  console.log(graphData);

  return (
    <div className="learner">
      {token === false ? (
        <h1 style={{textAlign:"center"}}>You are not logged in</h1>
      ) : (
        <div className="learner-profile">
          <ProfileCard data={learner} />
          <BarGraph data={graphData} />
        </div>
      )}
      {token === true ? 
      <div style={{textAlign: "center", marginTop: "5%"}}>
        <button
          className="input-filed submit-btn"
          onClick={onclickHandler}
        >
          Log out
        </button>
      </div> : null
      
    }
    </div>
  );
}

export default LearnerProfile;
