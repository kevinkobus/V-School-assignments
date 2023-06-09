import React, { useState } from "react";
import BountyForm from "./BountyForm";

function BountyCard(props) {
  // console.log(props._id)
  const [editToggle, setEditToggle] = useState(false);

  return (
    <div className="card-container">
      {!editToggle ? (
        <>
          <div className="pic-name">
            <img src={props.headShot} alt="image" className="head-shot" />
            <h3>First Name: {props.firstName}</h3>
            <h3>Last Name: {props.lastName}</h3>
          </div>
          <div className="info">
            <h4>Status: {props.status}</h4>
            <h4>Bounty: ${props.bounty}</h4>
            <h4>Family: {props.type}</h4>
          </div>
          <div className="buttons">
            <button
              className="edit-btn"
              onClick={() => setEditToggle((prevToggle) => !prevToggle)}
            >
              Edit
            </button>
            <button
              className="delete-btn"
              onClick={() => props.deleteBounty(props._id)}
            >
              Delete
            </button>
          </div>
        </>
      ) : (
        <>
          <BountyForm
            headShot={headShot}
            firstName={firstName}
            lastName={lastName}
            status={status}
            bounty={bounty}
            family={family}
            _id={_id}
            btnText="Submit Edit"
            submit={props.editBounty}
          />
          <button onClick={() => setEditToggle((prevToggle) => !prevToggle)}>
            Close
          </button>
        </>
      )}
    </div>
  );
}

export default BountyCard;
