import React from "react";
import { CONTACT } from "../constants";

function Contact() {
  return (
    <div className="pb-20 border-t border-stone-900 ">
      <h2 className="my-10 text-center text-4xl">Get In Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4"> {CONTACT.address}</p>
        <a className="my-4 cursor-pointer"> {CONTACT.email}</a>
        <p className="my-4"> {CONTACT.phoneNo}</p>
      </div>
    </div>
  );
}

export default Contact;
