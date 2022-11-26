import React, { useState } from "react";
import "../styles/Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { validateEmail } from "../utils/helpers";

// Contact will contain a simple form

function Contact() {
  const [email, setEmail] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage("Not a valid email");
      return;
    }
  };
  setEmail("");

  return (
    <div className="contactBody">
      <div>
        <label for="exampleFormControlInput1" className="form-label">
          Email Me!
        </label>
        <input
          type="email"
          value={email}
          onChange={handleInputChange}
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          Mailto="steph.cambria.art@gmail.com"
        />
      </div>
      <div>
        <label for="exampleFormControlTextarea1" className="form-label"></label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          placeholder="Questions, comments, concerns..."
          rows={5}
        ></textarea>
      </div>
      <button className="sendBtn" onClick={handleFormSubmit}>
        Send
      </button>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
