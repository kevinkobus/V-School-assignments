import React from "react";

function Info() {
  return (
    <section className="info">
      <div className="headshot">
        <img src="kermit-headshot.jpg" alt="headshot pic" id="headshot-photo" />
      </div>
      <div className="name-title">
        <h1 className="name">Kermit The Frog</h1>
        <h3 className="title">Frontend Pond Dweller</h3>
        <h4 className="website">kermit.website</h4>
      </div>
      <div className="buttons">
        <button id="emailbtn" img="Mail.png">
          Email
        </button>
        <button id="linkedinbtn" img="Vector.png">
          LinkedIn
        </button>
      </div>
    </section>
  );
}

export default Info;
