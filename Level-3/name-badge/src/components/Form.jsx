import { useState } from "react";

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

  function handleChange(event) {
    const { name, value } = event.target;
    setBadgeData((prevBadgeData) => {
      return { ...prevBadgeData, [name]: value };
    });
  }

  console.log(badgeData);

  return (
    <main className="form-container">
      <form className="badge-form">
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
          minLength="3"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
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
    </main>
  );
}

export default Form;
