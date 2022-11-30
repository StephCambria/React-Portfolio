import React, { useState } from "react";
import "../styles/Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { validateEmail } from "../utils/helpers";

// Contact will contain a simple form

function Contact() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "userName") {
      setUserName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      setErrorMessage("Invalid email or username");
      return;
    }

    setEmail("");
    setUserName("");
  };

  return (
    <div className="contactBody">
      <div>
        <label for="exampleFormControlInput1" className="form-label">
          Email Me!
        </label>
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          className="form-control"
          placeholder="name"
        />
        <br></br>
        <input
          name="email"
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
      <br></br>
      <button className="sendBtn" onClick={handleFormSubmit}>
        Send
      </button>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}

      <div className="contactText">
        <br></br>
        <span>steph.cambria.art@gmail.com</span>
        <br></br>
        <span>https://github.com/StephCambria</span>
      </div>
    </div>
  );
}

export default Contact;
