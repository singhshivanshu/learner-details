import React from "react";
import { data } from "../data/Data";
import LearnerCard from "./LearnerCard";

function Learners() {

  return (
    <div className="learners-list" >
      {data.map((datum, index) => {
        return <LearnerCard key={index} data={datum} />;
      })}
    </div>
  );
}

export default Learners;
