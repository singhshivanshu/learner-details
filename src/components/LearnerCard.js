import React, { useState, useEffect } from "react";
import Avatar from "react-avatar";
import { useHistory } from "react-router-dom";


function LearnerCard(props) {
  const [token, setToken] = useState(false)
  const history = useHistory();

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem('token')))
  },[])

  const onClickHandler = () => {
    localStorage.setItem('routeId', props.data.id)
    if(token === true) {
      history.push(`${props.data.id}/profile`)
    }
    else {
      history.push('/login')
    }
  }

  return (
    <div className="learner-card" onClick={onClickHandler}>
      <Avatar name={props.data.name} round color="black" />
      <h3>{props.data.name} </h3>
    </div>
  );
}

export default LearnerCard;
