import React, { useState } from "react";
import "./style.css";

function ContactForm() {
 const [name, setName] = useState("");
 const [mail, setMail] = useState("");
 const [phone, setPhone] = useState("");
 const [role, setRole] = useState("");
 const [intrest, setIntrest] = useState("");
 const [testingMethod, setTestingMethod] = useState("");
 const [testingFrequency, setTestingFrequency] = useState();
 const [errorMessage, setErrorMessage] = useState("");
 const [submitted, setSubmitted] = useState(false);

 const isValidForm = () => [name, mail, role, intrest].indexOf("") === -1;

 const handleSubmit = (e) => {
  e.preventDefault();
  if (isValidForm()) {
   const obj = {
    name,
    mail,
    phone,
    role,
    intrest,
    testingMethod,
    testingFrequency,
   };
   alert(JSON.stringify(obj, null, 2));
   setSubmitted(true);
   return;
  }
  setErrorMessage("Please fill out all required values, then resubmit");
 };

 if (submitted) {
  return (
   <div className="contact-form submitted">
    <p>Contact form has been successfuly submitted, thank you.</p>
   </div>
  );
 }
 return (
  <div className="contact-form">
   <form onSubmit={(e) => handleSubmit(e)} className="form">
    <h2>Contact Form</h2>
    <div className="row">
     <label>
      Name*
      <input
       type="text"
       value={name}
       onChange={(e) => setName(e.target.value)}
      />
     </label>
     <label>
      Mail*
      <input
       type="text"
       value={mail}
       onChange={(e) => setMail(e.target.value)}
      />
     </label>
    </div>

    <div className="row">
     <label>
      Phone
      <input
       type="tel"
       value={phone}
       onChange={(e) => setPhone(e.target.value)}
      />
     </label>
     <label>
      Role*
      <input
       type="text"
       value={role}
       onChange={(e) => setRole(e.target.value)}
      />
     </label>
    </div>
    <label>
     Intrest*
     <select value={intrest} onChange={(e) => setIntrest(e.target.value)}>
      <option value="">Select an option</option>
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster">Hamster</option>
      <option value="parrot">Parrot</option>
      <option value="spider">Spider</option>
      <option value="goldfish">Goldfish</option>
     </select>
    </label>
    <br />

    {intrest !== "" ? (
     <div className="row">
      <label>
       How are you currently testing?
       <select
        value={testingMethod}
        onChange={(e) => setTestingMethod(e.target.value)}
       >
        <option value="">Select an option</option>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="cranberry">Cranberry</option>
       </select>
      </label>
      <label>
       How often do you test your models?
       <select
        value={testingFrequency}
        onChange={(e) => setTestingFrequency(e.target.value)}
       >
        <option value="">Select an option</option>
        <option value="all_time">All time</option>
        <option value="never">Never</option>
        <option value="once">Once</option>
       </select>
      </label>
     </div>
    ) : null}
    {errorMessage !== "" ? (
     <div className="error-message">
      <p>{errorMessage}</p>
     </div>
    ) : null}
    <br />

    <input type="submit" value="Submit" />
   </form>
  </div>
 );
}

export default ContactForm;
