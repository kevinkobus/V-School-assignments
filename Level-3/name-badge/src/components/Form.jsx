import { useState} from "react"

function Form() {
    return (
        <main className="form-container">
            <form className="badge-form">
                <input
                type="text"
                placeholder="First Name"
                name="firstName"
                />
                <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                />
                <input
                type="email"
                placeholder="Email"
                name="email"
                />
                <input
                type="text"
                placeholder="Place of Birth"
                name="placeOfBirth"
                />
                <input
                type="tel"
                placeholder="Phone"
                id="phone"
                name="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
                />
                <input
                type="text"
                placeholder="Favorite Food"
                name="favoriteFood"
                />
                <textarea
                placeholder="Tell us about yourself"
                name="comments"
                />
                <button>Submit</button>
            </form>
        </main>
    )
}

export default Form