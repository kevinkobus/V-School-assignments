import React, { useState } from "react";
import BountyForm from "./BountyForm";

function BountyCard(props) {
  const [editToggle, setEditToggle] = useState(false);
  const { headShot, firstName, lastName, status, bounty, type, _id } = props;

  return (
    <div className="card-container">
      {!editToggle ? (
        <>
          <div className="pic-name">
            <img src={headShot} alt="image" className="head-shot" />
            <h3>First Name: {firstName}</h3>
            <h3>Last Name: {lastName}</h3>
          </div>
          <div className="info">
            <h4>Status: {status}</h4>
            <h4>Bounty: ${bounty}</h4>
            <h4>Family: {type}</h4>
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
            family={type}
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
