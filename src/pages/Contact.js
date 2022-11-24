import React from "react";
import "../styles/Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Contact will contain a simple form
// Needs event listeners
// Needs mailto

function Contact() {
  return (
    <div className="contactBody">
      <div>
        <label for="exampleFormControlInput1" class="form-label">
          Email Me!
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div>
        <label for="exampleFormControlTextarea1" class="form-label">
          
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          placeholder="Questions, comments, concerns..."
          rows={5}
        ></textarea>
      </div>
      <button className="sendBtn">Send</button>
    </div>
  );
}

export default Contact;
