import React from "react";
import * as Icon from "react-feather";
import ContactForm from "../ContactForm/";
import "./style.css";

const contactDetails = [
 {
  title: "Phone",
  text: "+49 (0) 30 340 65 918\nSkype: neurocat GmbH",
  link: null,
  icon: "Phone",
 },
 {
  title: "Address",
  text: "IGZ Berlin-Adlershof\nRudower Chaussee 29\n12489 Berlin Germany",
  link: "https://www.google.de/maps/place/Rudower+Chaussee+29,+12489+Berlin",
  icon: "MapPin",
 },
 {
  title: "Email",
  text: "meow@neurocat.ai",
  link: "mailto:meow@neurocat.ai",
  icon: "Mail",
 },
];

function Footer() {
 return (
  <div className="footer">
   <div className="contact">
    <h2>Contact Details</h2>
    {contactDetails.map((contact) => (
     <ContactBlock data={contact} key={contact.title} />
    ))}
   </div>
   <ContactForm />
  </div>
 );
}

const ContactBlock = ({ data }) => {
 const IconTag = Icon[data.icon];
 return (
  <div className="contact-details">
   <div className="details-icon">
    <IconTag />
   </div>
   {data.link ? (
    <a href={data.link} target="_blank" rel="noreferrer">
     <div className="contact-details-block">
      <h3>{data.title}</h3>
      <p>{data.text}</p>
     </div>
    </a>
   ) : (
    <div className="contact-details-block">
     <h3>{data.title}</h3>
     <p>{data.text}</p>
    </div>
   )}
  </div>
 );
};

export default Footer;
