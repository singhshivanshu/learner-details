import React from "react";
import Avatar from "react-avatar";

function ProfileCard(props) {
  const data = props.data;
  return (
    <div className="profile-card">
      <Avatar name={props.data.name} round color="black" />
      <h1>{props.data.name}</h1>
      <div className="table">
        <table>
          <tbody>
            <tr>
              <th>E-mail</th>
              <td>{data.email}</td>
            </tr>
            <tr>
              <th>GitHub</th>
              <td>{data.github}</td>
            </tr>
            <tr>
              <th>LinkedIn</th>
              <td>{data.linkedIn}</td>
            </tr>
            <tr>
              <th>Contact</th>
              <td>{data.phone}</td>
            </tr>
            <tr>
              <th>Attendence</th>
              <td>{data.attendence}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProfileCard;
