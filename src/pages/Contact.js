import React from "react";
import "../styles/Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import { validateEmail } from "../utils/helpers";

// Contact will contain a simple form

function Contact() {
  return (
    <div className="contactBody">
      <div>
        <label for="exampleFormControlInput1" className="form-label">
          Email Me!
        </label>
        <input type="name" className="form-control" placeholder="name" />
        <br></br>
        <input
          type="email"
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
      <button className="sendBtn">Send</button>

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
