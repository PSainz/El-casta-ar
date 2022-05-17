import React, { useState } from "react";
import { send } from "emailjs-com";

const TEMPLATE_ID = "template_wub1dxz";
const SERVICE_ID = "service_26yf25i";
const USER_ID = "f_3MQYQpNjkFfysX9";

console.log(TEMPLATE_ID);

const FormEmail = () => {
  const [toSend, setToSend] = useState({
    name: "",
    last_name: "",
    email: "",
    phone: "",
    event_type: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(SERVICE_ID, TEMPLATE_ID, toSend, USER_ID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    setToSend({
      name: "",
      last_name: "",
      email: "",
      phone: "",
      event_type: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="Form">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={toSend.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={toSend.last_name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="email"
          placeholder="email"
          value={toSend.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="phone"
          value={toSend.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="event_type"
          placeholder="Event Type"
          value={toSend.event_typeone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="Your message"
          value={toSend.message}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default FormEmail;
