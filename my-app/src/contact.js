import React, { useState } from "react";
import styles from "./Contact.module.css";
import Alert from 'react-bootstrap/Alert';

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    state: "",
    resume: null,
  });

  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("");

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.gender ||
      !formData.state ||
      !formData.resume
    ) {
      setVariant("warning");
      setMessage("Please fill all the details!");
    } else {
      setVariant("success");
      setMessage("Form submitted successfully!");
      // setFormData.name(""),
      // setFormData.email(""),
      // setFormData.phone(""),
      // setFormData.gender(""),        cnnot do it like this as setformdata is a funct not an object
      // setFormData.state(""),
      // setFormData.resume(null);

      setFormData({
        name: "",
        email: "",
        phone: "",
        gender: "",
        state: "",
        resume: null,
      });
      

    }

    // Set timeout to clear message after 3 seconds
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };
  //becaause you were using a component inside setmessage settimeout was not working as intended               
  // The issue with setTimeout(() => setMessage(''), 3000); not working is due to how React handles state updates when JSX elements are stored in state.
  // Why Isn't setTimeout Working?
  // JSX Elements in State:
  // The message state stores JSX (<Alert>...</Alert>), not just a string.
  // React does not re-render when you set setMessage('') because an empty string is not the same as clearing the component tree.

  return (
    <>
      {message && <Alert key={variant} variant={variant}>{message}</Alert>}
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.formBox}>
          <h2 style={{ color: "#fff", marginBottom: "15px", fontSize: "24px" }}>
            Get in touch with us!
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className={styles.inputField}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={styles.inputField}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className={styles.inputField}
          />

          <div className={styles.genderContainer}>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              Female
            </label>
          </div>

          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className={styles.selectField}
          >
            <option value="">Select State</option>
            <option value="New York">New York</option>
            <option value="California">California</option>
            <option value="Texas">Texas</option>
          </select>

          <input
            type="file"
            name="resume"
            onChange={handleChange}
            className={styles.inputField}
          />

          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
