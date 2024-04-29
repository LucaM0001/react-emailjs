import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMesssage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_0847tkl";
    const templateId = "template_g2c40ly";
    const publicKey = "jWAXqiGmvGwP_3CuE";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Luca Mamitiana",
      message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((res) => {
        console.log("Email send successfully!", res);
        setName("");
        setEmail("");
        setMesssage("");
      })
      .catch((err) => {
        console.log("Error sending email", err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="emailForm">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        cols="30"
        rows="10"
        value={message}
        onChange={(e) => setMesssage(e.target.value)}
      ></textarea>
      <button type="submit">Send Email</button>
    </form>
  );
};

export default EmailForm;
