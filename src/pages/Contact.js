
import React, { useState, useEffect } from "react";
import "../App.css";

import { db } from "../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Us</h1>

      <div class="form-group pt-lg-2 pt-3"></div><label for="name">Name</label>
      <input type="text" name="name" class="form-control"  onChange={(e) => setName(e.target.value)} required/>
      

      <div class="form-group pt-lg-2 pt-3"></div><label for="name"> Email</label>
      <input type="email" name="email" class="form-control" onChange={(e) => setEmail(e.target.value)} required/> 
     

      <div class="form-group pt-3"><label>Message</label>
      <textarea name="message" class="form-control" onChange={(e) => setMessage(e.target.value)}required></textarea></div>
      <div class="d-flex align-items-center flex-wrap justify-content-between pt-4"></div>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  )
};

export default Contact;
