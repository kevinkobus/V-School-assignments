import { useState } from "react";
import Badge from "./Badge";

function Form() {
  const [badgeData, setBadgeData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    placeOfBirth: "",
    phone: "",
    favoriteFood: "",
    comments: "",
  });

  const [badgeList, setBadgeList] = useState([]);

  const emptyBadgeData = {
    firstName: "",
    lastName: "",
    email: "",
    placeOfBirth: "",
    phone: "",
    favoriteFood: "",
    comments: "",
  };

  //   function for capturing changes to form inputs
  function handleChange(event) {
    const { name, value } = event.target;
    setBadgeData((prevBadgeData) => {
      return { ...prevBadgeData, [name]: value };
    });
  }

  //   console.log(badgeData);

  //   function for submital of form
  function handleSubmit(event) {
    event.preventDefault();
    // console.log(badgeData)
    setBadgeList((prevBadgeList) => {
      return [...prevBadgeList, badgeData];
    });
    setBadgeData(emptyBadgeData);
    console.log('badgeList:', badgeList)
  }

  const displayBadges = badgeList.map((person) => {
    return <Badge key={person.id} person={person} />;
  });

  return (
    <main className="form-container">
      <form className="badge-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          minLength="3"
          required
          onChange={handleChange}
          value={badgeData.firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          minLength="3"
          required
          onChange={handleChange}
          value={badgeData.lastName}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          minLength="3"
          required
          onChange={handleChange}
          value={badgeData.email}
        />
        <input
          type="text"
          placeholder="Place of Birth"
          name="placeOfBirth"
          minLength="3"
          required
          onChange={handleChange}
          value={badgeData.placeOfBirth}
        />
        <input
          type="tel"
          placeholder="Phone"
          id="phone"
          name="phone"
          minLength="9"
          maxLength="10"
          required
          onChange={handleChange}
          value={badgeData.phone}
        />
        <input
          type="text"
          placeholder="Favorite Food"
          name="favoriteFood"
          minLength="3"
          required
          onChange={handleChange}
          value={badgeData.favoriteFood}
        />
        <textarea
          placeholder="Tell us about yourself"
          name="comments"
          minLength="3"
          required
          onChange={handleChange}
          value={badgeData.comments}
        />
        <button>Submit</button>
      </form>
      <br />
      {displayBadges}
    </main>
  );
}

export default Form;
